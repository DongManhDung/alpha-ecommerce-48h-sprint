import { useEffect, useState, useRef } from "react";
import HeroImage from "./image/HeroImage";
import HeroContent from "./content/HeroContent";

export default function Hero() {
  const [isSticky, setIsSticky] = useState(true);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current || !imageRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();
      
      // Tính toán khi nào bottom của HeroContent và HeroImage song song
      // Khi HeroContent bottom <= HeroImage bottom + một khoảng dung sai nhỏ
      const contentBottom = contentRect.bottom;
      const imageBottom = imageRect.bottom;
      const tolerance = 50; // Dung sai 50px
      
      const isContentAlignedWithImage = contentBottom <= imageBottom + tolerance;
      
      // Nếu Hero section đã scroll hết khỏi viewport
      const heroFullyScrolled = heroRect.bottom <= 0;
      
      // Chỉ bỏ sticky khi content đã song song với image hoặc hero đã scroll hết
      setIsSticky(!isContentAlignedWithImage && !heroFullyScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div 
          ref={imageRef}
          className={`transition-all duration-300 ${
            isSticky 
              ? 'lg:sticky lg:top-8 lg:self-start' 
              : 'lg:relative'
          }`}
        >
          <HeroImage />
        </div>
        <div ref={contentRef}>
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
