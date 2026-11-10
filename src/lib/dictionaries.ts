import type { Locale } from "./i18n";

export type ProjectStatus = "Professional" | "Academic" | "Open source" | "Private";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  statusLabel: string;
  visibilityLabel: string;
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

export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    projectsTitleSuffix: string;
  };
  ui: {
    skipToContent: string;
    nav: { projects: string; approach: string; about: string; skills: string; contact: string; github: string };
    homeAria: string;
    heroEyebrow: string;
    heroIntro: string;
    ctaProjects: string;
    ctaAbout: string;
    focusTitle: string;
    focusItems: string[];
    role: string;
    focusNote: string;
    selectedWork: string;
    featuredTitle: string;
    featuredIntro: string;
    readCaseStudy: string;
    source: string;
    approachEyebrow: string;
    approachTitle: string;
    approachIntro: string;
    approachItems: { t: string; d: string }[];
    aboutEyebrow: string;
    aboutTitle: string;
    aboutIntro: string;
    aboutParagraphs: string[];
    verifiedBackground: string;
    facts: { label: string; value: string }[];
    skillsEyebrow: string;
    skillsTitle: string;
    skillsIntro: string;
    practical: string;
    developing: string;
    archiveEyebrow: string;
    archiveTitle: string;
    archiveIntro: string;
    repository: string;
    contactEyebrow: string;
    contactTitle: string;
    contactIntro: string;
    contactGithubDesc: string;
    contactLinkedinDesc: string;
    contactEmailTitle: string;
    contactEmailDesc: string;
    availableOnRequest: string;
    footerBuiltBy: string;
    backToProjects: string;
    evidenceNote: string;
    context: string;
    problem: string;
    constraints: string;
    architecture: string;
    decisions: string;
    implementation: string;
    challenges: string;
    outcomes: string;
    lessons: string;
    stack: string;
    notFoundCode: string;
    notFoundTitle: string;
    notFoundDesc: string;
    backHome: string;
    language: string;
  };
  projects: Project[];
  archive: { title: string; description: string; stack: string[]; href?: string; note?: string }[];
  skillGroups: { title: string; practical: string[]; learning: string[] }[];
};

