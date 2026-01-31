import { useRef, useState, useEffect } from "react";
import MediaModal from "../content/sections/MediaModal";

export default function HeroImage({ selectedFormat = "jar" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const thumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const previousFormatRef = useRef(selectedFormat);

  // Handle format changes without direct setState in useEffect
  useEffect(() => {
    if (previousFormatRef.current !== selectedFormat) {
      // Reset to first image when format changes
      if (activeIndex !== 0) {
        setActiveIndex(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
      
      // Add flashing effect when format changes
      setIsFlashing(true);
      const timer = setTimeout(() => {
        setIsFlashing(false);
      }, 300);

      previousFormatRef.current = selectedFormat;
      return () => clearTimeout(timer);
    }
  }, [selectedFormat, activeIndex]);

  // Define first image based on selected format
  const getFirstImage = () => {
    if (selectedFormat === "sachet") {
      return "https://im8health.com/cdn/shop/files/PDP_07c659fc-2e80-4d58-a136-6d06961f00aa.jpg?v=1766566325&width=1946";
    }
    return "https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg?v=1766566335&width=823";
  };

  const HERO_IMAGES = [
    getFirstImage(),
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel02.jpg?v=1761042620&width=416",
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel03.jpg?v=1761040602&width=416",
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel04.jpg?v=1761040602&width=324",
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel05.jpg?v=1761040601&width=416",
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel06.jpg?v=1761040602&width=324",
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel07.jpg?v=1761040602&width=416",
    "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel02.jpg?v=1761040602&width=324",
    "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel03.jpg?v=1761040601&width=416",
    "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel04.jpg?v=1761040602&width=324",
    "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel05.jpg?v=1761040602&width=324",
    "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel06.jpg?v=1761040602&width=416",
    "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel07.jpg?v=1761040602&width=416"
  ];

  const scrollThumbs = (direction) => {
    if (!thumbRef.current) return;

    thumbRef.current.scrollBy({
      top: direction === "up" ? -120 : 120,
      behavior: "smooth",
    });
  };

  // Handle drag functionality for main image on mobile
  const handleStart = (clientX, clientY) => {
    setIsDragging(true);
    setStartX(clientX);
    setStartY(clientY);
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return;

    const deltaX = clientX - startX;
    const deltaY = clientY - startY;
    
    // Only process horizontal swipe if it's more significant than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0 && activeIndex > 0) {
        // Swipe right - previous image
        setActiveIndex(prev => prev - 1);
        setIsDragging(false);
      } else if (deltaX < 0 && activeIndex < HERO_IMAGES.length - 1) {
        // Swipe left - next image  
        setActiveIndex(prev => prev + 1);
        setIsDragging(false);
      }
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleImageClick = () => {
    // Chỉ mở modal nếu không phải là drag action
    if (!isDragging) {
      setIsModalOpen(true);
    }
  };

  // Touch events
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-5">
      {/* ========= MAIN IMAGE ========= */}
      <div className="order-2 flex-1 lg:order-2">
        <div 
          className={`aspect-square w-full overflow-hidden rounded-2xl bg-[#f6e3d6] lg:aspect-[4/5] lg:h-[520px] lg:w-[520px] select-none transition-all duration-300 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab lg:cursor-pointer'
          } ${
            isFlashing ? 'animate-pulse bg-gradient-to-br from-[#f6e3d6] via-white to-[#f6e3d6] shadow-lg' : ''
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEnd}
          onClick={handleImageClick}
        >
          <img
            src={HERO_IMAGES[activeIndex]}
            alt={`Product ${activeIndex + 1}`}
            className={`h-full w-full object-cover pointer-events-none transition-all duration-300 ease-in-out ${
              isFlashing ? 'brightness-110 scale-[1.02]' : ''
            }`}
            draggable={false}
          />
        </div>
      </div>

      {/* ========= THUMBNAILS - DESKTOP ========= */}
      <div className="hidden lg:flex h-[520px] flex-col items-center justify-between order-1">
        {/* Up button */}
        <button
          onClick={() => scrollThumbs("up")}
          className="rounded-full px-2 py-1"
        >
          ^
        </button>

        {/* Thumbnails list */}
        <div
          ref={thumbRef}
          className="flex max-h-[520px] w-[88px] flex-col gap-3 overflow-hidden"
        >
          {HERO_IMAGES.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                rounded-xl bg-[#f6e3d6] p-1 border transition-all
                ${
                  activeIndex === idx
                    ? "border-[#8b0000]"
                    : "border-transparent hover:border-[#c9a3a3]"
                }
              `}
            >
              <img
                src={img}
                alt=""
                className="h-[72px] w-full rounded-lg object-cover"
              />
            </button>
          ))}
        </div>

        {/* Down button */}
        <button
          onClick={() => scrollThumbs("down")}
          className="rounded-full px-2 py-1 rotate-180"
        >
          ^
        </button>
      </div>

      {/* ========= THUMBNAILS - MOBILE ========= */}
      <div className="order-3 mt-4 lg:hidden">
        {/* Horizontal thumbnail scroll */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {HERO_IMAGES.slice(0, 6).map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                flex-shrink-0 rounded-lg bg-[#f6e3d6] p-1 border transition-all duration-200
                ${
                  activeIndex === idx
                    ? "border-[#8b0000] scale-105"
                    : "border-transparent hover:border-[#c9a3a3]"
                }
              `}
            >
              <img
                src={img}
                alt=""
                className="h-[60px] w-[60px] rounded-md object-cover"
              />
            </button>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-3">
          {HERO_IMAGES.slice(0, 6).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                h-2 w-2 rounded-full transition-all duration-200
                ${activeIndex === idx ? "bg-[#8b0000] scale-125" : "bg-gray-300 hover:bg-gray-400"}
              `}
            />
          ))}
        </div>
      </div>

      {/* MediaModal for image preview */}
      <MediaModal 
        open={isModalOpen}
        type="image"
        src={HERO_IMAGES[activeIndex]}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
