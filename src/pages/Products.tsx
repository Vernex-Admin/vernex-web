import { motion } from "framer-motion";
import { liveProducts, upcomingProducts } from "@/data/products";
import ProductHero from "@/components/products/ProductHero";
import ProductSection from "@/components/products/ProductSection";
import LiveProductCard from "@/components/products/LiveProductCard";
import UpcomingProductCard from "@/components/products/UpcomingProductCard";
import ProductsCTA from "@/components/products/ProductsCTA";

const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Products = (): JSX.Element => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-20 text-foreground">
      <ProductHero />

      <ProductSection
        title="Live / Service-ready Products"
        subtitle="Products available for request, demo, and service-ready business implementation."
      >
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {liveProducts.map((product) => (
            <LiveProductCard key={product.name} product={product} />
          ))}
        </motion.div>
      </ProductSection>

      <ProductSection
        title="Upcoming Products"
        subtitle="Planned and in-development products. These are not yet presented as completed products."
      >
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-4"
        >
          {upcomingProducts.map((product) => (
            <UpcomingProductCard key={product.name} product={product} />
          ))}
        </motion.div>
      </ProductSection>

      <ProductsCTA />
    </div>
  );
};

export default Products;
