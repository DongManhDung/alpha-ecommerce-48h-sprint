const experts = [
  {
    name: "Prof. Suzanne Devkota",
    title: "Director of Cedars-Sinai\nHuman Microbiome\nResearch Institute",
    image:
      "https://im8health.com/cdn/shop/files/Frame_1000004731.png?v=1727767462",
  },
  {
    name: "Dr. James L. Green",
    title: "Former Chief Scientist of\nNASA",
    image:
      "https://im8health.com/cdn/shop/files/Dr._James_D.png?v=1730708665&width=750v",
  },
  {
    name: "Dr. Dawn Mussallem",
    title: "CMO of Fountain Life &\nIntegrative Oncologist at\nMayo Clinic",
    image:
      "https://im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298",
  },
  {
    name: "Dr. James DiNicolantonio",
    title: "Cardiovascular Research\nScientist and Doctor of\nPharmacy",
    image:
      "https://im8health.com/cdn/shop/files/Frame_1000004729.png?v=1727767462&width=750",
  },
  {
    name: "Dr. Jeremy London",
    title: "Board Certified\nCardiovascular Surgeon",
    image:
      "https://im8health.com/cdn/shop/files/sab_London_headshot.jpg?v=1741755281",
  },
  {
    name: "Dr. Amy Shah",
    title:
      "Double-Board Certified\nPhysician & Host of\nPodcast “Save Yourself”",
    image:
      "https://im8health.com/cdn/shop/files/sab_Shah_headshot.jpg?v=1741754337",
  },
  {
    name: "Dr. Ara Suppiah",
    title:
      "Performance Strategist,\nSports Physician, Creator\nof Functional Sports\nMedicine",
    image:
      "https://im8health.com/cdn/shop/files/sab_Suppiah_headshot.jpg?v=1750043459",
  },
  {
    name: "Dr. Darshan Shah",
    title:
      "Board Certified Surgeon &\nPhysician, CEO and Founder\nof Next Health",
    image:
      "https://im8health.com/cdn/shop/files/sab_DarshanShah_headshot.jpg?v=1750043459",
  },
  {
    name: "Simon Hill",
    title: "MSc, BSc, Nutritionist,\nPhysiologist, Author and\nPodcast Host",
    image:
      "https://im8health.com/cdn/shop/files/sab_Hill_headshot.jpg?v=1750043459",
  },
];

function PlusIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z"
          fill="white"
          fillOpacity="0.8"
        />
        <path
          d="M7.40974 7.40974L24 0.541158L40.5903 7.40974L47.4588 24L40.5903 40.5903L24 47.4588L7.40974 40.5903L0.541158 24L7.40974 7.40974Z"
          stroke="#50000B"
        />
        <path d="M33 24H15" stroke="#50000B" strokeWidth="2" />
        <path d="M24 15V33" stroke="#50000B" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ExpertsSection() {
  return (
    <section className="bg-[#FAF6F3] py-20">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase text-xs tracking-widest text-[#7A1D22] mb-3">
            Driven by science
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#50000B] mb-4">
            Meet The Brilliant Minds Behind IM8
          </h2>
          <p className="text-sm text-[#7A1D22]">
            An unparalleled collaboration between academia, medicine, and space
            science.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {experts.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#F4EDE9] rounded-2xl overflow-hidden flex min-h-[180px] cursor-pointer"
            >
              {/* Image - Left 50% */}
              <div className="w-1/2 h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-l-2xl"
                />
              </div>

              {/* Content - Right 50% */}
              <div className="w-1/2 p-6 pr-14 flex flex-col justify-start">
                <h3 className="font-semibold text-[#50000B] text-sm mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-[#7A1D22] whitespace-pre-line leading-relaxed">
                  {item.title}
                </p>
              </div>

              {/* Plus icon */}
              <button className="absolute bottom-4 right-4">
                <PlusIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
