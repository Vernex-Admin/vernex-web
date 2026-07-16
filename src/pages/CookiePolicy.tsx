import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Section = ({
  title,
  children,
  index,
}: {
  title: string;
  children: React.ReactNode;
  index: number;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="
        rounded-lg border border-border
        bg-white
        shadow-[var(--shadow-card)]
      "
    >
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <h2 className="border-l-4 border-accent pl-3 text-lg font-semibold">
          {title}
        </h2>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-accent" />
        </motion.span>
      </button>

      {/* CONTENT */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const CookiePolicy = () => {
  return (
    <section className="min-h-[60vh] bg-background pt-28 pb-20 text-foreground">
      <div className="max-w-4xl mx-auto px-6">

        {/* GOLD TOP DIVIDER */}
        <div className="gold-divider-strong mb-10" />

        {/* HEADER */}
        <header className="mb-12">
          <p className="mb-2 text-xs text-muted-foreground md:text-sm">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold">
            Cookies <span className="text-primary">Policy</span>
          </h1>

          <div className="mt-4 h-[2px] w-20 bg-accent" />
        </header>

        {/* CONTENT */}
        <div className="space-y-5">

          <Section title="1. Introduction" index={0}>
            <p>
              This Cookies Policy explains how Vernex (“we”, “us”, “our”) uses
              cookies and similar technologies on our website and digital
              services. By using our website, you agree to the use of cookies
              described here.
            </p>
          </Section>

          <Section title="2. What Are Cookies?" index={1}>
            <p>
              Cookies are small files stored on your device that help us run our
              site securely, remember your settings, and improve user
              experience. We may also use pixels, tags, and local storage.
            </p>
          </Section>

          <Section title="3. How We Use Cookies" index={2}>
            <div className="space-y-6">

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  3.1 Essential Cookies
                </h3>
                <p>Required for core functions such as:</p>
                <ul className="ml-4 list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Logging in</li>
                  <li>Secure sessions</li>
                  <li>Accessing dashboards</li>
                  <li>Form submissions</li>
                </ul>
                <p>
                  These cannot be disabled as they are necessary for website
                  operation.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  3.2 Analytics Cookies
                </h3>
                <p>
                  Used to analyze site performance, user behavior, page visits,
                  and errors. Helps us improve speed, stability, and user
                  experience.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  3.3 Personalization Cookies
                </h3>
                <p>Remember preferences like:</p>
                <ul className="ml-4 list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Language</li>
                  <li>Theme (light/dark)</li>
                  <li>Dashboard settings</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  3.4 Marketing Cookies
                </h3>
                <p>Used only with your consent.</p>
                <p>
                  Helps show relevant content and measure ad performance. We do
                  not sell personal data.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  3.5 Third-Party Cookies
                </h3>
                <p>Used by integrated tools such as:</p>
                <ul className="ml-4 list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Analytics platforms</li>
                  <li>Payment providers</li>
                  <li>Embedded video platforms</li>
                  <li>Social media plugins</li>
                </ul>
                <p>These third parties follow their own cookie policies.</p>
              </div>

            </div>
          </Section>

          <Section title="4. Managing Cookies" index={3}>
            <p>
              You can control or disable cookies through your browser or device
              settings. Disabling essential cookies may affect website
              functionality.
            </p>
          </Section>

          <Section title="5. Policy Updates" index={4}>
            <p>
              We may update this policy based on legal requirements or changes
              to our services. The “Last Updated” date will always reflect the
              latest version.
            </p>
          </Section>

          <Section title="6. Contact Us" index={5}>
            <p>For questions regarding this Cookies Policy, contact:</p>
            <p>
              📧{" "}
              <a
                href="mailto:vernex.main@gmail.com"
                className="underline hover:text-primary"
              >
                vernex.main@gmail.com
              </a>
            </p>
          </Section>

        </div>

        {/* GOLD BOTTOM DIVIDER */}
        <div className="gold-divider-strong mt-14" />
      </div>
    </section>
  );
};

export default CookiePolicy;
