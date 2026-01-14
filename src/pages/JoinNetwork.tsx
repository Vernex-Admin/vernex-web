import { Users, TrendingUp, Award, MailCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

/* ================= LINKS ================= */
const COLLAB_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdK1BtQLSwb0NHp1qWJCKpN5e294TuIs2sITMvnFq1Lyj6Xog/viewform?usp=header";

const TALENT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdNKa4rS15PES--cVojdKwLRFvPqkEqcu7xYYFYFxwfcZLV5A/viewform?usp=header";

/* ================= ANIMATIONS ================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ================= COMPONENT ================= */
const JoinNetwork = () => {
  return (
    <div className="min-h-screen pt-20 bg-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-black to-black" />
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center max-w-4xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-heading font-bold mb-5"
          >
            Join the <span className="text-[#C9A94D]">Vernex Network</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-gray-300"
          >
            Collaborate with Vernex as a{" "}
            <strong>company / agency</strong> or join our ecosystem as a{" "}
            <strong>freelancer, student, or professional</strong>.
          </motion.p>
        </motion.div>
      </section>

      {/* GOLD DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A94D]/70 to-transparent" />

      {/* ================= WHY VERNEX ================= */}
      <section className="py-24 bg-[#0b0b0b]">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
          >
            Why <span className="text-[#C9A94D]">Vernex</span>?
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
          >
            {[
              {
                icon: <Users size={36} className="text-[#C9A94D]" />,
                title: "Collaborative Network",
                text: "Work with agencies, startups, enterprises, and institutions across domains.",
              },
              {
                icon: <TrendingUp size={36} className="text-[#C9A94D]" />,
                title: "Growth-Oriented",
                text: "Upskill continuously through real-world execution and modern stacks.",
              },
              {
                icon: <Award size={36} className="text-[#C9A94D]" />,
                title: "Real Impact",
                text: "Build credibility through meaningful, production-grade work.",
              },
              {
                icon: <MailCheck size={36} className="text-[#C9A94D]" />,
                title: "Structured Onboarding",
                text: "Clear process, transparent collaboration, long-term alignment.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="
                  text-center space-y-4
                  bg-gradient-to-b from-[#121212] to-[#0a0a0a]
                  border border-white/10
                  rounded-2xl p-8
                  hover:border-[#C9A94D]/50
                  hover:shadow-[0_0_30px_rgba(201,169,77,0.25)]
                  transition
                "
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C9A94D]/15 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= COMPANY / AGENCY ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Collaborate as{" "}
              <span className="text-[#C9A94D]">Company / Agency</span>
            </h2>

            <p className="text-gray-400 mb-6">
              Ideal for IT firms, SaaS teams, agencies, colleges, and institutions
              looking to collaborate on delivery, white-label execution, or joint initiatives.
            </p>

            <ul className="space-y-3 text-gray-400 mb-10">
              <li>• Strategic delivery & execution partnerships</li>
              <li>• White-label or co-branded engagements</li>
              <li>• College & institutional collaborations</li>
              <li>• Long-term capacity & technology partnerships</li>
            </ul>

            <Button
              asChild
              size="lg"
              className="
                bg-[#C9A94D] text-black
                hover:bg-[#b89a3f]
                font-semibold px-8
                shadow-[0_0_25px_rgba(201,169,77,0.4)]
              "
            >
              <a href={COLLAB_FORM_URL} target="_blank" rel="noreferrer">
                Submit Collaboration Form
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A94D]/60 to-transparent" />

      {/* ================= TALENT ================= */}
      <section className="py-24 bg-[#0b0b0b]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Join as{" "}
              <span className="text-[#C9A94D]">
                Freelancer / Student / Professional
              </span>
            </h2>

            <p className="text-gray-400 mb-6">
              Learn from real projects, earn from your skills, and grow your
              portfolio in a structured, high-trust environment.
            </p>

            <ul className="space-y-3 text-gray-400 mb-10">
              <li>• Access to premium projects across 15+ service domains</li>
              <li>• Mentorship, reviews & guided learning paths</li>
              <li>• Flexible engagement — part-time, project-based, weekends</li>
              <li>• Portfolio building & recognition inside Vernex</li>
            </ul>

            <Button
              asChild
              size="lg"
              className="
                bg-[#C9A94D] text-black
                hover:bg-[#b89a3f]
                font-semibold px-8
                shadow-[0_0_25px_rgba(201,169,77,0.4)]
              "
            >
              <a href={TALENT_FORM_URL} target="_blank" rel="noreferrer">
                Apply via Google Form
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinNetwork;
