import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EcosystemHero from "@/components/ecosystem/EcosystemHero";
import DivisionCards from "@/components/ecosystem/DivisionCards";
import ProductPreviewSection from "@/components/ecosystem/ProductPreviewSection";
import MarketingPreviewSection from "@/components/ecosystem/MarketingPreviewSection";
import WorkflowTimeline from "@/components/ecosystem/WorkflowTimeline";
import TrustSection, { MobileStatsBoard } from "@/components/ecosystem/TrustSection";
import TestimonialsSection from "@/components/ecosystem/TestimonialsSection";
import EcosystemCTA from "@/components/ecosystem/EcosystemCTA";
import type { DivisionId } from "@/components/ecosystem/ecosystemData";

const VernexEcosystem = (): JSX.Element => {
  const [activeDivision, setActiveDivision] = useState<DivisionId | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-20 text-foreground">
      <EcosystemHero />

      {/* Interactive division selector */}
      <DivisionCards active={activeDivision} onSelect={setActiveDivision} />

      {/* Services toggle — nothing shows until a division is selected; everything else is always visible */}
      <AnimatePresence mode="wait">
        {activeDivision && (
          <motion.div
            key={activeDivision}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {activeDivision === "technology" ? (
              <ProductPreviewSection />
            ) : (
              <MarketingPreviewSection />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <WorkflowTimeline />
      <TrustSection />
      <TestimonialsSection />
      {/* Mobile-only: statistics board rendered after the testimonials, per reference. */}
      <MobileStatsBoard />
      <EcosystemCTA />
    </div>
  );
};

export default VernexEcosystem;