const en: Dictionary = {
  meta: {
    homeTitle: "Moonflare Development — Engineering systems. Automating complexity.",
    homeDescription:
      "Victor Henrique builds software, integrations, and automation across telecom operations, web platforms, and engineering workflows.",
    projectsTitleSuffix: "Moonflare Development",
  },
  ui: {
    skipToContent: "Skip to content",
    nav: { projects: "Projects", approach: "Approach", about: "About", skills: "Skills", contact: "Contact", github: "GitHub" },
    homeAria: "Moonflare Development home",
    heroEyebrow: "Moonflare Development",
    heroIntro:
      "I’m Victor Henrique, an IT Solutions Analyst and Mechatronics Engineering student based in Teresópolis, Brazil. I design and build software, integrations, and automation that connect operational needs with reliable systems.",
    ctaProjects: "View projects",
    ctaAbout: "About me",
    focusTitle: "Focus",
    focusItems: [
      "Software engineering & systems architecture",
      "Workflow automation & browser tooling",
      "Telecom operations & network-aware systems",
      "Industrial supervision & mechatronics foundations",
    ],
    role: "IT Solutions Analyst · Mechatronics Engineering student",
    focusNote: "Working across software, infrastructure, and real operational environments.",
    selectedWork: "Selected work",
    featuredTitle: "Featured projects",
    featuredIntro:
      "Engineering case studies based on verified work. Private projects are described at a high level without confidential details; metrics are included only when publicly evidenced.",
    readCaseStudy: "Read case study →",
    source: "Source",
    approachEyebrow: "How I work",
    approachTitle: "Engineering approach",
    approachIntro:
      "I focus on understanding the real problem, designing for constraints, and building systems that can be operated and improved over time.",
    approachItems: [
      { t: "Problem discovery", d: "Start from the operational context: who uses the system, what breaks, what is manual, and what evidence defines success." },
      { t: "Process & system design", d: "Map workflows and boundaries before code. Prefer clear contracts, explicit state, and modules that match how the work actually happens." },
      { t: "Legacy integration", d: "Build alongside existing tools and interfaces instead of assuming clean-slate replacements. Automate incrementally and keep humans in control." },
      { t: "Automation with safeguards", d: "Automate repetitive steps, but validate context, surface state, and preserve review points for actions that matter." },
      { t: "Reliability & maintainability", d: "Favor understandable implementations, versioned interfaces, CI checks, and documentation so systems remain operable after delivery." },
      { t: "Measure and iterate", d: "Use feedback and observable signals to improve. When evidence is unavailable, be explicit rather than guessing." },
    ],
    aboutEyebrow: "Background",
    aboutTitle: "About",
    aboutIntro: "Multidisciplinary by practice: I work where software, infrastructure, and operations meet.",
    aboutParagraphs: [
      "I’m a Mechatronics Engineering student and IT Solutions Analyst at ATI Internet (Teresópolis, Brazil). My path started in telecom technical support and network operations and grew into building internal platforms, integrations, and automation for real operational needs.",
      "That background shapes how I engineer: I value understanding the environment, constraints, and failure modes before proposing solutions. I’m comfortable moving between application code, data, infrastructure, and the realities of existing systems and teams.",
      "I’m interested in international opportunities, particularly in the Netherlands and Europe, where I can contribute as an engineer who bridges software, systems thinking, and operational reliability.",
    ],
    verifiedBackground: "Verified background",
    facts: [
      { label: "Current role", value: "IT Solutions Analyst, ATI Internet" },
      { label: "Education", value: "Mechatronics Engineering student" },
      { label: "Location", value: "Teresópolis, RJ, Brazil" },
      { label: "Domains", value: "Software, systems architecture, networking, infrastructure, automation, mechatronics" },
    ],
    skillsEyebrow: "Capabilities",
    skillsTitle: "Skills by domain",
    skillsIntro:
      "Grouped by area and separated into practical experience and topics I’m actively developing. I avoid rating skills numerically.",
    practical: "Practical experience",
    developing: "Currently developing",
    archiveEyebrow: "More work",
    archiveTitle: "Project archive",
    archiveIntro:
      "Additional public and prototype work. Included for completeness; depth varies by repository maturity and available evidence.",
    repository: "Repository →",
    contactEyebrow: "Get in touch",
    contactTitle: "Contact",
    contactIntro: "Open to engineering conversations and international opportunities. I prefer direct, verified channels.",
    contactGithubDesc: "Repositories, code, and public work.",
    contactLinkedinDesc: "Professional profile and messages.",
    contactEmailTitle: "Email",
    contactEmailDesc: "A public email address is not listed in verified sources; please reach out via LinkedIn or GitHub.",
    availableOnRequest: "Available on request",
    footerBuiltBy: "Built by Victor Henrique.",
    backToProjects: "← Back to projects",
    evidenceNote: "Evidence note:",
    context: "Context",
    problem: "Problem",
    constraints: "Constraints",
    architecture: "Architecture",
    decisions: "Key decisions",
    implementation: "Implementation",
    challenges: "Challenges",
    outcomes: "Outcomes (verified)",
    lessons: "Lessons learned",
    stack: "Stack",
    notFoundCode: "404",
    notFoundTitle: "Page not found",
    notFoundDesc:
      "The page you’re looking for doesn’t exist or has moved. You can return to the homepage to explore projects and background.",
    backHome: "Back to home",
    language: "Language",
  },
  projects: [
    {
      slug: "nexus",
      title: "Nexus — Integrated Telecom Operations Platform",
      summary:
        "A private, multi-service platform for telecom operations combining CRM workflows, knowledge management, network visibility, and operational automation.",
      statusLabel: "Professional",
      visibilityLabel: "Private",
      featured: true,
      domains: ["Software", "Systems Architecture", "Infrastructure", "Automation"],
      stack: ["Next.js", "React", "TypeScript", "Python", "PostgreSQL", "Drizzle ORM", "Docker", "GitHub Actions", "Zod"],
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
      statusLabel: "Professional",
      visibilityLabel: "Public",
      featured: true,
      domains: ["Software", "Automation", "Systems Integration"],
      stack: ["TypeScript", "React", "Vite", "Chrome Extension (MV3)", "Firebase (Auth, Realtime Database, Firestore)"],
      links: [{ label: "GitHub repository", href: "https://github.com/Vituali/ati" }],
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
      statusLabel: "Professional",
      visibilityLabel: "Public",
      featured: true,
      domains: ["Automation", "Browser Tooling", "Integration"],
      stack: ["React", "TypeScript", "Vite", "Chrome Extension (MV3)", "CRXJS"],
      links: [{ label: "GitHub repository", href: "https://github.com/Vituali/extensao-migracao" }],
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
      statusLabel: "Academic",
      visibilityLabel: "Private",
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
  ],
  archive: [
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
  ],
  skillGroups: [
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
  ],
};

const pt: Dictionary = {
  meta: {
    homeTitle: "Moonflare Development — Engenharia de sistemas. Automatizando a complexidade.",
    homeDescription:
      "Victor Henrique desenvolve software, integrações e automações em operações de telecom, plataformas web e fluxos de engenharia.",
    projectsTitleSuffix: "Moonflare Development",
  },
  ui: {
    skipToContent: "Ir para o conteúdo",
    nav: { projects: "Projetos", approach: "Abordagem", about: "Sobre", skills: "Competências", contact: "Contato", github: "GitHub" },
    homeAria: "Página inicial da Moonflare Development",
    heroEyebrow: "Moonflare Development",
    heroIntro:
      "Sou Victor Henrique, Analista de Soluções de TI e estudante de Engenharia Mecatrônica em Teresópolis (RJ). Projeto e desenvolvo software, integrações e automações que conectam necessidades operacionais a sistemas confiáveis.",
    ctaProjects: "Ver projetos",
    ctaAbout: "Sobre mim",
    focusTitle: "Foco",
    focusItems: [
      "Engenharia de software e arquitetura de sistemas",
      "Automação de fluxos e ferramentas para navegador",
      "Operações de telecom e sistemas orientados à rede",
      "Supervisão industrial e fundamentos de mecatrônica",
    ],
    role: "Analista de Soluções de TI · Estudante de Engenharia Mecatrônica",
    focusNote: "Atuando na interseção entre software, infraestrutura e ambientes operacionais reais.",
    selectedWork: "Trabalhos selecionados",
    featuredTitle: "Projetos em destaque",
    featuredIntro:
      "Estudos de caso de engenharia baseados em trabalhos verificados. Projetos privados são descritos em alto nível, sem detalhes confidenciais; métricas aparecem apenas quando há evidência pública.",
    readCaseStudy: "Ler estudo de caso →",
    source: "Código-fonte",
    approachEyebrow: "Como trabalho",
    approachTitle: "Abordagem de engenharia",
    approachIntro:
      "Foco em entender o problema real, projetar para as restrições e construir sistemas que possam ser operados e evoluídos ao longo do tempo.",
    approachItems: [
      { t: "Descoberta do problema", d: "Partir do contexto operacional: quem usa o sistema, o que falha, o que é manual e quais evidências definem sucesso." },
      { t: "Desenho de processos e sistemas", d: "Mapear fluxos e fronteiras antes do código. Priorizar contratos claros, estado explícito e módulos alinhados ao trabalho real." },
      { t: "Integração com legado", d: "Construir junto a ferramentas e interfaces existentes, em vez de supor substituições completas. Automatizar de forma incremental e manter pessoas no controle." },
      { t: "Automação com salvaguardas", d: "Automatizar etapas repetitivas, mas validar contexto, expor estado e preservar pontos de revisão para ações que importam." },
      { t: "Confiabilidade e manutenibilidade", d: "Preferir implementações compreensíveis, interfaces versionadas, verificações em CI e documentação para que os sistemas permaneçam operáveis." },
      { t: "Medir e iterar", d: "Usar feedback e sinais observáveis para melhorar. Quando não há evidência, ser explícito em vez de presumir." },
    ],
    aboutEyebrow: "Trajetória",
    aboutTitle: "Sobre",
    aboutIntro: "Multidisciplinar na prática: atuo onde software, infraestrutura e operações se encontram.",
    aboutParagraphs: [
      "Sou estudante de Engenharia Mecatrônica e Analista de Soluções de TI na ATI Internet (Teresópolis, RJ). Minha trajetória começou no suporte técnico e em operações de rede em telecom e evoluiu para a construção de plataformas internas, integrações e automações para necessidades operacionais reais.",
      "Essa experiência molda minha forma de fazer engenharia: valorizo entender o ambiente, as restrições e os modos de falha antes de propor soluções. Tenho facilidade em transitar entre código de aplicação, dados, infraestrutura e a realidade de sistemas e equipes existentes.",
      "Tenho interesse em oportunidades internacionais, especialmente nos Países Baixos e na Europa, onde possa contribuir como engenheiro que conecta software, pensamento sistêmico e confiabilidade operacional.",
    ],
    verifiedBackground: "Formação e atuação verificadas",
    facts: [
      { label: "Cargo atual", value: "Analista de Soluções de TI, ATI Internet" },
      { label: "Formação", value: "Estudante de Engenharia Mecatrônica" },
      { label: "Localização", value: "Teresópolis, RJ, Brasil" },
      { label: "Áreas", value: "Software, arquitetura de sistemas, redes, infraestrutura, automação, mecatrônica" },
    ],
    skillsEyebrow: "Capacidades",
    skillsTitle: "Competências por domínio",
    skillsIntro:
      "Agrupadas por área e separadas entre experiência prática e temas em desenvolvimento. Evito classificar competências com notas numéricas.",
    practical: "Experiência prática",
    developing: "Em desenvolvimento",
    archiveEyebrow: "Mais trabalhos",
    archiveTitle: "Arquivo de projetos",
    archiveIntro:
      "Trabalhos públicos e protótipos adicionais. Incluídos para completude; o nível de detalhe varia conforme a maturidade do repositório e as evidências disponíveis.",
    repository: "Repositório →",
    contactEyebrow: "Contato",
    contactTitle: "Fale comigo",
    contactIntro: "Aberto a conversas de engenharia e oportunidades internacionais. Prefiro canais diretos e verificados.",
    contactGithubDesc: "Repositórios, código e trabalhos públicos.",
    contactLinkedinDesc: "Perfil profissional e mensagens.",
    contactEmailTitle: "E-mail",
    contactEmailDesc: "Um endereço de e-mail público não consta nas fontes verificadas; entre em contato pelo LinkedIn ou GitHub.",
    availableOnRequest: "Disponível mediante contato",
    footerBuiltBy: "Desenvolvido por Victor Henrique.",
    backToProjects: "← Voltar aos projetos",
    evidenceNote: "Nota sobre evidências:",
    context: "Contexto",
    problem: "Problema",
    constraints: "Restrições",
    architecture: "Arquitetura",
    decisions: "Decisões principais",
    implementation: "Implementação",
    challenges: "Desafios",
    outcomes: "Resultados (verificados)",
    lessons: "Lições aprendidas",
    stack: "Tecnologias",
    notFoundCode: "404",
    notFoundTitle: "Página não encontrada",
    notFoundDesc:
      "A página que você procura não existe ou foi movida. Você pode voltar à página inicial para explorar projetos e trajetória.",
    backHome: "Voltar ao início",
    language: "Idioma",
  },
  projects: [
    {
      slug: "nexus",
      title: "Nexus — Plataforma Integrada de Operações de Telecom",
      summary:
        "Plataforma privada e multi-serviços para operações de telecom, combinando fluxos de CRM, gestão do conhecimento, visibilidade de rede e automação operacional.",
      statusLabel: "Profissional",
      visibilityLabel: "Privado",
      featured: true,
      domains: ["Software", "Arquitetura de Sistemas", "Infraestrutura", "Automação"],
      stack: ["Next.js", "React", "TypeScript", "Python", "PostgreSQL", "Drizzle ORM", "Docker", "GitHub Actions", "Zod"],
      context:
        "Trabalho interno ativo na ATI Internet. O Nexus é descrito aqui em alto nível com base no perfil público e na documentação de repositório verificada; o código-fonte e detalhes operacionais são privados.",
      problem:
        "As operações de telecom envolviam fluxos fragmentados entre atendimento, gestão comercial, dados de rede e documentação interna, gerando esforço manual e visibilidade operacional inconsistente.",
      constraints: [
        "Necessidade de integrar-se a sistemas e processos operacionais existentes, em vez de substituí-los de uma só vez.",
        "O tratamento de dados operacionais exige cuidado: os fluxos devem evitar expor informações pessoais ou sensíveis de clientes.",
        "Implantações e mudanças precisam ser confiáveis em um ambiente de produção real.",
      ],
      architecture: [
        "CRM web construído com Next.js e React para fluxos operacionais, comerciais e de métricas.",
        "Serviços em Python (incluindo o bot Fibrinha) para automação, coleta de dados e integrações.",
        "PostgreSQL como banco de dados principal, com acesso orientado a esquema.",
        "Contratos versionados entre serviços (esquemas/amostras JSON) para formalizar fronteiras de comunicação.",
        "Implantação baseada em Docker, com automação de CI/CD e runners auto-hospedados para entrega em produção.",
        "Componentes de extensão para Chrome para conectar fluxos do navegador a sistemas internos quando apropriado.",
      ],
      decisions: [
        "Adoção de uma abordagem contract-first na comunicação entre serviços para reduzir divergências de integração.",
        "Separação de responsabilidades entre módulos web, bot, extensão e infraestrutura em um monorepo.",
        "Uso de controle de acesso por papéis e gates de documentação para apoiar governança e manutenibilidade.",
        "Priorização de telemetria operacional agregada em vez de dados pessoais nas integrações.",
      ],
      implementation: [
        "Implementação de módulos para fluxos comerciais, visões de métricas/mercado, visibilidade de inventário CS/NOC, acompanhamento de tarefas e base de conhecimento integrada.",
        "Construção de fluxos de automação e ingestão que enviam dados estruturados e agregados à plataforma.",
        "Estabelecimento de verificações em CI, fluxos de implantação e práticas de documentação operacional.",
      ],
      challenges: [
        "Evoluir a arquitetura enquanto a plataforma é utilizada ativamente nas operações.",
        "Conectar sistemas legados e modernos sem interromper o trabalho diário.",
        "Equilibrar velocidade de entrega com confiabilidade, controle de acesso e manutenibilidade.",
      ],
      outcomes: [
        "Direção unificada de plataforma interna que reúne múltiplos domínios operacionais em um único sistema.",
        "Práticas de engenharia documentadas (contratos, CI/CD, estrutura modular) que sustentam o desenvolvimento contínuo.",
        "Métricas de negócio específicas não são divulgadas publicamente.",
      ],
      lessons: [
        "Contratos e fronteiras claras tornam sistemas operacionais distribuídos mais fáceis de evoluir.",
        "A automação gera mais valor quando se encaixa nos fluxos humanos existentes, em vez de confrontá-los.",
        "Documentação e governança fazem parte do sistema, não são um complemento posterior.",
      ],
      evidenceNote:
        "Resumo de alto nível apenas. Verificado por descrição pública de perfil e documentação de repositório; detalhes operacionais confidenciais foram omitidos.",
    },
    {
      slug: "ati-v2",
      title: "ATI V2 — Ecossistema de Operações de Suporte",
      summary:
        "Ecossistema em monorepo que combina uma extensão para Chrome e um painel administrativo web para agilizar fluxos de suporte em telecom.",
      statusLabel: "Profissional",
      visibilityLabel: "Público",
      featured: true,
      domains: ["Software", "Automação", "Integração de Sistemas"],
      stack: ["TypeScript", "React", "Vite", "Extensão Chrome (MV3)", "Firebase (Auth, Realtime Database, Firestore)"],
      links: [{ label: "Repositório no GitHub", href: "https://github.com/Vituali/ati" }],
      context:
        "Repositório público desenvolvido para o contexto real de operações de suporte na ATI Internet, integrando-se a ferramentas existentes como ChatMix e SGP.",
      problem:
        "Agentes de suporte precisavam executar ações repetitivas em múltiplos sistemas, gerenciar respostas e acessar utilitários operacionais rapidamente, sem trocas constantes de contexto.",
      constraints: [
        "Execução como extensão de navegador em ambiente Manifest V3, com as restrições de service worker.",
        "Necessidade de interagir com interfaces web existentes (de terceiros/internas), em vez de substituí-las.",
        "Experiência responsiva e contextual que não interrompa o fluxo principal do operador.",
      ],
      architecture: [
        "Monorepo com duas aplicações principais: uma extensão para Chrome (MV3) e um painel administrativo em React.",
        "Componentes da extensão incluem lógica de background/service worker, content scripts e superfícies de UI (popup/integrações laterais).",
        "Firebase como backend: Authentication, Realtime Database para presença/chat/notificações em tempo real e Firestore para dados estruturados.",
        "Padrões de ponte de mensagens e sincronização de sessão/SSO entre extensão e painel web embarcado.",
      ],
      decisions: [
        "Adoção da arquitetura Manifest V3 com separação explícita entre background e conteúdo, alinhada às restrições modernas de extensões.",
        "Separação entre preocupações voláteis em tempo real (presença, chat) e registros estruturados, conforme os pontos fortes dos serviços Firebase.",
        "Incorporação do painel web em contextos da extensão onde uma interação compacta e focada era necessária.",
        "Documentação de diretrizes de engenharia/IA no repositório para manter consistência de implementação.",
      ],
      implementation: [
        "Injeção de ações rápidas nas interfaces de suporte para tarefas como copiar dados de cliente/contato e iniciar fluxos.",
        "Implementação de auxiliares de automação para fluxos de ordens de serviço e gestão de respostas reutilizáveis.",
        "Construção de recursos administrativos, incluindo chat departamental, bibliotecas de respostas e utilitários no painel web.",
        "Adição de tratamento de notificações em segundo plano e compartilhamento de sessão entre componentes.",
      ],
      challenges: [
        "Lidar com limitações do ciclo de vida de extensões (por exemplo, comportamento do service worker) mantendo a confiabilidade.",
        "Integrar-se a sistemas e superfícies de UI existentes que podem mudar ou impor restrições de segurança (como comportamento de iframes/cookies).",
        "Manter desempenho e usabilidade em uma ferramenta usada durante atendimentos em tempo real.",
      ],
      outcomes: [
        "Ecossistema público e bem documentado que demonstra integração ponta a ponta entre extensão e aplicação web.",
        "Repositório com diagramas de arquitetura, detalhamento de módulos e histórico de mudanças que evidenciam evolução iterativa.",
        "Impacto quantitativo de produtividade não está documentado publicamente.",
      ],
      lessons: [
        "Em ferramentas operacionais, confiabilidade e interação sem atrito importam tanto quanto a quantidade de funcionalidades.",
        "Fronteiras claras entre lógica de background, UI e integrações externas simplificam a manutenção de extensões.",
        "Projetar para fluxos existentes permite automação incremental sem substituições arriscadas de uma só vez.",
      ],
    },
    {
      slug: "sgp-migration-automator",
      title: "SGP Migration Automator",
      summary:
        "Extensão para Chrome que automatiza etapas de migração de clientes entre ambientes SGP, reduzindo trabalho manual repetitivo.",
      statusLabel: "Profissional",
      visibilityLabel: "Público",
      featured: true,
      domains: ["Automação", "Ferramentas de Navegador", "Integração"],
      stack: ["React", "TypeScript", "Vite", "Extensão Chrome (MV3)", "CRXJS"],
      links: [{ label: "Repositório no GitHub", href: "https://github.com/Vituali/extensao-migracao" }],
      context:
        "Ferramenta pública criada para apoiar fluxos de migração entre sistemas SGP, interagindo diretamente com as interfaces web existentes.",
      problem:
        "A migração de clientes entre ambientes exigia etapas repetitivas e sujeitas a erro em múltiplas telas e sistemas.",
      constraints: [
        "Operar dentro das interfaces web dos sistemas-alvo e de suas particularidades de tempo/comportamento.",
        "Necessidade de salvaguardas para evitar ações no cliente ou contexto incorreto.",
        "O operador permanece responsável por revisar e confirmar etapas críticas.",
      ],
      architecture: [
        "Extensão Chrome Manifest V3 com UI em React/TypeScript e automação orientada por content scripts.",
        "Bibliotecas modulares para interação com o SGP, seletores e sincronização de estado/armazenamento.",
        "Estado persistido no armazenamento da extensão para suportar fluxos com múltiplas abas.",
      ],
      decisions: [
        "Uso de uma interface lateral para manter os controles de automação próximos ao fluxo do operador.",
        "Implementação de validações e verificações de identidade antes das ações para reduzir riscos operacionais.",
        "Ajustes de temporização (quando necessários) com base no comportamento observado dos sistemas.",
      ],
      implementation: [
        "Automação da coleta de dados em telas de serviço, contrato e informações relacionadas à rede.",
        "Apoio a etapas de provisionamento e monitoramento de status para auxiliar a conclusão das migrações.",
        "Feedback visual de estado e modos de operação para tornar o progresso explícito ao operador.",
      ],
      challenges: [
        "Lidar com a variabilidade e fragilidade da automação baseada em DOM em interfaces legadas/de terceiros.",
        "Garantir que a ferramenta acelere o trabalho sem ocultar etapas importantes de verificação humana.",
      ],
      outcomes: [
        "Ferramenta de automação focada, com funcionalidades documentadas e versões publicadas no repositório público.",
        "Ganhos de tempo operacionais não são quantificados publicamente.",
      ],
      lessons: [
        "Verificações defensivas e estado explícito são essenciais ao automatizar sistemas que você não controla.",
        "Boas ferramentas para operadores ampliam o julgamento humano, em vez de tentar controle totalmente autônomo.",
      ],
    },
    {
      slug: "production-line-supervisor",
      title: "Supervisor Inteligente de Linha de Produção",
      summary:
        "Projeto acadêmico de mecatrônica que simula uma linha de produção automatizada com supervisão em tempo real e indicadores de desempenho industrial.",
      statusLabel: "Acadêmico",
      visibilityLabel: "Privado",
      featured: true,
      domains: ["Mecatrônica", "Automação Industrial", "Software"],
      stack: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS", "Chart.js", "Firebase"],
      context:
        "Projeto acadêmico do curso de Engenharia Mecatrônica. O repositório é privado; este estudo de caso reflete a descrição de alto nível verificada no perfil público.",
      problem:
        "Compreender e demonstrar o comportamento de uma linha industrial exige visibilidade, em tempo real, dos estados das estações, falhas e indicadores de desempenho.",
      constraints: [
        "Contexto de simulação (não se trata de um sistema implantado em fábrica).",
        "Necessidade de modelar múltiplas estações, cenários de falha e cálculos de indicadores de forma coerente.",
      ],
      architecture: [
        "Interface supervisória web para uma linha de produção simulada com múltiplas estações.",
        "Gerenciamento de estado para representar estados das máquinas, eventos e cenários configuráveis.",
        "Visualização do status da linha e de indicadores históricos/em tempo real.",
      ],
      decisions: [
        "Foco em indicadores em tempo real, como disponibilidade, desempenho, qualidade e OEE, conectando visualização de software a conceitos de engenharia industrial.",
        "Inclusão de injeção de falhas e parâmetros configuráveis para explorar o comportamento em diferentes cenários.",
      ],
      implementation: [
        "Construção de uma visualização 2D da linha com estados das máquinas, alertas e exibição de métricas.",
        "Implementação de velocidade de produção configurável e controles de cenário para experimentação.",
      ],
      challenges: [
        "Manter o modelo de simulação compreensível ao representar múltiplas estações e indicadores interdependentes.",
      ],
      outcomes: [
        "Simulação supervisória completa que demonstra a integração entre software, visualização e conceitos de métricas industriais.",
        "Nenhuma implantação pública ou medição em produção é reivindicada.",
      ],
      lessons: [
        "Boas interfaces de supervisão tornam o estado e o desempenho do sistema legíveis, o que é fundamental para automação e melhoria contínua.",
      ],
      evidenceNote:
        "Resumo de alto nível baseado na descrição verificada do perfil público; o código-fonte não está disponível publicamente.",
    },
  ],
  archive: [
    {
      title: "CRM–SGP (Projeto Comercial)",
      description:
        "Extensão de navegador para transferir e auxiliar o preenchimento estruturado de dados entre fluxos de CRM e SGP, com revisão do operador antes do envio.",
      stack: ["TypeScript", "React", "Vite", "Extensão Chrome"],
      href: "https://github.com/Vituali/Projeto-Comercial",
      note: "Repositório público; detalhes de uso operacional não são quantificados publicamente.",
    },
    {
      title: "Protótipo de Auditoria SGP & SVA",
      description:
        "Extensão protótipo que explora verificações de elegibilidade para migração e fluxos de auditoria de SVA em ambientes SGP.",
      stack: ["React", "TypeScript", "Vite", "Extensão Chrome"],
      href: "https://github.com/Vituali/Projeto-auditoria-migracao",
    },
    {
      title: "AIClip",
      description:
        "Utilitário desktop open source em Electron para combinar arquivos de texto de projetos em uma saída estruturada para revisão e depuração assistida por IA.",
      stack: ["Electron", "JavaScript", "Node.js"],
      href: "https://github.com/Vituali/AIClip",
    },
  ],
  skillGroups: [
    {
      title: "Engenharia de Software",
      practical: [
        "TypeScript e JavaScript para aplicações web e ferramentas",
        "React e Next.js (App Router) para interfaces de produto",
        "Python para automação e scripts no lado de serviços",
        "APIs REST, validação de dados e design orientado à integração",
      ],
      learning: ["Arquitetura backend e padrões de sistemas distribuídos em maior profundidade"],
    },
    {
      title: "Sistemas e Integração",
      practical: [
        "Extensões de navegador (Chrome MV3) para automação de fluxos",
        "Integração com sistemas web e ferramentas operacionais existentes",
        "Contratos versionados e troca de dados orientada a esquemas",
        "Controle de acesso por papéis e práticas de documentação operacional",
      ],
      learning: ["Governança formal de APIs e topologias de integração em maior escala"],
    },
    {
      title: "Infraestrutura e Dados",
      practical: [
        "PostgreSQL e modelagem relacional em contextos de projeto",
        "Ambientes baseados em Docker e fluxos de CI/CD (ex.: GitHub Actions)",
        "Serviços Firebase (Auth, Realtime Database, Firestore) em projetos de aplicação",
        "Ambientes operacionais Linux e Windows",
      ],
      learning: ["Observabilidade avançada, endurecimento de segurança e automação de redes"],
    },
    {
      title: "Redes e Operações",
      practical: [
        "Fundamentos de redes/telecom no trabalho operacional (FTTH, PPPoE, IPv4/IPv6, diagnóstico)",
        "Tradução de necessidades operacionais em ferramentas e melhorias de processo",
      ],
      learning: ["Automação e sistemas de monitoramento de redes em maior profundidade"],
    },
    {
      title: "Automação e Mecatrônica",
      practical: [
        "Análise de processos e automação de fluxos repetitivos",
        "Conceitos de supervisão industrial e indicadores (ex.: OEE) em projetos acadêmicos",
      ],
      learning: ["Sistemas embarcados, robótica e integração mais estreita entre software e hardware"],
    },
  ],
};

export const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
