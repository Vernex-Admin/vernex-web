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

const ProductHero = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-14 md:pb-14 md:pt-20">
      {/* Subtle Vernex gold wave pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -left-24 -top-16 h-[420px] w-[560px] text-[#D8B36A] opacity-[0.14]"
          viewBox="0 0 560 420"
          fill="none"
        >
          <path d="M-40 210C120 120 220 300 380 200S620 90 720 160" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-40 250C120 160 220 340 380 240S620 130 720 200" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-40 170C120 80 220 260 380 160S620 50 720 120" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg
          className="absolute -right-24 -top-10 h-[360px] w-[480px] text-[#D8B36A] opacity-[0.1]"
          viewBox="0 0 480 360"
          fill="none"
        >
          <path d="M-20 180C110 100 200 240 320 160S540 70 620 130" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-20 220C110 140 200 280 320 200S540 110 620 170" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#A9791F] sm:text-sm"
        >
          Vernex Gen Technologies
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl"
        >
          Vernex Software Products
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg"
        >
          Explore Vernex-built software products for schools, restaurants, shops,
          clinics, sales teams, and growing businesses.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ProductHero;
