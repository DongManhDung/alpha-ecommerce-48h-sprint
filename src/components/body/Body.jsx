import Hero from "./hero/Hero";
import ClinicalProvenSection from "./clinicalproven/ClinicalProvenSection";
import ReviewsSection from "./review/ReviewsSection";
import OrganSystemsSection from "./organsystem/OrganSystemsSection";

export default function Body() {
  return (
    <main>
      <Hero />
      <ClinicalProvenSection />
      <ReviewsSection />
      <OrganSystemsSection />
    </main>
  );
}