// BrainTest sample charts: small, dependency-free SVG/HTML infographics for reports and the dashboard.
// Everything takes a saved result shape from engine.js (results with score/range/bands, items with severity).
(function () {
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // Calm sequential greens, light → deep, so higher bands read as "more" without alarm colours
  const SEQ = ['#e2efe6', '#c3e0cc', '#97c7aa', '#62a389', '#2f6f68', '#1d4f4b'];
  const pickColours = (n) => (n <= 1 ? [SEQ[2]] : Array.from({ length: n }, (_, i) => SEQ[Math.round((i * (SEQ.length - 1)) / (n - 1))]));
  const fmt = (n) => (Math.round(n * 10) / 10).toString();

  // Segmented severity bar: coloured ranges for each band, a marker at the score
  function bandBar(r, opts = {}) {
    const W = opts.width || 560, H = opts.compact ? 34 : 64;
    const [lo, hi] = r.range || [0, Math.max(1, r.score)];
    const span = hi - lo || 1;
    const x = (v) => ((Math.min(hi, Math.max(lo, v)) - lo) / span) * W;
    const bands = r.bands && r.bands.length ? r.bands : [{ min: lo, max: hi, label: '' }];
    const colours = pickColours(bands.length);
    const barY = opts.compact ? 16 : 24, barH = opts.compact ? 10 : 14;
    const segs = bands.map((b, i) => {
      const x0 = x(b.min), x1 = i < bands.length - 1 ? x(bands[i + 1].min) : W;
      const w = Math.max(0, x1 - x0);
      const label = opts.compact ? '' : shorten(b.label, w);
      const active = r.band && r.band.label === b.label;
      return `<rect x="${x0}" y="${barY}" width="${w}" height="${barH}" fill="${colours[i]}"/>`
        + (label ? `<text x="${x0 + w / 2}" y="${barY + barH + 16}" text-anchor="middle" class="cb-band${active ? ' on' : ''}">${esc(label)}</text>` : '');
    }).join('');
    const mx = x(r.score);
    const markerX = Math.min(W - 2, Math.max(2, mx));
    return `<svg class="chart band-bar" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${esc(r.name)}: ${fmt(r.score)}${r.range ? ` out of ${r.range[1]}` : ''}${r.band ? `, ${esc(r.band.label)}` : ''}">
      <defs><clipPath id="cb${uid()}"><rect x="0" y="${barY}" width="${W}" height="${barH}" rx="${barH / 2}"/></clipPath></defs>
      <g clip-path="url(#cb${lastUid})">${segs}</g>
      <path d="M${markerX - 7},${barY - 9} L${markerX + 7},${barY - 9} L${markerX},${barY - 1} Z" fill="#173432"/>
      <line x1="${markerX}" x2="${markerX}" y1="${barY - 2}" y2="${barY + barH + 2}" stroke="#173432" stroke-width="2"/>
    </svg>`;
  }
  let counter = 0, lastUid = 0;
  const uid = () => (lastUid = ++counter);
  const shorten = (label, w) => {
    const max = Math.floor(w / 6.2);
    if (max < 4) return '';
    const s = String(label || '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
    return s.length > max ? s.slice(0, max - 1).trim() + '…' : s;
  };

  // "What contributed most": each question as a row of dots, filled by how strongly it applied
  function symptomStrip(items, opts = {}) {
    const rows = items.filter((it) => it.severity !== null && it.scored);
    const top = opts.top ? [...rows].sort((a, b) => b.severity - a.severity).slice(0, opts.top) : rows;
    return `<div class="symptoms">${top.map((it) => {
      // One dot per answer choice (a 0–100 scale with 5 choices still gets 5 dots)
      const steps = it.levels || Math.round(it.max - it.min) + 1;
      const filled = Math.round(it.severity * (steps - 1));
      return `<div class="sym-row"><span class="sym-text">${esc(it.text)}</span><span class="sym-dots" aria-label="${esc(it.answer)}">${
        Array.from({ length: steps }, (_, i) => `<i class="${i <= filled && filled > 0 ? 'on' : ''}"></i>`).join('')
      }</span><span class="sym-answer">${esc(it.answer)}</span></div>`;
    }).join('')}</div>`;
  }

  // Two-ended sliders for personality traits: never "good vs bad", just where you lean
  const POLES = {
    extraversion: ['Reserved', 'Outgoing'],
    agreeableness: ['Challenging', 'Accommodating'],
    conscientiousness: ['Flexible', 'Organised'],
    emotional_stability: ['Sensitive', 'Steady'],
    intellect_imagination: ['Practical', 'Imaginative'],
  };
  function sliders(results) {
    return `<div class="sliders">${results.map((r) => {
      const [l, rt] = POLES[r.key] || ['Lower', 'Higher'];
      const pct = Math.max(2, Math.min(98, r.pct));
      return `<div class="slider">
        <div class="slider-head"><strong>${esc(r.name)}</strong><span>${esc(r.band ? r.band.label : '')}</span></div>
        <div class="slider-track"><span class="slider-fill" style="left:${Math.min(50, pct)}%;width:${Math.abs(pct - 50)}%"></span><span class="slider-mid"></span><span class="slider-dot" style="left:${pct}%"></span></div>
        <div class="slider-poles"><span>${l}</span><span>${rt}</span></div>
      </div>`;
    }).join('')}</div>`;
  }

  // Holland RIASEC hexagon: neighbouring types are related, the shape shows the pull
  function hexagon(results, opts = {}) {
    const order = ['R', 'I', 'A', 'S', 'E', 'C'];
    const S = opts.size || 300, c = S / 2, R = S * 0.34;
    const byKey = Object.fromEntries(results.map((r) => [r.key, r]));
    const top = [...results].sort((a, b) => b.score - a.score).slice(0, 3).map((r) => r.key);
    const pt = (i, f) => {
      const a = (-90 + i * 60) * (Math.PI / 180);
      return [c + Math.cos(a) * R * f, c + Math.sin(a) * R * f];
    };
    const ring = (f) => order.map((_, i) => pt(i, f).join(',')).join(' ');
    const shape = order.map((k, i) => {
      const r = byKey[k];
      const f = r && r.range ? Math.max(0.04, (r.score - r.range[0]) / (r.range[1] - r.range[0])) : 0.04;
      return pt(i, f).join(',');
    }).join(' ');
    const labels = order.map((k, i) => {
      const [x, y] = pt(i, 1.27);
      const r = byKey[k];
      const name = r ? r.name.replace(/\s*\(.*\)/, '') : k;
      return `<text x="${x}" y="${y - 3}" text-anchor="middle" class="hex-letter${top.includes(k) ? ' on' : ''}">${k}</text><text x="${x}" y="${y + 11}" text-anchor="middle" class="hex-name">${esc(name)}</text>`;
    }).join('');
    return `<svg class="chart hexagon" viewBox="0 0 ${S} ${S}" width="${opts.width || S}" role="img" aria-label="Interest hexagon. Top three: ${top.join(', ')}">
      ${[0.25, 0.5, 0.75, 1].map((f) => `<polygon points="${ring(f)}" fill="${f === 1 ? '#f4f8f3' : 'none'}" stroke="#d6e3d9" stroke-width="1"/>`).join('')}
      ${order.map((_, i) => { const [x, y] = pt(i, 1); return `<line x1="${c}" y1="${c}" x2="${x}" y2="${y}" stroke="#e1eae3"/>`; }).join('')}
      <polygon points="${shape}" fill="#5b9c8433" stroke="#2f6f68" stroke-width="2" stroke-linejoin="round"/>
      ${order.map((k, i) => { const r = byKey[k]; const f = r && r.range ? Math.max(0.04, (r.score - r.range[0]) / (r.range[1] - r.range[0])) : 0.04; const [x, y] = pt(i, f); return `<circle cx="${x}" cy="${y}" r="4" fill="${top.includes(k) ? '#d3976d' : '#2f6f68'}"/>`; }).join('')}
      ${labels}
    </svg>`;
  }

  // Stream fit as stacked bars: what each part (interest, confidence, aptitude, marks) contributes
  function stackedFit(results) {
    const fits = results.filter((r) => r.breakdown).sort((a, b) => b.score - a.score);
    const parts = [['interest', 'Interests', '#2f6f68'], ['confidence', 'Subject confidence', '#62a389'], ['aptitude', 'Thinking skills', '#97c7aa'], ['marks', 'Recent marks', '#ecad83']];
    return `<div class="stack">${fits.map((r) => `<div class="stack-row"><span class="stack-name">${esc(r.name)}</span><span class="stack-bar">${
      parts.map(([k, , col]) => `<i style="width:${Math.max(0, r.breakdown[k])}%;background:${col}" title="${k}"></i>`).join('')
    }</span><span class="stack-score">${r.score}</span></div>`).join('')}
    <div class="stack-legend">${parts.map(([, l, col]) => `<span><i style="background:${col}"></i>${l}</span>`).join('')}</div></div>`;
  }

  // Progress over time with the severity ranges shaded behind the line
  function progressLine(points, scale, opts = {}) {
    const W = opts.width || 620, H = opts.height || 220, padL = 34, padR = 16, padT = 14, padB = 30;
    const [lo, hi] = scale.range || [0, Math.max(...points.map((p) => p.score), 1)];
    const iw = W - padL - padR, ih = H - padT - padB;
    const y = (v) => padT + ih - ((v - lo) / (hi - lo || 1)) * ih;
    const x = (i) => padL + (points.length === 1 ? iw / 2 : (i / (points.length - 1)) * iw);
    const bands = scale.bands && scale.bands.length ? scale.bands : [{ min: lo, max: hi, label: '' }];
    const colours = pickColours(bands.length);
    const zones = bands.map((b, i) => {
      const top = i < bands.length - 1 ? bands[i + 1].min : hi;
      const h = Math.max(0, y(b.min) - y(top));
      // Only label zones tall enough to hold text, so narrow ranges don't overlap
      return `<rect x="${padL}" y="${y(top)}" width="${iw}" height="${h}" fill="${colours[i]}" opacity=".45"/>`
        + (h >= 15 ? `<text x="${padL + iw - 6}" y="${y(top) + 12}" text-anchor="end" class="pl-zone">${esc(shorten(b.label, 160))}</text>` : '');
    }).join('');
    const path = points.map((p, i) => `${i ? 'L' : 'M'}${x(i)},${y(p.score)}`).join(' ');
    const dates = points.map((p, i) => `<text x="${x(i)}" y="${H - 8}" text-anchor="middle" class="pl-date">${esc(new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }))}</text>`).join('');
    return `<svg class="chart progress" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${esc(scale.name)} over time">
      ${zones}
      <text x="${padL - 6}" y="${y(hi) + 4}" text-anchor="end" class="pl-axis">${hi}</text>
      <text x="${padL - 6}" y="${y(lo) + 4}" text-anchor="end" class="pl-axis">${lo}</text>
      <path d="${path}" fill="none" stroke="#173432" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
      ${points.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.score)}" r="5" fill="#fff" stroke="#173432" stroke-width="2"/><text x="${x(i)}" y="${y(p.score) - 10}" text-anchor="middle" class="pl-val">${fmt(p.score)}</text>`).join('')}
      ${dates}
    </svg>`;
  }

  // Shared chart styles, injected once per page
  const CSS = `
    .chart text{font-family:var(--body,'DM Sans',sans-serif)}
    .cb-band{font-size:10px;fill:#7d918a}.cb-band.on{fill:#173432;font-weight:700}
    .symptoms{display:grid;gap:7px}
    .sym-row{display:grid;grid-template-columns:1fr auto 132px;gap:14px;align-items:center;font-size:12px;color:#4d665d;padding:6px 0;border-bottom:1px solid #edf1ec}
    .sym-text{line-height:1.4}
    .sym-dots{display:flex;gap:4px}.sym-dots i{width:11px;height:11px;border-radius:50%;background:#e3ebe4}.sym-dots i.on{background:#2f6f68}
    .sym-answer{font-size:11px;color:#7d918a;text-align:right}
    .sliders{display:grid;gap:18px}
    .slider-head{display:flex;justify-content:space-between;gap:10px;font-size:13px;margin-bottom:8px}.slider-head span{font-size:11px;color:#b06f45;font-weight:700;text-transform:uppercase;letter-spacing:.08em}
    .slider-track{position:relative;height:10px;border-radius:10px;background:#e8efe9}
    .slider-fill{position:absolute;top:0;bottom:0;background:#97c7aa;border-radius:10px}
    .slider-mid{position:absolute;left:50%;top:-3px;bottom:-3px;width:1px;background:#b9cbbf}
    .slider-dot{position:absolute;top:50%;width:18px;height:18px;border-radius:50%;background:#173432;border:3px solid #fff;box-shadow:0 2px 6px #17343240;transform:translate(-50%,-50%)}
    .slider-poles{display:flex;justify-content:space-between;font-size:11px;color:#7d918a;margin-top:6px}
    .hex-letter{font-family:var(--display,Georgia,serif);font-size:16px;font-weight:600;fill:#7d918a}.hex-letter.on{fill:#b06f45}
    .hex-name{font-size:9px;fill:#8ea69b}
    .stack{display:grid;gap:12px}
    .stack-row{display:grid;grid-template-columns:140px 1fr 40px;gap:12px;align-items:center;font-size:13px}
    .stack-bar{display:flex;height:16px;border-radius:8px;overflow:hidden;background:#eef3ee}.stack-bar i{display:block;height:100%}
    .stack-score{font-family:var(--display,Georgia,serif);font-weight:600;font-size:18px;text-align:right}
    .stack-legend{display:flex;flex-wrap:wrap;gap:14px;font-size:11px;color:#6f8379;margin-top:4px}.stack-legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:6px;vertical-align:-1px}
    .pl-zone{font-size:10px;fill:#4d665d;opacity:.8}.pl-axis,.pl-date{font-size:10px;fill:#7d918a}.pl-val{font-size:11px;font-weight:700;fill:#173432}
    @media(max-width:560px){.sym-row{grid-template-columns:1fr auto}.sym-answer{display:none}.stack-row{grid-template-columns:96px 1fr 34px}}
  `;
  function injectStyles() {
    if (document.getElementById('bt-chart-css')) return;
    const el = document.createElement('style');
    el.id = 'bt-chart-css';
    el.textContent = CSS;
    document.head.appendChild(el);
  }

  window.BrainCharts = { bandBar, symptomStrip, sliders, hexagon, stackedFit, progressLine, injectStyles, esc };
})();
