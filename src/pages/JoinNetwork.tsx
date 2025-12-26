import { Users, TrendingUp, Award, MailCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

/* ✅ REAL GOOGLE FORM LINKS */
const COLLAB_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdK1BtQLSwb0NHp1qWJCKpN5e294TuIs2sITMvnFq1Lyj6Xog/viewform?usp=header";

const TALENT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdNKa4rS15PES--cVojdKwLRFvPqkEqcu7xYYFYFxwfcZLV5A/viewform?usp=header";

/* Animations */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
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

const JoinNetwork = () => {
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-20">
        <motion.div
          className="container mx-auto px-4 text-center max-w-4xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-heading font-bold mb-5"
          >
            Join the <span className="text-gradient-gold">Vernex Network</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-primary-foreground/90"
          >
            Collaborate with Vernex as a <strong>company / agency</strong> or join
            our ecosystem as a <strong>freelancer, student, or professional</strong>.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-14"
          >
            Why <span className="text-gradient-gold">Vernex</span>?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: <Users size={36} className="text-accent" />,
                title: "Collaborative Network",
                text: "Work with agencies, startups, enterprises, and institutions across domains.",
              },
              {
                icon: <TrendingUp size={36} className="text-accent" />,
                title: "Growth-Oriented",
                text: "Upskill continuously through real-world execution and modern stacks.",
              },
              {
                icon: <Award size={36} className="text-accent" />,
                title: "Real Impact",
                text: "Build credibility through meaningful, production-grade work.",
              },
              {
                icon: <MailCheck size={36} className="text-accent" />,
                title: "Structured Onboarding",
                text: "Clear process, transparent collaboration, long-term alignment.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPANY / AGENCY ================= */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Collaborate as{" "}
              <span className="text-gradient-gold">Company / Agency</span>
            </h2>

            <p className="text-muted-foreground mb-6">
              Ideal for IT firms, SaaS teams, agencies, colleges, and institutions
              looking to collaborate on delivery, white-label execution, or joint initiatives.
            </p>

            <ul className="space-y-3 text-muted-foreground mb-8">
              <li>• Strategic delivery & execution partnerships</li>
              <li>• White-label or co-branded engagements</li>
              <li>• College & institutional collaborations</li>
              <li>• Long-term capacity & technology partnerships</li>
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-semibold"
            >
              <a href={COLLAB_FORM_URL} target="_blank" rel="noreferrer">
                Submit Collaboration Form
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ================= TALENT ================= */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Join as{" "}
              <span className="text-gradient-gold">
                Freelancer / Student / Professional
              </span>
            </h2>

            <p className="text-muted-foreground mb-6">
              Learn from real projects, earn from your skills, and grow your
              portfolio in a structured, high-trust environment.
            </p>

            <ul className="space-y-3 text-muted-foreground mb-8">
              <li>• Access to premium projects across 15+ service domains</li>
              <li>• Mentorship, reviews & guided learning paths</li>
              <li>• Flexible engagement — part-time, project-based, weekends</li>
              <li>• Portfolio building & recognition inside Vernex</li>
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-semibold"
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
