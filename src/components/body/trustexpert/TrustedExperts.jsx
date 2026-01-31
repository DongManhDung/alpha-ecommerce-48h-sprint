import { useRef, useEffect } from "react";

const items = [
  {
    name: "Dr. James Dinicolantonio",
    title: "Cardiovascular Scientist & Best-Selling \n Author on 12+ Books on Health",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/18ce63f7f6154e888f2a48c2a478e480.thumbnail.0000000000.jpg?v=1731647937",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/18ce63f7f6154e888f2a48c2a478e480/18ce63f7f6154e888f2a48c2a478e480.HD-1080p-7.2Mbps-38131720.mp4",
    avatar: "https://im8health.com/cdn/shop/files/Ellipse_62.png?v=1727768801&width=900",
    username: "@drjamesdinic",
    followers: "3.2M",
  },
  {
    name: "Dr. Amy Shah",
    title: `Double-Board Certified Physician & \n Host of Podcast "Save Yourself"`,
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/ec95f3f8f55f4c1eb679982d43bf091d.thumbnail.0000000000.jpg?v=1731865199",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/ec95f3f8f55f4c1eb679982d43bf091d/ec95f3f8f55f4c1eb679982d43bf091d.HD-1080p-4.8Mbps-38234483.mp4",
    avatar: "https://im8health.com/cdn/shop/files/influencer_drshah_profile.png?v=1730184660",
    username: "@dramyshah",
    followers: "1.4M",
  },
  {
    name: "Mona Sharma",
    title: "Celebrity Nutritionist",
    thumbnail:
      "http://im8health.com/cdn/shop/files/preview_images/936fe1ac73a046a98e1ff7e701676228.thumbnail.0000000000.jpg?v=1731647963",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/936fe1ac73a046a98e1ff7e701676228/936fe1ac73a046a98e1ff7e701676228.HD-1080p-7.2Mbps-38131732.mp4?",
    avatar: "https://im8health.com/cdn/shop/files/bertha_baum.png?v=1730806825",
    username: "@monasharma",
    followers: "183K",
  },
  {
    name: "Elissa Goodman",
    title: "Holistic Nutritionist",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/17fb74b0dd5d46e8ac4d1668b46b2134.thumbnail.0000000000.jpg?v=1731647958",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/17fb74b0dd5d46e8ac4d1668b46b2134/17fb74b0dd5d46e8ac4d1668b46b2134.HD-1080p-7.2Mbps-38131729.mp4",
    avatar: "https://im8health.com/cdn/shop/files/Ellipse_63.png?v=1727768801&width=900",
    username: "@elissagoodman",
    followers: "189K",
  },
  {
    name: "Dr. Bertha Baum",
    title: "Board-Certified Dermatologist",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/db58a8d3630b47a597fb148aba8a1790.thumbnail.0000000000.jpg?v=1731860106",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/db58a8d3630b47a597fb148aba8a1790/db58a8d3630b47a597fb148aba8a1790.HD-1080p-3.3Mbps-38232043.mp4",
    avatar: "https://im8health.com/cdn/shop/files/bertha_baum.png?v=1730806825",
    username: "@drberthabaum",
    followers: "229K",
  },
  {
    name: "Dr. Jennifer Tsai",
    title: "Board-Certified Optometrist & \n Nutrition Specialist",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/9d07478703af48a2903deb8e3fbd5076.thumbnail.0000000000.jpg?v=1731751112",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/9d07478703af48a2903deb8e3fbd5076/9d07478703af48a2903deb8e3fbd5076.HD-1080p-4.8Mbps-38192239.mp4",
    avatar: "https://im8health.com/cdn/shop/files/Jen.png?v=1730806923",
    username: "@drjenandjuice",
    followers: "284K",
  },
  {
    name: "Tim Biohacker",
    title: "UK’s Leading Bio-hacker",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/1cfa80d2973d44619564e370d8fb9a5a.thumbnail.0000000000.jpg?v=1731772919",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/1cfa80d2973d44619564e370d8fb9a5a/1cfa80d2973d44619564e370d8fb9a5a.HD-1080p-7.2Mbps-38201373.mp4",
    avatar: "https://im8health.com/cdn/shop/files/timbiohacker.png?v=1730889002",
    username: "@timbiohacker",
    followers: "484K",
  },
  {
    name: "Dr. Robin Barrett",
    title: "Doctor of Pharmacy & Wellness Coach",
    thumbnail:
      "https://im8health.com/cdn/shop/files/preview_images/0cdc39d7dda145e29a333ee5f43ed507.thumbnail.0000000000.jpg?v=1732006454",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/0cdc39d7dda145e29a333ee5f43ed507/0cdc39d7dda145e29a333ee5f43ed507.HD-1080p-2.5Mbps-38319373.mp4?",
    avatar: "https://im8health.com/cdn/shop/files/Ellipse_64.png?v=1727768801&width=900",
    username: "@dr.robinb",
    followers: "1.4M",
  },
];

export default function TrustedExperts() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    containerRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    containerRef.current.classList.remove("cursor-grabbing");
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    containerRef.current.classList.remove("cursor-grabbing");
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX.current) * 1.2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    const videos = containerRef.current.querySelectorAll("video");
    videos.forEach((video) => {
      video.play().catch(() => {});
    });
  }, []);

  return (
    <section className="bg-[#f7f2ef] py-16">
      <h2 className="text-center text-3xl md:text-4xl font-serif text-[#7b2d2d] mb-10">
        Trusted by Physicians and Nutrition Experts
      </h2>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-6 scrollbar-hide cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[260px] md:w-[320px] flex-shrink-0 pointer-events-none"
          >
            {/* Header container */}
            <div className="bg-[#f3e9e6] px-4 py-3 rounded-t-[20px]">
              <div className="flex items-center gap-2">
                <img
                  src={item.avatar}
                  alt="Avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <div className="text-[#7b2d2d] text-xs font-medium text-left">
                  {item.username} ({item.followers})
                </div>
              </div>
            </div>

            {/* Video container */}
            <div className="relative aspect-[3/4] bg-black">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={item.video}
                poster={item.thumbnail}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
              />
            </div>

            {/* Name and title container with small gap */}
            <div className="mt-2 bg-[#f3e9e6] px-4 py-3 rounded-b-[20px] h-[80px] flex flex-col justify-start text-left">
              <p className="font-semibold text-[#7b2d2d] leading-tight">
                {item.name}
              </p>
              <p className="text-sm text-[#7b2d2d] line-clamp-2 whitespace-pre-line">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
