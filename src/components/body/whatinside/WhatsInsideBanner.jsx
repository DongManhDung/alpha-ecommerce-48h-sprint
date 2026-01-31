export default function WhatsInsideBanner() {
  return (
    <section className="w-full">
      <picture>
        {/* Mobile */}
        <source
          media="(max-width: 768px)"
          srcSet="https://im8health.com/cdn/shop/files/mobile_insidebanner_yes-sub_essential-std_62c2a9d0-2a1a-4f43-b4e0-3a74c2af0b46.jpg?v=1760348442&width=2048"
        />

        {/* Desktop */}
        <img
          src="https://im8health.com/cdn/shop/files/desktop_insidebanner_yes-sub_essential-std_f8477d9e-55d0-4e10-9af1-0ac759a41216.jpg?v=1760348439&width=2048"
          alt="What's Inside"
          className="w-full h-auto object-cover"
        />
      </picture>
    </section>
  );
}
