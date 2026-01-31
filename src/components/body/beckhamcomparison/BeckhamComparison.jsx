const FEATURES = [
  { label: "92 Nutrient-Rich Ingredients", ess: true, beckham: true },
  { label: "All-Day Energy & Focus", ess: true, beckham: true },
  { label: "Better Sleep Quality", ess: true, beckham: true },
  { label: "Digestive Health & Gut Support", ess: true, beckham: true },
  { label: "Immune System Protection", ess: true, beckham: true },
  { label: "Mental Clarity & Performance", ess: true, beckham: true },
];

const ADVANCED = [
  { label: "10 Longevity Compounds", ess: false, beckham: true },
  { label: "Autophagy Cellular Cleanup Activation", ess: false, beckham: true },
  { label: "NMN NAD+ Cellular Restoration", ess: false, beckham: true },
  { label: "Targets All 12 Hallmarks of Aging", ess: false, beckham: true },
  { label: "Triple Senolytic Zombie Cell Removal", ess: false, beckham: true },
];

export default function BeckhamComparison() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF6F3]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-8 md:mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-[#9B1B1F]">
            UPGRADE TO THE BECKHAM STACK
          </h2>
          <span className="bg-[#9B1B1F] text-white text-[10px] md:text-xs px-3 py-1 rounded-md">
            Save $12 / month
          </span>
        </div>

        {/* Table */}
        <div className="rounded-xl overflow-hidden border border-[#E5E0DC] text-left">
          <table className="w-full table-fixed bg-white text-[11px] md:text-sm border-collapse">
            {/* COLUMN WIDTH – mobile đúng ảnh */}
            <colgroup>
              <col className="w-[44%]" />
              <col className="w-[28%]" />
              <col className="w-[28%]" />
            </colgroup>

            {/* Head */}
            <thead>
              <tr className="bg-gradient-to-r from-[#5C0006] to-[#7A0008] text-white">
                <th className="text-left px-3 md:px-6 py-4 md:py-5 font-semibold rounded-tl-xl">
                  Feature
                </th>

                <th className="px-2 md:px-6 py-4 md:py-5">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4">
                    <img
                      src="https://im8health.com/cdn/shop/files/ess-up.png?v=1760679753&width=300"
                      alt=""
                      className="h-8 md:h-14 scale-150"
                    />
                    <span className="text-[10px] md:text-sm leading-tight text-center md:text-left">
                      Daily Ultimate <br /> Essentials
                    </span>
                  </div>
                </th>

                <th className="px-2 md:px-6 py-4 md:py-5 rounded-tr-xl">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4">
                    <img
                      src="https://im8health.com/cdn/shop/files/bstack-up.png?v=1760679754&width=300"
                      alt=""
                      className="h-8 md:h-14 scale-150"
                    />
                    <span className="text-[10px] md:text-sm leading-tight text-center md:text-left">
                      The Beckham Stack
                      <br />
                      <span className="text-[9px] md:text-xs">
                        (Essentials + Longevity)
                      </span>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Immediate */}
              <tr className="bg-[#FBF4EE]">
                <td className="px-3 md:px-6 py-2 md:py-3 font-semibold text-[#9B1B1F]">
                  IMMEDIATE ESSENTIALS BENEFIT
                </td>
                <td className="text-center font-semibold text-[#9B1B1F] text-[13px]">
                  Essentials
                </td>
                <td className="text-center font-semibold text-[#9B1B1F] text-[13px]">
                  Beckham Stack
                </td>
              </tr>

              {FEATURES.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="px-3 md:px-6 py-3 md:py-4 leading-snug">
                    {item.label}
                  </td>
                  <td className="py-3 md:py-4">
                    <div className="flex justify-center">
                      {item.ess ? <CheckIcon /> : <XIcon />}
                    </div>
                  </td>
                  <td className="py-3 md:py-4">
                    <div className="flex justify-center">
                      {item.beckham ? <CheckIcon /> : <XIcon />}
                    </div>
                  </td>
                </tr>
              ))}

              {/* Advanced */}
              <tr className="bg-[#F5ECE7]">
                <td
                  colSpan={3}
                  className="px-3 md:px-6 py-2 md:py-3 font-semibold text-[#9B1B1F]"
                >
                  ADVANCED LONGEVITY BENEFIT
                </td>
              </tr>

              {ADVANCED.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="px-3 md:px-6 py-3 md:py-4 leading-snug">
                    {item.label}
                  </td>
                  <td className="py-3 md:py-4">
                    <div className="flex justify-center">
                      {item.ess ? <CheckIcon /> : <XIcon />}
                    </div>
                  </td>
                  <td className="py-3 md:py-4">
                    <div className="flex justify-center">
                      {item.beckham ? <CheckIcon /> : <XIcon />}
                    </div>
                  </td>
                </tr>
              ))}

              {/* Pricing */}
              <tr className="border-t font-semibold">
                <td className="px-3 md:px-6 py-3 md:py-4 text-[#50000b]">
                  Monthly Subscription
                </td>
                <td className="text-center text-[#50000b]">$99</td>
                <td className="text-center text-[#50000b]">$196</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 md:px-6 py-3 md:py-4 text-[#50000b]">
                  Cost per Daily Serving
                </td>
                <td className="text-center text-[#50000b]">$3</td>
                <td className="text-center text-[#50000b]">$7</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 md:px-6 py-3 md:py-4 text-[#50000b]">
                  Savings vs. Buying Separately
                </td>
                <td className="text-center text-[#50000b]">–</td>
                <td className="text-center font-semibold text-[#9B1B1F]">
                  $12 / month
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#9B1B1F" />
      <path
        d="M7 12L10.5 15.5L17 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#E8E8E8" />
      <path
        d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5"
        stroke="#999999"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
