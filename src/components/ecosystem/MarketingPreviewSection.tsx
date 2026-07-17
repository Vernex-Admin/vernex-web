import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { marketingServices } from "@/components/marketing/servicesData";
import SectionHeading from "@/components/home/SectionHeading";
import { fadeUp, stagger } from "./ecosystemData";

/* The five headline services shown on the ecosystem page, in reference order. */
const featuredNames = [
  "Digital Marketing",
  "Social Media Management",
  "Personal Branding",
  "Website Development",
  "Content Creation",
];

const ecosystemBlurbs: Record<string, string> = {
  "Digital Marketing":
    "SEO, paid ads, Google Business, lead generation, and performance marketing.",
  "Social Media Management":
    "Content, strategy, scheduling, community, engagement, and brand growth.",
  "Personal Branding":
    "Founder branding, LinkedIn growth, profile building, authority, and trust.",
  "Website Development":
    "Responsive websites that convert visitors into leads, calls, and sales.",
  "Content Creation":
    "Graphics, videos, reels, copywriting, brand content, and storytelling.",
};

const services = featuredNames
  .map((name) => marketingServices.find((service) => service.name === name))
  .filter((service): service is (typeof marketingServices)[number] => Boolean(service));

const MarketingPreviewSection = (): JSX.Element => {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Marketing Services"
          title="Complete Marketing Services for Real Growth"
          subtitle="From branding to performance campaigns, we help businesses attract, engage, and grow."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-[#E8E2D8] bg-white p-5 shadow-[0_16px_40px_-30px_rgba(11,31,77,0.4)] transition-shadow duration-300 hover:shadow-[0_26px_54px_-28px_rgba(11,31,77,0.5)]"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F2E8] text-[#C79A2E]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-bold leading-tight text-primary sm:text-base">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {ecosystemBlurbs[service.name] ?? service.shortDescription}
                </p>
                <Link
                  to="/services"
                  className="group/btn mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#B88932] sm:text-sm"
                >
                  Explore Service
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-9 text-center">
          <Link
            to="/services"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#D5DAE4] bg-white px-7 text-sm font-semibold text-primary transition-colors duration-[250ms] hover:border-primary/40 hover:bg-[#F8FAFC] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2"
          >
            View All Marketing Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketingPreviewSection;
