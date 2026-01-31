export default function MoneyBackGuarantee() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#2e7d32] bg-[#e9f7ef] p-4">
      <img
        src="https://im8health.com/cdn/shop/files/greencheck.png?v=1764066515&width=72"
        alt=""
        className="h-6 w-6"
      />

      <div>
        <p className="text-sm font-semibold text-[#6b1c1c] text-left">
          30-Day 100% Money Back Guarantee
        </p>
        <p className="text-xs text-[#6b1c1c]/70">
          We're so confident you'll love it, take a full 30 days to decide
        </p>
      </div>
    </div>
  );
}