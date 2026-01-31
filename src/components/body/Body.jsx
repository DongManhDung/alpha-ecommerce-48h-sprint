import Hero from "./hero/Hero";
import ClinicalProvenSection from "./clinicalproven/ClinicalProvenSection";
import ReviewsSection from "./review/ReviewsSection";

export default function Body() {
  return (
    <main>
      <Hero />
      <ClinicalProvenSection />
      <ReviewsSection />
    </main>
  );
}