export default function RatingBar() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-[#6b1c1c]">
      <div className="flex items-center gap-1">
        <span className="text-[#8b0000]">★★★★★</span>
        <span className="font-semibold">4.8</span>
      </div>
      <span className="whitespace-nowrap">
        from <span className="font-semibold">11,825 Reviews</span>
      </span>
      <span className="hidden sm:inline text-gray-400">•</span>
      <span className="whitespace-nowrap">
        <span className="font-semibold">620k+</span> customer purchases
      </span>
      <span className="hidden lg:inline text-gray-400">•</span>
      <span className="hidden lg:inline whitespace-nowrap">
        <span className="font-semibold">19M+</span> servings
      </span>
    </div>
  );
}