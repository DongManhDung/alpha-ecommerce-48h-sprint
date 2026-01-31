import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function MediaModal({ open, type, src, onClose }) {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Ngăn scroll khi modal mở
  useEffect(() => {
    if (open) {
      // Lưu scroll position hiện tại
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Disable scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollTop}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Re-enable scroll và restore position
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollTop);
      };
    }
  }, [open]);

  if (!open) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center" style={{ zIndex: 2147483647 }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-[90%] max-w-[420px] max-h-[90vh] rounded-2xl bg-gradient-to-b from-[#f6d2b8] to-[#f29a7c] shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#50000b] bg-[#fff7f2] text-[#50000b] z-10"
        >
          ✕
        </button>

        {/* Media */}
        <div className="relative overflow-hidden rounded-xl bg-black max-h-[calc(90vh-3rem)]">
          {type === "video" ? (
            <>
              <video
                ref={videoRef}
                src={src}
                controls
                autoPlay
                playsInline
                className="w-full h-auto max-h-full object-contain"
              />
              {/* Mute button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white text-lg hover:bg-black/80 transition-colors z-10"
              >
                {isMuted ? '🔇' : '🔊'}
              </button>
            </>
          ) : (
            <img src={src} alt="" className="w-full h-auto max-h-full object-contain" />
          )}
        </div>
      </div>
    </div>
  );

  // Render modal vào document.body thay vì inline
  return createPortal(modalContent, document.body);
}