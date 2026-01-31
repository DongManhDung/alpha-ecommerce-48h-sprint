import { useState, useEffect, useRef } from 'react';

export default function StickyPromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const clinicalResultsRef = useRef(null);
  const lastScrollY = useRef(0);
  const bannerTriggered = useRef(false);

  useEffect(() => {
    // Add CSS for banner offset
    const style = document.createElement('style');
    style.id = 'sticky-banner-styles';
    style.textContent = `
      .has-sticky-banner .lg\\:sticky {
        top: calc(2rem + 56px) !important;
      }
      .has-sticky-banner section {
        padding-top: 56px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById('sticky-banner-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  useEffect(() => {
    // Find Clinical Results section in the DOM with more specific targeting
    const findClinicalResults = () => {
      // Look for Clinical Results component by searching for specific text pattern
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      let node;
      while (node = walker.nextNode()) { // eslint-disable-line no-cond-assign
        if (node.textContent.includes('Clinically Proven Results')) {
          let parent = node.parentElement;
          // Traverse up to find the main container
          while (parent && !parent.className.includes('rounded-2xl') && parent.tagName !== 'SECTION') {
            parent = parent.parentElement;
            if (parent === document.body) break;
          }
          return parent;
        }
      }
      return null;
    };

    const handleScroll = () => {
      if (!clinicalResultsRef.current) {
        clinicalResultsRef.current = findClinicalResults();
      }

      if (clinicalResultsRef.current) {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
        const rect = clinicalResultsRef.current.getBoundingClientRect();
        
        // Show banner when Clinical Results first touches the top
        if (rect.top <= 0 && !bannerTriggered.current) {
          bannerTriggered.current = true;
          setIsVisible(true);
          // Add class to trigger CSS offset
          document.body.classList.add('has-sticky-banner');
        }
        
        // Hide banner only when scrolling UP and Clinical Results is back above viewport
        if (scrollDirection === 'up' && rect.top > 0 && bannerTriggered.current) {
          bannerTriggered.current = false;
          setIsVisible(false);
          // Remove class to remove CSS offset
          document.body.classList.remove('has-sticky-banner');
        }
        
        lastScrollY.current = currentScrollY;
      }
    };

    // Initial check after a delay to ensure DOM is ready
    const timeoutId = setTimeout(handleScroll, 100);

    // Add scroll listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', throttledScroll);
      // Clean up styles on component unmount
      document.body.classList.remove('has-sticky-banner');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>      
      {/* Spacer to prevent layout jump */}
      <div 
        className="w-full h-8 md:h-10" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: 40,
          pointerEvents: 'none'
        }}
      />
      
      {/* Actual Banner */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 shadow-lg animate-in slide-in-from-top duration-300"
        style={{
          background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #CD5C5C 100%)',
          boxShadow: '0 4px 20px rgba(139, 0, 0, 0.4)'
        }}
      >
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between px-6 py-2 max-w-screen-2xl mx-auto h-14">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="https://im8health.com/cdn/shop/files/Header_White_logo.png?v=1731856481&width=1328"
              alt="IM8 Health"
              className="h-8 w-auto"
            />
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center px-8">
            <span className="text-sm font-semibold text-white tracking-wide">
              2026 STARTS NOW: 35% OFF — Feel Like Yourself Again
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button 
              className="bg-white text-[#8B0000] px-8 py-1.5 rounded-full font-bold text-sm hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 shadow-lg transform hover:scale-105"
              onClick={() => {
                // Scroll to top or handle CTA action
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              GET STARTED
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Center Text */}
            <div className="flex-1">
              <span className="text-sm font-semibold text-white tracking-wide">
                2026 STARTS NOW: 35% OFF — Feel Like Yourself Again
              </span>
            </div>

            {/* CTA Button */}
            <div className="ml-4">
              <button 
                className="bg-white text-[#8B0000] px-6 py-1.5 rounded-full font-bold text-sm hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 shadow-lg whitespace-nowrap"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}