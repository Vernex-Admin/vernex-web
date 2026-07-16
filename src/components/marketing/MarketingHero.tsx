import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const MarketingHero = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-14 md:pb-12 md:pt-20">
      {/* Subtle Vernex gold wave on the right */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -right-16 top-2 hidden h-[340px] w-[520px] text-[#D8B36A] opacity-[0.16] md:block"
          viewBox="0 0 520 340"
          fill="none"
        >
          <path d="M40 300C160 210 250 120 330 90S470 40 560 20" stroke="currentColor" strokeWidth="1.4" />
          <path d="M70 320C190 230 280 140 360 110S500 60 590 40" stroke="currentColor" strokeWidth="1.4" />
          <path d="M100 340C220 250 310 160 390 130S530 80 620 60" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        {/* Label with flanking gold lines */}
        <motion.div
          variants={fadeUp}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <span className="hidden h-px w-10 bg-[#D8B36A]/60 md:block" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A9791F] sm:text-sm">
            Vernex Digital Marketing
          </p>
          <span className="hidden h-px w-10 bg-[#D8B36A]/60 md:block" aria-hidden="true" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl"
        >
          Marketing Services
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg"
        >
          Complete growth solutions for businesses, founders, creators, and local
          brands.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-6 h-0.5 w-14 rounded-full bg-[#D8B36A]/70"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
};

export default MarketingHero;
