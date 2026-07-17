import { motion } from "framer-motion";
import { fadeUp, stagger, trustFeatures } from "./contactData";

const TrustFeatures = (): JSX.Element => {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-2 gap-x-4 gap-y-8 rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-[0_18px_44px_-32px_rgba(11,31,77,0.4)] md:grid-cols-4 md:gap-0 md:p-8"
    >
      {trustFeatures.map((feature) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            variants={fadeUp}
            className="flex flex-col items-center text-center md:items-start md:px-6 md:text-left md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-[#E8E2D8] md:first:pl-0 md:last:pr-0"
          >
            <Icon className="h-8 w-8 text-[#C79A2E]" aria-hidden="true" />
            <h3 className="mt-3 text-sm font-bold text-primary sm:text-base">{feature.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">{feature.text}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TrustFeatures;
