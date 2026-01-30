import { useState, useRef, useEffect } from "react";

/* ================= DATA ================= */
const shopItems = [
  "//im8health.com/cdn/shop/files/DUE-thumb.png?v=1762223928&width=600",
  "//im8health.com/cdn/shop/files/DUL-thumb.png?v=1762223929&width=600",
  "//im8health.com/cdn/shop/files/navbar_bstack_50dfae75-582e-400b-bce4-77aa74faa198.png?v=1762223932&width=600",
  "//im8health.com/cdn/shop/files/nav_wallofhealth.png?v=1736149918&width=600",
  "//im8health.com/cdn/shop/files/nav-d-merch-04.png?v=1732028322&width=600",
  "//im8health.com/cdn/shop/files/nav-d-all-05_fab95fb1-4357-4180-8f66-e5a20b4d8b4f.png?v=1762223931&width=600",
];

const currencies = [
  { country: "AUSTRALIA", code: "AUD $" },
  { country: "BELGIUM", code: "EUR €" },
  { country: "CANADA", code: "CAD $" },
  { country: "FRANCE", code: "EUR €" },
  { country: "GERMANY", code: "EUR €" },
  { country: "HONG KONG SAR", code: "HKD $" },
  { country: "HUNGARY", code: "HUF FT" },
  { country: "INDONESIA", code: "IDR RP" },
  { country: "ISRAEL", code: "ILS ₪" },
  { country: "ITALY", code: "EUR €" },
  { country: "JAPAN", code: "JPY ¥" },
  { country: "LITHUANIA", code: "EUR €" },
  { country: "MALAYSIA", code: "MYR RM" },
];

