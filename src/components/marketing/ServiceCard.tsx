import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { MarketingService } from "./servicesData";

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const ServiceCard = ({ service }: { service: MarketingService }): JSX.Element => {
  const { icon: Icon } = service;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col rounded-xl border border-[#E8E2D8] bg-white p-5 shadow-[0_14px_36px_-28px_rgba(11,36,84,0.4)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(11,36,84,0.5)] sm:p-6"
    >
      {/* Header: gold circular icon + title */}
      <div className="flex items-center gap-2.5 sm:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F2E8] text-[#C79A2E] sm:h-14 sm:w-14">
          <Icon className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true" />
        </span>
        <h3 className="min-w-0 break-words text-sm font-bold leading-tight text-primary sm:text-lg lg:text-xl">
          {service.name}
        </h3>
      </div>

      {/* Mobile / tablet body: short copy + divider + text link */}
      <div className="flex flex-1 flex-col lg:hidden">
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          {service.shortDescription}
        </p>
        <div className="mt-auto pt-4">
          <div className="mb-3 h-px w-full bg-[#E8E2D8]" aria-hidden="true" />
          <Link
            to="/contact"
            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            Explore Now
            <ArrowRight
              className="h-4 w-4 text-[#C79A2E] transition-transform duration-300 group-hover/link:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* Desktop body: full copy + highlight box + navy button */}
      <div className="hidden flex-1 flex-col lg:flex">
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          {service.description}
        </p>

        <div className="mt-4 flex items-start gap-2 rounded-lg border border-[#EFE7D4] bg-[#FBF7EE] p-3">
          <CheckCircle2
            className="mt-0.5 h-4 w-4 shrink-0 text-[#C79A2E]"
            aria-hidden="true"
          />
          <p className="text-sm font-medium leading-snug text-primary">
            {service.benefit}
          </p>
        </div>

        <div className="mt-auto pt-5">
          <Link
            to="/contact"
            className="group/btn flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-[250ms] hover:bg-[#0a1c40] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2"
          >
            Explore Now
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
