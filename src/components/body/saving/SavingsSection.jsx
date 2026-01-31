const breakdown = [
  { label: "Multivitamins, Minerals & Antioxidants", price: "$35" },
  { label: "Superfoods, Greens & Fruits", price: "$58" },
  { label: "Immunity", price: "$28" },
  { label: "Electrolytes", price: "$48" },
  { label: "Adaptogens & Super Mushrooms", price: "$38" },
  { label: "Prebiotics, Probiotics & Postbiotics", price: "$48" },
  { label: "CoQ10 (Heart Vitality)", price: "$38" },
  { label: "MSM (Joint & Muscle Vitality)", price: "$25" },
  { label: "Essential Amino Acids", price: "$28" },
];

export default function SavingsSection() {
  return (
    <section className="bg-[#F7ECE9] py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image Overlay - Mobile */}
      <div 
        className="absolute inset-0 opacity-15 rotate-[270deg] lg:hidden"
        style={{
          backgroundImage: `radial-gradient(circle 200px at 50% 50%, url('https://im8health.com/cdn/shop/files/mobile_comparison-pill_2x_6cee01aa-3c78-4fa8-89f6-0c9d6ed725cb.png?v=1730719345&width=750'), transparent 70%)`,
          backgroundSize: '400px 400px',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Background Image Overlay - Desktop */}
      <div 
        className="absolute inset-0 opacity-15 rotate-[270deg] hidden lg:block"
        style={{
          backgroundImage: `radial-gradient(circle 300px at 35% 50%, url('https://im8health.com/cdn/shop/files/desktop_comparison-pill_2x_0da77b74-6605-4244-8e13-4c0e828ceb71.png?v=1730719244&width=1296'), transparent 70%)`,
          backgroundSize: '700px 600px',
          backgroundPosition: '50% -70%',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* MOBILE LAYOUT */}
        <div className="lg:hidden">
          {/* Mobile Card Container */}
          <div className="bg-white rounded-3xl border-4 border-[#5A0B14] p-6 mx-4">
            {/* Mobile Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-serif text-[#5A0B14] leading-tight">
                Replaces<br />
                16 Supplements,<br />
                Saving You Money.
              </h2>
              <button className="bg-[#A00010] hover:bg-[#7A0F1B] transition text-white px-8 py-2 rounded-full text-sm font-semibold mt-4">
                SHOP NOW
              </button>
            </div>

            {/* Mobile Product Image */}
            <div className="relative flex justify-center mb-8">
              <img
                src="https://im8health.com/cdn/shop/files/sachet-box.png?v=1761040602&width=838"
                alt="IM8 Product"
                className="w-[180px] drop-shadow-xl"
              />

              {/* Mobile Savings Badge */}
              <div
                className="absolute -bottom-6 -right-2
                w-28 h-28 rounded-full bg-gradient-to-br from-[#5A0B14] to-[#7A0F1B]
                text-white flex flex-col items-center justify-center text-center
                shadow-xl border-2 border-white"
              >
                <div className="text-[6px] font-bold mb-0.5 tracking-wider">
                  I•M•8
                </div>
                <div className="w-4 h-px bg-white/60 mb-1"></div>
                <span className="text-[7px] tracking-widest uppercase font-medium">
                  ANNUAL SAVINGS
                </span>
                <span className="text-[10px] font-bold leading-tight">
                  $2,532 - $3,000
                </span>
                <span className="text-[8px] font-medium">per year</span>
                <span className="text-[6px] opacity-75 font-light">
                  when switching to IM8
                </span>
              </div>
            </div>

            {/* Mobile Monthly Breakdown */}
            <div>
              <h3 className="text-lg font-serif text-[#5A0B14] mb-4 text-center">
                Monthly Breakdown
              </h3>

              <ul className="space-y-2">
                {breakdown.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-xs text-[#5A0B14]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#A00010] rounded-full mr-2 flex-shrink-0" />
                    <span className="flex-1 text-left">{item.label}</span>
                    <span className="line-through opacity-60 ml-2 text-[11px]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mobile Total Comparison */}
              <div className="mt-6 border border-[#5A0B14]/20 rounded-xl overflow-hidden">
                <div className="flex justify-between px-4 py-2 text-xs bg-white">
                  <span>Your Traditional Supplements</span>
                  <span className="line-through">$298</span>
                </div>
                <div className="flex justify-between px-4 py-2 text-xs font-semibold bg-[#F3DEDA] text-[#5A0B14]">
                  <span>IM8 Daily Ultimate Essentials</span>
                  <span>$89</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid grid-cols-3 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 self-start flex flex-col items-start">
            <h2 className="text-4xl font-serif text-[#5A0B14] leading-tight mt-2 text-left">
              Replaces 16 Supplements.
              <br />
              Saving You Money.
            </h2>

            <button className="bg-[#A00010] hover:bg-[#7A0F1B] transition text-white px-10 py-3 rounded-full text-sm font-semibold self-start">
              SHOP NOW
            </button>
          </div>

          {/* PRODUCT IMAGE */}
          <div className="relative flex justify-center">
            <img
              src="https://im8health.com/cdn/shop/files/sachet-box.png?v=1761040602&width=838"
              alt="IM8 Product"
              className="w-[350px] drop-shadow-2xl"
            />

            {/* SAVINGS BADGE */}
            <div
              className="absolute bottom-10 -left-36
              w-52 h-52 rounded-full bg-gradient-to-br from-[#5A0B14] to-[#7A0F1B]
              text-white flex flex-col items-center justify-center text-center
              shadow-2xl border-4 border-white"
            >
              <div className="text-lg font-bold mb-1 tracking-wider">
                I•M•8
              </div>
              <div className="w-8 h-px bg-white/60 mb-2"></div>
              <span className="text-[11px] tracking-widest uppercase mb-1 font-medium">
                ANNUAL SAVINGS
              </span>
              <span className="text-xl font-bold leading-tight">
                $2,532 - $3,000
              </span>
              <span className="text-sm mt-1 font-medium">per year</span>
              <span className="text-[10px] mt-2 opacity-75 font-light">
                when switching to IM8
              </span>
            </div>
          </div>

          {/* MONTHLY BREAKDOWN */}
          <div>
            <h3 className="text-2xl font-serif text-[#5A0B14] mb-6">
              Monthly Breakdown
            </h3>

            <ul className="space-y-3">
              {breakdown.map((item, i) => (
                <li
                  key={i}
                  className="relative flex items-center text-sm text-[#5A0B14] pl-8"
                >
                  {/* horizontal connector */}
                  <span
                    className="absolute -left-20 top-1/2
                    w-28 h-px bg-[#A00010]/40 -translate-y-1/2"
                  />

                  {/* dot */}
                  <span className="w-2 h-2 bg-[#A00010] rounded-full mr-3 flex-shrink-0" />

                  {/* label */}
                  <span className="flex-1 text-left">{item.label}</span>

                  {/* price */}
                  <span className="line-through opacity-60 ml-4">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>

            {/* TOTAL COMPARISON */}
            <div className="mt-8 ml-8 border border-[#5A0B14]/20 rounded-2xl overflow-hidden">
              <div className="flex justify-between px-6 py-3 text-sm bg-white">
                <span>Your Traditional Supplements</span>
                <span className="line-through">$298</span>
              </div>
              <div className="flex justify-between px-6 py-3 text-sm font-semibold bg-[#F3DEDA] text-[#5A0B14]">
                <span>IM8 Daily Ultimate Essentials</span>
                <span>$89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
