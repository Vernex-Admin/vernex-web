const PrivacyPolicy = () => {
  return (
    <section className="bg-[#021946] text-white min-h-[60vh] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 fade-in-up">
        {/* Header */}
        <header className="mb-10">
          <p className="text-xs md:text-sm text-white/70 mb-2">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Privacy Policy
          </h1>
          <div className="mt-3 h-px w-16 bg-[#f4c869]" />
        </header>

        {/* Content card */}
        <div className="bg-[#031f5c]/80 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg shadow-black/30 space-y-8 text-sm leading-relaxed text-white/90">
          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              1. Introduction
            </h2>
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
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              2. Information We Collect
            </h2>

            <h3 className="font-semibold">2.1 Information You Provide Directly</h3>
            <p>We may collect personal information when you:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Fill out forms</li>
              <li>Create an account</li>
              <li>Contact us</li>
              <li>Use our SaaS tools or dashboards</li>
            </ul>
            <p className="mt-1">This may include:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details</li>
              <li>Any data submitted through our tools</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              3. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Provide and maintain our services</li>
              <li>Create and manage user accounts</li>
              <li>Process requests, inquiries, and support tickets</li>
              <li>Improve website performance and user experience</li>
              <li>Send service-related notifications</li>
              <li>Protect against fraud, abuse, and security risks</li>
            </ul>
            <p>We do not sell or rent your personal data.</p>
          </section>

          {/* 4. Legal Basis for Processing */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              4. Legal Basis for Processing (GDPR Compliant)
            </h2>
            <p>We process your data based on:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Contractual necessity (to provide services)</li>
              <li>Legitimate interests (improving services, security)</li>
              <li>User consent (for newsletters, marketing, cookies)</li>
              <li>Legal obligations (when required by law)</li>
            </ul>
          </section>

          {/* 5. Sharing Your Information */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              5. Sharing Your Information
            </h2>
            <p>We may share data with trusted service providers such as:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
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
          </section>

          {/* 6. Data Storage & Security */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              6. Data Storage &amp; Security
            </h2>
            <p>
              We apply industry-standard security measures to protect your
              information, including:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Encrypted communication</li>
              <li>Access controls</li>
              <li>Secure servers</li>
              <li>Regular monitoring</li>
            </ul>
            <p>
              While no system is 100% secure, we take all reasonable steps to
              protect your data.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              7. Your Rights
            </h2>
            <p>Depending on your location, you may have rights such as:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Opt out of marketing</li>
              <li>Request a copy of your stored information</li>
            </ul>
            <p>To exercise these rights, contact us.</p>
          </section>

          {/* 8. Data Retention */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              8. Data Retention
            </h2>
            <p>
              We store personal data only for as long as necessary to fulfill:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Service purposes</li>
              <li>Legal obligations</li>
              <li>Security requirements</li>
            </ul>
            <p>
              Data may be retained longer if required for legal or compliance
              reasons.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices. We encourage users to
              review their policies separately.
            </p>
          </section>

          {/* 10. Children’s Privacy */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              10. Children’s Privacy
            </h2>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect data from minors.
            </p>
          </section>

          {/* 11. Updates */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              11. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in services, legal requirements, or internal updates.
            </p>
            <p>
              The “Last Updated” date will always show the most recent version.
            </p>
          </section>

          {/* 12. Contact */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              12. Contact Us
            </h2>
            <p>For questions about this Privacy Policy, contact:</p>
            <p>
              📧{" "}
              <a
                href="mailto:vernex.main@gmail.com"
                className="underline hover:text-[#f4c869]"
              >
                vernex.main@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
