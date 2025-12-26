const CookiePolicy = () => {
  return (
    <section className="bg-[#021946] text-white min-h-[60vh] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 fade-in-up">
        {/* Header */}
        <header className="mb-10">
          <p className="text-xs md:text-sm text-white/70 mb-2">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Cookies Policy
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
              This Cookies Policy explains how Vernex (“we”, “us”, “our”) uses
              cookies and similar technologies on our website and digital
              services. By using our website, you agree to the use of cookies
              described here.
            </p>
          </section>

          {/* 2. What Are Cookies? */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              2. What Are Cookies?
            </h2>
            <p>
              Cookies are small files stored on your device that help us run our
              site securely, remember your settings, and improve user
              experience. We may also use pixels, tags, and local storage.
            </p>
          </section>

          {/* 3. How We Use Cookies */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              3. How We Use Cookies
            </h2>

            {/* 3.1 Essential Cookies */}
            <div className="space-y-1">
              <h3 className="font-semibold">3.1 Essential Cookies</h3>
              <p>Required for core functions such as:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
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

            {/* 3.2 Analytics Cookies */}
            <div className="space-y-1">
              <h3 className="font-semibold">3.2 Analytics Cookies</h3>
              <p>
                Used to analyze site performance, user behavior, page visits,
                and errors. Helps us improve speed, stability, and user
                experience.
              </p>
            </div>

            {/* 3.3 Personalization Cookies */}
            <div className="space-y-1">
              <h3 className="font-semibold">3.3 Personalization Cookies</h3>
              <p>Remember preferences like:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Language</li>
                <li>Theme (light/dark)</li>
                <li>Dashboard settings</li>
              </ul>
            </div>

            {/* 3.4 Marketing Cookies */}
            <div className="space-y-1">
              <h3 className="font-semibold">3.4 Marketing Cookies</h3>
              <p>Used only with your consent.</p>
              <p>
                Helps show relevant content and measure ad performance. We do
                not sell personal data.
              </p>
            </div>

            {/* 3.5 Third-Party Cookies */}
            <div className="space-y-1">
              <h3 className="font-semibold">3.5 Third-Party Cookies</h3>
              <p>Used by integrated tools such as:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Analytics platforms</li>
                <li>Payment providers</li>
                <li>Embedded video platforms</li>
                <li>Social media plugins</li>
              </ul>
              <p>These third parties follow their own cookie policies.</p>
            </div>
          </section>

          {/* 4. Managing Cookies */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              4. Managing Cookies
            </h2>
            <p>
              You can control or disable cookies through your browser or device
              settings. Disabling essential cookies may affect website
              functionality.
            </p>
          </section>

          {/* 5. Policy Updates */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              5. Policy Updates
            </h2>
            <p>
              We may update this policy based on legal requirements or changes
              to our services. The “Last Updated” date will always reflect the
              latest version.
            </p>
          </section>

          {/* 6. Contact Us */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-l-4 border-[#f4c869] pl-3">
              6. Contact Us
            </h2>
            <p>For questions regarding this Cookies Policy, contact:</p>
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

export default CookiePolicy;
