import MarketingHero from "@/components/marketing/MarketingHero";
import ServiceGrid from "@/components/marketing/ServiceGrid";
import MarketingCTA from "@/components/marketing/MarketingCTA";

const Services = (): JSX.Element => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-20 text-foreground">
      <MarketingHero />
      <ServiceGrid />
      <MarketingCTA />
    </div>
  );
};

export default Services;
