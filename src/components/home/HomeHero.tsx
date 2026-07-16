import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fadeUp, heroBadges, heroFeatureCards, stagger } from "./homeData";
import HeroFeatureCard from "./HeroFeatureCard";

const HomeHero = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-12 md:pb-16 md:pt-16">
      {/* Subtle Vernex gold wave */}
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

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Left column */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-[#D8B36A]/50 bg-[#FBF7EE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A6A28] sm:text-xs"
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
            Vernex India&apos;s Gen Z Ecosystem helps modern businesses{" "}
            <span className="text-[#C79A2E]">grow and modernize.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg"
          >
            We combine technology, automation, websites, branding, content, and
            digital marketing to help businesses move from scattered work to
            structured growth.
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
                to="/vernex-ecosystem"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#D8B36A]/70 bg-white px-7 text-sm font-semibold text-primary transition-colors duration-[250ms] hover:bg-[#FBF7EE] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2 sm:w-auto"
              >
                Explore Vernex Ecosystem
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

          {/* Trusted by */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#0B1F4D", "#C79A2E", "#334155"].map((color) => (
                <span
                  key={color}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              Trusted by <span className="font-semibold text-[#B88932]">100+</span> businesses
            </p>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid gap-4"
        >
          {heroFeatureCards.map((card) => (
            <HeroFeatureCard key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
