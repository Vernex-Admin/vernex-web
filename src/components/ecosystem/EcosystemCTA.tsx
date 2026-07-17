import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const logo = "/vernex-logo-main.png";

const GoldButton = ({ to, label }: { to: string; label: string }): JSX.Element => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25 }} className="w-full sm:w-auto">
    <Link
      to={to}
      className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#D8B36A] px-7 text-sm font-semibold text-[#0B1F4D] transition-colors duration-[250ms] hover:bg-[#c9a356] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F4D]"
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  </motion.div>
);

const OutlineButton = ({ to, label }: { to: string; label: string }): JSX.Element => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25 }} className="w-full sm:w-auto">
    <Link
      to={to}
      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/40 px-7 text-sm font-semibold text-white transition-colors duration-[250ms] hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F4D]"
    >
      {label}
    </Link>
  </motion.div>
);

const EcosystemCTA = (): JSX.Element => {
  return (
    <section className="px-4 pb-16 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#0B1F4D] px-6 py-10 shadow-[0_28px_60px_-32px_rgba(11,31,77,0.7)] sm:px-10"
      >
        {/* Subtle dotted texture */}
        <div
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 opacity-[0.15] lg:block"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(#D8B36A 1px, transparent 1px)",
            backgroundSize: "14px 14px",
            WebkitMaskImage: "radial-gradient(ellipse 80% 90% at 100% 50%, #000 30%, transparent 75%)",
            maskImage: "radial-gradient(ellipse 80% 90% at 100% 50%, #000 30%, transparent 75%)",
          }}
        />

        {/* Desktop layout */}
        <div className="relative z-10 hidden items-center gap-8 lg:flex">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white xl:text-3xl">
              Ready to Build Something Better?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
              Whether you need better systems, stronger marketing, a professional
              website, or complete digital support — Vernex is here to help.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <GoldButton to="/contact" label="Start Your Project" />
            <OutlineButton to="/products" label="Explore Vernex Ecosystem" />
          </div>

          <motion.img
            src={logo}
            alt="Vernex"
            loading="lazy"
            whileHover={{ rotate: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="h-16 w-auto max-w-[120px] shrink-0 object-contain opacity-90"
          />
        </div>

        {/* Mobile / tablet layout */}
        <div className="relative z-10 flex flex-col items-center text-center lg:hidden">
          <h2 className="text-2xl font-bold text-white">
            Ready to Build Something Better?
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
            Whether you need better systems, stronger marketing, a professional
            website, or complete digital support — Vernex is here to help.
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:max-w-md">
            <GoldButton to="/contact" label="Start Your Project" />
            <OutlineButton to="/products" label="Explore Vernex Ecosystem" />
          </div>
          <img
            src={logo}
            alt="Vernex"
            loading="lazy"
            className="mt-7 h-12 w-auto max-w-[110px] object-contain opacity-90"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default EcosystemCTA;
