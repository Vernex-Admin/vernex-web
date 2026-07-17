import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";

const ProductsCTA = (): JSX.Element => {
  return (
    <section className="px-4 pb-20 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="mx-auto flex max-w-6xl flex-col items-center gap-7 rounded-2xl border border-[#E8D9B8] bg-white p-8 text-center shadow-[0_20px_50px_-34px_rgba(11,36,84,0.4)] md:flex-row md:gap-10 md:p-12"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#E8D9B8] bg-[#F7F2E8]"
        >
          <Rocket className="h-9 w-9 text-[#D8B36A]" aria-hidden="true" />
        </motion.div>

        {/* Content */}
        <div className="flex flex-1 flex-col items-center">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Explore a Vernex Product for Your Business
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">
            Request a demo for live products or join the waitlist for upcoming
            Vernex software systems.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-semibold text-white transition-colors duration-[250ms] hover:bg-[#0a1c40] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2"
              >
                Request Demo
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/vernex-ecosystem"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#D5DAE4] bg-white px-8 text-sm font-semibold text-primary transition-colors duration-[250ms] hover:border-primary/40 hover:bg-[#F8FAFC] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2"
              >
                View Vernex Ecosystem
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductsCTA;
