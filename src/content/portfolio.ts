import type { Portfolio } from "@/lib/types";

/**
 * Trevor Achura — portfolio content (v1.0).
 *
 * Source: owner's master build prompt and résumé (November 2026).
 * Anything not yet verified is left undefined or marked `verified: false`
 * and is listed in docs/OPEN_FACTS.md. Do not fill gaps with guesses.
 */
export const portfolio = {
  site: {
    url: "https://trevor.flameconnect.tech",
    title: "Trevor Achura — Enterprise AI & Automation Consultant",
    description:
      "Trevor Achura is a Kampala-based Enterprise AI & Automation Consultant and full-stack engineer sharing practical perspectives on AI, automation and digital transformation for African organisations.",
    locale: "en_UG",
    keywords: [
      "Trevor Achura",
      "AI in business",
      "AI in Africa",
      "business automation",
      "full-stack engineer",
      "digital transformation",
      "Kampala",
      "Uganda",
      "Flame Connect",
    ],
  },

  profile: {
    name: "Trevor Achura",
    headline:
      "Enterprise AI & Automation Consultant | Full-Stack Engineer | Business Technology Practitioner",
    heroStatement: "Turning business challenges into intelligent digital solutions.",
    supportingCopy:
      "I work at the intersection of artificial intelligence, software engineering, automation and strategic digital communications — helping leaders see where technology creates real value, then building it with them.",
    positioning: [
      "AI in Business",
      "Software Engineering",
      "Digital Transformation",
      "Business Automation",
    ],
    location: "Kampala, Uganda",
    // portrait: { src: "/portrait/trevor-achura.jpg", alt: "Trevor Achura", approved: true },
  },

  navigation: [
    { label: "Perspectives", href: "#perspectives" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Learning", href: "#learning" },
    { label: "Contact", href: "#contact" },
  ],

  about: {
    eyebrow: "About",
    title: "Business first. Then the technology that serves it.",
    paragraphs: [
      "My work started in visual communication — designing for brands, hospitality marketing and digital campaigns. That taught me something I still rely on: every message exists to move a business goal, and every goal depends on how the work behind it actually gets done.",
      "That question pulled me from how organisations present themselves to how they operate. I now spend my time on recruitment workflows, learning platforms, role-based dashboards and the processes they support — and on building the software myself, with Next.js, TypeScript and Supabase.",
      "I approach technology through the business challenge first: where time is lost, where decisions lack information, where people need a better tool. Then I design, build and help teams adopt something that measurably improves the work.",
    ],
    pillars: [
      {
        title: "Business understanding",
        body: "Start from the operational problem, the people involved and the value worth creating.",
      },
      {
        title: "Creative communication",
        body: "Make ideas clear — to leadership, to users and to the teams adopting something new.",
      },
      {
        title: "Hands-on engineering",
        body: "Design and build the working solution, not just the recommendation.",
      },
    ],
  },

  expertise: [
    {
      id: "ai-in-business",
      index: "01",
      title: "Artificial Intelligence in Business",
      summary: "Finding where AI genuinely helps — and applying it responsibly.",
      value:
        "Leaders get a clear view of realistic AI opportunities, grounded in their own workflows rather than hype.",
      capabilities: [
        "AI readiness and opportunity discovery",
        "Business-focused AI applications",
        "Responsible AI adoption",
        "AI-enabled workflows",
        "Intelligent digital tools",
      ],
    },
    {
      id: "business-automation",
      index: "02",
      title: "Business Automation",
      summary: "Mapping how work flows today, then removing the friction.",
      value:
        "Teams spend less time on repetitive steps and gain reliable tracking of the work that matters.",
      capabilities: [
        "Process mapping",
        "Workflow automation",
        "Operational tracking",
        "Low-code prototyping",
        "Systems integration concepts",
        "Efficiency improvement",
      ],
    },
    {
      id: "full-stack-engineering",
      index: "03",
      title: "Full-Stack Software Engineering",
      summary: "Designing and building web applications and business platforms.",
      value:
        "Organisations get maintainable, role-aware software built around how their people actually work.",
      capabilities: [
        "Web applications",
        "Business platforms",
        "Next.js and TypeScript",
        "Application architecture",
        "Supabase and database-backed systems",
        "Vercel deployment",
        "Role-based user experiences",
      ],
    },
    {
      id: "digital-transformation",
      index: "04",
      title: "Digital Transformation",
      summary: "Turning business needs into clear requirements and adopted systems.",
      value:
        "Technology investments are scoped around real processes and supported through adoption.",
      capabilities: [
        "Business technology discovery",
        "Digital process redesign",
        "System requirements",
        "Technology adoption",
        "Stakeholder collaboration",
        "Business dashboards",
      ],
    },
    {
      id: "digital-communications",
      index: "05",
      title: "Digital Communications & Brand Technology",
      summary: "Bringing strategy, brand and web experience together.",
      value:
        "Brands present a consistent, credible story — and can measure how it performs.",
      capabilities: [
        "Digital strategy",
        "Corporate communications",
        "Brand identity",
        "Web experience",
        "Digital analytics",
        "Creative technology",
      ],
    },
    {
      id: "technology-enablement",
      index: "06",
      title: "Strategy, Learning & Technology Enablement",
      summary: "Helping teams understand and confidently use new technology.",
      value:
        "People adopt new tools faster because they understand why — and how — to use them.",
      capabilities: [
        "Business presentations",
        "Practical technology demonstrations",
        "AI adoption guidance",
        "Team enablement",
        "Digital skills",
        "Stakeholder communication",
      ],
    },
  ],

  skills: [
    {
      title: "Development",
      tier: "core",
      items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Data & Platforms",
      tier: "core",
      items: [
        "Supabase",
        "Vercel",
        "Business dashboards",
        "API integrations",
        "Database-backed workflows",
      ],
    },
    {
      title: "Web & No-Code",
      tier: "core",
      items: ["WordPress", "AppSheet", "Website management", "Low-code prototyping"],
    },
    {
      title: "Marketing & Creative",
      tier: "earlier",
      items: [
        "Google Analytics",
        "Google Ads",
        "Meta Business Suite",
        "Canva",
        "CapCut",
        "SEMrush",
        "Ahrefs",
        "Mailchimp",
      ],
    },
  ],

  experience: [
    {
      id: "strategic-engagement",
      featured: true,
      organisation: {
        name: "Strategic Engagement Limited",
        mark: "SE",
        website: { url: "https://se.holdings", verified: true },
      },
      // Formal title and dates pending owner verification — do not invent.
      areaOfWork: "Digital Communications, Business Technology & Digital Transformation",
      summary:
        "Contributing to corporate digital communications, brand systems and technology initiatives.",
      responsibilities: [
        "Corporate digital communications and brand presentation",
        "Website experience and service-page improvements",
        "Recruitment workflow digitisation",
        "Learning management systems",
        "Business process design",
        "Role-based dashboards",
        "Digital platform implementation",
        "Technology adoption and cross-functional collaboration",
      ],
    },
    {
      id: "flame-connect",
      featured: true,
      organisation: {
        name: "Flame Connect",
        mark: "FC",
        website: { url: "https://flameconnect.tech", verified: true },
      },
      role: "Founder",
      current: true,
      summary:
        "An AI Centre of Change focused on practical AI for African progress — Digitizing Africa.",
      responsibilities: [
        "AI in business",
        "Workflow automation",
        "Custom digital solutions",
        "Business technology consulting",
        "Digital transformation",
        "Practical software innovation",
      ],
    },
    {
      id: "flame-creators",
      organisation: { name: "Flame Creators", mark: "FCr" },
      role: "Founder / Online Agency Lead",
      period: "Jan 2022 – Present",
      current: true,
      note: "A separate business from Flame Connect.",
      summary:
        "Leading an online creative agency delivering digital marketing, design and multimedia work for clients.",
      responsibilities: [
        "Digital marketing",
        "Graphic design",
        "Content creation",
        "Brand communication",
        "Client project delivery",
        "Multimedia production",
        "Digital strategy",
      ],
    },
    {
      id: "green-wood-foundation",
      organisation: { name: "Green Wood Foundation", mark: "GW" },
      role: "Digital Marketer",
      period: "Feb 2025 – Present",
      current: true,
      summary:
        "Visual storytelling and campaign strategy for economic development communications.",
      responsibilities: [
        "Visual storytelling",
        "Campaign strategy",
        "Economic development communications",
        "Geographic campaign targeting",
        "Digital performance measurement",
        "A/B testing",
      ],
      outcomes: [
        {
          figure: "75%+",
          label: "Growth in social-media impressions and membership within 90 days",
          source: "Résumé-documented",
        },
      ],
    },
    {
      id: "yeka-organic-farms",
      organisation: { name: "Yeka Organic Farms", mark: "YO" },
      role: "Digital Marketer",
      period: "Apr 2025 – Present",
      current: true,
      summary:
        "Social-media growth, video performance and audience development for an organic farming brand.",
      responsibilities: [
        "Social media growth strategies",
        "Digital analytics",
        "Campaign improvement",
        "Video content performance",
        "Audience development",
      ],
      outcomes: [
        {
          figure: "37.5%",
          label: "LinkedIn follower growth",
          source: "Résumé-documented",
        },
        {
          figure: "18.7K",
          label: "YouTube views and 319 watch hours over 28 days",
          source: "Résumé-documented",
        },
      ],
    },
    {
      id: "mada-hotels",
      organisation: { name: "Mada Hotels — Kampala Nile Resort", mark: "MH" },
      role: "Graphic Designer",
      period: "May 2021 – Nov 2023",
      summary: "Creative support for hospitality marketing and brand visibility.",
      responsibilities: [
        "Hospitality marketing graphics",
        "Promotional design",
        "Brand visibility",
        "Visual communication materials",
        "Creative support for marketing activities",
      ],
    },
  ],

  engagements: [
    {
      id: "freelancers-summit-2024",
      name: "Freelancers Summit 2024",
      description:
        "Multimedia design and social-media analytics support, including reels, live quotes and content scheduling.",
    },
    {
      id: "enhance-talks",
      name: "Enhance Talks",
      description:
        "Social-media presence, content strategy and digital assets supporting brand awareness and product communication.",
    },
    {
      id: "project-voyager",
      name: "Project Voyager / Vogue La Vida",
      description:
        "E-commerce website development and campaign support for a premium travel-bag brand.",
    },
  ],

  credentials: [
    { id: "llb", title: "Bachelor of Laws (LLB)", kind: "Degree" },
    {
      id: "ai-plus-sales",
      title: "AI+ Sales",
      issuer: "AI CERTS",
      period: "2026",
      kind: "Certification",
    },
    {
      id: "graphics-web-design",
      title: "Diploma in Graphics & Web Design",
      issuer: "Crayon Concepts",
      period: "2021 – 2022",
      kind: "Diploma",
    },
    {
      id: "google-digital-marketing",
      title: "Google Digital Marketing Course",
      issuer: "Google",
      period: "2020",
      kind: "Course",
    },
  ],

  perspectives: {
    eyebrow: "Perspectives",
    title: "Practical AI starts with how work actually gets done.",
    intro:
      "Points of view I hold from building and adopting technology inside real organisations. I'll keep sharpening them here — and in conversation with the leaders and teams I work with.",
    pointsOfView: [
      {
        id: "workflows-before-models",
        theme: "AI in African business",
        statement: "AI value in African businesses starts with workflows, not models.",
        argument:
          "Most organisations don't need a custom model to benefit from AI. They need their everyday processes documented, digitised and measurable. Once the workflow is clear, AI has something real to improve.",
      },
      {
        id: "automate-handoffs",
        theme: "Intelligent workflows",
        statement: "Automate the handoffs before you automate the decisions.",
        argument:
          "The biggest delays live between people and systems — approvals, re-typing, chasing updates. Remove that friction first, and better decision support follows naturally.",
      },
      {
        id: "adoption-not-installation",
        theme: "Digital transformation",
        statement: "Adoption, not installation, decides the return on technology.",
        argument:
          "A system nobody uses is a cost. Training, communication and early wins deserve the same care as the build itself.",
      },
      {
        id: "purpose-built-operations",
        theme: "Software-enabled operations",
        statement: "Once work repeats every week, it deserves a purpose-built tool.",
        argument:
          "Recruitment, learning and reporting outgrow spreadsheets quickly. A simple, role-based system brings clarity, accountability and data leaders can act on.",
      },
      {
        id: "responsible-ai-discipline",
        theme: "Responsible AI",
        statement: "Responsible AI is a business discipline, not a disclaimer.",
        argument:
          "Clear data rules, human review and honest limits are what earn the trust that adoption depends on.",
      },
      {
        id: "small-teams-scale",
        theme: "Technology and growth",
        statement: "Well-designed systems let small teams operate with the reliability of large ones.",
        argument:
          "Growing organisations can scale their service without scaling chaos — if the systems underneath are designed for it from the start.",
      },
    ],
    briefings: {
      title: "Talks & leadership briefings",
      intro: "Topics I can bring to leadership teams, workshops and events.",
      topics: [
        {
          id: "ai-for-african-executives",
          title: "AI for African executives: separating opportunity from hype",
          audience: "boards and leadership teams",
        },
        {
          id: "designing-intelligent-workflows",
          title: "Designing intelligent workflows",
          audience: "operations and department heads",
        },
        {
          id: "human-centred-workplace-technology",
          title: "Human-centred workplace technology",
          audience: "HR, learning and people teams",
        },
        {
          id: "making-transformation-stick",
          title: "Making digital transformation stick",
          audience: "transformation and project leads",
        },
      ],
    },
    articles: [],
  },

  contact: {
    title: "Let's talk about the challenge you're solving.",
    body: "Invite me to brief your leadership team, explore an AI opportunity, or think through a workflow worth automating. Every engagement starts with a conversation.",
    methods: [
      {
        id: "email",
        label: "Email",
        value: "trevorachura@gmail.com",
        href: "mailto:trevorachura@gmail.com",
        public: true,
        hint: "Best for project enquiries",
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        value: "+256 781 201 089",
        href: "https://wa.me/256781201089",
        public: true,
        hint: "Quick questions",
      },
    ],
    socials: [
      { label: "GitHub", url: "https://github.com/trevorachura-winning", verified: true },
      // LinkedIn: add once the exact public profile URL is confirmed.
    ],
  },

  // Phase two — prepared, not published. See docs/BUILD_STATUS.md.
  caseStudies: [],
} as const satisfies Portfolio;
