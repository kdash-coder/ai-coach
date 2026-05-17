export type Sector = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  outcomes: string[];
  faqs: { question: string; answer: string }[];
};

export const sectors: Sector[] = [
  {
    slug: 'ai-strategy',
    name: 'AI Strategy Consulting',
    shortName: 'AI Strategy',
    tagline: 'Turn AI from a buzzword into a board-level roadmap with measurable ROI.',
    description:
      'We work with leadership teams to identify the highest-impact AI opportunities in your business, build a 12-month roadmap, and put governance in place so AI delivers results without creating risk.',
    outcomes: [
      'A prioritised list of AI opportunities scored by ROI and effort',
      'A 12-month rollout roadmap aligned with your commercial goals',
      'Internal AI policy, governance and risk framework',
      'Buy-in and AI literacy across your leadership team',
    ],
    faqs: [
      {
        question: 'How long does an AI strategy engagement take?',
        answer:
          'Most strategy engagements run 4 to 8 weeks. We start with a discovery sprint, then deliver a prioritised roadmap and governance framework you can act on immediately.',
      },
      {
        question: 'Do we need data scientists in-house first?',
        answer:
          'No. Most of the highest-ROI AI work for SMEs uses off-the-shelf models. We design strategies around the team and tools you already have.',
      },
    ],
  },
  {
    slug: 'ai-automation',
    name: 'AI Workflow Automation',
    shortName: 'AI Automation',
    tagline: 'Automate the work nobody wants to do, with AI built into your existing tools.',
    description:
      'We design and ship AI automations that handle the repetitive tasks draining your team, from inbox triage and proposal drafting to internal knowledge search and reporting.',
    outcomes: [
      'Automations integrated with the tools you already use (Slack, HubSpot, Notion, Google Workspace, M365)',
      'Time-back metrics so you can prove ROI to the board',
      'Internal docs and SOPs so your team owns the system after handover',
    ],
    faqs: [
      {
        question: 'What kind of tasks can be automated with AI?',
        answer:
          'Anything language-heavy and rule-light: drafting responses, summarising calls, categorising tickets, extracting data from documents, generating reports, and answering internal questions.',
      },
    ],
  },
  {
    slug: 'ai-training',
    name: 'AI Training & Workshops',
    shortName: 'AI Training',
    tagline: 'Practical AI training that turns every team member into a 10x operator.',
    description:
      'On-site and remote AI training sessions tailored to your team, from the basics of prompting to building custom GPTs and shipping automations. We focus on what your team actually does, not generic theory.',
    outcomes: [
      'A team fluent in prompting, custom GPTs and AI tooling',
      'Role-specific playbooks for sales, ops, marketing and support',
      'Internal AI champions identified and equipped to lead',
    ],
    faqs: [
      {
        question: 'Is the training generic or specific to our business?',
        answer:
          'Every workshop is tailored. We interview your team in advance and build examples using your actual workflows, documents and tools.',
      },
    ],
  },
  {
    slug: 'custom-ai-solutions',
    name: 'Custom AI Solutions',
    shortName: 'Custom AI',
    tagline: 'Bespoke AI agents, chatbots and tools built around your business.',
    description:
      'When off-the-shelf tools fall short, we design and build custom AI solutions, internal chatbots trained on your knowledge base, AI agents that handle full workflows, and integrations that plug into your existing stack.',
    outcomes: [
      'Custom AI tools that solve a specific business problem',
      'Production-ready software, not prototypes',
      'Documentation and a hand-over plan so your team can maintain it',
    ],
    faqs: [
      {
        question: 'Do you build the software, or just advise?',
        answer:
          'Both. We can deliver a fully-built solution end-to-end, or work alongside your existing engineering team as technical advisors.',
      },
    ],
  },
];

export const getSectorBySlug = (slug: string): Sector | undefined =>
  sectors.find((s) => s.slug === slug);
