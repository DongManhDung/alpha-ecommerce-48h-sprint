import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-[#6f0011] text-white">

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-12 py-20 text-left text-[#ff9693 !important] font-bold">
          <div
            className="grid gap-10"
            style={{ gridTemplateColumns: "0.9fr 0.9fr 1.2fr 1fr 0.9fr 2.3fr" }}
          >
            {/* SHOP */}
            <FooterCol
              title="Shop"
              items={[
                "Premium Core Nutrition",
                "The Beckham Stack",
                "Merchandise",
                "Shop All",
              ]}
            />

            {/* COMPANY */}
            <FooterCol
              title="Company"
              items={["About Us", "Science", "Impact"]}
            />

            {/* LEARN */}
            <FooterCol
              title="Learn"
              items={[
                "Reviews",
                "Ingredients",
                "Quality Standards",
                "IM8 Inner Circle",
                "IM8 vs AG1 Next Gen",
                "IM8 vs Live It Up Super Greens",
                "IM8 vs Bloom Greens & Superfoods",
                "IM8 vs Huel Daily Greens",
              ]}
            />

            {/* SUPPORT */}
            <FooterCol
              title="Support"
              items={[
                "FAQs",
                "Track My Order",
                "Returns / Exchanges",
                "Contact Us",
              ]}
            />

            {/* COMMUNITY */}
            <FooterCol
              title="IM8 Community"
              items={[
                "Instagram",
                "Facebook",
                "TikTok",
                "YouTube",
                "Pinterest",
              ]}
            />

            {/* NEWSLETTER */}
            <div className="pl-6 border-l border-white/20 text-left w-full">
              <h4 className="text-sm font-semibold uppercase mb-4">
                Join the community for exclusive wellness insights
              </h4>

              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full rounded-full px-4 py-2 text-black text-sm mb-3"
              />

              <button className="w-full bg-[#9b1b1f] hover:bg-[#86171b] transition text-white rounded-full py-2 text-sm font-semibold">
                JOIN NOW
              </button>

              <p className="text-xs text-white/70 mt-3">
                *By joining, you’ll receive our wellness insights and can
                unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Newsletter Section - First on Mobile */}
        <div className="px-6 py-12 text-center relative overflow-hidden bg-[#f5f1eb]">
          {/* Background Video for Newsletter Section Only */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://im8health.com/cdn/shop/files/preview_images/fbf49de132784b63b1209cf9f32ce77d.thumbnail.0000000000.jpg?v=1724177472"
              className="w-full h-full object-cover opacity-40"
            >
              <source
                src="https://im8health.com/cdn/shop/videos/c/vp/fbf49de132784b63b1209cf9f32ce77d/fbf49de132784b63b1209cf9f32ce77d.HD-720p-2.1Mbps-33478040.mp4?v=0"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="relative z-10">
            <h4 className="text-4xl font-semibold mb-6 text-center leading-tight text-[#7A0008]">
              Join the
              <br />
              community for
              <br />
              exclusive wellness
              <br />
              insights
            </h4>

            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full rounded-full px-4 py-3 text-black text-sm mb-4 bg-white border border-gray-200"
            />

            <button className="w-full bg-[#9b1b1f] hover:bg-[#86171b] transition text-white rounded-full py-3 text-sm font-semibold">
              JOIN NOW
            </button>

            <p className="text-xs text-[#7A0008]/70 mt-3">
              *By joining, you'll receive our wellness insights and can
              unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Collapsible Sections */}
        <div className="px-6 text-left">
          <MobileFooterSection
            title="SHOP"
            items={[
              "Premium Core Nutrition",
              "The Beckham Stack",
              "Merchandise",
              "Shop All",
            ]}
          />
          <MobileFooterSection
            title="COMPANY"
            items={["About Us", "Science", "Impact"]}
          />
          <MobileFooterSection
            title="LEARN"
            items={[
              "Reviews",
              "Ingredients",
              "Quality Standards",
              "IM8 Inner Circle",
              "IM8 vs AG1 Next Gen",
              "IM8 vs Live It Up Super Greens",
              "IM8 vs Bloom Greens & Superfoods",
              "IM8 vs Huel Daily Greens",
            ]}
          />
          <MobileFooterSection
            title="SUPPORT"
            items={[
              "FAQs",
              "Track My Order",
              "Returns / Exchanges",
              "Contact Us",
            ]}
          />
          <MobileFooterSection
            title="IM8 COMMUNITY"
            items={["Instagram", "Facebook", "TikTok", "YouTube", "Pinterest"]}
          />
        </div>
      </div>

      {/* BIG LOGO */}
      <div className="relative overflow-hidden mt-16 mb-12 flex justify-center items-center">
        <img
          src="https://im8health.com/cdn/shop/files/IM8_Logo-R_Pink.svg?v=1729137155&width=900"
          alt="IM8"
          className="w-2/3"
        />
      </div>

      {/* BOTTOM LEGAL */}
      <div className="text-center md:text-left text-xs text-white/70 pb-16 w-2/3 mx-auto">
        <div className="mb-6">
          © 2026 IM8® · Privacy Policy · Terms of Service
        </div>

        <div className="max-w-3xl mx-auto border border-white/30 px-6 py-4 text-white/80 text-center">
          *These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure
          or prevent any disease.
        </div>

        <p className="mt-4 text-white/60 text-center">
          *Free Welcome Kit available for new subscribers only.
        </p>
      </div>
    </footer>
  );
}

function MobileFooterSection({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h4 className="text-sm font-semibold uppercase">{title}</h4>
        <span className="text-xl font-light">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/80 text-center">
          {items.map((item, i) => (
            <li key={i} className="hover:text-white cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((item, i) => (
          <li key={i} className="hover:text-white cursor-pointer transition">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
