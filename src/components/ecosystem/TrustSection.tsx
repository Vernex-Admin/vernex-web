import { motion } from "framer-motion";
import { Users2 } from "lucide-react";
import { fadeUp, stagger, trustBadges, trustStats } from "./ecosystemData";

/* -------------------------------------------------------------------------- */
/*  Desktop statistics grid (3 x 2 white cards)                                */
/* -------------------------------------------------------------------------- */

const StatsGrid = (): JSX.Element => (
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="grid grid-cols-3 gap-3"
  >
    {trustStats.map((stat) => (
      <motion.div
        key={stat.label}
        variants={fadeUp}
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-[#E8E2D8] bg-white px-3 py-5 text-center shadow-[0_16px_40px_-32px_rgba(11,31,77,0.4)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(11,31,77,0.5)]"
      >
        <span className="text-2xl font-bold text-[#C79A2E] xl:text-3xl">{stat.value}</span>
        <span className="mt-1 text-xs leading-tight text-slate-500">{stat.label}</span>
      </motion.div>
    ))}
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/*  Team visual                                                                */
/* -------------------------------------------------------------------------- */

const TeamVisual = (): JSX.Element => (
  <div className="relative overflow-hidden rounded-2xl border border-[#E8E2D8] bg-gradient-to-br from-[#0B1F4D] via-[#12295c] to-[#0B1F4D] shadow-[0_24px_55px_-30px_rgba(11,31,77,0.6)]">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.14]"
      aria-hidden="true"
      style={{
        backgroundImage: "radial-gradient(#D8B36A 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
    <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-3 p-8 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D8B36A]/40 bg-white/5 text-[#D8B36A]">
        <Users2 className="h-8 w-8" aria-hidden="true" />
      </span>
      <p className="text-lg font-bold text-white">The Vernex Team</p>
      <p className="max-w-[220px] text-sm leading-relaxed text-slate-300">
        A young, founder-led team building practical systems and growth for real
        businesses.
      </p>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Navy badges strip                                                          */
/* -------------------------------------------------------------------------- */

const BadgesStrip = (): JSX.Element => (
  <div className="mt-8 overflow-hidden rounded-2xl bg-[#0B1F4D] px-5 py-6 shadow-[0_24px_55px_-32px_rgba(11,31,77,0.7)] sm:px-8">
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {trustBadges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div key={badge.title} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D8B36A]">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white">{badge.title}</h3>
              <p className="mt-0.5 text-xs leading-snug text-slate-400">{badge.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Mobile statistics board — rendered after the testimonials on small screens */
/* -------------------------------------------------------------------------- */

export const MobileStatsBoard = (): JSX.Element => (
  <section className="px-4 pb-2 pt-2 lg:hidden">
    <div className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-2xl bg-[#0B1F4D] px-5 py-6 shadow-[0_24px_55px_-32px_rgba(11,31,77,0.7)]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6">
          {trustStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D8B36A]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-lg font-bold text-[#D8B36A]">{stat.value}</p>
                  <p className="text-xs leading-tight text-slate-300">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/*  Trust section                                                              */
/* -------------------------------------------------------------------------- */

const TrustSection = (): JSX.Element => {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <span className="mb-3 block text-center text-xs font-bold uppercase tracking-[0.2em] text-[#B88932] lg:text-left">
          Why Businesses Trust Vernex
        </span>

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1fr_1.3fr]">
          {/* Left — heading + paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
              India Based.
              <br />
              Gen Z Led.
              <br />
              Business Focused.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500 lg:mx-0">
              We combine technology, marketing, automation, and creative execution to
              help modern businesses work better and grow faster.
            </p>
          </motion.div>

          {/* Center — team visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <TeamVisual />
          </motion.div>

          {/* Right — statistics (desktop) */}
          <div className="hidden lg:block">
            <StatsGrid />
          </div>
        </div>

        <BadgesStrip />
      </div>
    </section>
  );
};

export default TrustSection;
