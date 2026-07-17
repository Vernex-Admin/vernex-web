import {
  BarChart3,
  Briefcase,
  Compass,
  Cpu,
  Rocket,
  Server,
  ShieldCheck,
  TrendingUp,
  UserRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Shared animation variants                                                  */
/* -------------------------------------------------------------------------- */

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface IconCard {
  title: string;
  text: string;
  icon: LucideIcon;
}

export interface EcosystemCard {
  title: string;
  text: string;
  href: string;
  logo: string;
  alt: string;
  cta: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  text: string;
  icon: LucideIcon;
  accent: "navy" | "gold";
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const heroBadges = ["Technology", "Automation", "Marketing", "Growth"];

export const heroFeatureCards: IconCard[] = [
  {
    title: "Software Systems",
    text: "ERP, CRM, dashboards, automation, and business tools built for efficiency.",
    icon: Server,
  },
  {
    title: "Brand Growth",
    text: "Content, websites, campaigns, social media, and visibility that builds authority.",
    icon: TrendingUp,
  },
  {
    title: "Business Clarity",
    text: "Better workflows, stronger processes, and clearer growth decisions.",
    icon: Briefcase,
  },
];

/* -------------------------------------------------------------------------- */
/*  Ecosystem                                                                  */
/* -------------------------------------------------------------------------- */

export const ecosystemCards: EcosystemCard[] = [
  {
    title: "Vernex Gen Technologies",
    text: "Software, tools, ERP, automation, dashboards, and AI-powered solutions for smoother operations and scalable systems.",
    href: "/products",
    logo: "/assets/logos/vernex-gen-technologies-logo-normalized.png",
    alt: "Vernex Gen Technologies logo",
    cta: "View Solutions",
  },
  {
    title: "Vernex Digital Marketing",
    text: "Digital marketing, social media, branding, websites, content, campaigns, and creative execution for brands that want to grow visibly.",
    href: "/services",
    logo: "/assets/logos/vernex-digital-marketing-logo-normalized.png",
    alt: "Vernex Digital Marketing logo",
    cta: "View Solutions",
  },
];

/* -------------------------------------------------------------------------- */
/*  Products preview                                                           */
/* -------------------------------------------------------------------------- */

export const productPreviewDescriptions: Record<string, string> = {
  "Vernex School ERP":
    "School management made simple. Admissions, attendance, exams, fees, and communication.",
  "Vernex BI For Restaurants":
    "Restaurant intelligence dashboard for sales, profit, order performance, and business reporting.",
  "Vernex Billing POS Software":
    "Billing and POS system for retailers. Inventory, sales, reports, analytics and business control.",
};

/* -------------------------------------------------------------------------- */
/*  Why choose — desktop cards                                                 */
/* -------------------------------------------------------------------------- */

export const whyCards: IconCard[] = [
  {
    title: "Founder-Led Execution",
    text: "You work with a team that understands business, delivery, communication, and practical execution.",
    icon: UserRound,
  },
  {
    title: "Technology + Marketing Together",
    text: "We connect software, automation, branding, content, websites, and campaigns under one practical ecosystem.",
    icon: Cpu,
  },
  {
    title: "Affordable, Practical, Reliable",
    text: "Every solution is built to be useful, affordable, and measurable — designed for growing businesses.",
    icon: ShieldCheck,
  },
];

/* -------------------------------------------------------------------------- */
/*  Why choose — mobile growth timeline                                        */
/* -------------------------------------------------------------------------- */

export const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: "Understand",
    text: "We understand your business, goals, and challenges.",
    icon: Compass,
    accent: "navy",
  },
  {
    step: 2,
    title: "Plan",
    text: "We design the right strategy, systems, and roadmap.",
    icon: Workflow,
    accent: "gold",
  },
  {
    step: 3,
    title: "Build",
    text: "We build, automate, and launch with precision.",
    icon: Rocket,
    accent: "navy",
  },
  {
    step: 4,
    title: "Scale",
    text: "We optimize and scale what works for real growth.",
    icon: BarChart3,
    accent: "gold",
  },
];
