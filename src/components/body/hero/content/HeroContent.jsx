import { useState } from "react";

// Import all the sections
import RatingBar from "./sections/RatingBar";
import ProductTitle from "./sections/ProductTitle";
import ProductDescription from "./sections/ProductDescription";
import ClinicalResults from "./sections/ClinicalResults";
import FormatSelector from "./sections/FormatSelector";
import SubscriptionPlans from "./sections/SubscriptionPlans";
import AddToCartSection from "./sections/AddToCartSection";
import TransformationProgram from "./sections/TransformationProgram";
import MoneyBackGuarantee from "./sections/MoneyBackGuarantee";
import HSAPayment from "./sections/HSAPayment";
import ProductAccordion from "./sections/ProductAccordion";
import AmbassadorCarousel from "./sections/AmbassadorCarousel";

export default function HeroContent({ selectedFormat, setSelectedFormat }) {
  const [selectedPlan, setSelectedPlan] = useState("90");

  return (
    <div className="flex flex-col gap-6">
      <RatingBar />
      <ProductTitle />
      <ProductDescription />
      <ClinicalResults />
      <FormatSelector 
        selectedFormat={selectedFormat} 
        setSelectedFormat={setSelectedFormat} 
      />
      <SubscriptionPlans 
        selectedPlan={selectedPlan} 
        setSelectedPlan={setSelectedPlan} 
      />
      <AddToCartSection />
      <TransformationProgram />
      <MoneyBackGuarantee />
      <HSAPayment />
      <ProductAccordion />
      <AmbassadorCarousel />
    </div>
  );
}