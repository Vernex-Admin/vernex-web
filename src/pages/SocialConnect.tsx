import React, { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/919789912805";
const INSTAGRAM_LINK =
  "https://www.instagram.com/vernex.in?igsh=MWp6am1vaWoxYjY1NQ==";
const WEBSITE_LINK = "http://vernex.in/";
const LINKEDIN_LINK =
  "https://www.linkedin.com/in/boss-anandaa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const FACEBOOK_LINK =
  "https://www.facebook.com/share/1BsBsZcZGP/";
const EMAIL = "vernexmain@gmail.com";
const PHONE_NUMBER = "+91 97899 12805";
const PHONE_NUMBER_TEL = "+919789912805";

const GOLD = "#D8B36A";

type LinkItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  description: string;
};

const socialLinks: LinkItem[] = [
  {
    label: "Website",
    href: WEBSITE_LINK,
    icon: <FaGlobe />,
    description: "Visit Vernex online for company information, products, services, and updates.",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_LINK,
    icon: <FaWhatsapp />,
    description: "For direct project enquiries, demo requests, collaborations, and quick communication.",
  },
  {
    label: "Instagram",
    href: INSTAGRAM_LINK,
    icon: <FaInstagram />,
    description: "For brand updates, service posts, product launches, reels, and digital marketing content.",
  },
  {
    label: "Facebook",
    href: FACEBOOK_LINK,
    icon: <FaFacebookF />,
    description: "Follow Vernex updates, service highlights, and business content across Facebook.",
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_LINK,
    icon: <FaLinkedinIn />,
    description: "For company updates, founder-led insights, technology launches, and professional content.",
  },
];

const SocialConnect: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 700);
  };

  return (
    <section className="min-h-screen overflow-x-hidden bg-background pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-lg"
        >
          <div className="absolute inset-0 bg-white" />

          <motion.div
            whileHover={{ boxShadow: "0 18px 44px -24px rgba(11,36,84,0.34)" }}
            transition={{ duration: 0.3 }}
            className="relative z-10 rounded-lg border border-border p-[1px]"
          >
            <div className="rounded-lg border border-border bg-white px-5 py-8 text-foreground sm:px-6 sm:py-14">
              <div className="mb-8 text-center sm:mb-14">
                <h1 className="mx-auto max-w-[18rem] text-2xl font-bold sm:max-w-none sm:text-3xl md:text-4xl">
                  Connect with <span className="text-primary">Vernex</span>
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
                  Stay updated with our products, services, launches, projects,
                  and business content across Vernex platforms.
                </p>
              </div>

              <div className="mb-8 flex justify-center gap-3 sm:mb-14 sm:gap-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleClick(index)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-[var(--shadow-subtle)] sm:h-12 sm:w-12"
                    style={{
                      backgroundColor: activeIndex === index ? GOLD : "#ffffff",
                    }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>

              <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:gap-5">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 16px 38px -26px rgba(216,179,106,0.75)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleClick(index)}
                    className="flex items-center rounded-lg border border-border bg-white px-4 py-3 shadow-[var(--shadow-card)] sm:px-6 sm:py-4"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white sm:h-10 sm:w-10"
                        style={{
                          backgroundColor:
                            activeIndex === index ? GOLD : "#0B2454",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <span className="block text-sm font-semibold text-foreground sm:text-lg">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-border bg-[#F7F9FC] px-5 py-4 text-sm text-muted-foreground">
                YouTube content for product demos, tutorials, business insights,
                and service explainers will be added as Vernex publishes more
                video resources.
              </div>

              <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-5">
                <motion.a
                  href={`mailto:${EMAIL}`}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 rounded-lg border border-border bg-white px-5 py-4 text-foreground shadow-[var(--shadow-card)]"
                >
                  <FaEnvelope />
                  {EMAIL}
                </motion.a>

                <motion.a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 rounded-lg border border-border bg-white px-5 py-4 text-foreground shadow-[var(--shadow-card)]"
                >
                  <FaPhoneAlt />
                  {PHONE_NUMBER}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialConnect;
