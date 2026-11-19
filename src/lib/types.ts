/**
 * Portfolio content model.
 *
 * Every member portfolio in the Flame Connect network implements this
 * contract in its own `src/content/` folder. Components never hard-code
 * personal facts — they render whatever the content layer provides.
 *
 * Verification rule: any fact that has not been confirmed by the owner is
 * either omitted (`undefined`) or flagged so it cannot be published by
 * accident. Never fill a gap with a guess.
 */

export type VerifiedLink = {
  url: string;
  /** Set to true only when the owner (or a primary source) has confirmed the URL. */
  verified: boolean;
};

export type Profile = {
  name: string;
  headline: string;
  heroStatement: string;
  supportingCopy: string;
  positioning: readonly string[];
  location: string;
  portrait?: {
    src: string;
    alt: string;
    /** Owner has approved this exact photograph for public use. */
    approved: boolean;
  };
};

export type SiteMeta = {
  url: string;
  title: string;
  description: string;
  locale: string;
  keywords: readonly string[];
};

export type NavItem = { label: string; href: `#${string}` };

export type ExpertiseArea = {
  id: string;
  index: string;
  title: string;
  summary: string;
  value: string;
  capabilities: readonly string[];
};

export type SkillGroup = {
  title: string;
  /** "core" = current working technology; "earlier" = from previous digital-marketing work. */
  tier: "core" | "earlier";
  items: readonly string[];
};

export type Outcome = {
  /** The figure exactly as documented, e.g. "37.5%". */
  figure: string;
  label: string;
  /** Where the figure comes from, shown to visitors. */
  source: "Résumé-documented";
};

export type Organisation = {
  name: string;
  /** Short name used for the typographic mark when no approved logo exists. */
  mark: string;
  website?: VerifiedLink;
  /** Approved, locally stored logo. Leave undefined until usage is confirmed. */
  logo?: { src: string; alt: string; width: number; height: number };
};

export type ExperienceRecord = {
  id: string;
  organisation: Organisation;
  /** Verified formal title. When unknown, use `areaOfWork` instead. */
  role?: string;
  areaOfWork?: string;
  /** Display string, only when verified or résumé-documented, e.g. "May 2021 – Nov 2023". */
  period?: string;
  current?: boolean;
  summary: string;
  responsibilities: readonly string[];
  outcomes?: readonly Outcome[];
  /** Featured records get the larger card treatment. */
  featured?: boolean;
  /** Short note shown on the card, e.g. "Distinct from Flame Connect". */
  note?: string;
};

export type Engagement = {
  id: string;
  name: string;
  description: string;
  website?: VerifiedLink;
};

export type Credential = {
  id: string;
  title: string;
  issuer?: string;
  period?: string;
  kind: "Degree" | "Diploma" | "Certification" | "Course";
};

export type InsightTheme = {
  id: string;
  title: string;
  question: string;
};

export type ContactMethod = {
  id: "email" | "phone" | "whatsapp";
  label: string;
  value: string;
  href: string;
  /** Owner must confirm before this is displayed on the public site. */
  public: boolean;
  hint: string;
};

export type SocialLink = {
  label: string;
  url: string;
  verified: boolean;
};

/**
 * Phase-two case-study model. Prepared now, intentionally NOT rendered.
 * A case study may only be published when `status === "approved"` and every
 * claim has evidence.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  client?: string;
  status: "draft" | "in-review" | "approved";
  delivery: "live" | "in-development" | "internal";
  summary: string;
  role: readonly string[];
  technologies: readonly string[];
  screenshots: readonly { src: string; alt: string; approved: boolean }[];
  liveUrl?: VerifiedLink;
  repositoryUrl?: VerifiedLink;
  results: readonly Outcome[];
};

export type Portfolio = {
  site: SiteMeta;
  profile: Profile;
  navigation: readonly NavItem[];
  about: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    pillars: readonly { title: string; body: string }[];
  };
  expertise: readonly ExpertiseArea[];
  skills: readonly SkillGroup[];
  experience: readonly ExperienceRecord[];
  engagements: readonly Engagement[];
  credentials: readonly Credential[];
  insights: { intro: string; themes: readonly InsightTheme[] };
  contact: {
    title: string;
    body: string;
    methods: readonly ContactMethod[];
    socials: readonly SocialLink[];
  };
  caseStudies: readonly CaseStudy[];
};
