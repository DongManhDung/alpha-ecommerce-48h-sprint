import React, { useState } from "react";
import {
  IconNutrition,
  IconDigestive,
  IconSuperfood,
  IconSpecialized,
  IconCell,
  IconCheck,
  IconSuperior,
  IconBranded,
  IconClean,
  IconFoundation,
  IconProtection,
  IconBooster,
  IconMetabolic,
  IconRenewal,
  IconDosing,
  IconFomulation,
  IconPurity,
} from "../../data/svgicon.jsx";
import { motion as Motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    title: "Comprehensive Nutritional Foundation",
    desc: "Complete Vitamin & Mineral Profile",
    icon: IconNutrition,
    features: [
      "All essential vitamins (A, C, D, E, K, B-complex)",
      "Full mineral spectrum (12 essential)",
      "Vitamin C: 900mg (100% DV) – Antioxidant Support",
      "Vitamin D3: 1200 IU – From Vegan Lichen",
      "Vitamin B12: 24mcg – Bioactive Methylcobalamin",
      "Bioactive Forms: Quatrefolic®️ & Methylcobalamin for Superior Absorption",
    ],
  },
  {
    title: "Superior Digestive Health Support",
    desc: "Optimized Gut Function",
    icon: IconDigestive,
    features: [
      "PREBIOTICS: Guar Fiber & Agave Inulin (Feeds beneficial bacteria)",
      "PROBIOTICS: 10 Billion CFU (Bacillus subtilis DE111® & Bacillus coagulans BC99®)",
      "POSTBIOTICS: Lactobacillus casei 327 (FloraSMART®) - Clinically Proven for Regularity",
      "DIGESTIVE ENZYMES: Complete Enzyme Complex (Amylase, Protease, Lipase, Cellulase)",
    ],
  },
  {
    title: "Powerful Superfood & Antioxidant Complex",
    desc: "40+ Organic Superfoods",
    icon: IconSuperfood,
    features: [
      "Organic Greens: Spinach, Beet Root, Carrot Root",
      "Antioxidant Fruits: Blueberry, Pomegranate, Cranberry, Acai",
      "Functional Herbs: Milk Thistle, Turmeric, Ginger, Elderberry",
      "Specialty: Sea Moss, Grape Seed Extract, Green Tea",
    ],
  },
  {
    title: "Specialized Health Complexes",
    desc: "Targeted Performance Support",
    icon: IconSpecialized,
    features: [
      "Advanced Hydration & Electrolyte (2,500mg): Hydra Electrolytes Complex",
      "Essential Amino Acid & Recovery (1,165mg): Amino & Renew Complex",
      "Joint & Muscle Health (1,000mg): MSM, Supports Collagen",
      "Adaptogenic & Mushroom Support (200mg): Ashwagandha, Reishi, Lion's Mane",
      "Heart Health Support (100mg): CoQ10, Cellular",
    ],
  },
  {
    title: "Cell Rejuvenation Technology®",
    desc: "Proprietary Longevity Complex",
    icon: IconCell,
    features: [
      "Spermidine",
      "Astaxanthin",
      "Trans-resveratrol",
      "Berberine",
      "Urolithin A",
      "Seaweed Extracts",
    ],
  },
];

const LONGEVITY_PILLARS = [
  {
    title: "Cellular Foundation Builder",
    desc: "Essential Amino Acid Support",
    icon: IconFoundation,
    benefits: [
      "Provides therapeutic dosages of two critical longevity amino acids that naturally decline with age, supporting cellular protection and longevity pathways.",
    ],
    features: ["L-Glycine 3,000mg", "Taurine 2,000mg"],
  },
  {
    title: "Cellular Protection Activator",
    desc: "Senolytic Complex",
    icon: IconProtection,
    benefits: [
      "Triple senolytic complex that targets cellular senescence—one of the primary hallmarks of aging—through complementary compounds that eliminate 'zombie cells'",
    ],
    features: [
      "Trans-Resveratrol 250mg",
      "Quercetin Phytosome 250mg",
      "Fisetin 100mg",
    ],
  },
  {
    title: "NMN NAD+ Energy Booster",
    desc: "Mitochondrial Support",
    icon: IconBooster,
    benefits: [
      "Combines the most direct NAD+ precursor with a mitochondrial biogenesis promoter for comprehensive cellular energy support and DNA repair.",
    ],
    features: ["NMN 300mg", "PQQ 10mg"],
  },
  {
    title: "Metabolic AMPK / SIRT1 Activator",
    desc: "Metabolic Switch",
    icon: IconMetabolic,
    benefits: [
      "Enhanced bioavailability and metabolic support combined with powerful antioxidant protection for optimal metabolic function and cellular stress resistance.",
    ],
    features: ["Dihydroberberine 100mg", "Astaxanthin 6mg"],
  },
  {
    title: "Cellular Renewal Activator",
    desc: "Autophagy Support",
    icon: IconRenewal,
    benefits: [
      "Promotes autophagy—the cellular ‘cleaning’ process essential for healthy aging—removing damaged proteins and organelles for optimal cellular function.",
    ],
    features: ["Spermidine 3mg"],
  },
];

