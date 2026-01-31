import { useState } from "react";

const FAQS = [
  {
    question: "What is IM8?",
    answer:
      "IM8 is the pinnacle of premium core nutrition, born from a collaboration between Prenetics (NASDAQ:PRE), David Beckham as a co-founding partner, and an elite team of scientists spanning space exploration, medical professionals, and academic excellence.",
  },
  {
    question: "What is David Beckham’s involvement in IM8?",
    answer:
      "David Beckham is a co-founding partner, deeply involved in shaping the vision and standards of IM8.",
  },
  {
    question: "Who is on the IM8 Scientific Advisory Board?",
    answer:
      "IM8’s Scientific Advisory Board includes world-class scientists, doctors, and researchers.",
  },
  {
    question: "What are the main benefits of IM8 Daily Essentials + Hydration?",
    answer: "Supports energy, focus, immune health, gut health, and longevity.",
  },
  {
    question: "What does IM8 Daily Ultimate Essentials taste like?",
    answer: "A refreshing, smooth taste designed for daily enjoyment.",
  },
  {
    question: "What countries do you currently ship to?",
    answer: "IM8 currently ships to multiple countries worldwide.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* IMAGE — MOBILE FIRST */}
        <div className="order-1 lg:order-2 lg:w-1/2 w-full h-[300px] lg:h-auto">
          <img
            src="https://im8health.com/cdn/shop/files/Rectangle_98-min_2.jpg?v=1731857082"
            alt="FAQ Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FAQ CONTENT */}
        <div className="order-2 lg:order-1 lg:w-1/2 w-full bg-[#9b1b1f] text-white px-6 py-10 lg:px-20 lg:py-24 text-left">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">FAQs</h2>

          <div className="space-y-4">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-white/30 pb-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-sm lg:text-base font-bold">
                      {item.question}
                    </span>

                    <span
                      className={`text-2xl font-light transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-white/90 text-left font">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <button className="mt-10 w-full lg:w-fit bg-black font-bold text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-black/60 transition">
            EXPLORE ALL FAQS
          </button>
        </div>
      </div>
    </section>
  );
}
