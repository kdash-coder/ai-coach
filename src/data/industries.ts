export type IndustryFaq = { question: string; answer: string };

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  audience: string;
  tagline: string;
  intro: string;
  useCases: string[];
  challenges: string[];
  faqs: IndustryFaq[];
  related: string[];
  group: IndustryGroup;
};

export type IndustryGroup =
  | 'By business size'
  | 'Professional services'
  | 'Financial services'
  | 'Healthcare & life sciences'
  | 'Industrial & operations'
  | 'Consumer & retail'
  | 'Public & social sector'
  | 'Technology & media'
  | 'Property & built environment';

export const industries: Industry[] = [
  // ── By business size ─────────────────────────────────────────────
  {
    slug: 'small-businesses',
    name: 'AI Consulting for Small Businesses',
    shortName: 'Small Businesses',
    audience: 'small business owners',
    tagline: 'Practical AI for businesses under 50 staff, no jargon, no enterprise overhead.',
    intro:
      'Small businesses are the highest-ROI customers for AI. Every hour of admin removed is a meaningful percentage of capacity back. We pick the right off-the-shelf tools, automate the busywork, and train your team to run with it.',
    useCases: [
      'Auto-drafted client emails, quotes and proposals',
      'AI-powered customer support that handles the top 50% of repeat enquiries',
      'Automated lead capture, qualification and CRM updates',
      'Bookkeeping, invoicing and admin automation',
      'AI-generated marketing content tied to your brand voice',
    ],
    challenges: [
      'No in-house technical team to evaluate AI tools',
      'Wasted spend on subscriptions nobody adopts',
      'Owner-managers stuck doing low-leverage admin',
    ],
    faqs: [
      {
        question: 'How small is too small for AI consulting?',
        answer:
          'If you have a team and an email inbox, AI can help. Our smallest clients are 2-3 person businesses. The work focuses on practical tools, not custom builds.',
      },
      {
        question: 'How much does an AI project typically cost for a small business?',
        answer:
          'Most small-business engagements run between £2,500 and £15,000 depending on scope. We always start with a quick-win project that pays for itself within 90 days.',
      },
    ],
    related: ['smes', 'startups', 'professional-services', 'ecommerce'],
    group: 'By business size',
  },
  {
    slug: 'startups',
    name: 'AI Consulting for Startups',
    shortName: 'Startups',
    audience: 'startup founders and operators',
    tagline: 'Move faster with smaller teams. AI as a force multiplier for lean startups.',
    intro:
      'Startups live and die on speed. AI is the single biggest lever for shipping more with fewer hires, whether that is automating ops, supercharging your founders, or building AI-native product features.',
    useCases: [
      'Founder-operator productivity stack: AI for sales, ops, hiring and finance',
      'AI-native product features that ship faster than a competitor can hire for',
      'GTM automation: lead enrichment, sequenced outreach, deal-room follow-ups',
      'Investor reporting and board pack automation',
      'Customer success automation that scales beyond the founder',
    ],
    challenges: [
      'Founders becoming the bottleneck on ops, hiring and customer comms',
      'No time to evaluate the AI tool landscape',
      'Spending engineering time on the wrong AI bets',
    ],
    faqs: [
      {
        question: 'Should we hire an AI engineer or work with a consultant?',
        answer:
          'In the early stages, consultant. A few weeks of expert input will save you from hiring the wrong profile, picking the wrong stack and burning runway. Once your AI surface area is meaningful, hire in.',
      },
      {
        question: 'Do you take equity?',
        answer:
          'On a case-by-case basis we can structure part of the fee as equity or warrant cover for venture-backed startups. Most engagements remain cash.',
      },
    ],
    related: ['saas-companies', 'tech-companies', 'small-businesses', 'smes'],
    group: 'By business size',
  },
  {
    slug: 'enterprise',
    name: 'AI Consulting for Enterprise',
    shortName: 'Enterprise',
    audience: 'enterprise leadership teams',
    tagline: 'Enterprise AI without the procurement theatre. Governance, scale and measurable ROI.',
    intro:
      'Enterprise AI projects fail for predictable reasons: weak business cases, no governance, and proofs-of-concept that never ship. We help large organisations get AI from pilot to production with the right controls.',
    useCases: [
      'AI strategy and operating model for the whole organisation',
      'Use-case prioritisation across business units with ROI scoring',
      'AI governance, risk and compliance frameworks (ISO 42001, EU AI Act ready)',
      'Vendor evaluation and procurement support',
      'Internal AI Centre of Excellence design and rollout',
    ],
    challenges: [
      'Pilots that never make it to production',
      'Shadow AI usage with no governance',
      'Vendor sprawl and overlapping AI subscriptions',
    ],
    faqs: [
      {
        question: 'Do you work on enterprise engagements alongside our existing consultancy?',
        answer:
          'Yes. We frequently augment Big Four and tier-one consultancies on the practical, hands-on AI delivery work.',
      },
      {
        question: 'How do you handle data security and IP?',
        answer:
          'We sign mutual NDAs, work within your security tooling and infrastructure, and design solutions that keep data inside your tenancy. No external vendor lock-in.',
      },
    ],
    related: ['private-equity', 'banking', 'professional-services', 'tech-companies'],
    group: 'By business size',
  },
  {
    slug: 'smes',
    name: 'AI Consulting for SMEs',
    shortName: 'SMEs',
    audience: 'SME leadership teams',
    tagline: 'AI consultancy built around UK SMEs. 10 to 250 staff, owner-managed or PE-backed.',
    intro:
      'SMEs sit in the sweet spot for AI: large enough to have real workflows worth automating, small enough to move quickly. We help leadership teams pick the highest-ROI AI projects and ship them in weeks, not quarters.',
    useCases: [
      'Cross-functional AI roadmap aligned with your commercial goals',
      'Workflow automation across sales, ops, finance and customer service',
      'Internal knowledge AI: a chatbot trained on your documents, SOPs and CRM',
      'Custom AI tools for the bottleneck that is slowing the business down',
      'Team-wide AI training and adoption playbooks',
    ],
    challenges: [
      'No CTO or in-house AI expertise to lead the work',
      'Stuck between off-the-shelf tools and full custom builds',
      'Team resistance or fear around AI adoption',
    ],
    faqs: [
      {
        question: 'How is this different from your AI Strategy service?',
        answer:
          'Our AI Strategy service is the methodology. This page is for SME leaders looking for an end-to-end engagement: strategy plus delivery, sized for SMEs.',
      },
      {
        question: 'What size of SME do you usually work with?',
        answer:
          '£2m to £100m turnover, 10 to 250 staff. Both owner-managed and PE-backed SMEs across the UK.',
      },
    ],
    related: ['small-businesses', 'enterprise', 'professional-services', 'manufacturing'],
    group: 'By business size',
  },

  // ── Professional services ────────────────────────────────────────
  {
    slug: 'law-firms',
    name: 'AI Consulting for Law Firms',
    shortName: 'Law Firms',
    audience: 'partners and operations leaders at law firms',
    tagline: 'AI that actually fits how law firms work, confidentially, billably and defensibly.',
    intro:
      'Law firms are quietly becoming one of the biggest beneficiaries of AI. From contract review to due diligence and drafting, the right AI stack can compress hours of associate work into minutes, without compromising privilege or accuracy.',
    useCases: [
      'AI-assisted contract review, redlining and clause libraries',
      'Due diligence automation for transactional and M&A teams',
      'First-draft generation for letters, memos and pleadings',
      'Matter intake, triage and conflicts-check automation',
      'Knowledge management: search your firm’s precedents in natural language',
    ],
    challenges: [
      'Client confidentiality, privilege and data residency requirements',
      'Adoption resistance from senior fee-earners',
      'Working out how AI affects the billable hour model',
    ],
    faqs: [
      {
        question: 'Will AI replace junior lawyers?',
        answer:
          'No, but it will change what they do. The firms winning right now are training juniors to use AI as a force multiplier and shifting the work mix toward judgment, advisory and client work.',
      },
      {
        question: 'Can we keep client data inside our environment?',
        answer:
          'Yes. We design AI solutions that run inside your existing Microsoft, iManage or NetDocuments environment with no third-party data sharing.',
      },
    ],
    related: ['accounting-firms', 'professional-services', 'private-equity', 'finance'],
    group: 'Professional services',
  },
  {
    slug: 'accounting-firms',
    name: 'AI Consulting for Accounting Firms',
    shortName: 'Accounting Firms',
    audience: 'partners and managers at accounting firms',
    tagline: 'AI for accounting firms, from audit automation to client communications.',
    intro:
      'Accounting firms are facing a perfect storm: tighter margins, recruitment pressure and rising client expectations. AI changes the unit economics of the firm by automating the highest-volume, lowest-judgment work and freeing partners to do real advisory.',
    useCases: [
      'Bookkeeping and reconciliation automation across client portfolios',
      'AI-powered audit sampling, review and documentation',
      'Tax return preparation assistance and review',
      'Client communications: drafting, summaries and quarterly updates',
      'Internal knowledge AI trained on firm methodologies and technical guidance',
    ],
    challenges: [
      'Recruiting and retaining qualified staff',
      'Tight margins on compliance work',
      'Moving the firm up the value chain to advisory',
    ],
    faqs: [
      {
        question: 'Is AI accurate enough for accounting work?',
        answer:
          'For pattern-matching and first-draft tasks, yes. Review and judgment stays with the qualified accountant. The combination of AI-first-draft plus expert review is faster AND more accurate than either alone.',
      },
    ],
    related: ['law-firms', 'finance', 'professional-services', 'banking'],
    group: 'Professional services',
  },
  {
    slug: 'architecture-firms',
    name: 'AI Consulting for Architecture Firms',
    shortName: 'Architecture Firms',
    audience: 'partners and design leads at architecture practices',
    tagline: 'AI that supports architectural design without replacing the designer.',
    intro:
      'Architecture firms are early adopters of generative AI for image-based exploration but slow to adopt AI for the operational, documentation and project management work that consumes the studio’s hours.',
    useCases: [
      'Generative concept and option exploration in early design phases',
      'BIM-adjacent automation: room schedules, area calcs, specification drafting',
      'Planning and policy summarisation across jurisdictions',
      'Proposal, fee letter and PQQ automation',
      'Project knowledge management across past schemes',
    ],
    challenges: [
      'Protecting design IP and client confidentiality',
      'Integrating with Revit, ArchiCAD and Rhino workflows',
      'Adoption across multi-generational design teams',
    ],
    faqs: [
      {
        question: 'Does AI mean the end of the architect?',
        answer:
          'No. AI is a better tool for the same architect, the way CAD was a better tool than drawing boards. Practices that adopt early will simply ship better work with the same fee.',
      },
    ],
    related: ['engineering-firms', 'construction', 'real-estate', 'professional-services'],
    group: 'Professional services',
  },
  {
    slug: 'engineering-firms',
    name: 'AI Consulting for Engineering Firms',
    shortName: 'Engineering Firms',
    audience: 'engineering practice leaders and project managers',
    tagline: 'AI for the engineering studio: design automation, knowledge and project ops.',
    intro:
      'Engineering firms have rich technical data and repeatable workflows, perfect ingredients for high-impact AI. We help structural, civil, M&E and multi-disciplinary firms automate the long tail of repetitive design and documentation work.',
    useCases: [
      'Design automation for repetitive calculations and details',
      'Specification drafting and standards compliance checking',
      'Project planning and Gantt chart generation from briefs',
      'Knowledge AI trained on technical standards and past projects',
      'Bid response and PQQ automation',
    ],
    challenges: [
      'Engineering accuracy and accountability standards',
      'Integration with proprietary design software',
      'Cross-discipline knowledge transfer',
    ],
    faqs: [
      {
        question: 'Can AI be trusted with safety-critical engineering?',
        answer:
          'For routine, well-defined tasks with chartered engineer review, yes. We never recommend autonomous AI decision-making in safety-critical paths.',
      },
    ],
    related: ['architecture-firms', 'construction', 'manufacturing', 'professional-services'],
    group: 'Professional services',
  },
  {
    slug: 'marketing-agencies',
    name: 'AI Consulting for Marketing Agencies',
    shortName: 'Marketing Agencies',
    audience: 'agency owners and operations directors',
    tagline: 'AI for marketing agencies, produce more, scale margins, keep clients.',
    intro:
      'Marketing agencies are facing the strongest disruption pressure of any service business. The agencies winning right now are running AI-augmented teams that ship 3x the work without 3x the headcount.',
    useCases: [
      'AI-augmented content production: blog, social, video scripts, ad copy',
      'Programmatic SEO at scale for client portfolios',
      'AI-powered campaign analytics and reporting',
      'Client reporting automation across paid, organic and CRO',
      'Account management productivity stack',
    ],
    challenges: [
      'Clients asking for "AI" without knowing what they mean',
      'Junior staff retention as AI changes the work',
      'Differentiating from agencies that just paste from ChatGPT',
    ],
    faqs: [
      {
        question: 'Are agencies dying because of AI?',
        answer:
          'Average agencies, yes. Agencies that adopt AI to do BETTER work, not just faster work, are growing faster than ever.',
      },
    ],
    related: ['saas-companies', 'ecommerce', 'professional-services', 'media'],
    group: 'Professional services',
  },
  {
    slug: 'hr-recruitment',
    name: 'AI Consulting for HR & Recruitment',
    shortName: 'HR & Recruitment',
    audience: 'HR leaders and recruitment agency operators',
    tagline: 'AI for HR and recruitment, without falling foul of bias regulation.',
    intro:
      'Recruitment is one of the highest-volume, most automatable workflows in any business. We help HR teams and agencies deploy AI carefully, getting the speed benefit without the legal and ethical pitfalls.',
    useCases: [
      'CV and application screening at scale',
      'Candidate sourcing and personalised outreach',
      'Interview transcription and structured candidate summaries',
      'Onboarding content generation and personalisation',
      'Internal HR helpdesk automation',
    ],
    challenges: [
      'EU AI Act and UK Equality Act compliance on AI hiring tools',
      'Candidate experience in an AI-first hiring funnel',
      'Distinguishing AI-generated applications from real ones',
    ],
    faqs: [
      {
        question: 'Is AI allowed to screen CVs?',
        answer:
          'Yes, with proper human review, audit trails and bias monitoring. The EU AI Act classifies hiring AI as high-risk; we build solutions that comply.',
      },
    ],
    related: ['professional-services', 'enterprise', 'smes', 'tech-companies'],
    group: 'Professional services',
  },
  {
    slug: 'professional-services',
    name: 'AI Consulting for Professional Services',
    shortName: 'Professional Services',
    audience: 'professional services leaders',
    tagline: 'AI for consultancies, agencies and advisory firms billing by the hour.',
    intro:
      'Professional services firms have a structural problem: their revenue is tied to time. AI is the first technology that fundamentally changes that equation. We help PS firms re-engineer their unit economics for an AI-first world.',
    useCases: [
      'Proposal, scoping and SOW automation',
      'Internal knowledge AI trained on past engagements',
      'Engagement delivery acceleration with AI-augmented teams',
      'Time tracking, billing narrative and reporting automation',
      'Thought leadership and content production at scale',
    ],
    challenges: [
      'Pricing models built around billable hours',
      'Senior partner buy-in for changing how work gets done',
      'Quality control as AI augments junior output',
    ],
    faqs: [
      {
        question: 'How do we price work when AI does 80% of the drafting?',
        answer:
          'You move to value-based pricing, fixed fees or outcome pricing. The firms moving fastest on AI are also moving fastest off the timesheet.',
      },
    ],
    related: ['law-firms', 'accounting-firms', 'marketing-agencies', 'enterprise'],
    group: 'Professional services',
  },

  // ── Financial services ───────────────────────────────────────────
  {
    slug: 'finance',
    name: 'AI Consulting for Finance',
    shortName: 'Finance',
    audience: 'finance leaders, CFOs and finance teams',
    tagline: 'AI for finance teams, close faster, report better, surface insight earlier.',
    intro:
      'Finance teams sit on more data than any other function but spend most of their time in spreadsheets. AI is the lever that turns the finance team from a reporting cost-centre into a real-time business intelligence function.',
    useCases: [
      'Month-end close acceleration and variance analysis',
      'AP/AR automation: invoice extraction, coding and approval routing',
      'Management reporting and board pack generation',
      'Cash flow forecasting and scenario modelling',
      'Internal finance helpdesk for budget holders',
    ],
    challenges: [
      'Audit, SOX and accuracy requirements',
      'Integration with ERP systems and source-of-truth ledgers',
      'Buy-in from a traditionally cautious function',
    ],
    faqs: [
      {
        question: 'How does AI integrate with our ERP?',
        answer:
          'Through APIs, RPA, or AI-native middle layers depending on the ERP. Modern AI tools sit cleanly alongside NetSuite, Sage Intacct, Xero, SAP and Oracle.',
      },
    ],
    related: ['banking', 'accounting-firms', 'private-equity', 'wealth-management'],
    group: 'Financial services',
  },
  {
    slug: 'banking',
    name: 'AI Consulting for Banking',
    shortName: 'Banking',
    audience: 'banking leadership and operations teams',
    tagline: 'AI for banks: customer service, fraud, compliance and operations.',
    intro:
      'Banking has the data, the use cases and the regulatory pressure to make AI both a huge opportunity and a serious operational risk. We help retail, commercial and challenger banks deploy AI inside the right governance perimeter.',
    useCases: [
      'AI-assisted customer service across digital channels',
      'Fraud detection and AML alert triage',
      'KYC and onboarding document review',
      'Internal operations: knowledge AI, policy search, training',
      'Credit underwriting decision support (with human review)',
    ],
    challenges: [
      'PRA, FCA and EBA regulatory expectations on AI',
      'Explainability for credit and fair-treatment decisions',
      'Legacy core banking system integration',
    ],
    faqs: [
      {
        question: 'How do we handle FCA expectations on AI?',
        answer:
          'Through clear governance, model risk management, human-in-the-loop design and audit trails. We have helped banks design AI controls that map directly to the FCA Consumer Duty and the PRA SS1/23 model risk paper.',
      },
    ],
    related: ['finance', 'insurance', 'wealth-management', 'private-equity'],
    group: 'Financial services',
  },
  {
    slug: 'private-equity',
    name: 'AI Consulting for Private Equity',
    shortName: 'Private Equity',
    audience: 'PE deal teams and portfolio operations leaders',
    tagline: 'AI as a value-creation lever, across deal teams and the portfolio.',
    intro:
      'AI is now a standing question in every IC pack, both as a risk and as a value-creation thesis. We help PE firms use AI inside the deal team and roll it out as a value-creation lever across the portfolio.',
    useCases: [
      'AI-augmented due diligence: CIM analysis, expert calls, document review',
      'Portfolio-wide AI value-creation programme design',
      'Operating partner AI playbook for portfolio companies',
      'Deal flow tracking, pipeline and IC pack generation',
      'Synergy and 100-day plan AI workstreams for newly acquired assets',
    ],
    challenges: [
      'Differentiating real AI value creation from theatre',
      'Cross-portfolio change management',
      'Measuring AI ROI for value-creation reporting',
    ],
    faqs: [
      {
        question: 'Do you work directly with portfolio companies?',
        answer:
          'Yes. Most engagements are PE-funded, portfolio-delivered: we work alongside the operating partner and portfolio leadership team.',
      },
    ],
    related: ['enterprise', 'banking', 'finance', 'wealth-management'],
    group: 'Financial services',
  },
  {
    slug: 'wealth-management',
    name: 'AI Consulting for Wealth Management',
    shortName: 'Wealth Management',
    audience: 'wealth managers, IFAs and family offices',
    tagline: 'AI that frees wealth managers to do what they are actually paid for: advice.',
    intro:
      'Wealth management is a relationship business buried under regulation, reporting and admin. AI is the single biggest opportunity for IFAs, wealth managers and family offices to lift adviser capacity without lifting cost.',
    useCases: [
      'Meeting transcription and CRM update automation',
      'Suitability report drafting and review',
      'Client communications: portfolio commentary, quarterly letters',
      'Regulatory document summarisation',
      'Internal compliance knowledge AI',
    ],
    challenges: [
      'FCA Consumer Duty evidence and record-keeping',
      'Maintaining the personal-service brand value',
      'Integrating with legacy practice management software',
    ],
    faqs: [
      {
        question: 'Can AI write a suitability report?',
        answer:
          'AI can draft and assemble. A qualified adviser must own the assessment and the final document. The combination is dramatically faster than either alone.',
      },
    ],
    related: ['finance', 'banking', 'private-equity', 'insurance'],
    group: 'Financial services',
  },
  {
    slug: 'insurance',
    name: 'AI Consulting for Insurance',
    shortName: 'Insurance',
    audience: 'insurance carriers, brokers and MGAs',
    tagline: 'AI across the insurance lifecycle, quoting, underwriting, claims and service.',
    intro:
      'Insurance is one of the most AI-ready industries in the world: high data volume, repeatable workflows and clear ROI on each automated decision. We help carriers, brokers and MGAs put AI to work without taking on regulatory risk.',
    useCases: [
      'Claims FNOL triage and document extraction',
      'Underwriting decision support and risk scoring',
      'Quote and policy document generation',
      'Customer service automation across voice and digital',
      'Fraud detection and SIU case prioritisation',
    ],
    challenges: [
      'FCA, PRA and Lloyd’s expectations on AI use',
      'Legacy policy admin system integration',
      'Explainability for adverse decisions',
    ],
    faqs: [
      {
        question: 'Is AI underwriting allowed?',
        answer:
          'AI-assisted underwriting with human review is widely accepted. Fully autonomous AI underwriting on consumer lines requires careful governance and is generally not recommended yet.',
      },
    ],
    related: ['banking', 'finance', 'wealth-management', 'healthcare'],
    group: 'Financial services',
  },

  // ── Healthcare & life sciences ───────────────────────────────────
  {
    slug: 'healthcare',
    name: 'AI Consulting for Healthcare',
    shortName: 'Healthcare',
    audience: 'healthcare providers, private clinics and digital health teams',
    tagline: 'AI that saves clinician time without compromising patient care.',
    intro:
      'Healthcare is the highest-stakes AI environment we work in, and also one with the clearest ROI. From clinical documentation to triage and admin, AI gives clinicians time back without ever owning a clinical decision.',
    useCases: [
      'Ambient clinical documentation and consultation note drafting',
      'Referral letter generation and review',
      'Patient triage and inbox management',
      'Coding and billing automation',
      'Clinician knowledge AI: guidelines, protocols and internal SOPs',
    ],
    challenges: [
      'NHS DSPT, MHRA and Caldicott principle compliance',
      'Clinical safety case (DCB0129/0160) for any AI in a clinical pathway',
      'Patient consent and data residency',
    ],
    faqs: [
      {
        question: 'Is AI regulated as a medical device?',
        answer:
          'If it directly informs a clinical decision, yes, it may be classified as SaMD under MHRA rules. We design solutions that sit in administrative and documentation workflows specifically to stay outside that perimeter, or with the proper clinical safety case if not.',
      },
    ],
    related: ['life-sciences', 'pharma-biotech', 'dental-clinics', 'insurance'],
    group: 'Healthcare & life sciences',
  },
  {
    slug: 'life-sciences',
    name: 'AI Consulting for Life Sciences',
    shortName: 'Life Sciences',
    audience: 'biotech, medtech and life sciences operations teams',
    tagline: 'AI for life sciences, accelerate research, ops and regulatory submissions.',
    intro:
      'Life sciences companies generate enormous volumes of structured and unstructured data, perfect substrate for AI. We help research-led organisations adopt AI where the evidence base supports it, without overpromising on the bleeding edge.',
    useCases: [
      'Literature search and review automation',
      'Regulatory submission drafting and reviewer comment response',
      'Lab notebook structuring and knowledge management',
      'Clinical trial document automation',
      'Cross-functional internal knowledge AI',
    ],
    challenges: [
      'GxP, FDA and EMA documentation rigour',
      'IP protection in shared AI environments',
      'Validating AI tools for regulated use',
    ],
    faqs: [
      {
        question: 'Can we use AI in GxP environments?',
        answer:
          'Yes, with proper validation, audit trails and Part 11 compliance. We help design AI workflows that map onto your existing GxP control framework.',
      },
    ],
    related: ['pharma-biotech', 'healthcare', 'dental-clinics', 'enterprise'],
    group: 'Healthcare & life sciences',
  },
  {
    slug: 'pharma-biotech',
    name: 'AI Consulting for Pharma & Biotech',
    shortName: 'Pharma & Biotech',
    audience: 'pharma and biotech leadership teams',
    tagline: 'AI for pharma & biotech, drug discovery, clinical, commercial and ops.',
    intro:
      'Pharma and biotech have invested heavily in AI for drug discovery, and far less in the operational, commercial and medical affairs functions that consume the cost base. That is where the next wave of value sits.',
    useCases: [
      'Medical affairs and MSL field intelligence summarisation',
      'Regulatory submission and label change automation',
      'Commercial brand insights from real-world data',
      'Clinical operations site monitoring and protocol deviation review',
      'Internal scientific knowledge management',
    ],
    challenges: [
      'GxP and 21 CFR Part 11 validation requirements',
      'Cross-border data and IP residency',
      'Demonstrating ROI inside long pharma value chains',
    ],
    faqs: [
      {
        question: 'Do you work on drug discovery AI?',
        answer:
          'Generally no, we focus on the operational, commercial and medical affairs side where ROI is fastest and validation is more tractable.',
      },
    ],
    related: ['life-sciences', 'healthcare', 'enterprise', 'professional-services'],
    group: 'Healthcare & life sciences',
  },
  {
    slug: 'dental-clinics',
    name: 'AI Consulting for Dental Clinics',
    shortName: 'Dental Clinics',
    audience: 'dental practice owners, principals and practice managers',
    tagline: 'AI for dental practices, reception, admin and patient communications.',
    intro:
      'Dental practices have a small set of repeatable workflows that are perfect for AI: booking, recalls, treatment plans and patient communications. The right AI stack can give a single practice manager the capacity of two.',
    useCases: [
      'AI-powered patient reception and recall workflows',
      'Treatment plan letter and quote drafting',
      'Patient FAQ chat for the website',
      'Reviews, reputation and SEO content automation',
      'Internal training and protocol management',
    ],
    challenges: [
      'GDC and CQC documentation expectations',
      'NHS contract reporting',
      'Patient communication tone and brand consistency',
    ],
    faqs: [
      {
        question: 'Can AI handle patient calls and DMs?',
        answer:
          'AI can handle FAQs, booking and recalls. Anything clinical stays with a qualified team member. The combination dramatically lifts capacity at reception.',
      },
    ],
    related: ['healthcare', 'small-businesses', 'professional-services', 'smes'],
    group: 'Healthcare & life sciences',
  },

  // ── Industrial & operations ──────────────────────────────────────
  {
    slug: 'manufacturing',
    name: 'AI Consulting for Manufacturing',
    shortName: 'Manufacturing',
    audience: 'manufacturing operations leaders',
    tagline: 'AI for manufacturing, shop floor, supply chain and back office.',
    intro:
      'Manufacturing has a quiet AI opportunity that runs from the boardroom to the production line. We help manufacturers find the unsexy, high-ROI use cases, quality, planning, knowledge and admin, before chasing the moonshots.',
    useCases: [
      'Production planning and demand forecasting',
      'Quality control image and defect detection',
      'Predictive maintenance for line equipment',
      'Supplier and procurement document automation',
      'Internal SOP and knowledge AI for the shop floor',
    ],
    challenges: [
      'OT/IT integration and legacy SCADA systems',
      'Workforce adoption on the shop floor',
      'Capital cycles and ROI windows',
    ],
    faqs: [
      {
        question: 'Do we need IoT sensors before we can use AI?',
        answer:
          'No. Most of the highest-ROI AI for manufacturers sits in the back office, planning and quality functions, well upstream of sensor data.',
      },
    ],
    related: ['logistics', 'automotive', 'engineering-firms', 'energy'],
    group: 'Industrial & operations',
  },
  {
    slug: 'logistics',
    name: 'AI Consulting for Logistics',
    shortName: 'Logistics',
    audience: 'logistics, freight and supply chain leaders',
    tagline: 'AI for logistics, routing, planning, customer service and back office.',
    intro:
      'Logistics businesses run on margins and time. AI is the single biggest near-term lever for both, from route optimisation and freight document automation to a 24/7 customer service operation that does not need 24/7 staffing.',
    useCases: [
      'Route and fleet optimisation',
      'Freight document and customs paperwork automation',
      'Demand forecasting and inventory planning',
      'AI-powered customer service across email, chat and voice',
      'Driver and operative knowledge AI for procedures',
    ],
    challenges: [
      'Integration with TMS, WMS and telematics platforms',
      'Cross-border data and regulatory complexity',
      'Workforce communication across many sites and languages',
    ],
    faqs: [
      {
        question: 'Will AI replace dispatchers?',
        answer:
          'No, but it will let a dispatcher cover 2-3x the volume by automating the easy decisions and surfacing exceptions.',
      },
    ],
    related: ['manufacturing', 'retail', 'automotive', 'ecommerce'],
    group: 'Industrial & operations',
  },
  {
    slug: 'construction',
    name: 'AI Consulting for Construction',
    shortName: 'Construction',
    audience: 'construction leadership and project teams',
    tagline: 'AI for construction, bids, planning, safety and document management.',
    intro:
      'Construction is one of the least-digitised industries in the world, which is exactly why the AI ROI is so high. The right AI projects sit in the back office, the bid team and the project knowledge function, not on the site itself.',
    useCases: [
      'Bid and tender response automation',
      'BIM and drawing markup search',
      'Site daily report and progress automation',
      'Health and safety incident triage and trend analysis',
      'Project knowledge AI across past schemes',
    ],
    challenges: [
      'Document volume and version control',
      'Site adoption and training',
      'Subcontractor data fragmentation',
    ],
    faqs: [
      {
        question: 'Is AI useful on small projects?',
        answer:
          'Yes, the back-office, bid and admin use cases scale down to single-project teams. Site-level computer-vision tools are typically only worth it on larger schemes.',
      },
    ],
    related: ['engineering-firms', 'architecture-firms', 'real-estate', 'manufacturing'],
    group: 'Industrial & operations',
  },
  {
    slug: 'automotive',
    name: 'AI Consulting for Automotive',
    shortName: 'Automotive',
    audience: 'automotive OEMs, suppliers and retail networks',
    tagline: 'AI across the automotive value chain, design, production, retail and service.',
    intro:
      'Automotive has been doing AI in the vehicle for years. We focus on the much bigger commercial opportunity around it: the supply chain, dealer network, aftersales and customer experience that AI can now reshape.',
    useCases: [
      'Dealer network customer service and lead handling automation',
      'Aftersales: service booking, recall communications, parts ordering',
      'Supply chain document and quality automation',
      'Internal knowledge AI across engineering and service manuals',
      'AI-augmented marketing and configurator experiences',
    ],
    challenges: [
      'Coordination between OEM, dealer and supplier data',
      'Multi-jurisdiction regulatory complexity',
      'Brand consistency across many touchpoints',
    ],
    faqs: [
      {
        question: 'Do you work on autonomous-driving AI?',
        answer:
          'No. We focus on commercial, operational and retail AI, the part of the business that already drives revenue today.',
      },
    ],
    related: ['manufacturing', 'logistics', 'retail', 'engineering-firms'],
    group: 'Industrial & operations',
  },
  {
    slug: 'energy',
    name: 'AI Consulting for Energy',
    shortName: 'Energy',
    audience: 'energy producers, utilities and renewables operators',
    tagline: 'AI for the energy sector, ops, customer experience and back office.',
    intro:
      'Energy operators sit on huge volumes of asset, weather, regulatory and customer data. AI is the only practical way to turn that data into operational decisions in real time, and to bring customer experience up to the standard customers now expect.',
    useCases: [
      'Asset performance and predictive maintenance',
      'Customer service automation across regulated channels',
      'Trading and forecasting decision support',
      'Regulatory document drafting and reporting',
      'Internal engineering and operations knowledge AI',
    ],
    challenges: [
      'Ofgem, RIIO and CMA scrutiny on customer-facing AI',
      'Critical infrastructure security requirements',
      'Legacy SCADA and OT system integration',
    ],
    faqs: [
      {
        question: 'Is AI safe on critical national infrastructure?',
        answer:
          'For administrative, customer-facing and engineering-knowledge use cases, yes. We never recommend AI in autonomous control of critical infrastructure.',
      },
    ],
    related: ['manufacturing', 'engineering-firms', 'telecom', 'government'],
    group: 'Industrial & operations',
  },
  {
    slug: 'agriculture',
    name: 'AI Consulting for Agriculture',
    shortName: 'Agriculture',
    audience: 'agri-businesses, growers and producers',
    tagline: 'AI for agriculture, from on-farm decisions to back-office and supply chain.',
    intro:
      'Agriculture has been a slow AI adopter, but the data is rich, the workflows are repeatable and the cost pressure is real. We help growers, agri-businesses and food producers find the AI projects that survive a wet British summer.',
    useCases: [
      'Yield forecasting and field-level decision support',
      'Procurement, supplier and compliance document automation',
      'Supply chain and traceability paperwork automation',
      'Customer service for direct-to-consumer agri brands',
      'Knowledge AI for technical agronomy and regulation',
    ],
    challenges: [
      'Rural connectivity and field-level data capture',
      'Regulatory complexity across UK, EU and global markets',
      'Long ROI cycles tied to growing seasons',
    ],
    faqs: [
      {
        question: 'Is AI worth it for a single-farm business?',
        answer:
          'Sometimes. The back-office and compliance use cases scale down well. Field-level AI is usually only worth it at multi-farm scale.',
      },
    ],
    related: ['manufacturing', 'logistics', 'energy', 'retail'],
    group: 'Industrial & operations',
  },

  // ── Consumer & retail ────────────────────────────────────────────
  {
    slug: 'ecommerce',
    name: 'AI Consulting for Ecommerce',
    shortName: 'Ecommerce',
    audience: 'ecommerce founders and operations leaders',
    tagline: 'AI for ecommerce brands, content, customer service, ops and growth.',
    intro:
      'Ecommerce is a tight-margin, scale-driven business and AI is the single biggest 2025-era margin lever. From PDPs to customer service to retention, the brands that win are the ones running AI-first across the whole funnel.',
    useCases: [
      'Product description, SEO and PDP content generation at scale',
      'Customer service automation across email, chat and WhatsApp',
      'Returns, refunds and replacement triage',
      'Demand forecasting and inventory planning',
      'Retention, email and loyalty content personalisation',
    ],
    challenges: [
      'Brand voice consistency across thousands of SKUs',
      'Avoiding AI-generated content that hurts CRO',
      'Integration with Shopify, BigCommerce, NetSuite and 3PLs',
    ],
    faqs: [
      {
        question: 'Will AI content rank in Google?',
        answer:
          'AI-assisted, brand-edited content with real product expertise behind it absolutely can. Lazy "click-to-publish" AI content increasingly cannot.',
      },
    ],
    related: ['retail', 'marketing-agencies', 'small-businesses', 'logistics'],
    group: 'Consumer & retail',
  },
  {
    slug: 'retail',
    name: 'AI Consulting for Retail',
    shortName: 'Retail',
    audience: 'retail leadership and operations teams',
    tagline: 'AI for retail, store ops, ecommerce, head office and customer experience.',
    intro:
      'Retail businesses are squeezed from every side: rents, wages, ecommerce competition. AI is the highest-leverage productivity tool the sector has seen since EPOS. We help retailers find the AI projects that actually move the P&L.',
    useCases: [
      'Demand forecasting and inventory planning',
      'Pricing and promo optimisation',
      'Store-team rota, comms and training automation',
      'Customer service across digital and in-store',
      'Head-office knowledge AI for buying, finance and HR teams',
    ],
    challenges: [
      'Legacy EPOS and ERP integration',
      'Workforce communication across many stores',
      'Capex pressure on technology upgrades',
    ],
    faqs: [
      {
        question: 'Should we deploy AI in-store before head office?',
        answer:
          'Usually the opposite. Head-office wins are faster, cheaper and proven before being scaled to stores.',
      },
    ],
    related: ['ecommerce', 'hospitality', 'restaurants', 'logistics'],
    group: 'Consumer & retail',
  },
  {
    slug: 'hospitality',
    name: 'AI Consulting for Hospitality',
    shortName: 'Hospitality',
    audience: 'hotels, hospitality groups and operators',
    tagline: 'AI for hospitality, guest experience, ops, and the unsexy back office.',
    intro:
      'Hospitality runs on margins and on people. AI can lift both, improving the guest experience while taking the repetitive admin off the team. We help independents and groups find the right level of AI for their brand.',
    useCases: [
      'Booking, enquiry and reservation automation',
      'Multilingual guest service across digital channels',
      'Reviews monitoring and response automation',
      'Procurement, supplier and rota admin',
      'Marketing content and email automation',
    ],
    challenges: [
      'Brand voice and guest expectation of personal service',
      'PMS and channel manager integration',
      'Multilingual workforce coordination',
    ],
    faqs: [
      {
        question: 'Won’t AI make hospitality feel impersonal?',
        answer:
          'Only if it replaces front-of-house. Done right, AI replaces the admin, and gives your team more time on the floor with guests.',
      },
    ],
    related: ['restaurants', 'retail', 'real-estate', 'small-businesses'],
    group: 'Consumer & retail',
  },
  {
    slug: 'restaurants',
    name: 'AI Consulting for Restaurants',
    shortName: 'Restaurants',
    audience: 'restaurant groups, independents and franchise operators',
    tagline: 'AI for restaurants, bookings, ops, marketing and rota.',
    intro:
      'Restaurants are some of the most operationally complex businesses there are. AI does not need to do anything clever to add real value, it just needs to take the admin off the manager and the marketing off the owner.',
    useCases: [
      'Reservation, waitlist and no-show management',
      'Reviews response and reputation management',
      'Local SEO content for multi-site groups',
      'Demand forecasting and rota planning',
      'Supplier and stock admin automation',
    ],
    challenges: [
      'Site-level adoption and training',
      'Cost-sensitive technology budgets',
      'POS and reservation platform integration',
    ],
    faqs: [
      {
        question: 'Can a single-site restaurant benefit from AI?',
        answer:
          'Yes, the marketing, reviews and admin automations work just as well for a one-site operator.',
      },
    ],
    related: ['hospitality', 'retail', 'small-businesses', 'ecommerce'],
    group: 'Consumer & retail',
  },

  // ── Public & social sector ───────────────────────────────────────
  {
    slug: 'government',
    name: 'AI Consulting for Government',
    shortName: 'Government',
    audience: 'central government, local authorities and public sector bodies',
    tagline: 'AI in the public sector, practical, accountable and compliant.',
    intro:
      'Public sector AI is held to higher standards than private sector AI, and rightly so. We help departments, agencies and councils put AI to work inside the right ethical, transparency and procurement framework.',
    useCases: [
      'Citizen-facing service automation across digital channels',
      'Document, FOI and casework triage',
      'Policy and consultation response analysis',
      'Internal knowledge AI for officers',
      'Procurement and contract document automation',
    ],
    challenges: [
      'Algorithmic Transparency Recording Standard (ATRS) and AI Playbook',
      'GDPR, equality duty and accessibility requirements',
      'Procurement frameworks and value for money',
    ],
    faqs: [
      {
        question: 'Can you work with us on G-Cloud or DOS frameworks?',
        answer:
          'Yes, we operate through partners on G-Cloud, DOS and BPDTS-style frameworks for direct public sector procurement.',
      },
    ],
    related: ['nonprofits', 'education', 'defense', 'enterprise'],
    group: 'Public & social sector',
  },
  {
    slug: 'nonprofits',
    name: 'AI Consulting for Nonprofits',
    shortName: 'Nonprofits',
    audience: 'charity and nonprofit leadership teams',
    tagline: 'AI for charities and nonprofits, do more with the same team and budget.',
    intro:
      'Nonprofits have the same admin and operations as any business, with smaller teams and tighter budgets. AI is the most cost-effective capacity multiplier the sector has ever had.',
    useCases: [
      'Donor and supporter communications automation',
      'Grant writing and fundraising application drafting',
      'Beneficiary and case-management admin',
      'Impact reporting automation',
      'Volunteer onboarding and knowledge AI',
    ],
    challenges: [
      'Tight technology budgets and procurement',
      'Trustee buy-in on AI use',
      'Beneficiary data sensitivity',
    ],
    faqs: [
      {
        question: 'Are there discounted AI tools for charities?',
        answer:
          'Yes, most major AI platforms offer nonprofit pricing. We help you stack those discounts into a sensible technology budget.',
      },
    ],
    related: ['government', 'education', 'small-businesses', 'professional-services'],
    group: 'Public & social sector',
  },
  {
    slug: 'education',
    name: 'AI Consulting for Education',
    shortName: 'Education',
    audience: 'schools, multi-academy trusts and higher education leaders',
    tagline: 'AI for education, administrative load down, teaching quality up.',
    intro:
      'Education is being reshaped by AI faster than most sectors, and the institutions getting it right are the ones treating AI as a teaching and operational tool, not a threat to academic integrity.',
    useCases: [
      'Teacher and lecturer planning and resource generation',
      'Marking, feedback and assessment design support',
      'Admin: timetabling, comms, attendance, SEND paperwork',
      'Student-facing FAQ and pastoral chat',
      'Institutional knowledge AI for policies and SOPs',
    ],
    challenges: [
      'Academic integrity and AI-assisted submissions',
      'Safeguarding and student data protection',
      'Variable teacher AI literacy across staff',
    ],
    faqs: [
      {
        question: 'How do you handle AI and academic integrity?',
        answer:
          'By teaching with AI, designing assessments that test real understanding, and using AI-detection tools as a signal, not a verdict.',
      },
    ],
    related: ['nonprofits', 'government', 'professional-services', 'tech-companies'],
    group: 'Public & social sector',
  },
  {
    slug: 'defense',
    name: 'AI Consulting for Defense',
    shortName: 'Defense',
    audience: 'defence primes, suppliers and adjacent services',
    tagline: 'AI in defence, operational, secure and accountable.',
    intro:
      'Defence AI is held to the highest standards anywhere. We work in the operational, administrative and supplier-facing parts of the defence sector, never in autonomous weapon systems, and always inside the right governance and security frameworks.',
    useCases: [
      'Bid, tender and capability paper drafting',
      'Knowledge and document search across security-cleared content',
      'Compliance and audit document automation',
      'Training material generation and personalisation',
      'Supplier and procurement document automation',
    ],
    challenges: [
      'Security clearance and ITAR/export control',
      'Data residency and sovereign cloud requirements',
      'Long procurement cycles',
    ],
    faqs: [
      {
        question: 'Do you work on autonomous weapons or targeting AI?',
        answer:
          'No. We work exclusively on administrative, knowledge and operational AI inside the defence supply chain.',
      },
    ],
    related: ['government', 'enterprise', 'engineering-firms', 'telecom'],
    group: 'Public & social sector',
  },

  // ── Technology & media ───────────────────────────────────────────
  {
    slug: 'saas-companies',
    name: 'AI Consulting for SaaS Companies',
    shortName: 'SaaS Companies',
    audience: 'SaaS founders, product leaders and ops teams',
    tagline: 'AI inside SaaS, better product, leaner ops, faster growth.',
    intro:
      'Every SaaS company is asking the same question right now: how do we ship AI features without burning the roadmap? We help SaaS teams pick the right AI bets, integrate them cleanly, and get the operational productivity wins along the way.',
    useCases: [
      'AI features inside your product (copilots, search, generation)',
      'Customer success and support automation',
      'Sales and marketing operations automation',
      'Internal engineering productivity tooling',
      'Product analytics and customer feedback synthesis',
    ],
    challenges: [
      'Choosing model providers without lock-in',
      'Pricing AI-powered features',
      'Customer data residency for AI features',
    ],
    faqs: [
      {
        question: 'Should every SaaS company ship AI features?',
        answer:
          'No, but every SaaS company should ship operational AI internally. AI features should follow a clear customer pull, not pressure from the board.',
      },
    ],
    related: ['tech-companies', 'startups', 'marketing-agencies', 'professional-services'],
    group: 'Technology & media',
  },
  {
    slug: 'tech-companies',
    name: 'AI Consulting for Tech Companies',
    shortName: 'Tech Companies',
    audience: 'tech company leadership and operations teams',
    tagline: 'AI for tech companies, ops, engineering productivity and growth.',
    intro:
      'Technology companies are supposed to be ahead on AI. In practice, most are stuck running internal AI initiatives that never get out of pilot. We help tech leadership ship AI into the day-to-day operation of the business, not just into the product roadmap.',
    useCases: [
      'Developer productivity: AI coding tools, internal RAG, codebase search',
      'Engineering operations: PR review, on-call summarisation, runbooks',
      'GTM automation across marketing, sales and customer success',
      'Internal knowledge AI for distributed teams',
      'Hiring, onboarding and people-ops automation',
    ],
    challenges: [
      'AI tool sprawl across engineering teams',
      'Security review on new AI vendors',
      'Engineering buy-in on AI-driven productivity changes',
    ],
    faqs: [
      {
        question: 'Will AI-coding tools replace engineers?',
        answer:
          'No, but they raise the bar. The same team will ship more, which usually means companies hire more, not less.',
      },
    ],
    related: ['saas-companies', 'startups', 'enterprise', 'media'],
    group: 'Technology & media',
  },
  {
    slug: 'media',
    name: 'AI Consulting for Media',
    shortName: 'Media',
    audience: 'media organisations, publishers and content businesses',
    tagline: 'AI for media, production, distribution, monetisation and ops.',
    intro:
      'Media is being remade by AI in real time. The publishers that survive will be the ones that use AI to deepen editorial quality and speed, not the ones that race to the bottom on automated content.',
    useCases: [
      'AI-assisted research, transcription and editorial workflows',
      'Personalisation, recommendations and onsite search',
      'Audience analytics and content performance synthesis',
      'Ad ops, campaign creative and yield optimisation',
      'Archive search and back-catalogue monetisation',
    ],
    challenges: [
      'Editorial trust, attribution and provenance',
      'Search engine and AI platform traffic shifts',
      'IP and rights management in the AI training era',
    ],
    faqs: [
      {
        question: 'Should publishers block AI training crawlers?',
        answer:
          'Most should. We help publishers design a clear policy on what is licensed, what is blocked, and what is monetised through AI partnership.',
      },
    ],
    related: ['marketing-agencies', 'ecommerce', 'tech-companies', 'professional-services'],
    group: 'Technology & media',
  },
  {
    slug: 'telecom',
    name: 'AI Consulting for Telecom',
    shortName: 'Telecom',
    audience: 'telecom operators and adjacent service providers',
    tagline: 'AI for telecom, customer service, network operations and back office.',
    intro:
      'Telecom carriers have the customer base, the data and the regulatory footprint to make AI a transformational lever. We help operators put AI to work where it lifts NPS and ARPU, not where it makes the headlines.',
    useCases: [
      'Customer service automation across voice and digital',
      'Network operations decision support and incident triage',
      'Billing and dispute resolution automation',
      'Engineer dispatch and field service optimisation',
      'Internal knowledge AI for engineers and agents',
    ],
    challenges: [
      'Ofcom, GDPR and consumer protection scrutiny',
      'OSS/BSS integration complexity',
      'Workforce scale and adoption',
    ],
    faqs: [
      {
        question: 'Can AI handle our customer voice channels?',
        answer:
          'Yes, with the right escalation paths. Modern voice AI is now comparable to a trained agent on the top 30-40% of contact reasons.',
      },
    ],
    related: ['energy', 'banking', 'media', 'enterprise'],
    group: 'Technology & media',
  },

  // ── Property & built environment ─────────────────────────────────
  {
    slug: 'real-estate',
    name: 'AI Consulting for Real Estate',
    shortName: 'Real Estate',
    audience: 'real estate operators, agencies and investors',
    tagline: 'AI for real estate, agency operations, asset management and tenant experience.',
    intro:
      'Real estate is a paperwork-heavy, relationship-driven industry sitting on enormous data. AI is the single biggest unlock for agency productivity, asset management decisions and tenant experience, all without changing the underlying business model.',
    useCases: [
      'Agency: listing copy, viewings, vendor and applicant comms',
      'Asset management: lease, contract and document AI',
      'Tenant communications and FAQ automation',
      'Market intelligence and comparable analysis',
      'Property management ticket triage and dispatch',
    ],
    challenges: [
      'Document volume and version control across deals',
      'CRM and PropTech integration',
      'Adoption across high-performing, time-poor agents',
    ],
    faqs: [
      {
        question: 'Will AI replace estate agents?',
        answer:
          'No, but it will let great agents handle more relationships, ship better marketing and respond faster than agents who do not adopt.',
      },
    ],
    related: ['construction', 'architecture-firms', 'hospitality', 'professional-services'],
    group: 'Property & built environment',
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);

export const industriesByGroup = (): Record<string, Industry[]> =>
  industries.reduce<Record<string, Industry[]>>((acc, i) => {
    if (!acc[i.group]) acc[i.group] = [];
    acc[i.group].push(i);
    return acc;
  }, {});

export const getRelatedIndustries = (slug: string): Industry[] => {
  const industry = getIndustryBySlug(slug);
  if (!industry) return [];
  return industry.related
    .map((s) => getIndustryBySlug(s))
    .filter((i): i is Industry => i !== undefined);
};
