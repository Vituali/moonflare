export type ProjectStatus = "Professional" | "Academic" | "Open source" | "Private";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  visibility: "Public" | "Private";
  featured: boolean;
  domains: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  context: string;
  problem: string;
  constraints: string[];
  architecture: string[];
  decisions: string[];
  implementation: string[];
  challenges: string[];
  outcomes: string[];
  lessons: string[];
  evidenceNote?: string;
};

export const site = {
  name: "Moonflare Development",
  domain: "https://moonflare.com.br",
  tagline: "Engineering systems. Automating complexity.",
  description:
    "Victor Henrique builds software, integrations, and automation across telecom operations, web platforms, and engineering workflows.",
  author: "Victor Henrique",
  role: "IT Solutions Analyst · Mechatronics Engineering student",
  location: "Teresópolis, RJ, Brazil",
  github: "https://github.com/Vituali",
  linkedin: "https://linkedin.com/in/victorhen",
};

export const projects: Project[] = [
  {
    slug: "nexus",
    title: "Nexus — Integrated Telecom Operations Platform",
    summary:
      "A private, multi-service platform for telecom operations combining CRM workflows, knowledge management, network visibility, and operational automation.",
    status: "Professional",
    visibility: "Private",
    featured: true,
    domains: ["Software", "Systems Architecture", "Infrastructure", "Automation"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
      "GitHub Actions",
      "Zod",
    ],
    context:
      "Active internal work at ATI Internet. Nexus is described here at a high level based on verified profile and repository documentation; source code and operational details are private.",
    problem:
      "Telecom operations involved fragmented workflows across customer service, commercial management, network data, and internal documentation, creating manual effort and inconsistent operational visibility.",
    constraints: [
      "Must integrate with existing operational systems and processes rather than replace them all at once.",
      "Operational data handling requires care: workflows should avoid exposing personal or sensitive customer information.",
      "Deployment and changes need to be reliable in a real production environment.",
    ],
    architecture: [
      "Web CRM built with Next.js and React for operational, commercial, and metrics workflows.",
      "Python services (including the Fibrinha bot) for automation, data collection, and integrations.",
      "PostgreSQL as the primary data store with schema-driven data access.",
      "Versioned inter-service contracts (JSON schemas/samples) to formalize communication boundaries.",
      "Docker-based deployment with CI/CD automation and self-hosted runners for production delivery.",
      "Chrome extension components to connect browser workflows with internal systems where appropriate.",
    ],
    decisions: [
      "Adopted a contract-first approach for inter-service communication to reduce integration drift.",
      "Separated concerns across web, bot, extension, and infrastructure modules within a monorepo.",
      "Used role-based access control and documentation gates to support governance and maintainability.",
      "Prioritized aggregated operational telemetry over personal data in integrations.",
    ],
    implementation: [
      "Implemented modules for commercial workflows, metrics/market views, CS/NOC inventory visibility, task tracking, and an integrated knowledge base.",
      "Built automation and ingestion flows that push structured, aggregated data into the platform.",
      "Established CI checks, deployment workflows, and operational documentation practices.",
    ],
    challenges: [
      "Evolving architecture while the platform is actively used in operations.",
      "Bridging legacy and modern systems without disrupting day-to-day work.",
      "Balancing delivery speed with reliability, access control, and maintainability.",
    ],
    outcomes: [
      "A unified internal platform direction that brings multiple operational domains into one system.",
      "Documented engineering practices (contracts, CI/CD, modular structure) supporting ongoing development.",
      "Specific business metrics are not publicly disclosed.",
    ],
    lessons: [
      "Clear contracts and boundaries make distributed operational systems easier to evolve.",
      "Automation delivers the most value when it fits existing human workflows instead of fighting them.",
      "Documentation and governance are part of the system, not an afterthought.",
    ],
    evidenceNote:
      "High-level summary only. Verified via public profile description and repository documentation; confidential operational details omitted.",
  },
  {
    slug: "ati-v2",
    title: "ATI V2 — Support Operations Ecosystem",
    summary:
      "A monorepo ecosystem combining a Chrome extension and an administrative web panel to streamline telecom support workflows.",
    status: "Professional",
    visibility: "Public",
    featured: true,
    domains: ["Software", "Automation", "Systems Integration"],
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "Chrome Extension (MV3)",
      "Firebase (Auth, Realtime Database, Firestore)",
    ],
    links: [
      { label: "GitHub repository", href: "https://github.com/Vituali/ati" },
    ],
    context:
      "Public repository developed for real-world support operations context at ATI Internet, integrating with existing tools such as ChatMix and SGP.",
    problem:
      "Support agents needed to perform repetitive actions across multiple systems, manage responses, and access operational utilities quickly without constant context switching.",
    constraints: [
      "Runs as a browser extension in a Manifest V3 environment with service worker constraints.",
      "Must interact with existing third-party/internal web interfaces rather than replacing them.",
      "Needs responsive, in-context UX that does not disrupt the operator’s primary workflow.",
    ],
    architecture: [
      "Monorepo with two main applications: a Chrome extension (MV3) and a React-based administrative panel.",
      "Extension components include background/service worker logic, content scripts, and UI surfaces (popup/side integrations).",
      "Firebase used as backend services: Authentication, Realtime Database for live presence/chat/notifications, and Firestore for structured data.",
      "Message bridge and SSO/session synchronization patterns between extension and embedded web panel.",
    ],
    decisions: [
      "Chose Manifest V3 architecture and explicit background/content separation to align with modern browser extension constraints.",
      "Split volatile real-time concerns (presence, chat) from structured records to fit Firebase service strengths.",
      "Embedded the web panel in extension contexts where compact, focused interaction was needed.",
      "Documented co-located AI/engineering guidelines in-repo to keep implementation conventions consistent.",
    ],
    implementation: [
      "Injected quick-action UI into support interfaces for tasks like copying client/contact data and launching workflows.",
      "Implemented automation helpers for order-of-service flows and reusable response management.",
      "Built administrative features including departmental chat, response libraries, and utilities in the web panel.",
      "Added background notification handling and session-sharing between components.",
    ],
    challenges: [
      "Handling browser extension lifecycle limitations (e.g., service worker behavior) while keeping features reliable.",
      "Integrating with existing systems and UI surfaces that can change or impose security constraints (such as iframe/cookie behavior).",
      "Maintaining performance and usability in a tool used during live support work.",
    ],
    outcomes: [
      "A publicly documented, feature-rich ecosystem demonstrating end-to-end integration between extension and web app.",
      "Repository includes architecture diagrams, module breakdowns, and changelog history evidencing iterative development.",
      "Quantitative productivity impact is not publicly documented.",
    ],
    lessons: [
      "In operational tooling, reliability and low-friction interaction matter as much as feature count.",
      "Clear boundaries between background logic, UI, and external integrations simplify maintenance of extensions.",
      "Designing for existing workflows enables incremental automation without risky big-bang replacements.",
    ],
  },
  {
    slug: "sgp-migration-automator",
    title: "SGP Migration Automator",
    summary:
      "A Chrome extension that automates multi-step client migration tasks between SGP environments to reduce repetitive manual work.",
    status: "Professional",
    visibility: "Public",
    featured: true,
    domains: ["Automation", "Browser Tooling", "Integration"],
    stack: ["React", "TypeScript", "Vite", "Chrome Extension (MV3)", "CRXJS"],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/Vituali/extensao-migracao",
      },
    ],
    context:
      "Public tool built to support migration workflows between SGP systems, interacting directly with existing web interfaces.",
    problem:
      "Migrating clients between environments required repetitive, error-prone steps across multiple screens and systems.",
    constraints: [
      "Must operate within the target systems’ web UIs and their timing/behavior quirks.",
      "Actions need safeguards to avoid operating on the wrong client or context.",
      "Operator remains responsible for reviewing and confirming critical steps.",
    ],
    architecture: [
      "Manifest V3 Chrome extension with React/TypeScript UI and content-script driven automation.",
      "Modular libraries for SGP interaction, selectors, and storage/state synchronization.",
      "State persisted via browser extension storage to support multi-tab/operator workflows.",
    ],
    decisions: [
      "Used a sidebar-driven interaction model to keep automation controls close to the operator’s workflow.",
      "Implemented validation/identity checks before actions to reduce risk of incorrect operations.",
      "Encoded timing accommodations (e.g., delays where needed) based on observed system behavior.",
    ],
    implementation: [
      "Automated data collection across service/contract/network-related views.",
      "Supported provisioning-related steps and status monitoring to assist completion of migrations.",
      "Provided visual status feedback and modes to make progress and state explicit to the operator.",
    ],
    challenges: [
      "Dealing with variability and fragility of DOM-driven automation on legacy/third-party interfaces.",
      "Ensuring the tool accelerates work without hiding important verification steps from the human operator.",
    ],
    outcomes: [
      "A focused automation tool with documented features and versioned releases in the public repository.",
      "Operational time savings are not publicly quantified.",
    ],
    lessons: [
      "Defensive checks and explicit state are essential when automating against systems you don’t control.",
      "Good operator tooling augments human judgment instead of attempting full unattended control.",
    ],
  },
  {
    slug: "production-line-supervisor",
    title: "Intelligent Production Line Supervisor",
    summary:
      "An academic mechatronics project simulating an automated production line with real-time supervision and industrial performance indicators.",
    status: "Academic",
    visibility: "Private",
    featured: true,
    domains: ["Mechatronics", "Industrial Automation", "Software"],
    stack: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS", "Chart.js", "Firebase"],
    context:
      "Academic project from Mechatronics Engineering studies. The repository is private; this case study reflects the verified high-level description from the public profile.",
    problem:
      "Understanding and demonstrating industrial line behavior requires visibility into station states, faults, and performance indicators in real time.",
    constraints: [
      "Simulation context (not a deployed factory system).",
      "Needed to model multiple stations, failure scenarios, and KPI calculations coherently.",
    ],
    architecture: [
      "Web-based supervisory interface for a simulated multi-station production line.",
      "State management to represent machine states, events, and configurable scenarios.",
      "Visualization of line status and historical/real-time indicators.",
    ],
    decisions: [
      "Focused on live indicators such as availability, performance, quality, and OEE to connect software visualization with industrial engineering concepts.",
      "Included fault injection and configurable parameters to explore behavior under different scenarios.",
    ],
    implementation: [
      "Built a 2D line visualization with machine states, alerts, and metrics displays.",
      "Implemented configurable production speed and scenario controls for experimentation.",
    ],
    challenges: [
      "Keeping the simulation model understandable while representing multiple interacting stations and KPIs.",
    ],
    outcomes: [
      "A complete supervisory simulation demonstrating integration of software, visualization, and industrial metrics concepts.",
      "No public deployment or production measurements are claimed.",
    ],
    lessons: [
      "Good supervisory interfaces make system state and performance legible, which is foundational to automation and improvement.",
    ],
    evidenceNote:
      "High-level summary based on verified profile description; source is not publicly available.",
  },
];

