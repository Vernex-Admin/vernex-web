import { motion } from "framer-motion";
import { marketingServices } from "./servicesData";
import ServiceCard from "./ServiceCard";

const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const ServiceGrid = (): JSX.Element => {
  return (
    <section className="px-4 py-12 md:py-16">
      <motion.div
        variants={gridStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6"
      >
        {marketingServices.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceGrid;
