export const site = {
  name: "Quantum Advisory Partners",
  shortName: "QAP",
  tagline: "Strategic Finance · Performance · Value Creation",
  email: "contact@quantumadvisorypartners.in",
  whatsappNumber: "919996307143",
  whatsappDisplay: "+91 99963 07143",
  founderName: "Alok Verma",
  founderTitle: "Founder and Principal",
  whatsappLink:
    "https://wa.me/919996307143?text=Hello%20Quantum%20Advisory%20Partners%2C%20I%20would%20like%20to%20discuss%20my%20business.",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const heroTicks = [
  "Financial clarity",
  "Measurable priorities",
  "Execution-focused advice",
];

export const trustPoints = [
  "Confidential",
  "No obligation",
  "Reply within 1 business day",
];

export const stats = [
  { value: "₹25–500Cr+", label: "Target business segment" },
  { value: "12+ Years", label: "Professional experience" },
  { value: "Finance + Ops", label: "Connected business perspective" },
  { value: "Be IPO Ready", label: "Build institutional readiness" },
];

export const valueFramework = [
  {
    id: "ebitda",
    title: "EBITDA",
    desc: "Profitability and margin drivers",
    tint: "blue",
    icon: "TrendingUp",
  },
  {
    id: "cash",
    title: "Cash",
    desc: "Liquidity and working capital",
    tint: "teal",
    icon: "Banknote",
  },
  {
    id: "capital",
    title: "Capital",
    desc: "Funding and capital efficiency",
    tint: "amber",
    icon: "Landmark",
  },
  {
    id: "value",
    title: "Enterprise Value",
    desc: "Resilience and readiness for growth",
    tint: "violet",
    icon: "Diamond",
  },
] as const;

export const frameworkFlow = ["Identify", "Quantify", "Act & Measure"];

export const services = [
  {
    num: "01",
    tag: "Capital",
    title: "Capital Structure & Debt Advisory",
    desc: "Evaluate capital requirements, debt capacity, financing alternatives and capital allocation to support better-informed funding decisions.",
    points: [
      "Capital structure review",
      "Debt capacity assessment",
      "Financing alternatives",
    ],
    icon: "Landmark",
    tint: "blue",
    drawer: [
      "Assess current capital structure and cost of debt against peers.",
      "Model debt capacity under multiple scenarios and stress tests.",
      "Compare financing alternatives — bank debt, private credit, capital markets.",
      "Recommend a capital allocation framework aligned to growth and risk.",
    ],
  },
  {
    num: "02",
    tag: "Finance",
    title: "Fractional CFO & Governance",
    desc: "Strengthen budgeting, forecasting, cash visibility, management reporting and the financial discipline required to support growth.",
    points: ["Budgeting & forecasting", "Cash visibility", "MIS & reporting"],
    icon: "BarChart3",
    tint: "teal",
    drawer: [
      "Establish a rolling forecast and 13-week cash flow view.",
      "Design management reporting aligned to business drivers.",
      "Build a budgeting cadence with ownership and accountability.",
      "Strengthen governance, controls and board-level reporting.",
    ],
  },
  {
    num: "03",
    tag: "Operations",
    title: "Operations & Supply Chain Value Creation",
    desc: "Assess procurement, operating costs, supply-chain performance and process opportunities that may improve cash, service and margins.",
    points: ["Procurement diagnostics", "Cost optimization", "Process improvement"],
    icon: "Settings2",
    tint: "amber",
    drawer: [
      "Diagnose procurement spend and supplier concentration.",
      "Map operating cost structure and benchmark key categories.",
      "Assess supply-chain performance and inventory positioning.",
      "Prioritise process improvements by cash and margin impact.",
    ],
  },
  {
    num: "04",
    tag: "Policy",
    title: "Government Incentives & Policy Monetization",
    desc: "Identify potentially relevant central and state support programmes and structure an evidence-based assessment of eligibility and requirements.",
    points: ["Incentive mapping", "Eligibility assessment", "Claim support"],
    icon: "FileText",
    tint: "violet",
    drawer: [
      "Scan central and state incentive programmes for relevance.",
      "Assess eligibility against programme criteria.",
      "Quantify potential benefit and implementation cost.",
      "Support evidence preparation and specialist coordination.",
    ],
  },
] as const;

export const signatureService = {
  num: "★",
  tag: "Signature Advisory Suite",
  title: "Integrated Advisory",
  desc: "A connected view of strategic finance, performance improvement, capital decisions and institutional readiness for businesses navigating their next stage.",
  points: [
    "Strategic finance + performance",
    "Capital + governance",
    "Institutional readiness",
  ],
  pill: "Most comprehensive",
  drawer: [
    "A single engagement spanning finance, operations, capital and governance.",
    "Connected diagnostics across the QAP Value Framework.",
    "Prioritised roadmap with ownership and KPIs.",
    "Specialist coordination across accounting, legal and capital markets.",
  ],
};

export const approachSteps = [
  {
    num: "01",
    title: "Diagnose",
    desc: "Understand the business context, current performance, constraints and management priorities.",
    icon: "Stethoscope",
  },
  {
    num: "02",
    title: "Quantify",
    desc: "Size the opportunity and test assumptions with data.",
    icon: "Calculator",
  },
  {
    num: "03",
    title: "Prioritise",
    desc: "Rank initiatives by impact, effort and risk.",
    icon: "ListOrdered",
  },
  {
    num: "04",
    title: "Advise",
    desc: "Develop recommendations, business cases, financial models and a practical implementation roadmap.",
    icon: "Lightbulb",
  },
  {
    num: "05",
    title: "Execute",
    desc: "Support implementation planning, stakeholder alignment and the operating cadence needed to progress.",
    icon: "PlayCircle",
  },
  {
    num: "06",
    title: "Measure",
    desc: "Review agreed KPIs, test assumptions, identify deviations and refine the action plan.",
    icon: "Target",
  },
] as const;

export const industries = [
  {
    name: "Manufacturing",
    desc: "Margins, procurement, inventory, capacity and working capital.",
    icon: "Factory",
    tint: "blue",
  },
  {
    name: "Energy & Infrastructure",
    desc: "Capital-intensive operations, project economics and cash cycles.",
    icon: "Zap",
    tint: "amber",
  },
  { name: "Real Estate", desc: "Project cash flows, funding and inventory cycles.", icon: "Building2", tint: "teal" },
  { name: "Healthcare", desc: "Unit economics, capital planning and operating discipline.", icon: "HeartPulse", tint: "violet" },
  { name: "Technology & SaaS", desc: "Recurring revenue, burn, unit economics and fundraising.", icon: "Cpu", tint: "blue" },
  { name: "Retail & Consumer", desc: "Margins, working capital, store economics and growth.", icon: "ShoppingBag", tint: "amber" },
  { name: "Logistics", desc: "Asset utilisation, cost structure and cash conversion.", icon: "Truck", tint: "teal" },
  { name: "Financial Services", desc: "Capital, risk, compliance and reporting maturity.", icon: "Briefcase", tint: "violet" },
] as const;

export const ipoChecklist = [
  "Financial reporting and planning maturity",
  "Performance visibility and business drivers",
  "Governance and control gap assessment",
  "Readiness roadmap and specialist coordination",
];

export const founder = {
  name: "Alok Verma",
  role: "Founder and Principal",
  bio: "Alok has spent over a decade working with mid-market Indian businesses on strategic finance, capital decisions and performance improvement. He founded Quantum Advisory Partners to bring a connected, execution-focused perspective to growing companies.",
  credentials: [
    "12+ years in strategic finance and advisory",
    "Worked across manufacturing, services and capital-intensive sectors",
    "Focused on practical, measurable outcomes",
  ],
  quote:
    "Most businesses don't lack data. They lack a clear view of what matters most and the discipline to act on it.",
};

export const testimonials = [
  {
    quote:
      "QAP helped us see where value was being created and where it was leaking. The diagnostics reframed our priorities within weeks.",
    name: "CFO, Manufacturing",
    role: "₹120Cr revenue · Illustrative placeholder",
  },
  {
    quote:
      "The connected view of finance and operations gave our board a clearer basis for capital allocation decisions.",
    name: "Promoter, Real Estate",
    role: "₹300Cr revenue · Illustrative placeholder",
  },
  {
    quote:
      "We moved from fragmented reporting to a monthly performance view our management team actually uses.",
    name: "Director, Logistics",
    role: "₹80Cr revenue · Illustrative placeholder",
  },
];

export const faqs = [
  {
    q: "Who does Quantum Advisory Partners work with?",
    a: "QAP works with Indian businesses in the ₹25–500Cr+ revenue range across manufacturing, services, real estate, healthcare, technology, retail, logistics and financial services. Engagements are tailored to each company's context and stage.",
  },
  {
    q: "What is your engagement model?",
    a: "Engagements begin with a business conversation to understand the issue, followed by a scoped diagnostic or advisory engagement. Work may be project-based or a retained Fractional CFO arrangement, depending on the need.",
  },
  {
    q: "How do you approach fees?",
    a: "Fees are agreed in advance based on scope, complexity and duration. We establish the business challenge, agree a practical scope, and confirm the fee structure before any work begins.",
  },
  {
    q: "What timelines should I expect?",
    a: "A typical diagnostic runs a few weeks; deeper advisory engagements span several weeks to months. Fractional CFO arrangements are ongoing and reviewed on a retainer basis. We respond to new enquiries within one business day.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Yes. All information shared during an enquiry or engagement is treated as confidential and used only to respond and scope the work. Engagements are governed by a confidentiality agreement before sensitive data is exchanged.",
  },
  {
    q: "Is IPO readiness a guarantee of listing?",
    a: "No. IPO readiness is one possible objective. It helps prepare a business for demanding stakeholders and future strategic milestones. It is not a guarantee of listing eligibility, approval, fundraising or transaction success.",
  },
  {
    q: "Which industries do you support?",
    a: "Manufacturing, energy & infrastructure, real estate, healthcare, technology & SaaS, retail & consumer, logistics and financial services. Advisory priorities are tailored to each industry's business model and maturity.",
  },
  {
    q: "How do I start?",
    a: "Begin with the business issue that matters most. Use the enquiry form, WhatsApp or email — we respond within one business day and the first conversation is confidential and without obligation.",
  },
];

export const footerLinks = {
  "Quick Links": [
    { label: "Services", href: "#services" },
    { label: "Our Approach", href: "#approach" },
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  Services: [
    { label: "Capital Structure & Debt Advisory", href: "#services" },
    { label: "Fractional CFO & Governance", href: "#services" },
    { label: "Operations & Supply Chain", href: "#services" },
    { label: "Government Incentives & Policy", href: "#services" },
    { label: "Signature Advisory Suite", href: "#services" },
  ],
  Contact: [
    { label: site.email, href: `mailto:${site.email}` },
    { label: site.whatsappDisplay, href: site.whatsappLink },
  ],
};

export const disclaimer =
  "The information on this website describes the types of advisory services Quantum Advisory Partners may provide. Examples, potential impacts, financial figures and business scenarios are illustrative unless expressly identified as actual experience. They are not guarantees of results or representations of completed QAP client engagements. Actual outcomes depend on the circumstances of each business, the accuracy and availability of information, management decisions, implementation and third-party actions.";

export const serviceOptions = [
  "Capital Structure & Debt Advisory",
  "Fractional CFO & Governance",
  "Operations & Supply Chain",
  "Government Incentives & Policy",
  "Signature Advisory Suite",
  "IPO Readiness",
  "Not sure yet",
];

export const revenueRanges = [
  "<₹10Cr",
  "₹10–25Cr",
  "₹25–100Cr",
  "₹100–250Cr",
  "₹250–500Cr",
  "₹500Cr+",
];

export const industriesOptions = [
  "Manufacturing",
  "Energy & Infrastructure",
  "Real Estate",
  "Healthcare",
  "Technology & SaaS",
  "Retail & Consumer",
  "Logistics",
  "Financial Services",
  "Other",
];

export const businessTypes = [
  "Pvt Ltd",
  "LLP",
  "Public Ltd",
  "Partnership",
  "Proprietorship",
  "Other",
];

export const objectivesOptions = [
  "Raise funding",
  "Reduce debt cost",
  "Improve cash flow",
  "Improve margins",
  "Better MIS/reporting",
  "Governance and compliance",
  "Prepare for IPO/investors",
  "Expansion",
  "Cost reduction",
  "Other",
];

export const debtLevels = ["None", "Low", "Moderate", "High"];

export const urgencyOptions = ["Immediate", "1–3 months", "3–6 months", "Just exploring"];

export const budgetOptions = [
  "Not sure yet",
  "<₹2L",
  "₹2–5L",
  "₹5–15L",
  "₹15–50L",
  "₹50L+",
];

export const referralOptions = ["Google", "LinkedIn", "Referral", "WhatsApp", "Event", "Other"];

export const meetingModes = ["Phone call", "Video call", "In-person"];

export const contactTimes = ["Morning", "Afternoon", "Evening"];

export const contactMethods = ["Email", "Phone", "WhatsApp"];

export const yesNoPartial = ["Yes", "No", "Partially"];

export const erpOptions = ["Tally", "SAP", "Zoho", "Other", "None"];

export const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

export type TintKey = "blue" | "teal" | "amber" | "violet";

export const tintMap: Record<
  TintKey,
  { bg: string; fg: string; tile: string; icon: string }
> = {
  blue: {
    bg: "bg-[#E0EAFF]",
    fg: "text-[#1D4ED8]",
    tile: "bg-[#E0EAFF]",
    icon: "text-[#1D4ED8]",
  },
  teal: {
    bg: "bg-[#DDF5F0]",
    fg: "text-[#0F766E]",
    tile: "bg-[#DDF5F0]",
    icon: "text-[#0F766E]",
  },
  amber: {
    bg: "bg-[#FFF1D6]",
    fg: "text-[#B45309]",
    tile: "bg-[#FFF1D6]",
    icon: "text-[#B45309]",
  },
  violet: {
    bg: "bg-[#EAE4FF]",
    fg: "text-[#6D28D9]",
    tile: "bg-[#EAE4FF]",
    icon: "text-[#6D28D9]",
  },
};
