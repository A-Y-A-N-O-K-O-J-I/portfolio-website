// Everything you'd want to change on the site lives in this file.

// Used for SEO: page title, meta tags, sitemap and structured data.
// If you move to a new domain, change `url` here AND in index.html.
export const seo = {
  url: 'https://k-ayanokoji.zone.id/',
  handles: ['ayanokojix', 'ayanokojix-1', 'A-Y-A-N-O-K-O-J-I'],
  otherProfiles: ['https://github.com/A-Y-A-N-O-K-O-J-I'],
};

export const profile = {
  name: 'Ayanokoji',
  role: 'Full-Stack & AI Engineer',
  tagline: 'I solve problems and use code to make life easier and less repetitive for other people.',
  email: 'ayanokojix2306@gmail.com',
  github: 'https://github.com/ayanokojix-1',
  available: true, // shows the green "open to work" pill in the hero
  stats: [
    { value: '4+', label: 'Years coding' },
    { value: '1+', label: 'Years in AI' },
    { value: '70+', label: 'Bot commands shipped' },
  ],
};

// ---------------------------------------------------------------------------
// ADDING A PROJECT
// Copy one block into `projects`, edit it, save. That's it.
//
//   {
//     title: 'My App',
//     kind: 'Side project',            // label shown on the card (free text)
//     description: 'One or two sentences on what it does and who it is for.',
//     tech: ['React', 'Node.js'],
//     links: [
//       { label: 'Live', url: 'https://...' },
//       { label: 'Code', url: 'https://github.com/...' },
//     ],
//     accent: 'violet',                // violet | pink | cyan | amber | emerald
//     status: 'live',                  // live (green badge) | open-source | wip ("In progress" badge)
//   },
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: 'OyoCam Education Platform',
    kind: 'Paid client project',
    description:
      'Learning platform for Oduduwa College with WebRTC video classes, a PDF library, and teacher and student analytics.',
    tech: ['React', 'Node.js', 'Express', 'WebRTC', 'SQL'],
    links: [{ label: 'Live', url: 'https://oyocam.org' }],
    accent: 'amber',
    status: 'live',
  },
  {
    title: 'Sophia-MD',
    kind: 'Open source',
    description:
      'WhatsApp bot with 70+ commands: media conversion, sticker tools, status downloads and auto-updates. Not actively maintained, but the code is open.',
    tech: ['JavaScript', 'Node.js', 'Baileys', 'SQL'],
    links: [{ label: 'Code', url: 'https://github.com/A-Y-A-N-O-K-O-J-I/sophia-md' }],
    accent: 'emerald',
    status: 'open-source',
  },
  {
    title: 'Subwheel AI',
    kind: 'Open source',
    description: 'Fast, private data bundle sales for MTN, Glo, Airtel & 9mobile. Chat to buy.',
    tech: ['Node.js', 'Telegram API', "Gemini"],
    links: [{ label: 'Code', url: 'https://github.com/ayanokojix-1/subwheel-ai' }],
    accent: 'cyan',
    status: 'open-source',
  },
  {
    title: 'K-Anime Open',
    kind: 'Open source',
    description: 'Scraper and API for bulk anime downloading. Grab a whole season in one go instead of clicking through every episode.',
    tech: ['Python', 'FastAPI', 'SQL'],
    links: [{ label: 'Code', url: 'https://github.com/ayanokojix-1/KANIME-OPEN' }],
    accent: 'pink',
    status: 'open-source',
  },
  {
    title: 'Zoom Automation Assistant',
    kind: 'Upcoming',
    description: 'Create and manage Zoom meetings from a single message, no more clicking through the Zoom dashboard. Currently in the works.',
    tech: [],
    links: [],
    accent: 'violet',
    status: 'wip', // change to 'live' or 'open-source' and add links when it ships
  },
  // Add new projects here.
];

// Projects that are done or no longer running. Shown small, clearly labelled.
export const archive = [
  {
    title: 'Sophia Assistant',
    description: 'AI WhatsApp assistant with auth, a web dashboard and subscription tiers (Gemini, Flask, React).',
  },
  {
    title: 'K-Anime',
    description: 'The original hosted K-Anime site. Retired; the code lives on as K-Anime Open.',
  },
  {
    title: 'JS Obfuscation Tool',
    description: 'JavaScript obfuscator with multiple protection layers.',
  },
  {
    title: 'NEPA Light Predictor',
    description: 'Experimental ML model for electricity availability patterns in Nigeria.',
  },
];

