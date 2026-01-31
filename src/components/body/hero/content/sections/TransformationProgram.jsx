import ExpertCard from "./ExpertCard";

export default function TransformationProgram() {
  return (
    <div className="rounded-3xl border border-[#f0d7b6] bg-gradient-to-b from-[#fff3df] to-[#fffaf3] p-6">
      {/* Badge */}
      <div className="mb-4 flex justify-center">
        <span className="flex items-center gap-2 rounded-full bg-[#f3d49a] px-4 py-1 text-xs font-semibold text-[#6b1c1c]">
          🎓 90-DAY MEMBERS ONLY
        </span>
      </div>

      {/* Title */}
      <h3 className="text-center text-xl font-extrabold text-[#6b1c1c]">
        90-Day IM8 Transformation Program
      </h3>

      {/* Subtitle */}
      <p className="mt-2 text-center text-sm text-[#6b1c1c]/80">
        Exclusive access to quarterly masterclasses with our world-class
        Medical and Performance Experts
      </p>

      {/* Experts Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <ExpertCard
          img="https://im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298&width=300"
          name="Dr. Dawn Mussallem"
          title="Cancer Survivor & Physician"
          sub="Mayo Clinic"
        />
        <ExpertCard
          img="https://im8health.com/cdn/shop/files/Rectangle_3_68b5f4fc-fe48-466d-9d97-487fbdea1942.png?v=1764066245&width=300"
          name="Bobby Rich"
          title="Trainer to David Beckham"
          sub="World Class Athletes"
        />
        <ExpertCard
          img="https://im8health.com/cdn/shop/files/Rectangle_4_9e90556f-68ae-405e-a707-89eff3d64066.png?v=1764066309&width=300"
          name="Dr. Suzanne Devkota"
          title="Gut Health Expert & Prof"
          sub="Cedars Sinai"
        />
        <ExpertCard
          img="https://im8health.com/cdn/shop/files/Rectangle_5.png?v=1764066392&width=300"
          name="Tavi Castro"
          title="Breathwork & Free-Diving"
          sub="World Record Holder"
        />
        <ExpertCard
          img="https://im8health.com/cdn/shop/files/Rectangle_7.png?v=1764066430&width=300"
          name="Dr. Amy Shah"
          title="Double Board-Certified"
          sub="Podcast Host"
        />
        <ExpertCard
          img="https://im8health.com/cdn/shop/files/Rectangle_6.png?v=1764066459&width=300"
          name="Dr. Ara Suppiah"
          title="Performance & Longevity"
          sub="Physician at LIV Golf"
        />
      </div>

      {/* Description */}
      <p className="mt-6 text-center text-sm text-[#6b1c1c]/80">
        Get personalized guidance, exclusive content, and direct access to
        leading experts in health optimization, performance, and longevity.
      </p>

      {/* CTA */}
      <button className="mt-6 w-full flex justify-center items-center gap-2 rounded-full bg-[#f1d18c] py-3 text-sm font-bold text-[#6b1c1c] transition hover:bg-[#e8c777]">
        LEARN MORE ABOUT THE PROGRAM
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}