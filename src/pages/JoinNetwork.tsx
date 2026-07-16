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
    <div className="min-h-screen overflow-x-hidden bg-background pt-20 text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F9FC] to-white" />
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
            Join the <span className="text-primary">Vernex Network</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base text-muted-foreground md:text-xl"
          >
            Collaborate with Vernex as a{" "}
            <strong>company / agency</strong> or join our ecosystem as a{" "}
            <strong>freelancer, student, or professional</strong>.
          </motion.p>
        </motion.div>
      </section>

      <div className="gold-divider" />

      {/* ================= WHY VERNEX ================= */}
      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
          >
            Why <span className="text-primary">Vernex</span>?
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
                icon: <Users size={36} className="text-primary" />,
                title: "Collaborative Network",
                text: "Work with agencies, startups, enterprises, and institutions across domains.",
              },
              {
                icon: <TrendingUp size={36} className="text-primary" />,
                title: "Growth-Oriented",
                text: "Upskill continuously through real-world execution and modern stacks.",
              },
              {
                icon: <Award size={36} className="text-primary" />,
                title: "Real Impact",
                text: "Build credibility through meaningful, production-grade work.",
              },
              {
                icon: <MailCheck size={36} className="text-primary" />,
                title: "Structured Onboarding",
                text: "Clear process, transparent collaboration, long-term alignment.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="
                  corporate-card corporate-card-hover
                  space-y-4 rounded-lg p-8 text-center
                "
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-secondary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= COMPANY / AGENCY ================= */}
      <section className="section-shell bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Collaborate as{" "}
              <span className="text-primary">Company / Agency</span>
            </h2>

            <p className="mb-6 text-muted-foreground">
              Ideal for IT firms, SaaS teams, agencies, colleges, and institutions
              looking to collaborate on delivery, white-label execution, or joint initiatives.
            </p>

            <ul className="mb-10 space-y-3 text-muted-foreground">
              <li>• Strategic delivery & execution partnerships</li>
              <li>• White-label or co-branded engagements</li>
              <li>• College & institutional collaborations</li>
              <li>• Long-term capacity & technology partnerships</li>
            </ul>

            <Button
              asChild
              size="lg"
              className="
                px-8 font-semibold
              "
            >
              <a href={COLLAB_FORM_URL} target="_blank" rel="noreferrer">
                Submit Collaboration Form
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ================= TALENT ================= */}
      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Join as{" "}
              <span className="text-primary">
                Freelancer / Student / Professional
              </span>
            </h2>

            <p className="mb-6 text-muted-foreground">
              Learn from real projects, earn from your skills, and grow your
              portfolio in a structured, high-trust environment.
            </p>

            <ul className="mb-10 space-y-3 text-muted-foreground">
              <li>• Access to premium projects across 15+ service domains</li>
              <li>• Mentorship, reviews & guided learning paths</li>
              <li>• Flexible engagement — part-time, project-based, weekends</li>
              <li>• Portfolio building & recognition inside Vernex</li>
            </ul>

            <Button
              asChild
              size="lg"
              className="
                px-8 font-semibold
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
