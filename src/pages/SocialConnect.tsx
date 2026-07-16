import { motion } from "framer-motion";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import IntroCard from "../components/social/IntroCard";
import CTASection from "../components/social/CTASection";
import SocialCard, {
  type SocialCardData,
} from "../components/social/SocialCard";

const bird = "/favicon.png";

const socialLinks: SocialCardData[] = [
  {
    title: "Website",
    description: "Explore our official website and discover more about Vernex.",
    href: "https://www.vernex.in",
    icon: Globe,
    external: true,
    ariaLabel: "Open the Vernex website",
  },
  {
    title: "WhatsApp",
    description: "Chat with us directly for quick responses and personalised support.",
    href: "https://wa.me/919789912805",
    icon: MessageCircle,
    external: true,
    ariaLabel: "Message the Vernex team on WhatsApp",
  },
  {
    title: "Email",
    description: "Send us an email for enquiries, proposals, or partnership discussions.",
    href: "mailto:connect@vernex.in?subject=Enquiry%20from%20Vernex%20Website",
    icon: Mail,
    ariaLabel: "Send a business enquiry email to Vernex",
  },
  {
    title: "LinkedIn",
    description:
      "Connect with us on LinkedIn for updates, insights, and professional networking.",
    href: "https://www.linkedin.com/in/boss-anandaa",
    icon: Linkedin,
    external: true,
    ariaLabel: "Open Vernex on LinkedIn",
  },
  {
    title: "Facebook",
    description: "Follow us on Facebook for news, updates, and community engagement.",
    href: "#",
    icon: Facebook,
    ariaLabel: "Open Vernex on Facebook",
  },
  {
    title: "Instagram",
    description:
      "Follow us on Instagram for the latest highlights and behind-the-scenes.",
    href: "https://www.instagram.com/vernex.in",
    icon: Instagram,
    external: true,
    ariaLabel: "Open Vernex on Instagram",
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const SocialConnect = (): JSX.Element => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-20 text-foreground">
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {/* Subtle patterned background */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,179,106,0.06),transparent_45%),linear-gradient(180deg,#FFFFFF_0%,#FBFAF7_60%,#FFFFFF_100%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="mb-10 flex flex-col items-center text-center sm:mb-14"
          >
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Social Connect
            </h1>

            {/* Gold divider with bird */}
            <div className="mt-5 flex w-full max-w-sm items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D8B36A]" />
              <img
                src={bird}
                alt=""
                aria-hidden="true"
                className="h-7 w-7 shrink-0 object-contain"
              />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D8B36A]" />
            </div>

            <p className="mt-5 max-w-xl text-base text-slate-500 sm:text-lg">
              Connect with Vernex across every major touchpoint.
            </p>
          </motion.header>

          {/* Intro card */}
          <div className="mb-6 sm:mb-8">
            <IntroCard />
          </div>

          {/* Social cards grid */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
          >
            {socialLinks.map((social) => (
              <SocialCard key={social.title} {...social} />
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-6 sm:mt-8">
            <CTASection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialConnect;
