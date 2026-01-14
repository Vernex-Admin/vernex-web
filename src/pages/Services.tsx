import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { Link } from "react-router-dom";
import React from "react";

/* ================= ANIMATIONS ================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ================= SERVICE ORDER ================= */
const order = [
  "Web Development",
  "App Development",
  "Video Editing",
  "Graphic Design",
  "School & College Projects Support",
  "Photography",
  "Videography",
  "Startup Support & Legal Advice",
  "Content Creation",
  "Social Media Management",
  "Accounting & Finance",
  "Digital Marketing",
  "Chatbot Creation",
  "Power BI & Data Analytics",
  "Event Organization (Sports & More)",
];

const orderMap = new Map(order.map((t, i) => [t, i]));

/* ================= COMPONENT ================= */
const Services: React.FC = () => {
  const orderedServices = [...services].sort(
    (a, b) =>
      (orderMap.get(a.title) ?? 99) -
      (orderMap.get(b.title) ?? 99)
  );

  return (
    <div className="min-h-screen pt-20 bg-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-black to-black" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-heading font-bold"
            >
              Our <span className="text-[#C9A94D]">Services</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base md:text-lg text-gray-400"
            >
              All 15 Vernex services — clearly presented, no redirects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A94D]/60 to-transparent" />

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 bg-[#0b0b0b]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {orderedServices.map((service, index) => {
              const Icon =
                service.icon as React.ComponentType<{
                  size?: number;
                  className?: string;
                }>;

              const number = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={service.slug}
                  variants={card}
                  whileHover={{ y: -8 }}
                  className="
                    relative rounded-2xl p-6
                    bg-gradient-to-b from-[#121212] to-[#0a0a0a]
                    border border-white/10
                    transition-all duration-500
                    hover:border-[#C9A94D]/50
                    hover:shadow-[0_0_40px_rgba(201,169,77,0.25)]
                    group
                  "
                >
                  {/* GOLD HOVER OVERLAY */}
                  <div className="
                    absolute inset-0 rounded-2xl opacity-0
                    bg-gradient-to-br from-[#C9A94D]/10 to-transparent
                    group-hover:opacity-100 transition
                  " />

                  {/* NUMBER + ICON */}
                  <div className="relative flex justify-between items-start mb-5">
                    <div className="
                      w-9 h-9 flex items-center justify-center
                      rounded-full border border-[#C9A94D]
                      text-[#C9A94D] text-xs font-semibold
                    ">
                      {number}
                    </div>

                    <div className="
                      w-10 h-10 rounded-xl
                      bg-[#C9A94D]/15
                      flex items-center justify-center
                      group-hover:bg-[#C9A94D]/25
                      transition
                    ">
                      {Icon && (
                        <Icon
                          size={20}
                          className="text-[#C9A94D]"
                        />
                      )}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="
                    relative text-lg md:text-xl
                    font-heading font-semibold mb-2
                    group-hover:text-[#C9A94D]
                    transition
                  ">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="relative text-sm text-gray-400 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* FOOTER */}
                  <div className="
                    relative pt-4 border-t border-white/10
                    text-sm flex justify-between items-center
                  ">
                    <span className="text-gray-500">
                      Service overview
                    </span>
                    <span className="text-[#C9A94D]/80">
                      Details coming soon
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-black text-center">
        <Button
          size="lg"
          asChild
          className="
            bg-[#C9A94D] text-black
            hover:bg-[#b89a3f]
            font-semibold px-10 py-6
            shadow-[0_0_30px_rgba(201,169,77,0.4)]
          "
        >
          <Link to="/contact" className="inline-flex items-center gap-2">
            Ready to serve you
            <ArrowRight size={18} />
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default Services;
