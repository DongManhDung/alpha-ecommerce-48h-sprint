const reviews = [
  {
    name: "Jennifer Dunn",
    content:
      "I'm on my second month of IM8, along with my significant other and we both feel more energy, more brain clarity and overall improved feeling of well-being. I talk about this product with all my golf friends.",
  },
  {
    name: "Lisa Tradewell",
    content:
      "Since I started this a month ago I have felt great, energetic, and sleeping better. I have taken a lot of vitamins and am hopeful this will replace most of them. Thank you.",
  },
  {
    name: "Bernae VeraKruse",
    content:
      "I love it. I have a lot more energy. I am recommending it to all my friends. It is so nice to have almost everything I take in one drink.",
  },
  {
    name: "Erika Friesenhahn",
    content:
      "I absolutely love IM8. I see a difference with my gut health and immune system. I have been spreading the word about this great product.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#FBF4EC] py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold text-[#7A0F1B]">
          10,000+ 5 Star Reviews
        </h2>
        <p className="mt-4 text-[#7A0F1B]/80 max-w-2xl mx-auto text-sm">
          These are actual IM8 verified customers that have seen successful
          health outcomes with the consistent use of IM8 Daily Ultimate
          Essentials.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full">
        <div className="marquee gap-6">
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={idx}
              className="w-[340px] bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between flex-shrink-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div>
                {/* Stars */}
                <div className="flex mb-4 text-[#7A0F1B] text-lg">★★★★★</div>

                {/* Content */}
                <p className="text-sm text-[#7A0F1B]/80 leading-relaxed text-left">
                  "{review.content}"
                </p>
              </div>

              {/* Author – luôn nằm đáy */}
              <p className="mt-6 text-sm font-semibold text-[#7A0F1B] text-left">
                — {review.name},{" "}
                <span className="font-semibold">Verified Customer</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-14 text-sm text-[#7A0F1B]">
        <span className="font-semibold">11,825 Reviews</span> | Average Rating:{" "}
        <span className="font-semibold">4.8/5</span>
      </div>
    </section>
  );
}
