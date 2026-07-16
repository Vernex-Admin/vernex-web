import {
  Building2,
  Database,
  FolderKanban,
  Globe,
  Handshake,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  MessagesSquare,
  PenTool,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
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
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const heroBadges = [
  "Vernex",
  "Technology",
  "Marketing",
  "Automation",
];

export interface HeroFeature {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export const heroFeatures: HeroFeature[] = [
  { title: "India Based", subtitle: "Proudly built in India", icon: Globe },
  { title: "Gen Z Led", subtitle: "Young mindset. Strong execution.", icon: Sparkles },
  { title: "Business Focused", subtitle: "Practical solutions. Real needs.", icon: Building2 },
];

/* -------------------------------------------------------------------------- */
/*  Hero hub nodes                                                             */
/* -------------------------------------------------------------------------- */

export interface HubNode {
  label: string;
  icon: LucideIcon;
}

export const technologyNodes: HubNode[] = [
  { label: "ERP Systems", icon: Database },
  { label: "POS & Billing", icon: LayoutDashboard },
  { label: "Automation", icon: Settings },
  { label: "Dashboards", icon: LayoutDashboard },
];

export const marketingNodes: HubNode[] = [
  { label: "Websites", icon: Globe },
  { label: "Social Media", icon: MessagesSquare },
  { label: "Branding", icon: PenTool },
  { label: "Campaigns", icon: Megaphone },
];

/* -------------------------------------------------------------------------- */
/*  Divisions (Section 2)                                                       */
/* -------------------------------------------------------------------------- */

export type DivisionId = "technology" | "marketing";

export interface Division {
  id: DivisionId;
  name: string;
  subtitle: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  logo: string;
  alt: string;
}

export const divisions: Division[] = [
  {
    id: "technology",
    name: "Vernex Gen Technologies",
    subtitle: "Gen Technologies",
    description:
      "Software, SaaS, ERP, dashboards, automation, AI tools, and scalable business systems.",
    bullets: [
      "Business Software",
      "Automation Systems",
      "Data & Analytics",
      "AI-Powered Tools",
    ],
    cta: "Explore Vernex Gen Technologies",
    href: "/products",
    logo: "/assets/logos/vernex-gen-technologies-logo-normalized.png",
    alt: "Vernex Gen Technologies logo",
  },
  {
    id: "marketing",
    name: "Vernex Digital Marketing",
    subtitle: "Digital Marketing",
    description:
      "Digital marketing, branding, websites, content, campaigns, and growth strategies.",
    bullets: [
      "Branding & Identity",
      "Social Media Growth",
      "Website Development",
      "Ads & Campaigns",
    ],
    cta: "Explore Vernex Digital Marketing",
    href: "/services",
    logo: "/assets/logos/vernex-digital-marketing-logo-normalized.png",
    alt: "Vernex Digital Marketing logo",
  },
];

/* -------------------------------------------------------------------------- */
/*  Products preview (Section 3)                                               */
/* -------------------------------------------------------------------------- */

export const productPreviewDescriptions: Record<string, string> = {
  "Vernex School ERP":
    "Complete school management with attendance, academics, communication, materials, events, and administration.",
  "Vernex BI For Restaurants":
    "Restaurant intelligence dashboard for sales, profit, menu performance, inventory, and business reporting.",
  "Vernex Billing POS Software":
    "Billing and POS system for inventory, customers, receipts, reports, and daily business control.",
};

export const productDisplayNames: Record<string, string> = {
  "Vernex BI For Restaurants": "Vernex Restaurant OS",
  "Vernex Billing POS Software": "Vernex Billing & POS",
};

/* -------------------------------------------------------------------------- */
/*  Workflow timeline (Section 5)                                              */
/* -------------------------------------------------------------------------- */

export interface WorkflowStep {
  step: number;
  title: string;
  text: string;
  icon: LucideIcon;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Understand Your Business",
    text: "We learn about your business, problems, customers, systems, and growth goals.",
    icon: Users,
  },
  {
    step: 2,
    title: "Plan the Right Solution",
    text: "We plan the right mix of software, automation, marketing, or branding.",
    icon: Building2,
  },
  {
    step: 3,
    title: "Build & Execute",
    text: "Our team builds the system, creates content, or runs campaigns.",
    icon: Workflow,
  },
  {
    step: 4,
    title: "Deliver on Time",
    text: "We follow clear milestones, communicate regularly, and deliver on commitments.",
    icon: ShieldCheck,
  },
  {
    step: 5,
    title: "Support & Improve",
    text: "We support, optimize, and help your business grow with better systems and results.",
    icon: Rocket,
  },
];

/* -------------------------------------------------------------------------- */
/*  Trust section (Section 6)                                                  */
/* -------------------------------------------------------------------------- */

export interface TrustBadge {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const trustBadges: TrustBadge[] = [
  { title: "India Based Execution", text: "Local understanding, global standards.", icon: Globe },
  { title: "Gen Z Driven Team", text: "Young mindset, modern solutions.", icon: Sparkles },
  { title: "Practical Approach", text: "Solutions that are useful, not complex.", icon: ShieldCheck },
  { title: "Direct Communication", text: "Clear updates. No delays.", icon: MessageSquare },
];

export interface TrustStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const trustStats: TrustStat[] = [
  { value: "50+", label: "Projects Delivered", icon: FolderKanban },
  { value: "20+", label: "Businesses Served", icon: Building2 },
  { value: "2", label: "Core Divisions", icon: Workflow },
  { value: "Real", label: "Founder Involvement", icon: Users },
  { value: "Affordable", label: "Solutions", icon: Handshake },
  { value: "On-Time", label: "Delivery", icon: Timer },
];

/* -------------------------------------------------------------------------- */
/*  Testimonials (Section 7)                                                   */
/* -------------------------------------------------------------------------- */

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vernex built our school ERP exactly how we needed. The system is easy, fast, and very helpful for our daily operations.",
    name: "School Administrator",
    company: "Private School, India",
    initials: "SA",
  },
  {
    quote:
      "Their restaurant dashboard changed the way we track sales and profit. Now decisions are based on real data, not guesses.",
    name: "Restaurant Owner",
    company: "Multi Cuisine Restaurant",
    initials: "RO",
  },
  {
    quote:
      "From branding to lead generation, Vernex Marketing helped us grow our online presence and enquiries consistently.",
    name: "Business Owner",
    company: "Service Industry",
    initials: "BO",
  },
];
