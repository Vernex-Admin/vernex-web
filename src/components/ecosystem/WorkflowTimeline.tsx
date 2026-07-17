import { motion } from "framer-motion";
import SectionHeading from "@/components/home/SectionHeading";
import { fadeUp, stagger, workflowSteps } from "./ecosystemData";

const WorkflowTimeline = (): JSX.Element => {
  return (
    <section className="bg-[#FBFAF7] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="How Vernex Works"
          title="From Requirement to Real Results"
          subtitle="A clear process. Smart execution. Measurable growth."
        />

        <div className="relative">
          {/* Gold connecting line */}
          <div
            className="absolute left-[10%] right-[10%] top-6 border-t border-dashed border-[#D8B36A]/60 md:top-7"
            aria-hidden="true"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative grid grid-cols-5 gap-1.5 sm:gap-3"
          >
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <motion.span
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1F4D] text-[#D8B36A] ring-4 ring-[#FBFAF7] md:h-14 md:w-14"
                  >
                    <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                  </motion.span>
                  <span className="mt-3 text-[11px] font-bold text-[#B88932] md:text-xs">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 px-0.5 text-[11px] font-bold leading-tight text-primary sm:text-sm md:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-2 hidden px-1 text-xs leading-snug text-slate-500 md:block">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowTimeline;
