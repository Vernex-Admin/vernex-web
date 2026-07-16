import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fadeUp, heroBadges, heroFeatures, stagger } from "./ecosystemData";
import HeroHub from "./HeroHub";

const EcosystemHero = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-10 md:pb-16 md:pt-14">
      {/* Subtle Vernex gold wave background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -left-20 top-0 h-[520px] w-[620px] text-[#D8B36A] opacity-[0.12]"
          viewBox="0 0 620 520"
          fill="none"
        >
          <path d="M-40 260C120 150 220 380 380 260S620 130 720 210" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-40 320C120 210 220 440 380 320S620 190 720 270" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-40 200C120 90 220 320 380 200S620 70 720 150" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="min-w-0">
          <motion.div
            variants={fadeUp}
            className="mb-6 flex w-fit max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-[#D8B36A]/50 bg-[#FBF7EE] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A6A28] sm:rounded-full sm:text-xs sm:tracking-[0.14em]"
          >
            {heroBadges.map((badge, index) => (
              <span key={badge} className="inline-flex items-center gap-2">
                {index > 0 && <span className="text-[#D8B36A]">•</span>}
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[3.4rem]"
          >
            Build Better Systems.
            <br />
            <span className="text-[#C79A2E]">Grow a Better Brand.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg"
          >
            Vernex helps businesses move from scattered work to structured growth
            through software, automation, websites, content, and marketing support
            built for real business needs.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25 }}>
              <Link
                to="/contact"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0B1F4D] px-7 text-sm font-semibold text-white transition-colors duration-[250ms] hover:bg-[#0a1c40] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2 sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25 }}>
              <Link
                to="/services"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#D8B36A]/70 bg-white px-7 text-sm font-semibold text-primary transition-colors duration-[250ms] hover:bg-[#FBF7EE] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2 sm:w-auto"
              >
                Explore Marketing Services
              </Link>
            </motion.div>

            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-[#B88932] sm:px-2"
            >
              View Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Feature icons */}
          <motion.div
            variants={fadeUp}
            className="mt-9 grid grid-cols-3 gap-3 border-t border-[#E8E2D8] pt-6 sm:gap-4"
          >
            {heroFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F2E8] text-[#C79A2E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-[13px] font-bold text-primary sm:text-sm">{feature.title}</h3>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:text-xs">{feature.subtitle}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right column — hub illustration */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="min-w-0"
        >
          <HeroHub />
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemHero;
