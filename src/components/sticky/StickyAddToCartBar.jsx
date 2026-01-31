import { useState } from "react";

export default function StickyAddToCartBar() {
  const [selectedFormat, setSelectedFormat] = useState("jar"); // eslint-disable-line no-unused-vars 
  const [selectedPlan, setSelectedPlan] = useState("90");

  // Sync with main format selector (you can pass props from parent later)
  const formatInfo = {
    jar: {
      name: "Forever Jar",
      subtitle: "(354g) $2.61 USD / serving"
    },
    sachet: {
      name: "Single-Serve Sachets", 
      subtitle: "(354g) $2.61 USD / serving"
    }
  };

  const planInfo = {
    "30": { 
      text: "30-Day Supply (Save 20%)", 
      discount: "Save 20%", 
      price: "$78.33",
      serving: "$2.97 USD / serving",
      optionText: "30-Day Supply (Save 20%) - $2.97 USD / serving"
    },
    "90": { 
      text: "90-Day Supply (Save 30%)", 
      discount: "Save 30%", 
      price: "$78.33",
      serving: "$2.61 USD / serving",
      optionText: "90-Day Supply (Save 30%) - $2.61 USD / serving"
    },
    "180": { 
      text: "180-Day Supply (Save 40%)", 
      discount: "Save 40%", 
      price: "$78.33",
      serving: "$2.40 USD / serving",
      optionText: "180-Day Supply (Save 40%) - $2.40 USD / serving"
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Left: Product Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#f6e3d6] rounded-lg flex-shrink-0 overflow-hidden">
                <img
                  src={selectedFormat === "jar" 
                    ? "https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg?v=1766566335&width=416"
                    : "https://im8health.com/cdn/shop/files/PDP_07c659fc-2e80-4d58-a136-6d06961f00aa.jpg?v=1766566325&width=416"
                  }
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#6b1c1c] text-left">
                  Daily Ultimate Essentials: All-in-One Supplement
                </h3>
                <p className="text-sm text-[#6b1c1c]/70 text-left">
                  ({formatInfo[selectedFormat].name})
                </p>
              </div>
            </div>

            {/* Right: Plan Selector + Add to Cart Button (chụm lại) */}
            <div className="flex items-center gap-3">
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#6b1c1c] focus:outline-none focus:ring-2 focus:ring-[#8b0000] focus:ring-opacity-20 min-w-[280px] h-12"
              >
                <option value="30">{planInfo["30"].optionText}</option>
                <option value="90">{planInfo["90"].optionText}</option>
                <option value="180">{planInfo["180"].optionText}</option>
              </select>

              <button className="bg-[#8b0000] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#6b0000] transition-colors whitespace-nowrap h-12">
                ADD TO CART - {planInfo[selectedPlan].price} USD/MO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="block md:hidden">
        <div className="px-4 py-3">
          {/* Single Row: Plan Selector + Add Button */}
          <div className="flex items-center gap-3">
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="flex-1 bg-gray-100 border-none rounded-lg px-3 py-2 text-xs text-[#6b1c1c] focus:outline-none focus:ring-2 focus:ring-[#8b0000] focus:ring-opacity-20 h-10"
            >
              <option value="30">{planInfo["30"].optionText}</option>
              <option value="90">{planInfo["90"].optionText}</option>
              <option value="180">{planInfo["180"].optionText}</option>
            </select>
            
            <button className="bg-[#8b0000] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#6b0000] transition-colors whitespace-nowrap h-10">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}