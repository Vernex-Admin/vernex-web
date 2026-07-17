import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, timelineSteps, whyCards } from "./homeData";

const WhyChooseSection = (): JSX.Element => {
  return (
    <section className="bg-[#FBFAF7] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Desktop: Built for Real Business Execution */}
        <div className="hidden lg:block">
          <SectionHeading
            label="Why Businesses Choose Vernex"
            title="Built for Real Business Execution"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {whyCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="rounded-2xl border border-[#E8E2D8] bg-white p-7 shadow-[0_16px_40px_-30px_rgba(11,31,77,0.4)] transition-shadow duration-300 hover:shadow-[0_26px_54px_-28px_rgba(11,31,77,0.5)]"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8B36A] text-xs font-bold text-[#B88932]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1F4D] text-[#D8B36A]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{card.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile / tablet: Growth Journey Timeline */}
        <div className="lg:hidden">
          <SectionHeading
            label="Why Choose Vernex"
            title="Your Growth Partner from Start to Scale"
          />
          <div className="relative">
            {/* dashed connector */}
            <div
              className="absolute left-[12.5%] right-[12.5%] top-6 border-t border-dashed border-[#D8B36A]/60"
              aria-hidden="true"
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative grid grid-cols-4 gap-2"
            >
              {timelineSteps.map((step) => {
                const Icon = step.icon;
                const isGold = step.accent === "gold";
                return (
                  <motion.div
                    key={step.step}
                    variants={fadeUp}
                    className="flex flex-col items-center text-center"
                  >
                    <span
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-[#FBFAF7] ${
                        isGold ? "bg-[#D8B36A] text-[#0B1F4D]" : "bg-[#0B1F4D] text-[#D8B36A]"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-3 text-[11px] font-bold text-[#B88932]">
                      {step.step}. {step.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-slate-500">{step.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
