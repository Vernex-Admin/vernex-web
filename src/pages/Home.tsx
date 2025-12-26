import { Link } from "react-router-dom";
import { ArrowRight, Users, Rocket, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";

/* ---------- Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(10,30,89,0.96), rgba(10,30,89,0.92)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,77,0.12),transparent_65%)]" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="inline-block mb-6 px-5 py-1.5 rounded-full border border-accent/30 bg-accent/5"
          >
            <span className="text-sm font-medium text-accent">
              Enterprise Digital Ecosystem
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold text-primary-foreground text-[clamp(2.4rem,6vw,4rem)] leading-tight mb-6"
          >
            Build, Modernize & Scale with{" "}
            <span className="text-gradient-gold">Vernex</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10"
          >
            A unified digital ecosystem delivering strategy, engineering, and
            growth — from idea to enterprise scale.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground px-8 py-5 font-semibold"
            >
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-5 font-semibold"
            >
              <Link to="/join-network">Join Network</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-24 bg-background">
        <motion.div
          className="container mx-auto px-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What <span className="text-gradient-gold">Vernex</span> Delivers
            </h2>
            <p className="text-muted-foreground text-lg">
              One partner. One ecosystem. Measurable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy & Consulting",
                desc: "Business-aligned digital roadmaps that reduce risk and accelerate growth.",
              },
              {
                title: "Build & Engineering",
                desc: "Web, mobile, AI, SaaS, and data systems engineered to scale reliably.",
              },
              {
                title: "Growth & Optimization",
                desc: "Marketing, analytics, and automation focused on long-term performance.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border bg-background p-8 text-center shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="py-24 bg-muted/10">
        <motion.div
          className="container mx-auto px-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Core Services
            </h2>
            <Link to="/services" className="text-accent font-medium hover:underline">
              View all →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <motion.div key={service.slug} variants={fadeUp}>
                {/* ✅ SAFE: pass entire object */}
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <Users size={38} className="mx-auto text-accent mb-3" />
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="opacity-90">Professionals Network</p>
          </div>
          <div>
            <Rocket size={38} className="mx-auto text-accent mb-3" />
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="opacity-90">Successful Deliveries</p>
          </div>
          <div>
            <Award size={38} className="mx-auto text-accent mb-3" />
            <h3 className="text-4xl font-bold">15</h3>
            <p className="opacity-90">Service Verticals</p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Build Something Meaningful?
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-primary-foreground/90">
            Let’s map the right combination of services for your goals.
          </p>

          <Button size="lg" asChild className="bg-accent text-accent-foreground">
            <Link to="/contact">Book a Discovery Call</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
