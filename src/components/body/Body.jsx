import Hero from "./hero/Hero";
import ClinicalProvenSection from "./clinicalproven/ClinicalProvenSection";
import ReviewsSection from "./review/ReviewsSection";
import OrganSystemsSection from "./organsystem/OrganSystemsSection";
import SavingsSection from "./saving/SavingsSection";
import ComparisonSection from "./comparison/ComparisonSection";
import Pillars from "./pillar/Pillars";
import TrustedExperts from "./trustexpert/TrustedExperts";
import WhatsInsideBanner from "./whatinside/WhatsInsideBanner";
import HowToEnjoy from "./howtoenjoy/HowToEnjoy";

export default function Body() {
  return (
    <main>
      <Hero />
      <ClinicalProvenSection />
      <ReviewsSection />
      <OrganSystemsSection />
      <SavingsSection />
      <ComparisonSection />
      <Pillars />
      <TrustedExperts />
      <WhatsInsideBanner />
      <HowToEnjoy />
    </main>
  );
}