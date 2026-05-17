export const SITE_URL = 'https://example.com';

export const SITE = {
  name: 'AI Coach',
  legalName: 'AI Coach',
  tagline: 'AI Consultant helping UK businesses adopt AI safely and profitably',
  description:
    'AI Coach is the AI consultancy founded by Kasra Dash, helping UK businesses adopt artificial intelligence. We run AI strategy workshops, automate internal company SOPs, deliver remote and in-person team training, and ship custom AI solutions for SMEs across the UK.',
  email: 'hello@example.com',
  phone: '+44 0000 000 000',
  address: {
    streetAddress: 'TBC',
    addressLocality: 'Manchester',
    addressRegion: 'Greater Manchester',
    postalCode: 'TBC',
    addressCountry: 'GB',
  },
  social: {
    twitter: 'https://twitter.com/kasradashx',
    linkedin: 'https://www.linkedin.com/in/kasradash/',
  },
  defaultOgImage: '/og-default.png',
} as const;

export const FOUNDER = {
  name: 'Kasra Dash',
  givenName: 'Kasra',
  familyName: 'Dash',
  role: 'Founder and lead AI consultant',
  shortBio:
    'Kasra Dash is the founder of AI Coach and a UK AI consultant who helps SMEs and growing businesses adopt AI. Kasra publishes regular videos on YouTube about automating marketing, building internal AI systems, and how businesses can use AI to outpace their competitors.',
  longBio:
    'Kasra Dash is a UK based AI consultant with a background in SEO, growth and operations. He works directly with founders, operations leaders and marketing teams to plan AI strategies, automate the workflows that drain teams of time, and train staff on the AI tools that actually move the needle. Kasra runs a YouTube channel covering AI automation for marketing, internal company SOPs, and the AI workflows competitors are using to get ahead.',
  expertise: [
    'AI strategy and roadmap for SMEs',
    'Internal SOP automation with AI',
    'AI marketing automation',
    'Team training over Zoom, Google Meet and in person',
    'Competitor AI benchmarking and intelligence',
  ],
  channels: {
    youtube: 'https://www.youtube.com/@kasradash',
    twitter: 'https://twitter.com/kasradashx',
    linkedin: 'https://www.linkedin.com/in/kasradash/',
    website: 'https://kasradash.com',
  },
} as const;
