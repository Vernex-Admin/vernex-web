import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const GOLD = "#C9A227";

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
        rounded-xl border border-[#C9A227]/20
        bg-gradient-to-br from-[#0b0b0b] to-black
        shadow-[0_0_25px_rgba(201,162,39,0.12)]
      "
    >
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <h2 className="text-lg font-semibold border-l-4 border-[#C9A227] pl-3">
          {title}
        </h2>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-[#C9A227]" />
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
            className="px-6 pb-5 text-sm leading-relaxed text-white/90"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const PrivacyPolicy = () => {
  return (
    <section className="bg-black text-white min-h-[60vh] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* GOLD TOP DIVIDER */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mb-10" />

        {/* HEADER */}
        <header className="mb-12">
          <p className="text-xs md:text-sm text-white/60 mb-2">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Privacy <span className="text-[#C9A227]">Policy</span>
          </h1>
          <div className="mt-4 h-[2px] w-20 bg-[#C9A227]" />
        </header>

        {/* CONTENT */}
        <div className="space-y-5">

          <Section title="1. Introduction" index={0}>
            <p>
              This Privacy Policy explains how Vernex (“we”, “us”, “our”)
              collects, uses, protects, and manages your personal information
              when you visit our website or use any of our digital services,
              including our SaaS platforms and client dashboards.
            </p>
            <p>
              By accessing our services, you agree to the practices described in
              this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect" index={1}>
            <h3 className="font-semibold text-[#C9A227] mb-1">
              2.1 Information You Provide Directly
            </h3>
            <p>We may collect personal information when you:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-white/80">
              <li>Fill out forms</li>
              <li>Create an account</li>
              <li>Contact us</li>
              <li>Use our SaaS tools or dashboards</li>
            </ul>
            <p className="mt-2">This may include:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-white/80">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details</li>
              <li>Any data submitted through our tools</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information" index={2}>
            <ul className="list-disc list-inside ml-4 space-y-1 text-white/80">
              <li>Provide and maintain our services</li>
              <li>Create and manage user accounts</li>
              <li>Process requests, inquiries, and support tickets</li>
              <li>Improve website performance and user experience</li>
              <li>Send service-related notifications</li>
              <li>Protect against fraud, abuse, and security risks</li>
            </ul>
            <p>We do not sell or rent your personal data.</p>
          </Section>

          <Section title="4. Legal Basis for Processing (GDPR Compliant)" index={3}>
            <ul className="list-disc list-inside ml-4 space-y-1 text-white/80">
              <li>Contractual necessity</li>
              <li>Legitimate interests</li>
              <li>User consent</li>
              <li>Legal obligations</li>
            </ul>
          </Section>

          <Section title="5. Sharing Your Information" index={4}>
            <ul className="list-disc list-inside ml-4 space-y-1 text-white/80">
              <li>Hosting providers</li>
              <li>Payment gateways</li>
              <li>Analytics platforms</li>
              <li>CRM and support tools</li>
            </ul>
            <p>
              These providers follow strict confidentiality and data protection
              obligations.
            </p>
            <p>We never share data for advertising sale or external marketing.</p>
          </Section>

          <Section title="6. Data Storage & Security" index={5}>
            <ul className="list-disc list-inside ml-4 space-y-1 text-white/80">
              <li>Encrypted communication</li>
              <li>Access controls</li>
              <li>Secure servers</li>
              <li>Regular monitoring</li>
            </ul>
            <p>
              While no system is 100% secure, we take all reasonable steps to
              protect your data.
            </p>
          </Section>

          <Section title="7. Your Rights" index={6}>
            <ul className="list-disc list-inside ml-4 space-y-1 text-white/80">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Opt out of marketing</li>
              <li>Request a copy of your stored information</li>
            </ul>
          </Section>

          <Section title="8. Data Retention" index={7}>
            <ul className="list-disc list-inside ml-4 space-y-1 text-white/80">
              <li>Service purposes</li>
              <li>Legal obligations</li>
              <li>Security requirements</li>
            </ul>
            <p>
              Data may be retained longer if required for legal or compliance
              reasons.
            </p>
          </Section>

          <Section title="9. Third-Party Links" index={8}>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices.
            </p>
          </Section>

          <Section title="10. Children’s Privacy" index={9}>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect data from minors.
            </p>
          </Section>

          <Section title="11. Updates to This Policy" index={10}>
            <p>
              We may update this Privacy Policy from time to time. The “Last
              Updated” date will always show the most recent version.
            </p>
          </Section>

          <Section title="12. Contact Us" index={11}>
            <p>
              📧{" "}
              <a
                href="mailto:vernex.main@gmail.com"
                className="underline hover:text-[#C9A227]"
              >
                vernex.main@gmail.com
              </a>
            </p>
          </Section>
        </div>

        {/* GOLD BOTTOM DIVIDER */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mt-14" />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
