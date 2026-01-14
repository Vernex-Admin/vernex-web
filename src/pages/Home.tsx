import { Link } from "react-router-dom";
import { ArrowRight, Users, Rocket, Award } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";

/* ---------- Animations ---------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const heroTitle: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.94)),
            url(${heroBg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* gold ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.16),transparent_65%)]" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="inline-block mb-6 px-5 py-1.5 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/5"
          >
            <span className="text-sm font-medium text-[#C9A227]">
              Enterprise Digital Ecosystem
            </span>
          </motion.div>

          <motion.h1
            variants={heroTitle}
            className="font-heading font-bold text-[clamp(2.6rem,6vw,4.2rem)] leading-tight mb-6"
          >
            Build, Modernize & Scale with{" "}
            <span className="text-[#C9A227]">Vernex</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-white/85 max-w-3xl mx-auto mb-10"
          >
            A unified digital ecosystem delivering strategy, engineering, and
            growth — from idea to enterprise scale.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Explore Services — FIXED */}
            <Button
              asChild
              size="lg"
              className="
                bg-[#C9A227] text-black
                px-8 py-5 font-semibold
                hover:bg-[#d8b84a]
                active:bg-[#C9A227]
                focus-visible:bg-[#C9A227]
                focus-visible:ring-0
              "
            >
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>

            {/* Join Network — FIXED */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                border-2 border-[#C9A227] text-[#C9A227]
                px-8 py-5 font-semibold
                hover:bg-[#C9A227] hover:text-black
                active:bg-[#C9A227] active:text-black
                focus-visible:ring-0
              "
            >
              <Link to="/join-network">Join Network</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* gold divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      {/* ================= WHAT WE DO ================= */}
      <section className="py-24 bg-black">
        <motion.div
          className="container mx-auto px-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What <span className="text-[#C9A227]">Vernex</span> Delivers
            </h2>
            <p className="text-white/70 text-lg">
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
                whileHover={{ y: -6 }}
                className="
                  rounded-2xl border border-white/10
                  bg-gradient-to-br from-[#0b0b0b] to-black
                  p-8 text-center
                  hover:border-[#C9A227]/40
                  transition
                "
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="py-24 bg-black">
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
            <Link
              to="/services"
              className="text-[#C9A227] font-medium hover:underline"
            >
              View all →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 bg-black">
        <motion.div
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { icon: Users, value: "50+", label: "Professionals Network" },
            { icon: Rocket, value: "200+", label: "Successful Deliveries" },
            { icon: Award, value: "15", label: "Service Verticals" },
          ].map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <item.icon size={38} className="mx-auto text-[#C9A227] mb-3" />
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="text-white/70">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Ready to Build Something Meaningful?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-white/70">
          Let’s map the right combination of services for your goals.
        </p>

        {/* DIRECT CALL — NO FADE */}
        <a
          href="tel:9789912805"
          className="
            inline-flex items-center justify-center
            px-10 py-4 rounded-lg
            bg-[#C9A227] text-black
            font-semibold
            hover:bg-[#d8b84a]
            transition
          "
        >
          Book a Discovery Call
        </a>
      </section>

    </div>
  );
};

export default Home;
