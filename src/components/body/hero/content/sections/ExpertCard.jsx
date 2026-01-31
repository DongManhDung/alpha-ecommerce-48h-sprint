export default function ExpertCard({ img, name, title, sub }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-28 w-28 overflow-hidden rounded-xl border-2 border-[#e6cfcf]">
        <img src={img} alt={name} className="h-full w-full object-cover" />
      </div>
      <p className="mt-2 text-sm font-semibold text-[#6b1c1c]">{name}</p>
      <p className="text-xs text-[#6b1c1c]/80">{title}</p>
      <p className="text-xs italic text-[#6b1c1c]/60">{sub}</p>
    </div>
  );
}