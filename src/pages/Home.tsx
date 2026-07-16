import HomeHero from "@/components/home/HomeHero";
import EcosystemSection from "@/components/home/EcosystemSection";
import ProductPreview from "@/components/home/ProductPreview";
import MarketingPreview from "@/components/home/MarketingPreview";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import HomeCTA from "@/components/home/HomeCTA";

const Home = (): JSX.Element => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-20 text-foreground">
      <HomeHero />
      <EcosystemSection />
      <ProductPreview />
      <MarketingPreview />
      <WhyChooseSection />
      <HomeCTA />
    </div>
  );
};

export default Home;
