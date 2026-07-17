import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
}

const SectionHeading = ({
  label,
  title,
  subtitle,
}: SectionHeadingProps): JSX.Element => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="mx-auto mb-9 max-w-3xl text-center md:mb-11"
  >
    <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#B88932]">
      {label}
    </span>
    <h2 className="text-3xl font-bold text-primary md:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