// The big cards at the top of the skills section.
export const coreSkills = [
  {
    name: 'JavaScript',
    accent: 'amber',
    text: 'My main language. Bots, APIs, full web apps, on the server and in the browser.',
    uses: ['Node.js', 'Express', 'React', 'Baileys', 'Axios'],
  },
  {
    name: 'Python',
    accent: 'cyan',
    text: 'Scrapers, APIs and AI work. Where I go for data, automation and machine learning.',
    uses: ['FastAPI', 'Flask', 'BeautifulSoup', 'httpx', 'Hugging Face'],
  },
  {
    name: 'SQL',
    accent: 'emerald',
    text: 'How I talk to databases: schema design, queries and keeping app data in order.',
    uses: ['SQLite', 'PostgreSQL', 'Queries', 'Schema design', 'Data modelling'],
  },
];

// Denser grid below the big cards.
export const skills = [
  {
    group: 'Frontend',
    accent: 'cyan',
    items: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'HTML/CSS'],
  },
  {
    group: 'Backend',
    accent: 'emerald',
    items: [
      'Authentication', 'Node.js', 'Express', 'FastAPI', 'Flask',
      'REST APIs', 'WebSockets', 'WebRTC',
    ],
  },
  {
    group: 'Bots & automation',
    accent: 'amber',
    items: [
      'WhatsApp (Baileys)', 'Telegram API', 'Payment & data-bundle APIs',
      'Web scraping', 'Scheduled jobs',
    ],
  },
  {
    group: 'AI / ML',
    accent: 'violet',
    items: [
      'LLM integration', 'Prompt design', 'Gemini API', 'OpenAI API',
      'Claude API', 'Transformers', 'Hugging Face',
    ],
  },
  {
    group: 'Data',
    accent: 'pink',
    items: ['SQLite', 'PostgreSQL', 'Data modelling', 'Data cleaning'],
  },
  {
    group: 'Deploy & tools',
    accent: 'amber',
    items: [
      'Git & GitHub', 'Linux', 'Railway', 'Render', 'Heroku',
      'HF Spaces', 'npm', 'cPanel', 'VPS',
    ],
  },
];

// Shown as a "learning next" strip. Leave empty to hide it.
export const learning = ['Go', 'Flutter'];

export const about = {
  paragraphs: [
    'I believe code should take the repetitive, tedious parts of life off people\'s hands. If someone is doing the same task over and over, that\'s a problem worth solving.',
    'That\'s how I got started: a WhatsApp bot that grew to 70+ commands, then tools for buying data bundles by chatting, and bulk downloaders that save hours of clicking. Each one began as an annoyance I wanted gone.',
    'I come at problems from an arts and philosophy angle, which makes me ask "why" before "how". These days I\'m going deeper into AI, because it\'s the biggest lever yet for making life less repetitive.',
  ],
  highlights: [
    { title: 'Problem first', text: 'I start from the annoying, repetitive task, then pick the tools.' },
    { title: 'Full-stack', text: 'Frontend, backend, bots and deployment, end to end.' },
    { title: 'AI as a lever', text: 'Using LLM APIs to automate work that used to need a human.' },
  ],
};

// Tailwind needs full class names to exist in source, so accents are mapped here.
export const accents = {
  violet: { text: 'text-violet-300', grad: 'from-violet-500 to-fuchsia-500', glow: 'hover:shadow-violet-500/20', ring: 'hover:border-violet-400/50' },
  pink: { text: 'text-pink-300', grad: 'from-pink-500 to-rose-500', glow: 'hover:shadow-pink-500/20', ring: 'hover:border-pink-400/50' },
  cyan: { text: 'text-cyan-300', grad: 'from-cyan-400 to-sky-500', glow: 'hover:shadow-cyan-500/20', ring: 'hover:border-cyan-400/50' },
  amber: { text: 'text-amber-300', grad: 'from-amber-400 to-orange-500', glow: 'hover:shadow-amber-500/20', ring: 'hover:border-amber-400/50' },
  emerald: { text: 'text-emerald-300', grad: 'from-emerald-400 to-teal-500', glow: 'hover:shadow-emerald-500/20', ring: 'hover:border-emerald-400/50' },
};
