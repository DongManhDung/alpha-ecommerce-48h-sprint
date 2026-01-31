export default function StatItem({ emoji, value, label }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-xl font-semibold text-[#1b5e20]">
        <span>{emoji}</span>
        <span>{value}</span>
      </div>
      <span className="text-sm text-[#1b5e20]/80">{label}</span>
    </div>
  );
}