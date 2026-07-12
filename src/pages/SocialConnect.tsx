import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  ArrowUpRight,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type SocialLink = {
  title: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
  ariaLabel: string;
};

const socialLinks: SocialLink[] = [
  {
    title: "Website",
    href: "https://www.vernex.in",
    icon: Globe,
    external: true,
    ariaLabel: "Open the Vernex website",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/919789912805",
    icon: FaWhatsapp,
    external: true,
    ariaLabel: "Message the Vernex team on WhatsApp",
  },
  {
    title: "Email",
    href: "mailto:connect@vernex.in?subject=Enquiry%20from%20Vernex%20Website",
    icon: Mail,
    ariaLabel: "Send a business enquiry email to Vernex",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/boss-anandaa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: Linkedin,
    external: true,
    ariaLabel: "Open Vernex LinkedIn",
  },
  {
    title: "Facebook",
    href: "#",
    icon: Facebook,
    ariaLabel: "Open Vernex Facebook",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/vernex.in?igsh=MWp6am1vaWoxYjY1NQ==",
    icon: Instagram,
    external: true,
    ariaLabel: "Open Vernex Instagram",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const SocialConnect = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-20 text-black">
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.07),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f4f4f4_55%,#ffffff_100%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
          <div className="mb-6 text-center sm:mb-7">
            <h1 className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Social Media
            </h1>
            <p className="mt-2 text-base font-semibold text-neutral-700 sm:text-lg">
              Connect with us!
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex w-full max-w-5xl flex-col gap-3 sm:gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.title}
                  variants={cardVariants}
                  whileHover={{ y: -3, scale: 1.01 }}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  aria-label={social.ariaLabel}
                  className="group flex min-h-[58px] w-full cursor-pointer items-center gap-3 rounded-full border border-[#D8B36A]/70 bg-neutral-100 px-5 py-3 text-black shadow-[0_0_18px_rgba(216,179,106,0.22),0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-neutral-200 hover:shadow-[0_0_28px_rgba(216,179,106,0.42),0_18px_40px_rgba(0,0,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-[66px] sm:gap-4 sm:px-7 md:px-9"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-700 transition-colors group-hover:text-black sm:h-9 sm:w-9">
                    <Icon className="h-5 w-5 stroke-[2.1]" aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1 truncate text-base font-bold leading-tight text-black sm:text-lg md:text-xl">
                    {social.title}
                  </span>

                  <span className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 sm:h-9 sm:w-9">
                    <ArrowUpRight
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialConnect;
