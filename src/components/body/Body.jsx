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
import GetStartedIM8 from "./getstarted/GetStartedIM8";
import AmbassadorsSection from "./ambassador/AmbassadorsSection";
import ExpertsSection from "./experts/ExpertsSection";
import BeckhamComparison from "./beckhamcomparison/BeckhamComparison";
import PremiumCoreNutrition from "./premiumcorenutrition/PremiumCoreNutrition";

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
      <GetStartedIM8 />
      <AmbassadorsSection />
      <ExpertsSection />
      <BeckhamComparison />
      <PremiumCoreNutrition />
    </main>
  );
}