export const archive: { title: string; description: string; stack: string[]; href?: string; note?: string }[] = [
  {
    title: "CRM–SGP (Projeto Comercial)",
    description:
      "Browser extension to transfer and assist structured data entry between CRM and SGP workflows, with operator review before submission.",
    stack: ["TypeScript", "React", "Vite", "Chrome Extension"],
    href: "https://github.com/Vituali/Projeto-Comercial",
    note: "Public repository; operational usage details not publicly quantified.",
  },
  {
    title: "SGP Audit & SVA Prototype",
    description:
      "Prototype extension exploring migration eligibility checks and SVA auditing flows across SGP environments.",
    stack: ["React", "TypeScript", "Vite", "Chrome Extension"],
    href: "https://github.com/Vituali/Projeto-auditoria-migracao",
  },
  {
    title: "AIClip",
    description:
      "Open-source Electron utility to combine project text files into structured output for review and AI-assisted debugging.",
    stack: ["Electron", "JavaScript", "Node.js"],
    href: "https://github.com/Vituali/AIClip",
  },
];

export const skillGroups = [
  {
    title: "Software Engineering",
    practical: [
      "TypeScript and JavaScript for web applications and tooling",
      "React and Next.js (App Router) for product interfaces",
      "Python for automation and service-side scripting",
      "REST APIs, data validation, and integration-oriented design",
    ],
    learning: ["Deeper backend architecture and distributed systems patterns"],
  },
  {
    title: "Systems & Integration",
    practical: [
      "Browser extensions (Chrome MV3) for workflow automation",
      "Integrating with existing web systems and operational tools",
      "Versioned contracts and schema-driven data exchange",
      "Role-based access and operational documentation practices",
    ],
    learning: ["Formal API governance and larger-scale integration topologies"],
  },
  {
    title: "Infrastructure & Data",
    practical: [
      "PostgreSQL and relational data modeling in project contexts",
      "Docker-based environments and CI/CD workflows (e.g., GitHub Actions)",
      "Firebase services (Auth, Realtime Database, Firestore) in application projects",
      "Linux and Windows operational environments",
    ],
    learning: ["Advanced observability, security hardening, and network automation"],
  },
  {
    title: "Networking & Operations",
    practical: [
      "Telecom/network fundamentals from operations work (FTTH, PPPoE, IPv4/IPv6, diagnostics)",
      "Translating operational needs into tooling and process improvements",
    ],
    learning: ["Deeper network automation and monitoring systems"],
  },
  {
    title: "Automation & Mechatronics",
    practical: [
      "Process analysis and automation of repetitive workflows",
      "Industrial supervision concepts and KPIs (e.g., OEE) in academic projects",
    ],
    learning: ["Embedded systems, robotics, and tighter software–hardware integration"],
  },
];
