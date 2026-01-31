import { useState } from "react";

export default function ProductAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionItems = [
    {
      title: "Ingredients",
      content: (
        <>
          <p className="mb-3 text-sm leading-relaxed text-[#50000b]/80">
            Our comprehensive formula combines 92 nutrient-rich
            ingredients to fuel your body with everything it needs for
            optimal health. Packed with essential vitamins, minerals,
            antioxidants, superfoods, greens, pre-pro-post-biotics and
            clinical dosages of CoQ10 and MSM.*
          </p>
          <a
            href="#"
            className="text-sm font-semibold underline text-[#50000b]"
          >
            View Supplement Facts
          </a>
        </>
      ),
    },
    {
      title: "Third-Party Tested",
      content: (
        <p className="text-sm leading-relaxed text-[#50000b]/80">
          Every ingredient and dosage in IM8 is third-party tested. This
          guarantees that what you see on the label is what you get, so
          you know exactly what you're putting into your body.
        </p>
      ),
    },
    {
      title: "How to Enjoy",
      content: (
        <ol className="list-decimal space-y-1 pl-4 text-sm text-[#50000b]/80">
          <li>Scoop out one serving (12 grams)</li>
          <li>
            Add 8–12 oz of cold water, juice, smoothie, or your favorite
            drink (Use less liquid for a stronger taste)
          </li>
          <li>Shake or blend well then enjoy</li>
        </ol>
      ),
    },
    {
      title: "Tasting Notes",
      content: (
        <p className="text-sm leading-relaxed text-[#50000b]/80">
          Experience a delightful blend with earthy undertones, a subtle
          tartness, and a hint of chocolate, culminating in a smooth
          acai and mixed berries finish.
        </p>
      ),
    },
  ];

  return (
    <div className="mt-1 text-left">
      <div className="divide-y divide-[#8b0000]/40 border-b border-[#8b0000]/40 cursor-pointer">
        {accordionItems.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={item.title} className={index === 0 ? "" : "border-t border-[#8b0000]/40"}>
              {/* HEADER */}
              <button
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between py-4 text-left"
              >
                <span className="font-semibold text-[#50000b]">
                  {item.title}
                </span>
                <span className="text-xl font-light text-[#50000b]">
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              {/* CONTENT */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pb-4">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}