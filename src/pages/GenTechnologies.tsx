import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { buildCategories, liveProducts, upcomingProducts } from "@/data/products";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const workSteps = [
  "Understand business workflow",
  "Plan product modules",
  "Build and test system",
  "Deploy, support, and improve",
];

const GenTechnologies = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pt-20 text-foreground">
      <section className="relative overflow-hidden bg-white py-24 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F9FC] to-white" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent"
            >
              Vernex Gen Technologies
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mx-auto mb-5 max-w-5xl text-4xl font-bold text-primary md:text-6xl"
            >
              Business Software and Automation Systems Built for Real-World Operations
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Vernex Gen Technologies builds SaaS products, ERP systems, BI
              dashboards, automation tools, and business software for schools,
              restaurants, clinics, retail shops, and growing businesses.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/products">View Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/contact">Request Demo</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">What We Build</h2>
            <p>
              Software systems designed to make business operations easier to
              manage, measure, and improve.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {buildCategories.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="corporate-card p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                Live / Service-Ready Products
              </h2>
              <p className="max-w-2xl">
                Products available for demo, setup, and business implementation.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {liveProducts.map((product) => (
              <motion.div key={product.name} variants={fadeUp}>
                <ProductCard product={product} ctaLabel="Request Demo" compact />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Upcoming Products</h2>
            <p>
              These products are planned or in development. They are not shown
              as completed products.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {upcomingProducts.map((product) => (
              <motion.div key={product.name} variants={fadeUp}>
                <ProductCard product={product} ctaLabel="Join Waitlist" compact />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">How We Work</h2>
            <p>
              A simple delivery process focused on practical workflows,
              business clarity, and reliable implementation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {workSteps.map((step, index) => (
              <div key={step} className="corporate-card p-6">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-accent text-sm font-bold text-accent">
                  {index + 1}
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-accent" />
                  <h3 className="font-semibold">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F7F9FC] text-center">
        <div className="container mx-auto px-4">
          <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Need a Software System for Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl">
            Talk to Vernex Gen Technologies and explore SaaS, automation, ERP,
            dashboard, or custom software solutions for your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Request Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/contact">
                Contact Vernex <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenTechnologies;
