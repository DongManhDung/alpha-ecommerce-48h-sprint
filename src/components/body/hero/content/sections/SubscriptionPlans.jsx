export default function SubscriptionPlans({ selectedPlan, setSelectedPlan }) {
  const RADIO_BLANK = "https://im8health.com/cdn/shop/t/121/assets/radio_blank.svg";
  const RADIO_FILL = "https://im8health.com/cdn/shop/t/121/assets/radio_fill.svg";

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold text-[#6b1c1c] text-left">
        2. Subscribe & Save:
      </h3>

      {/* 90 DAY */}
      <div
        onClick={() => setSelectedPlan("90")}
        className={`relative cursor-pointer rounded-2xl p-5 transition
          ${
            selectedPlan === "90"
              ? "border border-[#c40000] bg-[#fff6f4]"
              : "border border-[#e6cfcf] bg-white"
          }
        `}
      >
        {/* badges */}
        <span className="absolute -top-2 left-4 rounded-full bg-[#ffcc00] px-3 py-[2px] text-[10px] font-semibold text-[#50000b]">
          NEW YEAR OFFER
        </span>
        <span className="absolute -top-2 right-4 rounded-full bg-[#c40000] px-3 py-[2px] text-[10px] font-semibold text-white">
          BEST VALUE
        </span>

        <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={selectedPlan === "90" ? RADIO_FILL : RADIO_BLANK}
                alt=""
                className="h-4 w-4"
              />
              <p className="font-semibold text-[#6b1c1c] text-left">
                90-Day Supply{" "}
                <span className="text-green-600">(Save 30%)</span>
              </p>
            </div>
            <p className="text-sm text-[#6b1c1c]/70">
              Billed $235.00 USD every 12 weeks
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="font-semibold text-[#6b1c1c]">
              $87 <span className="text-sm line-through">$112</span> /mo
            </p>
            <p className="text-xs text-[#6b1c1c]/70">$2.61 USD / serving</p>
          </div>
        </div>

        <ul className="space-y-2 text-sm text-[#6b1c1c] text-left">
          <li>🎓 Exclusive Access to 90 Day IM8 Transformation Program</li>
          <li>💰 Maximum savings – lowest price per serving</li>
          <li>👨‍👩‍👧 Share with family and friends</li>
          <li>🎁 Free Daily Ultimate Mixer (US$18)</li>
          <li>🚚 Free Shipping to US, UK, CA, EU & APAC</li>
          <li>⏸ Cancel or pause anytime</li>
          <li>🎁 Free Welcome Kit: Red Cup + 5 Travel Sachets</li>
        </ul>
      </div>

      {/* 30 DAY */}
      <div
        onClick={() => setSelectedPlan("30")}
        className={`cursor-pointer rounded-2xl p-5 transition
          ${
            selectedPlan === "30"
              ? "border border-[#c40000] bg-[#fff6f4]"
              : "border border-[#e6cfcf] bg-white"
          }
        `}
      >
        <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={selectedPlan === "30" ? RADIO_FILL : RADIO_BLANK}
                alt=""
                className="h-4 w-4"
              />
              <p className="font-semibold text-[#6b1c1c]">
                30-Day Supply{" "}
                <span className="text-green-600">(Save 20%)</span>
              </p>
            </div>
            <p className="text-sm text-[#6b1c1c]/70">
              Billed $89.00 USD every 4 weeks
            </p>
          </div>

          <div className="text-left sm:text-right">
            $99 <span className="text-sm line-through">$112</span> /mo
            <p className="text-xs text-[#6b1c1c]/70">$3.30 USD / serving</p>
          </div>
        </div>

        <ul className="space-y-2 text-sm text-[#6b1c1c] text-left">
          <li>✔ 30-day money back guarantee</li>
          <li>✔ Cancel or pause anytime</li>
          <li>✔ Free Shipping to US, UK, CA, EU & APAC</li>
          <li>✔ Free Welcome Kit: Red Cup + 5 Travel Sachets</li>
        </ul>
      </div>
    </div>
  );
}