import { useState } from "react";

const CURRENCIES = [
  { country: "Australia", code: "AUD $" },
  { country: "Belgium", code: "EUR €" },
  { country: "Canada", code: "CAD $" },
  { country: "France", code: "EUR €" },
  { country: "Germany", code: "EUR €" },
  { country: "Japan", code: "JPY ¥" },
  { country: "United Kingdom", code: "GBP £" },
  { country: "United States", code: "USD $" },
  { country: "Switzerland", code: "CHF Fr." },
  { country: "India", code: "INR ₹" },
  { country: "Mexico", code: "MXN $" },
];

export default function TopAnnouncementBar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full bg-[#9b0b0b] text-white">
      <div className="relative mx-auto flex h-10 max-w-screen-xl items-center justify-center px-4">
        {/* Center text */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest sm:text-sm">
          2026 starts now: 35% off – feel like yourself again
        </p>

        {/* Currency trigger */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-4 hidden cursor-pointer items-center gap-1 text-xs font-semibold sm:flex"
        >
          <span>USD</span>
          <svg
            className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Dropdown modal */}
        {open && (
          <div className="absolute right-4 top-12 z-50 w-64 rounded-md border border-[#9b0b0b] bg-white text-[#9b0b0b] shadow-lg">
            {/* Search */}
            <div className="p-3">
              <input
                placeholder="SEARCH"
                className="w-full border border-[#9b0b0b] px-2 py-1 text-xs uppercase outline-none"
              />
            </div>

            {/* List */}
            <ul className="max-h-64 overflow-y-auto px-2 pb-2 text-sm">
              {CURRENCIES.map((item) => (
                <li
                  key={item.country}
                  onMouseEnter={() => setHovered(item.country)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex cursor-pointer items-center justify-between px-2 py-2 hover:bg-[#f7eaea]"
                >
                  <span className="uppercase">{item.country}</span>
                  {hovered === item.country && (
                    <span className="font-semibold">{item.code}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
