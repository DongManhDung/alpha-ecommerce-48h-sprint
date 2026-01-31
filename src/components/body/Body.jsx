import Hero from "./hero/Hero";
import ClinicalProvenSection from "./clinicalproven/ClinicalProvenSection";
import ReviewsSection from "./review/ReviewsSection";
import OrganSystemsSection from "./organsystem/OrganSystemsSection";
import SavingsSection from "./saving/SavingsSection";

export default function Body() {
  return (
    <main>
      <Hero />
      <ClinicalProvenSection />
      <ReviewsSection />
      <OrganSystemsSection />
      <SavingsSection />
    </main>
  );
}