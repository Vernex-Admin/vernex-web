import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  packages,
  problems,
  processSteps,
  serviceCategories,
} from "@/data/marketing";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const DigitalMarketing = () => {
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
            <motion.h1
              variants={fadeUp}
              className="mx-auto mb-5 max-w-5xl text-4xl font-bold text-primary md:text-6xl"
            >
              Digital Marketing Services That Make Your Brand Visible, Professional, and Enquiry-Ready
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Vernex Digital Marketing helps businesses, founders, creators,
              and local brands grow through content, design, social media,
              websites, ads, and personal branding.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/services">View Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/contact">Get Free Brand Audit</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Problems We Solve</h2>
            <p>
              Clear improvements for brands that need stronger visibility,
              better presentation, and more consistent enquiries.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <div key={problem} className="corporate-card p-5">
                <CheckCircle2 className="mb-4 text-accent" size={22} />
                <h3 className="font-semibold">{problem}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Service Categories</h2>
              <p className="max-w-2xl">
                Four focused service areas for brands that need better content,
                visibility, campaigns, and trust.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCategories.map((category) => (
              <article
                key={category.title}
                className="corporate-card corporate-card-hover p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{category.title}</h3>
                <p className="text-sm leading-relaxed">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Packages</h2>
            <p>
              Choose a practical starting point based on your current brand
              stage and monthly growth needs.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.title}
                className="corporate-card corporate-card-hover flex h-full flex-col p-7"
              >
                <span className="mb-4 w-fit rounded-full border border-accent/40 bg-secondary/80 px-3 py-1 text-xs font-semibold text-primary">
                  {item.title}
                </span>
                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="mb-6 text-sm leading-relaxed">{item.bestFor}</p>
                <ul className="mb-7 grid gap-2 text-sm text-muted-foreground">
                  {item.includes.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-auto">
                  <Link to="/contact">Start a Project</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Our Process</h2>
            <p>
              A simple monthly workflow for cleaner strategy, stronger content,
              and measurable improvement.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="corporate-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-accent text-sm font-bold text-accent">
                  {index + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F7F9FC] text-center">
        <div className="container mx-auto px-4">
          <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Book a Free Digital Growth Audit
          </h2>
          <p className="mx-auto mb-8 max-w-3xl">
            Send us your business name, Instagram page, or Google profile.
            Vernex will review your digital presence and share practical
            improvement ideas.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Start a Project</Link>
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

export default DigitalMarketing;
