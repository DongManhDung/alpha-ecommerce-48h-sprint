export default function HowToEnjoy() {
  const steps = [
    {
      step: "Step 1",
      title: "Scoop out one serving of Daily Ultimate Essentials",
      image:
        "https://im8health.com/cdn/shop/files/preview_images/ce78e2bd331f47f79ac745c7ae51f01f.thumbnail.0000000000.jpg?v=1730081912",
      video:
        "https://im8health.com/cdn/shop/videos/c/vp/ce78e2bd331f47f79ac745c7ae51f01f/ce78e2bd331f47f79ac745c7ae51f01f.SD-480p-1.2Mbps-37195721.mp4",
    },
    {
      step: "Step 2",
      title: "Add 8 to 12oz of Water or Your Favorite Smoothie",
      image:
        "https://im8health.com/cdn/shop/files/preview_images/c204aec03aad4763993ff1eda15f0501.thumbnail.0000000000.jpg?v=1730081950",
      video:
        "https://im8health.com/cdn/shop/videos/c/vp/c204aec03aad4763993ff1eda15f0501/c204aec03aad4763993ff1eda15f0501.SD-480p-1.2Mbps-37195734.mp4",
    },
    {
      step: "Step 3",
      title: "Stir Well and Enjoy Daily",
      image:
        "https://im8health.com/cdn/shop/files/preview_images/1f885d4f9245483d97e7efcfffb8a6be.thumbnail.0000000000.jpg?v=1729902934",
      video:
        "https://im8health.com/cdn/shop/videos/c/vp/1f885d4f9245483d97e7efcfffb8a6be/1f885d4f9245483d97e7efcfffb8a6be.SD-480p-1.2Mbps-37107501.mp4",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-serif text-[#7A0000] mb-12">
        How to Enjoy
      </h2>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div key={index}>
            {/* Media */}
            <div className="relative rounded-2xl overflow-hidden">
              <video
                src={item.video}
                poster={item.image}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <p className="mt-4 text-left text-sm md:text-base text-[#7A0000] font-medium">
              <span className="block">{item.step}: {item.title}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
