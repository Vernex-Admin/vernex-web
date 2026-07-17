import ContactHero from "@/components/contact/ContactHero";
import ProjectEnquiryForm from "@/components/contact/ProjectEnquiryForm";
import ContactSidebar from "@/components/contact/ContactSidebar";
import TrustFeatures from "@/components/contact/TrustFeatures";

const Contact = (): JSX.Element => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-20 text-foreground">
      <ContactHero />

      {/* Main content: form (left) + contact channels (right) */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-10 sm:px-6 lg:grid-cols-[1.7fr_1fr]">
        <ProjectEnquiryForm />
        <ContactSidebar />
      </section>

      {/* Bottom trust features */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <TrustFeatures />
      </section>
    </div>
  );
};

export default Contact;
