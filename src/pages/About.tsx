import React from "react";
import { motion, Variants } from "framer-motion";
import { Target, Eye, Sparkles } from "lucide-react";

const GOLD = "#C9A94D";

/* ---------- Animation presets ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-black to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            About <span style={{ color: GOLD }}>Vernex</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A digital ecosystem engineered for tomorrow-built on strategy,
            technology and creativity.
          </motion.p>
        </div>
      </section>

      {/* ================= SECTION DIVIDER ================= */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A94D]/50 to-transparent" />

      {/* ================= OUR JOURNEY ================= */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our <span style={{ color: GOLD }}>Journey</span>
            </h2>

            <div
              className="h-1 w-24 mb-8 rounded-full"
              style={{ backgroundColor: GOLD }}
            />

            <div
              className="space-y-4 text-base md:text-lg leading-relaxed text-gray-400"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              <p>
                Vernex was born in 2025 from a powerful vision — to create a
                digital ecosystem where technology, creativity and innovation
                work together to shape the future.
              </p>
              <p>
                What started as a single idea has evolved into a dynamic network
                offering 15+ services across web and app development, digital
                marketing, branding, SaaS products, event management and
                creative solutions.
              </p>
              <p>
                As we move forward, Vernex is evolving into a future-driven
                ecosystem — integrating SaaS platforms, AI solutions,
                automation tools and intelligent business systems.
              </p>
              <p>
                Today, Vernex stands as a symbol of innovation and trust,
                creating digital experiences that inspire and endure.
              </p>
              <p className="font-semibold text-white">
                Because at Vernex, we don&apos;t just build brands —{" "}
                <span style={{ color: GOLD }}>we build the future.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-black">
        <div
          className="mx-auto max-w-6xl rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
          style={{
            background:
              "radial-gradient(circle at top left, #1a1a1a 0%, #0a0a0a 45%, #000000 100%)",
          }}
        >
          <div className="px-6 sm:px-10 py-12">
            <div className="flex flex-col md:flex-row gap-10">

              {/* Mission */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="h-full bg-white/5 border border-white/10 rounded-3xl px-8 py-9 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Target size={28} color={GOLD} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.28em] uppercase text-[#C9A94D] mb-1">
                        Our Mission
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        MISSION
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    To make modern technology accessible, affordable and
                    impactful for everyone. Vernex empowers students,
                    freelancers and professionals to learn, earn and grow, while
                    helping businesses thrive with innovative digital solutions.
                    We believe technology should drive growth, opportunity and
                    transformation for all.
                  </p>
                </div>
              </motion.div>

              {/* Separator */}
              <div className="hidden md:flex items-stretch">
                <div className="w-[2px] bg-[#C9A94D]/50 rounded-full" />
              </div>

              {/* Vision */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="h-full bg-white/5 border border-white/10 rounded-3xl px-8 py-9 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Eye size={28} color={GOLD} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.28em] uppercase text-[#C9A94D] mb-1">
                        Our Vision
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        VISION
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    To build a global, human-centered digital ecosystem where
                    AI, machine learning, SaaS and emerging technologies empower
                    individuals and businesses. Vernex delivers end-to-end
                    solutions across business, education, healthcare and
                    lifestyle, making advanced technology accessible, practical
                    and transformative for all.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 bg-[#0b0b0b]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our <span style={{ color: GOLD }}>Core Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide how Vernex thinks, builds and grows with
              our clients and partners.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Visionary Thinking",
                text: "We think beyond trends and design the future — every project reflects creativity with purpose.",
              },
              {
                title: "Innovation First",
                text: "Technology is our canvas. We push boundaries to create solutions that redefine industries.",
              },
              {
                title: "Integrity & Trust",
                text: "Our foundation is transparency, ethics and reliability — so every relationship is long-term and meaningful.",
              },
              {
                title: "Excellence in Execution",
                text: "Perfection is not our goal — it’s our standard. Every detail carries Vernex quality.",
              },
              {
                title: "Collaboration & Growth",
                text: "We grow together — with our clients, partners and team — building a culture that inspires and uplifts.",
              },
              {
                title: "Legacy Creation",
                text: "We don’t just deliver projects; we create lasting impact that builds brands designed to endure.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariant}
                className="bg-[#111] border border-white/10 rounded-2xl p-7 hover:-translate-y-1 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-[#C9A94D]/15 flex items-center justify-center mb-4">
                  <Sparkles size={22} color={GOLD} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
