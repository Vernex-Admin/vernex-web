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

const WHATSAPP_LINK = "https://wa.me/919789912805";
const INSTAGRAM_LINK =
  "https://www.instagram.com/vernex.in?igsh=MWp6am1vaWoxYjY1NQ==";
const WEBSITE_LINK = "http://vernex.in/";
const LINKEDIN_LINK = "https://linkedin.com/"; // update with your real LinkedIn page
const EMAIL = "vernexofficial@gmail.com";
const PHONE_NUMBER = "+91 97899 12805";
const PHONE_NUMBER_TEL = "+919789912805";

// Brand colors
const BRAND_BLUE = "#0B1F3B";
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
  { label: "Facebook", href: "https://facebook.com/", icon: <FaFacebookF /> },
  { label: "LinkedIn", href: LINKEDIN_LINK, icon: <FaLinkedinIn /> },
];

const SocialConnect: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 1000); // gold for 1s then reset
  };

  return (
    <section className="bg-slate-50 min-h-[80vh]">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-32 sm:pt-36">
        {/* OUTER HERO CARD WITH GOLDEN GLOW */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(201,162,39,0.35)]">
          {/* NETWORK BACKGROUND IMAGE */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("https://wallpapers.com/images/hd/global-network-background-3840-x-2160-y96g3eo2xqfuh7ya.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* DARK BLUE OVERLAY */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(4,10,25,0.92), rgba(11,31,59,0.94))",
            }}
          />

          {/* GLASS INNER CONTAINER */}
          <div className="relative z-10 px-4 py-10 sm:px-10 sm:py-12">
            <div className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.6)] px-4 py-10 sm:px-8 sm:py-12 text-white">
              {/* TITLE */}
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
                  Connect with us through Social Platforms
                </h1>
                <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
                  Reach out, collaborate, and stay connected with Vernex across
                  our AI-powered global digital ecosystem.
                </p>
              </div>

              {/* TOP CIRCLE BUTTONS */}
              <div className="flex justify-center gap-3 sm:gap-4 mb-12">
                {socialLinks.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => handleClick(index)}
                    className="flex h-12 w-12 items-center justify-center rounded-full shadow-md hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(201,162,39,0.7)] transition-transform"
                    style={{
                      backgroundColor:
                        activeIndex === index ? GOLD : "#ffffff",
                      color:
                        activeIndex === index ? "#ffffff" : BRAND_BLUE,
                    }}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </button>
                ))}
              </div>

              {/* MAIN LONG BUTTONS */}
              <div className="mx-auto flex max-w-3xl flex-col gap-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => handleClick(index)}
                    className="flex items-center justify-between rounded-full bg-white/95 px-5 py-4 shadow-lg hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(201,162,39,0.7)] transition-transform"
                    style={{
                      color:
                        activeIndex === index ? GOLD : BRAND_BLUE,
                      border:
                        activeIndex === index
                          ? `2px solid ${GOLD}`
                          : "2px solid transparent",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                        style={{
                          backgroundColor:
                            activeIndex === index ? GOLD : BRAND_BLUE,
                        }}
                      >
                        {item.icon}
                      </div>
                      <span className="font-medium text-base sm:text-lg">
                        {item.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* CONTACT CARDS */}
              <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 sm:flex-row">
                {/* EMAIL */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex flex-1 items-center gap-4 rounded-2xl bg-white px-5 py-5 text-slate-900 shadow-lg hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(0,0,0,0.4)] transition-transform"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Email Address
                    </span>
                    <span className="text-base font-medium">{EMAIL}</span>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  className="flex flex-1 items-center gap-4 rounded-2xl bg-white px-5 py-5 text-slate-900 shadow-lg hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(0,0,0,0.4)] transition-transform"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Phone
                    </span>
                    <span className="text-base font-medium">
                      {PHONE_NUMBER}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
