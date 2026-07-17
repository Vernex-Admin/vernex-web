import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

export interface SocialCardData {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
  ariaLabel: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const SocialCard = ({
  title,
  description,
  href,
  icon: Icon,
  external,
  ariaLabel,
}: SocialCardData): JSX.Element => {
  return (
    <motion.a
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className="group flex h-full items-center gap-4 rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-[0_14px_34px_-26px_rgba(11,36,84,0.35)] transition-shadow duration-300 hover:shadow-[0_26px_52px_-28px_rgba(11,36,84,0.45)] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-5"
    >
      {/* Icon */}
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F7F2E8] text-primary transition-colors duration-300 group-hover:bg-[#F1E7CF]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      {/* Text */}
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-bold leading-tight text-primary sm:text-xl">
          {title}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-slate-500 sm:text-[15px]">
          {description}
        </span>
      </span>

      {/* Action */}
      <span className="flex shrink-0 items-center gap-3 sm:gap-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8912F]">
          Open
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D8B36A] text-white shadow-[0_8px_18px_-8px_rgba(216,179,106,0.9)] transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </span>
    </motion.a>
  );
};

export default SocialCard;
