import { useRef, useEffect } from "react";

const AMBASSADORS = [
  {
    id: 1,
    username: "@tjdefalco",
    followers: "274K",
    avatar:
      "https://im8health.com/cdn/shop/files/tjdefalco.jpg?v=1731306362&width=1296",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/e2c97673de604d8d9395afdda954e1d8/e2c97673de604d8d9395afdda954e1d8.SD-480p-0.9Mbps-39413319.mp4",
    thumbnail:
      "//im8health.com/cdn/shop/files/preview_images/e2c97673de604d8d9395afdda954e1d8.thumbnail.0000000000.jpg?v=1733712921",
    quote:
      "On the court, peak performance is non-negotiable. IM8 fuels my energy and mental clarity, helping me stay sharp and push my limits every day.",
  },
  {
    id: 2,
    username: "@mrbobbyrich",
    followers: "105K",
    avatar:
      "https://im8health.com/cdn/shop/files/Bobby_Rich_aca1a6fc-96f2-448e-8f8c-17f07a91fad6.png?v=1731574045",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/277ed49454544ca4a856e0e3faf4730c/277ed49454544ca4a856e0e3faf4730c.SD-480p-0.9Mbps-39412880.mp4",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/277ed49454544ca4a856e0e3faf4730c.thumbnail.0000000000.jpg?v=1733712043",
    quote:
      "As a former athlete and trainer to high performers, including David and Victoria Beckham, it means I need to always be on the top of my game. IM8 helps me to do just that and that's why I'm proud to be part of the team.",
  },
  {
    id: 3,
    username: "@carmelrodriguezfit",
    followers: "341K",
    avatar:
      "https://im8health.com/cdn/shop/files/Carmel_Rodriguez.png?v=1731574701",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/60ab4de92d314471a4bc1335539686a3/60ab4de92d314471a4bc1335539686a3.SD-480p-0.9Mbps-39412898.mp4?v=0",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/60ab4de92d314471a4bc1335539686a3.thumbnail.0000000000.jpg?v=1733712086",
    quote:
      "Body positivity and strength are at the heart of my wellness philosophy. IM8 helps me stay energized, strong, and ready to inspire others to achieve balance every day.",
  },
  {
    id: 4,
    username: "@tavicastro",
    followers: "4.8M",
    avatar:
      "https://im8health.com/cdn/shop/files/Tavi_Castro_e1d9b739-631c-464a-a763-c188f10709eb.png?v=1731573850",
    video:
      "//im8health.com/cdn/shop/videos/c/vp/4a3a9f0122d24d6988bbf5b9ed6a38bb/4a3a9f0122d24d6988bbf5b9ed6a38bb.SD-480p-0.9Mbps-39413270.mp4?v=0",
    thumbnail:
      "//im8health.com/cdn/shop/files/preview_images/4a3a9f0122d24d6988bbf5b9ed6a38bb.thumbnail.0000000000.jpg?v=1733712779",
    quote:
      "As a professional freediver, I’m extremely careful with what I put into my body. With IM8, I know I'm fueling my body with only the best, helping me stay resilient both in and out of the water.",
  },
  {
    id: 5,
    username: "@dustinpoirier",
    followers: "5.3M",
    avatar:
      "https://im8health.com/cdn/shop/files/dustinpoirier.jpg?v=1731307218&width=1296",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/a7917aeeef894fc7af8d86db3acafef5/a7917aeeef894fc7af8d86db3acafef5.SD-480p-0.9Mbps-39412856.mp4?v=0",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/a7917aeeef894fc7af8d86db3acafef5.thumbnail.0000000000.jpg?v=1733711989",
    quote:
      "As a fighter, I’ve tried it all—endless pills and powders just to keep up. But after my team checked out the science, partnering with IM8 was a no-brainer. Now, I have all the nutrition I need in one powerful formula for training, recovery, and staying sharp.",
  },
  {
    id: 6,
    username: "@timbiohacker",
    followers: "484K",
    avatar:
      "https://im8health.com/cdn/shop/files/timbiohacker.jpg?v=1731306875&width=1296",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/90135e85a8eb49659fc3e2cbb43896e5/90135e85a8eb49659fc3e2cbb43896e5.SD-480p-0.9Mbps-39413342.mp4?v=0",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/90135e85a8eb49659fc3e2cbb43896e5.thumbnail.0000000000.jpg?v=1733712963",
    quote:
      "I’m all about calling out products that fall short of their claims. IM8, though, delivers exactly what it promises—pure, effective ingredients, third-party tested, and backed by clinical trials. It fuels focus, energy, and resilience, with zero compromises.",
  },
  {
    id: 7,
    username: "@dance10fikshun",
    followers: "2.6M",
    avatar:
      "https://im8health.com/cdn/shop/files/dance10fikshun.jpg?v=1731307005&width=1080",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/4d801fb0e5524d5a9c43dc987966df6a/4d801fb0e5524d5a9c43dc987966df6a.SD-480p-0.9Mbps-39413304.mp4?v=0",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/4d801fb0e5524d5a9c43dc987966df6a.thumbnail.0000000000.jpg?v=1733712831",
    quote:
      "My life is all about movement, balance, and expression. IM8 keeps me energized and feeling great, allowing me to bring my best to every performance.",
  },
  {
    id: 8,
    username: "@davidnursenba",
    followers: "162K",
    avatar:
      "https://im8health.com/cdn/shop/files/influ-carou_davidnurse.png?v=1731575099",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/01fc5e8bd9934532b9120f5277539ccc/01fc5e8bd9934532b9120f5277539ccc.SD-480p-0.9Mbps-39412912.mp4?v=0",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/01fc5e8bd9934532b9120f5277539ccc.thumbnail.0000000000.jpg?v=1733712123",
    quote:
      "As a performance coach, I’m always seeking ways to stay sharp and energized. IM8 is hands down the best all-in-one supplement. It tastes amazing, and my wife and I take it daily—it’s a game-changer.",
  },
  {
    id: 9,
    username: "@thejosephabell",
    followers: "2M",
    avatar:
      "https://im8health.com/cdn/shop/files/Joseph_Abell_10732562-f935-4c47-b403-7f9e062cd921.png?v=1731574411",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/cb2b8daf5bbe45299c834c593e147522/cb2b8daf5bbe45299c834c593e147522.SD-480p-0.9Mbps-39412954.mp4?v=0",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/cb2b8daf5bbe45299c834c593e147522.thumbnail.0000000000.jpg?v=1733712233",
    quote:
      "Nutrition should be as exciting as it is nourishing. IM8 redefines nutrition for me, making health delicious and effective, whether in the kitchen or in my daily routine.",
  },
];

