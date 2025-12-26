import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

/**
 * SAFE ServiceDetail
 * - No crashes
 * - No red screen
 * - Works even if slug / data is missing
 */
const ServiceDetail = () => {
  const params = useParams();
  const slug = params.id || params.slug;

  // If slug is missing → show fallback
  if (!slug) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">
            Service details coming soon
          </h1>
          <p className="text-muted-foreground mb-6">
            We’re currently preparing detailed pages for each service.
          </p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const service = services.find((s) => s.slug === slug);

  // If service not found → graceful fallback
  if (!service) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">
            Service details coming soon
          </h1>
          <p className="text-muted-foreground mb-6">
            This service page is under construction.
          </p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/services"
            className="inline-flex items-center text-sm mb-6 text-primary-foreground/80 hover:text-accent transition"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Services
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {service.title}
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/90">
            {service.description}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {service.overview ||
                "Detailed information for this service will be available soon."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {(service.approach && service.approach.length > 0
                ? service.approach
                : [
                    "Professional planning and execution",
                    "Industry best practices",
                    "Scalable and future-ready solutions",
                  ]
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground">
              <Link to="/contact">Talk to Vernex</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
