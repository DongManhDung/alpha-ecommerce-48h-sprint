export default function PremiumCoreNutrition() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#7A0008] mb-4">
          Premium Core Nutrition
        </h2>

        {/* Benefits */}
        <div className="flex flex-col md:flex-row gap-3 text-sm mb-10">
          <div className="flex items-center gap-2 text-[#7A0008]">
            <CheckIcon />
            <span><span className="font-bold">30-Day</span> money back guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-[#7A0008]">
            <CheckIcon />
            <span><span className="font-bold">Update</span> or <span className="font-bold">cancel</span> anytime</span>
          </div>
          <div className="flex items-center gap-2 text-[#7A0008]">
            <CheckIcon />
            <span><span className="font-bold">Free shipping</span> for all subscriptions</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard
            badge="BEST SELLER"
            badgeColor="bg-[#9B1B1F]"
            tag="FEEL AMAZING TODAY"
            title="Daily Ultimate Essentials:"
            subtitle="All-in-One Supplement"
            desc="Core nutrition with 92 nutrient-rich ingredients in one delicious drink."
            price="From $89"
            img1="https://im8health.com/cdn/shop/files/Frame_1171275435.png?v=1762225645&width=940"
            img2="https://im8health.com/cdn/shop/files/DB.jpg?v=1731598505&width=940"
          />

          <ProductCard
            tag="STAY YOUNG TOMORROW"
            title="Daily Ultimate Longevity:"
            subtitle="Healthy Aging"
            desc="Scientifically formulated to support all 12 hallmarks of aging."
            price="From $119"
            img1="https://im8health.com/cdn/shop/files/Frame_1171275436.png?v=1762225646&width=940"
            img2="https://im8health.com/cdn/shop/files/pdp_carousel_ESS01_grid-hover_1.jpg?v=1759218112&width=940"
          />

          <ProductCard
            badge="BEST VALUE"
            badgeColor="bg-[#9B1B1F]"
            tag="THE ULTIMATE DAILY RITUAL"
            title="The Beckham Stack:"
            subtitle="Essentials + Longevity Set"
            desc="Daily Ultimate Essentials and Daily Ultimate Longevity."
            price="From $196"
            img1="https://im8health.com/cdn/shop/files/20250922_DB_IM8_S10_102_1X1_2_1.jpg?v=1762225129&width=940"
            img2="https://im8health.com/cdn/shop/files/pdp_carousel_BSK01_grid-hover.jpg?v=1759900880&width=940"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ProductCard({
  img1,
  img2,
  badge,
  badgeColor,
  tag,
  title,
  subtitle,
  desc,
  price,
}) {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden bg-[#F6EFEA]">
        {badge && (
          <div className="absolute top-3 right-3 z-20">
            <div 
              className={`w-12 h-12 md:w-16 md:h-16 ${badgeColor} flex items-center justify-center shadow-lg`}
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                transform: 'rotate(70deg)'
              }}
            >
              <span 
                className="text-[8px] md:text-[10px] text-white font-bold text-center leading-none"
                style={{ transform: 'rotate(-70deg)' }}
              >
                {badge.split(' ').map((word, i) => (
                  <div key={i}>{word}</div>
                ))}
              </span>
            </div>
          </div>
        )}

        <div className="relative w-full aspect-square">
          <img
            src={img1}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={img2}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
          />
        </div>

        {/* Add to Cart Button - Desktop only */}
        <button className="hidden md:flex absolute bottom-4 right-4 z-10 bg-[#9B1B1F] hover:bg-[#7A0008] text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          ADD TO CART
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 text-left">
        {tag && (
          <span className="inline-block mb-2 bg-[#9B1B1F] text-white text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        )}

        <h3 className="font-semibold text-lg leading-tight">
          {title}
          <br />
          <span className="font-normal">{subtitle}</span>
        </h3>

        <p className="text-sm text-gray-600 mt-2">{desc}</p>

        <p className="text-sm font-semibold mt-2">{price}</p>

        {/* Mobile CTA */}
        <button className="md:hidden mt-4 w-full bg-[#9B1B1F] text-white py-3 rounded-full text-sm font-semibold">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-2 text-[#7A0008]">
      <CheckIcon />
      <span>{text}</span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
