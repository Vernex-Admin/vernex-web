import {
  CalendarDays,
  Camera,
  ChartNoAxesColumnIncreasing,
  Clapperboard,
  FilePenLine,
  MessagesSquare,
  MonitorSmartphone,
  Palette,
  Target,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export interface MarketingService {
  name: string;
  /** Full description shown on desktop cards. */
  description: string;
  /** Condensed description shown on compact mobile cards. */
  shortDescription: string;
  /** Value proposition shown in the gold highlight box (desktop). */
  benefit: string;
  icon: LucideIcon;
}

export const marketingServices: MarketingService[] = [
  {
    name: "Digital Marketing",
    description:
      "Data-driven strategies across SEO, Google Business Profile, campaigns, analytics, and performance optimization.",
    shortDescription: "Boost visibility, drive traffic, and grow your business online.",
    benefit: "Maximize visibility and generate high-quality leads.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    name: "Social Media Management",
    description:
      "End-to-end social media management including strategy, content, scheduling, community engagement, and performance tracking.",
    shortDescription:
      "Engage your audience and build a strong brand presence across platforms.",
    benefit: "Grow your brand online with consistent engagement.",
    icon: MessagesSquare,
  },
  {
    name: "Personal Branding",
    description:
      "Position yourself as an authority with strategic personal branding, content, and storytelling across platforms.",
    shortDescription:
      "Build your identity, establish credibility, and become a trusted authority.",
    benefit: "Build credibility, trust, and visibility as a thought leader.",
    icon: UserRound,
  },
  {
    name: "Website Development",
    description:
      "Modern, responsive websites that are fast, secure, and built to convert — tailored to your brand and business goals.",
    shortDescription: "Modern, responsive websites that convert visitors into customers.",
    benefit: "Custom websites that drive traffic, leads, and sales.",
    icon: MonitorSmartphone,
  },
  {
    name: "Video Editing / Reels",
    description:
      "Short-form videos, reels, promo videos, subtitles, transitions, and motion graphics that capture attention and drive engagement.",
    shortDescription:
      "Crisp, engaging videos crafted to capture attention and drive results.",
    benefit: "Turn ideas into high-performing videos that connect.",
    icon: Clapperboard,
  },
  {
    name: "Graphic Design / Branding",
    description:
      "Logo design, brand identity, social creatives, brochures, UI/UX, presentations, and marketing collaterals that elevate your brand.",
    shortDescription:
      "Creative designs and strong brands that leave a lasting impression.",
    benefit: "Design your brand to be remembered and trusted.",
    icon: Palette,
  },
  {
    name: "Event Organization",
    description:
      "End-to-end event planning and execution — corporate events, product launches, workshops, conferences, and brand activations.",
    shortDescription: "End-to-end event planning that creates memorable experiences.",
    benefit: "Create memorable events that inspire, engage, and deliver results.",
    icon: CalendarDays,
  },
  {
    name: "Photography / Videography",
    description:
      "Professional photography and videography for products, events, corporate shoots, founder stories, and brand films.",
    shortDescription: "Professional visuals that showcase your brand beautifully.",
    benefit: "Showcase your products, people, and brand with impact.",
    icon: Camera,
  },
  {
    name: "Content Creation",
    description:
      "Compelling content for blogs, captions, scripts, articles, newsletters, and more — tailored to your audience and goals.",
    shortDescription: "Compelling content that builds trust, engages, and converts.",
    benefit: "Create content that builds trust, attention, and engagement.",
    icon: FilePenLine,
  },
  {
    name: "Paid Campaigns / Growth Strategy",
    description:
      "ROI-driven ad campaigns and growth strategies across Meta, Google Ads, and more — to scale your business profitably.",
    shortDescription: "Data-driven campaigns that maximize ROI and accelerate growth.",
    benefit: "Reach the right audience and grow faster, smarter.",
    icon: Target,
  },
];
