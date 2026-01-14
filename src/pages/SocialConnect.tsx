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

const GOLD = "#C9A227";

type LinkItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const socialLinks: LinkItem[] = [
  { label: "Home – Vernex", href: WEBSITE_LINK, icon: <FaGlobe /> },
  { label: "WhatsApp", href: WHATSAPP_LINK, icon: <FaWhatsapp /> },
  { label: "Instagram", href: INSTAGRAM_LINK, icon: <FaInstagram /> },
  { label: "Facebook", href: FACEBOOK_LINK, icon: <FaFacebookF /> },
  { label: "LinkedIn", href: LINKEDIN_LINK, icon: <FaLinkedinIn /> },
];

const SocialConnect: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 700);
  };

  return (
    <section className="min-h-screen bg-black pt-20 sm:pt-28 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b] via-black to-black" />

          <motion.div
            whileHover={{ boxShadow: "0 0 40px rgba(201,162,39,0.45)" }}
            transition={{ duration: 0.3 }}
            className="relative z-10 rounded-3xl border border-[rgba(201,162,39,0.55)] p-[1px]"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#111] to-[#060606] px-5 sm:px-6 py-8 sm:py-14 text-white">

              {/* HEADER */}
              <div className="text-center mb-8 sm:mb-14">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Connect with us through{" "}
                  <span className="text-[#C9A227]">Social Platforms</span>
                </h1>
                <p className="mt-3 sm:mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
                  Reach out, collaborate, and stay connected with Vernex across
                  our AI-powered global digital ecosystem.
                </p>
              </div>

              {/* ICONS — FIXED */}
              <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-14">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleClick(index)}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center bg-white text-black"
                    style={{
                      backgroundColor:
                        activeIndex === index ? GOLD : "#ffffff",
                    }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>

              {/* MAIN LINKS (UNCHANGED) */}
              <div className="mx-auto max-w-3xl flex flex-col gap-3 sm:gap-5">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 25px rgba(201,162,39,0.6)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleClick(index)}
                    className="flex items-center rounded-full bg-white px-4 sm:px-6 py-3 sm:py-4"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-white"
                        style={{
                          backgroundColor:
                            activeIndex === index ? GOLD : "#000",
                        }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-black font-medium text-sm sm:text-lg">
                        {item.label}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CONTACT */}
              <div className="mx-auto mt-8 sm:mt-14 max-w-3xl grid gap-3 sm:gap-5 sm:grid-cols-2">
                <motion.a
                  href={`mailto:${EMAIL}`}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-black"
                >
                  <FaEnvelope />
                  {EMAIL}
                </motion.a>

                <motion.a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-black"
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
