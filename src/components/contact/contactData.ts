import {
  Globe,
  Handshake,
  Mail,
  PhoneCall,
  ShieldCheck,
  Target,
  Zap,
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
/*  Centralized contact configuration                                          */
/* -------------------------------------------------------------------------- */

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  note: string;
  href: string;
  icon: LucideIcon;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "website",
    label: "Website",
    value: "www.vernex.in",
    note: "Visit our website",
    href: "https://www.vernex.in",
    icon: Globe,
  },
  {
    id: "email",
    label: "Email",
    value: "connect@vernex.in",
    note: "Drop us an email",
    href: "mailto:connect@vernex.in?subject=Project%20Enquiry%20from%20Vernex%20Website",
    icon: Mail,
  },
  {
    id: "phone",
    label: "Phone / WhatsApp",
    value: "+91 97899 12805",
    note: "Mon - Sat, 9:00 AM - 7:00 PM",
    href: "https://wa.me/919789912805",
    icon: PhoneCall,
  },
];

/* -------------------------------------------------------------------------- */
/*  "Best first step" helper card                                              */
/* -------------------------------------------------------------------------- */

export const planCard = {
  desktopTitle: "Let's Plan the Right Way",
  desktopText:
    "Share your business type, current challenge, required service, expected timeline, and preferred contact method. Our experts will guide you with the best solutions tailored to your goals.",
  mobileLabel: "Best First Step",
  mobileTitle: "Not sure where to begin?",
  mobileText:
    "Share your business type, goals, and timeline. We'll guide you with the right next step.",
  href: "https://wa.me/919789912805",
};

/* -------------------------------------------------------------------------- */
/*  Bottom trust features                                                      */
/* -------------------------------------------------------------------------- */

export interface TrustFeature {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const trustFeatures: TrustFeature[] = [
  { title: "Secure & Confidential", text: "Your data is protected and never shared.", icon: ShieldCheck },
  { title: "Quick Response", text: "We respond within 1 business day.", icon: Zap },
  { title: "Right Solutions", text: "We recommend the best path for your goals.", icon: Target },
  { title: "Long-Term Partnership", text: "We grow with you and your business.", icon: Handshake },
];
