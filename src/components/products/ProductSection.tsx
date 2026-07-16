import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const ProductSection = ({
  title,
  subtitle,
  children,
}: ProductSectionProps): JSX.Element => {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-8 md:mb-10"
        >
          <div className="flex items-center gap-3">
            <span
              className="h-7 w-1.5 shrink-0 rounded-full bg-[#D8B36A]"
              aria-hidden="true"
            />
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              {title}
            </h2>
          </div>
          <p className="mt-2.5 pl-[18px] text-sm leading-relaxed text-slate-500 md:text-base">
            {subtitle}
          </p>
        </motion.div>

        {children}
      </div>
    </section>
  );
};

export default ProductSection;
