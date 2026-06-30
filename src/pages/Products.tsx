import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { liveProducts, upcomingProducts } from "@/data/products";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Products = () => {
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
              Vernex Gen Technologies
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mb-5 text-4xl font-bold text-primary md:text-6xl"
            >
              Vernex Software Products
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Explore Vernex-built software products for schools, restaurants,
              shops, clinics, sales teams, and growing businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Live / Service-ready Products
            </h2>
            <p className="max-w-2xl">
              Products available for request, demo, and service-ready business
              implementation.
            </p>
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

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Upcoming Products
            </h2>
            <p className="max-w-2xl">
              Planned and in-development products. These are not presented as
              completed products.
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

      <section className="section-shell bg-[#F7F9FC] text-center">
        <div className="container mx-auto px-4">
          <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Explore a Vernex Product for Your Business
          </h2>
          <p className="mx-auto mb-8 max-w-3xl">
            Request a demo for live products or join the waitlist for upcoming
            Vernex software systems.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Request Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/gen-technologies">View Gen Technologies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
