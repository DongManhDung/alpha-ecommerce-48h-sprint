export default function AddToCartSection() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* One time purchase */}
      <button className="text-sm font-semibold text-[#6b1c1c] underline underline-offset-4 hover:opacity-80 mb-5">
        One Time Purchase $112
      </button>

      {/* CTA Button */}
      <button className="w-full rounded-full bg-[#b40000] py-3 text-center text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#9e0000]">
        ADD TO CART – $99 USD/MO
      </button>
    </div>
  );
}