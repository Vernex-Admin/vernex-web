import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const params = useParams();
  const slug = params.id || params.slug;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background pt-24 text-foreground">
        <section className="section-shell bg-white text-center">
          <div className="container mx-auto max-w-2xl px-4">
            <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Service Details
            </h1>
            <p className="mb-7">
              Choose a service from the Marketing Services page to view the
              right Vernex service information.
            </p>
            <Button asChild>
              <Link to="/services">Back to Marketing Services</Link>
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 text-foreground">
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Marketing Services
          </Link>
          <h1 className="mb-5 text-4xl font-bold text-primary md:text-5xl">
            {service.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </div>
      </section>

      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto max-w-4xl space-y-8 px-4">
          <article className="corporate-card p-7">
            <h2 className="mb-3 text-2xl font-bold text-primary">Overview</h2>
            <p>{service.overview || service.description}</p>
          </article>

          <article className="corporate-card p-7">
            <h2 className="mb-3 text-2xl font-bold text-primary">What We Offer</h2>
            <ul className="grid gap-3 text-muted-foreground">
              {(service.approach && service.approach.length > 0
                ? service.approach
                : [
                    "Professional planning and execution",
                    "Practical digital growth support",
                    "Clear service communication and review",
                  ]
              ).map((item) => (
                <li key={item} className="rounded-lg border border-border bg-white p-4">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <Button asChild size="lg">
            <Link to="/contact">Talk to Vernex</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
