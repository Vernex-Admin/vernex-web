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

const TermsOfService = () => {
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
            Terms of <span className="text-primary">Service</span>
          </h1>
          <div className="mt-4 h-[2px] w-20 bg-accent" />
        </header>

        {/* CONTENT */}
        <div className="space-y-5">

          <Section title="1. Acceptance of Terms" index={0}>
            <p>
              By accessing or using any Vernex website, service, platform, or
              SaaS product, you agree to these Terms of Service (“Terms”). If
              you do not agree, please stop using our services immediately.
            </p>
          </Section>

          <Section title="2. About Vernex" index={1}>
            <p>
              “Vernex”, “we”, “us”, or “our” refers to Vernex Digital Solutions,
              providing digital, web, marketing, creative, automation, and
              SaaS-based services.
            </p>
          </Section>

          <Section title="3. Use of Our Services" index={2}>
            <p>
              You agree to use our services only for lawful purposes and in
              compliance with these Terms.
            </p>
            <p>You must not:</p>
            <ul className="ml-4 list-inside list-disc space-y-1 text-muted-foreground">
              <li>Attempt unauthorized access</li>
              <li>Interfere with service integrity</li>
              <li>Use our services to harm, abuse, or exploit others</li>
              <li>Upload unlawful or malicious content</li>
            </ul>
            <p className="mt-1">
              We may suspend or restrict access if misuse is detected.
            </p>
          </Section>

          <Section title="4. Accounts & Responsibilities" index={3}>
            <p>
              When you create an account with Vernex, you agree to provide
              accurate information, maintain confidentiality of your login
              details, and be responsible for all actions under your account.
            </p>
            <p>
              We are not liable for unauthorized account activity caused by user
              negligence.
            </p>
          </Section>

          <Section title="5. Payments & Subscriptions (If Applicable)" index={4}>
            <ul className="ml-4 list-inside list-disc space-y-1 text-muted-foreground">
              <li>Fees must be paid as per the chosen plan</li>
              <li>Payments are non-refundable unless stated otherwise</li>
              <li>Subscriptions may auto-renew unless cancelled</li>
              <li>We may modify pricing with prior notice</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property" index={5}>
            <p>
              All content, designs, code, software, branding, and materials on
              Vernex platforms are the property of Vernex.
            </p>
            <ul className="ml-4 list-inside list-disc space-y-1 text-muted-foreground">
              <li>Copy</li>
              <li>Modify</li>
              <li>Redistribute</li>
              <li>Sell</li>
              <li>Reverse engineer</li>
            </ul>
          </Section>

          <Section title="7. User Content" index={6}>
            <p>
              If you upload or submit content to our services, you grant Vernex
              a license to store, use, and display the content for service
              delivery.
            </p>
            <p>
              You confirm the content does not violate laws or third-party
              rights. You are responsible for the content you submit.
            </p>
          </Section>

          <Section title="8. Third-Party Services" index={7}>
            <p>
              Vernex may integrate tools from third parties such as analytics
              providers, payment gateways, CRM systems, and hosting partners.
            </p>
          </Section>

          <Section title="9. Service Availability" index={8}>
            <p>
              We strive for continuous uptime but do not guarantee uninterrupted
              access, error-free operation, or zero downtime.
            </p>
          </Section>

          <Section title="10. Limitation of Liability" index={9}>
            <ul className="ml-4 list-inside list-disc space-y-1 text-muted-foreground">
              <li>Indirect or consequential damages</li>
              <li>Use of services at your own risk</li>
              <li>Data loss or unauthorized access</li>
            </ul>
            <p className="mt-1">
              Liability is limited to the amount paid in the last 12 months.
            </p>
          </Section>

          <Section title="11. Termination" index={10}>
            <p>
              We may suspend or terminate access if Terms are violated, fraud is
              detected, or legal requirements demand it.
            </p>
          </Section>

          <Section title="12. Changes to Terms" index={11}>
            <p>
              Updated Terms will be posted with a revised “Last Updated” date.
              Continued use indicates acceptance.
            </p>
          </Section>

          <Section title="13. Governing Law" index={12}>
            <p>
              These Terms are governed by the laws of India.
            </p>
          </Section>

          <Section title="14. Contact Us" index={13}>
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

export default TermsOfService;
