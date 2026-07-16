import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/home/SectionHeading";
import { divisions, fadeUp, stagger, type DivisionId } from "./ecosystemData";

interface DivisionCardsProps {
  active: DivisionId | null;
  onSelect: (id: DivisionId) => void;
}

/* Stylized dashboard mockup used inside each division card */
const DashboardMock = ({ dark }: { dark?: boolean }): JSX.Element => {
  const frame = dark
    ? "border-white/15 bg-[#0f2a5e]"
    : "border-[#E8E2D8] bg-white";
  const bar = dark ? "bg-white/15" : "bg-[#E8E2D8]";
  return (
    <div className={`overflow-hidden rounded-lg border ${frame} shadow-[0_18px_40px_-28px_rgba(11,31,77,0.6)]`}>
      <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${dark ? "border-white/10" : "border-[#EEF0F4]"}`}>
        <span className="h-2 w-2 rounded-full bg-[#D8B36A]" />
        <span className={`h-2 w-2 rounded-full ${bar}`} />
        <span className={`h-2 w-2 rounded-full ${bar}`} />
      </div>
      <div className="flex gap-3 p-3">
        <div className="flex-1 space-y-2">
          <div className={`h-2 w-3/4 rounded-full ${bar}`} />
          <div className={`h-2 w-1/2 rounded-full ${bar}`} />
          <div className="flex items-end gap-1.5 pt-2">
            {[40, 65, 50, 80, 60].map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-sm bg-[#D8B36A]"
                style={{ height: `${h * 0.5}px`, opacity: 0.55 + i * 0.09 }}
              />
            ))}
          </div>
        </div>
        <div className="flex w-14 flex-col items-center justify-center">
          <div className="relative h-12 w-12">
            <div className={`absolute inset-0 rounded-full border-4 ${dark ? "border-white/15" : "border-[#EEF0F4]"}`} />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#D8B36A] border-r-[#D8B36A]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const DivisionCards = ({ active, onSelect }: DivisionCardsProps): JSX.Element => {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="One Vernex. Two Ways to Grow."
          title="One Brand. Two Engines for Business Growth."
          subtitle="Choose a division to explore its services. Technology systems and digital growth execution through two focused divisions."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {divisions.map((division) => {
            const dark = division.id === "technology";
            const isActive = active === division.id;
            return (
              <motion.button
                key={division.id}
                type="button"
                onClick={() => onSelect(division.id)}
                aria-pressed={isActive}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`flex flex-col overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2 sm:p-8 ${
                  dark
                    ? "border-[#0f2a5e] bg-[#0B1F4D]"
                    : "border-[#E8D9B8] bg-gradient-to-br from-[#FBF7EE] to-white"
                } ${
                  isActive
                    ? "shadow-[0_30px_60px_-28px_rgba(11,31,77,0.6)] ring-2 ring-[#D8B36A] ring-offset-2"
                    : "opacity-80 shadow-[0_20px_50px_-34px_rgba(11,31,77,0.4)] hover:opacity-100"
                }`}
              >
                {/* Header: brand logo + active indicator */}
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-[0_8px_20px_-12px_rgba(11,31,77,0.5)]">
                    <img
                      src={division.logo}
                      alt={division.alt}
                      loading="lazy"
                      className="h-7 w-auto max-w-[180px] object-contain object-left"
                    />
                  </span>
                  {isActive && (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D8B36A] text-[#0B1F4D]">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </div>

                <div className="mt-5 grid items-center gap-5 sm:grid-cols-[1.2fr_1fr]">
                  <p className={`text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-500"}`}>
                    {division.description}
                  </p>
                  <DashboardMock dark={dark} />
                </div>

                {/* Bullets */}
                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {division.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D8B36A]/20 text-[#C79A2E]">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <span className={`text-sm font-medium ${dark ? "text-slate-200" : "text-primary"}`}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Toggle CTA */}
                <span
                  className={`mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-colors duration-[250ms] ${
                    dark
                      ? isActive
                        ? "bg-[#D8B36A] text-[#0B1F4D]"
                        : "bg-white/10 text-white"
                      : isActive
                        ? "bg-[#0B1F4D] text-white"
                        : "bg-[#0B1F4D]/10 text-[#0B1F4D]"
                  }`}
                >
                  {isActive ? `Showing ${division.subtitle}` : division.cta}
                  {isActive ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DivisionCards;
