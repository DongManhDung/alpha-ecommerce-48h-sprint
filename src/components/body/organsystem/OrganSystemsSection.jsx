import { useState } from "react";

export default function OrganSystems() {
  const essentialItems = [
    {
      id: 1,
      title: "Digestive",
      heading: "Digestive Support",
      subTitle: "Prebiotics, Probiotics, Postbiotics, Enzymes",
      desc: "A complete 4-tier digestive support system featuring 10 Billion CFU of probiotics and clinically proven enzymes to optimize nutrient absorption and gut health.",
      icon: DigestiveIcon,
    },
    {
      id: 2,
      title: "Immune",
      heading: "Immune Support",
      subTitle: "Vit C, D, Zinc, Mushrooms",
      desc: "Fortifies your body's natural defenses with high-potency Vitamin C (1000% DV), Zinc, and a specialized mushroom complex including Reishi and Chaga.",
      icon: ImmuneIcon,
    },
    {
      id: 3,
      title: "Cardiovascular",
      heading: "Cardiovascular Support",
      subTitle: "COQ10, NITRATES, POTASSIUM",
      desc: "Supports heart health and circulation through essential nutrients and antioxidants.",
      icon: CardioIcon,
    },
    {
      id: 4,
      title: "Muscular",
      heading: "Muscular Support",
      subTitle: "Aminos, MSM, Electrolytes",
      desc: "Supports muscle recovery and strength with magnesium, amino acids, and trace minerals.",
      icon: MuscleIcon,
    },
    {
      id: 5,
      title: "Skeletal",
      heading: "Skeletal Support",
      subTitle: "Aminos, MSM, Electrolytes",
      desc: "Builds and maintains strong bones with bioavailable Calcium, Vitamin D3, K2, and Boron.",
      icon: SkeletalIcon,
    },
    {
      id: 6,
      title: "Integumentary",
      heading: "Skin, Hair & Nail Support",
      subTitle: "MSM, Vit C, E, Biotin, Silica",
      desc: "Promotes radiant skin, hair, and nails through collagen-supporting Vitamin C, Biotin, and MSM to combat oxidative stress.",
      icon: IntegumentaryIcon,
    },
    {
      id: 7,
      title: "Nervous",
      heading: "Nervous System Support",
      subTitle: "B-Vitamins, Magnesium, Adaptogens",
      desc: "Calms the mind and supports cognitive function with a complete B-Complex (including Methylcobalamin) and stress-adapting herbs like Reishi & Ashwagandha.",
      icon: NervousIcon,
    },
    {
      id: 8,
      title: "Endocrine",
      heading: "Endocrine Support",
      subTitle: "Adaptogens, Vit D, Chromium",
      desc: "Balances hormones and metabolism with targeted adaptogens and Chromium to support healthy blood sugar levels already within normal range.",
      icon: EndocrineIcon,
    },
    {
      id: 9,
      title: "Urinary",
      heading: "Endocrine Support",
      subTitle: "Hydra Electrolytes Complex",
      desc: "Optimizes fluid balance and kidney function with a precision hydration complex featuring Potassium Citrate and Magnesium Glycinate.",
      icon: UrinaryIcon,
    },
  ];

  const longevityItems = [
    {
      id: 1,
      title: "Activates Cellular Cleansing",
      heading: "Cellular Cleansing Support",
      subTitle: "AUTOPHAGY ACTIVATION",
      desc: "Activates the body's natural cellular cleanup process (autophagy) to remove damaged components and improve cellular efficiency.",
      icon: CellularIcon,
    },
    {
      id: 2,
      title: "Promotes Cellular Renewal",
      heading: "Cellular Renewal Support",
      subTitle: "Regeneration Support",
      desc: "Promotes the regeneration of healthy cells and tissues, supporting the body's ability to repair and maintain itself over time.",
      icon: CellularIcon,
    },
    {
      id: 3,
      title: "Slows Cellular Aging",
      heading: "Cellular Aging Support",
      subTitle: "Telomere Support",
      desc: "Targets the biological mechanisms of aging to help slow down cellular degradation and maintain youthful function.",
      icon: AgingIcon,
    },
    {
      id: 4,
      title: "Aids Youthful Aging",
      heading: "Youthful Aging Support",
      subTitle: "Resilience & Vitality",
      desc: "Supports overall vitality and resilience, helping you maintain energy, focus, and physical capability as you age.",
      icon: CellularIcon,
    },
  ];

  const [activeTab, setActiveTab] = useState("essential");
  const items = activeTab === "essential" ? essentialItems : longevityItems;
  const [activeId, setActiveId] = useState(1);
  const activeItem = items.find((i) => i.id === activeId);

  return (
    <section
      className={`py-24 transition-all duration-700 ease-in-out ${
        activeTab === "essential"
          ? "bg-gradient-to-b from-[#f6e1e1] to-[#f9efef]"
          : "bg-gradient-to-b from-[#FBF3E6] via-[#F6E3C6] to-[#F3D7A8]"
      }`}
    >
      {/* TABS */}
      <div className="flex justify-center mb-16">
        <div
          className={`flex items-center p-1 rounded-full shadow-lg transition-all duration-500 ease-in-out ${
            activeTab === "essential" ? "bg-white" : "bg-white/90"
          }`}
        >
          {/* Essential */}
          <button
            onClick={() => {
              setActiveTab("essential");
              setActiveId(1);
            }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
              activeTab === "essential"
                ? "bg-[#7A0F1B] text-white shadow-md"
                : "text-[#7A0F1B]"
            }`}
          >
            Daily Ultimate Essentials
          </button>

          {/* Longevity */}
          <button
            onClick={() => {
              setActiveTab("longevity");
              setActiveId(1);
            }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
              activeTab === "longevity"
                ? "bg-gradient-to-r from-[#C46A1A] to-[#8A3F0E] text-white shadow-md"
                : "text-[#8A3F0E]"
            }`}
          >
            Daily Ultimate Longevity
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 transition-all duration-500 ease-in-out">
        <span
          className={`inline-block text-white text-xs px-4 py-3 rounded-full mb-4 transition-all duration-500 ease-in-out ${
            activeTab === "essential" ? "bg-[#7A0F1B]" : "bg-[#8B4A3C]"
          }`}
        >
          {activeTab === "essential"
            ? "COMPREHENSIVE BODY SUPPORT"
            : "ADVANCED CELLULAR SCIENCE"}
        </span>
        <h2
          className={`text-4xl font-semibold transition-all duration-500 ease-in-out ${
            activeTab === "essential" ? "text-[#7A0F1B]" : "text-[#5E3B2F]"
          }`}
        >
          {activeTab === "essential"
            ? "9 Major Organ Systems"
            : "Cellular Health Redefined"}
        </h2>
        <p
          className={`mt-4 text-sm max-w-xl mx-auto transition-all duration-500 ease-in-out ${
            activeTab === "essential" ? "text-[#7A0F1B]/70" : "text-[#8B4A3C]"
          }`}
        >
          {activeTab === "essential"
            ? "One serving delivers comprehensive support for your entire body, replacing multiple supplements with a single, powerful formula."
            : "A breakthrough formula targeting the 12 hallmarks of aging to help you live better, longer."}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* LEFT GRID */}
        <div
          className={`grid gap-4 transition-all duration-500 ease-in-out order-2 lg:order-1 ${
            activeTab === "essential" ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {items.map((item, index) => {
            const active = item.id === activeId;

            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative rounded-2xl p-6 transition-all duration-300
                flex flex-col items-center justify-center text-center
                ${
                  active
                    ? "bg-[#7A0F1B] text-white shadow-lg"
                    : "bg-white text-[#7A0F1B] hover:shadow-md"
                }
                ${activeTab === "longevity" ? "bg-[#8B4A3C]" : "bg-[#7A0F1B]"}
                `}
              >
                {/* index number */}
                <span
                  className={`absolute top-3 left-3 text-xs font-medium
                    ${active ? "text-white/60" : "text-[#7A0F1B]/40"}
                `}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                {/* icon */}
                <div className="w-8 h-8 mb-3">
                  <item.icon />
                </div>

                {/* title */}
                <p className="text-sm font-medium leading-tight">
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* RIGHT PANEL */}
        <div
          key={activeItem.id}
          className="relative rounded-[32px] p-12 overflow-hidden
            bg-gradient-to-br from-[#F9ECEC] via-[#FAF2F2] to-[#FDF8F8]
            shadow-xl transition-all duration-500 ease-in-out
            animate-[fadeIn_0.5s_ease-in-out] order-1 lg:order-2
            "
        >
          {/* header */}
          <div className="flex items-start gap-6 mb-6">
            <div className="relative flex-shrink-0">
              {/* icon box */}
              <div
                className={`w-14 h-14 rounded-2xl bg-[#F3DCDC]
                flex items-center justify-center text-[#7A0F1B]
                    ${
                      activeTab === "longevity"
                        ? "bg-[#E6C8BB] text-[#8B4A3C]"
                        : "bg-[#F3DCDC] text-[#7A0F1B]"
                    }`}
              >
                <activeItem.icon className="w-6 h-6" />
              </div>

              {/* index badge */}
              <span
                className={`absolute -top-2 -right-2 w-6 h-6 rounded-full
                bg-[#7A0F1B] text-white text-[10px] font-semibold
                flex items-center justify-center ${
                  activeTab === "longevity" ? "bg-[#8B4A3C]" : "bg-[#7A0F1B]"
                }`}
              >
                0{activeItem.id}
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#7A0F1B] text-left">
                {activeItem.heading}
              </h3>

              {/* subtitle */}
              <p
                className="mt-1 text-[11px] tracking-widest uppercase
                 text-[#7A0F1B]/60 flex items-center gap-2 flex-row"
              >
                <div className="w-5 h-px bg-[#7A0F1B]/30" />
                {activeItem.subTitle}
              </p>
            </div>
          </div>

          {/* description - aligned with heading */}
          <div className="w-full max-w-lg justify-start items-start flex flex-col">
            <p className="text-sm text-[#7A0F1B]/75 leading-relaxed max-w-lg mb-8 text-left">
              {activeItem.desc}
            </p>

            {/* CTA - aligned with description */}
            <button
              className="inline-flex items-center gap-2 
                  border border-[#7A0F1B]/30
                  px-5 py-2.5 rounded-full
                  text-xs font-medium text-[#7A0F1B]
                  bg-white/40 backdrop-blur
              "
            >
              <span
                className="w-4 h-4 rounded-full border border-[#7A0F1B]
              flex items-center justify-center text-[10px]"
              >
                ✓
              </span>
              {activeTab === "essential"
                ? "Clinically Dosed Ingredients"
                : "Clinically Dosed Ingredients"}
            </button>
          </div>

          {/* decorative watermark */}
          <div
            className="pointer-events-none absolute right-5 bottom-10
            opacity-[0.1] scale-[1.5] text-[#7A0F1B] w-28 h-28"
          >
            <activeItem.icon className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DigestiveIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M18 8C18 8 14 8 14 12V14C14 18 18 20 18 24C18 28 14 30 14 34V36C14 40 18 40 18 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 8C30 8 34 8 34 12V14C34 18 30 20 30 24C30 28 34 30 34 34V36C34 40 30 40 30 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 16H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 24H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 32H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ImmuneIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M24 6L38 12V24C38 34 31 40 24 42C17 40 10 34 10 24V12L24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 18V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 24H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CardioIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M24 38C24 38 10 28 10 18C10 12 14 8 20 8C23 8 24 10 24 10C24 10 25 8 28 8C34 8 38 12 38 18C38 28 24 38 24 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 22H20L22 18L24 26L26 20L28 22H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MuscleIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M12 16C12 16 14 20 18 20C22 20 24 16 24 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 16C24 16 26 20 30 20C34 20 36 16 36 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 24C12 24 14 28 18 28C22 28 24 24 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 24C24 24 26 28 30 28C34 28 36 24 36 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 32C12 32 14 36 18 36C22 36 24 32 24 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 32C24 32 26 36 30 36C34 36 36 32 36 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 12V36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 12V36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 12V36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SkeletalIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M16 12C16 12 18 16 20 18C22 20 24 20 24 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 20C24 20 26 20 28 18C30 16 32 12 32 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 36C16 36 18 32 20 30C22 28 24 28 24 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 28C24 28 26 28 28 30C30 32 32 36 32 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 18L20 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 18L28 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="36" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="36" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IntegumentaryIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M8 16C12 14 16 14 24 14C32 14 36 14 40 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 24C12 22 16 22 24 22C32 22 36 22 40 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 32C12 30 16 30 24 30C32 30 36 30 40 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="26" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function NervousIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="20" r="3" stroke="currentColor" />
      <path
        d="M16 20L8 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 20L8 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 20L8 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 20L40 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 20L40 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 20L40 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 12L24 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 12L28 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 28L20 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 28L28 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8" cy="16" r="1.5" stroke="currentColor" />
      <circle cx="8" cy="24" r="1.5" stroke="currentColor" />
      <circle cx="8" cy="28" r="1.5" stroke="currentColor" />
      <circle cx="40" cy="16" r="1.5" stroke="currentColor" />
      <circle cx="40" cy="24" r="1.5" stroke="currentColor" />
      <circle cx="40" cy="28" r="1.5" stroke="currentColor" />
      <circle cx="24" cy="8" r="1.5" stroke="currentColor" />
      <circle cx="20" cy="36" r="1.5" stroke="currentColor" />
      <circle cx="28" cy="36" r="1.5" stroke="currentColor" />
    </svg>
  );
}

function EndocrineIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" stroke="currentColor" />
      <path
        d="M24 8V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 30V40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 24H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 24H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="38" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function UrinaryIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M14 12C10 12 8 16 8 22C8 28 10 32 14 32C16 32 18 30 18 26C18 22 16 20 16 18C16 16 18 14 18 14C18 14 16 12 14 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 12C38 12 40 16 40 22C40 28 38 32 34 32C32 32 30 30 30 26C30 22 32 20 32 18C32 16 30 14 30 14C30 14 32 12 34 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 26V34C18 36 20 38 24 38C28 38 30 36 30 34V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 38V42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CellularIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="2" stroke="currentColor" />
      <path
        d="M24 10V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <path
        d="M24 30V38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <path
        d="M10 24H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <path
        d="M30 24H38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function AgingIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M16 8H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 40H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 8C16 8 16 18 24 24C32 30 32 40 32 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 8C32 8 32 18 24 24C16 30 16 40 16 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 34H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}