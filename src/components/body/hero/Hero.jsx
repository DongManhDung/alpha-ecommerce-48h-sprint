import { useEffect, useRef, useState } from "react";
import HeroImage from "./image/HeroImage";
import HeroContent from "./content/HeroContent";

export default function Hero({ selectedFormat, setSelectedFormat }) {
  const [isSticky, setIsSticky] = useState(true);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current || !imageRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      
      // Chỉ bỏ sticky khi toàn bộ Hero section đã scroll ra khỏi viewport, (bottom của hero <= 0) để HeroImage cùng cuộn lên với content
      const heroFullyScrolledOut = heroRect.bottom <= 0;
      
      // Giữ sticky cho đến khi hero container hoàn toàn ra khỏi view. Lúc đó HeroImage sẽ cùng cuộn theo thay vì biến mất
      setIsSticky(!heroFullyScrolledOut);
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
          <HeroImage selectedFormat={selectedFormat} />
        </div>
        <div ref={contentRef}>
          <HeroContent 
            selectedFormat={selectedFormat} 
            setSelectedFormat={setSelectedFormat}
          />
        </div>
      </div>
    </section>
  );
}
