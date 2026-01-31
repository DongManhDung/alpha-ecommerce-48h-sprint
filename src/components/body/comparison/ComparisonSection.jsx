import React, { useState } from "react";

export default function IM8Comparison() {
  const [showMore, setShowMore] = useState(false);
  const INITIAL_ROWS = 10;
  return (
    <section className="w-full bg-[#F3EADF] py-12 px-4 md:px-8">
      <h2 className="text-center text-3xl md:text-4xl font-serif text-[#7A0C14] mb-10">
        IM8: The New Gold Standard
      </h2>

      <div className="max-w-6xl mx-auto border border-[#7A0C14] rounded-xl overflow-hidden">
        {/* Header with Product Images */}
        <div className="grid grid-cols-2">
          {/* Left product */}
          <div className="bg-[#7A0C14] flex items-center justify-between px-6 py-4">
            <h3 className="text-white font-semibold text-lg">
              Daily Ultimate Essentials
            </h3>
            <div className="p-4 rounded">
              <img
                src="https://im8health.com/cdn/shop/files/sachet-thumb.png?v=1761040601"
                alt="Daily Ultimate Essentials"
                className="h-20 w-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Right product */}
          <div className="bg-[#7A0C14] flex items-center justify-between px-6 py-4">
            <h3 className="text-white font-semibold text-lg">
              Leading Greens Powder
            </h3>
            <div className="p-4 rounded">
              <img
                src="https://im8health.com/cdn/shop/files/179-_Converted_B_1.png?v=1730093105"
                alt="Leading Greens Powder"
                className="h-20 w-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Comparison Rows */}
        {/* Comparison Rows */}
        {rows.slice(0, INITIAL_ROWS).map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-2 border-t border-[#7A0C14]/40"
          >
            <Cell icon={row.leftIcon} text={row.left} light />
            <Cell icon={row.rightIcon} text={row.right} />
          </div>
        ))}

        {/* See More Button */}
        {rows.length > INITIAL_ROWS && (
          <div className="border-t border-[#7A0C14]/40 bg-white text-center py-4">
            <button
              className="text-[#7A0C14] underline font-medium"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        )}

        {/* Remaining Rows (initially hidden, can be toggled) */}
        {showMore &&
          rows.slice(INITIAL_ROWS).map((row, i) => (
            <div
              key={i + INITIAL_ROWS}
              className="grid grid-cols-2 border-t border-[#7A0C14]/40"
            >
              <Cell icon={row.leftIcon} text={row.left} light />
              <Cell icon={row.rightIcon} text={row.right} />
            </div>
          ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-[#A40011] text-white px-8 py-3 rounded-full font-semibold">
          VIEW SUPPLEMENT FACTS
        </button>
      </div>
    </section>
  );
}

function Cell({ icon, text, light }) {
  const isObject = typeof text === "object";

  return (
    <div
      className={`flex items-center gap-3 px-5 py-4 text-sm md:text-base text-left ${
        light ? "bg-[#F7EFEA]" : "bg-[#C8D0C7]"
      }`}
    >
      <span
        className="shrink-0 mt-0.5"
        dangerouslySetInnerHTML={{ __html: icon }}
      />

      <div className="leading-tight">
        <div className="font-medium text-[#7A0C14]">
          {isObject ? text.title : text}
        </div>

        {isObject && text.sub && (
          <div className="text-xs md:text-sm text-[#7A0C14]/70 mt-1">
            ({text.sub})
          </div>
        )}
      </div>
    </div>
  );
}

const checkRed = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="10.4883" cy="10.0002" rx="10" ry="9.7561" fill="#A40011"/><path d="M6.44531 10.2079L9.54815 13.114C12.2077 9.79279 14.424 6.88672 14.424 6.88672" stroke="#EFEFEF" stroke-width="2" stroke-linecap="square"/></svg>`;

const checkGreen = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="10.4883" cy="10.0002" rx="10" ry="9.7561" fill="#18332A"/><path d="M6.44531 10.2079L9.54815 13.114C12.2077 9.79279 14.424 6.88672 14.424 6.88672" stroke="#EFEFEF" stroke-width="2" stroke-linecap="square"/></svg>`;

const cross = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="10.4883" cy="10.0002" rx="10" ry="9.7561" fill="#1E3B32" fill-opacity="0.44"/><path d="M6.82812 6.09766L14.1452 13.4147M6.82812 13.4147L14.1452 6.09766" stroke="white" stroke-width="2"/></svg>`;

const rows = [
  {
    left: "Superfoods, Greens, Fruits, Herbs",
    right: "Superfoods, Greens, Fruits, Herbs",
    leftIcon: checkRed,
    rightIcon: checkGreen,
  },
  {
    left: "Clinical Dosed B Vitamins",
    right: "Clinical Dosed B Vitamins",
    leftIcon: checkRed,
    rightIcon: checkGreen,
  },
  {
    left: "30mcg Clinical Dosed Vitamin D3",
    right: "No Vitamin D3",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: "40mcg Clinical Dosed Vitamin K2",
    right: "Vitamin K2 dosage not disclosed",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: "100mg Clinical Dosed CoQ10",
    right: "CoQ10 dosage not disclosed",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: "1000mg Clinical Dosed MSM",
    right: "No MSM",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "3g Prebiotic fiber",
      sub: "50% more",
    },
    right: "2g Prebiotic fiber",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "900mg Clinical Dosed Vitamin C",
      sub: "112% more",
    },
    right: "420mg Vitamin C",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "4.2mg Clinical Dosed Riboflavin",
      sub: "110% more",
    },
    right: "2mg Riboflavin",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "65mg Magnesium",
      sub: "150% more",
    },
    right: "26mg Magnesium",
    leftIcon: checkRed,
    rightIcon: cross,
  },

  {
    left: {
      title: "70mcg Clinical Dosed Selenium",
      sub: "250% more",
    },
    right: "20mcg Selenium",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "100mcg Clinical Dosed Chromium",
      sub: "300% more",
    },
    right: "25mcg Chromium",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "1mg Clinical Dosed Copper",
      sub: "413% more",
    },
    right: "195mcg Copper",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "3mg Clinical Dosed Manganes",
      sub: "650% more",
    },
    right: "400mcg Manganese",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: "50mcg Clinical Dosed Molybdenum",
    right: "No Molybdenum",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: "150mcg Clinical Dosed Iodine",
    right: "No Iodine",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "10b CFU Probiotics",
      sub: "B coagulans BC99®, B subtilis DE111®",
    },
    right: "7.2B CFU Probiotics",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "Postbiotics",
      sub: "FloraSMART® (25mg)",
    },
    right: "No Postbiotics",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: "Cell Rejuvenation Technology®",
    right: "No Proprietary Technology",
    leftIcon: checkRed,
    rightIcon: cross,
  },
   {
    left: {
      title: "Stevia-free",
      sub: "Fermented Sugarcane Extract",
    },
    right: "Includes Stevia",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "No Refrigeration",
      sub: "Shelf-stable Probiotics",
    },
    right: "Refrigeration Needed",
    leftIcon: checkRed,
    rightIcon: cross,
  },
  {
    left: {
      title: "Branded Ingredients",
      sub: "Quatrefolic®, AstaPure®, DE111®, Bacillus BC99®, VegD3™, FloraSmart™, Nutralga®, Astapure®",
    },
    right: "None",
    leftIcon: checkRed,
    rightIcon: cross,
  },
];
