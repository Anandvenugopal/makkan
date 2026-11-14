// Generated from research JSON. Do not edit by hand.
window.TEST_DATA = {
 "adhd": {
  "id": "adhd",
  "title": "Adult ADHD Screening",
  "audience": "adult",
  "instrument": "Adult ADHD Self-Report Scale (ASRS v1.1) Symptom Checklist - 18 items (Part A = 6-item ASRS v1.1 Screener; Part B = 12 additional items)",
  "citation": "Kessler RC, Adler L, Ames M, Demler O, Faraone S, Hiripi E, Howes MJ, Jin R, Secnik K, Spencer T, Ustun TB, Walters EE. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychological Medicine. 2005;35(2):245-256. doi:10.1017/S0033291704002892. Continuous (0-24) screener scoring: Kessler RC, Adler LA, Gruber MJ, Sarawate CA, Spencer T, Van Brunt DL. Validity of the World Health Organization Adult ADHD Self-Report Scale (ASRS) Screener in a representative sample of health plan members. Int J Methods Psychiatr Res. 2007;16(2):52-65.",
  "sourceUrls": [
   "https://www.hcp.med.harvard.edu/ncs/asrs.php",
   "https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/18Q_ASRS_English.pdf",
   "https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/ASRS_v1.1_screener(6Q)_scoring_update.pdf",
   "https://novopsych.com/wp-content/uploads/2023/03/Adult-ADHD-Self-Report-Scale-ASRS-V1.1.pdf",
   "https://embrace-autism.com/asrs-v1-1/",
   "https://license.tov.med.nyu.edu/product/asrs6Qscreener",
   "https://license.tov.med.nyu.edu/product/asrs-v11-18-question-symptom-checklist",
   "https://pubmed.ncbi.nlm.nih.gov/15841682/"
  ],
  "license": {
   "status": "Copyrighted. Originally (c) World Health Organization; permissions are now administered by New York University (Technology Opportunities & Ventures, Dr. Lenard Adler's team) on behalf of NYU and the President and Fellows of Harvard College. Split licence: (a) the 6-item ASRS v1.1 Screener (Part A) is free for clinical and non-clinical use INCLUDING commercial use, with attribution and no modifications other than creating electronic versions; (b) the full 18-item ASRS v1.1 Symptom Checklist (Part B items) requires a licence - 'Commercial Use (Website Integration)' licence, 1-year term, price on application.",
   "commercialUseAllowed": false,
   "notes": "commercialUseAllowed is false because this file contains the full 18-item checklist. If BrainTest ships ONLY Part A (6 items), commercial use is allowed free of charge provided: (1) attribution line is displayed: '(c) New York University and the President and Fellows of Harvard College' (NYU portal wording; older Harvard materials ask for 'ASRS Screener v1.1 is copyrighted by the World Health Organization' - showing both is safest), (2) item wording/response options are not modified (an electronic version is permitted). To include Part B (items 7-18) on a commercial website, purchase the 'Commercial Use (Website Integration)' licence for the ASRS v1.1 18-Question Symptom Checklist from NYU TOV (https://license.tov.med.nyu.edu/product/asrs-v11-18-question-symptom-checklist; contact tovcommunications@nyu.edu). The ASRS-5 (DSM-5 version) is also licensed through the same NYU portal (https://license.tov.med.nyu.edu/product/asrs-dsm-5). Recommendation for production: Part A only, free with attribution.",
   "url": "https://license.tov.med.nyu.edu/product/asrs6Qscreener"
  },
  "estimatedMinutes": 5,
  "instructions": "Please answer the questions below, rating yourself on each of the criteria shown using the scale on the right side of the page. As you answer each question, place an X in the box that best describes how you have felt and conducted yourself over the past 6 months. Please give this completed checklist to your healthcare professional to discuss during today's appointment.",
  "sections": [
   {
    "id": "partA",
    "title": "Part A",
    "instructions": "Part A (questions 1-6) is the ASRS v1.1 Screener. It is the part used to decide whether the screen is positive.",
    "options": [
     {
      "label": "Never",
      "value": 0
     },
     {
      "label": "Rarely",
      "value": 1
     },
     {
      "label": "Sometimes",
      "value": 2
     },
     {
      "label": "Often",
      "value": 3
     },
     {
      "label": "Very Often",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "asrs_1",
      "text": "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
      "reverse": false,
      "factor": "inattention",
      "positiveFrom": 2
     },
     {
      "id": "asrs_2",
      "text": "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
      "reverse": false,
      "factor": "inattention",
      "positiveFrom": 2
     },
     {
      "id": "asrs_3",
      "text": "How often do you have problems remembering appointments or obligations?",
      "reverse": false,
      "factor": "inattention",
      "positiveFrom": 2
     },
     {
      "id": "asrs_4",
      "text": "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
      "reverse": false,
      "factor": "inattention",
      "positiveFrom": 3
     },
     {
      "id": "asrs_5",
      "text": "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
      "reverse": false,
      "factor": "hyperactivity_impulsivity",
      "positiveFrom": 3
     },
     {
      "id": "asrs_6",
      "text": "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
      "reverse": false,
      "factor": "hyperactivity_impulsivity",
      "positiveFrom": 3
     }
    ]
   },
   {
    "id": "partB",
    "title": "Part B",
    "instructions": "Part B (questions 7-18) gives additional information about symptoms. It is not used to decide whether the screen is positive.",
    "options": [
     {
      "label": "Never",
      "value": 0
     },
     {
      "label": "Rarely",
      "value": 1
     },
     {
      "label": "Sometimes",
      "value": 2
     },
     {
      "label": "Often",
      "value": 3
     },
     {
      "label": "Very Often",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "asrs_7",
      "text": "How often do you make careless mistakes when you have to work on a boring or difficult project?",
      "reverse": false,
      "factor": "inattention",
      "positiveFrom": 3
     },
     {
      "id": "asrs_8",
      "text": "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
      "reverse": false,
      "factor": "inattention",
      "positiveFrom": 3
     },
     {
      "id": "asrs_9",
      "text": "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
      "reverse": false,
      "factor": "inattention",
      "positiveFrom": 2
     },
     {
      "id": "asrs_10",
      "text": "How often do you misplace or have difficulty finding things at home or at work?",
      "reverse": false,
      "factor": "inattention",
      "positiveFrom": 3
     },
     {
      "id": "asrs_11",
      "text": "How often are you distracted by activity or noise around you?",
      "reverse": false,
      "factor": "inattention",
      "positiveFrom": 3
     },
     {
      "id": "asrs_12",
      "text": "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
      "reverse": false,
      "factor": "hyperactivity_impulsivity",
      "positiveFrom": 2
     },
     {
      "id": "asrs_13",
      "text": "How often do you feel restless or fidgety?",
      "reverse": false,
      "factor": "hyperactivity_impulsivity",
      "positiveFrom": 3
     },
     {
      "id": "asrs_14",
      "text": "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
      "reverse": false,
      "factor": "hyperactivity_impulsivity",
      "positiveFrom": 3
     },
     {
      "id": "asrs_15",
      "text": "How often do you find yourself talking too much when you are in social situations?",
      "reverse": false,
      "factor": "hyperactivity_impulsivity",
      "positiveFrom": 3
     },
     {
      "id": "asrs_16",
      "text": "When you're in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
      "reverse": false,
      "factor": "hyperactivity_impulsivity",
      "positiveFrom": 2
     },
     {
      "id": "asrs_17",
      "text": "How often do you have difficulty waiting your turn in situations when turn taking is required?",
      "reverse": false,
      "factor": "hyperactivity_impulsivity",
      "positiveFrom": 3
     },
     {
      "id": "asrs_18",
      "text": "How often do you interrupt others when they are busy?",
      "reverse": false,
      "factor": "hyperactivity_impulsivity",
      "positiveFrom": 2
     }
    ]
   }
  ],
  "scoring": {
   "method": "Two official methods. (1) Original dichotomous 'shaded box' method (Kessler et al., 2005): an item is 'positive' when the answer is at or above that item's threshold (positiveFrom; 2 = Sometimes or more, 3 = Often or more). Count positive items in Part A (0-6); 4 or more = 'symptoms highly consistent with ADHD in adults; further investigation is warranted'. Part B positive items (0-12) are counted for supplementary information only. (2) Continuous Part A method (Kessler et al., 2007; Harvard NCS 2024 scoring update): sum Part A items scored Never=0 ... Very Often=4 (range 0-24); 14 or more = positive screen, with four strata 0-9 low negative, 10-13 high negative, 14-17 low positive, 18-24 high positive. Part B and total (0-72) sums have no validated cut-off and are informational only.",
   "scales": [
    {
     "section": "partA_shaded_count",
     "range": [
      0,
      6
     ],
     "bands": [
      {
       "min": 0,
       "max": 3,
       "label": "Screen negative",
       "meaning": "Fewer than four of the six core screening questions were answered in the range that is typical of adult ADHD. This does not rule ADHD out, but your answers are not the pattern usually seen. If attention, organisation or restlessness still affect your work, studies or relationships, it is reasonable to mention it to a doctor or psychologist."
      },
      {
       "min": 4,
       "max": 6,
       "label": "Screen positive - highly consistent with adult ADHD",
       "meaning": "Four or more of the six core questions were answered in the range that is often seen in adults with ADHD. This is a screening result, not a diagnosis - stress, low mood, anxiety, sleep problems, thyroid problems and other conditions can produce similar experiences. A useful next step is a full assessment with a psychiatrist or clinical psychologist, who can look at your history since childhood and how these difficulties affect daily life."
      }
     ]
    },
    {
     "section": "partA_sum",
     "range": [
      0,
      24
     ],
     "bands": [
      {
       "min": 0,
       "max": 9,
       "label": "Low (screen negative)",
       "meaning": "Your answers show few of the attention and activity difficulties linked with adult ADHD. No specific follow-up is suggested on the basis of this screen."
      },
      {
       "min": 10,
       "max": 13,
       "label": "Moderate (screen negative, some symptoms)",
       "meaning": "You report some attention or restlessness difficulties, but below the level that usually points to ADHD. Many people experience these at busy or stressful times. If they are causing real problems, a conversation with a doctor can help work out why."
      },
      {
       "min": 14,
       "max": 17,
       "label": "Elevated (screen positive)",
       "meaning": "Your answers are at the level where adult ADHD is more likely. This is not a diagnosis. Consider booking an assessment with a psychiatrist or clinical psychologist to explore this further."
      },
      {
       "min": 18,
       "max": 24,
       "label": "High (screen positive)",
       "meaning": "Your answers show frequent difficulties of the kind commonly seen in adult ADHD. A full assessment with a psychiatrist or clinical psychologist is recommended; ADHD in adults is common and very treatable once properly assessed."
      }
     ]
    },
    {
     "section": "partB_shaded_count",
     "range": [
      0,
      12
     ],
     "bands": [
      {
       "min": 0,
       "max": 12,
       "label": "Supplementary information",
       "meaning": "Part B has no official cut-off. The number of answers in the highlighted range is shown only as extra information that a clinician may find useful alongside Part A."
      }
     ]
    }
   ],
   "clinicalCutoff": "Part A: 4 or more of 6 items in the shaded range (positiveFrom) = positive screen (Kessler 2005). Alternative continuous scoring: Part A sum >= 14 of 24 (Kessler 2007 / Harvard NCS scoring update).",
   "notes": "Shaded thresholds (official ASRS v1.1 form): Sometimes-or-more (positiveFrom 2) for items 1, 2, 3, 9, 12, 16, 18; Often-or-more (positiveFrom 3) for items 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 17. No reverse-keyed items. Only Part A determines the screening result; Part B is supplementary. Factor keys (inattention vs hyperactivity_impulsivity) follow DSM-IV symptom mapping and are informational, not official subscales with cut-offs. ALTERNATIVE - ASRS-5 (DSM-5 version; Ustun B, Adler LA, Rudin C, et al. JAMA Psychiatry. 2017;74(5):520-527): 6 items, same Never-Very Often scale, scored 0-24 with cut-off 14 (original paper used item-specific weights; Kessler has since recommended unweighted scoring because the weighted DSM-5 scoring overestimates prevalence). ASRS-5 is licensed through NYU (https://license.tov.med.nyu.edu/product/asrs-dsm-5) and is NOT free for commercial use; exact ASRS-5 item wording was NOT verified here (Harvard server unavailable) so items are intentionally not reproduced."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Screening tool, not a diagnosis. Adults 18+. Developed by the WHO World Mental Health Survey Initiative with Harvard (Kessler, Adler, Ustun et al.). In the original US validation (Kessler 2005), the 6-item screener outperformed the 18-item checklist: sensitivity 68.7%, specificity 99.5%, total classification accuracy 97.9%, kappa 0.76 (18-item checklist: sensitivity 56.3%, specificity 98.3%). The continuous 0-24 screener showed AUC ~0.90 against clinician diagnoses in a health-plan sample (Kessler 2007). A 42-country study (n ~72,600; Psychological Medicine) found good reliability and partial measurement invariance across languages and countries. India: the ASRS v1.1 screener has been used in an Indian psychiatry outpatient study (283 adults screened; follow-up with symptom checklist, WMH-CIDI and clinical interview) and a pilot study of 300 undergraduates in Ahmedabad, Gujarat (Jhaveri et al.); no formally validated Hindi version was found in this search. A diagnosis of ADHD additionally requires symptoms present since childhood (before age 12), occurring across settings, and causing impairment - none of which the screener establishes. Wording verified against the NovoPsych reproduction of the official form (which uses UK spelling 'organisation' in item 2; the official Harvard/WHO English form uses 'organization') and embrace-autism.com; the Harvard NCS PDF server returned 503 during this research. The overall instruction text above is from the official 18Q form as widely reproduced; NovoPsych's copy shortens it to 'Please answer the questions below, rating yourself on each of the criteria shown. As you answer each question, select the box that best describes how you have felt and conducted yourself over the past 6 months.' - re-check against the Harvard PDF before release.",
  "questionCount": 18
 },
 "anxiety": {
  "id": "anxiety",
  "title": "Anxiety Check",
  "audience": "adult",
  "instrument": "GAD-7 (Generalized Anxiety Disorder 7-item scale)",
  "citation": "Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006;166(10):1092-1097. doi:10.1001/archinte.166.10.1092",
  "sourceUrls": [
   "https://www.phqscreeners.com/select-screener",
   "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/410326",
   "https://www.utsouthwestern.edu/edumedia/edufiles/departments_centers/depression/vitalsign6/measures/gad-7.pdf",
   "https://www.cisss-lanaudiere.gouv.qc.ca/fileadmin/internet/cisss_lanaudiere/Professionnels/PQPTM/Form/GAD-7_EN.PDF",
   "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8155718/"
  ],
  "license": {
   "status": "Free to use; no permission required (developed with an educational grant from Pfizer Inc.)",
   "commercialUseAllowed": true,
   "notes": "The official PHQ Screeners site (Pfizer) states that for the PHQ and GAD-7 screeners and their translations 'no permission is required to reproduce, translate, display or distribute them'. Its terms page says the screener content is 'expressly exempted from Pfizer's general copyright restrictions' and is 'free for download and use'. The official forms carry the line: 'Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc. No permission required to reproduce, translate, display or distribute.' Keep that attribution line on the page and keep the item wording unchanged. The site does not explicitly say 'commercial', but the permission is unrestricted.",
   "url": "https://www.phqscreeners.com/select-screener"
  },
  "estimatedMinutes": 2,
  "instructions": "Over the last 2 weeks, how often have you been bothered by the following problems?",
  "sections": [
   {
    "id": "gad7",
    "title": "Anxiety (GAD-7)",
    "instructions": "Over the last 2 weeks, how often have you been bothered by the following problems?",
    "options": [
     {
      "label": "Not at all",
      "value": 0
     },
     {
      "label": "Several days",
      "value": 1
     },
     {
      "label": "More than half the days",
      "value": 2
     },
     {
      "label": "Nearly every day",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "gad7_1",
      "text": "Feeling nervous, anxious, or on edge",
      "reverse": false
     },
     {
      "id": "gad7_2",
      "text": "Not being able to stop or control worrying",
      "reverse": false
     },
     {
      "id": "gad7_3",
      "text": "Worrying too much about different things",
      "reverse": false
     },
     {
      "id": "gad7_4",
      "text": "Trouble relaxing",
      "reverse": false
     },
     {
      "id": "gad7_5",
      "text": "Being so restless that it is hard to sit still",
      "reverse": false
     },
     {
      "id": "gad7_6",
      "text": "Becoming easily annoyed or irritable",
      "reverse": false
     },
     {
      "id": "gad7_7",
      "text": "Feeling afraid, as if something awful might happen",
      "reverse": false
     }
    ]
   },
   {
    "id": "gad7_function",
    "title": "Impact on daily life",
    "instructions": "Show only if any GAD-7 item was answered above 0. Not included in the score.",
    "scored": false,
    "options": [
     {
      "label": "Not difficult at all",
      "value": 0
     },
     {
      "label": "Somewhat difficult",
      "value": 1
     },
     {
      "label": "Very difficult",
      "value": 2
     },
     {
      "label": "Extremely difficult",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "gad7_difficulty",
      "text": "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
      "reverse": false,
      "scored": false
     }
    ]
   }
  ],
  "scoring": {
   "method": "Sum items gad7_1 to gad7_7 (each 0-3). No reverse-scored items. Total 0-21. The difficulty question is not added to the total.",
   "scales": [
    {
     "section": "gad7",
     "range": [
      0,
      21
     ],
     "bands": [
      {
       "min": 0,
       "max": 4,
       "label": "Minimal anxiety",
       "meaning": "Your answers suggest few or no anxiety symptoms over the past two weeks. No specific action is needed; keep up the routines that help you feel steady, and check in again if things change."
      },
      {
       "min": 5,
       "max": 9,
       "label": "Mild anxiety",
       "meaning": "You may be having some anxiety symptoms. Many people have periods like this. Self-care such as regular sleep, physical activity, limiting caffeine, and relaxation or breathing practice can help. Consider re-taking this check in 2-4 weeks, and speak to a doctor or counsellor if it continues or gets worse."
      },
      {
       "min": 10,
       "max": 14,
       "label": "Moderate anxiety",
       "meaning": "Your answers suggest anxiety symptoms that are probably affecting you on many days. This is a level at which talking to a doctor, psychologist or counsellor is recommended, so they can look at what is going on and discuss support options."
      },
      {
       "min": 15,
       "max": 21,
       "label": "Severe anxiety",
       "meaning": "Your answers suggest a high level of anxiety symptoms. This is not a diagnosis, but it is a good reason to see a doctor or mental health professional soon. Effective help is available, and you do not need to manage this on your own."
      }
     ]
    }
   ],
   "clinicalCutoff": "Total ≥10 is the recommended screening cut-off for probable generalized anxiety disorder (sensitivity 89%, specificity 82% in the original primary-care validation); recommend clinician follow-up. Cut-offs 5, 10 and 15 mark mild, moderate and severe.",
   "notes": "If gad7_difficulty is 'Very difficult' or 'Extremely difficult', mention functional impact in the result and encourage professional follow-up even if the total is below 10. GAD-7 has no self-harm item; no safety flag is needed here, but show general help resources on every result page."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Screening tool, not a diagnosis. Validated in 2,740 US primary-care patients (Spitzer 2006): at a cut-off of ≥10, sensitivity 89% and specificity 82% for GAD. It is also reasonably good at detecting panic disorder, social anxiety disorder and PTSD (Kroenke et al., Ann Intern Med 2007). The first two items form the GAD-2 (cut-off ≥3). India: De Man J et al. (2021) 'Are the PHQ-9 and GAD-7 Suitable for Use in India? A Psychometric Analysis' (Frontiers in Psychology 12:676398; n=1,209 adults in rural Kerala, Malayalam version) found acceptable reliability (omega-h 0.76 for GAD-7) and unidimensionality, but did not establish India-specific diagnostic accuracy or cut-offs. Official Hindi and other Indian-language translations are available as free downloads from phqscreeners.com. I could not find an Indian study reporting sensitivity or specificity against a clinical interview. Item wording was checked against the UT Southwestern and Quebec CISSS reproductions of the official form. One reproduction leaves out the comma in item 7, and this file follows the official Pfizer form ('Feeling afraid, as if something awful might happen').",
  "questionCount": 8
 },
 "career-aptitude": {
  "id": "career-aptitude",
  "title": "Career Aptitude Test",
  "audience": "student",
  "ageRange": "Class 9-12 (about 14-18). ICAR was validated mainly with online adults and US university students; no Indian student norms found.",
  "instrument": "ICAR Sample Test (ICAR-16): 4 Verbal Reasoning, 4 Letter-Number Series, 4 Matrix Reasoning, 4 Three-Dimensional Rotation items - International Cognitive Ability Resource",
  "citation": "Condon, D. M., & Revelle, W. (2014). The International Cognitive Ability Resource: Development and initial validation of a public-domain measure. Intelligence, 43, 52-64. https://doi.org/10.1016/j.intell.2014.01.004 (items: Supplementary Materials, Appendix A - ICAR Sample Test).",
  "sourceUrls": [
   "https://personality-project.org/revelle/publications/condon.icar.14.pdf",
   "https://ars.els-cdn.com/content/image/1-s2.0-S0160289614000051-mmc1.pdf",
   "https://search.r-project.org/CRAN/refmans/psychTools/html/iqitems.html",
   "https://sms.statistik.tu-dortmund.de/en/research/projects/completed-research-projects/international-cognitive-ability-resource-icar/",
   "https://doi.org/10.23668/psycharchives.22167",
   "https://icar-project.org/"
  ],
  "license": {
   "status": "Described by its authors as 'public-domain' (2014 paper; icar-project.org), but the current official ICAR archive (PsychArchives, 2023) distributes items under a 'Scientific Use License' (Sharing Level 1), and the current ICAR host (TU Dortmund) states 'ICAR is intended for academic use exclusively.' The 16 Sample Test items are openly published in the journal supplement, but no licence there grants commercial reuse.",
   "commercialUseAllowed": false,
   "notes": "Fine for an internal prototype. Before using on a commercial website, get written permission from the ICAR team - current maintainer Prof. Dr. Philipp Doebler, TU Dortmund (doebler@statistik.tu-dortmund.de), and the original authors David M. Condon (University of Oregon) and William Revelle (Northwestern University). The matrix and cube images are in the Elsevier-hosted supplement; reproduction of those images also needs that permission. Ask specifically about: commercial use, displaying item images, and item exposure (ICAR authors ask users to protect item security - do not publish answer keys on the public site).",
   "url": "https://sms.statistik.tu-dortmund.de/en/research/projects/completed-research-projects/international-cognitive-ability-resource-icar/"
  },
  "estimatedMinutes": 15,
  "instructions": "This is a short puzzle test with 16 questions in four parts: word logic, letter patterns, picture patterns and 3-D cubes. Some questions are easy and some are hard - nobody is expected to get them all right. Take your time, work out each answer on your own (rough paper is fine, but no calculator or internet), and pick the best option. If you are stuck, make your best guess and move on.",
  "sections": [
   {
    "id": "verbal",
    "title": "Verbal reasoning",
    "instructions": "Read each question carefully and choose the best answer.",
    "questions": [
     {
      "id": "vr_4",
      "officialId": "VR.4",
      "text": "What number is one fifth of one fourth of one ninth of 900?",
      "options": [
       {
        "label": "2",
        "value": "a"
       },
       {
        "label": "3",
        "value": "b"
       },
       {
        "label": "4",
        "value": "c"
       },
       {
        "label": "5",
        "value": "d"
       },
       {
        "label": "6",
        "value": "e"
       },
       {
        "label": "7",
        "value": "f"
       }
      ],
      "correct": "d",
      "factor": "verbal",
      "requiresImage": false,
      "imageSource": null,
      "validated": true,
      "referenceProportionCorrect": 0.67
     },
     {
      "id": "vr_16",
      "officialId": "VR.16",
      "text": "Zach is taller than Matt and Richard is shorter than Zach. Which of the following statements would be most accurate?",
      "options": [
       {
        "label": "Richard is taller than Matt",
        "value": "a"
       },
       {
        "label": "Richard is shorter than Matt",
        "value": "b"
       },
       {
        "label": "Richard is as tall as Matt",
        "value": "c"
       },
       {
        "label": "It's impossible to tell",
        "value": "d"
       }
      ],
      "correct": "d",
      "factor": "verbal",
      "requiresImage": false,
      "imageSource": null,
      "validated": true,
      "referenceProportionCorrect": 0.69
     },
     {
      "id": "vr_17",
      "officialId": "VR.17",
      "text": "Joshua is 12 years old and his sister is three times as old as he. When Joshua is 23 years old, how old will his sister be?",
      "options": [
       {
        "label": "35",
        "value": "a"
       },
       {
        "label": "39",
        "value": "b"
       },
       {
        "label": "44",
        "value": "c"
       },
       {
        "label": "47",
        "value": "d"
       },
       {
        "label": "53",
        "value": "e"
       },
       {
        "label": "57",
        "value": "f"
       }
      ],
      "correct": "d",
      "factor": "verbal",
      "requiresImage": false,
      "imageSource": null,
      "validated": true,
      "referenceProportionCorrect": 0.73
     },
     {
      "id": "vr_19",
      "officialId": "VR.19",
      "text": "If the day after tomorrow is two days before Thursday then what day is it today?",
      "options": [
       {
        "label": "Friday",
        "value": "a"
       },
       {
        "label": "Monday",
        "value": "b"
       },
       {
        "label": "Wednesday",
        "value": "c"
       },
       {
        "label": "Saturday",
        "value": "d"
       },
       {
        "label": "Tuesday",
        "value": "e"
       },
       {
        "label": "Sunday",
        "value": "f"
       }
      ],
      "correct": "f",
      "factor": "verbal",
      "requiresImage": false,
      "imageSource": null,
      "validated": true,
      "referenceProportionCorrect": 0.61
     }
    ]
   },
   {
    "id": "series",
    "title": "Letter and number series",
    "instructions": "Work out the rule in each series and choose what comes next.",
    "questions": [
     {
      "id": "ln_7",
      "officialId": "LN.7",
      "text": "In the following alphanumeric series, what letter comes next? K N P S U",
      "options": [
       {
        "label": "S",
        "value": "a"
       },
       {
        "label": "T",
        "value": "b"
       },
       {
        "label": "U",
        "value": "c"
       },
       {
        "label": "V",
        "value": "d"
       },
       {
        "label": "W",
        "value": "e"
       },
       {
        "label": "X",
        "value": "f"
       }
      ],
      "correct": "f",
      "factor": "series",
      "requiresImage": false,
      "imageSource": null,
      "validated": true,
      "referenceProportionCorrect": 0.62
     },
     {
      "id": "ln_33",
      "officialId": "LN.33",
      "text": "In the following alphanumeric series, what letter comes next? V Q M J H",
      "options": [
       {
        "label": "E",
        "value": "a"
       },
       {
        "label": "F",
        "value": "b"
       },
       {
        "label": "G",
        "value": "c"
       },
       {
        "label": "H",
        "value": "d"
       },
       {
        "label": "I",
        "value": "e"
       },
       {
        "label": "J",
        "value": "f"
       }
      ],
      "correct": "c",
      "factor": "series",
      "requiresImage": false,
      "imageSource": null,
      "validated": true,
      "referenceProportionCorrect": 0.59
     },
     {
      "id": "ln_34",
      "officialId": "LN.34",
      "text": "In the following alphanumeric series, what letter comes next? I J L O S",
      "options": [
       {
        "label": "T",
        "value": "a"
       },
       {
        "label": "U",
        "value": "b"
       },
       {
        "label": "V",
        "value": "c"
       },
       {
        "label": "X",
        "value": "d"
       },
       {
        "label": "Y",
        "value": "e"
       },
       {
        "label": "Z",
        "value": "f"
       }
      ],
      "correct": "d",
      "factor": "series",
      "requiresImage": false,
      "imageSource": null,
      "validated": true,
      "referenceProportionCorrect": 0.62
     },
     {
      "id": "ln_58",
      "officialId": "LN.58",
      "text": "In the following alphanumeric series, what letter comes next? Q S N P L",
      "options": [
       {
        "label": "J",
        "value": "a"
       },
       {
        "label": "H",
        "value": "b"
       },
       {
        "label": "I",
        "value": "c"
       },
       {
        "label": "N",
        "value": "d"
       },
       {
        "label": "M",
        "value": "e"
       },
       {
        "label": "L",
        "value": "f"
       }
      ],
      "correct": "d",
      "factor": "series",
      "requiresImage": false,
      "imageSource": null,
      "validated": true,
      "referenceProportionCorrect": 0.42
     }
    ]
   },
   {
    "id": "matrix",
    "title": "Matrix reasoning",
    "instructions": "Each picture is a 3 x 3 grid with one piece missing. Choose the option that best completes the pattern.",
    "questions": [
     {
      "id": "mr_45",
      "officialId": "MR.45",
      "text": "Please indicate which is the best answer to complete the figure below.",
      "options": [
       {
        "label": "A",
        "value": "a"
       },
       {
        "label": "B",
        "value": "b"
       },
       {
        "label": "C",
        "value": "c"
       },
       {
        "label": "D",
        "value": "d"
       },
       {
        "label": "E",
        "value": "e"
       },
       {
        "label": "F",
        "value": "f"
       }
      ],
      "correct": "e",
      "factor": "matrix",
      "requiresImage": true,
      "imageSource": "https://ars.els-cdn.com/content/image/1-s2.0-S0160289614000051-mmc1.pdf (Appendix A, p.3, item MX.45)",
      "validated": true,
      "referenceProportionCorrect": 0.52
     },
     {
      "id": "mr_46",
      "officialId": "MR.46",
      "text": "Please indicate which is the best answer to complete the figure below.",
      "options": [
       {
        "label": "A",
        "value": "a"
       },
       {
        "label": "B",
        "value": "b"
       },
       {
        "label": "C",
        "value": "c"
       },
       {
        "label": "D",
        "value": "d"
       },
       {
        "label": "E",
        "value": "e"
       },
       {
        "label": "F",
        "value": "f"
       }
      ],
      "correct": "b",
      "factor": "matrix",
      "requiresImage": true,
      "imageSource": "https://ars.els-cdn.com/content/image/1-s2.0-S0160289614000051-mmc1.pdf (Appendix A, p.3, item MX.46)",
      "validated": true,
      "referenceProportionCorrect": 0.6
     },
     {
      "id": "mr_47",
      "officialId": "MR.47",
      "text": "Please indicate which is the best answer to complete the figure below.",
      "options": [
       {
        "label": "A",
        "value": "a"
       },
       {
        "label": "B",
        "value": "b"
       },
       {
        "label": "C",
        "value": "c"
       },
       {
        "label": "D",
        "value": "d"
       },
       {
        "label": "E",
        "value": "e"
       },
       {
        "label": "F",
        "value": "f"
       }
      ],
      "correct": "b",
      "factor": "matrix",
      "requiresImage": true,
      "imageSource": "https://ars.els-cdn.com/content/image/1-s2.0-S0160289614000051-mmc1.pdf (Appendix A, p.4, item MX.47)",
      "validated": true,
      "referenceProportionCorrect": 0.62
     },
     {
      "id": "mr_55",
      "officialId": "MR.55",
      "text": "Please indicate which is the best answer to complete the figure below.",
      "options": [
       {
        "label": "A",
        "value": "a"
       },
       {
        "label": "B",
        "value": "b"
       },
       {
        "label": "C",
        "value": "c"
       },
       {
        "label": "D",
        "value": "d"
       },
       {
        "label": "E",
        "value": "e"
       },
       {
        "label": "F",
        "value": "f"
       }
      ],
      "correct": "d",
      "factor": "matrix",
      "requiresImage": true,
      "imageSource": "https://ars.els-cdn.com/content/image/1-s2.0-S0160289614000051-mmc1.pdf (Appendix A, p.4, item MX.55)",
      "validated": true,
      "referenceProportionCorrect": 0.36
     }
    ]
   },
   {
    "id": "spatial",
    "title": "3-D rotation",
    "instructions": "Each cube has a different picture on each face. Choose the option that could be the cube labelled X after it has been turned.",
    "questions": [
     {
      "id": "r3d_3",
      "officialId": "R3D.3",
      "text": "All the cubes below have a different image on each side. Select the choice that could represent a rotation of the cube labeled X.",
      "options": [
       {
        "label": "A",
        "value": "a"
       },
       {
        "label": "B",
        "value": "b"
       },
       {
        "label": "C",
        "value": "c"
       },
       {
        "label": "D",
        "value": "d"
       },
       {
        "label": "E",
        "value": "e"
       },
       {
        "label": "F",
        "value": "f"
       },
       {
        "label": "G",
        "value": "g"
       },
       {
        "label": "H",
        "value": "h"
       }
      ],
      "correct": "c",
      "factor": "spatial",
      "requiresImage": true,
      "imageSource": "https://ars.els-cdn.com/content/image/1-s2.0-S0160289614000051-mmc1.pdf (Appendix A, p.5, item R3D.3)",
      "validated": true,
      "referenceProportionCorrect": 0.17
     },
     {
      "id": "r3d_4",
      "officialId": "R3D.4",
      "text": "All the cubes below have a different image on each side. Select the choice that could represent a rotation of the cube labeled X.",
      "options": [
       {
        "label": "A",
        "value": "a"
       },
       {
        "label": "B",
        "value": "b"
       },
       {
        "label": "C",
        "value": "c"
       },
       {
        "label": "D",
        "value": "d"
       },
       {
        "label": "E",
        "value": "e"
       },
       {
        "label": "F",
        "value": "f"
       },
       {
        "label": "G",
        "value": "g"
       },
       {
        "label": "H",
        "value": "h"
       }
      ],
      "correct": "b",
      "factor": "spatial",
      "requiresImage": true,
      "imageSource": "https://ars.els-cdn.com/content/image/1-s2.0-S0160289614000051-mmc1.pdf (Appendix A, p.5, item R3D.4)",
      "validated": true,
      "referenceProportionCorrect": 0.21
     },
     {
      "id": "r3d_6",
      "officialId": "R3D.6",
      "text": "All the cubes below have a different image on each side. Select the choice that could represent a rotation of the cube labeled X.",
      "options": [
       {
        "label": "A",
        "value": "a"
       },
       {
        "label": "B",
        "value": "b"
       },
       {
        "label": "C",
        "value": "c"
       },
       {
        "label": "D",
        "value": "d"
       },
       {
        "label": "E",
        "value": "e"
       },
       {
        "label": "F",
        "value": "f"
       },
       {
        "label": "G",
        "value": "g"
       },
       {
        "label": "H",
        "value": "h"
       }
      ],
      "correct": "f",
      "factor": "spatial",
      "requiresImage": true,
      "imageSource": "https://ars.els-cdn.com/content/image/1-s2.0-S0160289614000051-mmc1.pdf (Appendix A, p.6, item R3D.6)",
      "validated": true,
      "referenceProportionCorrect": 0.29
     },
     {
      "id": "r3d_8",
      "officialId": "R3D.8",
      "text": "All the cubes below have a different image on each side. Select the choice that could represent a rotation of the cube labeled X.",
      "options": [
       {
        "label": "A",
        "value": "a"
       },
       {
        "label": "B",
        "value": "b"
       },
       {
        "label": "C",
        "value": "c"
       },
       {
        "label": "D",
        "value": "d"
       },
       {
        "label": "E",
        "value": "e"
       },
       {
        "label": "F",
        "value": "f"
       },
       {
        "label": "G",
        "value": "g"
       },
       {
        "label": "H",
        "value": "h"
       }
      ],
      "correct": "g",
      "factor": "spatial",
      "requiresImage": true,
      "imageSource": "https://ars.els-cdn.com/content/image/1-s2.0-S0160289614000051-mmc1.pdf (Appendix A, p.6, item R3D.8)",
      "validated": true,
      "referenceProportionCorrect": 0.17
     }
    ]
   }
  ],
  "scoring": {
   "method": "1 point per correct answer, 0 for wrong or blank (no negative marking). Area score = number correct out of 4 for verbal, series, matrix and spatial; total = 0-16. Untimed in the original validation (timing allowed but not normed). 'correct' holds the option letter; official ICAR keys use option position numbers 1-8 (a=1, b=2 ...). Keys cross-checked between the supplement items (verbal/series keys verified by hand-solving) and the psychTools 'iqitems' scoring key.",
   "scales": [
    {
     "section": "verbal",
     "range": [
      0,
      4
     ],
     "bands": [
      {
       "min": 0,
       "max": 1,
       "label": "Still developing",
       "meaning": "These verbal reasoning questions felt tricky today. That's okay - four questions is a tiny sample and scores move a lot with practice, sleep and focus. Reading widely (newspapers, novels), word puzzles and explaining your reasoning out loud all help."
      },
      {
       "min": 2,
       "max": 2,
       "label": "Typical",
       "meaning": "You did about as well as most people on these verbal reasoning questions. A solid base you can build on. Reading widely (newspapers, novels), word puzzles and explaining your reasoning out loud all help."
      },
      {
       "min": 3,
       "max": 4,
       "label": "A likely strength",
       "meaning": "You did better than most people on these verbal reasoning questions. This may be one of your strengths. Careers that use language and logic - law, journalism, teaching, civil services, management - may suit you if your interests point there too."
      }
     ]
    },
    {
     "section": "series",
     "range": [
      0,
      4
     ],
     "bands": [
      {
       "min": 0,
       "max": 1,
       "label": "Still developing",
       "meaning": "These letter-and-number pattern questions felt tricky today. That's okay - four questions is a tiny sample and scores move a lot with practice, sleep and focus. Number puzzles, Sudoku and spotting patterns in maths practice can help."
      },
      {
       "min": 2,
       "max": 2,
       "label": "Typical",
       "meaning": "You did about as well as most people on these letter-and-number pattern questions. A solid base you can build on. Number puzzles, Sudoku and spotting patterns in maths practice can help."
      },
      {
       "min": 3,
       "max": 4,
       "label": "A likely strength",
       "meaning": "You did better than most people on these letter-and-number pattern questions. This may be one of your strengths. Spotting rules in sequences is useful in maths, coding, finance and data work."
      }
     ]
    },
    {
     "section": "matrix",
     "range": [
      0,
      4
     ],
     "bands": [
      {
       "min": 0,
       "max": 0,
       "label": "Still developing",
       "meaning": "These abstract pattern (matrix) questions felt tricky today. That's okay - four questions is a tiny sample and scores move a lot with practice, sleep and focus. Visual logic puzzles and pattern games are a fun way to practise."
      },
      {
       "min": 1,
       "max": 2,
       "label": "Typical",
       "meaning": "You did about as well as most people on these abstract pattern (matrix) questions. A solid base you can build on. Visual logic puzzles and pattern games are a fun way to practise."
      },
      {
       "min": 3,
       "max": 4,
       "label": "A likely strength",
       "meaning": "You did better than most people on these abstract pattern (matrix) questions. This may be one of your strengths. Abstract reasoning is useful in almost every field, especially science, engineering, computing and design."
      }
     ]
    },
    {
     "section": "spatial",
     "range": [
      0,
      4
     ],
     "bands": [
      {
       "min": 0,
       "max": 1,
       "label": "Typical",
       "meaning": "You did about as well as most people on these 3-D rotation questions. A solid base you can build on. These are the hardest questions in the test - most adults get only one right. Building with blocks, drawing objects from different angles, origami and 3-D games train this skill."
      },
      {
       "min": 2,
       "max": 4,
       "label": "A likely strength",
       "meaning": "You did better than most people on these 3-D rotation questions. This may be one of your strengths. Imagining objects in 3-D is especially useful in engineering, architecture, design, surgery, piloting and animation."
      }
     ]
    },
    {
     "section": "total",
     "range": [
      0,
      16
     ],
     "bands": [
      {
       "min": 0,
       "max": 5,
       "label": "Building up",
       "meaning": "Today's score was on the lower side. A short, untimed 16-question test is only a snapshot - your interests, effort, marks and teachers' views matter just as much. Use the area scores to pick one skill to practise."
      },
      {
       "min": 6,
       "max": 10,
       "label": "Around typical",
       "meaning": "You scored in the range most people do. Look at your strongest area and match it with your interests to explore careers."
      },
      {
       "min": 11,
       "max": 16,
       "label": "Above typical",
       "meaning": "You did well across the board. Use your strongest areas together with your interest profile to choose subjects and careers you'll enjoy."
      }
     ]
    }
   ],
   "profiles": [
    {
     "key": "verbal",
     "name": "Verbal reasoning",
     "description": "Understanding and reasoning with words and everyday logic.",
     "exampleCareersIndia": [
      "Law",
      "Journalism and mass communication",
      "Teaching",
      "Civil services (UPSC)",
      "Psychology and counselling",
      "Management and HR",
      "Content and copywriting"
     ],
     "evidence": "convention"
    },
    {
     "key": "series",
     "name": "Pattern and sequence reasoning (letters and numbers)",
     "description": "Finding the hidden rule in a sequence - closely related to numerical and fluid reasoning.",
     "exampleCareersIndia": [
      "Computer science / software",
      "Chartered accountancy and finance",
      "Data science and statistics",
      "Engineering",
      "Economics"
     ],
     "evidence": "convention"
    },
    {
     "key": "matrix",
     "name": "Abstract (non-verbal) reasoning",
     "description": "Solving new visual puzzles without relying on language - a good indicator of general problem-solving.",
     "exampleCareersIndia": [
      "Engineering",
      "Computer science",
      "Research science",
      "Design",
      "Medicine"
     ],
     "evidence": "convention"
    },
    {
     "key": "spatial",
     "name": "Spatial (3-D) reasoning",
     "description": "Imagining and rotating objects in your mind.",
     "exampleCareersIndia": [
      "Mechanical / civil engineering",
      "Architecture",
      "Product and industrial design",
      "Animation and game design",
      "Pilot",
      "Surgery and radiology"
     ],
     "evidence": "Longitudinal evidence (Wai, Lubinski & Benbow, 2009) links high adolescent spatial ability to later STEM degrees and occupations, over and above verbal and maths ability. Other mappings are a reasonable convention."
    }
   ],
   "notes": "Interpretation bands are BrainTest conventions, not ICAR norms. They are anchored to item difficulty from the large online SAPA sample (Condon & Revelle, 2014, Table 2: proportion correct, stored per item as 'referenceProportionCorrect'): verbal ~.61-.73, series ~.42-.62, matrix ~.36-.62, 3-D rotation only ~.17-.29 - so 3-D bands are set lower. With 4 items per area, area scores are unreliable (ICAR16 total alpha = .81, omega_h = .66; per-type reliabilities in the paper are for the full 60-item pool), so present area results as 'possible strengths', never as fixed labels, and never rank or select students on them. 'Numerical aptitude' is not a separate ICAR area: two verbal items (VR.4, VR.17) are arithmetic word problems and the letter-number series is the closest numeric-reasoning measure. Career-cluster mapping: only the spatial -> STEM link has strong longitudinal support (Wai, Lubinski & Benbow, 2009, Journal of Educational Psychology, 101(4), 817-835). The remaining mappings follow common differential-aptitude practice (e.g. the seven areas in the NCERT/CBSE 'Tamanna' aptitude test for Class 9-10) and are a reasonable convention, not validated by ICAR. Aptitude should always be combined with interests (Career Interest Profile) and school performance."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Not an IQ test, not a diagnosis, and not suitable for admission or selection decisions. Validity (Condon & Revelle, 2014): ICAR16 alpha .81 in ~4,500 online participants; ICAR item scores correlate with self-reported SAT/ACT and, in a university sample, with a brief commercial ability test; factor structure shows four item-type factors plus a strong general factor. Samples were international but mostly US, English-speaking, adult and online; no Indian school-age norms or validation were found. Items are in English; reading level of the verbal items and unfamiliar names (Zach, Joshua) could disadvantage students with weaker English - consider offering help with reading the question (not the answer). Results are affected by test anxiety, device/screen size for images, and effort. Item security: ICAR asks users not to circulate keys; keep 'correct' fields server-side.",
  "questionCount": 16
 },
 "career-interest": {
  "id": "career-interest",
  "title": "Career Interest Profile",
  "audience": "student",
  "ageRange": "13+ (Class 8-12 and college). Developed and validated with US adults and students aged roughly 16+; reading level is simple but no validation data for Indian students aged 13-15 were found.",
  "instrument": "O*NET Interest Profiler Short Form (60 items; Holland RIASEC), computerized 5-point response format",
  "citation": "Rounds, J., Su, R., Lewis, P., & Rivkin, D. (2010). O*NET Interest Profiler Short Form Psychometric Characteristics: Summary. Raleigh, NC: National Center for O*NET Development. Instrument: O*NET Interest Profiler Short Form (v1), U.S. Department of Labor, Employment & Training Administration.",
  "sourceUrls": [
   "https://www.onetcenter.org/IPSF.html",
   "https://www.onetcenter.org/dl_tools/ipsf/Interest_Profiler.pdf",
   "https://www.onetcenter.org/dl_files/IPSF_Psychometric.pdf",
   "https://www.onetcenter.org/dl_tools/ipsf/IP_Score_Report_Starter.pdf",
   "https://www.onetcenter.org/license_tools.html"
  ],
  "license": {
   "status": "Dual licence from USDOL/ETA: (1) CC BY-ND 4.0 for verbatim copies; (2) O*NET Tools Developer License for modified/extended versions (requires validation of the modified product and a modification disclaimer). Note: NOT public domain, despite some secondary sources saying so.",
   "commercialUseAllowed": true,
   "notes": "CC BY-ND 4.0 permits commercial use if items are used verbatim and attributed. Required attribution (adapt from licence page): 'This page includes information from the O*NET Career Exploration Tools by the U.S. Department of Labor, Employment and Training Administration (USDOL/ETA). Used under the CC BY-ND 4.0 license.' with links to the licence. 'O*NET' is a USDOL/ETA trademark: use it only as an adjective (e.g. 'O*NET Interest Profiler'), never as a noun, plural or possessive. Do NOT reword, translate (e.g. into Hindi) or swap items for India-specific ones under CC BY-ND - that would require the O*NET Tools Developer License, the disclaimer 'BrainTest has modified all or some of this information. USDOL/ETA has not approved, endorsed, or tested these modifications.', and the licence's validation requirement. Our own interpretation text and Indian career examples are separate content, not modifications of the tool, but should be clearly labelled as BrainTest's own.",
   "url": "https://www.onetcenter.org/license_tools.html"
  },
  "estimatedMinutes": 10,
  "instructions": "Below are 60 work activities. For each one, choose how much you would like doing it. Don't worry about how much education or training you'd need, or how much money you'd earn - just think about whether you would enjoy the activity itself. There are no right or wrong answers.",
  "sections": [
   {
    "id": "main",
    "title": "Work activities",
    "instructions": "How much would you like to do this activity?",
    "options": [
     {
      "label": "Strongly dislike",
      "value": 0
     },
     {
      "label": "Dislike",
      "value": 1
     },
     {
      "label": "Unsure",
      "value": 2
     },
     {
      "label": "Like",
      "value": 3
     },
     {
      "label": "Strongly like",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "ip_1",
      "text": "Build kitchen cabinets",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 1
     },
     {
      "id": "ip_2",
      "text": "Teach an individual an exercise routine",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 7
     },
     {
      "id": "ip_3",
      "text": "Buy and sell stocks and bonds",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 9
     },
     {
      "id": "ip_4",
      "text": "Manage a retail store",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 10
     },
     {
      "id": "ip_5",
      "text": "Develop a spreadsheet using computer software",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 11
     },
     {
      "id": "ip_6",
      "text": "Proofread records or forms",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 12
     },
     {
      "id": "ip_7",
      "text": "Lay brick or tile",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 14
     },
     {
      "id": "ip_8",
      "text": "Help people with personal or emotional problems",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 20
     },
     {
      "id": "ip_9",
      "text": "Operate a beauty salon or barber shop",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 22
     },
     {
      "id": "ip_10",
      "text": "Repair household appliances",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 26
     },
     {
      "id": "ip_11",
      "text": "Develop a new medicine",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 27
     },
     {
      "id": "ip_12",
      "text": "Write books or plays",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 29
     },
     {
      "id": "ip_13",
      "text": "Play a musical instrument",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 30
     },
     {
      "id": "ip_14",
      "text": "Install software across computers on a large network",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 36
     },
     {
      "id": "ip_15",
      "text": "Study ways to reduce water pollution",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 39
     },
     {
      "id": "ip_16",
      "text": "Give career guidance to people",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 44
     },
     {
      "id": "ip_17",
      "text": "Raise fish in a fish hatchery",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 49
     },
     {
      "id": "ip_18",
      "text": "Compose or arrange music",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 54
     },
     {
      "id": "ip_19",
      "text": "Operate a calculator",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 60
     },
     {
      "id": "ip_20",
      "text": "Assemble electronic parts",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 61
     },
     {
      "id": "ip_21",
      "text": "Drive a truck to deliver packages to offices and homes",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 62
     },
     {
      "id": "ip_22",
      "text": "Perform rehabilitation therapy",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 67
     },
     {
      "id": "ip_23",
      "text": "Do volunteer work at a non-profit organization",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 68
     },
     {
      "id": "ip_24",
      "text": "Conduct chemical experiments",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 75
     },
     {
      "id": "ip_25",
      "text": "Draw pictures",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 77
     },
     {
      "id": "ip_26",
      "text": "Teach children how to play sports",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 80
     },
     {
      "id": "ip_27",
      "text": "Create special effects for movies",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 90
     },
     {
      "id": "ip_28",
      "text": "Teach sign language to people who are deaf or hard of hearing",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 92
     },
     {
      "id": "ip_29",
      "text": "Manage a department within a large company",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 93
     },
     {
      "id": "ip_30",
      "text": "Keep shipping and receiving records",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 96
     },
     {
      "id": "ip_31",
      "text": "Study the movement of planets",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 100
     },
     {
      "id": "ip_32",
      "text": "Help conduct a group therapy session",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 104
     },
     {
      "id": "ip_33",
      "text": "Calculate the wages of employees",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 107
     },
     {
      "id": "ip_34",
      "text": "Examine blood samples using a microscope",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 111
     },
     {
      "id": "ip_35",
      "text": "Investigate the cause of a fire",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 112
     },
     {
      "id": "ip_36",
      "text": "Paint sets for plays",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 113
     },
     {
      "id": "ip_37",
      "text": "Start your own business",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 117
     },
     {
      "id": "ip_38",
      "text": "Negotiate business contracts",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 118
     },
     {
      "id": "ip_39",
      "text": "Inventory supplies using a hand-held computer",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 120
     },
     {
      "id": "ip_40",
      "text": "Represent a client in a lawsuit",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 129
     },
     {
      "id": "ip_41",
      "text": "Develop a way to better predict the weather",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 135
     },
     {
      "id": "ip_42",
      "text": "Work in a biology lab",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 136
     },
     {
      "id": "ip_43",
      "text": "Write scripts for movies or television shows",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 137
     },
     {
      "id": "ip_44",
      "text": "Market a new line of clothing",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 142
     },
     {
      "id": "ip_45",
      "text": "Test the quality of parts before shipment",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 146
     },
     {
      "id": "ip_46",
      "text": "Invent a replacement for sugar",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 147
     },
     {
      "id": "ip_47",
      "text": "Perform jazz or tap dance",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 149
     },
     {
      "id": "ip_48",
      "text": "Take care of children at a day-care center",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 151
     },
     {
      "id": "ip_49",
      "text": "Sell merchandise at a department store",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 154
     },
     {
      "id": "ip_50",
      "text": "Record rent payments",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 155
     },
     {
      "id": "ip_51",
      "text": "Repair and install locks",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 158
     },
     {
      "id": "ip_52",
      "text": "Sing in a band",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 161
     },
     {
      "id": "ip_53",
      "text": "Manage a clothing store",
      "factor": "E",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 166
     },
     {
      "id": "ip_54",
      "text": "Keep inventory records",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 167
     },
     {
      "id": "ip_55",
      "text": "Set up and operate machines to make products",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 169
     },
     {
      "id": "ip_56",
      "text": "Put out forest fires",
      "factor": "R",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 170
     },
     {
      "id": "ip_57",
      "text": "Do laboratory tests to identify diseases",
      "factor": "I",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 171
     },
     {
      "id": "ip_58",
      "text": "Edit movies",
      "factor": "A",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 173
     },
     {
      "id": "ip_59",
      "text": "Teach a high-school class",
      "factor": "S",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 176
     },
     {
      "id": "ip_60",
      "text": "Stamp, sort, and distribute mail for an organization",
      "factor": "C",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 179
     }
    ]
   }
  ],
  "scoring": {
   "method": "Sum the 10 item values (0-4) for each RIASEC type -> six scores of 0-40. Rank the six scores; the three highest, in order, form the student's 3-letter Holland code (e.g. 'IAS'). Ties: show tied types together and let the student pick the one whose activities fit best (O*NET's own tie rule). Paper alternative (official): tick/Like = 1, otherwise 0 -> 0-10 per type. No reverse-scored items.",
   "scales": [
    {
     "section": "R",
     "range": [
      0,
      40
     ],
     "bands": [
      {
       "min": 0,
       "max": 10,
       "label": "Not a strong pull right now",
       "meaning": "Realistic activities don't excite you much at the moment, and that's completely fine. Interests grow with experience, so if you've never tried these activities, consider giving one a go before ruling them out."
      },
      {
       "min": 11,
       "max": 20,
       "label": "Some interest",
       "meaning": "You like a few Realistic activities but not all of them. Look back at which ones you rated 'Like' - they can point to a hobby, club or elective worth exploring."
      },
      {
       "min": 21,
       "max": 30,
       "label": "Clear interest",
       "meaning": "You clearly enjoy Realistic kinds of work. If this is one of your top three areas, look at the example careers below and talk to someone who works in one of them."
      },
      {
       "min": 31,
       "max": 40,
       "label": "Strong interest",
       "meaning": "Realistic activities really appeal to you. This is a strong signal worth building on - try a project, internship, workshop or online course in this area to test it in real life."
      }
     ]
    },
    {
     "section": "I",
     "range": [
      0,
      40
     ],
     "bands": [
      {
       "min": 0,
       "max": 10,
       "label": "Not a strong pull right now",
       "meaning": "Investigative activities don't excite you much at the moment, and that's completely fine. Interests grow with experience, so if you've never tried these activities, consider giving one a go before ruling them out."
      },
      {
       "min": 11,
       "max": 20,
       "label": "Some interest",
       "meaning": "You like a few Investigative activities but not all of them. Look back at which ones you rated 'Like' - they can point to a hobby, club or elective worth exploring."
      },
      {
       "min": 21,
       "max": 30,
       "label": "Clear interest",
       "meaning": "You clearly enjoy Investigative kinds of work. If this is one of your top three areas, look at the example careers below and talk to someone who works in one of them."
      },
      {
       "min": 31,
       "max": 40,
       "label": "Strong interest",
       "meaning": "Investigative activities really appeal to you. This is a strong signal worth building on - try a project, internship, workshop or online course in this area to test it in real life."
      }
     ]
    },
    {
     "section": "A",
     "range": [
      0,
      40
     ],
     "bands": [
      {
       "min": 0,
       "max": 10,
       "label": "Not a strong pull right now",
       "meaning": "Artistic activities don't excite you much at the moment, and that's completely fine. Interests grow with experience, so if you've never tried these activities, consider giving one a go before ruling them out."
      },
      {
       "min": 11,
       "max": 20,
       "label": "Some interest",
       "meaning": "You like a few Artistic activities but not all of them. Look back at which ones you rated 'Like' - they can point to a hobby, club or elective worth exploring."
      },
      {
       "min": 21,
       "max": 30,
       "label": "Clear interest",
       "meaning": "You clearly enjoy Artistic kinds of work. If this is one of your top three areas, look at the example careers below and talk to someone who works in one of them."
      },
      {
       "min": 31,
       "max": 40,
       "label": "Strong interest",
       "meaning": "Artistic activities really appeal to you. This is a strong signal worth building on - try a project, internship, workshop or online course in this area to test it in real life."
      }
     ]
    },
    {
     "section": "S",
     "range": [
      0,
      40
     ],
     "bands": [
      {
       "min": 0,
       "max": 10,
       "label": "Not a strong pull right now",
       "meaning": "Social activities don't excite you much at the moment, and that's completely fine. Interests grow with experience, so if you've never tried these activities, consider giving one a go before ruling them out."
      },
      {
       "min": 11,
       "max": 20,
       "label": "Some interest",
       "meaning": "You like a few Social activities but not all of them. Look back at which ones you rated 'Like' - they can point to a hobby, club or elective worth exploring."
      },
      {
       "min": 21,
       "max": 30,
       "label": "Clear interest",
       "meaning": "You clearly enjoy Social kinds of work. If this is one of your top three areas, look at the example careers below and talk to someone who works in one of them."
      },
      {
       "min": 31,
       "max": 40,
       "label": "Strong interest",
       "meaning": "Social activities really appeal to you. This is a strong signal worth building on - try a project, internship, workshop or online course in this area to test it in real life."
      }
     ]
    },
    {
     "section": "E",
     "range": [
      0,
      40
     ],
     "bands": [
      {
       "min": 0,
       "max": 10,
       "label": "Not a strong pull right now",
       "meaning": "Enterprising activities don't excite you much at the moment, and that's completely fine. Interests grow with experience, so if you've never tried these activities, consider giving one a go before ruling them out."
      },
      {
       "min": 11,
       "max": 20,
       "label": "Some interest",
       "meaning": "You like a few Enterprising activities but not all of them. Look back at which ones you rated 'Like' - they can point to a hobby, club or elective worth exploring."
      },
      {
       "min": 21,
       "max": 30,
       "label": "Clear interest",
       "meaning": "You clearly enjoy Enterprising kinds of work. If this is one of your top three areas, look at the example careers below and talk to someone who works in one of them."
      },
      {
       "min": 31,
       "max": 40,
       "label": "Strong interest",
       "meaning": "Enterprising activities really appeal to you. This is a strong signal worth building on - try a project, internship, workshop or online course in this area to test it in real life."
      }
     ]
    },
    {
     "section": "C",
     "range": [
      0,
      40
     ],
     "bands": [
      {
       "min": 0,
       "max": 10,
       "label": "Not a strong pull right now",
       "meaning": "Conventional activities don't excite you much at the moment, and that's completely fine. Interests grow with experience, so if you've never tried these activities, consider giving one a go before ruling them out."
      },
      {
       "min": 11,
       "max": 20,
       "label": "Some interest",
       "meaning": "You like a few Conventional activities but not all of them. Look back at which ones you rated 'Like' - they can point to a hobby, club or elective worth exploring."
      },
      {
       "min": 21,
       "max": 30,
       "label": "Clear interest",
       "meaning": "You clearly enjoy Conventional kinds of work. If this is one of your top three areas, look at the example careers below and talk to someone who works in one of them."
      },
      {
       "min": 31,
       "max": 40,
       "label": "Strong interest",
       "meaning": "Conventional activities really appeal to you. This is a strong signal worth building on - try a project, internship, workshop or online course in this area to test it in real life."
      }
     ]
    }
   ],
   "profiles": [
    {
     "key": "R",
     "name": "Realistic (Doers)",
     "description": "You like practical, hands-on work - building, fixing, operating machines, working with tools, plants, animals or outdoors. You enjoy seeing a real, physical result from your effort.",
     "exampleCareersIndia": [
      "Mechanical / civil / electrical engineer",
      "ITI technician (electrician, fitter, mechanic)",
      "Agricultural scientist or agri-entrepreneur",
      "Pilot or aircraft maintenance engineer",
      "Merchant Navy officer",
      "Armed forces / police / fire services",
      "Physiotherapist",
      "Chef / hotel management (kitchen operations)"
     ]
    },
    {
     "key": "I",
     "name": "Investigative (Thinkers)",
     "description": "You enjoy asking 'why?' and finding out. You like science, research, puzzles, analysing data and solving problems with ideas and evidence.",
     "exampleCareersIndia": [
      "Doctor (MBBS) or medical researcher",
      "Scientist (ISRO, DRDO, CSIR labs, IISER/IISc research)",
      "Data scientist / AI-ML engineer",
      "Pharmacist or biotechnologist",
      "Economist or statistician",
      "Forensic scientist",
      "Software engineer",
      "Environmental scientist"
     ]
    },
    {
     "key": "A",
     "name": "Artistic (Creators)",
     "description": "You like expressing ideas through art, music, writing, design, drama or media. You enjoy originality, imagination and work without too many fixed rules.",
     "exampleCareersIndia": [
      "Graphic / UI-UX designer",
      "Fashion or textile designer (NIFT, NID)",
      "Architect",
      "Animator / VFX artist",
      "Journalist, writer or content creator",
      "Film-maker or editor",
      "Musician, dancer or performing artist",
      "Advertising creative"
     ]
    },
    {
     "key": "S",
     "name": "Social (Helpers)",
     "description": "You like helping, teaching, caring for and guiding people. You are good at listening and enjoy work where you make a difference to others.",
     "exampleCareersIndia": [
      "Teacher or professor",
      "Psychologist or school counsellor",
      "Nurse or other healthcare professional",
      "Social worker / NGO professional",
      "Speech therapist or occupational therapist",
      "Human resources professional",
      "Civil services (IAS/IPS) with public-service focus",
      "Sports coach or fitness trainer"
     ]
    },
    {
     "key": "E",
     "name": "Enterprising (Persuaders)",
     "description": "You like leading, persuading, selling and making things happen. You enjoy business, taking initiative, competition and influencing decisions.",
     "exampleCareersIndia": [
      "Entrepreneur / start-up founder",
      "Lawyer (CLAT / law school route)",
      "Marketing or sales manager",
      "Management (MBA) roles",
      "Investment banker or stockbroker",
      "Event manager",
      "Politician or public-policy professional",
      "Hotel and hospitality manager"
     ]
    },
    {
     "key": "C",
     "name": "Conventional (Organisers)",
     "description": "You like order, accuracy and clear procedures. You enjoy working with numbers, records, data and systems, and you notice details others miss.",
     "exampleCareersIndia": [
      "Chartered Accountant (CA) or Cost Accountant (CMA)",
      "Company Secretary (CS)",
      "Banking (IBPS / SBI officer)",
      "Actuary",
      "Auditor or tax consultant",
      "Data analyst",
      "Office administration / government clerical services (SSC)",
      "Logistics and supply-chain coordinator"
     ]
    }
   ],
   "notes": "Response scale and 0-40 range follow the O*NET IP-SF psychometric summary (computerized version: 0 = strongly dislike ... 4 = strongly like; scores summed per type, range 0-40). Items are listed in the official 'order of presentation' (ascending O*NET Interest Profiler Long Form item number, which interleaves the six types); 'sourceItemNumber' holds that Long Form number. Two items use the current form wording, which differs slightly from the 2010 report: 'Teach sign language to people who are deaf or hard of hearing' (2010: '...people with hearing disabilities') and 'Install software across computers on a large network' (2010: 'Load computer software into a large computer network'). The bands above are BrainTest conventions for feedback, not O*NET norms - O*NET interprets profiles by rank (top three), not by cut-offs. Indian career examples are BrainTest's editorial mapping by Holland type, not part of the O*NET instrument; O*NET's own career lists (IP_Career_Listings.pdf) are US occupations."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Not a diagnosis and not an ability test: it measures what a student likes, not what they are good at. Validity evidence (Rounds et al., 2010; US samples N = 1,061 developmental, N = 132 retest): Cronbach's alpha .78-.87 (mean .81); retest alphas .78-.90; test-retest correlations .78-.86 (mean .82); good convergent/discriminant validity with the Long Form. Normative and validation samples were US adults/young people; no published validation of the O*NET IP-SF with Indian school students was found in this research (a Brazilian Portuguese adaptation exists). The RIASEC model is used widely in India, but cross-cultural research shows the hexagonal structure fits less neatly in some non-US samples, so treat results as a starting point for discussion. Interests in Class 8-10 are still developing and can change, so results should be revisited after a year or two. Some activities (e.g. 'Perform jazz or tap dance', 'Raise fish in a fish hatchery') may be unfamiliar to Indian students; encourage answering based on how the activity sounds. Items cannot be localised under the CC BY-ND licence.",
  "questionCount": 60
 },
 "depression": {
  "id": "depression",
  "title": "Depression Screening",
  "audience": "adult",
  "instrument": "PHQ-9 (Patient Health Questionnaire, 9-item depression module)",
  "citation": "Kroenke K, Spitzer RL, Williams JBW. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med. 2001;16(9):606-613. doi:10.1046/j.1525-1497.2001.016009606.x",
  "sourceUrls": [
   "https://www.phqscreeners.com/select-screener",
   "https://pmc.ncbi.nlm.nih.gov/articles/PMC1495268/",
   "https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf",
   "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8155718/",
   "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2022057&reg=48&lang=2"
  ],
  "license": {
   "status": "Free to use; no permission required (developed with an educational grant from Pfizer Inc.)",
   "commercialUseAllowed": true,
   "notes": "The official PHQ Screeners site (Pfizer) states that 'no permission is required to reproduce, translate, display or distribute' the PHQ screeners. The official PHQ-9 form (APA-hosted copy) carries the line: 'Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc. No permission required to reproduce, translate, display or distribute.' Keep that attribution line on the page and keep the item wording unchanged.",
   "url": "https://www.phqscreeners.com/select-screener"
  },
  "estimatedMinutes": 3,
  "instructions": "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  "sections": [
   {
    "id": "phq9",
    "title": "Mood (PHQ-9)",
    "instructions": "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    "options": [
     {
      "label": "Not at all",
      "value": 0
     },
     {
      "label": "Several days",
      "value": 1
     },
     {
      "label": "More than half the days",
      "value": 2
     },
     {
      "label": "Nearly every day",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "phq9_1",
      "text": "Little interest or pleasure in doing things",
      "reverse": false
     },
     {
      "id": "phq9_2",
      "text": "Feeling down, depressed, or hopeless",
      "reverse": false
     },
     {
      "id": "phq9_3",
      "text": "Trouble falling or staying asleep, or sleeping too much",
      "reverse": false
     },
     {
      "id": "phq9_4",
      "text": "Feeling tired or having little energy",
      "reverse": false
     },
     {
      "id": "phq9_5",
      "text": "Poor appetite or overeating",
      "reverse": false
     },
     {
      "id": "phq9_6",
      "text": "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
      "reverse": false
     },
     {
      "id": "phq9_7",
      "text": "Trouble concentrating on things, such as reading the newspaper or watching television",
      "reverse": false
     },
     {
      "id": "phq9_8",
      "text": "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
      "reverse": false
     },
     {
      "id": "phq9_9",
      "text": "Thoughts that you would be better off dead or of hurting yourself in some way",
      "reverse": false,
      "safetyItem": true
     }
    ]
   },
   {
    "id": "phq9_function",
    "title": "Impact on daily life",
    "instructions": "Show only if any PHQ-9 item was answered above 0. Not included in the score.",
    "scored": false,
    "options": [
     {
      "label": "Not difficult at all",
      "value": 0
     },
     {
      "label": "Somewhat difficult",
      "value": 1
     },
     {
      "label": "Very difficult",
      "value": 2
     },
     {
      "label": "Extremely difficult",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "phq9_difficulty",
      "text": "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
      "reverse": false,
      "scored": false
     }
    ]
   }
  ],
  "scoring": {
   "method": "Sum items phq9_1 to phq9_9 (each 0-3). No reverse-scored items. Total 0-27. The difficulty question is not added to the total. Always check phq9_9 separately for safety, whatever the total.",
   "scales": [
    {
     "section": "phq9",
     "range": [
      0,
      27
     ],
     "bands": [
      {
       "min": 0,
       "max": 4,
       "label": "Minimal or no depression",
       "meaning": "Your answers suggest few or no depressive symptoms over the past two weeks. No specific action is needed. Check in again if your mood changes."
      },
      {
       "min": 5,
       "max": 9,
       "label": "Mild depression",
       "meaning": "You may be having some low-mood symptoms. Looking after sleep, staying active, keeping in touch with people you trust, and doing things you usually enjoy can help. Consider re-taking this check in 2-4 weeks, and talk to a doctor or counsellor if it does not improve."
      },
      {
       "min": 10,
       "max": 14,
       "label": "Moderate depression",
       "meaning": "Your answers suggest depressive symptoms that are probably affecting your daily life. This is a level at which talking to a doctor, psychologist or counsellor is recommended, so they can assess things properly and discuss support or treatment options."
      },
      {
       "min": 15,
       "max": 19,
       "label": "Moderately severe depression",
       "meaning": "Your answers suggest a fairly high level of depressive symptoms. This is not a diagnosis, but we recommend seeing a doctor or mental health professional soon. Depression is common and treatable, and support can make a real difference."
      },
      {
       "min": 20,
       "max": 27,
       "label": "Severe depression",
       "meaning": "Your answers suggest a high level of depressive symptoms. Please arrange to see a doctor or mental health professional as soon as you can. You do not have to manage this on your own. If you ever feel unsafe, call Tele-MANAS on 14416 or emergency services on 112."
      }
     ]
    }
   ],
   "clinicalCutoff": "Total ≥10 is the standard screening cut-off for major depression (sensitivity 88%, specificity 88% in Kroenke 2001); recommend clinician follow-up. Severity cut-offs are 5, 10, 15 and 20.",
   "notes": "Kroenke 2001 suggested actions: 5-9 watchful waiting and repeat PHQ-9 at follow-up; 10-14 consider a treatment plan (counselling, follow-up and/or medication); 15-19 active treatment; ≥20 immediate start of treatment and referral to a mental health specialist. On a consumer site, phrase these only as 'consider speaking with a professional'. A response of 'Very difficult' or 'Extremely difficult' on phq9_difficulty should strengthen the recommendation for follow-up. Item 9 overrides the score band: any value >0 must show the safety message (see safety)."
  },
  "safety": {
   "itemIds": [
    "phq9_9"
   ],
   "rule": "any value > 0 (i.e. 'Several days', 'More than half the days' or 'Nearly every day'). Trigger regardless of total score. Show immediately on the results page, above the score, and do not hide it behind a paywall, sign-up or 'see more'.",
   "message": "You mentioned having thoughts that you would be better off dead or of hurting yourself. Thank you for being honest. Thoughts like these are more common than people think, and support is available right now. Please talk to someone today. You can call Tele-MANAS free, 24x7, on 14416 or 1-800-891-4416 to speak with a trained counsellor in your language. If you are in immediate danger or might act on these thoughts, call 112 or go to the nearest hospital emergency department. It can also help to tell someone you trust and stay with them.",
   "resources": [
    {
     "name": "Tele-MANAS (National Tele Mental Health Programme, Ministry of Health & Family Welfare, Govt. of India), toll-free, 24x7, multilingual",
     "contact": "14416",
     "url": "https://telemanas.mohfw.gov.in/"
    },
    {
     "name": "Tele-MANAS (alternate toll-free number)",
     "contact": "1-800-891-4416",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2022057&reg=48&lang=2"
    },
    {
     "name": "Emergency Response Support System (police, fire, ambulance), India",
     "contact": "112",
     "url": "https://112.gov.in/"
    }
   ]
  },
  "componentsOf": null,
  "clinicalNotes": "Screening tool, not a diagnosis. Validated in 6,000 patients across 8 US primary-care and 7 obstetrics-gynaecology clinics (PHQ Primary Care Study; Kroenke 2001). At a score of ≥10, sensitivity and specificity were both 88% for major depression against a structured mental health professional interview. Item 9 is a screen for passive death wishes or self-harm thoughts, not a suicide-risk assessment. A positive answer calls for a human follow-up (for example the C-SSRS or a clinician), and the site should not try to judge risk itself. India: Kochhar PH, Rajadhyaksha SS, Suvarna VR. 'Translation and validation of brief Patient Health Questionnaire against DSM IV as a tool to diagnose major depressive disorder in Indian patients.' J Postgrad Med. 2007;53(2):102-107, which reports good validity of Hindi/Marathi translations against clinical diagnosis. I recalled this citation from memory and could not fetch it in this session, so verify it before quoting figures. De Man J et al. (2021, Frontiers in Psychology 12:676398; n=1,209, rural Kerala) found the PHQ-9 acceptably reliable (omega-h 0.72) and unidimensional in an Indian population. Official translations in Hindi and several other Indian languages can be downloaded free from phqscreeners.com. The item wording here was checked against the official PHQ-9 form (APA-hosted PDF, 'Developed by Drs. Robert L. Spitzer...' footer) and matches the Kroenke 2001 publication. Tele-MANAS numbers 14416 and 1-800-891-4416 were confirmed in multiple PIB (Press Information Bureau, Govt. of India) releases. The telemanas.mohfw.gov.in portal itself could not be fetched because of a certificate error. 112 is India's national single emergency number (ERSS).",
  "questionCount": 10
 },
 "emotional-wellbeing-alt": {
  "id": "emotional-wellbeing-alt",
  "title": "Emotional Wellbeing (Mood Check)",
  "audience": "student",
  "ageRange": "11–17 (validated in 13–17-year-olds; Indian validation in 14–18-year-olds)",
  "respondent": "self",
  "instrument": "PHQ-A: PHQ-9 Modified for Adolescents ('PHQ-9: Modified for Teens'), 9 scored items plus 4 supplementary items",
  "citation": "Johnson, J. G., Harris, E. S., Spitzer, R. L., & Williams, J. B. W. (2002). The Patient Health Questionnaire for Adolescents: validation of an instrument for the assessment of mental disorders among adolescent primary care patients. J Adolesc Health, 30(3), 196–204. doi:10.1016/s1054-139x(01)00333-0. Form: 'Modified with permission by the GLAD-PC team from the PHQ-9 (Spitzer, Williams, & Kroenke, 1999), Revised PHQ-A (Johnson, 2002), and the CDS (DISC Development Group, 2000)', Guidelines for Adolescent Depression in Primary Care (GLAD-PC) Toolkit, Version 2, 2010. Cut-off validation: Richardson, L. P., et al. (2010). Evaluation of the PHQ-9 item for detecting major depression among adolescents. Pediatrics, 126(6), 1117–1123.",
  "sourceUrls": [
   "https://www.nimh.nih.gov/index%2ephp/research/research-conducted-at-nimh/asq-toolkit-materials/asq-tool/phq-9-modified-for-adolescents-phq-a",
   "https://myprivia.com/sites/default/files/2024-08/flbsp_phq9.pdf",
   "https://www.phqscreeners.com/select-screener",
   "https://www.washington.edu/news/2010/11/09/screening-test-validated-for-depression-in-adolescents/",
   "https://telemanas.mohfw.gov.in/home",
   "https://iitk.ac.in/counsel/TeleManas.php"
  ],
  "license": {
   "status": "Free to use. The PHQ family (developed by Drs Spitzer, Williams, Kroenke and colleagues with an educational grant from Pfizer) is distributed with the statement: 'All PHQ, GAD-7 screeners and translations are downloadable from this website and no permission is required to reproduce, translate, display or distribute them.' The adolescent-modified form is published freely by NIMH (US government, ASQ Toolkit) and the GLAD-PC / AAP toolkit ('Modified with permission by the GLAD-PC team', 'Use with Permission').",
   "commercialUseAllowed": true,
   "notes": "The PHQ terms explicitly allow reproduction, translation, display and distribution without permission and do not restrict commercial use. The teen modification is used freely in US primary care, EHRs and digital-health products. Caveats: (1) phqscreeners.com does not list the PHQ-A itself, and the GLAD-PC form carries a 'Use with Permission' line, so it is best to cite Johnson et al. 2002, GLAD-PC and Pfizer and keep the wording unchanged. (2) The AAP notes that it does not review or endorse changes to its toolkit documents. For extra certainty, email Pfizer (via phqscreeners.com) or the GLAD-PC team (thereachinstitute.org). Comparison of other options: SWEMWBS/WEMWBS needs a registered licence from the University of Warwick, and commercial use carries annual fees (from £90 for 30 participants up to £6,000 for 30,000; wemwbslicence@warwick.ac.uk). RCADS-25 is free, but its user guide says 'Any commercial use or resale of this instrument or its current and future derivative works is strictly prohibited' (Chorpita & Spence, UCLA Child FIRST). The SMFQ (Angold & Costello, Duke) is free to download for clinical and research use with citation, but no commercial terms were found. So the PHQ-A is the best freely usable, adolescent-validated option with an Indian adolescent validation.",
   "url": "https://www.phqscreeners.com/select-screener"
  },
  "estimatedMinutes": 4,
  "instructions": "How often have you been bothered by each of the following symptoms during the past two weeks? For each symptom put an \"X\" in the box beneath the answer that best describes how you have been feeling.",
  "sections": [
   {
    "id": "main",
    "title": "Over the past two weeks",
    "instructions": "How often have you been bothered by each of the following symptoms during the past two weeks?",
    "options": [
     {
      "label": "Not At All",
      "value": 0
     },
     {
      "label": "Several Days",
      "value": 1
     },
     {
      "label": "More Than Half the Days",
      "value": 2
     },
     {
      "label": "Nearly Every Day",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "phqa_1",
      "text": "Feeling down, depressed, irritable, or hopeless?",
      "reverse": false,
      "factor": "depression"
     },
     {
      "id": "phqa_2",
      "text": "Little interest or pleasure in doing things?",
      "reverse": false,
      "factor": "depression"
     },
     {
      "id": "phqa_3",
      "text": "Trouble falling asleep, staying asleep, or sleeping too much?",
      "reverse": false,
      "factor": "depression"
     },
     {
      "id": "phqa_4",
      "text": "Poor appetite, weight loss, or overeating?",
      "reverse": false,
      "factor": "depression"
     },
     {
      "id": "phqa_5",
      "text": "Feeling tired, or having little energy?",
      "reverse": false,
      "factor": "depression"
     },
     {
      "id": "phqa_6",
      "text": "Feeling bad about yourself – or feeling that you are a failure, or that you have let yourself or your family down?",
      "reverse": false,
      "factor": "depression"
     },
     {
      "id": "phqa_7",
      "text": "Trouble concentrating on things like school work, reading, or watching TV?",
      "reverse": false,
      "factor": "depression"
     },
     {
      "id": "phqa_8",
      "text": "Moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you were moving around a lot more than usual?",
      "reverse": false,
      "factor": "depression"
     },
     {
      "id": "phqa_9",
      "text": "Thoughts that you would be better off dead, or of hurting yourself in some way?",
      "reverse": false,
      "factor": "depression",
      "safetyItem": true
     }
    ]
   },
   {
    "id": "followup_yesno",
    "title": "A few more questions",
    "instructions": "Please answer Yes or No.",
    "options": [
     {
      "label": "Yes",
      "value": 1
     },
     {
      "label": "No",
      "value": 0
     }
    ],
    "questions": [
     {
      "id": "phqa_pastyear",
      "text": "In the past year have you felt depressed or sad most days, even if you felt okay sometimes?",
      "reverse": false,
      "factor": "unscored_chronicity"
     },
     {
      "id": "phqa_suicide_month",
      "text": "Has there been a time in the past month when you have had serious thoughts about ending your life?",
      "reverse": false,
      "factor": "unscored_safety",
      "safetyItem": true
     },
     {
      "id": "phqa_suicide_ever",
      "text": "Have you EVER, in your WHOLE LIFE, tried to kill yourself or made a suicide attempt?",
      "reverse": false,
      "factor": "unscored_safety",
      "safetyItem": true
     }
    ]
   },
   {
    "id": "followup_difficulty",
    "title": "How much is this affecting you?",
    "instructions": null,
    "options": [
     {
      "label": "Not difficult at all",
      "value": 0
     },
     {
      "label": "Somewhat difficult",
      "value": 1
     },
     {
      "label": "Very difficult",
      "value": 2
     },
     {
      "label": "Extremely difficult",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "phqa_difficulty",
      "text": "If you are experiencing any of the problems on this form, how difficult have these problems made it for you to do your work, take care of things at home or get along with other people?",
      "reverse": false,
      "factor": "unscored_functioning"
     }
    ]
   }
  ],
  "scoring": {
   "method": "Severity score = sum of items 1–9 (each 0–3), range 0–27. The past-year, difficulty and the two suicide questions are NOT added to the score. They are used for clinical context and safety triage. Severity bands follow the PHQ-9 standard (Kroenke, Spitzer & Williams, 2001), as printed on GLAD-PC / AAP PHQ-A forms.",
   "scales": [
    {
     "section": "main",
     "range": [
      0,
      27
     ],
     "bands": [
      {
       "min": 0,
       "max": 4,
       "label": "Minimal",
       "meaning": "Your mood seems to be in a good place over the last two weeks. Keep doing the things that help you feel well, like sleep, friends, being active and hobbies."
      },
      {
       "min": 5,
       "max": 9,
       "label": "Mild",
       "meaning": "You've had some low or stressed days recently. That's very common, especially around exams or changes. Look after the basics (sleep, food, movement, time with people you like) and talk to someone you trust if it doesn't ease up in a couple of weeks."
      },
      {
       "min": 10,
       "max": 14,
       "label": "Moderate",
       "meaning": "You've been feeling low or drained more often than not. You deserve support. Please talk with a parent, teacher, school counsellor or doctor. Feeling like this is treatable, and talking really does help."
      },
      {
       "min": 15,
       "max": 19,
       "label": "Moderately severe",
       "meaning": "Things seem to have been really hard for you lately. Please reach out to a trusted adult and a mental-health professional soon. You don't have to wait until it gets worse. Tele-MANAS (14416) can talk with you any time, for free."
      },
      {
       "min": 20,
       "max": 27,
       "label": "Severe",
       "meaning": "You've been going through a very difficult time. Please tell a trusted adult today and get help from a doctor or mental-health professional as soon as possible. You can also call Tele-MANAS on 14416 (free, 24×7). If you feel unsafe, call 112."
      }
     ]
    }
   ],
   "clinicalCutoff": "Adolescents: a total of 11 or more gave 89.5% sensitivity and 77.5% specificity for major depression (Richardson et al., Pediatrics 2010, ages 13–17). The adult-standard 10 or more (moderate) is also commonly used as the referral threshold. Any non-zero answer to item 9, or 'Yes' to either suicide question, triggers the safety pathway whatever the total score.",
   "notes": "No reverse-scored items. Item 1 includes 'irritable' and item 7 says 'school work', which are the adolescent-specific changes from the adult PHQ-9. The NIMH web version shows 0–3 options for the past-year question, but the GLAD-PC form (and the original PHQ-A design) uses Yes/No, which is used here. Item wording was cross-checked between the NIMH ASQ Toolkit page and the GLAD-PC 'PHQ-9: Modified for Teens' form (Version 2, 2010)."
  },
  "safety": {
   "triggers": [
    "phqa_9 >= 1 (any thoughts of being better off dead or self-harm)",
    "phqa_suicide_month == Yes",
    "phqa_suicide_ever == Yes",
    "total score >= 20"
   ],
   "immediateAction": "When a trigger fires, show a calm, non-alarming support screen BEFORE (or instead of) the score: acknowledge the student's feelings, say clearly that help is available, encourage them to tell a trusted adult (parent, teacher, school counsellor) today, and show the crisis resources below with tap-to-call links. Do not show a 'severe' label or numeric score first. If an account or consent with a guardian or school exists, follow the agreed escalation protocol. Never only store the answer silently. The original form's advice is: 'If you have had thoughts that you would be better off dead or of hurting yourself in some way, please discuss this with your Health Care Clinician, go to a hospital emergency room or call 911.' For India, replace 911 with 112 and Tele-MANAS. Consider adding the NIMH ASQ (Ask Suicide-Screening Questions, free, public-domain US government tool) as a structured follow-up when item 9 is positive.",
   "resources": [
    {
     "name": "Tele-MANAS – Govt. of India National Tele Mental Health Programme (free, 24×7, multiple Indian languages)",
     "phone": "14416",
     "altPhone": "1-800-891-4416",
     "url": "https://telemanas.mohfw.gov.in/home"
    },
    {
     "name": "Emergency (police / ambulance / all emergencies, India)",
     "phone": "112"
    },
    {
     "name": "Go to the nearest hospital emergency department if in immediate danger"
    }
   ],
   "suggestedMessage": "Thank you for being honest. It sounds like you've been carrying something really heavy. You don't have to deal with this alone. Please talk to someone you trust today, like a parent, teacher or school counsellor. You can also call Tele-MANAS on 14416 any time, day or night, for free. If you feel you might hurt yourself right now, please call 112 or go to the nearest hospital."
  },
  "componentsOf": null,
  "clinicalNotes": "Screening tool, not a diagnosis. The PHQ-A screens for depressive symptoms in the past 2 weeks, following DSM criteria for major depression. Validation: Johnson et al. (2002) in 403 adolescent primary-care patients aged 13–18. Richardson et al. (2010, Pediatrics 126:1117) in 442 youths aged 13–17: a cut-off of 11 or more gave 89.5% sensitivity and 77.5% specificity for major depression. It is the depression screener recommended by the AAP / GLAD-PC for ages 12 and over, and the USPSTF recommends depression screening for ages 12–18. INDIA: Ganguly, S., Samanta, M., Roy, P., et al. (2013). Patient Health Questionnaire-9 as an effective tool for screening of depression among Indian adolescents. J Adolesc Health, 52(5), 546–551. This study of 233 urban school adolescents aged 14–18 in Kolkata (DISC-IV reference) found good accuracy, test-retest reliability and internal consistency (α ≈ .84) for the PHQ-9. The exact cut-off statistics from Ganguly et al. were not checked against the full text. A qualitative study (Mazzuca et al., 2019, Transcultural Psychiatry) found PHQ-9 items broadly matched local expressions of distress among adolescent girls in rural Karnataka. Official Hindi and other Indian-language PHQ-9 translations are available on phqscreeners.com (adult wording). Because this tool asks about suicidal thoughts, the website MUST have the safety flow above. Ideally the service also has a designated responder or escalation process, and clear wording at the start that answers are not monitored in real time (if true). For users under 18, get verifiable parental or guardian consent (DPDP Act 2023), and say in advance whether a guardian or school will be told about risk answers. Licence verdict: free to use, including commercially, under the PHQ 'no permission required' terms, but keep attribution and the original wording.",
  "questionCount": 13
 },
 "emotional-wellbeing": {
  "id": "emotional-wellbeing",
  "title": "Emotional Wellbeing",
  "audience": "student",
  "ageRange": "11–17",
  "respondent": "self",
  "instrument": "Strengths and Difficulties Questionnaire (SDQ), self-report version for 11–17 year olds (S11-17), single-sided 25-item version without impact supplement, English (UK)",
  "citation": "Goodman, R., Meltzer, H., & Bailey, V. (1998). The Strengths and Difficulties Questionnaire: A pilot study on the validity of the self-report version. European Child & Adolescent Psychiatry, 7, 125–130. Goodman, R. (1997). The Strengths and Difficulties Questionnaire: A research note. J Child Psychol Psychiatry, 38, 581–586. Questionnaire © Robert Goodman, 2005. Scoring: youthinmind, 'Scoring the Strengths & Difficulties Questionnaire for age 4-17 or 18+' (20 June 2016).",
  "sourceUrls": [
   "https://www.sdqinfo.org/",
   "https://www.sdqinfo.org/py/sdqinfo/b3.py?language=Englishqz(UK)",
   "https://www.sdqinfo.org/a0.html",
   "https://pmc.ncbi.nlm.nih.gov/articles/PMC4799638/"
  ],
  "license": {
   "status": "Copyright, not in the public domain (© Robert Goodman; distributed by youthinmind Ltd).",
   "commercialUseAllowed": false,
   "notes": "The official sdqinfo.org copyright notice says SDQs 'are copyright documents that are not in the public domain. As such, they may not be modified in any way (e.g. changing the wording of questions, adding questions or administering only subsets of questions).' Paper versions may be photocopied free of charge only by individuals or non-profit organisations that make no charge to families. Users 'are not permitted to create or distribute electronic versions for any purpose without prior authorization from youthinmind. If you are interested in making translations or creating electronic versions you MUST first contact support@youthinmind.com.' Unauthorised translations (for example Hindi or other Indian languages) are not allowed, although youthinmind publishes several official Indian-language translations. So a web or online version on a commercial site needs a written licence from youthinmind (support@youthinmind.com), and fees usually apply. youthinmind also runs its own online administration and scoring (sdqscore.org). The SDQ must be given in full (all 25 items) and unmodified. The items are included here only for the internal prototype. Do not publish them without a licence. Use 'emotional-wellbeing-alt.json' (PHQ-A) for a freely usable version.",
   "url": "https://www.sdqinfo.org/"
  },
  "estimatedMinutes": 5,
  "instructions": "For each item, please mark the box for Not True, Somewhat True or Certainly True. It would help us if you answered all items as best you can even if you are not absolutely certain. Please give your answers on the basis of how things have been for you over the last six months.",
  "sections": [
   {
    "id": "main",
    "title": "Strengths and Difficulties Questionnaire",
    "instructions": null,
    "options": [
     {
      "label": "Not True",
      "value": 0
     },
     {
      "label": "Somewhat True",
      "value": 1
     },
     {
      "label": "Certainly True",
      "value": 2
     }
    ],
    "questions": [
     {
      "id": "sdq_1",
      "text": "I try to be nice to other people. I care about their feelings",
      "reverse": false,
      "factor": "prosocial"
     },
     {
      "id": "sdq_2",
      "text": "I am restless, I cannot stay still for long",
      "reverse": false,
      "factor": "hyperactivity"
     },
     {
      "id": "sdq_3",
      "text": "I get a lot of headaches, stomach-aches or sickness",
      "reverse": false,
      "factor": "emotional"
     },
     {
      "id": "sdq_4",
      "text": "I usually share with others (food, games, pens etc.)",
      "reverse": false,
      "factor": "prosocial"
     },
     {
      "id": "sdq_5",
      "text": "I get very angry and often lose my temper",
      "reverse": false,
      "factor": "conduct"
     },
     {
      "id": "sdq_6",
      "text": "I am usually on my own. I generally play alone or keep to myself",
      "reverse": false,
      "factor": "peer"
     },
     {
      "id": "sdq_7",
      "text": "I usually do as I am told",
      "reverse": true,
      "factor": "conduct"
     },
     {
      "id": "sdq_8",
      "text": "I worry a lot",
      "reverse": false,
      "factor": "emotional"
     },
     {
      "id": "sdq_9",
      "text": "I am helpful if someone is hurt, upset or feeling ill",
      "reverse": false,
      "factor": "prosocial"
     },
     {
      "id": "sdq_10",
      "text": "I am constantly fidgeting or squirming",
      "reverse": false,
      "factor": "hyperactivity"
     },
     {
      "id": "sdq_11",
      "text": "I have one good friend or more",
      "reverse": true,
      "factor": "peer"
     },
     {
      "id": "sdq_12",
      "text": "I fight a lot. I can make other people do what I want",
      "reverse": false,
      "factor": "conduct"
     },
     {
      "id": "sdq_13",
      "text": "I am often unhappy, down-hearted or tearful",
      "reverse": false,
      "factor": "emotional"
     },
     {
      "id": "sdq_14",
      "text": "Other people my age generally like me",
      "reverse": true,
      "factor": "peer"
     },
     {
      "id": "sdq_15",
      "text": "I am easily distracted, I find it difficult to concentrate",
      "reverse": false,
      "factor": "hyperactivity"
     },
     {
      "id": "sdq_16",
      "text": "I am nervous in new situations. I easily lose confidence",
      "reverse": false,
      "factor": "emotional"
     },
     {
      "id": "sdq_17",
      "text": "I am kind to younger children",
      "reverse": false,
      "factor": "prosocial"
     },
     {
      "id": "sdq_18",
      "text": "I am often accused of lying or cheating",
      "reverse": false,
      "factor": "conduct"
     },
     {
      "id": "sdq_19",
      "text": "Other children or young people pick on me or bully me",
      "reverse": false,
      "factor": "peer"
     },
     {
      "id": "sdq_20",
      "text": "I often volunteer to help others (parents, teachers, children)",
      "reverse": false,
      "factor": "prosocial"
     },
     {
      "id": "sdq_21",
      "text": "I think before I do things",
      "reverse": true,
      "factor": "hyperactivity"
     },
     {
      "id": "sdq_22",
      "text": "I take things that are not mine from home, school or elsewhere",
      "reverse": false,
      "factor": "conduct"
     },
     {
      "id": "sdq_23",
      "text": "I get on better with adults than with people my own age",
      "reverse": false,
      "factor": "peer"
     },
     {
      "id": "sdq_24",
      "text": "I have many fears, I am easily scared",
      "reverse": false,
      "factor": "emotional"
     },
     {
      "id": "sdq_25",
      "text": "I finish the work I'm doing. My attention is good",
      "reverse": true,
      "factor": "hyperactivity"
     }
    ]
   }
  ],
  "scoring": {
   "method": "Score Not True = 0, Somewhat True = 1, Certainly True = 2, except reverse items 7, 11, 14, 21 and 25 (Not True = 2, Somewhat True = 1, Certainly True = 0). Five subscales of 5 items each, each 0–10: Emotional symptoms (3, 8, 13, 16, 24); Conduct problems (5, 7R, 12, 18, 22); Hyperactivity/inattention (2, 10, 15, 21R, 25R); Peer relationship problems (6, 11R, 14R, 19, 23); Prosocial (1, 4, 9, 17, 20). Total difficulties = emotional + conduct + hyperactivity + peer (0–40; the prosocial scale is not included). Optional: Internalising = emotional + peer (0–20); Externalising = conduct + hyperactivity (0–20). A subscale can be scaled up pro rata if at least 3 of its 5 items were answered. Total difficulties counts as missing if any of the 4 component scores is missing. Bands below use the official NEWER 4-band categorisation for SELF-completed SDQs (ages 4–17 table; self-report applies to ages 11–17).",
   "scales": [
    {
     "section": "total_difficulties",
     "range": [
      0,
      40
     ],
     "bands": [
      {
       "min": 0,
       "max": 14,
       "label": "Close to average",
       "meaning": "Your answers look similar to most young people your age. That's great. Keep looking after yourself with sleep, friends, movement and things you enjoy."
      },
      {
       "min": 15,
       "max": 17,
       "label": "Slightly raised",
       "meaning": "You've ticked a few more difficulties than most people your age. This is common and often passes, but it can help to talk with someone you trust, like a parent, teacher or school counsellor, about what's been hard lately."
      },
      {
       "min": 18,
       "max": 19,
       "label": "High",
       "meaning": "You seem to be dealing with quite a few difficulties right now. You don't have to handle them alone. Talking to a school counsellor, doctor or another trusted adult is a good next step."
      },
      {
       "min": 20,
       "max": 40,
       "label": "Very high",
       "meaning": "Things seem to be really tough for you at the moment. Please reach out to a trusted adult, school counsellor or mental-health professional soon. If you ever feel unsafe or overwhelmed, call Tele-MANAS on 14416 (free, 24×7) or 112 in an emergency."
      }
     ]
    },
    {
     "section": "emotional",
     "range": [
      0,
      10
     ],
     "bands": [
      {
       "min": 0,
       "max": 4,
       "label": "Close to average",
       "meaning": "Worries and low moods seem to be at a usual level for your age."
      },
      {
       "min": 5,
       "max": 5,
       "label": "Slightly raised",
       "meaning": "You may be feeling a bit more worried, low or nervous than usual. Doing things that calm you and talking to someone you trust can help."
      },
      {
       "min": 6,
       "max": 6,
       "label": "High",
       "meaning": "Worries, fears or sadness seem to be weighing on you. A school counsellor or doctor can help you find ways to feel better."
      },
      {
       "min": 7,
       "max": 10,
       "label": "Very high",
       "meaning": "You seem to be carrying a lot of worry or sadness. Please talk to a trusted adult or a mental-health professional soon. Help really does work."
      }
     ]
    },
    {
     "section": "conduct",
     "range": [
      0,
      10
     ],
     "bands": [
      {
       "min": 0,
       "max": 3,
       "label": "Close to average",
       "meaning": "Anger and getting into trouble seem to be at a usual level for your age."
      },
      {
       "min": 4,
       "max": 4,
       "label": "Slightly raised",
       "meaning": "Anger or arguments may be showing up a bit more than usual. Noticing what triggers you is a great first step."
      },
      {
       "min": 5,
       "max": 5,
       "label": "High",
       "meaning": "Anger or conflict seems to be causing problems for you. A counsellor can help you find ways to handle strong feelings."
      },
      {
       "min": 6,
       "max": 10,
       "label": "Very high",
       "meaning": "Anger, conflict or getting into trouble seems to be a big struggle right now. Talking with a counsellor or mental-health professional could really help."
      }
     ]
    },
    {
     "section": "hyperactivity",
     "range": [
      0,
      10
     ],
     "bands": [
      {
       "min": 0,
       "max": 5,
       "label": "Close to average",
       "meaning": "Focus and restlessness seem to be at a usual level for your age."
      },
      {
       "min": 6,
       "max": 6,
       "label": "Slightly raised",
       "meaning": "You may find it a bit harder than others to sit still or concentrate. Short study blocks and movement breaks can help."
      },
      {
       "min": 7,
       "max": 7,
       "label": "High",
       "meaning": "Concentration and restlessness may be getting in the way. It could help to talk with a teacher or counsellor about support."
      },
      {
       "min": 8,
       "max": 10,
       "label": "Very high",
       "meaning": "Focus and restlessness seem to be a real challenge. A professional check-up could help find out why and what would help. See also our Focus & Attention Check."
      }
     ]
    },
    {
     "section": "peer",
     "range": [
      0,
      10
     ],
     "bands": [
      {
       "min": 0,
       "max": 2,
       "label": "Close to average",
       "meaning": "Friendships and getting along with people your age seem to be going okay."
      },
      {
       "min": 3,
       "max": 3,
       "label": "Slightly raised",
       "meaning": "Friendships may feel a bit tricky at times. That's very common at your age. Clubs, sports or shared hobbies can be good ways to connect."
      },
      {
       "min": 4,
       "max": 4,
       "label": "High",
       "meaning": "You may be feeling left out or having trouble with others your age. If anyone is bullying you, please tell a trusted adult."
      },
      {
       "min": 5,
       "max": 10,
       "label": "Very high",
       "meaning": "Things with people your age seem hard right now, and you might feel lonely or picked on. You deserve support, so please talk to a parent, teacher or counsellor."
      }
     ]
    },
    {
     "section": "prosocial",
     "range": [
      0,
      10
     ],
     "bands": [
      {
       "min": 7,
       "max": 10,
       "label": "Close to average",
       "meaning": "You show kindness and care for others. That's a real strength."
      },
      {
       "min": 6,
       "max": 6,
       "label": "Slightly lowered",
       "meaning": "You're helpful and kind in many ways. There may be a few more chances to connect with and help others."
      },
      {
       "min": 5,
       "max": 5,
       "label": "Low",
       "meaning": "Helping or sharing may not come as easily right now. Sometimes that happens when we're stressed or feeling low ourselves."
      },
      {
       "min": 0,
       "max": 4,
       "label": "Very low",
       "meaning": "You may not feel like helping or connecting with others much at the moment. This can happen when life feels hard. Talking with someone you trust might help."
      }
     ]
    }
   ],
   "clinicalCutoff": "Official self-report bands. Original 3-band: Total difficulties 0–15 normal, 16–19 borderline, 20–40 abnormal; Emotional 0–5 / 6 / 7–10; Conduct 0–3 / 4 / 5–10; Hyperactivity 0–5 / 6 / 7–10; Peer 0–3 / 4–5 / 6–10; Prosocial 6–10 / 5 / 0–4. Newer 4-band (used above): Total 0–14 / 15–17 / 18–19 / 20–40; Emotional 0–4 / 5 / 6 / 7–10; Conduct 0–3 / 4 / 5 / 6–10; Hyperactivity 0–5 / 6 / 7 / 8–10; Peer 0–2 / 3 / 4 / 5–10; Prosocial 7–10 / 6 / 5 / 0–4. These are based on UK population data (about 80% / 10% / 5% / 5%).",
   "notes": "Reverse-scored items: 7, 11, 14, 21, 25. 'Somewhat True' is always 1. The cut-offs are UK-derived. Bhola et al. (2016, Bangalore) found that Indian sample-specific cut-offs gave LOWER rates of difficulty than the published UK cut-offs, so UK bands may over-identify Indian adolescents. youthinmind notes that these bands are only a 'rough-and-ready way of screening'. The impact supplement (single-sided version) is not included. Do not show it unless licensed and the full double-sided version is used."
  },
  "safety": {
   "trigger": "No self-harm item in the SDQ. Show support resources if Total difficulties or Emotional subscale is in the 'Very high' band.",
   "resources": [
    {
     "name": "Tele-MANAS (Govt. of India national tele-mental health helpline, free, 24×7, 20+ languages)",
     "phone": "14416 or 1-800-891-4416",
     "url": "https://telemanas.mohfw.gov.in/"
    },
    {
     "name": "National emergency number",
     "phone": "112"
    }
   ]
  },
  "componentsOf": null,
  "clinicalNotes": "Screening tool, not a diagnosis. The SDQ self-report is validated for ages 11–17 (Goodman et al., 1998). It is a brief behavioural screen with 4 difficulty scales plus a prosocial strengths scale and has been used in more than 80 languages. INDIA: Bhola, P. et al. (2016, Indian J Community Med; PMC4799638) used the SDQ self-report with 1,087 pre-university students in Bangalore. About 10% scored in the abnormal range for total difficulties, and local cut-offs gave lower prevalence than UK cut-offs. Stevanovic et al. (2014/2015, Epidemiology and Psychiatric Sciences) tested the SDQ self-report in 2,367 adolescents aged 13–18 from 7 countries including India. The original 5-factor model fit poorly, and a bifactor model fit adequately in India. Official youthinmind translations exist for several Indian languages (check sdqinfo.org). Item wording is verbatim from the official youthinmind English (UK) S11-17 single-sided PDF downloaded from sdqinfo.org; double spaces between sentences were reduced to single spaces. Scoring and bands are from the official youthinmind scoring document (20 June 2016). LICENCE: an online or commercial version is NOT permitted without youthinmind authorisation, so do not launch publicly with these items. Minors: get parental or guardian consent for users under 18 (DPDP Act 2023), and show support resources for high scores.",
  "questionCount": 25
 },
 "exam-stress": {
  "id": "exam-stress",
  "title": "Exam Stress & Test Anxiety",
  "audience": "student",
  "ageRange": "10–22 (validated in Class 5 / fifth-grade pupils and in college students; used with Indian Class 10–12 board-exam and NEET aspirants)",
  "respondent": "self",
  "instrument": "Westside Test Anxiety Scale (WTAS), 10 items",
  "citation": "Driscoll, R. (2007). Westside Test Anxiety Scale Validation. American Test Anxiety Association. ERIC Document ED495968. Scale © 2004 Richard Driscoll, Ph.D.",
  "sourceUrls": [
   "https://files.eric.ed.gov/fulltext/ED495968.pdf",
   "https://pennstatelearning.psu.edu/istudy_tutorials/testanxiety/TestAnxiety/testanxiety.htm",
   "https://pmc.ncbi.nlm.nih.gov/articles/PMC10523350/",
   "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4129138/"
  ],
  "license": {
   "status": "Copyrighted (© 2004 Richard Driscoll, Ph.D.) but released for free copying. The official ERIC appendix says: 'You have permission to copy this scale for personal use and for institutional uses (but not for resale).' The validation paper describes it as 'public access and free of charge to schools'.",
   "commercialUseAllowed": false,
   "notes": "Free for personal and institutional (school, college, counselling) use. Resale is explicitly excluded, and there is no explicit grant for commercial or for-profit online use. Offering it FREE on BrainTest with attribution is probably within the spirit of the permission, but charging for the test, or putting it behind a paywall, could count as resale. For any paid or commercial use, get written permission from Dr Richard Driscoll / American Test Anxiety Association (the author of the ERIC document). Keep the copyright line '© 2004 by Richard Driscoll, Ph.D.' on the page. Alternatives considered: the Cognitive Test Anxiety Scale (Cassady & Johnson, 2002) is published in an Elsevier journal, and reuse needs permission from the author or publisher. The Test Anxiety Inventory (Spielberger) is sold commercially by Mind Garden, so it is not free. The Children's Test Anxiety Scale (Wren & Benson, 2004) is journal-copyrighted and has no free licence. On balance WTAS is the most openly usable of these: it is brief, validated with both school pupils and college students, and already used in Indian studies.",
   "url": "https://files.eric.ed.gov/fulltext/ED495968.pdf"
  },
  "estimatedMinutes": 4,
  "instructions": "Rate how true each of the following is of you, from extremely or always true, to not at all or never true. Use the following 5 point scale.",
  "sections": [
   {
    "id": "main",
    "title": "Exams and you",
    "instructions": "Think about how you usually feel and think around important exams and tests.",
    "options": [
     {
      "label": "Extremely or always true",
      "value": 5
     },
     {
      "label": "Highly or usually true",
      "value": 4
     },
     {
      "label": "Moderately or sometimes true",
      "value": 3
     },
     {
      "label": "Slightly or seldom true",
      "value": 2
     },
     {
      "label": "Not at all or never true",
      "value": 1
     }
    ],
    "questions": [
     {
      "id": "wtas_1",
      "text": "The closer I am to a major exam, the harder it is for me to concentrate on the material.",
      "reverse": false,
      "factor": "impairment"
     },
     {
      "id": "wtas_2",
      "text": "When I study, I worry that I will not remember the material on the exam.",
      "reverse": false,
      "factor": "worry"
     },
     {
      "id": "wtas_3",
      "text": "During important exams, I think that I am doing awful or that I may fail.",
      "reverse": false,
      "factor": "worry"
     },
     {
      "id": "wtas_4",
      "text": "I lose focus on important exams, and I cannot remember material that I knew before the exam.",
      "reverse": false,
      "factor": "impairment"
     },
     {
      "id": "wtas_5",
      "text": "I finally remember the answer to exam questions after the exam is already over.",
      "reverse": false,
      "factor": "impairment"
     },
     {
      "id": "wtas_6",
      "text": "I worry so much before a major exam that I am too worn out to do my best on the exam.",
      "reverse": false,
      "factor": "impairment"
     },
     {
      "id": "wtas_7",
      "text": "I feel out of sorts or not really myself when I take important exams.",
      "reverse": false,
      "factor": "impairment"
     },
     {
      "id": "wtas_8",
      "text": "I find that my mind sometimes wanders when I am taking important exams.",
      "reverse": false,
      "factor": "impairment"
     },
     {
      "id": "wtas_9",
      "text": "After an exam, I worry about whether I did well enough.",
      "reverse": false,
      "factor": "worry"
     },
     {
      "id": "wtas_10",
      "text": "I struggle with writing assignments, or avoid them as long as I can. I feel that whatever I do will not be good enough.",
      "reverse": false,
      "factor": "worry"
     }
    ]
   }
  ],
  "scoring": {
   "method": "Add up the 10 item scores (each 1–5, total 10–50) and divide the sum by 10. This average (1.0–5.0) is the Test Anxiety score. Averages of 10 whole-number items always come out to one decimal place.",
   "scales": [
    {
     "section": "main",
     "range": [
      1.0,
      5.0
     ],
     "bands": [
      {
       "min": 1.0,
       "max": 1.9,
       "label": "Comfortably low test anxiety",
       "meaning": "Exams don't seem to throw you off much. You're able to stay calm and think clearly when it counts. Keep doing what works for you, like steady revision and good sleep before exams."
      },
      {
       "min": 2.0,
       "max": 2.4,
       "label": "Normal or average test anxiety",
       "meaning": "You feel some exam nerves, like most students do. A little stress can even help you focus. Regular study breaks, practice papers and a good night's sleep can help keep it at this level."
      },
      {
       "min": 2.5,
       "max": 2.9,
       "label": "High normal test anxiety",
       "meaning": "Exam worries show up for you a bit more than average, but they're still in the normal range. Simple habits can make a real difference: slow breathing before a paper, planning revision early, and reminding yourself that one exam doesn't define you."
      },
      {
       "min": 3.0,
       "max": 3.4,
       "label": "Moderately high test anxiety",
       "meaning": "Worry around exams may sometimes get in the way of showing what you know. You're not alone, and this can get better with practice. Try relaxation exercises, timed practice tests and talking to a teacher, school counsellor or parent about how you feel."
      },
      {
       "min": 3.5,
       "max": 3.9,
       "label": "High test anxiety",
       "meaning": "Exam stress seems to be affecting your concentration and how well you can do. That can be tiring and frustrating, and it's a sign to get some support. A school counsellor or a mental-health professional can teach you proven ways to manage test anxiety."
      },
      {
       "min": 4.0,
       "max": 5.0,
       "label": "Extremely high test anxiety",
       "meaning": "Exams seem to bring a lot of worry and distress for you right now. Please don't carry this alone. Talk to a trusted adult, a school counsellor or a mental-health professional soon. Test anxiety responds well to the right help. If stress ever feels overwhelming, you can call Tele-MANAS on 14416 (free, 24×7)."
      }
     ]
    }
   ],
   "clinicalCutoff": "No formal diagnostic cut-off. The author treats scores of 3.0 or above as moderately high to extremely high test anxiety that may impair performance, so 3.0+ is a reasonable flag for suggesting support. Official bands: 1.0–1.9 comfortably low; 2.0–2.5 normal or average; 2.5–2.9 high normal; 3.0–3.4 moderately high (some items rated 4 = high); 3.5–3.9 high (half or more of the items rated 4 = high); 4.0–5.0 extremely high (items rated 4 = high and 5 = extreme).",
   "notes": "No reverse-scored items. The official interpretation table overlaps at 2.5 (it lists both '2.0–2.5 Normal' and '2.5–2.9 High normal'). Here 2.5 is assigned to 'High normal'; you can change that if you prefer. The 'factor' tags (worry vs impairment) are descriptive only. Driscoll describes 6 impairment items and 4 worry/dread items without saying which is which, so the per-item factor labels here are our own and should not be scored as subscales. Later factor-analytic studies (for example a Malaysian university sample, Kenyan pupils) found 1–2 factors, so use the total score only."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Screening tool, not a diagnosis. The WTAS screens for test-anxiety impairment (cognitive worry plus self-rated performance impairment) and deliberately has no physical-arousal items. Validation (Driscoll, 2007): change scores correlated with test-score gains, r = .49 in 25 anxious college students and r = .40 in 34 anxious fifth graders. Later psychometric studies include Malaysian university students (two-factor structure, gender invariance) and Kenyan primary pupils (adequate internal consistency, some disordered response categories). INDIA: there is no formal Indian psychometric validation, but the scale is widely used in Indian studies. Thiriveedhi et al. (2023, Cureus 15(8):e44240, PMC10523350) used the standard 10-item WTAS with 200 NEET-UG 2020 aspirants (mean age 18.3). A Tamil Nadu study of Class 10 and 12 board-exam students (PMC4129138) used a locally modified 25-item version. Other Indian studies have used it with medical undergraduates and with Dehradun Class 10–12 pupils. Item wording was taken verbatim from the official ERIC appendix (ED495968). Driscoll's validation was in English, so check that younger Indian students understand idioms such as 'out of sorts'. Do not reword items. If a simpler-language version is needed, it should be piloted. Minors: the scale is low-risk, but for students under 18 the site should get parental or guardian consent (or school consent) before collecting identifiable data, in line with India's DPDP Act 2023 requirements for children's data. Offer support resources (school counsellor; Tele-MANAS 14416 / 1-800-891-4416) on the results page.",
  "questionCount": 10
 },
 "focus-attention": {
  "id": "focus-attention",
  "title": "Focus & Attention Check",
  "audience": "student",
  "ageRange": "6–18 (SNAP-IV norms cover school-age children and adolescents; BrainTest target 11–18)",
  "respondent": "parent",
  "instrument": "SNAP-IV (Swanson, Nolan and Pelham, 4th revision): the 18 ADHD items (items 1–18 of the SNAP-IV-26 Teacher and Parent Rating Scale), i.e. the 'SNAP-IV-18'. The 8 oppositional-defiant items (19–26) are left out because this test is only about focus and attention. Parent form. The same items and wording are used for a teacher form, which has different cut-offs.",
  "citation": "Swanson, J. M. (1992). School-based assessment and interventions for ADD students. Irvine, CA: KC Publishing. SNAP-IV items follow DSM-IV ADHD criteria. Normative data: Bussing, R., Fernandez, M., Harwood, M., et al. (2008). Parent and teacher SNAP-IV ratings of attention deficit hyperactivity disorder symptoms: psychometric properties and normative ratings from a school district sample. Assessment, 15(3), 317–328. doi:10.1177/1073191107313888 (PMC3623293).",
  "sourceUrls": [
   "https://www.psychdb.com/_media/child/adhd_snap-iv_26.pdf",
   "https://texastechphysicians.com/clinics/lubbock/documents/psychiatry/SNAP-IV%20Parent%20and%20Teacher%20Rating%20Scale.pdf",
   "https://depts.washington.edu/dbpeds/Screening%20Tools/SNAP.pdf",
   "https://bhh.psychiatry.ufl.edu/wordpress/files/2024/02/SNAP-IV-18-item-Scoring-Guide.pdf",
   "https://pmc.ncbi.nlm.nih.gov/articles/PMC3623293/",
   "https://en.wikipedia.org/wiki/Swanson,_Nolan_and_Pelham_Teacher_and_Parent_Rating_Scale"
  ],
  "license": {
   "status": "Freely distributed and widely described as free or public-domain (CADDRA toolkit, NovoPsych, university clinic forms, Swanson's former adhd.net site). However, no formal licence document or explicit public-domain statement from Dr James M. Swanson (UC Irvine) was found. Distributed forms credit 'James M. Swanson, Ph.D., University of California, Irvine'.",
   "commercialUseAllowed": false,
   "notes": "Set to false as a precaution because no primary written grant for commercial use was found. In practice the SNAP-IV is reproduced freely by clinics, toolkits (CADDRA) and digital-health vendors. Before commercial launch, email Dr James M. Swanson (UC Irvine / Florida International University) for written confirmation, and credit him on the page. Why other options were not chosen: (1) ASRS v1.1 is a self-report scale, but it was built for adults. Its copyright is held by WHO / NYU / Harvard. Free individual screening is allowed with a WHO copyright acknowledgement (Harvard NCS memo), but commercial and electronic use goes through NYU licensing (license.tov.med.nyu.edu). Adolescent data are limited to small studies (Adler et al. 2012, J Child Adolesc Psychopharmacol 22(3):238-244; Sonnby et al. 2015, Sweden), so it is not recommended as the main tool for 11–18. (2) ASRS-5 has the same NYU licensing. (3) NICHQ Vanderbilt is copyrighted by AAP/NICHQ, and commercial or electronic use needs permission. (4) Conners 4 self-report (MHS) is sold commercially. There is no freely licensed, adolescent-validated ADHD self-report scale, so a parent (or teacher) rated SNAP-IV is the best free option.",
   "url": "https://www.psychdb.com/_media/child/adhd_snap-iv_26.pdf"
  },
  "estimatedMinutes": 5,
  "instructions": "This questionnaire should be filled in by a parent or guardian (or a teacher) who knows the student well, not by the student. For each item, check the column which best describes this child.",
  "sections": [
   {
    "id": "main",
    "title": "Attention and activity",
    "instructions": "For each item, check the column which best describes this child:",
    "options": [
     {
      "label": "Not At All",
      "value": 0
     },
     {
      "label": "Just A Little",
      "value": 1
     },
     {
      "label": "Quite A Bit",
      "value": 2
     },
     {
      "label": "Very Much",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "snap_1",
      "text": "Often fails to give close attention to details or makes careless mistakes in schoolwork or tasks",
      "reverse": false,
      "factor": "inattention"
     },
     {
      "id": "snap_2",
      "text": "Often has difficulty sustaining attention in tasks or play activities",
      "reverse": false,
      "factor": "inattention"
     },
     {
      "id": "snap_3",
      "text": "Often does not seem to listen when spoken to directly",
      "reverse": false,
      "factor": "inattention"
     },
     {
      "id": "snap_4",
      "text": "Often does not follow through on instructions and fails to finish schoolwork, chores, or duties",
      "reverse": false,
      "factor": "inattention"
     },
     {
      "id": "snap_5",
      "text": "Often has difficulty organizing tasks and activities",
      "reverse": false,
      "factor": "inattention"
     },
     {
      "id": "snap_6",
      "text": "Often avoids, dislikes, or reluctantly engages in tasks requiring sustained mental effort",
      "reverse": false,
      "factor": "inattention"
     },
     {
      "id": "snap_7",
      "text": "Often loses things necessary for activities (e.g., toys, school assignments, pencils, or books)",
      "reverse": false,
      "factor": "inattention"
     },
     {
      "id": "snap_8",
      "text": "Often is distracted by extraneous stimuli",
      "reverse": false,
      "factor": "inattention"
     },
     {
      "id": "snap_9",
      "text": "Often is forgetful in daily activities",
      "reverse": false,
      "factor": "inattention"
     },
     {
      "id": "snap_10",
      "text": "Often fidgets with hands or feet or squirms in seat",
      "reverse": false,
      "factor": "hyperactivity_impulsivity"
     },
     {
      "id": "snap_11",
      "text": "Often leaves seat in classroom or in other situations in which remaining seated is expected",
      "reverse": false,
      "factor": "hyperactivity_impulsivity"
     },
     {
      "id": "snap_12",
      "text": "Often runs about or climbs excessively in situations in which it is inappropriate",
      "reverse": false,
      "factor": "hyperactivity_impulsivity"
     },
     {
      "id": "snap_13",
      "text": "Often has difficulty playing or engaging in leisure activities quietly",
      "reverse": false,
      "factor": "hyperactivity_impulsivity"
     },
     {
      "id": "snap_14",
      "text": "Often is \"on the go\" or often acts as if \"driven by a motor\"",
      "reverse": false,
      "factor": "hyperactivity_impulsivity"
     },
     {
      "id": "snap_15",
      "text": "Often talks excessively",
      "reverse": false,
      "factor": "hyperactivity_impulsivity"
     },
     {
      "id": "snap_16",
      "text": "Often blurts out answers before questions have been completed",
      "reverse": false,
      "factor": "hyperactivity_impulsivity"
     },
     {
      "id": "snap_17",
      "text": "Often has difficulty awaiting turn",
      "reverse": false,
      "factor": "hyperactivity_impulsivity"
     },
     {
      "id": "snap_18",
      "text": "Often interrupts or intrudes on others (e.g. butts into conversations/ games)",
      "reverse": false,
      "factor": "hyperactivity_impulsivity"
     }
    ]
   }
  ],
  "scoring": {
   "method": "Score each item 0–3. Each subscale score is the Average Rating-Per-Item, i.e. the sum of the subscale items divided by the number of items: Inattention = items 1–9 / 9; Hyperactivity-Impulsivity = items 10–18 / 9; Combined ADHD = items 1–18 / 18. Compare each average with the rater-specific 5% cut-off (Swanson). Parent and teacher cut-offs are different and must not be swapped. For each band, a score belongs to the band if it is at or above that band's 'min'. The 'max' values below are set just under the next cut-off so that fractional averages are not missed.",
   "scales": [
    {
     "section": "inattention_parent",
     "range": [
      0,
      3
     ],
     "bands": [
      {
       "min": 0,
       "max": 0.999,
       "label": "Few attention concerns",
       "meaning": "Based on this rating, attention and focus look much like most young people's. Everyone drifts off sometimes. Good sleep, short study blocks and fewer phone distractions help everyone focus."
      },
      {
       "min": 1.0,
       "max": 1.779,
       "label": "Some attention concerns",
       "meaning": "Some focus difficulties were noticed, but they're below the level that usually needs a closer look. Simple supports can help: a planner, breaking work into small chunks, a quiet study spot, and keeping an eye on how things go over the next few months."
      },
      {
       "min": 1.78,
       "max": 3,
       "label": "Elevated: worth a closer look",
       "meaning": "The attention difficulties noticed are higher than for most young people of this age (about the top 5%). This does not mean the student has ADHD. Many things, like poor sleep, stress, worry or eyesight, can affect focus. It is a good idea to talk with a paediatrician, child psychiatrist or psychologist for a proper assessment."
      }
     ]
    },
    {
     "section": "hyperactivity_impulsivity_parent",
     "range": [
      0,
      3
     ],
     "bands": [
      {
       "min": 0,
       "max": 0.999,
       "label": "Few restlessness concerns",
       "meaning": "Energy levels and self-control look much like most young people's, based on this rating."
      },
      {
       "min": 1.0,
       "max": 1.439,
       "label": "Some restlessness concerns",
       "meaning": "Some restlessness or acting quickly was noticed, but it's below the level that usually needs a closer look. Regular physical activity, movement breaks and clear routines can help."
      },
      {
       "min": 1.44,
       "max": 3,
       "label": "Elevated: worth a closer look",
       "meaning": "Restlessness or impulsivity was rated higher than for most young people (about the top 5%). This is not a diagnosis, but a conversation with a paediatrician or mental-health professional could help work out what's going on and what support might help."
      }
     ]
    },
    {
     "section": "combined_parent",
     "range": [
      0,
      3
     ],
     "bands": [
      {
       "min": 0,
       "max": 1.669,
       "label": "Below screening threshold",
       "meaning": "Overall, the ratings are below the level usually flagged for further checking."
      },
      {
       "min": 1.67,
       "max": 3,
       "label": "Above screening threshold",
       "meaning": "Overall attention and activity ratings are higher than for most young people. A professional assessment that includes school reports is recommended. This screen alone cannot diagnose ADHD."
      }
     ]
    },
    {
     "section": "inattention_teacher",
     "range": [
      0,
      3
     ],
     "bands": [
      {
       "min": 0,
       "max": 2.559,
       "label": "Below teacher threshold",
       "meaning": "The teacher's ratings of attention are below the level usually flagged for further checking."
      },
      {
       "min": 2.56,
       "max": 3,
       "label": "Elevated (teacher)",
       "meaning": "The teacher noticed more attention difficulties than for most students (about the top 5%). Please consider a professional assessment."
      }
     ]
    },
    {
     "section": "hyperactivity_impulsivity_teacher",
     "range": [
      0,
      3
     ],
     "bands": [
      {
       "min": 0,
       "max": 1.779,
       "label": "Below teacher threshold",
       "meaning": "The teacher's ratings of restlessness or impulsivity are below the level usually flagged for further checking."
      },
      {
       "min": 1.78,
       "max": 3,
       "label": "Elevated (teacher)",
       "meaning": "The teacher noticed more restlessness or impulsivity than for most students (about the top 5%). Please consider a professional assessment."
      }
     ]
    },
    {
     "section": "combined_teacher",
     "range": [
      0,
      3
     ],
     "bands": [
      {
       "min": 0,
       "max": 1.999,
       "label": "Below teacher threshold",
       "meaning": "Overall teacher ratings are below the level usually flagged for further checking."
      },
      {
       "min": 2.0,
       "max": 3,
       "label": "Above teacher threshold",
       "meaning": "Overall teacher ratings are higher than for most students. A professional assessment is recommended."
      }
     ]
    }
   ],
   "clinicalCutoff": "Swanson 5% cut-offs (Average Rating-Per-Item, compared as 'score at or above cut-off'): TEACHER: Inattention 2.56, Hyperactivity-Impulsivity 1.78, Combined ADHD 2.00. PARENT: Inattention 1.78, Hyperactivity-Impulsivity 1.44, Combined ADHD 1.67. (Swanson's ODD cut-offs, teacher 1.38 and parent 1.88, are not used because the ODD items are omitted.) The author labels these cut-offs as tentative and specific to each rater. Hall et al. (2020, Assessment) found the SNAP-IV has high sensitivity but low specificity against clinician diagnosis. Parent scores above about 1.2 raised the probability of concern, and above about 1.8 raised the probability of an ADHD diagnosis.",
   "notes": "No reverse-scored items. The 1.0 split between 'Few' and 'Some' concerns is a descriptive BrainTest choice (1 = 'Just a little' on average), not an official SNAP-IV norm. Only the 5% cut-offs are official. Response labels: the SNAP-IV-26 form uses 'Not At All / Just A Little / Quite A Bit / Very Much' (0–3). The CADDRA scoring sheet labels the same 0–3 points 'Not at all / Just a little / Often / Very often'. The form labels are used here. A DSM-style symptom count (items rated 2 or 3) can also be shown, with 6 or more of 9 in either domain matching the DSM-IV/5 symptom threshold for under-17s, but this is informational only."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Screening tool, not a diagnosis. ADHD can only be diagnosed by a qualified clinician using several informants (parent AND teacher), evidence that symptoms began before age 12, impairment in two or more settings, and ruling out other causes such as sleep problems, anxiety, depression, learning disorders, or vision and hearing problems. Respondent: this tool is designed for PARENTS or TEACHERS. If BrainTest wants a student-answered version, there is no free, adolescent-validated self-report ADHD scale. The ASRS v1.1 (adult) has only limited adolescent validation and restrictive NYU/WHO licensing. Psychometrics: Bussing et al. (2008) used a US school-district sample (1,613 parent and 1,205 teacher ratings) and found good internal consistency and a three-factor structure (inattention, hyperactivity-impulsivity, ODD). Parent–teacher agreement is modest (r ≈ .43–.49), so ratings from both are best. Wording reflects DSM-IV criteria, which are essentially unchanged in DSM-5 for these 18 symptoms. INDIA: no formal Hindi or Indian validation of the SNAP-IV was found. It is commonly used in Indian clinics and research. The Indian-developed INCLEN Diagnostic Tool for ADHD (INDT-ADHD; Mukherjee et al., Indian Pediatrics 2014) is the main India-validated ADHD tool, but it is a clinician-administered diagnostic interview, not a screener. A Sinhala SNAP-IV validation exists (Sri Lanka). Item wording was taken from the CADDRA-hosted SNAP-IV-26 form (psychdb.com copy) and cross-checked against the Texas Tech, OHSU and Greenspace reproductions. Consent: a parent or teacher is reporting on a minor, so get the parent's or guardian's consent and explain how the data are used (DPDP Act 2023). Do not show results to the student without context.",
  "questionCount": 18
 },
 "learning-style": {
  "id": "learning-style",
  "title": "How You Learn",
  "originalCardTitle": "Learning Style Profile",
  "suggestedTitleJustification": "Rename the card to 'How You Learn' (subtitle: 'Your study approach and strategies'). The popular idea that students have a fixed 'learning style' (visual/auditory/kinaesthetic) and learn best when teaching matches it (the 'meshing hypothesis') is not supported by evidence (Pashler, McDaniel, Rohrer & Bjork, 2008, Psychological Science in the Public Interest, 9(3), 105-119), and VARK itself is copyrighted (VARK Learn Ltd). What does predict learning is HOW students study - aiming to understand (deep approach) vs memorise-to-pass (surface approach), and whether they use strategies such as elaboration, organisation and self-testing (see also Dunlosky et al., 2013, PSPI 14(1), 4-58). These are changeable habits, so the card gives actionable advice instead of a fixed label. Avoid the words 'learning style' in results.",
  "audience": "student",
  "ageRange": "Class 9-12 and college (about 14+). R-SPQ-2F was developed with Hong Kong university students; MSLQ with US college students. Wording ('course', 'lecturers', 'readings') is college-oriented.",
  "instrument": "Revised Two-Factor Study Process Questionnaire (R-SPQ-2F, 20 items: Deep and Surface approach) + MSLQ Cognitive Strategy scales (19 items: Rehearsal, Elaboration, Organization, Critical Thinking)",
  "citation": "Biggs, J. B., Kember, D., & Leung, D. Y. P. (2001). The revised two-factor Study Process Questionnaire: R-SPQ-2F. British Journal of Educational Psychology, 71, 133-149. https://doi.org/10.1348/000709901158433 ; Pintrich, P. R., Smith, D. A. F., Garcia, T., & McKeachie, W. J. (1991). A Manual for the Use of the Motivated Strategies for Learning Questionnaire (MSLQ). Ann Arbor, MI: NCRIPTAL, University of Michigan (ERIC ED338122).",
  "sourceUrls": [
   "https://mhsfaculty.auckland.ac.nz/forms/new/R-SPQ-2F.html",
   "https://learninglab.uni-due.de/node/13989",
   "https://learninglab.uni-due.de/file/9817/download?token=9eE8q0gN",
   "https://files.eric.ed.gov/fulltext/ED338122.pdf",
   "https://doi.org/10.1111/j.1539-6053.2009.01038.x",
   "https://doi.org/10.1177/1529100612453266"
  ],
  "license": {
   "status": "R-SPQ-2F: published in a copyrighted journal article (British Psychological Society / Wiley); widely reproduced by universities for teaching and research, but no explicit public-domain or open licence was found. MSLQ: manual freely available on ERIC (US-government-funded research, 1991) and widely described as free to use, but no explicit licence or public-domain statement was found in the manual. Not verified as public domain.",
   "commercialUseAllowed": false,
   "notes": "Usable for an internal prototype. For a commercial site: (1) R-SPQ-2F - request permission from the authors (Prof. David Kember; Dr Doris Y. P. Leung, University of Hong Kong; John Biggs is retired and his website johnbiggs.com.au has lapsed) and/or Wiley/BPS permissions for the British Journal of Educational Psychology; (2) MSLQ - request written confirmation from the University of Michigan (School of Education / the MSLQ authors' successors, e.g. Teresa Garcia Duncan) that commercial use is allowed. If permission is refused, write original BrainTest items covering deep/surface approach and the four strategies (mark validated: false) and pilot them.",
   "url": "https://doi.org/10.1348/000709901158433"
  },
  "estimatedMinutes": 10,
  "instructions": "This is about your study habits - how you usually go about learning. There is no 'right' way to study and no right or wrong answers. Think about your school subjects in general (or the subject that matters most to you) and answer honestly with your first reaction. Your habits can change, so this is a snapshot that helps you study smarter.",
  "sections": [
   {
    "id": "approach",
    "title": "Your approach to studying (R-SPQ-2F)",
    "instructions": "How true is each statement of you? If your answer depends on the subject, think of the subject(s) most important to you. (Original instructions: choose the option that best fits your immediate reaction; do not spend a long time on each item.)",
    "options": [
     {
      "label": "Never or only rarely true of me",
      "value": 1
     },
     {
      "label": "Sometimes true of me",
      "value": 2
     },
     {
      "label": "True of me about half the time",
      "value": 3
     },
     {
      "label": "Frequently true of me",
      "value": 4
     },
     {
      "label": "Always or almost always true of me",
      "value": 5
     }
    ],
    "questions": [
     {
      "id": "spq_1",
      "text": "I find that at times studying gives me a feeling of deep personal satisfaction.",
      "factor": "DA",
      "subscale": "DM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_2",
      "text": "I find that I have to do enough work on a topic so that I can form my own conclusions before I am satisfied.",
      "factor": "DA",
      "subscale": "DS",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_3",
      "text": "My aim is to pass the course while doing as little work as possible.",
      "factor": "SA",
      "subscale": "SM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_4",
      "text": "I only study seriously what's given out in class or in the course outlines.",
      "factor": "SA",
      "subscale": "SS",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_5",
      "text": "I feel that virtually any topic can be highly interesting once I get into it.",
      "factor": "DA",
      "subscale": "DM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_6",
      "text": "I find most new topics interesting and often spend extra time trying to obtain more information about them.",
      "factor": "DA",
      "subscale": "DS",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_7",
      "text": "I do not find my course very interesting so I keep my work to the minimum.",
      "factor": "SA",
      "subscale": "SM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_8",
      "text": "I learn some things by rote, going over and over them until I know them by heart even if I do not understand them.",
      "factor": "SA",
      "subscale": "SS",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_9",
      "text": "I find that studying academic topics can at times be as exciting as a good novel or movie.",
      "factor": "DA",
      "subscale": "DM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_10",
      "text": "I test myself on important topics until I understand them completely.",
      "factor": "DA",
      "subscale": "DS",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_11",
      "text": "I find I can get by in most assessments by memorising key sections rather than trying to understand them.",
      "factor": "SA",
      "subscale": "SM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_12",
      "text": "I generally restrict my study to what is specifically set as I think it is unnecessary to do anything extra.",
      "factor": "SA",
      "subscale": "SS",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_13",
      "text": "I work hard at my studies because I find the material interesting.",
      "factor": "DA",
      "subscale": "DM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_14",
      "text": "I spend a lot of my free time finding out more about interesting topics which have been discussed in different classes.",
      "factor": "DA",
      "subscale": "DS",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_15",
      "text": "I find it is not helpful to study topics in depth. It confuses and wastes time, when all you need is a passing acquaintance with topics.",
      "factor": "SA",
      "subscale": "SM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_16",
      "text": "I believe that lecturers shouldn't expect students to spend significant amounts of time studying material everyone knows won't be examined.",
      "factor": "SA",
      "subscale": "SS",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_17",
      "text": "I come to most classes with questions in mind that I want answering.",
      "factor": "DA",
      "subscale": "DM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_18",
      "text": "I make a point of looking at most of the suggested readings that go with the lectures.",
      "factor": "DA",
      "subscale": "DS",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_19",
      "text": "I see no point in learning material which is not likely to be in the examination.",
      "factor": "SA",
      "subscale": "SM",
      "reverse": false,
      "validated": true
     },
     {
      "id": "spq_20",
      "text": "I find the best way to pass examinations is to try to remember answers to likely questions.",
      "factor": "SA",
      "subscale": "SS",
      "reverse": false,
      "validated": true
     }
    ]
   },
   {
    "id": "strategies",
    "title": "Your study strategies (MSLQ)",
    "instructions": "The following questions ask about your learning strategies and study skills. Answer about how you study as accurately as possible. If a statement is very true of you choose 7; if it is not at all true of you choose 1; otherwise choose the number in between that best describes you. (For school students, read 'this class/course' as 'this subject' and 'lectures' as 'lessons'.)",
    "options": [
     {
      "label": "1 - Not at all true of me",
      "value": 1
     },
     {
      "label": "2",
      "value": 2
     },
     {
      "label": "3",
      "value": 3
     },
     {
      "label": "4",
      "value": 4
     },
     {
      "label": "5",
      "value": 5
     },
     {
      "label": "6",
      "value": 6
     },
     {
      "label": "7 - Very true of me",
      "value": 7
     }
    ],
    "questions": [
     {
      "id": "mslq_32",
      "text": "When I study the readings for this course, I outline the material to help me organize my thoughts.",
      "factor": "organization",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 32
     },
     {
      "id": "mslq_38",
      "text": "I often find myself questioning things I hear or read in this course to decide if I find them convincing.",
      "factor": "critical_thinking",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 38
     },
     {
      "id": "mslq_39",
      "text": "When I study for this class, I practice saying the material to myself over and over.",
      "factor": "rehearsal",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 39
     },
     {
      "id": "mslq_42",
      "text": "When I study for this course, I go through the readings and my class notes and try to find the most important ideas.",
      "factor": "organization",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 42
     },
     {
      "id": "mslq_46",
      "text": "When studying for this course, I read my class notes and the course readings over and over again.",
      "factor": "rehearsal",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 46
     },
     {
      "id": "mslq_47",
      "text": "When a theory, interpretation, or conclusion is presented in class or in the readings, I try to decide if there is good supporting evidence.",
      "factor": "critical_thinking",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 47
     },
     {
      "id": "mslq_49",
      "text": "I make simple charts, diagrams, or tables to help me organize course material.",
      "factor": "organization",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 49
     },
     {
      "id": "mslq_51",
      "text": "I treat the course material as a starting point and try to develop my own ideas about it.",
      "factor": "critical_thinking",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 51
     },
     {
      "id": "mslq_53",
      "text": "When I study for this class, I pull together information from different sources, such as lectures, readings, and discussions.",
      "factor": "elaboration",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 53
     },
     {
      "id": "mslq_59",
      "text": "I memorize key words to remind me of important concepts in this class.",
      "factor": "rehearsal",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 59
     },
     {
      "id": "mslq_62",
      "text": "I try to relate ideas in this subject to those in other courses whenever possible.",
      "factor": "elaboration",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 62
     },
     {
      "id": "mslq_63",
      "text": "When I study for this course, I go over my class notes and make an outline of important concepts.",
      "factor": "organization",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 63
     },
     {
      "id": "mslq_64",
      "text": "When reading for this class, I try to relate the material to what I already know.",
      "factor": "elaboration",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 64
     },
     {
      "id": "mslq_66",
      "text": "I try to play around with ideas of my own related to what I am learning in this course.",
      "factor": "critical_thinking",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 66
     },
     {
      "id": "mslq_67",
      "text": "When I study for this course, I write brief summaries of the main ideas from the readings and my class notes.",
      "factor": "elaboration",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 67
     },
     {
      "id": "mslq_69",
      "text": "I try to understand the material in this class by making connections between the readings and the concepts from the lectures.",
      "factor": "elaboration",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 69
     },
     {
      "id": "mslq_71",
      "text": "Whenever I read or hear an assertion or conclusion in this class, I think about possible alternatives.",
      "factor": "critical_thinking",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 71
     },
     {
      "id": "mslq_72",
      "text": "I make lists of important items for this course and memorize the lists.",
      "factor": "rehearsal",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 72
     },
     {
      "id": "mslq_81",
      "text": "I try to apply ideas from course readings in other class activities such as lecture and discussion.",
      "factor": "elaboration",
      "reverse": false,
      "validated": true,
      "sourceItemNumber": 81
     }
    ]
   }
  ],
  "scoring": {
   "method": "R-SPQ-2F (official key): Deep Approach DA = sum of items 1,2,5,6,9,10,13,14,17,18 (range 10-50); Surface Approach SA = sum of items 3,4,7,8,11,12,15,16,19,20 (10-50). Subscales (5-25 each): Deep Motive DM = 1,5,9,13,17; Deep Strategy DS = 2,6,10,14,18; Surface Motive SM = 3,7,11,15,19; Surface Strategy SS = 4,8,12,16,20. No reversed items. Overall profile: DA > SA by 3+ = 'mainly deep'; SA > DA by 3+ = 'mainly surface'; otherwise 'leaning towards' the higher one (rule used by the University of Auckland online version). MSLQ (official manual): each scale score = mean of its items (1-7): Rehearsal = 39,46,59,72; Elaboration = 53,62,64,67,69,81; Organization = 32,42,49,63; Critical Thinking = 38,47,51,66,71. No reversed items in these scales.",
   "scales": [
    {
     "section": "DA",
     "range": [
      10,
      50
     ],
     "bands": [
      {
       "min": 10,
       "max": 23,
       "label": "Deep approach used rarely",
       "meaning": "Right now you don't often dig into the 'why' behind what you study. Try one small habit: after each chapter, explain the main idea in your own words to a friend or family member, or write one question you're curious about."
      },
      {
       "min": 24,
       "max": 36,
       "label": "Deep approach used sometimes",
       "meaning": "You sometimes study to really understand, especially when a topic grabs you. Notice what makes those topics different and try bringing the same curiosity to one other subject."
      },
      {
       "min": 37,
       "max": 50,
       "label": "Deep approach used often",
       "meaning": "You often study to truly understand - you connect ideas, ask questions and go beyond the minimum. This is linked to better, longer-lasting learning. Keep it up, and use self-testing to lock that understanding in for exams."
      }
     ]
    },
    {
     "section": "SA",
     "range": [
      10,
      50
     ],
     "bands": [
      {
       "min": 10,
       "max": 23,
       "label": "Surface approach used rarely",
       "meaning": "You rarely rely on cramming or doing just the minimum. Great - keep focusing on understanding."
      },
      {
       "min": 24,
       "max": 36,
       "label": "Surface approach used sometimes",
       "meaning": "Sometimes you memorise without understanding or study only what's in the exam. Everyone does this under pressure. Try swapping some re-reading for practice questions and explaining ideas in your own words."
      },
      {
       "min": 37,
       "max": 50,
       "label": "Surface approach used often",
       "meaning": "You often learn things by heart or aim to just get through. That can work short-term but is easy to forget. Pick one subject and try 'understand first, then memorise': summarise each topic in your own words, then test yourself. A teacher or mentor can help you plan this."
      }
     ]
    },
    {
     "section": "rehearsal",
     "range": [
      1,
      7
     ],
     "bands": [
      {
       "min": 1.0,
       "max": 3.49,
       "label": "Rarely used",
       "meaning": "You don't use rehearsal (repeating and memorising) much yet. Repetition helps for facts and formulas, but works much better when you test yourself (flashcards, practice questions) than when you just re-read."
      },
      {
       "min": 3.5,
       "max": 5.0,
       "label": "Sometimes used",
       "meaning": "You use rehearsal (repeating and memorising) some of the time. Repetition helps for facts and formulas, but works much better when you test yourself (flashcards, practice questions) than when you just re-read."
      },
      {
       "min": 5.01,
       "max": 7.0,
       "label": "Often used",
       "meaning": "You use rehearsal (repeating and memorising) a lot - a useful part of your study toolkit."
      }
     ]
    },
    {
     "section": "elaboration",
     "range": [
      1,
      7
     ],
     "bands": [
      {
       "min": 1.0,
       "max": 3.49,
       "label": "Rarely used",
       "meaning": "You don't use elaboration (connecting new ideas to what you know) much yet. Try asking 'why is this true?' and 'how does this connect to something I already know?' while you study, and summarise in your own words."
      },
      {
       "min": 3.5,
       "max": 5.0,
       "label": "Sometimes used",
       "meaning": "You use elaboration (connecting new ideas to what you know) some of the time. Try asking 'why is this true?' and 'how does this connect to something I already know?' while you study, and summarise in your own words."
      },
      {
       "min": 5.01,
       "max": 7.0,
       "label": "Often used",
       "meaning": "You use elaboration (connecting new ideas to what you know) a lot - a useful part of your study toolkit."
      }
     ]
    },
    {
     "section": "organization",
     "range": [
      1,
      7
     ],
     "bands": [
      {
       "min": 1.0,
       "max": 3.49,
       "label": "Rarely used",
       "meaning": "You don't use organisation (outlines, charts and mind-maps) much yet. Try turning a chapter into a one-page outline, table or concept map - it helps you see the big picture."
      },
      {
       "min": 3.5,
       "max": 5.0,
       "label": "Sometimes used",
       "meaning": "You use organisation (outlines, charts and mind-maps) some of the time. Try turning a chapter into a one-page outline, table or concept map - it helps you see the big picture."
      },
      {
       "min": 5.01,
       "max": 7.0,
       "label": "Often used",
       "meaning": "You use organisation (outlines, charts and mind-maps) a lot - a useful part of your study toolkit."
      }
     ]
    },
    {
     "section": "critical_thinking",
     "range": [
      1,
      7
     ],
     "bands": [
      {
       "min": 1.0,
       "max": 3.49,
       "label": "Rarely used",
       "meaning": "You don't use critical thinking (questioning and evaluating ideas) much yet. When you read a claim, ask 'what's the evidence?' and 'what else could explain this?'."
      },
      {
       "min": 3.5,
       "max": 5.0,
       "label": "Sometimes used",
       "meaning": "You use critical thinking (questioning and evaluating ideas) some of the time. When you read a claim, ask 'what's the evidence?' and 'what else could explain this?'."
      },
      {
       "min": 5.01,
       "max": 7.0,
       "label": "Often used",
       "meaning": "You use critical thinking (questioning and evaluating ideas) a lot - a useful part of your study toolkit."
      }
     ]
    }
   ],
   "profiles": [
    {
     "key": "deep",
     "name": "Understanding-focused (Deep approach)",
     "description": "You study to make sense of things - connecting ideas, asking questions and going beyond the minimum. Tip: add regular self-testing and spaced revision so deep understanding also shows up in exam marks.",
     "exampleCareersIndia": []
    },
    {
     "key": "surface",
     "name": "Exam-focused (Surface approach)",
     "description": "You mainly study to get through tests - memorising and sticking to what's set. Very common under exam pressure, and fixable: start with one subject, aim to understand before memorising, and use practice questions instead of re-reading.",
     "exampleCareersIndia": []
    },
    {
     "key": "mixed",
     "name": "Flexible / mixed",
     "description": "You switch between understanding and memorising depending on the subject or the pressure. Notice which subjects bring out your deep approach and borrow those habits for the others.",
     "exampleCareersIndia": []
    }
   ],
   "notes": "Bands are BrainTest conventions (thirds of the possible range for R-SPQ-2F; MSLQ cut-offs at 3.5 and 5.0 on the 1-7 scale), not published norms - neither instrument has official cut-offs, and their authors recommend comparing scores within a group or over time. Reference values: MSLQ manual college sample means - Rehearsal 4.53, Elaboration 4.91, Organization 4.14, Critical Thinking ~4.2 (US college students, 1990). Surface approach is not 'bad' and is context-driven (Biggs designed the R-SPQ-2F to evaluate teaching contexts, not to label students), so present results as habits to adjust. Evidence-based tips draw on Dunlosky et al. (2013): practice testing and distributed practice have high utility; re-reading and highlighting have low utility."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Not a diagnosis and not a fixed trait - study approaches change with teaching, assessment and motivation. Validity: R-SPQ-2F (Biggs et al., 2001; Hong Kong university students): Cronbach's alpha DA .73, SA .64, DM .62, DS .63, SM .72, SS .57; two-factor structure confirmed by CFA; widely used internationally including Indian medical/college studies, but no Indian school-student norms were found. MSLQ (Pintrich et al., 1991; US college students, N = 380, Winter 1990): alphas Rehearsal .69, Elaboration .76, Organization .64, Critical Thinking .80. Both instruments were developed with college students; school-level versions exist (e.g. Revised Learning Process Questionnaire, R-LPQ-2F, Kember, Biggs & Leung, 2004; MSLQ junior-high adaptations), but their items were not verified in this research. Wording discrepancies noted: in the MSLQ manual's scale listing item 72 reads 'important terms' and item 67 ends 'concepts from the lectures', whereas the questionnaire form (used here) reads 'important items' and 'readings and my class notes'. Item text is verbatim; do not reword without permission. Learning-styles note: do not present results as visual/auditory/kinaesthetic types (Pashler et al., 2008).",
  "questionCount": 39
 },
 "ocd-alt": {
  "id": "ocd-alt",
  "title": "OCD Tendencies",
  "audience": "adult",
  "instrument": "Dimensional Obsessive-Compulsive Scale (DOCS), 20 items, 4 dimensions",
  "citation": "Abramowitz JS, Deacon BJ, Olatunji BO, Wheaton MG, Berman NC, Losardo D, Timpano KR, McGrath PB, Riemann BC, Adams T, Bjorgvinsson T, Storch EA, Hale LR. Assessment of obsessive-compulsive symptom dimensions: development and evaluation of the Dimensional Obsessive-Compulsive Scale. Psychological Assessment. 2010;22(1):180-198. doi:10.1037/a0018260. Scale (c) 2009 by Jonathan S. Abramowitz.",
  "sourceUrls": [
   "https://docs.web.unc.edu/?p=59",
   "https://docs.web.unc.edu/downloads-and-translations/",
   "https://docs.web.unc.edu/wp-content/uploads/sites/5147/2016/01/DOCS.pdf",
   "https://docs.web.unc.edu/scoring/",
   "https://cdn.vanderbilt.edu/t2-main/lab-prd/wp-content/uploads/sites/244/2025/12/Abramowitz-et-al.-2010-Assessment-of-Obsessive-Compulsive-Symptom-Dimensions-Development-and-Evaluation-of-the-Dimensional-Obsessive-Compulsive-Scale.pdf"
  ],
  "license": {
   "status": "Copyright (c) 2009 Jonathan S. Abramowitz, PhD. Official DOCS website: free for use in most research and in clinical settings to assess obsessive-compulsive symptoms. Permission AND a fee are required if you plan to profit from the DOCS (example given: including it in a website or app that you charge customers for) or use it in an industry-sponsored clinical trial. Modifying the scale or researching alternate forms requires permission.",
   "commercialUseAllowed": false,
   "notes": "Conditional. Free if BrainTest offers the DOCS at no charge and does not profit from it, but because BrainTest is a commercial website (paid reports, subscriptions, ads or lead generation would count as profiting), written permission should be obtained from Dr. Jonathan Abramowitz (jabramowitz@unc.edu, UNC Chapel Hill) - he may grant it free or for a fee. Unlike the OCI-R, the terms are published and a clear permission route exists. Do not modify item wording or split the categories into new forms without permission. Display the copyright line '(c) 2009 by Jonathan S. Abramowitz'.",
   "url": "https://docs.web.unc.edu/?p=59"
  },
  "estimatedMinutes": 7,
  "instructions": "This questionnaire asks you about 4 different types of concerns that you might or might not experience. For each type there is a description of the kinds of thoughts (sometimes called obsessions) and behaviors (sometimes called rituals or compulsions) that are typical of that particular concern, followed by 5 questions about your experiences with these thoughts and behaviors. Please read each description carefully and answer the questions for each category based on your experiences in the last month.",
  "sections": [
   {
    "id": "contamination",
    "title": "Category 1: Concerns about Germs and Contamination",
    "examples": [
     "Thoughts or feelings that you are contaminated because you came into contact with (or were nearby) a certain object or person.",
     "The feeling of being contaminated because you were in a certain place (such as a bathroom).",
     "Thoughts about germs, sickness, or the possibility of spreading contamination.",
     "Washing your hands, using hand sanitizer gels, showering, changing your clothes, or cleaning objects because of concerns about contamination.",
     "Following a certain routine (e.g., in the bathroom, getting dressed) because of contamination",
     "Avoiding certain people, objects, or places because of contamination."
    ],
    "instructions": "Examples...\n-Thoughts or feelings that you are contaminated because you came into contact with (or were nearby) a certain object or person.\n-The feeling of being contaminated because you were in a certain place (such as a bathroom).\n-Thoughts about germs, sickness, or the possibility of spreading contamination.\n-Washing your hands, using hand sanitizer gels, showering, changing your clothes, or cleaning objects because of concerns about contamination.\n-Following a certain routine (e.g., in the bathroom, getting dressed) because of contamination\n-Avoiding certain people, objects, or places because of contamination.\n\nThe next questions ask about your experiences with thoughts and behaviors related to contamination over the last month. Keep in mind that your experiences might be different than the examples listed above. Please circle the number next to your answer:",
    "options": [
     {
      "label": "None at all",
      "value": 0
     },
     {
      "label": "Less than 1 hour each day",
      "value": 1
     },
     {
      "label": "Between 1 and 3 hours each day",
      "value": 2
     },
     {
      "label": "Between 3 and 8 hours each day",
      "value": 3
     },
     {
      "label": "8 hours or more each day",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "docs_1_1",
      "text": "About how much time have you spent each day thinking about contamination and engaging in washing or cleaning behaviors because of contamination?",
      "reverse": false,
      "factor": "contamination",
      "options": [
       {
        "label": "None at all",
        "value": 0
       },
       {
        "label": "Less than 1 hour each day",
        "value": 1
       },
       {
        "label": "Between 1 and 3 hours each day",
        "value": 2
       },
       {
        "label": "Between 3 and 8 hours each day",
        "value": 3
       },
       {
        "label": "8 hours or more each day",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_1_2",
      "text": "To what extent have you avoided situations in order to prevent concerns with contamination or having to spend time washing, cleaning, or showering?",
      "reverse": false,
      "factor": "contamination",
      "options": [
       {
        "label": "None at all",
        "value": 0
       },
       {
        "label": "A little avoidance",
        "value": 1
       },
       {
        "label": "A moderate amount of avoidance",
        "value": 2
       },
       {
        "label": "A great deal of avoidance",
        "value": 3
       },
       {
        "label": "Extreme avoidance of nearly all things",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_1_3",
      "text": "If you had thoughts about contamination but could not wash, clean, or shower (or otherwise remove the contamination), how distressed or anxious did you become?",
      "reverse": false,
      "factor": "contamination",
      "options": [
       {
        "label": "Not at all distressed/anxious",
        "value": 0
       },
       {
        "label": "Mildly distressed/anxious",
        "value": 1
       },
       {
        "label": "Moderately distressed/anxious",
        "value": 2
       },
       {
        "label": "Severely distressed/anxious",
        "value": 3
       },
       {
        "label": "Extremely distressed/anxious",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_1_4",
      "text": "To what extent has your daily routine (work, school, self-care, social life) been disrupted by contamination concerns and excessive washing, showering, cleaning, or avoidance behaviors?",
      "reverse": false,
      "factor": "contamination",
      "options": [
       {
        "label": "No disruption at all.",
        "value": 0
       },
       {
        "label": "A little disruption, but I mostly function well.",
        "value": 1
       },
       {
        "label": "Many things are disrupted, but I can still manage.",
        "value": 2
       },
       {
        "label": "My life is disrupted in many ways and I have trouble managing.",
        "value": 3
       },
       {
        "label": "My life is completely disrupted and I cannot function at all.",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_1_5",
      "text": "How difficult is it for you to disregard thoughts about contamination and refrain from behaviors such as washing, showering, cleaning, and other decontamination routines when you try to do so?",
      "reverse": false,
      "factor": "contamination",
      "options": [
       {
        "label": "Not at all difficult",
        "value": 0
       },
       {
        "label": "A little difficult",
        "value": 1
       },
       {
        "label": "Moderately difficult",
        "value": 2
       },
       {
        "label": "Very difficult",
        "value": 3
       },
       {
        "label": "Extremely difficult",
        "value": 4
       }
      ]
     }
    ]
   },
   {
    "id": "responsibility",
    "title": "Category 2: Concerns about being Responsible for Harm, Injury, or Bad Luck",
    "examples": [
     "A doubt that you might have made a mistake that could cause something awful or harmful to happen.",
     "The thought that a terrible accident, disaster, injury, or other bad luck might have occurred and you weren't careful enough to prevent it.",
     "The thought that you could prevent harm or bad luck by doing things in a certain way, counting to certain numbers, or by avoiding certain \"bad\" numbers or words.",
     "Thought of losing something important that you are unlikely to lose (e.g., wallet, identify theft, papers).",
     "Checking things such as locks, switches, your wallet, etc. more often than is necessary.",
     "Repeatedly asking or checking for reassurance that something bad did not (or will not) happen.",
     "Mentally reviewing past events to make sure you didn't do anything wrong.",
     "The need to follow a special routine because it will prevent harm or disasters from occurring.",
     "The need to count to certain numbers, or avoid certain bad numbers, due to the fear of harm."
    ],
    "instructions": "Examples...\n-A doubt that you might have made a mistake that could cause something awful or harmful to happen.\n-The thought that a terrible accident, disaster, injury, or other bad luck might have occurred and you weren't careful enough to prevent it.\n-The thought that you could prevent harm or bad luck by doing things in a certain way, counting to certain numbers, or by avoiding certain \"bad\" numbers or words.\n-Thought of losing something important that you are unlikely to lose (e.g., wallet, identify theft, papers).\n-Checking things such as locks, switches, your wallet, etc. more often than is necessary.\n-Repeatedly asking or checking for reassurance that something bad did not (or will not) happen.\n-Mentally reviewing past events to make sure you didn't do anything wrong.\n-The need to follow a special routine because it will prevent harm or disasters from occurring.\n-The need to count to certain numbers, or avoid certain bad numbers, due to the fear of harm.\n\nThe next questions ask about your experiences with thoughts and behaviors related to harm and disasters over the last month. Keep in mind that your experiences might be slightly different than the examples listed above. Please circle the number next to your answer:",
    "options": [
     {
      "label": "None at all",
      "value": 0
     },
     {
      "label": "Less than 1 hour each day",
      "value": 1
     },
     {
      "label": "Between 1 and 3 hours each day",
      "value": 2
     },
     {
      "label": "Between 3 and 8 hours each day",
      "value": 3
     },
     {
      "label": "8 hours or more each day",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "docs_2_1",
      "text": "About how much time have you spent each day thinking about the possibility of harm or disasters and engaging in checking or efforts to get reassurance that such things do not (or did not) occur?",
      "reverse": false,
      "factor": "responsibility",
      "options": [
       {
        "label": "None at all",
        "value": 0
       },
       {
        "label": "Less than 1 hour each day",
        "value": 1
       },
       {
        "label": "Between 1 and 3 hours each day",
        "value": 2
       },
       {
        "label": "Between 3 and 8 hours each day",
        "value": 3
       },
       {
        "label": "8 hours or more each day",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_2_2",
      "text": "To what extent have you avoided situations so that you did not have to check for danger or worry about possible harm or disasters?",
      "reverse": false,
      "factor": "responsibility",
      "options": [
       {
        "label": "None at all",
        "value": 0
       },
       {
        "label": "A little avoidance",
        "value": 1
       },
       {
        "label": "A moderate amount of avoidance",
        "value": 2
       },
       {
        "label": "A great deal of avoidance",
        "value": 3
       },
       {
        "label": "Extreme avoidance of nearly all things",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_2_3",
      "text": "When you think about the possibility of harm or disasters, or if you cannot check or get reassurance about these things, how distressed or anxious did you become?",
      "reverse": false,
      "factor": "responsibility",
      "options": [
       {
        "label": "Not at all distressed/anxious",
        "value": 0
       },
       {
        "label": "Mildly distressed/anxious",
        "value": 1
       },
       {
        "label": "Moderately distressed/anxious",
        "value": 2
       },
       {
        "label": "Severely distressed/anxious",
        "value": 3
       },
       {
        "label": "Extremely distressed/anxious",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_2_4",
      "text": "To what extent has your daily routine (work, school, self-care, social life) been disrupted by thoughts about harm or disasters and excessive checking or asking for reassurance?",
      "reverse": false,
      "factor": "responsibility",
      "options": [
       {
        "label": "No disruption at all.",
        "value": 0
       },
       {
        "label": "A little disruption, but I mostly function well.",
        "value": 1
       },
       {
        "label": "Many things are disrupted, but I can still manage.",
        "value": 2
       },
       {
        "label": "My life is disrupted in many ways and I have trouble managing.",
        "value": 3
       },
       {
        "label": "My life is completely disrupted and I cannot function at all.",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_2_5",
      "text": "How difficult is it for you to disregard thoughts about possible harm or disasters and refrain from checking or reassurance-seeking behaviors when you try to do so?",
      "reverse": false,
      "factor": "responsibility",
      "options": [
       {
        "label": "Not at all difficult",
        "value": 0
       },
       {
        "label": "A little difficult",
        "value": 1
       },
       {
        "label": "Moderately difficult",
        "value": 2
       },
       {
        "label": "Very difficult",
        "value": 3
       },
       {
        "label": "Extremely difficult",
        "value": 4
       }
      ]
     }
    ]
   },
   {
    "id": "unacceptable_thoughts",
    "title": "Category 3: Unacceptable Thoughts",
    "examples": [
     "Unpleasant thoughts about sex, immorality, or violence that come to mind against your will.",
     "Thoughts about doing awful, improper, or embarrassing things that you don't really want to do.",
     "Repeating an action or following a special routine because of a bad thought.",
     "Mentally performing an action or saying prayers to get rid of an unwanted or unpleasant thought.",
     "Avoidance of certain people, places, situations or other triggers of unwanted or unpleasant thoughts"
    ],
    "instructions": "Examples...\n-Unpleasant thoughts about sex, immorality, or violence that come to mind against your will.\n-Thoughts about doing awful, improper, or embarrassing things that you don't really want to do.\n-Repeating an action or following a special routine because of a bad thought.\n-Mentally performing an action or saying prayers to get rid of an unwanted or unpleasant thought.\n-Avoidance of certain people, places, situations or other triggers of unwanted or unpleasant thoughts\n\nThe next questions ask about your experiences with unwanted thoughts that come to mind against your will and behaviors designed to deal with these kinds of thoughts over the last month. Keep in mind that your experiences might be slightly different than the examples listed above. Please circle the number next to your answer:",
    "options": [
     {
      "label": "None at all",
      "value": 0
     },
     {
      "label": "Less than 1 hour each day",
      "value": 1
     },
     {
      "label": "Between 1 and 3 hours each day",
      "value": 2
     },
     {
      "label": "Between 3 and 8 hours each day",
      "value": 3
     },
     {
      "label": "8 hours or more each day",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "docs_3_1",
      "text": "About how much time have you spent each day with unwanted unpleasant thoughts and with behavioral or mental actions to deal with them?",
      "reverse": false,
      "factor": "unacceptable_thoughts",
      "options": [
       {
        "label": "None at all",
        "value": 0
       },
       {
        "label": "Less than 1 hour each day",
        "value": 1
       },
       {
        "label": "Between 1 and 3 hours each day",
        "value": 2
       },
       {
        "label": "Between 3 and 8 hours each day",
        "value": 3
       },
       {
        "label": "8 hours or more each day",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_3_2",
      "text": "To what extent have you been avoiding situations, places, objects and other reminders (e.g., numbers, people) that trigger unwanted or unpleasant thoughts?",
      "reverse": false,
      "factor": "unacceptable_thoughts",
      "options": [
       {
        "label": "None at all",
        "value": 0
       },
       {
        "label": "A little avoidance",
        "value": 1
       },
       {
        "label": "A moderate amount of avoidance",
        "value": 2
       },
       {
        "label": "A great deal of avoidance",
        "value": 3
       },
       {
        "label": "Extreme avoidance of nearly all things",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_3_3",
      "text": "When unwanted or unpleasant thoughts come to mind against your will how distressed or anxious did you become?",
      "reverse": false,
      "factor": "unacceptable_thoughts",
      "options": [
       {
        "label": "Not at all distressed/anxious",
        "value": 0
       },
       {
        "label": "Mildly distressed/anxious",
        "value": 1
       },
       {
        "label": "Moderately distressed/anxious",
        "value": 2
       },
       {
        "label": "Severely distressed/anxious",
        "value": 3
       },
       {
        "label": "Extremely distressed/anxious",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_3_4",
      "text": "To what extent has your daily routine (work, school, self-care, social life) been disrupted by unwanted and unpleasant thoughts and efforts to avoid or deal with such thoughts?",
      "reverse": false,
      "factor": "unacceptable_thoughts",
      "options": [
       {
        "label": "No disruption at all.",
        "value": 0
       },
       {
        "label": "A little disruption, but I mostly function well.",
        "value": 1
       },
       {
        "label": "Many things are disrupted, but I can still manage.",
        "value": 2
       },
       {
        "label": "My life is disrupted in many ways and I have trouble managing.",
        "value": 3
       },
       {
        "label": "My life is completely disrupted and I cannot function at all.",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_3_5",
      "text": "How difficult is it for you to disregard unwanted or unpleasant thoughts and refrain from using behavioral or mental acts to deal with them when you try to do so?",
      "reverse": false,
      "factor": "unacceptable_thoughts",
      "options": [
       {
        "label": "Not at all difficult",
        "value": 0
       },
       {
        "label": "A little difficult",
        "value": 1
       },
       {
        "label": "Moderately difficult",
        "value": 2
       },
       {
        "label": "Very difficult",
        "value": 3
       },
       {
        "label": "Extremely difficult",
        "value": 4
       }
      ]
     }
    ]
   },
   {
    "id": "symmetry",
    "title": "Category 4: Concerns about Symmetry, Completeness, and the Need for Things to be \"Just Right\"",
    "examples": [
     "The need for symmetry, evenness, balance, or exactness.",
     "Feelings that something isn't \"just right.\"",
     "Repeating a routine action until it feels \"just right\" or \"balanced.\"",
     "Counting senseless things (e.g., ceiling tiles, words in a sentence).",
     "Unnecessarily arranging things in \"order.\"",
     "Having to say something over and over in the same way until it feels \"just right.\""
    ],
    "instructions": "Examples...\n-The need for symmetry, evenness, balance, or exactness.\n-Feelings that something isn't \"just right.\"\n-Repeating a routine action until it feels \"just right\" or \"balanced.\"\n-Counting senseless things (e.g., ceiling tiles, words in a sentence).\n-Unnecessarily arranging things in \"order.\"\n-Having to say something over and over in the same way until it feels \"just right.\"\n\nThe next questions ask about your experiences with feelings that something is not \"just right\" and behaviors designed to achieve order, symmetry, or balance over the last month. Keep in mind that your experiences might be slightly different than the examples listed above. Please circle the number next to your answer:",
    "options": [
     {
      "label": "None at all",
      "value": 0
     },
     {
      "label": "Less than 1 hour each day",
      "value": 1
     },
     {
      "label": "Between 1 and 3 hours each day",
      "value": 2
     },
     {
      "label": "Between 3 and 8 hours each day",
      "value": 3
     },
     {
      "label": "8 hours or more each day",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "docs_4_1",
      "text": "About how much time have you spent each day with unwanted thoughts about symmetry, order, or balance and with behaviors intended to achieve symmetry, order or balance?",
      "reverse": false,
      "factor": "symmetry",
      "options": [
       {
        "label": "None at all",
        "value": 0
       },
       {
        "label": "Less than 1 hour each day",
        "value": 1
       },
       {
        "label": "Between 1 and 3 hours each day",
        "value": 2
       },
       {
        "label": "Between 3 and 8 hours each day",
        "value": 3
       },
       {
        "label": "8 hours or more each day",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_4_2",
      "text": "To what extent have you been avoiding situations, places or objects associated with feelings that something is not symmetrical or \"just right?\"",
      "reverse": false,
      "factor": "symmetry",
      "options": [
       {
        "label": "None at all",
        "value": 0
       },
       {
        "label": "A little avoidance",
        "value": 1
       },
       {
        "label": "A moderate amount of avoidance",
        "value": 2
       },
       {
        "label": "A great deal of avoidance",
        "value": 3
       },
       {
        "label": "Extreme avoidance of nearly all things",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_4_3",
      "text": "When you have the feeling of something being \"not just right,\" how distressed or anxious did you become?",
      "reverse": false,
      "factor": "symmetry",
      "options": [
       {
        "label": "Not at all distressed/anxious",
        "value": 0
       },
       {
        "label": "Mildly distressed/anxious",
        "value": 1
       },
       {
        "label": "Moderately distressed/anxious",
        "value": 2
       },
       {
        "label": "Severely distressed/anxious",
        "value": 3
       },
       {
        "label": "Extremely distressed/anxious",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_4_4",
      "text": "To what extent has your daily routine (work, school, self-care, social life) been disrupted by the feeling of things being \"not just right,\" and efforts to put things in order or make them feel right?",
      "reverse": false,
      "factor": "symmetry",
      "options": [
       {
        "label": "No disruption at all.",
        "value": 0
       },
       {
        "label": "A little disruption, but I mostly function well.",
        "value": 1
       },
       {
        "label": "Many things are disrupted, but I can still manage.",
        "value": 2
       },
       {
        "label": "My life is disrupted in many ways and I have trouble managing.",
        "value": 3
       },
       {
        "label": "My life is completely disrupted and I cannot function at all.",
        "value": 4
       }
      ]
     },
     {
      "id": "docs_4_5",
      "text": "How difficult is it for you to disregard thoughts about the lack of symmetry and order, and refrain from urges to arrange things in order or repeat certain behaviors when you try to do so?",
      "reverse": false,
      "factor": "symmetry",
      "options": [
       {
        "label": "Not at all difficult",
        "value": 0
       },
       {
        "label": "A little difficult",
        "value": 1
       },
       {
        "label": "Moderately difficult",
        "value": 2
       },
       {
        "label": "Very difficult",
        "value": 3
       },
       {
        "label": "Extremely difficult",
        "value": 4
       }
      ]
     }
    ]
   }
  ],
  "scoring": {
   "method": "Each item 0-4. Sum the 5 items within each category for four subscale scores (0-20 each): Contamination, Responsibility for Harm, Unacceptable Thoughts, Symmetry. Total = sum of all 20 items (0-80). No reverse-scored items. NOTE: response labels differ by question type (time / avoidance / distress / disruption / difficulty) - each question carries its own 'options' array, identical across the four categories; the section-level 'options' is only the default (question 1 of each category).",
   "scales": [
    {
     "section": "total",
     "range": [
      0,
      80
     ],
     "bands": [
      {
       "min": 0,
       "max": 17,
       "label": "Below the screening cut-offs",
       "meaning": "Your answers show obsessive-compulsive experiences at a level common in the general population. Everyone has some unwanted thoughts or habits; no specific follow-up is suggested from this screen."
      },
      {
       "min": 18,
       "max": 20,
       "label": "Above the general-population cut-off",
       "meaning": "Your total is above the level that best separates people with OCD from people without a mental health condition. This is not a diagnosis - stress and anxiety can raise scores. If these thoughts or routines take up time or cause distress, consider talking to a psychiatrist or clinical psychologist."
      },
      {
       "min": 21,
       "max": 80,
       "label": "Above both cut-offs",
       "meaning": "Your answers show a level of time, distress and disruption that is often seen in people with OCD. This is not a diagnosis. A psychiatrist or clinical psychologist can assess this properly; OCD is very treatable with exposure and response prevention (ERP) therapy and, where appropriate, medication."
      }
     ]
    },
    {
     "section": "contamination",
     "range": [
      0,
      20
     ],
     "bands": [
      {
       "min": 0,
       "max": 20,
       "label": "Concerns about Germs and Contamination",
       "meaning": "Higher scores mean more time, avoidance, distress and disruption linked to worries about germs or contamination. Shown for information only; there is no separate validated cut-off for this dimension."
      }
     ]
    },
    {
     "section": "responsibility",
     "range": [
      0,
      20
     ],
     "bands": [
      {
       "min": 0,
       "max": 20,
       "label": "Concerns about being Responsible for Harm, Injury, or Bad Luck",
       "meaning": "Higher scores mean more time, avoidance, distress and disruption linked to worries about causing harm or bad luck, and checking or seeking reassurance. Shown for information only; there is no separate validated cut-off for this dimension."
      }
     ]
    },
    {
     "section": "unacceptable_thoughts",
     "range": [
      0,
      20
     ],
     "bands": [
      {
       "min": 0,
       "max": 20,
       "label": "Unacceptable Thoughts",
       "meaning": "Higher scores mean more time, avoidance, distress and disruption linked to unwanted, upsetting thoughts. Such thoughts are very common; it is the distress and time spent that matter. Shown for information only; there is no separate validated cut-off for this dimension."
      }
     ]
    },
    {
     "section": "symmetry",
     "range": [
      0,
      20
     ],
     "bands": [
      {
       "min": 0,
       "max": 20,
       "label": "Concerns about Symmetry, Completeness, and the Need for Things to be \"Just Right\"",
       "meaning": "Higher scores mean more time, avoidance, distress and disruption linked to needing things to feel 'just right', even or ordered. Shown for information only; there is no separate validated cut-off for this dimension."
      }
     ]
    }
   ],
   "clinicalCutoff": "Official DOCS scoring page: total of 18 is the suggested cut-off for OCD vs non-clinical individuals (about 78% correct classification); total of 21 for OCD vs other anxiety disorders (about 70% correct classification). No validated mild/moderate/severe bands exist.",
   "notes": "Bands above map the two official cut-offs; the 0-17/18-20/21+ structure is a BrainTest presentation of those cut-offs, not an official severity scale (the scoring page wording is 'scoring over 18' / 'cutoff of 21', so whether the threshold is >18 or >=18 should be confirmed in Abramowitz 2010). Category 2 example text contains 'identify theft' exactly as in the official PDF (a typo for 'identity theft') - keep, or correct only with permission. The examples list for each category should be shown before its five questions."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Screening/severity tool, not a diagnosis. Developed with OCD patients, other anxiety disorders and non-clinical/student samples across multiple US sites (Abramowitz 2010); four-factor structure (contamination, responsibility for harm, unacceptable thoughts, symmetry) replicated in many translations; a short form (DOCS-SF) exists. Unlike the OCI-R, it rates time, avoidance, distress, interference and difficulty disregarding (Y-BOCS-like severity) within each symptom dimension and does not include hoarding. Translations are listed on the official site; no India-specific validation was found in this search. Item, example and option wording copied verbatim from the official English PDF on docs.web.unc.edu (the copyright holder's own file; a second independent full-text source was not checked).",
  "questionCount": 20
 },
 "ocd": {
  "id": "ocd",
  "title": "OCD Tendencies",
  "audience": "adult",
  "instrument": "Obsessive-Compulsive Inventory - Revised (OCI-R), 18 items, 6 subscales",
  "citation": "Foa EB, Huppert JD, Leiberg S, Langner R, Kichic R, Hajcak G, Salkovskis PM. The Obsessive-Compulsive Inventory: development and validation of a short version. Psychological Assessment. 2002;14(4):485-496. doi:10.1037/1040-3590.14.4.485",
  "sourceUrls": [
   "https://doi.org/10.1037/1040-3590.14.4.485",
   "https://psytoolkit.org/survey-library/obsessiveness-oci-r.html",
   "https://carepatron.com/files/obsessive-compulsive-inventory-revised-oci-r.pdf",
   "https://novopsych.com/wp-content/uploads/2026/02/Obsessive-Compulsive-Inventory-Revised-OCI-R-NovoPsych-Technical-Report.pdf",
   "https://www.tacklit.com/assessments/obsessive-compulsive-inventory-revised-oci-r",
   "https://www.hogrefe.com/at/shop/obsessive-compulsive-inventory-revised.html"
  ],
  "license": {
   "status": "Copyrighted (Edna B. Foa and co-authors; article published by the American Psychological Association in Psychological Assessment). No public licence (no CC/public-domain statement) was found. It is widely reproduced free of charge for clinical and research use, and PsyToolkit permits research use 'provided users respect the copyright note in the original paper'. Hogrefe sells a licensed German adaptation, showing the instrument is treated as proprietary in at least some markets.",
   "commercialUseAllowed": false,
   "notes": "Free commercial use could not be verified. To use the OCI-R on a commercial website, request written permission from the copyright holder, Dr. Edna B. Foa (Center for the Treatment and Study of Anxiety, Perelman School of Medicine, University of Pennsylvania), and check APA's permissions requirements for reproducing test material from Psychological Assessment (https://www.apa.org/about/contact/copyright). Items here are for the prototype only. A freely usable-for-non-profit alternative with clear published terms (DOCS) is provided in ocd-alt.json.",
   "url": "https://doi.org/10.1037/1040-3590.14.4.485"
  },
  "estimatedMinutes": 4,
  "instructions": "The following statements refer to experiences that many people have in their everyday lives. Circle the number that best describes HOW MUCH that experience has DISTRESSED or BOTHERED you during the PAST MONTH.",
  "sections": [
   {
    "id": "main",
    "title": "OCI-R",
    "options": [
     {
      "label": "Not at all",
      "value": 0
     },
     {
      "label": "A little",
      "value": 1
     },
     {
      "label": "Moderately",
      "value": 2
     },
     {
      "label": "A lot",
      "value": 3
     },
     {
      "label": "Extremely",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "ocir_1",
      "text": "I have saved up so many things that they get in the way.",
      "reverse": false,
      "factor": "hoarding"
     },
     {
      "id": "ocir_2",
      "text": "I check things more often than necessary.",
      "reverse": false,
      "factor": "checking"
     },
     {
      "id": "ocir_3",
      "text": "I get upset if objects are not arranged properly.",
      "reverse": false,
      "factor": "ordering"
     },
     {
      "id": "ocir_4",
      "text": "I feel compelled to count while I am doing things.",
      "reverse": false,
      "factor": "neutralizing"
     },
     {
      "id": "ocir_5",
      "text": "I find it difficult to touch an object when I know it has been touched by strangers or certain people.",
      "reverse": false,
      "factor": "washing"
     },
     {
      "id": "ocir_6",
      "text": "I find it difficult to control my own thoughts.",
      "reverse": false,
      "factor": "obsessing"
     },
     {
      "id": "ocir_7",
      "text": "I collect things I don't need.",
      "reverse": false,
      "factor": "hoarding"
     },
     {
      "id": "ocir_8",
      "text": "I repeatedly check doors, windows, drawers, etc.",
      "reverse": false,
      "factor": "checking"
     },
     {
      "id": "ocir_9",
      "text": "I get upset if others change the way I have arranged things.",
      "reverse": false,
      "factor": "ordering"
     },
     {
      "id": "ocir_10",
      "text": "I feel I have to repeat certain numbers.",
      "reverse": false,
      "factor": "neutralizing"
     },
     {
      "id": "ocir_11",
      "text": "I sometimes have to wash or clean myself simply because I feel contaminated.",
      "reverse": false,
      "factor": "washing"
     },
     {
      "id": "ocir_12",
      "text": "I am upset by unpleasant thoughts that come into my mind against my will.",
      "reverse": false,
      "factor": "obsessing"
     },
     {
      "id": "ocir_13",
      "text": "I avoid throwing things away because I am afraid I might need them later.",
      "reverse": false,
      "factor": "hoarding"
     },
     {
      "id": "ocir_14",
      "text": "I repeatedly check gas and water taps and light switches after turning them off.",
      "reverse": false,
      "factor": "checking"
     },
     {
      "id": "ocir_15",
      "text": "I need things to be arranged in a particular way.",
      "reverse": false,
      "factor": "ordering"
     },
     {
      "id": "ocir_16",
      "text": "I feel that there are good and bad numbers.",
      "reverse": false,
      "factor": "neutralizing"
     },
     {
      "id": "ocir_17",
      "text": "I wash my hands more often and longer than necessary.",
      "reverse": false,
      "factor": "washing"
     },
     {
      "id": "ocir_18",
      "text": "I frequently get nasty thoughts and have difficulty in getting rid of them.",
      "reverse": false,
      "factor": "obsessing"
     }
    ]
   }
  ],
  "scoring": {
   "method": "Sum all 18 items (0-4) for the total (0-72). Six subscales of 3 items each (0-12): Washing 5, 11, 17; Checking 2, 8, 14; Ordering 3, 9, 15; Obsessing 6, 12, 18; Hoarding 1, 7, 13; Neutralizing 4, 10, 16. Following DSM-5 (hoarding now a separate disorder), many clinicians also report an OCD component (15 items excluding hoarding; 0-60) and the hoarding subscale separately. No reverse-scored items.",
   "scales": [
    {
     "section": "total",
     "range": [
      0,
      72
     ],
     "bands": [
      {
       "min": 0,
       "max": 20,
       "label": "Below the screening cut-off",
       "meaning": "Your answers show a level of obsessive or compulsive experiences that is common in the general population. Most people have some unwanted thoughts or habits like checking - this is normal. No specific follow-up is suggested from this screen."
      },
      {
       "min": 21,
       "max": 72,
       "label": "At or above the screening cut-off",
       "meaning": "Your answers show a level of distress from obsessive or compulsive experiences that is often seen in people with OCD. This is not a diagnosis - anxiety, stress and low mood can also raise scores. If these thoughts or routines take up a lot of time or get in the way of daily life, consider speaking with a psychiatrist or clinical psychologist; OCD responds well to treatment such as exposure and response prevention (ERP) and, where appropriate, medication."
      }
     ]
    },
    {
     "section": "washing",
     "range": [
      0,
      12
     ],
     "bands": [
      {
       "min": 0,
       "max": 12,
       "label": "Washing / contamination",
       "meaning": "Higher scores mean more distress about germs or contamination and more washing or cleaning. Shown for information only; there is no separate validated cut-off for this subscale."
      }
     ]
    },
    {
     "section": "checking",
     "range": [
      0,
      12
     ],
     "bands": [
      {
       "min": 0,
       "max": 12,
       "label": "Checking",
       "meaning": "Higher scores mean more distress around repeatedly checking things such as doors, taps or switches. Shown for information only."
      }
     ]
    },
    {
     "section": "ordering",
     "range": [
      0,
      12
     ],
     "bands": [
      {
       "min": 0,
       "max": 12,
       "label": "Ordering",
       "meaning": "Higher scores mean more distress when things are not arranged in a particular way. Shown for information only."
      }
     ]
    },
    {
     "section": "obsessing",
     "range": [
      0,
      12
     ],
     "bands": [
      {
       "min": 0,
       "max": 12,
       "label": "Obsessing",
       "meaning": "Higher scores mean more distress from unwanted, intrusive thoughts. Unwanted thoughts are common; it is the distress and time taken that matter. Shown for information only."
      }
     ]
    },
    {
     "section": "neutralizing",
     "range": [
      0,
      12
     ],
     "bands": [
      {
       "min": 0,
       "max": 12,
       "label": "Neutralizing",
       "meaning": "Higher scores mean more urges to count or to use numbers to feel safe. Shown for information only."
      }
     ]
    },
    {
     "section": "hoarding",
     "range": [
      0,
      12
     ],
     "bands": [
      {
       "min": 0,
       "max": 5,
       "label": "Hoarding - typical range",
       "meaning": "Your answers about keeping and collecting things are in the usual range."
      },
      {
       "min": 6,
       "max": 12,
       "label": "Hoarding - elevated",
       "meaning": "Your answers suggest that difficulty letting go of possessions may be causing you some distress. This is not a diagnosis. If clutter is affecting your home, safety or relationships, a psychologist can help."
      }
     ]
    }
   ],
   "clinicalCutoff": "Total >= 21 suggests probable OCD (Foa et al., 2002; recommended cut-off distinguishing OCD from non-anxious controls). Secondary (NovoPsych technical review citing Wootton et al., 2015): OCD component (15 items) >= 12 and Hoarding subscale >= 6 indicate clinically significant levels.",
   "notes": "Hoarding and ordering subscales discriminate OCD from non-patients less well than the other subscales (PsyToolkit/Foa 2002). Neutralizing and Obsessing subscales show lower reliability in some populations (NovoPsych review). The hoarding >= 6 and OCI-OCD >= 12 thresholds come from a secondary source (NovoPsych 2025 technical review citing Wootton et al. 2015) and were not checked against the primary paper."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Screening tool, not a diagnosis. Validated in OCD patients, other anxiety disorders and non-anxious controls (Foa 2002): good to excellent internal consistency (total alpha ~.81-.93 clinical, ~.90 non-clinical) and test-retest r = .84 over ~2 weeks in OCD patients. Correlates strongly with other self-report OCD measures (Maudsley OCI r = .85) but only moderately with the clinician-rated Y-BOCS, and moderately with depression/anxiety measures - so elevated scores may partly reflect general distress. Adults 18+ (Spanish validation from 16+). South Asia: a Sinhala version was validated in Sri Lankan adults and published in the Indian Journal of Psychiatry (Senanayake et al., 2018;60(3):318-323); no India-specific (Hindi or other Indian language) OCI-R validation was found in this search. Item wording verified against two independent reproductions (Carepatron form PDF and PsyToolkit implementation, which paraphrases the items) and matches the Foa 2002 appendix as widely cited; the primary article itself (APA, paywalled) was not directly accessed.",
  "questionCount": 18
 },
 "personality": {
  "id": "personality",
  "title": "Personality Profile",
  "audience": "adult",
  "instrument": "IPIP 50-item Big-Five Factor Markers (International Personality Item Pool representation of Goldberg's Big-Five markers)",
  "citation": "Goldberg LR. The development of markers for the Big-Five factor structure. Psychological Assessment. 1992;4(1):26-42. Goldberg LR. A broad-bandwidth, public domain, personality inventory measuring the lower-level facets of several five-factor models. In: Mervielde I, Deary I, De Fruyt F, Ostendorf F, eds. Personality Psychology in Europe, Vol. 7. Tilburg University Press; 1999:7-28. Goldberg LR, Johnson JA, Eber HW, et al. The International Personality Item Pool and the future of public-domain personality measures. Journal of Research in Personality. 2006;40:84-96. Items from https://ipip.ori.org/.",
  "sourceUrls": [
   "https://ipip.ori.org/New_IPIP-50-item-scale.htm",
   "https://ipip.ori.org/newBigFive5broadKey.htm",
   "https://ipip.ori.org/newScoringInstructions.htm",
   "https://ipip.ori.org/newPermission.htm"
  ],
  "license": {
   "status": "Public domain.",
   "commercialUseAllowed": true,
   "notes": "Official IPIP permission page: 'Because the IPIP has been placed in the public domain, permission has already been automatically granted for any person to use IPIP items, scales, and inventories for any purpose, commercial or non-commercial.' No need to contact the authors. Citation of Goldberg (1992) and the IPIP website is good practice but not required. Items may be reordered, reworded or translated (e.g. Hindi), though changes may affect comparability with published data.",
   "url": "https://ipip.ori.org/newPermission.htm"
  },
  "estimatedMinutes": 8,
  "instructions": "Describe yourself as you generally are now, not as you wish to be in the future. Describe yourself as you honestly see yourself, in relation to other people you know of the same sex as you are, and roughly your same age. So that you can describe yourself in an honest manner, your responses will be kept in absolute confidence. Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, 3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a description of you.",
  "sections": [
   {
    "id": "main",
    "title": "How Accurately Can You Describe Yourself?",
    "options": [
     {
      "label": "Very Inaccurate",
      "value": 1
     },
     {
      "label": "Moderately Inaccurate",
      "value": 2
     },
     {
      "label": "Neither Accurate Nor Inaccurate",
      "value": 3
     },
     {
      "label": "Moderately Accurate",
      "value": 4
     },
     {
      "label": "Very Accurate",
      "value": 5
     }
    ],
    "questions": [
     {
      "id": "ipip_1",
      "text": "Am the life of the party.",
      "reverse": false,
      "factor": "extraversion"
     },
     {
      "id": "ipip_2",
      "text": "Feel little concern for others.",
      "reverse": true,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_3",
      "text": "Am always prepared.",
      "reverse": false,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_4",
      "text": "Get stressed out easily.",
      "reverse": true,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_5",
      "text": "Have a rich vocabulary.",
      "reverse": false,
      "factor": "intellect_imagination"
     },
     {
      "id": "ipip_6",
      "text": "Don't talk a lot.",
      "reverse": true,
      "factor": "extraversion"
     },
     {
      "id": "ipip_7",
      "text": "Am interested in people.",
      "reverse": false,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_8",
      "text": "Leave my belongings around.",
      "reverse": true,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_9",
      "text": "Am relaxed most of the time.",
      "reverse": false,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_10",
      "text": "Have difficulty understanding abstract ideas.",
      "reverse": true,
      "factor": "intellect_imagination"
     },
     {
      "id": "ipip_11",
      "text": "Feel comfortable around people.",
      "reverse": false,
      "factor": "extraversion"
     },
     {
      "id": "ipip_12",
      "text": "Insult people.",
      "reverse": true,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_13",
      "text": "Pay attention to details.",
      "reverse": false,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_14",
      "text": "Worry about things.",
      "reverse": true,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_15",
      "text": "Have a vivid imagination.",
      "reverse": false,
      "factor": "intellect_imagination"
     },
     {
      "id": "ipip_16",
      "text": "Keep in the background.",
      "reverse": true,
      "factor": "extraversion"
     },
     {
      "id": "ipip_17",
      "text": "Sympathize with others' feelings.",
      "reverse": false,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_18",
      "text": "Make a mess of things.",
      "reverse": true,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_19",
      "text": "Seldom feel blue.",
      "reverse": false,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_20",
      "text": "Am not interested in abstract ideas.",
      "reverse": true,
      "factor": "intellect_imagination"
     },
     {
      "id": "ipip_21",
      "text": "Start conversations.",
      "reverse": false,
      "factor": "extraversion"
     },
     {
      "id": "ipip_22",
      "text": "Am not interested in other people's problems.",
      "reverse": true,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_23",
      "text": "Get chores done right away.",
      "reverse": false,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_24",
      "text": "Am easily disturbed.",
      "reverse": true,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_25",
      "text": "Have excellent ideas.",
      "reverse": false,
      "factor": "intellect_imagination"
     },
     {
      "id": "ipip_26",
      "text": "Have little to say.",
      "reverse": true,
      "factor": "extraversion"
     },
     {
      "id": "ipip_27",
      "text": "Have a soft heart.",
      "reverse": false,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_28",
      "text": "Often forget to put things back in their proper place.",
      "reverse": true,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_29",
      "text": "Get upset easily.",
      "reverse": true,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_30",
      "text": "Do not have a good imagination.",
      "reverse": true,
      "factor": "intellect_imagination"
     },
     {
      "id": "ipip_31",
      "text": "Talk to a lot of different people at parties.",
      "reverse": false,
      "factor": "extraversion"
     },
     {
      "id": "ipip_32",
      "text": "Am not really interested in others.",
      "reverse": true,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_33",
      "text": "Like order.",
      "reverse": false,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_34",
      "text": "Change my mood a lot.",
      "reverse": true,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_35",
      "text": "Am quick to understand things.",
      "reverse": false,
      "factor": "intellect_imagination"
     },
     {
      "id": "ipip_36",
      "text": "Don't like to draw attention to myself.",
      "reverse": true,
      "factor": "extraversion"
     },
     {
      "id": "ipip_37",
      "text": "Take time out for others.",
      "reverse": false,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_38",
      "text": "Shirk my duties.",
      "reverse": true,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_39",
      "text": "Have frequent mood swings.",
      "reverse": true,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_40",
      "text": "Use difficult words.",
      "reverse": false,
      "factor": "intellect_imagination"
     },
     {
      "id": "ipip_41",
      "text": "Don't mind being the center of attention.",
      "reverse": false,
      "factor": "extraversion"
     },
     {
      "id": "ipip_42",
      "text": "Feel others' emotions.",
      "reverse": false,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_43",
      "text": "Follow a schedule.",
      "reverse": false,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_44",
      "text": "Get irritated easily.",
      "reverse": true,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_45",
      "text": "Spend time reflecting on things.",
      "reverse": false,
      "factor": "intellect_imagination"
     },
     {
      "id": "ipip_46",
      "text": "Am quiet around strangers.",
      "reverse": true,
      "factor": "extraversion"
     },
     {
      "id": "ipip_47",
      "text": "Make people feel at ease.",
      "reverse": false,
      "factor": "agreeableness"
     },
     {
      "id": "ipip_48",
      "text": "Am exacting in my work.",
      "reverse": false,
      "factor": "conscientiousness"
     },
     {
      "id": "ipip_49",
      "text": "Often feel blue.",
      "reverse": true,
      "factor": "emotional_stability"
     },
     {
      "id": "ipip_50",
      "text": "Am full of ideas.",
      "reverse": false,
      "factor": "intellect_imagination"
     }
    ]
   }
  ],
  "scoring": {
   "method": "Official IPIP scoring: for + keyed items Very Inaccurate=1 ... Very Accurate=5; for - keyed items (reverse: true) Very Inaccurate=5 ... Very Accurate=1 (i.e. 6 minus the response). Sum the 10 items of each factor; each factor ranges 10-50. No total score - personality traits are reported as a profile.",
   "scales": [
    {
     "section": "extraversion",
     "label": "Extraversion",
     "range": [
      10,
      50
     ],
     "bands": [
      {
       "min": 10,
       "max": 23,
       "label": "Lower Extraversion",
       "meaning": "You tend to be quiet, reserved and comfortable with your own company. You often think before you speak, enjoy deeper one-to-one conversations, and recharge with time alone. These are real strengths for focused, independent work and careful listening."
      },
      {
       "min": 24,
       "max": 36,
       "label": "Average Extraversion",
       "meaning": "You are flexible between sociable and reserved. You can enjoy company and conversation, and you also value quieter time, adapting to the situation."
      },
      {
       "min": 37,
       "max": 50,
       "label": "Higher Extraversion",
       "meaning": "You tend to be outgoing, talkative and energised by people. You are comfortable taking the lead socially and starting conversations, strengths that help in teamwork, networking and roles that involve people."
      }
     ]
    },
    {
     "section": "agreeableness",
     "label": "Agreeableness",
     "range": [
      10,
      50
     ],
     "bands": [
      {
       "min": 10,
       "max": 23,
       "label": "Lower Agreeableness",
       "meaning": "You tend to be direct, independent-minded and comfortable with disagreement. You can make tough calls, negotiate and question others' ideas - useful in competitive or critical-thinking roles. Remember to let people know you care about them too."
      },
      {
       "min": 24,
       "max": 36,
       "label": "Average Agreeableness",
       "meaning": "You balance concern for others with standing up for your own views. You are generally cooperative while still able to say no when needed."
      },
      {
       "min": 37,
       "max": 50,
       "label": "Higher Agreeableness",
       "meaning": "You tend to be warm, caring and considerate, and you notice how others are feeling. People often find you easy to be around - strengths for teamwork, caring roles and building trust. Make sure your own needs get attention too."
      }
     ]
    },
    {
     "section": "conscientiousness",
     "label": "Conscientiousness",
     "range": [
      10,
      50
     ],
     "bands": [
      {
       "min": 10,
       "max": 23,
       "label": "Lower Conscientiousness",
       "meaning": "You tend to be spontaneous, flexible and relaxed about plans and routines. You can adapt quickly and go with the flow, which helps in fast-changing situations. Simple tools like lists or reminders can help with tasks that need structure."
      },
      {
       "min": 24,
       "max": 36,
       "label": "Average Conscientiousness",
       "meaning": "You balance organisation with flexibility. You can plan and follow through when it matters while staying adaptable."
      },
      {
       "min": 37,
       "max": 50,
       "label": "Higher Conscientiousness",
       "meaning": "You tend to be organised, dependable and detail-minded, and you like to finish what you start. These are strengths for planning, reliability and long-term goals. Allow yourself some flexibility when things do not go to plan."
      }
     ]
    },
    {
     "section": "emotional_stability",
     "label": "Emotional Stability",
     "range": [
      10,
      50
     ],
     "bands": [
      {
       "min": 10,
       "max": 23,
       "label": "Lower Emotional Stability",
       "meaning": "You tend to feel emotions strongly and may notice stress, worry or mood changes more readily than others. This sensitivity often comes with empathy and awareness of risk. If stress or low mood feel hard to manage, talking with someone you trust or a counsellor can help. (This is a personality trait, not a diagnosis.)"
      },
      {
       "min": 24,
       "max": 36,
       "label": "Average Emotional Stability",
       "meaning": "You experience a typical range of ups and downs, usually recovering from everyday stress in a reasonable time."
      },
      {
       "min": 37,
       "max": 50,
       "label": "Higher Emotional Stability",
       "meaning": "You tend to stay calm and even-tempered, and you are not easily upset by everyday stress. This steadiness is a strength under pressure and helps others feel settled around you."
      }
     ]
    },
    {
     "section": "intellect_imagination",
     "label": "Intellect / Imagination (Openness)",
     "range": [
      10,
      50
     ],
     "bands": [
      {
       "min": 10,
       "max": 23,
       "label": "Lower Intellect / Imagination (Openness)",
       "meaning": "You tend to be practical, down-to-earth and focused on the concrete and familiar. You value what works and prefer clear, tried-and-tested approaches - strengths for hands-on, practical tasks."
      },
      {
       "min": 24,
       "max": 36,
       "label": "Average Intellect / Imagination (Openness)",
       "meaning": "You balance curiosity with practicality, open to new ideas while valuing what is familiar and proven."
      },
      {
       "min": 37,
       "max": 50,
       "label": "Higher Intellect / Imagination (Openness)",
       "meaning": "You tend to be curious, imaginative and interested in ideas, and you enjoy reflecting and learning. These are strengths for creativity, problem-solving and adapting to new things."
      }
     ]
    }
   ],
   "clinicalCutoff": "None. The Big Five are normal personality dimensions; there are no clinical cut-offs and no 'good' or 'bad' scores.",
   "notes": "Factor keys (from the official IPIP 50-item sample questionnaire): (1) Extraversion, (2) Agreeableness, (3) Conscientiousness, (4) Emotional Stability (the reverse of Neuroticism), (5) Intellect/Imagination (often called Openness). Keying per factor: Extraversion 5+/5-, Agreeableness 6+/4-, Conscientiousness 6+/4-, Emotional Stability 2+/8-, Intellect 7+/3-. Coefficient alphas reported by IPIP for the 10-item scales: E .87, A .82, C .79, ES .86, I .84. BAND CAVEAT: IPIP publishes no official norms or cut-offs and does not endorse fixed bands. The bands used here are a neutral, non-normative convention based on the average item response: mean below 2.4 (10-23) = lower, 2.4-3.6 (24-36) = average, above 3.6 (37-50) = higher. For norm-referenced feedback (e.g. percentiles), BrainTest would need to collect its own Indian norms or use published sample means/SDs; community samples typically average in the mid-30s on most factors, so expect many users to fall in the 'average' or 'higher' bands. Item order in 'sections' is the official IPIP sample-questionnaire order, which interleaves factors and alternates keying to reduce response bias."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Not a clinical or diagnostic test - it describes normal personality traits; every trait level has strengths. Present results as a profile, avoid labels such as 'neurotic', and do not use for hiring decisions without proper validation. The IPIP Big-Five markers correlate highly with Goldberg's original adjective markers and with commercial Big Five inventories (e.g. NEO). The instruction stem refers to people 'of the same sex as you are' - this is the official IPIP wording; since IPIP permits editing, BrainTest may change it to 'of the same gender as you' or simply 'people you know of roughly your same age'. India: IPIP Big-Five measures have been used widely in Indian research, but no Indian norms were verified in this search. Items, factor assignment and keying were extracted programmatically from the official IPIP 50-item sample questionnaire page and cross-checked against the official IPIP Big-Five Factor Markers scoring-key page (ipip.ori.org); they match exactly.",
  "questionCount": 50
 },
 "sleep-alt": {
  "id": "sleep-alt",
  "title": "Sleep & Insomnia",
  "audience": "adult",
  "instrument": "Athens Insomnia Scale (AIS-8), 8 items",
  "citation": "Soldatos CR, Dikeos DG, Paparrigopoulos TJ. Athens Insomnia Scale: validation of an instrument based on ICD-10 criteria. Journal of Psychosomatic Research. 2000;48(6):555-560. doi:10.1016/S0022-3999(00)00095-7. Soldatos CR, Dikeos DG, Paparrigopoulos TJ. The diagnostic validity of the Athens Insomnia Scale. Journal of Psychosomatic Research. 2003;55(3):263-267.",
  "sourceUrls": [
   "https://pubmed.ncbi.nlm.nih.gov/11033374/",
   "https://www.med.upenn.edu/cbti/assets/user-content/documents/Athens Insomnia Scale (AIS).pdf",
   "https://novopsych.com/wp-content/uploads/2026/09/athens-insomnia-scale-ais-blank-form.pdf",
   "https://www.openarchives.gr/aggregator-openarchives/edm/pergamos/000005-uoadl:3084316"
  ],
  "license": {
   "status": "No formal licence, licensing body or fee schedule found. The scale was published in the developers' 2000 Journal of Psychosomatic Research article (Elsevier; article copyright Elsevier / authors) and is widely reproduced free of charge by universities, clinics and assessment platforms. No explicit statement permitting or forbidding commercial use was found.",
   "commercialUseAllowed": false,
   "notes": "Set to false because no explicit commercial permission exists, not because a licence fee is known. In practice the AIS is treated as free to use with citation, and it is the best freely reproducible option found: the ISI (Mapi, fee), PROMIS Sleep Disturbance (PROMIS Health Organization / HealthMeasures - free for non-commercial use, licence required for commercial distribution) and the Sleep Condition Indicator (Espie 2014, published under CC BY-NC 3.0 - non-commercial; authors linked to Big Health/Sleepio) are all more restricted. Recommended action: email the developer (Prof. Constantin R. Soldatos, Eginition Hospital, University of Athens; address listed in Shahid et al. 2012 'STOP, THAT and One Hundred Other Sleep Scales') for written confirmation that use on a free-to-access commercial website is permitted, and always display the citation. The response anchors must not be altered.",
   "url": "https://pubmed.ncbi.nlm.nih.gov/11033374/"
  },
  "estimatedMinutes": 3,
  "instructions": "This scale is intended to record your own assessment of any sleep difficulty you might have experienced. Please, check (by circling the appropriate number) the items below to indicate your estimate of any difficulty, provided that it occurred at least three times per week during the last month.",
  "sections": [
   {
    "id": "sleep_induction",
    "title": "Sleep induction",
    "options": [
     {
      "label": "No problem",
      "value": 0
     },
     {
      "label": "Slightly delayed",
      "value": 1
     },
     {
      "label": "Markedly delayed",
      "value": 2
     },
     {
      "label": "Very delayed or did not sleep at all",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "ais_1",
      "text": "Sleep induction (time it takes you to fall asleep after turning-off the lights)",
      "reverse": false,
      "factor": "night_sleep"
     }
    ]
   },
   {
    "id": "awakenings",
    "title": "Awakenings during the night",
    "options": [
     {
      "label": "No problem",
      "value": 0
     },
     {
      "label": "Minor problem",
      "value": 1
     },
     {
      "label": "Considerable problem",
      "value": 2
     },
     {
      "label": "Serious problem or did not sleep at all",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "ais_2",
      "text": "Awakenings during the night",
      "reverse": false,
      "factor": "night_sleep"
     }
    ]
   },
   {
    "id": "final_awakening",
    "title": "Final awakening",
    "options": [
     {
      "label": "Not earlier",
      "value": 0
     },
     {
      "label": "A little earlier",
      "value": 1
     },
     {
      "label": "Markedly earlier",
      "value": 2
     },
     {
      "label": "Much earlier or did not sleep at all",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "ais_3",
      "text": "Final awakening earlier than desired",
      "reverse": false,
      "factor": "night_sleep"
     }
    ]
   },
   {
    "id": "duration",
    "title": "Total sleep duration",
    "options": [
     {
      "label": "Sufficient",
      "value": 0
     },
     {
      "label": "Slightly insufficient",
      "value": 1
     },
     {
      "label": "Markedly insufficient",
      "value": 2
     },
     {
      "label": "Very insufficient or did not sleep at all",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "ais_4",
      "text": "Total sleep duration",
      "reverse": false,
      "factor": "night_sleep"
     }
    ]
   },
   {
    "id": "quality",
    "title": "Overall quality of sleep",
    "options": [
     {
      "label": "Satisfactory",
      "value": 0
     },
     {
      "label": "Slightly unsatisfactory",
      "value": 1
     },
     {
      "label": "Markedly unsatisfactory",
      "value": 2
     },
     {
      "label": "Very unsatisfactory or did not sleep at all",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "ais_5",
      "text": "Overall quality of sleep (no matter how long you slept)",
      "reverse": false,
      "factor": "night_sleep"
     }
    ]
   },
   {
    "id": "daytime",
    "title": "During the day",
    "options": [
     {
      "label": "Normal",
      "value": 0
     },
     {
      "label": "Slightly decreased",
      "value": 1
     },
     {
      "label": "Markedly decreased",
      "value": 2
     },
     {
      "label": "Very decreased",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "ais_6",
      "text": "Sense of well-being during the day",
      "reverse": false,
      "factor": "daytime"
     },
     {
      "id": "ais_7",
      "text": "Functioning (physical and mental) during the day",
      "reverse": false,
      "factor": "daytime"
     }
    ]
   },
   {
    "id": "sleepiness",
    "title": "Daytime sleepiness",
    "options": [
     {
      "label": "None",
      "value": 0
     },
     {
      "label": "Mild",
      "value": 1
     },
     {
      "label": "Considerable",
      "value": 2
     },
     {
      "label": "Intense",
      "value": 3
     }
    ],
    "questions": [
     {
      "id": "ais_8",
      "text": "Sleepiness during the day",
      "reverse": false,
      "factor": "daytime"
     }
    ]
   }
  ],
  "scoring": {
   "method": "Sum all 8 items (each 0-3). Total range 0-24. No reverse-scored items. Optional brief version AIS-5 = items 1-5 only (range 0-15), as described by the developers.",
   "scales": [
    {
     "section": "total",
     "range": [
      0,
      24
     ],
     "bands": [
      {
       "min": 0,
       "max": 5,
       "label": "Below the insomnia cut-off",
       "meaning": "Your answers are below the level usually linked with insomnia. Occasional poor nights are normal. If you are still concerned about your sleep, keep a simple sleep diary for two weeks and repeat this check."
      },
      {
       "min": 6,
       "max": 10,
       "label": "Above the insomnia cut-off",
       "meaning": "Your answers are at a level often seen in people with insomnia. This is not a diagnosis, and it is very common. Good first steps are a regular wake-up time, limiting caffeine after midday and screens before bed; if this has been going on for a month or more, it is worth speaking to a doctor."
      },
      {
       "min": 11,
       "max": 24,
       "label": "Well above the insomnia cut-off",
       "meaning": "Your answers suggest sleep difficulties that are likely affecting how you feel and function during the day. Please consider seeing a doctor or sleep specialist, who can look for causes such as stress, low mood, pain, breathing problems during sleep or medication effects, and discuss effective treatments such as CBT for insomnia."
      }
     ]
    }
   ],
   "clinicalCutoff": "Total >= 6 = probable insomnia (Soldatos 2003; sensitivity 93%, specificity 85%, 90% correct classification vs ICD-10 diagnosis, n=299). Other populations have reported different optimum cut-offs (e.g. 8 in a Polish validation).",
   "notes": "Only the cut-off of 6 is validated. The split between 6-10 and 11-24 is a BrainTest display convention for user feedback, NOT an official severity band - label it as such or collapse to two bands if strict fidelity is required. The 'did not sleep at all' option text applies to items 1-5 only, as in the original."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Screening tool, not a diagnosis; based on ICD-10 criteria for nonorganic insomnia (complaint at least three times a week for at least a month). It does not screen for other sleep disorders such as sleep apnoea. Original validation: insomnia patients and controls aged 18-79; internal consistency .87-.89, test-retest .88-.89; correlated .85-.90 with the Sleep Problems Scale (Soldatos 2000, summarised in Shahid et al. 2012). Translated and validated in many languages (e.g. Polish, Spanish, Japanese, Portuguese). India: no Indian-language (Hindi etc.) validation of the AIS was found in this search; the ISI has Hindi and Telugu validations instead. Item text and option labels verified against the NovoPsych reproduction of the form and the developer's published version (as summarised by UPenn/Shahid et al.); the instruction stem is from the original article as widely reproduced (NovoPsych adapts it to 'Please select the response...').",
  "questionCount": 8
 },
 "sleep": {
  "id": "sleep",
  "title": "Sleep & Insomnia",
  "audience": "adult",
  "instrument": "Insomnia Severity Index (ISI), 7 items",
  "citation": "Bastien CH, Vallieres A, Morin CM. Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Medicine. 2001;2(4):297-307. Morin CM, Belleville G, Belanger L, Ivers H. The Insomnia Severity Index: psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep. 2011;34(5):601-608. (c) Morin CM (1993, 1996, 2000, 2006).",
  "sourceUrls": [
   "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/",
   "https://www.med.cuhk.edu.hk/f/page/1244/2581/ISI.pdf",
   "https://www.med.upenn.edu/cbti/assets/user-content/documents/Insomnia Severity Index (ISI).pdf",
   "https://pmc.ncbi.nlm.nih.gov/articles/PMC3079939/",
   "https://pmc.ncbi.nlm.nih.gov/articles/PMC3271495"
  ],
  "license": {
   "status": "Copyrighted by Prof. Charles M. Morin (Universite Laval). Distributed exclusively by Mapi Research Trust via the ePROVIDE platform. Permission/licence required for every use; separate request workflows exist for (a) academic/clinician/student without funding, (b) academic/clinician/student with funding, and (c) commercial users. Commercial use is fee-bearing (fees quoted on request; not published).",
   "commercialUseAllowed": false,
   "notes": "Not free for a commercial website. To use the ISI on BrainTest you must submit a 'commercial' request on ePROVIDE (https://eprovide.mapi-trust.org/isi-insomnia-severity-index/), obtain a user agreement and pay the licence fee; Mapi will also supply the official, current English (and any Indian-language) versions - you must use those exact texts. Items in this file are for prototype/sample purposes only. Use sleep-alt.json (Athens Insomnia Scale) as the freely reproducible alternative, noting its own licence caveats.",
   "url": "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/"
  },
  "estimatedMinutes": 3,
  "instructions": "For each question below, please circle the number corresponding most accurately to your sleep patterns in the LAST 2 WEEKS.",
  "sections": [
   {
    "id": "severity",
    "title": "Severity of sleep difficulties",
    "instructions": "For the first three questions, please rate the SEVERITY of your sleep difficulties.",
    "options": [
     {
      "label": "None",
      "value": 0
     },
     {
      "label": "Mild",
      "value": 1
     },
     {
      "label": "Moderate",
      "value": 2
     },
     {
      "label": "Severe",
      "value": 3
     },
     {
      "label": "Very Severe",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "isi_1",
      "text": "Difficulty falling asleep",
      "reverse": false,
      "factor": "severity"
     },
     {
      "id": "isi_2",
      "text": "Difficulty staying asleep",
      "reverse": false,
      "factor": "severity"
     },
     {
      "id": "isi_3",
      "text": "Problem waking up too early in the morning",
      "reverse": false,
      "factor": "severity"
     }
    ]
   },
   {
    "id": "satisfaction",
    "title": "Satisfaction",
    "options": [
     {
      "label": "Very Satisfied",
      "value": 0
     },
     {
      "label": "Satisfied",
      "value": 1
     },
     {
      "label": "Neutral",
      "value": 2
     },
     {
      "label": "Dissatisfied",
      "value": 3
     },
     {
      "label": "Very Dissatisfied",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "isi_4",
      "text": "How SATISFIED/dissatisfied are you with your current sleep pattern?",
      "reverse": false,
      "factor": "satisfaction"
     }
    ]
   },
   {
    "id": "interference",
    "title": "Daytime functioning",
    "options": [
     {
      "label": "Not at all Interfering",
      "value": 0
     },
     {
      "label": "A Little Interfering",
      "value": 1
     },
     {
      "label": "Somewhat Interfering",
      "value": 2
     },
     {
      "label": "Very Interfering",
      "value": 3
     },
     {
      "label": "Very Much Interfering",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "isi_5",
      "text": "To what extent do you consider your sleep problem to INTERFERE with your daily functioning (e.g., daytime fatigue, ability to function at work/daily chores, concentration, memory, mood).",
      "reverse": false,
      "factor": "impact"
     }
    ]
   },
   {
    "id": "noticeable",
    "title": "Noticeable to others",
    "options": [
     {
      "label": "Not at all Noticeable",
      "value": 0
     },
     {
      "label": "A Little Noticeable",
      "value": 1
     },
     {
      "label": "Somewhat Noticeable",
      "value": 2
     },
     {
      "label": "Very Noticeable",
      "value": 3
     },
     {
      "label": "Very Much Noticeable",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "isi_6",
      "text": "How NOTICEABLE to others do you think your sleeping problem is in terms of impairing the quality of your life?",
      "reverse": false,
      "factor": "impact"
     }
    ]
   },
   {
    "id": "worry",
    "title": "Worry about sleep",
    "options": [
     {
      "label": "Not at all",
      "value": 0
     },
     {
      "label": "A Little",
      "value": 1
     },
     {
      "label": "Somewhat",
      "value": 2
     },
     {
      "label": "Very",
      "value": 3
     },
     {
      "label": "Very Much",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "isi_7",
      "text": "How WORRIED/distressed are you about your current sleep problem?",
      "reverse": false,
      "factor": "impact"
     }
    ]
   }
  ],
  "scoring": {
   "method": "Sum all 7 items (each 0-4). Total range 0-28. No reverse-scored items.",
   "scales": [
    {
     "section": "total",
     "range": [
      0,
      28
     ],
     "bands": [
      {
       "min": 0,
       "max": 7,
       "label": "No clinically significant insomnia",
       "meaning": "Your answers do not suggest a meaningful sleep problem at the moment. If you are still concerned about your sleep, you could repeat this check in a couple of weeks or mention it at your next doctor's visit."
      },
      {
       "min": 8,
       "max": 14,
       "label": "Subthreshold insomnia",
       "meaning": "You have some sleep difficulties, at a mild level. This may not need treatment right away. Regular sleep and wake times, limiting caffeine and screens late in the evening, and keeping an eye on whether things get worse are reasonable first steps; speak to a doctor if it persists or bothers you."
      },
      {
       "min": 15,
       "max": 21,
       "label": "Clinical insomnia (moderate severity)",
       "meaning": "Your answers suggest insomnia of moderate severity that is likely affecting your days. This is common and very treatable. It is worth talking to a doctor or sleep specialist; structured approaches such as cognitive behavioural therapy for insomnia (CBT-I) work well for most people."
      },
      {
       "min": 22,
       "max": 28,
       "label": "Clinical insomnia (severe)",
       "meaning": "Your answers suggest severe insomnia that is likely having a significant effect on daytime life. Please arrange to see a doctor or sleep specialist for a proper assessment - they can check for other causes (such as sleep apnoea, pain, mood or medication effects) and discuss effective treatment."
      }
     ]
    }
   ],
   "clinicalCutoff": "Developer guidelines: 0-7 none, 8-14 subthreshold, 15-21 moderate clinical, 22-28 severe clinical (Bastien 2001; developers note these were not formally validated). Community-sample case detection: total >= 10 (sensitivity 86.1%, specificity 87.7%; Morin 2011). Clinical samples: >= 11 (Morin 2011).",
   "notes": "Item numbering: current Mapi-distributed versions number items 1-7 with a 'last 2 weeks' recall; the original 2001 publication labelled the first three items 1a/1b/1c, used 'Moderately Satisfied' instead of 'Neutral' for item 2 (here item 4), 'Much' instead of 'Very' for anchor 3 of the impact items, and a different order of the 'interfere' and 'noticeable' items. Change scores (Morin 2011, clinical sample): reduction of more than 7 points = moderate improvement; more than 8 points = marked improvement."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Screening/severity tool, not a diagnosis; it does not detect other sleep disorders (e.g. obstructive sleep apnoea, restless legs, circadian rhythm disorders). Validated in insomnia patients aged 17-84 (Bastien 2001, internal consistency alpha .74 in that sample; .90-.91 in Morin 2011) and in a large community sample (Morin 2011). India: a Hindi adaptation was validated by Lahan & Gupta (Indian J Psychol Med 2011; Cronbach's alpha 0.91, n=65), a Telugu version by Tikka et al. (Prim Care Companion CNS Disord 2022), and psychometrics were examined among university students in New Delhi (Veqar & Hussain, Int J Adolesc Med Health 2017). Indian-language versions must also be licensed via Mapi. Wording source: the Mapi-distributed 'ISI - Hong Kong/English' version (Version of 10 Sep 15, ID044977, ISI_AU2.0-last-2-weeks) hosted by CUHK - it is an official Mapi text but is the Hong Kong English locale; the US/UK English master text supplied by Mapi on licensing may differ in minor wording (e.g. 'sleep problem' vs 'sleeping problem', 'Very' vs 'Much'). Confirm against the licensed copy before release.",
  "questionCount": 7
 },
 "stream-selector": {
  "id": "stream-selector",
  "title": "Stream Selector",
  "audience": "student",
  "ageRange": "Class 9-10 (about 14-16)",
  "instrument": "BrainTest composite (not a single validated instrument): O*NET Interest Profiler Short Form RIASEC scores + ICAR Sample Test area scores + academic self-concept items (PISA 2012 mathematics self-concept scale, verbatim for maths, adapted for other subjects) + optional recent marks + one stated-preference question",
  "citation": "Components: Rounds, Su, Lewis & Rivkin (2010) O*NET IP-SF; Condon & Revelle (2014) ICAR, Intelligence 43, 52-64; OECD (2014) PISA 2012 Technical Report, ch. 16 (scale SCMAT, items ST42). Rationale: Marsh & Yeung (1997) Coursework selection: Relations to academic self-concept and achievement, American Educational Research Journal 34(4), 691-720; Nye, Su, Rounds & Drasgow (2012) Vocational interests and performance: A quantitative summary of over 60 years of research, Perspectives on Psychological Science 7(4), 384-403; Wai, Lubinski & Benbow (2009) Journal of Educational Psychology 101(4), 817-835.",
  "sourceUrls": [
   "https://www.onetcenter.org/IPSF.html",
   "https://personality-project.org/revelle/publications/condon.icar.14.pdf",
   "https://www.oecd.org/content/dam/oecd/en/about/programmes/edu/pisa/publications/technical-report/PISA-2012-technical-report-final.pdf",
   "https://news.careers360.com/tamanna-aptitude-test-for-class-9-10-students-make-better-career-choices/amp",
   "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"
  ],
  "license": {
   "status": "Mixed. O*NET IP-SF: CC BY-ND 4.0 (commercial OK, verbatim, attributed). ICAR: academic/scientific use only per current maintainers. PISA self-concept items: (c) OECD; OECD permits copying with acknowledgement, but 'all requests for public or commercial use' go to rights@oecd.org. BrainTest-written items (marks, preference, adapted subject stems) have no third-party restriction.",
   "commercialUseAllowed": false,
   "notes": "Commercial use is blocked by two components: (1) ICAR items - request permission from Prof. Philipp Doebler, TU Dortmund (doebler@statistik.tu-dortmund.de) / D. M. Condon & W. Revelle; (2) PISA 2012 self-concept wording - request permission from OECD Rights (rights@oecd.org). Alternatively, replace the adapted self-concept items with fully original BrainTest items (validated: false) and pilot them. The O*NET part is commercially usable as-is under CC BY-ND with attribution.",
   "url": "https://www.onetcenter.org/license_tools.html"
  },
  "estimatedMinutes": 30,
  "instructions": "Choosing a stream after Class 10 is a big step, and there's no single 'right' answer. This activity looks at three things together: what you enjoy (interests), how confident you feel in different subjects, and how you think through different kinds of puzzles. If you've already done the Career Interest Profile and Career Aptitude Test, we'll reuse those answers. Answer honestly - this is about finding a good fit for you, not about getting a high score.",
  "sections": [
   {
    "id": "interests",
    "title": "Your interests (Career Interest Profile)",
    "instructions": "Reuses all 60 items and scores of the 'career-interest' test. Show it here if not already completed.",
    "reuses": "career-interest",
    "questions": []
   },
   {
    "id": "aptitude",
    "title": "Thinking skills (Career Aptitude Test)",
    "instructions": "Reuses all 16 items and area scores of the 'career-aptitude' test. Show it here if not already completed.",
    "reuses": "career-aptitude",
    "questions": []
   },
   {
    "id": "selfconcept",
    "title": "How confident do you feel in each subject?",
    "instructions": "Thinking about each school subject, how much do you agree with these statements?",
    "options": [
     {
      "label": "Strongly disagree",
      "value": 1
     },
     {
      "label": "Disagree",
      "value": 2
     },
     {
      "label": "Agree",
      "value": 3
     },
     {
      "label": "Strongly agree",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "sc_math_1",
      "text": "I am just not good at mathematics.",
      "factor": "selfconcept_math",
      "reverse": true,
      "validated": true,
      "source": "PISA 2012 ST42 (mathematics self-concept), verbatim except <grades> localised to 'marks'"
     },
     {
      "id": "sc_math_2",
      "text": "I get good marks in mathematics.",
      "factor": "selfconcept_math",
      "reverse": false,
      "validated": true,
      "source": "PISA 2012 ST42 (mathematics self-concept), verbatim except <grades> localised to 'marks'"
     },
     {
      "id": "sc_math_3",
      "text": "I learn mathematics quickly.",
      "factor": "selfconcept_math",
      "reverse": false,
      "validated": true,
      "source": "PISA 2012 ST42 (mathematics self-concept), verbatim except <grades> localised to 'marks'"
     },
     {
      "id": "sc_math_4",
      "text": "I have always believed that mathematics is one of my best subjects.",
      "factor": "selfconcept_math",
      "reverse": false,
      "validated": true,
      "source": "PISA 2012 ST42 (mathematics self-concept), verbatim except <grades> localised to 'marks'"
     },
     {
      "id": "sc_math_5",
      "text": "In my mathematics class, I understand even the most difficult work.",
      "factor": "selfconcept_math",
      "reverse": false,
      "validated": true,
      "source": "PISA 2012 ST42 (mathematics self-concept), verbatim except <grades> localised to 'marks'"
     },
     {
      "id": "sc_sci_1",
      "text": "I am just not good at science.",
      "factor": "selfconcept_sci",
      "reverse": true,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_sci_2",
      "text": "I get good marks in science.",
      "factor": "selfconcept_sci",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_sci_3",
      "text": "I learn science quickly.",
      "factor": "selfconcept_sci",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_sci_4",
      "text": "I have always believed that science is one of my best subjects.",
      "factor": "selfconcept_sci",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_sci_5",
      "text": "In my science class, I understand even the most difficult work.",
      "factor": "selfconcept_sci",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_lang_1",
      "text": "I am just not good at languages.",
      "factor": "selfconcept_lang",
      "reverse": true,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_lang_2",
      "text": "I get good marks in languages.",
      "factor": "selfconcept_lang",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_lang_3",
      "text": "I learn languages quickly.",
      "factor": "selfconcept_lang",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_lang_4",
      "text": "I have always believed that languages are among my best subjects.",
      "factor": "selfconcept_lang",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_lang_5",
      "text": "In language classes, I understand even the most difficult work.",
      "factor": "selfconcept_lang",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_socsci_1",
      "text": "I am just not good at social science.",
      "factor": "selfconcept_socsci",
      "reverse": true,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_socsci_2",
      "text": "I get good marks in social science.",
      "factor": "selfconcept_socsci",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_socsci_3",
      "text": "I learn social science quickly.",
      "factor": "selfconcept_socsci",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_socsci_4",
      "text": "I have always believed that social science is one of my best subjects.",
      "factor": "selfconcept_socsci",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_socsci_5",
      "text": "In my social science class, I understand even the most difficult work.",
      "factor": "selfconcept_socsci",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_biz_1",
      "text": "I am just not good at business and economics topics.",
      "factor": "selfconcept_biz",
      "reverse": true,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_biz_2",
      "text": "I do well when we study economics or money topics.",
      "factor": "selfconcept_biz",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_biz_3",
      "text": "I learn business and economics topics quickly.",
      "factor": "selfconcept_biz",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_biz_4",
      "text": "I have always believed that business and economics topics are among my best subjects.",
      "factor": "selfconcept_biz",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     },
     {
      "id": "sc_biz_5",
      "text": "In lessons on economics or money, I understand even the most difficult work.",
      "factor": "selfconcept_biz",
      "reverse": false,
      "validated": false,
      "source": "Adapted by BrainTest from PISA 2012 ST42 stems for this subject - not separately validated"
     }
    ]
   },
   {
    "id": "marks",
    "title": "Your recent marks (optional)",
    "instructions": "If you know them, enter your latest percentages. Leave blank if you're not sure - the result will still work.",
    "questions": [
     {
      "id": "mk_math",
      "text": "Your most recent overall percentage in Mathematics (school exam or report card).",
      "type": "number",
      "min": 0,
      "max": 100,
      "optional": true,
      "factor": "marks_math",
      "validated": false
     },
     {
      "id": "mk_sci",
      "text": "Your most recent overall percentage in Science.",
      "type": "number",
      "min": 0,
      "max": 100,
      "optional": true,
      "factor": "marks_sci",
      "validated": false
     },
     {
      "id": "mk_socsci",
      "text": "Your most recent overall percentage in Social Science.",
      "type": "number",
      "min": 0,
      "max": 100,
      "optional": true,
      "factor": "marks_socsci",
      "validated": false
     },
     {
      "id": "mk_lang",
      "text": "Your most recent overall percentage in English (or your main language subject).",
      "type": "number",
      "min": 0,
      "max": 100,
      "optional": true,
      "factor": "marks_lang",
      "validated": false
     }
    ]
   },
   {
    "id": "preference",
    "title": "Your own preference",
    "questions": [
     {
      "id": "pref_1",
      "text": "If you could choose, which group of subjects would you most enjoy studying in Class 11-12?",
      "type": "single",
      "options": [
       {
        "label": "Physics, Chemistry, Maths / Biology",
        "value": "science"
       },
       {
        "label": "Accountancy, Business Studies, Economics",
        "value": "commerce"
       },
       {
        "label": "History, Political Science, Psychology, Languages, Fine Arts",
        "value": "humanities"
       },
       {
        "label": "I'm not sure yet",
        "value": "unsure"
       }
      ],
      "factor": "stated_preference",
      "validated": false
     }
    ]
   }
  ],
  "scoring": {
   "method": "Step 1 - convert each input to 0-100: Interest_X = RIASEC score_X / 40 * 100 (from career-interest, 0-4 scale). SelfConcept_subject = (mean of its 5 items after reverse-scoring item 1 as 5 - value, range 1-4) -> (mean - 1) / 3 * 100. Aptitude_area = correct / 4 * 100 for verbal, series, matrix; Aptitude_spatial = min(correct / 2, 1) * 100 (3-D items are very hard: ~20% correct in the reference sample). Marks = percentage as entered. Step 2 - stream fit scores (0-100): SCIENCE = 0.35 * mean(Interest_I, Interest_R) + 0.25 * mean(SC_math, SC_sci) + 0.20 * mean(Apt_series, Apt_matrix, Apt_spatial) + 0.20 * mean(Marks_math, Marks_sci). COMMERCE = 0.35 * mean(Interest_E, Interest_C) + 0.25 * mean(SC_math, SC_biz) + 0.20 * mean(Apt_series, Apt_verbal) + 0.20 * mean(Marks_math, Marks_socsci). HUMANITIES = 0.35 * mean(Interest_A, Interest_S) + 0.25 * mean(SC_lang, SC_socsci) + 0.20 * Apt_verbal + 0.20 * mean(Marks_lang, Marks_socsci). If marks are missing, drop that term and divide by the remaining weights (0.80). Step 3 - report all three fit scores with their component breakdown. Top fit = suggested stream; if the top two are within 10 points, say 'You have more than one good option' and show both. Show the student's stated preference (pref_1) alongside, and if it differs from the top fit, encourage a conversation rather than overriding it. Step 4 - within Science, add a hint: Apt_spatial + Interest_R high relative to Interest_I -> mention PCM/engineering routes; otherwise show both PCM and PCB without choosing (we have no validated biology-interest measure).",
   "scales": [
    {
     "section": "selfconcept_math",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 33,
       "label": "Low confidence right now",
       "meaning": "You don't feel very confident in this subject at the moment. Confidence often grows with the right help - a good teacher, a study buddy or a fresh approach can change a lot."
      },
      {
       "min": 34,
       "max": 66,
       "label": "Moderate confidence",
       "meaning": "You feel fairly okay in this subject. Keep practising - steady effort usually turns 'okay' into 'good'."
      },
      {
       "min": 67,
       "max": 100,
       "label": "High confidence",
       "meaning": "You see this subject as one of your strengths. That confidence is valuable - it makes it more likely you'll enjoy and keep going in subjects that build on it."
      }
     ]
    },
    {
     "section": "selfconcept_sci",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 33,
       "label": "Low confidence right now",
       "meaning": "You don't feel very confident in this subject at the moment. Confidence often grows with the right help - a good teacher, a study buddy or a fresh approach can change a lot."
      },
      {
       "min": 34,
       "max": 66,
       "label": "Moderate confidence",
       "meaning": "You feel fairly okay in this subject. Keep practising - steady effort usually turns 'okay' into 'good'."
      },
      {
       "min": 67,
       "max": 100,
       "label": "High confidence",
       "meaning": "You see this subject as one of your strengths. That confidence is valuable - it makes it more likely you'll enjoy and keep going in subjects that build on it."
      }
     ]
    },
    {
     "section": "selfconcept_lang",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 33,
       "label": "Low confidence right now",
       "meaning": "You don't feel very confident in this subject at the moment. Confidence often grows with the right help - a good teacher, a study buddy or a fresh approach can change a lot."
      },
      {
       "min": 34,
       "max": 66,
       "label": "Moderate confidence",
       "meaning": "You feel fairly okay in this subject. Keep practising - steady effort usually turns 'okay' into 'good'."
      },
      {
       "min": 67,
       "max": 100,
       "label": "High confidence",
       "meaning": "You see this subject as one of your strengths. That confidence is valuable - it makes it more likely you'll enjoy and keep going in subjects that build on it."
      }
     ]
    },
    {
     "section": "selfconcept_socsci",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 33,
       "label": "Low confidence right now",
       "meaning": "You don't feel very confident in this subject at the moment. Confidence often grows with the right help - a good teacher, a study buddy or a fresh approach can change a lot."
      },
      {
       "min": 34,
       "max": 66,
       "label": "Moderate confidence",
       "meaning": "You feel fairly okay in this subject. Keep practising - steady effort usually turns 'okay' into 'good'."
      },
      {
       "min": 67,
       "max": 100,
       "label": "High confidence",
       "meaning": "You see this subject as one of your strengths. That confidence is valuable - it makes it more likely you'll enjoy and keep going in subjects that build on it."
      }
     ]
    },
    {
     "section": "selfconcept_biz",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 33,
       "label": "Low confidence right now",
       "meaning": "You don't feel very confident in this subject at the moment. Confidence often grows with the right help - a good teacher, a study buddy or a fresh approach can change a lot."
      },
      {
       "min": 34,
       "max": 66,
       "label": "Moderate confidence",
       "meaning": "You feel fairly okay in this subject. Keep practising - steady effort usually turns 'okay' into 'good'."
      },
      {
       "min": 67,
       "max": 100,
       "label": "High confidence",
       "meaning": "You see this subject as one of your strengths. That confidence is valuable - it makes it more likely you'll enjoy and keep going in subjects that build on it."
      }
     ]
    },
    {
     "section": "fit_science",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 39,
       "label": "Less of a match right now",
       "meaning": "Based on your answers this stream is not your strongest match today. That doesn't close the door - if you have a clear goal that needs it, talk to a counsellor about what extra support would help."
      },
      {
       "min": 40,
       "max": 59,
       "label": "Possible match",
       "meaning": "This stream could work for you. Look at which parts (interests, confidence, marks) pulled the score up or down."
      },
      {
       "min": 60,
       "max": 100,
       "label": "Good match",
       "meaning": "Your interests, confidence and abilities line up well with this stream. Explore the subjects and careers it leads to, and talk it over with your parents and teachers."
      }
     ]
    },
    {
     "section": "fit_commerce",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 39,
       "label": "Less of a match right now",
       "meaning": "Based on your answers this stream is not your strongest match today. That doesn't close the door - if you have a clear goal that needs it, talk to a counsellor about what extra support would help."
      },
      {
       "min": 40,
       "max": 59,
       "label": "Possible match",
       "meaning": "This stream could work for you. Look at which parts (interests, confidence, marks) pulled the score up or down."
      },
      {
       "min": 60,
       "max": 100,
       "label": "Good match",
       "meaning": "Your interests, confidence and abilities line up well with this stream. Explore the subjects and careers it leads to, and talk it over with your parents and teachers."
      }
     ]
    },
    {
     "section": "fit_humanities",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 39,
       "label": "Less of a match right now",
       "meaning": "Based on your answers this stream is not your strongest match today. That doesn't close the door - if you have a clear goal that needs it, talk to a counsellor about what extra support would help."
      },
      {
       "min": 40,
       "max": 59,
       "label": "Possible match",
       "meaning": "This stream could work for you. Look at which parts (interests, confidence, marks) pulled the score up or down."
      },
      {
       "min": 60,
       "max": 100,
       "label": "Good match",
       "meaning": "Your interests, confidence and abilities line up well with this stream. Explore the subjects and careers it leads to, and talk it over with your parents and teachers."
      }
     ]
    }
   ],
   "profiles": [
    {
     "key": "science",
     "name": "Science (PCM / PCB)",
     "description": "For students curious about how things work - nature, the human body, machines, technology - who enjoy maths and science and like solving problems step by step.",
     "exampleCareersIndia": [
      "Engineering (JEE route)",
      "Medicine, dentistry, nursing, pharmacy (NEET route)",
      "Pure sciences and research (IISER, IISc)",
      "Computer science and data science",
      "Architecture (with maths)",
      "Biotechnology and agriculture"
     ]
    },
    {
     "key": "commerce",
     "name": "Commerce",
     "description": "For students interested in business, money, organising and leading, who are comfortable with numbers and like seeing how markets and companies work.",
     "exampleCareersIndia": [
      "Chartered Accountant / Company Secretary / CMA",
      "Banking and finance",
      "BBA/MBA and management",
      "Entrepreneurship",
      "Economics and actuarial science (with maths)",
      "Marketing and digital business"
     ]
    },
    {
     "key": "humanities",
     "name": "Humanities / Arts",
     "description": "For students who love ideas, people, society, languages and creativity - reading, writing, debating, art or helping others.",
     "exampleCareersIndia": [
      "Law (CLAT)",
      "Civil services (UPSC)",
      "Psychology and counselling",
      "Journalism and media",
      "Design, fine arts and performing arts",
      "Teaching, social work and public policy",
      "Economics (with maths) and international relations"
     ]
    }
   ],
   "notes": "IMPORTANT: there is no validated public-domain stream-selection algorithm; the weights above are a transparent BrainTest convention. Justification: interests get the largest weight because interest-environment fit predicts satisfaction, performance and persistence (Nye et al., 2012); academic self-concept predicts which school courses students choose, beyond prior marks (Marsh & Yeung, 1997); prior marks are the most direct predictor of later achievement in the same subject; ability areas add information (spatial ability -> STEM, Wai et al., 2009). Indian practice: the NCERT/CBSE 'Tamanna' aptitude test for Class 9-10 assesses seven aptitudes (language, abstract reasoning, verbal reasoning, mechanical reasoning, numerical, spatial, perceptual) to help shortlist subjects; Indian counselling providers typically combine interest inventories, aptitude tests and a counsellor conversation. NEP 2020 states there should be no hard separation between arts, humanities and sciences, and many boards (incl. CBSE) now allow mixed subject combinations - present results as 'which mix of subjects suits you', not a locked track. Weights should be re-estimated once BrainTest has outcome data (e.g. Class 11 marks and satisfaction)."
  },
  "safety": null,
  "componentsOf": [
   "career-interest",
   "career-aptitude"
  ],
  "clinicalNotes": "Guidance tool, not a diagnosis or an admission/eligibility decision. Validated components: O*NET IP-SF (US samples, alpha .78-.87), ICAR16 (alpha .81, mostly adult online samples), PISA mathematics self-concept (validated internationally across PISA 2003 and 2012, including OECD partner countries; India took part only in PISA 2009+ in two states, so no strong Indian evidence). Non-validated parts (validated: false): self-concept items adapted to science, languages, social science and business; marks inputs; stated preference; and the composite weighting rule. Limitations: no Indian norms; Class 9-10 interests are still forming; marks depend on school/board; gender and family expectations strongly shape stream choice in India - results should open a conversation with parents/teachers/counsellors, not close one. Re-take after a year if unsure.",
  "questionCount": 30,
  "questionCountIncludingComponents": 106
 },
 "stress-burnout": {
  "id": "stress-burnout",
  "title": "Stress & Burnout",
  "audience": "adult",
  "instrument": "PSS-10 (Perceived Stress Scale, 10-item) + Copenhagen Burnout Inventory (CBI) Personal Burnout and Work-related Burnout subscales",
  "citation": "Cohen S, Kamarck T, Mermelstein R. A global measure of perceived stress. J Health Soc Behav. 1983;24(4):385-396. Cohen S, Williamson G. Perceived stress in a probability sample of the United States. In: Spacapan S, Oskamp S, eds. The Social Psychology of Health. Newbury Park, CA: Sage; 1988. Kristensen TS, Borritz M, Villadsen E, Christensen KB. The Copenhagen Burnout Inventory: a new tool for the assessment of burnout. Work & Stress. 2005;19(3):192-207. doi:10.1080/02678370500297720",
  "sourceUrls": [
   "https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales",
   "https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/.doc/pssfaqs.doc",
   "https://slu.edu/medicine/family-medicine/-pdf/perceived-stress-scale.pdf",
   "https://nfa.dk/media/hl5nbers/cbi-first-edition.pdf",
   "https://nfa.dk/media/a4wheblj/cbi-scales.pdf",
   "https://www.tandfonline.com/doi/full/10.1080/02678370500297720"
  ],
  "license": {
   "status": "Mixed. PSS-10: Copyright © 1994 Sheldon Cohen, all rights reserved; free for academic research and education only, and commercial use needs permission. CBI: developed by the Danish National Research Centre for the Working Environment (NFA) and widely described as free and open access.",
   "commercialUseAllowed": false,
   "notes": "PSS-10: Cohen's FAQ (Carnegie Mellon Laboratory for the Study of Stress, Immunity, and Disease) says use 'in profit making ventures ... requires special permission and a nominal charge', and that you need permission from both the publisher of the original article (American Sociological Association, Journal of Health and Social Behavior) and the author (Dr. Sheldon Cohen). Including it in a larger copyrighted scale also needs specific permission. The CMU lab page now routes all PSS permission requests through MAPI Research Trust's ePROVIDE platform (https://eprovide.mapi-trust.org; eprovidetechnicalsupport@mapi-trust.org). Submitting a request is free, but a licence fee may apply. Mind Garden distributes a reprint ('Please feel free to use the Perceived Stress Scale for your research'), but that covers research use only. The PSS items here are therefore for the prototype only and should not go live commercially until an ePROVIDE/MAPI licence is obtained. CBI: no restrictive licence was found. NFA publishes the full English items openly (cbi-first-edition.pdf, cbi-scales.pdf), and secondary sources (for example the Hong Kong Academy of Medicine and published studies) describe it as free, public-domain or open-access, but I found no explicit written licence from NFA covering commercial use. Before launch, email NFA (nfa@nfa.dk) for written confirmation and keep the attribution to Kristensen et al. 2005 / NFA. CBI on its own should be treated as commercialUseAllowed: true pending that confirmation. The false flag applies to this combined test because of the PSS.",
   "url": "https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales",
   "perInstrument": [
    {
     "instrument": "PSS-10",
     "commercialUseAllowed": false,
     "permissionFrom": "Dr. Sheldon Cohen / American Sociological Association, via MAPI Research Trust ePROVIDE",
     "url": "https://eprovide.mapi-trust.org"
    },
    {
     "instrument": "CBI (Personal + Work-related)",
     "commercialUseAllowed": true,
     "permissionFrom": "None required as far as found; confirm with NFA, Denmark (National Research Centre for the Working Environment)",
     "url": "https://nfa.dk/media/hl5nbers/cbi-first-edition.pdf"
    }
   ]
  },
  "estimatedMinutes": 6,
  "instructions": "This check has two parts. Part 1 asks about your feelings and thoughts during the last month. Part 2 asks about tiredness and exhaustion, in general and in relation to your work. There are no right or wrong answers; choose the option that fits best.",
  "sections": [
   {
    "id": "pss10",
    "title": "Perceived Stress (PSS-10)",
    "instructions": "The questions in this scale ask you about your feelings and thoughts during the last month. In each case, you will be asked to indicate how often you felt or thought a certain way.",
    "options": [
     {
      "label": "Never",
      "value": 0
     },
     {
      "label": "Almost Never",
      "value": 1
     },
     {
      "label": "Sometimes",
      "value": 2
     },
     {
      "label": "Fairly Often",
      "value": 3
     },
     {
      "label": "Very Often",
      "value": 4
     }
    ],
    "questions": [
     {
      "id": "pss_1",
      "text": "In the last month, how often have you been upset because of something that happened unexpectedly?",
      "reverse": false
     },
     {
      "id": "pss_2",
      "text": "In the last month, how often have you felt that you were unable to control the important things in your life?",
      "reverse": false
     },
     {
      "id": "pss_3",
      "text": "In the last month, how often have you felt nervous and \"stressed\"?",
      "reverse": false
     },
     {
      "id": "pss_4",
      "text": "In the last month, how often have you felt confident about your ability to handle your personal problems?",
      "reverse": true
     },
     {
      "id": "pss_5",
      "text": "In the last month, how often have you felt that things were going your way?",
      "reverse": true
     },
     {
      "id": "pss_6",
      "text": "In the last month, how often have you found that you could not cope with all the things that you had to do?",
      "reverse": false
     },
     {
      "id": "pss_7",
      "text": "In the last month, how often have you been able to control irritations in your life?",
      "reverse": true
     },
     {
      "id": "pss_8",
      "text": "In the last month, how often have you felt that you were on top of things?",
      "reverse": true
     },
     {
      "id": "pss_9",
      "text": "In the last month, how often have you been angered because of things that were outside of your control?",
      "reverse": false
     },
     {
      "id": "pss_10",
      "text": "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
      "reverse": false
     }
    ]
   },
   {
    "id": "cbi_personal",
    "title": "Personal Burnout (CBI)",
    "instructions": "The following questions are about how you have been feeling in general.",
    "options": [
     {
      "label": "Always",
      "value": 100
     },
     {
      "label": "Often",
      "value": 75
     },
     {
      "label": "Sometimes",
      "value": 50
     },
     {
      "label": "Seldom",
      "value": 25
     },
     {
      "label": "Never/almost never",
      "value": 0
     }
    ],
    "questions": [
     {
      "id": "cbi_p1",
      "text": "How often do you feel tired?",
      "reverse": false
     },
     {
      "id": "cbi_p2",
      "text": "How often are you physically exhausted?",
      "reverse": false
     },
     {
      "id": "cbi_p3",
      "text": "How often are you emotionally exhausted?",
      "reverse": false
     },
     {
      "id": "cbi_p4",
      "text": "How often do you think: \"I can't take it anymore\"?",
      "reverse": false
     },
     {
      "id": "cbi_p5",
      "text": "How often do you feel worn out?",
      "reverse": false
     },
     {
      "id": "cbi_p6",
      "text": "How often do you feel weak and susceptible to illness?",
      "reverse": false
     }
    ]
   },
   {
    "id": "cbi_work_degree",
    "title": "Work-related Burnout (CBI), part A",
    "instructions": "The following questions are about your work (paid or unpaid main occupation; students may think of their studies). Skip this part if you do not currently work.",
    "optional": true,
    "options": [
     {
      "label": "To a very high degree",
      "value": 100
     },
     {
      "label": "To a high degree",
      "value": 75
     },
     {
      "label": "Somewhat",
      "value": 50
     },
     {
      "label": "To a low degree",
      "value": 25
     },
     {
      "label": "To a very low degree",
      "value": 0
     }
    ],
    "questions": [
     {
      "id": "cbi_w1",
      "text": "Is your work emotionally exhausting?",
      "reverse": false
     },
     {
      "id": "cbi_w2",
      "text": "Do you feel burnt out because of your work?",
      "reverse": false
     },
     {
      "id": "cbi_w3",
      "text": "Does your work frustrate you?",
      "reverse": false
     }
    ]
   },
   {
    "id": "cbi_work_freq",
    "title": "Work-related Burnout (CBI), part B",
    "instructions": "How often do the following apply to you?",
    "optional": true,
    "options": [
     {
      "label": "Always",
      "value": 100
     },
     {
      "label": "Often",
      "value": 75
     },
     {
      "label": "Sometimes",
      "value": 50
     },
     {
      "label": "Seldom",
      "value": 25
     },
     {
      "label": "Never/almost never",
      "value": 0
     }
    ],
    "questions": [
     {
      "id": "cbi_w4",
      "text": "Do you feel worn out at the end of the working day?",
      "reverse": false
     },
     {
      "id": "cbi_w5",
      "text": "Are you exhausted in the morning at the thought of another day at work?",
      "reverse": false
     },
     {
      "id": "cbi_w6",
      "text": "Do you feel that every working hour is tiring for you?",
      "reverse": false
     },
     {
      "id": "cbi_w7",
      "text": "Do you have enough energy for family and friends during leisure time?",
      "reverse": true
     }
    ]
   }
  ],
  "scoring": {
   "method": "Report three separate scores; do not combine them into one total. (1) PSS-10: reverse-score items 4, 5, 7 and 8 (0↔4, 1↔3, 2=2), then sum all 10 items. Range 0-40. (2) CBI Personal Burnout: average of the 6 item scores (0-100). (3) CBI Work-related Burnout: reverse cbi_w7 (score = 100 - value), then average the 7 item scores across sections cbi_work_degree and cbi_work_freq (0-100).",
   "scales": [
    {
     "section": "pss10",
     "id": "pss10_total",
     "range": [
      0,
      40
     ],
     "bands": [
      {
       "min": 0,
       "max": 13,
       "label": "Low perceived stress",
       "meaning": "Over the past month you seem to have felt mostly able to handle the demands in your life. Keep doing what works for you."
      },
      {
       "min": 14,
       "max": 26,
       "label": "Moderate perceived stress",
       "meaning": "You have been feeling a fair amount of stress over the past month, which is common. Look at which areas feel least in your control, and try steady habits such as sleep, movement, breaks and talking things through. If stress is affecting your health, work or relationships, a counsellor can help."
      },
      {
       "min": 27,
       "max": 40,
       "label": "High perceived stress",
       "meaning": "You have been feeling a high level of stress and may feel overloaded or out of control much of the time. This is not a diagnosis, but it is worth taking seriously. Consider talking with a doctor, counsellor or psychologist about ways to reduce the load and cope better, and check the Depression and Anxiety screenings too."
      }
     ]
    },
    {
     "section": "cbi_personal",
     "id": "cbi_personal",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 49.99,
       "label": "Low personal burnout",
       "meaning": "Your general level of physical and emotional exhaustion appears to be in the low-to-typical range."
      },
      {
       "min": 50,
       "max": 74.99,
       "label": "Moderate personal burnout",
       "meaning": "You report feeling tired and worn out fairly often. This is a signal to look at rest, recovery and workload, and to protect time for sleep and activities that restore you. If it lasts, consider speaking with a doctor (to rule out physical causes) or a counsellor."
      },
      {
       "min": 75,
       "max": 100,
       "label": "High personal burnout",
       "meaning": "You report feeling exhausted most of the time. Lasting exhaustion like this deserves attention. Please consider seeing a doctor or mental health professional to check for physical causes, depression or other issues, and to plan recovery."
      }
     ]
    },
    {
     "sections": [
      "cbi_work_degree",
      "cbi_work_freq"
     ],
     "id": "cbi_work",
     "range": [
      0,
      100
     ],
     "bands": [
      {
       "min": 0,
       "max": 49.99,
       "label": "Low work-related burnout",
       "meaning": "Your work does not appear to be causing a high level of exhaustion at the moment."
      },
      {
       "min": 50,
       "max": 74.99,
       "label": "Moderate work-related burnout",
       "meaning": "You often feel drained by your work. Think about which work demands feel heaviest, whether you get enough recovery time, and whether you can talk to a manager, HR or an employee assistance programme about workload."
      },
      {
       "min": 75,
       "max": 100,
       "label": "High work-related burnout",
       "meaning": "Your work seems to be leaving you exhausted much of the time. This is a common sign of burnout. Consider talking with a doctor or counsellor, and if possible to your employer, about reducing the strain. Recovery is possible with the right support."
      }
     ]
    }
   ],
   "clinicalCutoff": "PSS-10 has no official clinical cut-off: Cohen's FAQ states 'The PSS is not a diagnostic instrument, so there are no cut-offs'. The 0-13 / 14-26 / 27-40 bands are a widely used convention (from New Hampshire state employee wellness materials), not from Cohen. US norm means are about 12-14 (Harris Poll 1983: men 12.1, women 13.7). CBI: Kristensen and Borritz (PUMA) define 'high degree of burnout' as ≥50 on a subscale. The 75 boundary for 'high' is a commonly used extension in later literature, not from the original CBI manual.",
   "notes": "PSS non-response: score only if all 10 items are answered (or require all). CBI non-response rules from NFA: Personal Burnout needs at least 3 of 6 items answered; Work-related Burnout needs at least 4 of 7. Average only the answered items. Work-related Burnout should be shown only to people who work; offer a 'I am not currently working' skip, and then report only PSS + Personal Burnout. NFA recommends not presenting CBI items in a fixed block order (mix them with other questions) to avoid stereotyped responding. Consider interleaving Personal and Work items. The CBI Client-related subscale (6 items) is left out on purpose because it only applies to human-service workers. Show PSS, Personal and Work results as separate cards. Neither instrument has a self-harm item; no safety flag is needed, but if PSS ≥27 or either CBI subscale ≥75, suggest the Depression Screening."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Screening and self-reflection tools, not diagnoses. Burnout is not a medical diagnosis (ICD-11 lists it as an occupational phenomenon, QD85). PSS-10: the most widely used perceived-stress measure, with good internal consistency (alpha around 0.78-0.91 across studies). It measures how stressful you find your life rather than a disorder, and Cohen notes its predictive validity falls off after 4-8 weeks. Item wording here was checked against the Mind Garden reprint of Cohen's scale (SLU-hosted PDF, 'Copyright © 1994 By Sheldon Cohen'); its scoring text says to reverse items 4, 5, 7 and 8, and PSS-4 = items 2, 4, 5 and 10. Hindi and other Indian-language PSS translations are used in Indian research, but I did not verify an official Hindi PSS-10 validation in this session. CBI: items, response options, scoring (Always 100 ... Never/almost never 0) and non-responder rules are taken directly from the NFA 'CBI first edition' PDF (Borritz & Kristensen, February 2004). Reliability in PUMA (n=1,917 human-service workers): alpha 0.87 for both Personal and Work subscales. Danish population norm, Personal Burnout: mean 32.7 (SD 15.7). 'Working day' wording assumes a job; for students, validated student adaptations exist (e.g. the Copenhagen Burnout Inventory – Student Version, Campos et al. 2011), but these are separate instruments. I did not search specifically for Indian CBI validation studies. Alternative if PSS cannot be licensed: the CBI Personal Burnout subscale alone, combined with PHQ-4, gives a stress/strain picture without licence fees.",
  "questionCount": 23
 },
 "study-habits": {
  "id": "study-habits",
  "title": "Study Habits Review",
  "audience": "student",
  "ageRange": "13–22 (MSLQ normed on college students; Indian validation in school students; a junior-high adaptation exists)",
  "respondent": "self",
  "instrument": "Motivated Strategies for Learning Questionnaire (MSLQ), Learning Strategies section: three resource-management and metacognitive subscales. Time and Study Environment (8 items), Effort Regulation (4 items) and Metacognitive Self-Regulation (12 items). 24 items in all, with original item numbers kept.",
  "citation": "Pintrich, P. R., Smith, D. A. F., Garcia, T., & McKeachie, W. J. (1991). A Manual for the Use of the Motivated Strategies for Learning Questionnaire (MSLQ). Ann Arbor, MI: National Center for Research to Improve Postsecondary Teaching and Learning (NCRIPTAL), University of Michigan. ERIC ED338122. Validity: Pintrich, P. R., Smith, D. A. F., Garcia, T., & McKeachie, W. J. (1993). Reliability and predictive validity of the MSLQ. Educational and Psychological Measurement, 53, 801–813.",
  "sourceUrls": [
   "https://files.eric.ed.gov/fulltext/ED338122.pdf",
   "https://edinstruments.org/instruments/motivated-strategies-learning-questionnaire-mslq",
   "https://learningscientists.org/blog/2024/7/2/digest-174",
   "https://pure.jgu.edu.in/id/eprint/171/",
   "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10704012/"
  ],
  "license": {
   "status": "Freely available and widely described as public domain / open access (manual distributed through ERIC by the University of Michigan NCRIPTAL; listed as 'Open Access: Yes' by the Annenberg EdInstruments database; described as 'in the public domain and free to use with acknowledgement to the authors' by The Learning Scientists). The ERIC manual itself has no copyright restriction or licence statement.",
   "commercialUseAllowed": true,
   "notes": "No restriction on use was found in the primary manual, and the manual says the student feedback form 'may be adapted to the researcher's or instructor's needs'. However, the public-domain status is confirmed only by secondary sources, not by a formal licence from the authors. Pintrich is deceased; the co-authors are D. A. F. Smith, T. Garcia and W. J. McKeachie, at the University of Michigan. Always cite the 1991 manual. If certainty is needed for a paid product, email the University of Michigan School of Education / CRLT. Using selected subscales (rather than all 81 items) is standard practice and is endorsed by the manual: 'The scales are designed to be modular and can be used to fit the needs of the researcher or instructor.'",
   "url": "https://files.eric.ed.gov/fulltext/ED338122.pdf"
  },
  "estimatedMinutes": 7,
  "instructions": "The following questions ask about your learning strategies and study skills for this class. Again, there are no right or wrong answers. Answer the questions about how you study in this class as accurately as possible. Use the same scale to answer the remaining questions. If you think the statement is very true of you, circle 7; if a statement is not at all true of you, circle 1. If the statement is more or less true of you, find the number between 1 and 7 that best describes you. [BrainTest note: before starting, ask the student to pick ONE subject or course they are studying now, for example Maths or Physics, and answer every item about that subject. The MSLQ is designed to be answered about a specific course.]",
  "sections": [
   {
    "id": "main",
    "title": "How you study",
    "instructions": "Think about the one subject or course you chose. 1 = not at all true of me, 7 = very true of me.",
    "options": [
     {
      "label": "1 – Not at all true of me",
      "value": 1
     },
     {
      "label": "2",
      "value": 2
     },
     {
      "label": "3",
      "value": 3
     },
     {
      "label": "4",
      "value": 4
     },
     {
      "label": "5",
      "value": 5
     },
     {
      "label": "6",
      "value": 6
     },
     {
      "label": "7 – Very true of me",
      "value": 7
     }
    ],
    "questions": [
     {
      "id": "mslq_33",
      "text": "During class time I often miss important points because I'm thinking of other things.",
      "reverse": true,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_35",
      "text": "I usually study in a place where I can concentrate on my course work.",
      "reverse": false,
      "factor": "time_study_environment"
     },
     {
      "id": "mslq_36",
      "text": "When reading for this course, I make up questions to help focus my reading.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_37",
      "text": "I often feel so lazy or bored when I study for this class that I quit before I finish what I planned to do.",
      "reverse": true,
      "factor": "effort_regulation"
     },
     {
      "id": "mslq_41",
      "text": "When I become confused about something I'm reading for this class, I go back and try to figure it out.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_43",
      "text": "I make good use of my study time for this course.",
      "reverse": false,
      "factor": "time_study_environment"
     },
     {
      "id": "mslq_44",
      "text": "If course readings are difficult to understand, I change the way I read the material.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_48",
      "text": "I work hard to do well in this class even if I don't like what we are doing.",
      "reverse": false,
      "factor": "effort_regulation"
     },
     {
      "id": "mslq_52",
      "text": "I find it hard to stick to a study schedule.",
      "reverse": true,
      "factor": "time_study_environment"
     },
     {
      "id": "mslq_54",
      "text": "Before I study new course material thoroughly, I often skim it to see how it is organized.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_55",
      "text": "I ask myself questions to make sure I understand the material I have been studying in this class.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_56",
      "text": "I try to change the way I study in order to fit the course requirements and the instructor's teaching style.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_57",
      "text": "I often find that I have been reading for this class but don't know what it was all about.",
      "reverse": true,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_60",
      "text": "When course work is difficult, I either give up or only study the easy parts.",
      "reverse": true,
      "factor": "effort_regulation"
     },
     {
      "id": "mslq_61",
      "text": "I try to think through a topic and decide what I am supposed to learn from it rather than just reading it over when studying.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_65",
      "text": "I have a regular place set aside for studying.",
      "reverse": false,
      "factor": "time_study_environment"
     },
     {
      "id": "mslq_70",
      "text": "I make sure that I keep up with the weekly readings and assignments for this course.",
      "reverse": false,
      "factor": "time_study_environment"
     },
     {
      "id": "mslq_73",
      "text": "I attend this class regularly.",
      "reverse": false,
      "factor": "time_study_environment"
     },
     {
      "id": "mslq_74",
      "text": "Even when course materials are dull and uninteresting, I manage to keep working until I finish.",
      "reverse": false,
      "factor": "effort_regulation"
     },
     {
      "id": "mslq_76",
      "text": "When studying for this course I try to determine which concepts I don't understand well.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_77",
      "text": "I often find that I don't spend very much time on this course because of other activities.",
      "reverse": true,
      "factor": "time_study_environment"
     },
     {
      "id": "mslq_78",
      "text": "When I study for this class, I set goals for myself in order to direct my activities in each study period.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_79",
      "text": "If I get confused taking notes in class, I make sure I sort it out afterwards.",
      "reverse": false,
      "factor": "metacognitive_self_regulation"
     },
     {
      "id": "mslq_80",
      "text": "I rarely find time to review my notes or readings before an exam.",
      "reverse": true,
      "factor": "time_study_environment"
     }
    ]
   }
  ],
  "scoring": {
   "method": "Reverse-score items 33, 37, 52, 57, 60, 77 and 80 (score = 8 − response). Each subscale score is the MEAN of its items (range 1–7). Time and Study Environment = items 35, 43, 52R, 65, 70, 73, 77R, 80R (8 items). Effort Regulation = items 37R, 48, 60R, 74 (4 items). Metacognitive Self-Regulation = items 33R, 36, 41, 44, 54, 55, 56, 57R, 61, 76, 78, 79 (12 items). An optional overall 'Study Habits' score is the mean of all 24 items after reverse-scoring (a BrainTest summary, not an official MSLQ scale). A band applies if the score is at or above its 'min'.",
   "scales": [
    {
     "section": "time_study_environment",
     "range": [
      1,
      7
     ],
     "bands": [
      {
       "min": 1,
       "max": 2.999,
       "label": "Room to grow",
       "meaning": "Planning your study time and having a good study space seem hard right now, and that's really common. Try one small change: a fixed daily study slot, a quiet corner, and your phone in another room."
      },
      {
       "min": 3,
       "max": 4.999,
       "label": "Getting there",
       "meaning": "You manage your time and study space some of the time. A simple weekly timetable and regular revision before tests could make your study time go further."
      },
      {
       "min": 5,
       "max": 7,
       "label": "Strong",
       "meaning": "You plan your time well and have a good place to study. Great habits. Keep them up, especially in the busy weeks before exams."
      }
     ]
    },
    {
     "section": "effort_regulation",
     "range": [
      1,
      7
     ],
     "bands": [
      {
       "min": 1,
       "max": 2.999,
       "label": "Room to grow",
       "meaning": "It can be hard to keep going when work feels boring or tough. You're definitely not alone. Try short, timed work bursts (like 25 minutes) with a small reward after, and start with just the first easy step."
      },
      {
       "min": 3,
       "max": 4.999,
       "label": "Getting there",
       "meaning": "You often push through, but boring or difficult work sometimes wins. Breaking big tasks into smaller pieces and studying with a friend can help you keep going."
      },
      {
       "min": 5,
       "max": 7,
       "label": "Strong",
       "meaning": "You keep working even when things are dull or difficult. That kind of persistence is one of the strongest predictors of good results."
      }
     ]
    },
    {
     "section": "metacognitive_self_regulation",
     "range": [
      1,
      7
     ],
     "bands": [
      {
       "min": 1,
       "max": 2.999,
       "label": "Room to grow",
       "meaning": "Checking your own understanding while you study is a skill you can build. Try asking yourself 'What's the main idea here?' after each page, and testing yourself instead of just re-reading."
      },
      {
       "min": 3,
       "max": 4.999,
       "label": "Getting there",
       "meaning": "You sometimes plan and check your learning. Setting a small goal for each study session and noting what you don't yet understand will make your studying sharper."
      },
      {
       "min": 5,
       "max": 7,
       "label": "Strong",
       "meaning": "You plan, monitor and adjust how you learn. These are skills of a self-directed learner. Keep using them."
      }
     ]
    },
    {
     "section": "overall",
     "range": [
      1,
      7
     ],
     "bands": [
      {
       "min": 1,
       "max": 2.999,
       "label": "Building your study toolkit",
       "meaning": "Your study habits have lots of room to grow, and the good news is that these are skills anyone can learn. Pick one tip from the areas above and try it for two weeks. A teacher or study-skills mentor can also help."
      },
      {
       "min": 3,
       "max": 4.999,
       "label": "Solid foundation",
       "meaning": "You have a good base to build on. Focus on your lowest area above for the biggest improvement."
      },
      {
       "min": 5,
       "max": 7,
       "label": "Strong study habits",
       "meaning": "You use effective, well-organised study habits. Keep it up, and share what works with friends."
      }
     ]
    }
   ],
   "clinicalCutoff": "Not applicable. The MSLQ is an educational self-assessment, not a clinical measure, and it has no official cut-offs or norms. The manual says 'We have not provided norms for the MSLQ' and recommends local norms. Reference means from the 1991 college sample (N = 380, 7-point scale): Time and Study Environment M = 4.87 (SD 1.05, α = .76); Effort Regulation M = 5.25 (SD 1.10, α = .69); Metacognitive Self-Regulation M = 4.54 (SD 0.90, α = .79).",
   "notes": "The 3-band labels (below 3 / 3 to under 5 / 5 and above) are BrainTest's own descriptive divisions of the 1–7 scale (roughly 'not true', 'more or less true', 'true of me'), not official MSLQ norms. Replace them with local percentiles once data are collected. Item wording comes from the administered questionnaire form reproduced in the manual (Part B, Learning Strategies). The scale-description pages give slightly different wording for a few items: item 44 says 'course materials' instead of 'course readings', item 56 omits 'the', item 70 omits 'that', and item 73 says 'I attend class regularly'. The questionnaire-form wording is used here. Items refer to 'this course / this class', so ask students to answer about one chosen subject. For Indian school students, it may help to explain that 'course' means 'subject', but do not reword the items."
  },
  "safety": null,
  "componentsOf": null,
  "clinicalNotes": "Educational self-assessment, not a diagnosis or a mental-health screen. The MSLQ (81 items, 15 scales) is one of the most widely used measures of self-regulated learning. These three subscales were chosen because they directly reflect study habits: time management and study environment, persistence (effort regulation), and planning, monitoring and regulating one's learning (metacognition). Psychometrics (Pintrich et al., 1991/1993): α = .76, .69 and .79 respectively. Subscale correlations with final course grade: r = .28, .32 and .30. Confirmatory factor analyses show reasonable but not perfect fit, and later work (for example the 2024 PMC10704012 review) questions the full factor structure, so report subscales descriptively. Effort Regulation has only 4 items and modest reliability. INDIA: Maun, D., Shukla, R., & Chand, V. S. (2020). Validating Motivated Strategies for Learning Questionnaire and invariance test across gender and caste groups in India. Cogent Education, 7(1). This study validated seven MSLQ subscales in 6,423 Indian school students and found strong measurement invariance across gender and caste. Which seven subscales were included was not checked. Gopalan et al. (2018) used a modified 22-item MSLQ with Chennai college students. For younger adolescents, Pintrich & De Groot (1990) adapted a 44-item MSLQ for 7th graders. Minors: low-risk educational content, but get parental or guardian consent for users under 18 who give identifiable data (DPDP Act 2023).",
  "questionCount": 24
 },
 "wellbeing": {
  "id": "wellbeing",
  "title": "Complete Wellbeing Check",
  "audience": "adult",
  "instrument": "Composite session: PHQ-9 + GAD-7 + PSS-10 & CBI + sleep instrument (full), with a PHQ-4-based stepped short version",
  "citation": "Components: see depression, anxiety, stress-burnout and sleep files. Brief opener: Kroenke K, Spitzer RL, Williams JBW, Löwe B. An ultra-brief screening scale for anxiety and depression: the PHQ-4. Psychosomatics. 2009;50(6):613-621. doi:10.1176/appi.psy.50.6.613. Löwe B, Wahl I, Rose M, et al. A 4-item measure of depression and anxiety: validation and standardization of the Patient Health Questionnaire-4 (PHQ-4) in the general population. J Affect Disord. 2010;122(1-2):86-95.",
  "sourceUrls": [
   "https://www.phqscreeners.com/select-screener",
   "https://pubmed.ncbi.nlm.nih.gov/19996233/",
   "https://pubmed.ncbi.nlm.nih.gov/19616305/"
  ],
  "license": {
   "status": "Same as the components. PHQ-9, GAD-7 and PHQ-4: free, no permission required (Pfizer). CBI: free (confirm with NFA). PSS-10: commercial use needs permission (Cohen/ASA via MAPI ePROVIDE). Sleep: see the sleep file.",
   "commercialUseAllowed": false,
   "notes": "The full composite inherits the PSS-10 restriction, so it is false until a PSS licence is obtained or PSS-10 is swapped out. The recommended short composite (PHQ-4 + CBI Personal Burnout, plus the sleep brief if that is free) can be used commercially once the sleep instrument's licence is confirmed: PHQ-4 is distributed on phqscreeners.com under the same 'no permission required to reproduce, translate, display or distribute' terms as PHQ-9/GAD-7.",
   "url": "https://www.phqscreeners.com/select-screener"
  },
  "estimatedMinutes": 15,
  "instructions": "This check brings together several short questionnaires about mood, anxiety, stress, burnout and sleep. Answer each one about the time period it asks about. You will get a separate result for each area.",
  "sections": [],
  "componentsOf": [
   "depression",
   "anxiety",
   "stress-burnout",
   "sleep"
  ],
  "compositeDesign": {
   "full": {
    "order": [
     "depression",
     "anxiety",
     "stress-burnout",
     "sleep"
    ],
    "itemCountApprox": "PHQ-9 (9 + 1 difficulty) + GAD-7 (7 + 1 difficulty) + PSS-10 (10) + CBI Personal (6) + CBI Work (7, optional) + sleep instrument (see sleep file). About 41 items plus sleep, roughly 12-18 minutes.",
    "rules": [
     "Ask each instrument's own time-frame stem (2 weeks for PHQ-9/GAD-7, last month for PSS-10, no fixed window for CBI, the sleep instrument's own window).",
     "Ask the PHQ/GAD 'difficulty' question once at the end of the PHQ-9 + GAD-7 block rather than twice, or leave it out. It is unscored.",
     "Score and report each instrument separately using its own file's bands. Do NOT add the scores into one 'wellbeing score'; no validated combined metric exists.",
     "The safety rule from 'depression' (phq9_9 > 0) applies and must interrupt or flag the session immediately.",
     "PHQ-9 item 3 (sleep) overlaps with the sleep instrument. Keep both, because each is part of its own validated total."
    ]
   },
   "recommendedShort": {
    "name": "Wellbeing Quick Check (stepped)",
    "estimatedMinutes": 4,
    "steps": [
     {
      "step": 1,
      "label": "PHQ-4 opener",
      "itemIds": [
       "phq9_1",
       "phq9_2",
       "gad7_1",
       "gad7_2"
      ],
      "note": "PHQ-4 = PHQ-2 (PHQ-9 items 1-2) + GAD-2 (GAD-7 items 1-2) with the same 'Over the last 2 weeks' stem and 0-3 options. Reuse the item ids from depression/anxiety so answers carry forward."
     },
     {
      "step": 2,
      "label": "Stress/burnout brief",
      "itemIds": [
       "cbi_p1",
       "cbi_p2",
       "cbi_p3",
       "cbi_p4",
       "cbi_p5",
       "cbi_p6"
      ],
      "note": "CBI Personal Burnout (6 items, free). Used instead of PSS-10 to avoid the PSS commercial licence. If a PSS licence is held, PSS-4 (pss_2, pss_4, pss_5, pss_10; range 0-16, items 4 and 5 reversed) is an alternative."
     },
     {
      "step": 3,
      "label": "Sleep brief",
      "itemIds": "see sleep.json (use its short form, if any)",
      "note": "Defined by the sleep research file."
     },
     {
      "step": 4,
      "label": "Automatic step-up",
      "note": "If PHQ-2 (phq9_1 + phq9_2) ≥3, continue straight into the remaining PHQ-9 items (phq9_3 to phq9_9). This brings in the item-9 self-harm safety question. If GAD-2 (gad7_1 + gad7_2) ≥3, continue into the remaining GAD-7 items (gad7_3 to gad7_7). Otherwise offer the full tests as optional."
     }
    ],
    "phq4Scoring": {
     "range": [
      0,
      12
     ],
     "bands": [
      {
       "min": 0,
       "max": 2,
       "label": "Normal",
       "meaning": "Your answers suggest few signs of low mood or anxiety over the past two weeks."
      },
      {
       "min": 3,
       "max": 5,
       "label": "Mild",
       "meaning": "Some symptoms of low mood or anxiety. Keep an eye on how you feel, and consider taking the full Depression or Anxiety check."
      },
      {
       "min": 6,
       "max": 8,
       "label": "Moderate",
       "meaning": "A noticeable level of distress. We suggest completing the full Depression and Anxiety checks and considering a conversation with a doctor or counsellor."
      },
      {
       "min": 9,
       "max": 12,
       "label": "Severe",
       "meaning": "A high level of distress. Please complete the full checks and arrange to speak with a doctor or mental health professional soon."
      }
     ],
     "subscales": "PHQ-2 (depression) ≥3 and GAD-2 (anxiety) ≥3 are the validated positive-screen cut-offs that trigger the step-up."
    },
    "justification": "A full composite is about 40+ items and 15 minutes, which raises drop-out on a consumer site. PHQ-4 is a validated 4-item screen made of the core items of PHQ-9 and GAD-7. It was validated in primary care (n=2,149; Kroenke 2009) and in the German general population (n=5,030; Löwe 2010), and it is free. PHQ-2 ≥3 has about 83% sensitivity and 92% specificity for major depression (Kroenke 2003), and GAD-2 ≥3 about 86% sensitivity and 83% specificity for GAD (Kroenke 2007). Stepping up into the full PHQ-9/GAD-7 when positive keeps the validated severity scores, and ensures anyone with depressive symptoms is asked item 9 (self-harm). PHQ-4 alone does NOT include item 9, so the step-up rule is essential for safety. CBI Personal Burnout covers stress/exhaustion without the PSS licence cost."
   }
  },
  "scoring": {
   "method": "No combined score. Score each component instrument with its own rules (see component files) and present a dashboard of separate results. For the short version, score PHQ-4 (sum of 4 items, 0-12) and its subscales PHQ-2 and GAD-2 (each 0-6), then the full PHQ-9/GAD-7 if stepped up, CBI Personal Burnout (mean 0-100) and the sleep brief.",
   "scales": [],
   "clinicalCutoff": "Per component: PHQ-9 ≥10, GAD-7 ≥10, PHQ-2 ≥3, GAD-2 ≥3, CBI ≥50 (high burnout), PSS has no official cut-off, sleep per sleep file.",
   "notes": "If several domains are elevated (for example PHQ-9 ≥10 and GAD-7 ≥10), give one combined, calm recommendation to see a professional rather than several alarming messages."
  },
  "safety": {
   "itemIds": [
    "phq9_9"
   ],
   "rule": "any value > 0. Inherited from 'depression'; applies whenever phq9_9 is asked (full composite, or short composite after step-up).",
   "message": "You mentioned having thoughts that you would be better off dead or of hurting yourself. Thank you for being honest. Support is available right now. You can call Tele-MANAS free, 24x7, on 14416 or 1-800-891-4416 to talk to a trained counsellor in your language. If you are in immediate danger, call 112 or go to the nearest hospital emergency department.",
   "resources": [
    {
     "name": "Tele-MANAS (Govt. of India, toll-free, 24x7)",
     "contact": "14416",
     "url": "https://telemanas.mohfw.gov.in/"
    },
    {
     "name": "Tele-MANAS (alternate toll-free number)",
     "contact": "1-800-891-4416",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2022057&reg=48&lang=2"
    },
    {
     "name": "Emergency (ERSS India)",
     "contact": "112",
     "url": "https://112.gov.in/"
    }
   ]
  },
  "clinicalNotes": "A composite of screening tools, not a diagnostic assessment. Each component's validation applies only to that component; the combination has not been validated as a single measure, so results must be shown per domain. PHQ-4 validation: Kroenke 2009 (primary care, n=2,149) and Löwe 2010 (general population, n=5,030), where it showed a two-factor (depression/anxiety) structure. Indian data on PHQ-9/GAD-7 come from De Man et al. 2021 (Kerala, Frontiers in Psychology). I did not find a PHQ-4-specific Indian validation in this session. The PHQ-2/GAD-2 accuracy figures quoted are from the original US primary-care studies (Kroenke 2003 Med Care; Kroenke 2007 Ann Intern Med) and were recalled rather than re-fetched in this session.",
  "questionCount": 0
 }
};
