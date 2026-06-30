const Section = ({ title, children, muted = false }: { title: string; children: React.ReactNode; muted?: boolean }) => (
  <section className={`section-shell ${muted ? "bg-[#F7F9FC]" : "bg-white"}`}>
    <div className="container mx-auto max-w-6xl px-4">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="mb-7 h-1 w-20 rounded-full bg-[#D8B36A]" />
      {children}
    </div>
  </section>
);

const About = () => (
  <div className="min-h-screen overflow-x-hidden bg-background pt-20 text-foreground">
    <section className="bg-gradient-to-b from-white via-[#F7F9FC] to-white py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-5 text-4xl font-extrabold md:text-6xl">About <span className="text-[#D8B36A]">Vernex</span></h1>
        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Vernex is a founder-led digital ecosystem building technology systems, software products, automation solutions, and digital marketing services for modern businesses.
        </p>
      </div>
    </section>

    <Section title="Who We Are">
      <div className="max-w-5xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>Vernex is a modern digital ecosystem created to help businesses operate smarter, build stronger brands, and grow with clarity. We bring together technology, automation, business intelligence, branding, content, websites, and digital marketing under one parent brand.</p>
        <p>Under Vernex, we work through two major divisions: Vernex Gen Technologies and Vernex Digital Marketing.</p>
        <p>Vernex Gen Technologies focuses on SaaS products, ERP systems, automation tools, BI dashboards, AI-powered systems, and practical business software for schools, restaurants, shops, clinics, teams, and growing companies.</p>
        <p>Vernex Digital Marketing focuses on digital marketing, social media management, branding, content creation, website development, paid campaigns, personal branding, event promotion, photography, and videography.</p>
        <p>Our purpose is simple: build practical systems, create professional brands, and help businesses grow through execution-focused digital solutions.</p>
      </div>
    </Section>

    <Section title="Our Mission" muted>
      <div className="corporate-card space-y-4 p-8 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>Our mission is to deliver practical, affordable, and scalable technology and marketing solutions that help businesses improve operations, build trust, attract customers, and grow with confidence.</p>
        <p>We aim to support businesses with real-world digital systems — from software, automation, dashboards, and ERP solutions to branding, websites, content, campaigns, and marketing execution.</p>
        <p>Vernex exists to reduce the gap between business problems and digital execution. We do not build only for appearance; we build solutions that improve workflow, visibility, communication, and growth.</p>
      </div>
    </Section>

    <Section title="Our Vision">
      <div className="max-w-5xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>Our vision is to build Vernex into a trusted digital ecosystem that creates software products, automation systems, business intelligence tools, marketing solutions, and growth systems for India and global markets.</p>
        <p>Vernex was born from a restless idea: innovation should not wait for limits.</p>
        <p>We are not here to follow trends or blend in. We are here to redefine how ideas take shape through technology, creativity, automation, and digital growth. Everyone who builds with Vernex is not just a worker, but an independent thinker — a creator driven by curiosity, courage, and conviction.</p>
        <blockquote className="border-l-4 border-[#D8B36A] pl-5 italic">“I want to put a ding in the universe.” — Steve Jobs</blockquote>
        <p>At Vernex, we want to put ours in this digital business ecosystem — to leave it better, bolder, and more inspired than we found it.</p>
        <p className="font-semibold text-foreground">Because Vernex is not here to be only evolutionary. Vernex is here to be revolutionary.</p>
      </div>
    </Section>

  </div>
);

export default About;