export default function AmbassadorsSection() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationRef = useRef();

  const onMouseDown = (e) => {
    isDragging.current = true;
    containerRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX;
    scrollLeft.current = containerRef.current.scrollLeft;
    // Pause auto-scroll when dragging
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
    containerRef.current.classList.remove("cursor-grabbing");
    // Resume auto-scroll after drag
    autoScroll();
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    containerRef.current.classList.remove("cursor-grabbing");
    // Resume auto-scroll after leaving
    autoScroll();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX.current) * 1.2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const autoScroll = () => {
    if (!containerRef.current || isDragging.current) return;
    
    const container = containerRef.current;
    const scrollStep = 0.5; // pixels per frame - slower speed
    
    container.scrollLeft += scrollStep;
    
    // Reset to beginning when reaching end
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
    
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  useEffect(() => {
    const videos = containerRef.current.querySelectorAll("video");
    videos.forEach((video) => {
      video.play().catch(() => {});
    });

    // Start auto-scroll
    autoScroll();

    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#FDE7B6] to-[#F9D88A] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 text-red-700 mb-3">
            <span className="tracking-widest text-xs font-semibold">★★★★★</span>
            <span className="uppercase text-xs font-semibold">
              Feel the difference
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-serif text-[#7A0000]">
            What Our IM8 Ambassadors Are Saying
          </h2>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto px-6 scrollbar-hide cursor-grab select-none"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
        >
          {Array.from({ length: 2 }).map((_, index) =>
            AMBASSADORS.map((item) => (
            <AmbassadorCard key={`${item.id}-${index}`} data={item} />
          )))}
        </div>
      </div>
    </section>
  );
}

function AmbassadorCard({ data }) {
  return (
    <div className="bg-white rounded-2xl p-4 w-[280px] sm:w-[300px] flex-shrink-0 pointer-events-none">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={data.avatar}
          alt={data.username}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="text-sm font-semibold text-[#7A0000]">
          {data.username} <span className="opacity-60">({data.followers})</span>
        </div>
      </div>

      {/* Video */}
      <div className="rounded-xl overflow-hidden mb-4 aspect-[3/4] bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={data.thumbnail}
          className="w-full h-full object-cover"
        >
          <source src={data.video} type="video/mp4" />
        </video>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-red-600 text-sm">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-[#7A0000] leading-relaxed text-left">
        {data.quote}
      </p>
    </div>
  );
}
