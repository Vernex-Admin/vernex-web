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
    <div className="min-h-screen pt-20 bg-background text-foreground">
      {/* ===== HERO ===== */}
      <section
        className="bg-gradient-to-br from-vernex-navy via-vernex-navy to-vernex-navy-light text-primary-foreground py-20 md:py-24"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white"
          >
            About <span style={{ color: GOLD }}>Vernex</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08 }}
            className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed"
          >
            A digital ecosystem engineered for tomorrow – built on strategy,
            technology and creativity.
          </motion.p>
        </div>
      </section>

      {/* ===== OUR JOURNEY ===== */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            className="text-left"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our <span style={{ color: GOLD }}>Journey</span>
            </h2>

            <div
              className="h-1 w-20 md:w-24 mb-8 md:mb-10 mx-auto md:mx-0 rounded-full"
              style={{ backgroundColor: GOLD }}
            />

            <div
              className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground"
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
              <p className="font-semibold text-foreground">
                Because at Vernex, we don&apos;t just build brands —{" "}
                <span style={{ color: GOLD }}>we build the future.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-16 md:py-20">
        <div
          className="mx-auto max-w-6xl rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
          style={{
            background:
              "radial-gradient(circle at top left, #b93f3f 0, #111827 35%, #020617 100%)",
          }}
        >
          <div className="px-5 sm:px-8 md:px-10 lg:px-12 py-10 md:py-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
              {/* Mission */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                className="flex-1"
              >
                <div className="h-full bg-white/5 rounded-3xl border border-white/10 px-7 py-8 md:px-8 md:py-9 backdrop-blur-sm text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Target size={28} color={GOLD} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.28em] text-[rgba(201,169,77,0.9)] mb-1 uppercase">
                        Our Mission
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
                        MISSION
                      </h3>
                    </div>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-white/90">
                    To make modern technology accessible, affordable and
                    impactful for everyone. Vernex empowers students,
                    freelancers and professionals to learn, earn and grow, while
                    helping businesses thrive with innovative digital solutions.
                    We believe technology should drive growth, opportunity and
                    transformation for all.
                  </p>
                </div>
              </motion.div>

              {/* Vertical separator (desktop only) */}
              <div className="hidden md:flex items-stretch">
                <div className="w-[2px] bg-[rgba(201,169,77,0.55)] self-stretch rounded-full" />
              </div>

              {/* Vision */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                className="flex-1"
              >
                <div className="h-full bg-white/5 rounded-3xl border border-white/10 px-7 py-8 md:px-8 md:py-9 backdrop-blur-sm text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Eye size={28} color={GOLD} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.28em] text-[rgba(201,169,77,0.9)] mb-1 uppercase">
                        Our Vision
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
                        VISION
                      </h3>
                    </div>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-white/90">
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

      {/* ===== CORE VALUES ===== */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            className="text-center mb-10 md:mb-14"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our <span style={{ color: GOLD }}>Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide how Vernex thinks, builds and grows with
              our clients and partners.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
                className="bg-card rounded-2xl p-6 md:p-7 border border-border shadow-sm hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-[rgba(201,169,77,0.12)] flex items-center justify-center mb-4">
                  <Sparkles size={22} color={GOLD} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
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