const ESSENTIAL_FEATURES = [
  {
    title: "Superior Ingredient Forms",
    desc: "Bioactive Vitamins & Organic Minerals for maximum absorption.",
    icon: IconSuperior,
  },
  {
    title: "Clean Formulation",
    desc: "No Stevia (Uses Reb M), Allergen-Free, Non-GMO, Vegan-Friendly.",
    icon: IconClean,
  },
  {
    title: "Branded Ingredients",
    desc: "Quatrefolic®, VegD3®, FloraSMART®, AstaPure®",
    icon: IconBranded,
  },
];

const LONGEVITY_FEATURES = [
  {
    title: "Therapeutic Dosing",
    desc: "Clinically relevant doses of key longevity ingredients like NMN and Spermidine.",
    icon: IconDosing,
  },
  {
    title: "Synergistic Formulation",
    desc: "Ingredients selected to work together to amplify cellular repair and renewal.",
    icon: IconFomulation,
  },
  {
    title: "Premium Purity",
    desc: "Rigorous testing for purity and potency, free from fillers and artificial additives.",
    icon: IconPurity,
  },
];

export default function Pillars() {
  const [activeTab, setActiveTab] = useState("essentials");
  const [activeIndex, setActiveIndex] = useState(0);
  const ACTIVE_PILLARS =
    activeTab === "essentials" ? PILLARS : LONGEVITY_PILLARS;

  const THEME_COLOR = activeTab === "essentials" ? "#7A0C14" : "#E78D2D";

  const FEATURE_CARDS =
    activeTab === "essentials" ? ESSENTIAL_FEATURES : LONGEVITY_FEATURES;

  const activePillar = ACTIVE_PILLARS[activeIndex];
  const ActiveIcon = activePillar.icon;

  return (
    <section className="min-h-screen bg-[#2A0506] text-[#7A0C14]">
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            activeTab === "essentials"
              ? "https://im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.44.31_PM.png?v=1766404140&width=1200"
              : "https://im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.45.28_PM.png?v=1766404140&width=600"
          })`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* HEADER */}
          <div className="text-center mb-20">
            {/* SWITCH */}

            <div className="flex justify-center mb-10">
              <div className="bg-white rounded-full p-1 flex shadow-sm">
                <button
                  onClick={() => {
                    setActiveTab("essentials");
                    setActiveIndex(0);
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-medium
                  ${
                    activeTab === "essentials"
                      ? "bg-[#7A0C14] text-white"
                      : "text-[#7A0C14]"
                  }`}
                >
                  Daily Ultimate Essentials
                </button>

                <button
                  onClick={() => {
                    setActiveTab("longevity");
                    setActiveIndex(0);
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-medium
                  ${
                    activeTab === "longevity"
                      ? "bg-[#E78D2D] text-white"
                      : "text-[#7A0C14]"
                  }`}
                >
                  Daily Ultimate Longevity
                </button>
              </div>
            </div>

            {/* BADGE */}
            <div className="flex justify-center mb-6">
              <span
                className="px-5 py-1.5 rounded-full text-white text-xs tracking-widest transition"
                style={{ backgroundColor: THEME_COLOR }}
              >
                {activeTab === "essentials"
                  ? "COMPREHENSIVE WELLNESS"
                  : "ADVANCED LONGEVITY SCIENCE"}
              </span>
            </div>

            {/* TITLE */}
            <h2 className="font-serif text-4xl md:text-5xl text-[#5A0A10] mb-4">
              {activeTab === "essentials"
                ? "5 Pillars of Total Health"
                : "5 Pillars of Longevity"}
            </h2>

            <p className="max-w-2xl mx-auto text-sm md:text-base text-[#7A0C14]/70">
              {activeTab === "essentials"
                ? "A holistic approach to wellness, addressing every dimension of your health with precision-formulated ingredients."
                : "Cutting-edge science designed to support cellular energy, renewal, and healthy aging."}
            </p>
          </div>

          {/* MAIN */}
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 items-start">
            {/* RIGHT - Show first on mobile */}
            <div className="order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <Motion.div
                  key={`${activeTab}-${activeIndex}`}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1], // easeOutExpo vibe
                  }}
                  className="bg-white/90 backdrop-blur rounded-2xl p-6 md:p-8 relative min-h-[600px] pb-12"
                >
                  <span
                    className="absolute top-6 right-6 px-3 py-1 rounded-full text-white text-xs"
                    style={{ backgroundColor: THEME_COLOR }}
                  >
                    PILLAR {activeIndex + 1}
                  </span>

                  {/* ICON + TITLE */}
                  <div className="flex items-start gap-3 mb-2 px-4 py-4">
                    <div
                      className="w-20 h-20 rounded-3xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${THEME_COLOR}1A`,
                        borderColor: `${THEME_COLOR}33`,
                      }}
                    >
                      <ActiveIcon
                        className="w-10 h-10"
                        style={{ color: THEME_COLOR }}
                      />
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl text-left">
                    {activePillar.title}
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-wide text-[#7A0C14]/90 mb-6 text-left flex items-center gap-2 flex-row">
                    <div className="w-5 h-px bg-[#7A0F1B]/30" />{" "}
                    {activePillar.desc}
                  </p>

                  {/* KEY BENEFITS – only for longevity */}
                  {activePillar.benefits && (
                    <div className="mb-1 text-left">
                      <p className="text-xs font-bold tracking-widest text-[#7A0C14] mb-4">
                        KEY BENEFITS
                      </p>

                      <ul className="space-y-3">
                        {activePillar.benefits.map((benefit, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ul className="space-y-3 text-sm leading-6 items-start flex flex-col text-left justify-start">
                    <div className="mt-10 text-left">
                      <p className="text-xs font-bold tracking-widest text-[#7A0C14]">
                        KEY INGREDIENTS
                      </p>
                    </div>
                    {activePillar.features.map((text, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <IconCheck
                          className="w-4 h-4 mt-1"
                          style={{ color: THEME_COLOR }}
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </Motion.div>
              </AnimatePresence>
            </div>

            {/* LEFT - Show second on mobile, vertical layout */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-3 lg:space-y-3">
                {ACTIVE_PILLARS.map((item, i) => {
                  const Icon = item.icon;
                  const active = i === activeIndex;

                  return (
                    <div
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`relative w-full
                      p-4 sm:p-5
                      rounded-xl border cursor-pointer
                      flex gap-3 items-center
                      transition-all duration-300 ease-out
                      active:scale-[0.97]
                      lg:hover:shadow-lg lg:hover:-translate-y-[1px]
                      ${active ? "text-white shadow-md" : "bg-white/80 lg:hover:scale-[1.015]"}
                      `}
                      style={active ? { backgroundColor: THEME_COLOR } : {}}
                    >
                      {active && (
                        <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-white" />
                      )}
                      <div
                        className={`relative w-12 h-12 rounded-xl flex items-center justify-center
                        ${active ? "bg-white/10" : "bg-[#7A0C14]/10"}`}
                        style={{
                          backgroundColor: active
                            ? "rgba(255,255,255,0.1)"
                            : `${THEME_COLOR}1A`,
                        }}
                      >
                        <span className="absolute -top-5 -left-3 text-[10px] font-medium opacity-50">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <Icon
                          className={`w-8 h-8 ${active ? "text-white" : ""}`}
                          style={!active ? { color: THEME_COLOR } : {}}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-[15px]">
                          {item.title}
                        </div>
                        <div className="text-xs opacity-70 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURE_CARDS.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="bg-white rounded-3xl p-8 text-center">
                  <div
                    className="w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${THEME_COLOR}1A` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: THEME_COLOR }} />
                  </div>

                  <h4 className="font-bold mb-2" style={{ color: THEME_COLOR }}>
                    {item.title}
                  </h4>

                  <p className="text-sm opacity-70">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
