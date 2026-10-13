const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('open');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Test catalogue: adult / student assessments
const TESTS = {
  adult: [
    { label: 'Most complete', featured: true, title: 'Complete Wellbeing Check', desc: 'One guided session covering mood, anxiety, stress and sleep, with a summary reviewed by a clinician.', meta: ['45 min', '4 scales', 'Clinician review'], price: 2000 },
    { label: 'GAD-7 scale', title: 'Anxiety Check', desc: 'Understand how often worry, restlessness and tension have shown up over the past two weeks.', meta: ['10 min', '7 questions'], price: 800 },
    { label: 'PHQ-9 scale', title: 'Depression Screening', desc: 'A widely used screen for low mood, energy and interest, with severity bands explained simply.', meta: ['10 min', '9 questions'], price: 800 },
    { label: 'ASRS v1.1', title: 'Adult ADHD Screening', desc: 'Explore patterns of focus, restlessness and organisation that may point to adult ADHD.', meta: ['15 min', '18 questions'], price: 1500 },
    { label: 'PSS-10 scale', title: 'Stress & Burnout', desc: 'Measure perceived stress and early signs of work burnout, plus practical next steps.', meta: ['15 min', '22 questions'], price: 1000 },
    { label: 'ISI scale', title: 'Sleep & Insomnia', desc: 'Check how sleep difficulties are affecting your days, and whether to talk to someone.', meta: ['8 min', '7 questions'], price: 600 },
    { label: 'OCI-R scale', title: 'OCD Tendencies', desc: 'Look at intrusive thoughts, checking and ordering habits in a calm, non-judgemental way.', meta: ['12 min', '18 questions'], price: 1200 },
    { label: 'Big Five', title: 'Personality Profile', desc: 'Map your openness, conscientiousness, extraversion, agreeableness and emotional stability.', meta: ['20 min', '50 questions'], price: 1000 },
  ],
  student: [
    { label: 'Most popular', featured: true, title: 'Career Aptitude Test', desc: 'Reasoning, numerical, verbal and spatial ability mapped to career paths, with a counsellor call.', meta: ['45 min', 'Class 9 – 12', 'Counsellor call'], price: 2000 },
    { label: 'Class 9 – 10', title: 'Stream Selector', desc: 'Science, Commerce or Humanities? Match your strengths and interests to the right stream.', meta: ['30 min', '60 questions'], price: 1500 },
    { label: 'Holland RIASEC', title: 'Career Interest Profile', desc: 'Discover which of the six Holland interest types fit you best, and the careers that follow.', meta: ['20 min', '48 questions'], price: 1000 },
    { label: 'Exam season', title: 'Exam Stress & Test Anxiety', desc: 'See how exam pressure affects you, with study-friendly ways to stay steady.', meta: ['10 min', '15 questions'], price: 600 },
    { label: 'Ages 11 – 18', title: 'Focus & Attention Check', desc: 'Understand concentration, distractibility and impulsivity in study and daily life.', meta: ['15 min', '18 questions'], price: 1200 },
    { label: 'SDQ scale', title: 'Emotional Wellbeing', desc: 'A gentle check on mood, friendships and behaviour, designed for teenagers.', meta: ['15 min', '25 questions'], price: 800 },
    { label: 'How you learn', title: 'Learning Style Profile', desc: 'Find out whether you learn best by seeing, hearing, reading or doing.', meta: ['15 min', '24 questions'], price: 800 },
    { label: 'Study skills', title: 'Study Habits Review', desc: 'Spot gaps in planning, revision and time management, and get a simple plan to fix them.', meta: ['15 min', '30 questions'], price: 600 },
  ],
};

// Struck-through "was" price is 1.5x the selling price (₹2,000 → ₹3,000)
const inr = (n) => '₹' + n.toLocaleString('en-IN');
const wasPrice = (p) => Math.round((p * 1.5) / 50) * 50;
const pad = (n) => String(n).padStart(2, '0');

const testGrid = document.getElementById('test-grid');
const testTabs = document.querySelectorAll('.tab');
const testCount = document.querySelector('.tab-count');

function renderTests(audience) {
  const tests = TESTS[audience];
  testGrid.innerHTML = tests.map((t, i) => {
    const was = wasPrice(t.price);
    const off = Math.round((1 - t.price / was) * 100);
    return `<article class="test-card${t.featured ? ' featured' : ''}" style="animation-delay:${i * 45}ms">
      <div class="test-top"><span class="test-label">${t.label}</span><span class="test-num">${pad(i + 1)}</span></div>
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
      <div class="test-meta">${t.meta.join('<i aria-hidden="true"></i>')}</div>
      <div class="test-foot">
        <div class="test-price">
          <span class="price-now">${inr(t.price)}</span>
          <s class="price-was"><span class="sr-only">Original price </span>${inr(was)}</s>
          <span class="price-save">Save ${off}%</span>
        </div>
        <a class="button button-primary" href="#tests">Take this test <span aria-hidden="true">↗</span></a>
      </div>
    </article>`;
  }).join('');
  testTabs.forEach((tab) => {
    const on = tab.dataset.audience === audience;
    tab.setAttribute('aria-selected', String(on));
    tab.tabIndex = on ? 0 : -1;
  });
  testGrid.setAttribute('aria-labelledby', `tab-${audience}`);
  testCount.innerHTML = `Showing <strong>${tests.length}</strong> assessments for ${audience === 'adult' ? 'adults' : 'students'}`;
}

testTabs.forEach((tab) => {
  tab.addEventListener('click', () => renderTests(tab.dataset.audience));
  // Arrow keys move between tabs
  tab.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = [...testTabs].find((t) => t !== tab);
    next.focus();
    renderTests(next.dataset.audience);
  });
});

// tests.html#students opens on the student tab; first load defaults to adults
function syncTestsWithHash() {
  if (location.hash === '#students') {
    renderTests('student');
  } else if (!testGrid.children.length) {
    renderTests('adult');
  }
}

// The catalogue only exists on tests.html
if (testGrid) {
  window.addEventListener('hashchange', syncTestsWithHash);
  syncTestsWithHash();
}
