const TermsOfService = () => {
  return (
    <section className="bg-[#021946] text-white min-h-[60vh] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 fade-in-up">
        {/* Header */}
        <header className="mb-10">
          <p className="text-xs md:text-sm text-white/70 mb-2">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Terms of Service
          </h1>
          <div className="mt-3 h-px w-16 bg-[#f4c869]" />
        </header>

        {/* Content card */}
        <div className="bg-[#031f5c]/80 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg shadow-black/30 space-y-8 text-sm leading-relaxed text-white/90">
          {/* 1. Acceptance of Terms */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using any Vernex website, service, platform, or
              SaaS product, you agree to these Terms of Service (“Terms”). If
              you do not agree, please stop using our services immediately.
            </p>
          </section>

          {/* 2. About Vernex */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              2. About Vernex
            </h2>
            <p>
              “Vernex”, “we”, “us”, or “our” refers to Vernex Digital Solutions,
              providing digital, web, marketing, creative, automation, and
              SaaS-based services.
            </p>
          </section>

          {/* 3. Use of Our Services */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              3. Use of Our Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in
              compliance with these Terms.
            </p>
            <p>You must not:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Attempt unauthorized access</li>
              <li>Interfere with service integrity</li>
              <li>Use our services to harm, abuse, or exploit others</li>
              <li>Upload unlawful or malicious content</li>
            </ul>
            <p className="mt-1">
              We may suspend or restrict access if misuse is detected.
            </p>
          </section>

          {/* 4. Accounts & Responsibilities */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              4. Accounts &amp; Responsibilities
            </h2>
            <p>
              When you create an account with Vernex, you agree to provide
              accurate information, maintain confidentiality of your login
              details, and be responsible for all actions under your account.
            </p>
            <p>
              We are not liable for unauthorized account activity caused by user
              negligence.
            </p>
          </section>

          {/* 5. Payments & Subscriptions */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              5. Payments &amp; Subscriptions (If Applicable)
            </h2>
            <p>For paid services or SaaS tools:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Fees must be paid as per the chosen plan</li>
              <li>Payments are non-refundable unless stated otherwise</li>
              <li>Subscriptions may auto-renew unless cancelled</li>
              <li>We may modify pricing with prior notice</li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              6. Intellectual Property
            </h2>
            <p>
              All content, designs, code, software, branding, and materials on
              Vernex platforms are the property of Vernex.
            </p>
            <p>You may not:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Copy</li>
              <li>Modify</li>
              <li>Redistribute</li>
              <li>Sell</li>
              <li>Reverse engineer</li>
            </ul>
          </section>

          {/* 7. User Content */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              7. User Content
            </h2>
            <p>
              If you upload or submit content to our services, you grant Vernex
              a license to store, use, and display the content for service
              delivery.
            </p>
            <p>
              You confirm the content does not violate laws or third-party
              rights. You are responsible for the content you submit.
            </p>
          </section>

          {/* 8. Third-Party Services */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              8. Third-Party Services
            </h2>
            <p>
              Vernex may integrate tools from third parties such as analytics
              providers, payment gateways, CRM systems, and hosting partners. We
              are not responsible for third-party actions or policies.
            </p>
          </section>

          {/* 9. Service Availability */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              9. Service Availability
            </h2>
            <p>
              We strive for continuous uptime but do not guarantee uninterrupted
              access, error-free operation, or zero downtime. Maintenance,
              updates, or issues may temporarily affect service availability.
            </p>
          </section>

          {/* 10. Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              10. Limitation of Liability
            </h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Vernex is not liable for indirect, incidental, or consequential
                damages
              </li>
              <li>Use of services is at your own risk</li>
              <li>
                Vernex is not responsible for data loss, interruptions, or
                unauthorized access
              </li>
            </ul>
            <p className="mt-1">
              Our liability is limited to the amount paid (if any) for our
              services in the last 12 months.
            </p>
          </section>

          {/* 11. Termination */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              11. Termination
            </h2>
            <p>
              We may suspend or terminate your access if you violate these
              Terms, if fraudulent or harmful activity is detected, or if
              required by law or security reasons. You may stop using our
              services at any time.
            </p>
          </section>

          {/* 12. Changes to Terms */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              12. Changes to Terms
            </h2>
            <p>
              We may update these Terms occasionally. The updated version will
              be posted on our website with a revised “Last Updated” date.
              Continued use of our services means you accept the updated Terms.
            </p>
          </section>

          {/* 13. Governing Law */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              13. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws applicable in India. Any
              disputes will be handled under competent courts within the
              applicable jurisdiction.
            </p>
          </section>

          {/* 14. Contact Us */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              14. Contact Us
            </h2>
            <p>If you have any questions regarding these Terms, contact us at:</p>
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

export default TermsOfService;
