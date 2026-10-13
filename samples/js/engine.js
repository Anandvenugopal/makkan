// BrainTest sample engine: scoring, saved results and report helpers shared by the
// test runner, the report page and the dashboard. Depends on data/tests-data.js.
(function () {
  const DATA = window.TEST_DATA || {};
  const STORE = 'braintest.results.v1';
  const keyOf = (it) => `${it.test.id}:${it.q.id}`;

  // A composite test chains its component tests, then asks any questions of its own (e.g. Stream Selector)
  function resolveTests(id) {
    const t = DATA[id];
    if (!t) return [];
    if (!(t.componentsOf && t.componentsOf.length)) return [t];
    const ownQuestions = (t.sections || []).some((s) => (s.questions || []).length);
    return [...t.componentsOf.flatMap(resolveTests), ...(ownQuestions ? [t] : [])];
  }

  // Every question of a test, flattened with the section/test it belongs to
  function buildItems(rootId) {
    const parts = resolveTests(rootId);
    const items = [];
    parts.forEach((t) => (t.sections || []).forEach((s) => (s.questions || []).forEach((q) => {
      items.push({ test: t, section: s, q, options: q.options || s.options || [] });
    })));
    return { root: DATA[rootId], parts, items };
  }

  const SCALE_NAMES = {
    partA_shaded_count: 'Part A: screener answers in the shaded range',
    partA_sum: 'Part A: symptom score',
    partB_shaded_count: 'Part B: answers in the shaded range',
    DA: 'Deep approach', SA: 'Surface approach',
    total: 'Total score', overall: 'Overall', combined: 'Combined score',
  };

  function prettyKey(k) {
    k = String(k).replace(/_(parent|teacher)$/, '');
    if (SCALE_NAMES[k]) return SCALE_NAMES[k];
    return k
      .replace(/^selfconcept_/, 'Confidence in ')
      .replace(/\bsocsci\b/, 'social science').replace(/\bbiz\b/, 'business').replace(/\blang\b/, 'languages')
      .replace(/\bsci\b/, 'science').replace(/\bmath\b/, 'maths')
      .replace(/_/g, ' ')
      .replace(/^./, (c) => c.toUpperCase());
  }

  function sectionTitle(t, id) {
    const s = (t.sections || []).find((x) => x.id === id);
    return s ? s.title : id;
  }

  // Score a whole test from an answers map ({ "<testId>:<questionId>": value })
  function score(rootId, answers) {
    const { root, parts, items } = buildItems(rootId);

    // Numeric value of an answer, applying reverse keying within the option range
    function valueOf(it) {
      const raw = answers[keyOf(it)];
      if (it.q.correct !== undefined && it.q.correct !== null) return String(raw) === String(it.q.correct) ? 1 : 0;
      const nums = it.options.map((o) => Number(o.value)).filter((n) => !Number.isNaN(n));
      let v = Number(raw);
      if (it.q.reverse && nums.length) v = Math.min(...nums) + Math.max(...nums) - v;
      return v;
    }

    // Which questions a scale covers. Most scales name a section or a factor; a few use
    // conventional keys from the source manuals (totals, rater-specific cut-offs, screener counts).
    function scaleItems(mine, sc) {
      const scored = mine.filter((it) => it.q.scored !== false && it.q.type !== 'number');
      const keys = (sc.sections || [sc.section]).map((k) => k.replace(/_(parent|teacher)$/, '').replace(/_(shaded_count|sum)$/, ''));
      // A whole-test total uses the main scored items, not yes/no follow-ups
      if (keys.some((k) => ['total', 'overall', 'combined'].includes(k))) return scored.filter((it) => !/^followup/.test(it.section.id));
      if (keys.includes('total_difficulties')) return scored.filter((it) => it.q.factor !== 'prosocial');
      return scored.filter((it) => keys.includes(it.section.id) || keys.includes(it.q.factor));
    }

    // Rater-specific scales (SNAP-IV) only apply to the person answering
    function appliesToRespondent(t, sc) {
      const k = sc.section || '';
      if (/_teacher$/.test(k)) return t.respondent === 'teacher';
      if (/_parent$/.test(k)) return t.respondent !== 'teacher';
      return true;
    }

    function finishScale(t, sc, value, name) {
      const band = [...(sc.bands || [])].sort((a, b) => a.min - b.min).filter((b) => value >= b.min).pop();
      const [lo, hi] = sc.range || [0, Math.max(1, value)];
      const profile = (t.scoring.profiles || []).find((p) => p.key === sc.section);
      return { sc, score: value, band, pct: hi > lo ? ((value - lo) / (hi - lo)) * 100 : 0, profile, name: sc.label || sc.name || (profile && profile.name) || name };
    }

    function scoreTest(t, earlier) {
      if (t.id === 'stream-selector') return scoreStream(t, earlier);
      const mine = items.filter((it) => it.test === t);
      const scales = ((t.scoring && t.scoring.scales) || []).filter((sc) => appliesToRespondent(t, sc));
      const results = scales.map((sc) => {
        const inScale = scaleItems(mine, sc);
        const keys = sc.sections || [sc.section];
        let value;
        if (/_shaded_count$/.test(sc.section || '')) {
          // Screener rule (ASRS): count answers at or above each item's threshold
          value = inScale.filter((it) => Number(answers[keyOf(it)]) >= it.q.positiveFrom).length;
        } else {
          const total = inScale.reduce((sum, it) => sum + valueOf(it), 0);
          // Scales reported on the item metric (CBI 0–100, MSLQ 1–7, SNAP-IV 0–3) are averages; others are sums
          const optionMax = Math.max(...inScale.flatMap((it) => it.options.map((o) => Number(o.value))).filter((n) => !Number.isNaN(n)));
          const isMean = sc.aggregate === 'mean' || (sc.range && inScale.length > 1 && sc.range[1] <= optionMax);
          value = Math.round((isMean && inScale.length ? total / inScale.length : total) * 100) / 100;
        }
        const fallback = sectionTitle(t, keys[0]).replace(/,\s*part [A-Z]$/i, '');
        return finishScale(t, sc, value, prettyKey(fallback));
      });
      return { t, results, safetyHit: safetyTriggered(t, mine, results) };
    }

    function safetyTriggered(t, mine, results) {
      if (!t.safety) return false;
      const ids = new Set(t.safety.itemIds || []);
      const hasItems = ids.size > 0 || mine.some((it) => it.q.safetyItem);
      if (hasItems) return mine.some((it) => (it.q.safetyItem || ids.has(it.q.id)) && Number(answers[keyOf(it)]) > 0);
      // Instruments without a self-harm item (SDQ) offer support when a score reaches its top band
      return results.some((r) => r.band && /very high/i.test(r.band.label));
    }

    // Stream Selector: the documented weighting rule, applied to the interest, aptitude and own sections
    function scoreStream(t, earlier) {
      const mine = items.filter((it) => it.test === t);
      const comp = (id, k) => {
        const s = earlier.find((e) => e.t.id === id);
        const r = s && s.results.find((x) => x.sc.section === k);
        return r ? r.score : 0;
      };
      const interest = (k) => (comp('career-interest', k) / 40) * 100;
      const apt = (k) => (k === 'spatial' ? Math.min(comp('career-aptitude', k) / 2, 1) : comp('career-aptitude', k) / 4) * 100;
      const self = (f) => {
        const xs = mine.filter((it) => it.q.factor === f).map(valueOf);
        return xs.length ? ((xs.reduce((a, b) => a + b, 0) / xs.length - 1) / 3) * 100 : 0;
      };
      const marks = (f) => {
        const it = mine.find((m) => m.q.factor === f);
        const v = it ? answers[keyOf(it)] : '';
        return v === '' || v === undefined ? null : Number(v);
      };
      const avg = (...xs) => {
        const v = xs.filter((x) => x !== null);
        return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
      };
      // Missing marks drop that term and re-weight the rest (÷ 0.80). The parts are kept for the report's breakdown.
      const fit = (i, s, a, m) => {
        const parts = { interest: 0.35 * i, confidence: 0.25 * s, aptitude: 0.2 * a, marks: m === null ? 0 : 0.2 * m };
        const scale = m === null ? 1 / 0.8 : 1;
        Object.keys(parts).forEach((k) => (parts[k] *= scale));
        return { total: parts.interest + parts.confidence + parts.aptitude + parts.marks, parts };
      };
      const v = {
        selfconcept_math: self('selfconcept_math'), selfconcept_sci: self('selfconcept_sci'), selfconcept_lang: self('selfconcept_lang'),
        selfconcept_socsci: self('selfconcept_socsci'), selfconcept_biz: self('selfconcept_biz'),
      };
      const fits = {
        fit_science: fit(avg(interest('I'), interest('R')), avg(v.selfconcept_math, v.selfconcept_sci), avg(apt('series'), apt('matrix'), apt('spatial')), avg(marks('marks_math'), marks('marks_sci'))),
        fit_commerce: fit(avg(interest('E'), interest('C')), avg(v.selfconcept_math, v.selfconcept_biz), avg(apt('series'), apt('verbal')), avg(marks('marks_math'), marks('marks_socsci'))),
        fit_humanities: fit(avg(interest('A'), interest('S')), avg(v.selfconcept_lang, v.selfconcept_socsci), apt('verbal'), avg(marks('marks_lang'), marks('marks_socsci'))),
      };
      Object.keys(fits).forEach((k) => (v[k] = fits[k].total));
      const names = { fit_science: 'Science', fit_commerce: 'Commerce', fit_humanities: 'Humanities / Arts' };
      const results = (t.scoring.scales || []).map((sc) => {
        const r = finishScale(t, sc, Math.round(v[sc.section] || 0), names[sc.section] || prettyKey(sc.section));
        if (fits[sc.section]) r.breakdown = fits[sc.section].parts;
        return r;
      });
      const pref = mine.find((it) => it.q.factor === 'stated_preference');
      const prefOpt = pref && pref.options.find((o) => String(o.value) === String(answers[keyOf(pref)]));
      return { t, results, safetyHit: false, stream: { preference: prefOpt ? prefOpt.label : null, value: prefOpt ? String(prefOpt.value) : null } };
    }

    const scored = [];
    parts.forEach((t) => scored.push(scoreTest(t, scored)));
    return { root, parts, items, scored };
  }

  // Research files describe helplines in slightly different shapes; this gives one message + list
  const DEFAULT_SUPPORT = 'Some of your answers suggest things feel really hard right now. You do not have to handle this alone. Please talk to someone you trust today, and you can call Tele-MANAS free, 24x7, on 14416. If you are in immediate danger, call 112.';
  function safetyInfo(t) {
    const s = t.safety || {};
    return {
      message: s.message || s.suggestedMessage || DEFAULT_SUPPORT,
      resources: (s.resources || [])
        .map((r) => ({ name: r.name, contact: r.contact || [r.phone, r.altPhone].filter(Boolean).join(' / '), url: r.url || null }))
        .filter((r) => r.name),
    };
  }

  // A saved, self-contained result: everything the report and dashboard need, without the question bank
  function toRecord(rootId, answers, date) {
    const { root, items, scored } = score(rootId, answers);
    return {
      id: 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      testId: rootId,
      title: root.title,
      audience: root.audience || 'adult',
      date: (date || new Date()).toISOString(),
      parts: scored.map((s) => ({
        id: s.t.id,
        title: s.t.title,
        instrument: s.t.instrument,
        respondent: s.t.respondent || 'self',
        safetyHit: !!s.safetyHit,
        safety: s.safetyHit ? safetyInfo(s.t) : null,
        stream: s.stream || null,
        results: s.results.map((r) => ({
          // A bare "Total score" reads better with the test's name, especially inside a composite
          key: r.sc.section, name: r.name === 'Total score' ? s.t.title : r.name, score: r.score, range: r.sc.range || null, pct: r.pct,
          band: r.band ? { label: r.band.label, meaning: r.band.meaning, min: r.band.min, max: r.band.max } : null,
          bands: [...(r.sc.bands || [])].sort((a, b) => a.min - b.min).map((b) => ({ min: b.min, max: b.max, label: b.label })),
          profile: r.profile ? { key: r.profile.key, name: r.profile.name, description: r.profile.description, careers: r.profile.exampleCareersIndia || [] } : null,
          breakdown: r.breakdown || null,
        })),
        items: items.filter((it) => it.test === s.t).map((it) => {
          const raw = answers[keyOf(it)];
          const opt = it.options.find((o) => String(o.value) === String(raw));
          const nums = it.options.map((o) => Number(o.value)).filter((n) => !Number.isNaN(n));
          const isLikert = it.q.type !== 'number' && (it.q.correct === undefined || it.q.correct === null) && nums.length === it.options.length && nums.length > 1;
          return {
            id: it.q.id,
            text: it.q.text,
            section: it.section.title || '',
            factor: it.q.factor || null,
            answer: opt ? opt.label : (raw === '' || raw === undefined ? '—' : String(raw)),
            value: isLikert ? Number(raw) : null,
            min: isLikert ? Math.min(...nums) : null,
            max: isLikert ? Math.max(...nums) : null,
            // How many answer choices there were, and where this answer sits among them
            levels: isLikert ? nums.length : null,
            // "Higher = more of what the scale measures": reverse-worded questions are flipped
            severity: isLikert ? (() => {
              const s = (Number(raw) - Math.min(...nums)) / (Math.max(...nums) - Math.min(...nums));
              return it.q.reverse ? 1 - s : s;
            })() : null,
            reverse: !!it.q.reverse,
            correct: it.q.correct !== undefined && it.q.correct !== null ? String(raw) === String(it.q.correct) : null,
            scored: it.q.scored !== false,
          };
        }),
      })),
    };
  }

  // Saved results live in this browser only (sample prototype)
  function loadResults() {
    try { return JSON.parse(localStorage.getItem(STORE) || '[]'); } catch (e) { return []; }
  }
  function saveResult(rec) {
    try {
      const all = loadResults();
      all.push(rec);
      localStorage.setItem(STORE, JSON.stringify(all));
      return true;
    } catch (e) { return false; }
  }
  function saveAll(list) {
    try { localStorage.setItem(STORE, JSON.stringify(list)); return true; } catch (e) { return false; }
  }
  function clearResults() {
    try { localStorage.removeItem(STORE); } catch (e) { /* storage unavailable */ }
  }

  // Where a band sits from 0 (lowest) to 1 (highest), used for next-step wording
  function bandRank(r) {
    if (!r || !r.band || !r.bands || r.bands.length < 2) return null;
    const i = r.bands.findIndex((b) => b.label === r.band.label);
    return i < 0 ? null : i / (r.bands.length - 1);
  }

  // The one-line headline for a saved result (dashboard cards and report hero)
  function headline(rec) {
    const main = rec.parts[rec.parts.length - 1];
    if (rec.testId === 'career-interest') {
      const top = [...main.results].sort((a, b) => b.score - a.score).slice(0, 3);
      return { big: top.map((r) => r.key).join(''), label: 'Your Holland code', text: top.map((r) => r.name).join(' · ') };
    }
    if (rec.testId === 'stream-selector') {
      const fits = main.results.filter((r) => /^fit_/.test(r.key)).sort((a, b) => b.score - a.score);
      if (!fits.length || fits[0].score < 40) return { big: 'Still exploring', label: 'Stream fit', text: 'No single stream stands out yet.' };
      const close = fits[1] && fits[1].score >= 40 && fits[0].score - fits[1].score < 10;
      return { big: close ? `${fits[0].name} · ${fits[1].name}` : fits[0].name, label: close ? 'More than one good option' : 'Strongest match', text: `Fit score ${fits[0].score} / 100` };
    }
    if (rec.testId === 'personality') {
      const top = [...main.results].sort((a, b) => Math.abs(b.pct - 50) - Math.abs(a.pct - 50))[0];
      return { big: 'Your personality profile', label: 'Most distinctive trait', text: top ? `${top.name}: ${top.band ? top.band.label : ''}` : '' };
    }
    if (rec.parts.length > 1 && rec.testId !== 'stream-selector') {
      if (rec.parts.some((p) => p.safetyHit)) return { big: `${rec.parts.length} areas checked`, label: 'Wellbeing snapshot', text: 'Please read the support note below' };
      const flagged = rec.parts.filter((p) => p.results.some((r) => (bandRank(r) || 0) > 0)).length;
      return { big: `${rec.parts.length} areas checked`, label: 'Wellbeing snapshot', text: flagged ? `${flagged} area${flagged > 1 ? 's' : ''} above the lowest range` : 'All areas in the lowest range' };
    }
    // Lead with the whole-test score when there is one (total, overall, combined), else the first scale
    const PRIMARY = ['total', 'overall', 'combined_parent', 'combined_teacher', 'total_difficulties'];
    const r = main.results.find((x) => PRIMARY.includes(x.key)) || main.results[0];
    return { big: r && r.band ? r.band.label : `${r ? r.score : ''}`, label: r ? r.name : '', text: r ? `${r.score}${r.range ? ` / ${r.range[1]}` : ''}` : '' };
  }

  window.BrainEngine = { DATA, keyOf, safetyInfo, resolveTests, buildItems, score, toRecord, loadResults, saveResult, saveAll, clearResults, bandRank, headline, prettyKey };
})();
