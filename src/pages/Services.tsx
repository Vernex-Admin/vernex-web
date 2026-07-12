import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { marketingServices } from "@/data/marketing";
import React from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pt-20 text-foreground">
      <section className="relative bg-white py-24 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F9FC] to-white" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent"
            >
              Vernex Digital Marketing
            </motion.p>
            <h1 className="mb-5 text-4xl font-bold text-primary md:text-6xl">
              Marketing Services
            </h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Explore our complete growth services for businesses, founders,
              creators, and local brands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {marketingServices.map((service, index) => (
              <article
                key={service.name}
                className="corporate-card corporate-card-hover flex h-full flex-col p-7"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                    <service.icon size={24} />
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent text-xs font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mb-3 text-xl font-bold">{service.name}</h2>
                <p className="mb-5 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-7 rounded-lg border border-border bg-[#F7F9FC] p-4">
                  <div className="flex gap-2">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
                    <p className="text-sm font-medium text-primary">{service.benefit}</p>
                  </div>
                </div>

                <Button asChild className="mt-auto">
                  <Link to="/contact">
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Need a Digital Growth Partner?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl">
            Vernex Digital Marketing can help you plan, create, publish,
            promote, and track your brand presence with a practical monthly
            system.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/vernex-ecosystem">View Vernex Ecosystem</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/contact">Contact Vernex</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
