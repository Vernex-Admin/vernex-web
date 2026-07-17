import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Rocket } from "lucide-react";

interface CTAButtonProps {
  to: string;
  label: string;
  fullWidth?: boolean;
}

const NavyButton = ({ to, label, fullWidth = false }: CTAButtonProps): JSX.Element => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.25 }}
    className={fullWidth ? "w-full" : ""}
  >
    <Link
      to={to}
      className="group inline-flex h-12 w-full min-w-[190px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-colors duration-[250ms] hover:bg-[#0a1c40] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2"
    >
      {label}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  </motion.div>
);

const OutlineButton = ({ to, label, fullWidth = false }: CTAButtonProps): JSX.Element => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.25 }}
    className={fullWidth ? "w-full" : ""}
  >
    <Link
      to={to}
      className="group inline-flex h-12 w-full min-w-[190px] items-center justify-center gap-2 rounded-lg border border-[#D5DAE4] bg-white px-6 text-sm font-semibold text-primary transition-colors duration-[250ms] hover:border-primary/40 hover:bg-[#F8FAFC] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2"
    >
      {label}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  </motion.div>
);

const GrowthChart = (): JSX.Element => (
  <svg
    className="absolute bottom-8 left-6 hidden h-40 w-56 text-[#D8B36A] opacity-[0.35] lg:block xl:left-16"
    viewBox="0 0 224 160"
    fill="none"
    aria-hidden="true"
  >
    {[
      [10, 120],
      [45, 96],
      [80, 108],
      [115, 72],
      [150, 84],
      [185, 40],
    ].map(([x, y], i) => (
      <rect key={i} x={x} y={y} width="22" height={150 - y} rx="3" fill="currentColor" opacity="0.5" />
    ))}
    <path d="M14 118L52 92L88 104L124 64L158 78L206 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M188 26H206V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WorldMap = (): JSX.Element => (
  <div
    className="absolute right-6 top-1/2 hidden h-44 w-72 -translate-y-1/2 opacity-[0.3] lg:block xl:right-16"
    aria-hidden="true"
    style={{
      backgroundImage: "radial-gradient(#0B2454 1.3px, transparent 1.3px)",
      backgroundSize: "10px 10px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 50%, #000 55%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 50%, #000 55%, transparent 100%)",
    }}
  />
);

const MarketingCTA = (): JSX.Element => {
  return (
    <>
      {/* Desktop: full-width band with subtle decorations */}
      <section className="relative hidden overflow-hidden border-t border-[#EFEAE0] bg-[#FAF8F3] py-16 lg:block">
        <GrowthChart />
        <WorldMap />
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="relative z-10 mx-auto max-w-3xl px-4 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[#D8B36A]/50" aria-hidden="true" />
            <motion.span
              whileHover={{ rotate: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E8D9B8] bg-white text-[#C79A2E]"
            >
              <Handshake className="h-7 w-7" aria-hidden="true" />
            </motion.span>
            <span className="h-px w-14 bg-[#D8B36A]/50" aria-hidden="true" />
          </div>

          <h2 className="text-3xl font-bold text-primary">
            Need a Digital Growth Partner?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
            Vernex Digital Marketing can help you plan, create, publish, promote,
            and track your brand presence with a practical monthly system.
          </p>

          <div className="mt-7 flex items-center justify-center gap-4">
            <NavyButton to="/vernex-ecosystem" label="View Vernex Ecosystem" />
            <OutlineButton to="/contact" label="Contact Vernex" />
          </div>
        </motion.div>
      </section>

      {/* Mobile / tablet: bordered card */}
      <section className="px-4 py-10 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mx-auto max-w-2xl rounded-2xl border border-[#E8D9B8] bg-[#FBF6EA] p-6"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-[#D8B36A]">
              <Rocket className="h-8 w-8" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 className="text-lg font-bold leading-tight text-primary">
                Need a Digital Growth Partner?
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                Let Vernex help you plan, create, publish, promote, and track your
                brand growth with a proven strategy.
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <NavyButton to="/vernex-ecosystem" label="View Vernex Ecosystem" fullWidth />
            <OutlineButton to="/contact" label="Contact Vernex" fullWidth />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MarketingCTA;