/* ================= MOBILE USD MODAL ================= */
function USDModal({ open, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCurrencies = currencies.filter(currency =>
    currency.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-50
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-50
          bg-white rounded-t-2xl
          max-h-[80vh]
          transition-transform duration-300 ease-out
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-[#8b0000]">Select Currency</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </svg>
          </button>
        </div>
        
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 text-sm uppercase tracking-wide"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Currency List */}
        <div className="max-h-[50vh] overflow-y-auto">
          {filteredCurrencies.map((currency, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50"
              onClick={onClose}
            >
              <span className="text-[#8b0000] font-medium text-sm tracking-wide">
                {currency.country}
              </span>
              <span className="text-[#8b0000] font-medium text-sm">
                {currency.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ================= DESKTOP SHOP MODAL ================= */
function ShopModal({ open, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`
        fixed top-16 left-36
        w-[480px]
        -translate-x-[150px]
        bg-white border shadow-xl
        rounded-b-2xl
        transition-all duration-300 ease-out
        z-10
        ${open ? "opacity-100" : "pointer-events-none opacity-0"}
      `}
      style={{ height: "calc(100vh - 64px)" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-full overflow-y-auto p-6 space-y-6">
        {shopItems.map((img, idx) => (
          <div
            key={idx}
            className="
              rounded-xl overflow-hidden cursor-pointer
              border border-transparent
              transition-all duration-200
              hover:border-[rgb(80,0,11)]
              bg-[#f6e3d6]
            "
          >
            <img src={img} className="h-48 w-full object-contain" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= MAIN HEADER ================= */
export default function MainHeader() {
  const [hovered, setHovered] = useState("");
  const [discoverHovered, setDiscoverHovered] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [shopOpen, setShopOpen] = useState(false);
  const [usdModalOpen, setUsdModalOpen] = useState(false);
  const hoverTimer = useRef(null);
  const discoverTimer = useRef(null);

  const navItemsLeft = [
    "Shop",
    "Science",
    "The Beckham Stack",
    "Welcome from David",
  ];

  const navItemsRight = ["Reviews", "Ingredients"];

  const openShop = () => {
    clearTimeout(hoverTimer.current);
    setShopOpen(true);
    setActiveMenu("Shop");
  };

  const closeShop = () => {
    hoverTimer.current = setTimeout(() => {
      setShopOpen(false);
      setActiveMenu("");
    }, 120);
  };

  const openDiscover = () => {
    clearTimeout(discoverTimer.current);
    setHovered("Discover");
  };

  const closeDiscover = () => {
    discoverTimer.current = setTimeout(() => {
      setHovered("");
      setDiscoverHovered("");
    }, 200);
  };

  // Auto close mobile panel when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && mobileOpen) { // 640px is sm breakpoint
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="relative z-40 w-full border-b border-[#f1dede] bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
          {/* ================= MOBILE ================= */}
          <div className="flex w-full items-center justify-between sm:hidden">
            <button onClick={() => setMobileOpen((prev) => !prev)}>
              {/* giữ nguyên SVG */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                stroke="#8b0000"
                fill="none"
                strokeWidth="2"
              >
                <path d="M2 7H30" />
                <path d="M2 16H30" />
                <path d="M2 25H30" />
              </svg>
            </button>

            <img
              src="https://im8health.com/cdn/shop/files/Header-Logo-New.svg?v=1729066833&width=600"
              className="h-6"
            />

            <div className="flex gap-3">
              {/* giữ nguyên SVG */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#8b0000"
                strokeWidth="2"
              >
                <path d="M3 30C3 22.82 8.82 17 16 17C23.18 17 29 22.82 29 30" />
                <path d="M16 15C20.9706 15 25 10.9706 25 6C25 1.02944 20.9706 -3 16 -3C11.0294 -3 7 1.02944 7 6C7 10.9706 11.0294 15 16 15Z" />
              </svg>

              <div className="relative cursor-pointer">
                {/* SVG CART – GIỮ NGUYÊN PATH */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="#8b0000"
                  strokeWidth="2"
                >
                  <path d="M5.45011 5.45011L16 1.08232L26.5499 5.45011L30.9177 16L26.5499 26.5499L16 30.9177L5.45011 26.5499L1.08232 16L5.45011 5.45011Z" />
                </svg>

                {/* CART COUNT BUBBLE */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    flex items-center justify-center
                    text-[11px] font-semibold
                    text-[#8b0000]
                    translate-y-[-2px]
                    "
                >
                  <span aria-hidden="true">0</span>
                  <span className="sr-only">0 items</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden w-full items-center justify-between sm:flex">
            <nav className="flex gap-8 text-sm font-medium text-[#8b0000]">
              {navItemsLeft.map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => {
                    if (item === "Shop") {
                      openShop();
                    } else {
                      clearTimeout(hoverTimer.current);
                      setShopOpen(false);
                      setActiveMenu(item);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item === "Shop") {
                      closeShop();
                    } else {
                      setActiveMenu("");
                    }
                  }}
                  className="relative cursor-pointer pb-1"
                >
                  {item}

                  <span
                    className={`
          absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]
          transition-transform duration-300
          ${activeMenu === item ? "scale-x-100" : "scale-x-0"}
        `}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              ))}
            </nav>

            <img
              src="https://im8health.com/cdn/shop/files/Header-Logo-New.svg?v=1729066833&width=600"
              className="h-7 cursor-pointer"
            />

            <div className="relative flex items-center gap-8 text-sm font-medium text-[#8b0000]">
              {/* Reviews & Ingredients */}
              {navItemsRight.map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered("")}
                  className="relative cursor-pointer pb-1"
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000] transition-transform duration-300 ${
                      hovered === item ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              ))}

              {/* Discover (dropdown) */}
              <div
                onMouseEnter={openDiscover}
                onMouseLeave={closeDiscover}
                className="relative cursor-pointer"
              >
                <span className="flex items-center gap-1">
                  Discover
                  <svg width="10" height="6" viewBox="0 0 10 6">
                    <path d="M1 1L5 5L9 1" stroke="#8b0000" strokeWidth="1.5" />
                  </svg>
                </span>

                {hovered === "Discover" && (
                  <div 
                    className="absolute -left-3 top-6 w-56 rounded-md border bg-white p-4 shadow-lg z-50"
                    onMouseEnter={openDiscover}
                    onMouseLeave={closeDiscover}
                  >
                    <ul className="space-y-3 text-sm text-left">
                      <li 
                        className="relative cursor-pointer py-1 hover:opacity-70"
                        onMouseEnter={() => setDiscoverHovered("About Us")}
                        onMouseLeave={() => {/* Keep modal open when moving between items */}}
                      >
                        About Us
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000] transition-transform duration-300 ${
                            discoverHovered === "About Us" ? "scale-x-100" : "scale-x-0"
                          }`}
                          style={{ transformOrigin: "left" }}
                        />
                      </li>
                      <li 
                        className="relative cursor-pointer py-1 hover:opacity-70"
                        onMouseEnter={() => setDiscoverHovered("Our Impact")}
                        onMouseLeave={() => {/* Keep modal open when moving between items */}}
                      >
                        Our Impact
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000] transition-transform duration-300 ${
                            discoverHovered === "Our Impact" ? "scale-x-100" : "scale-x-0"
                          }`}
                          style={{ transformOrigin: "left" }}
                        />
                      </li>
                      <li 
                        className="relative cursor-pointer py-1 hover:opacity-70"
                        onMouseEnter={() => setDiscoverHovered("Quality and Standards")}
                        onMouseLeave={() => {/* Keep modal open when moving between items */}}
                      >
                        Quality and Standards
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000] transition-transform duration-300 ${
                            discoverHovered === "Quality and Standards" ? "scale-x-100" : "scale-x-0"
                          }`}
                          style={{ transformOrigin: "left" }}
                        />
                      </li>
                      <li 
                        className="relative cursor-pointer py-1 hover:opacity-70"
                        onMouseEnter={() => setDiscoverHovered("The Healthspan Blog")}
                        onMouseLeave={() => {/* Keep modal open when moving between items */}}
                      >
                        The Healthspan Blog
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000] transition-transform duration-300 ${
                            discoverHovered === "The Healthspan Blog" ? "scale-x-100" : "scale-x-0"
                          }`}
                          style={{ transformOrigin: "left" }}
                        />
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Account */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#8b0000"
                strokeWidth="2"
                className="cursor-pointer"
              >
                <path d="M3 30C3 22.82 8.82 17 16 17C23.18 17 29 22.82 29 30" />
                <path d="M16 17C20.1421 17 23.5 13.6421 23.5 9.5C23.5 5.35786 20.1421 2 16 2C11.8579 2 8.5 5.35786 8.5 9.5C8.5 13.6421 11.8579 17 16 17Z" />
              </svg>

              {/* Cart */}
              <div className="relative cursor-pointer">
                {/* SVG CART – GIỮ NGUYÊN PATH */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="#8b0000"
                  strokeWidth="2"
                >
                  <path d="M5.45011 5.45011L16 1.08232L26.5499 5.45011L30.9177 16L26.5499 26.5499L16 30.9177L5.45011 26.5499L1.08232 16L5.45011 5.45011Z" />
                </svg>

                {/* CART COUNT BUBBLE */}
                <div
                  className="
                pointer-events-none
                absolute inset-0
                flex items-center justify-center
                text-[11px] font-semibold
                text-[#8b0000]
                "
                >
                  <span aria-hidden="true">0</span>
                  <span className="sr-only">0 items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SHOP MODAL - DI CHUYỂN RA NGOÀI HEADER ================= */}
      <ShopModal
        open={shopOpen}
        onMouseEnter={openShop}
        onMouseLeave={closeShop}
      />
      
      {/* ================= USD MODAL ================= */}
      <USDModal
        open={usdModalOpen}
        onClose={() => setUsdModalOpen(false)}
      />

      {/* ================= MOBILE SLIDE PANEL ================= */}
      <div
        className={`
          fixed left-0 top-16
          h-[calc(100vh-64px)]
          w-full bg-white
          z-30
          transition-transform duration-300 ease-out
          sm:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full overflow-y-auto p-4 space-y-6">
          {shopItems.map((img, idx) => (
            <img key={idx} src={img} className="rounded-xl" />
          ))}
          
          {/* Navigation Items */}
          <div className="border-t border-gray-200 pt-4 space-y-4 text-left">
            <div className="relative text-[#8b0000] font-medium text-base cursor-pointer py-2 border-b border-gray-100">
              Welcome from David
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]"></span>
            </div>
            <div className="relative text-[#8b0000] font-medium text-base cursor-pointer py-2 border-b border-gray-100">
              About Us
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]"></span>
            </div>
            <div className="relative text-[#8b0000] font-medium text-base cursor-pointer py-2 border-b border-gray-100">
              Science
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]"></span>
            </div>
            <div className="relative text-[#8b0000] font-medium text-base cursor-pointer py-2 border-b border-gray-100">
              Ingredients
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]"></span>
            </div>
            <div className="relative text-[#8b0000] font-medium text-base cursor-pointer py-2 border-b border-gray-100">
              Quality and Standards
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]"></span>
            </div>
            <div className="relative text-[#8b0000] font-medium text-base cursor-pointer py-2 border-b border-gray-100">
              IM8 Inner Circle
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]"></span>
            </div>
            <div className="relative text-[#8b0000] font-medium text-base cursor-pointer py-2 border-b border-gray-100">
              FAQs
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]"></span>
            </div>
            <div className="relative text-[#8b0000] font-medium text-base cursor-pointer py-2 border-b border-gray-100">
              The Healthspan Blog
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]"></span>
            </div>
            <div 
              className="relative text-[#8b0000] font-medium text-base cursor-pointer py-2"
              onClick={() => setUsdModalOpen(true)}
            >
              USD
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b0000]"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
