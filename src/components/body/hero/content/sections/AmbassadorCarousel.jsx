import { useState, useRef } from "react";
import MediaModal from "./MediaModal";

export default function AmbassadorCarousel() {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);
  const [modalType, setModalType] = useState("video");

  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    // Reset isDragging sau một chút để không ảnh hưởng đến click
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const distance = Math.abs(x - startX);

    // Chỉ bắt đầu drag khi di chuyển ít nhất 5px
    if (distance > 5) {
      setIsDragging(true);
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleImageClick = (videoUrl) => (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    setModalType("video");
    setModalSrc(videoUrl);
    setModalOpen(true);
  };

  const ambassadors = [
    {
      thumb:
        "https://im8health.com/cdn/shop/files/preview_images/thm-expert_robinB2.jpg?v=1731999065",
      video:
        "https://im8health.com/cdn/shop/videos/c/vp/12eb3b01fd54404d81ef22a20d415f15/12eb3b01fd54404d81ef22a20d415f15.HD-1080p-2.5Mbps-38313438.mp4",
    },
    {
      thumb:
        "https://im8health.com/cdn/shop/files/preview_images/influe-carou_bobbyRich2.jpg?v=1731863977",
      video:
        "https://im8health.com/cdn/shop/videos/c/vp/e83246a2555949139036fce9bc1359a2/e83246a2555949139036fce9bc1359a2.HD-1080p-3.3Mbps-38232086.mp4",
    },
    {
      thumb:
        "https://im8health.com/cdn/shop/files/preview_images/thm-expert_amyShah2.jpg?v=1731864964",
      video:
        "https://im8health.com/cdn/shop/videos/c/vp/f7f68153342f4566ad00f411e2fb407b/f7f68153342f4566ad00f411e2fb407b.HD-1080p-7.2Mbps-38222859.mp4",
    },
    {
      thumb:
        "https://im8health.com/cdn/shop/files/preview_images/thm-influ_dustinPoirier.jpg?v=1731833492",
      video:
        "https://im8health.com/cdn/shop/videos/c/vp/064b8beaa0b04a4fad25676155936d3a/064b8beaa0b04a4fad25676155936d3a.HD-1080p-2.5Mbps-38221672.mp4",
    },
    {
      thumb:
        "https://im8health.com/cdn/shop/files/preview_images/image_54.png?v=1731863088",
      video:
        "https://im8health.com/cdn/shop/videos/c/vp/809d17a1684d40058d499ecd9afe9e21/809d17a1684d40058d499ecd9afe9e21.HD-1080p-4.8Mbps-38222820.mp4",
    },
    {
      thumb:
        "https://im8health.com/cdn/shop/files/preview_images/1f4b2af008104c92a29f9d78814f1aa0.thumbnail.0000000000.jpg?v=1731860287",
      video:
        "https://im8health.com/cdn/shop/videos/c/vp/1f4b2af008104c92a29f9d78814f1aa0/1f4b2af008104c92a29f9d78814f1aa0.HD-1080p-3.3Mbps-38232121.mp4",
    },
  ];

  return (
    <div className="mt-5">
      <h3 className="mb-4 text-lg font-semibold text-[#50000b] text-left">
        What our IM8 Ambassadors are saying
      </h3>

      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto pb-2 scrollbar-hide select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {ambassadors.map((item, idx) => (
          <div
            key={idx}
            className={`relative min-w-[140px] overflow-hidden rounded-xl cursor-pointer ${
              isDragging ? "pointer-events-none" : ""
            }`}
            onClick={handleImageClick(item.video)}
          >
            <img
              src={item.thumb}
              alt=""
              className={`h-[240px] w-full object-cover ${
                isDragging ? "pointer-events-none select-none" : ""
              }`}
              draggable={false}
            />

            {/* Play Button */}
            <div className="absolute bottom-3 right-3">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="#50000B" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MediaModal
        open={modalOpen}
        type={modalType}
        src={modalSrc}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
