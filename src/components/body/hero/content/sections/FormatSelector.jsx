export default function FormatSelector({ selectedFormat, setSelectedFormat }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-base font-semibold text-[#6b1c1c] text-left">
        1. Select Format:
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Forever Jar */}
        <div
          onClick={() => setSelectedFormat("jar")}
          className={`relative flex cursor-pointer gap-4 rounded-2xl p-4 transition
            ${
              selectedFormat === "jar"
                ? "border border-[#8b0000] bg-[#fff1ed]"
                : "border border-[#e6cfcf] bg-white"
            }
          `}
        >
          <span className="absolute -top-2 right-4 rounded-full bg-[#c40000] px-3 py-[2px] text-[10px] font-semibold text-white">
            MOST POPULAR
          </span>

          <img
            src="https://im8health.com/cdn/shop/files/UX-Input_1.jpg?v=8068906590217553853"
            alt=""
            className="h-20 w-16 object-contain"
          />

          <div className="flex flex-col justify-center">
            <p className="font-semibold text-[#6b1c1c] text-left">
              Forever Jar
            </p>
            <p className="text-sm text-[#6b1c1c]/70">
              (354g) $2.61 USD / serving
            </p>
          </div>
        </div>

        {/* Single Serve */}
        <div
          onClick={() => setSelectedFormat("sachet")}
          className={`flex cursor-pointer gap-4 rounded-2xl p-4 transition
            ${
              selectedFormat === "sachet"
                ? "border border-[#8b0000] bg-[#fff1ed]"
                : "border border-[#e6cfcf] bg-white"
            }
          `}
        >
          <img
            src="https://im8health.com/cdn/shop/files/UX-Input_2.jpg?v=4366596284312861834"
            alt=""
            className="h-20 w-16 object-contain"
          />

          <div className="flex flex-col justify-center">
            <p className="font-semibold text-[#6b1c1c] text-left">
              Single-Serve Sachets
            </p>
            <p className="text-sm text-[#6b1c1c]/70">
              (354g) $2.91 USD / serving
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}