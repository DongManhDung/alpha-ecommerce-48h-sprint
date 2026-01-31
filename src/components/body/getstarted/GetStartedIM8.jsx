export default function GetStartedIM8() {
  return (
    <section className="bg-[#FFF5F5] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* CONTENT */}
          <div>
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-serif text-[#7A0000] leading-snug mb-6 text-left">
              GET STARTED WITH IM8 FOR
              <br />
              DAILY ULTIMATE NUTRITION
            </h2>

            {/* IMAGE – mobile (ngay dưới title) */}
            <div className="md:hidden flex justify-center mb-6">
              <img
                src="https://im8health.com/cdn/shop/files/welcome-kit-sach.png?v=1761040602&width=1200"
                alt="IM8 Welcome Kit"
                className="w-full max-w-sm"
              />
            </div>

            {/* Price main */}
            <div className="flex justify-between font-semibold text-[#7A0000] mb-3">
              <span>Daily Ultimate Essentials</span>
              <span>$89</span>
            </div>

            <hr className="border-black mb-4" />

            {/* First time purchase */}
            <p className="text-xs uppercase font-bold text-black mb-4 text-left">
              First time purchase:
            </p>

            <div className="space-y-3 text-sm text-[#7A0000] text-left">
              <div className="flex justify-between">
                <span className="max-w-[50%] leading-snug">
                  Signature Red Cup
                </span>
                <span className="flex gap-3">
                  <span className="line-through opacity-50">$28</span>
                  <span className="font-semibold">Free</span>
                </span>
              </div>

              <div className="flex justify-between">
                <span className="max-w-[50%] leading-snug">
                  Daily Ultimate Essentials Single-Serve Storage Box
                </span>
                <span className="flex gap-3">
                  <span className="line-through opacity-50">$8</span>
                  <span className="font-semibold">Free</span>
                </span>
              </div>

              <div className="flex justify-between">
                <span className="max-w-[50%] leading-snug">
                  5x Bonus Daily Ultimate Essentials Single-Serve Sachets
                </span>
                <span className="flex gap-3">
                  <span className="line-through opacity-50">$18</span>
                  <span className="font-semibold">Free</span>
                </span>
              </div>
            </div>

            <hr className="border-black my-5" />

            {/* Total */}
            <div className="flex justify-between items-center font-semibold text-[#7A0000]">
              <span>Total</span>
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-70">Save $54</span>
                <span className="text-lg">$89</span>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full mt-6 bg-[#B00010] hover:bg-[#8f000c] text-white py-4 rounded-full font-semibold transition">
              Get your Free IM8 Welcome Kit Now**
            </button>

            {/* Guarantees */}
            <ul className="flex flex-col items-center gap-3 mt-6 text-sm text-black md:flex-row md:justify-center md:gap-8">
              <li className="flex items-center gap-2">
                <img
                  src="https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg"
                  alt="check"
                  className="w-4 h-4"
                />
                <span>
                  <strong>30-Day</strong> money back guarantee
                </span>
              </li>

              <li className="flex items-center gap-2">
                <img
                  src="https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg"
                  alt="check"
                  className="w-4 h-4"
                />
                <span>
                  <strong>Update</strong> or <strong>cancel</strong> anytime
                </span>
              </li>
            </ul>
          </div>

          {/* IMAGE – desktop giữ nguyên */}
          <div className="hidden md:flex justify-end">
            <img
              src="https://im8health.com/cdn/shop/files/welcome-kit-sach.png?v=1761040602&width=1200"
              alt="IM8 Welcome Kit"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
