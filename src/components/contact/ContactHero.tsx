import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp, stagger } from "./contactData";

const ContactHero = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-10 text-center sm:px-6 md:pb-10 md:pt-14">
      {/* Subtle Vernex gold wave background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -left-24 top-4 h-[380px] w-[460px] text-[#D8B36A] opacity-[0.10]"
          viewBox="0 0 460 380"
          fill="none"
        >
          <path d="M-30 190C90 110 160 280 280 190S460 100 540 150" stroke="currentColor" strokeWidth="1.4" />
          <path d="M-30 240C90 160 160 330 280 240S460 150 540 200" stroke="currentColor" strokeWidth="1.4" />
          <path d="M-30 140C90 60 160 230 280 140S460 50 540 100" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <svg
          className="absolute -right-24 top-10 h-[320px] w-[400px] text-[#D8B36A] opacity-[0.08]"
          viewBox="0 0 400 320"
          fill="none"
        >
          <path d="M-20 160C80 90 150 240 250 160S420 80 480 120" stroke="currentColor" strokeWidth="1.4" />
          <path d="M-20 210C80 140 150 290 250 210S420 130 480 170" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl"
      >
        {/* Gold label with flanking dividers */}
        <motion.div variants={fadeUp} className="mx-auto flex max-w-xs items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#D8B36A]/70" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88932]">
            Contact Vernex
          </span>
          <span className="h-px w-8 bg-[#D8B36A]/70" aria-hidden="true" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-primary md:text-6xl"
        >
          Start Your Project With Vernex
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg"
        >
          Tell us what you want to build, improve, automate, design, or grow.
          Vernex will help you choose the right path across technology, products,
          websites, content, and marketing.
        </motion.p>

        {/* Sparkle divider (mobile / tablet, matches mobile reference) */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-7 flex max-w-[220px] items-center gap-3 text-[#D8B36A] lg:hidden"
        >
          <span className="h-px flex-1 bg-[#E8E2D8]" aria-hidden="true" />
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          <span className="h-px flex-1 bg-[#E8E2D8]" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
