import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { marketingServices } from "@/components/marketing/servicesData";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./homeData";

const services = marketingServices.slice(0, 4);

const MarketingPreview = (): JSX.Element => {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Marketing Services"
          title="Marketing Services Built for Visibility"
          subtitle="From strategy and content to websites and campaigns, Vernex helps brands look clear, stay active, and generate better enquiries."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-[#E8E2D8] bg-white p-5 shadow-[0_16px_40px_-30px_rgba(11,31,77,0.4)] transition-shadow duration-300 hover:shadow-[0_26px_54px_-28px_rgba(11,31,77,0.5)] sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B1F4D] text-[#D8B36A]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="min-w-0 break-words text-sm font-bold leading-tight text-primary sm:text-base">
                    {service.name}
                  </h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {service.shortDescription}
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B88932]"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
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

export default MarketingPreview;
