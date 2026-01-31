import { useState } from "react";
import StatItem from "./StatItem";

export default function ClinicalResults() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[#2e7d32] bg-[#eef8f0] p-6">
      {/* Header */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-[#50000b]">
          Clinically Proven Results
        </h3>

        <span className="self-start rounded-full bg-[#1b8f3a] px-3 py-1 text-xs font-semibold text-white sm:self-auto">
          90-DAY CLINICAL STUDY
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 text-left">
        <StatItem emoji="⚡" value="95%" label="More energy" />
        <StatItem emoji="🌿" value="85%" label="Better gut health" />
        <StatItem emoji="😴" value="80%" label="Better sleep quality" />
        <StatItem emoji="🧠" value="70%" label="Sharper focus" />
      </div>

      {/* Footnote */}
      <p className="mt-5 text-xs italic text-[#1b5e20]/70 text-left">
        *Based on 12-week randomized controlled trial by San Francisco
        Research Institute
      </p>

      {/* ========= WHY + BADGES ROW ========= */}
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-sm font-semibold text-[#50000b]"
        >
          <span className="underline">Why These Results Matter?</span>
          <span
            className={`transition-transform ${open ? "rotate-0" : "rotate-180"}`}
          >
            ^
          </span>
        </button>

        {/* Certification Images */}
        <div className="flex items-center gap-3">
          <img
            src="https://im8health.com/cdn/shop/files/Vector_38d1c63f-d300-48b5-b6e6-084b0cf0086d.png?v=1764063546&width=100"
            alt=""
            className="h-8 object-contain"
          />
          <img
            src="https://im8health.com/cdn/shop/files/NSF_CONTENTS_CERTIFIED_White_Vert_2.png?v=1764063546&width=100"
            alt=""
            className="h-8 object-contain"
          />
          <img
            src="https://im8health.com/cdn/shop/files/b9a15702-8e60-441d-b1fd-ce12f6742dcb_svg.png?v=1764063545&width=100"
            alt=""
            className="h-8 object-contain"
          />
        </div>
      </div>

      {/* ========= EXPANDED CONTENT ========= */}
      {open && (
        <p className="mt-4 text-sm leading-relaxed text-[#50000b]/80 text-left">
          Unlike most supplements with unverified claims, IM8 is backed by a
          12-week randomized controlled clinical trial. Every ingredient is
          NSF Certified for Sport, verifying exact dosages and testing for
          280+ banned substances – the same certification trusted by
          world-class athletes like Aryna Sabalenka, World No. 1 tennis
          player.
        </p>
      )}
    </div>
  );
}