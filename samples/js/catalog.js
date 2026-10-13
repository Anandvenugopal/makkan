// BrainTest sample catalogue: single tests (with prices) and package bundles.
// Shared by the tests page and the pricing page so prices always agree.
(function () {
  const TESTS = {
    adult: [
      { label: 'Most complete', featured: true, id: 'wellbeing', title: 'Complete Wellbeing Check', desc: 'One guided session covering mood, anxiety, stress and sleep, with a summary reviewed by a clinician.', meta: ['45 min', '4 scales', 'Clinician review'], price: 2000 },
      { label: 'GAD-7 scale', id: 'anxiety', title: 'Anxiety Check', desc: 'Understand how often worry, restlessness and tension have shown up over the past two weeks.', meta: ['10 min', '7 questions'], price: 800 },
      { label: 'PHQ-9 scale', id: 'depression', title: 'Depression Screening', desc: 'A widely used screen for low mood, energy and interest, with severity bands explained simply.', meta: ['10 min', '9 questions'], price: 800 },
      { label: 'ASRS v1.1', id: 'adhd', title: 'Adult ADHD Screening', desc: 'Explore patterns of focus, restlessness and organisation that may point to adult ADHD.', meta: ['15 min', '18 questions'], price: 1500 },
      { label: 'PSS-10 scale', id: 'stress-burnout', title: 'Stress & Burnout', desc: 'Measure perceived stress and early signs of work burnout, plus practical next steps.', meta: ['15 min', '22 questions'], price: 1000 },
      { label: 'ISI scale', id: 'sleep', title: 'Sleep & Insomnia', desc: 'Check how sleep difficulties are affecting your days, and whether to talk to someone.', meta: ['8 min', '7 questions'], price: 600 },
      { label: 'OCI-R scale', id: 'ocd', title: 'OCD Tendencies', desc: 'Look at intrusive thoughts, checking and ordering habits in a calm, non-judgemental way.', meta: ['12 min', '18 questions'], price: 1200 },
      { label: 'Big Five', id: 'personality', title: 'Personality Profile', desc: 'Map your openness, conscientiousness, extraversion, agreeableness and emotional stability.', meta: ['20 min', '50 questions'], price: 1000 },
    ],
    student: [
      { label: 'Most popular', featured: true, id: 'career-aptitude', title: 'Career Aptitude Test', desc: 'Reasoning, numerical, verbal and spatial ability mapped to career paths, with a counsellor call.', meta: ['45 min', 'Class 9 – 12', 'Counsellor call'], price: 2000 },
      { label: 'Class 9 – 10', id: 'stream-selector', title: 'Stream Selector', desc: 'Science, Commerce or Humanities? Match your strengths and interests to the right stream.', meta: ['30 min', '60 questions'], price: 1500 },
      { label: 'Holland RIASEC', id: 'career-interest', title: 'Career Interest Profile', desc: 'Discover which of the six Holland interest types fit you best, and the careers that follow.', meta: ['20 min', '48 questions'], price: 1000 },
      { label: 'Exam season', id: 'exam-stress', title: 'Exam Stress & Test Anxiety', desc: 'See how exam pressure affects you, with study-friendly ways to stay steady.', meta: ['10 min', '15 questions'], price: 600 },
      { label: 'Ages 11 – 18', id: 'focus-attention', title: 'Focus & Attention Check', desc: 'Understand concentration, distractibility and impulsivity in study and daily life.', meta: ['15 min', '18 questions'], price: 1200 },
      { label: 'SDQ scale', id: 'emotional-wellbeing', title: 'Emotional Wellbeing', desc: 'A gentle check on mood, friendships and behaviour, designed for teenagers.', meta: ['15 min', '25 questions'], price: 800 },
      { label: 'Study approach', id: 'learning-style', title: 'How You Learn', desc: 'See whether you tend to learn for deep understanding or for recall, and which study strategies you use most.', meta: ['15 min', '24 questions'], price: 800 },
      { label: 'Study skills', id: 'study-habits', title: 'Study Habits Review', desc: 'Spot gaps in planning, revision and time management, and get a simple plan to fix them.', meta: ['15 min', '30 questions'], price: 600 },
    ],
  };

  // Packages bundle tests from one audience. "Separately" is the sum of the single-test prices.
  const PACKAGES = {
    adult: [
      { id: 'mind-check', name: 'Mind Check', tagline: 'A first look at mood, worry and sleep.', tests: ['anxiety', 'depression', 'sleep'], price: 1499 },
      { id: 'stress-reset', name: 'Stress Reset', tagline: 'For busy, stretched or burnt-out weeks.', tests: ['stress-burnout', 'sleep', 'anxiety'], price: 1799 },
      { id: 'focus-insight', name: 'Focus Insight', tagline: 'Attention, plus the mood and sleep issues that often travel with it.', tests: ['adhd', 'anxiety', 'depression', 'sleep'], price: 2799 },
      { id: 'complete-mind', name: 'Complete Mind Profile', tagline: 'Everything in one go, with a clinician-reviewed summary.', tests: ['wellbeing', 'adhd', 'ocd', 'personality'], price: 3999, featured: true },
    ],
    student: [
      { id: 'exam-ready', name: 'Exam Ready', tagline: 'Calmer exams and smarter studying.', tests: ['exam-stress', 'study-habits', 'learning-style'], price: 1499 },
      { id: 'stream-decision', name: 'Stream Decision', tagline: 'Class 9–10: choose Science, Commerce or Humanities with confidence.', tests: ['stream-selector', 'exam-stress', 'study-habits'], price: 1999 },
      { id: 'career-explorer', name: 'Career Explorer', tagline: 'Class 11 to college: interests, strengths and how you learn.', tests: ['career-interest', 'career-aptitude', 'learning-style'], price: 2799 },
      { id: 'complete-student', name: 'Complete Student Profile', tagline: 'Career direction and wellbeing together, with a counsellor call.', tests: ['career-interest', 'career-aptitude', 'emotional-wellbeing', 'focus-attention', 'study-habits'], price: 3999, featured: true },
    ],
  };

  window.BRAIN_CATALOG = { tests: TESTS, packages: PACKAGES };
})();
