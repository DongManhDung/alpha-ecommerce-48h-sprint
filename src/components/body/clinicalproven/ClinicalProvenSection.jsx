export default function ClinicalProvenSection() {
  return (
    <section className="relative w-full text-white">
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: "url(https://im8health.com/cdn/shop/files/clinical_studies.jpg?v=1724176815)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Desktop Background */}
      <div 
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: "url(https://im8health.com/cdn/shop/files/clinical-studies-min.jpg?v=1724176766&width=1512)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    
      {/* Overlay đỏ đậm */}
      <div className="absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Mobile Layout - Ordered Flow */}
        <div className="flex flex-col md:hidden">
          {/* 1. Title */}
          <h2 className="mb-8 text-4xl leading-tight">
            Clinically Proven.
            <br />
            More Energy.
            <br />A Healthier Gut.<sup>*</sup>
          </h2>

          {/* 2. NSF badge */}
          <div className="mb-6 rounded-xl bg-[#fff3c4] px-6 py-4 text-[#50000b]">
            {/* Top section - NSF */}
            <div className="flex items-center gap-4 mb-3 justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-2xl">
                🏆
              </div>
              <div>
                <p className="text-sm font-semibold">
                  NSF CERTIFIED FOR SPORT
                </p>
                <p className="text-xs">280+ Substances Tested</p>
              </div>
            </div>

            {/* Horizontal divider */}
            <div className="w-full h-px bg-[#50000b]/20 my-3"></div>

            {/* Bottom section - Trusted by */}
            <div className="flex items-center justify-center gap-3">
              <img
                src="https://im8health.com/cdn/shop/files/media_arynasabalenka_2x_1.png?v=1750822572&width=150"
                alt="Aryna Sabalenka"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="text-xs">
                <p className="font-semibold">Trusted by Aryna Sabalenka</p>
                <p>World No. 1 Tennis Player</p>
              </div>
            </div>
          </div>

          {/* 3. Description */}
          <p className="mb-8 text-sm leading-relaxed opacity-90">
            Every ingredient is third-party tested and NSF Certified for
            Sport, ensuring it's free from over 280 banned substances, heavy
            metals and contaminants. Trusted by athletes and sports leagues,
            including WADA, NFL, MLB, NHL and PGA.
          </p>

          {/* 4. Stats */}
          <div className="mb-8">
            <p className="mb-10 text-sm font-semibold opacity-90 text-center">
              Daily Ultimate Essentials
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <p className="text-6xl font-light text-left">95%</p>
                <div className="my-3 h-px w-45 bg-white/60" />
                <p className="text-sm leading-relaxed opacity-90 text-left">
                  Participants felt a noticeable boost in daily energy levels.
                </p>
              </div>

              <div>
                <p className="text-6xl font-light text-left">85%</p>
                <div className="my-3 h-px w-45 bg-white/60" />
                <p className="text-sm leading-relaxed opacity-90 text-left">
                  Felt less bloated and had improved digestion.
                </p>
              </div>

              <div>
                <p className="text-6xl font-light text-left">80%</p>
                <div className="my-3 h-px w-45 bg-white/60" />
                <p className="text-sm leading-relaxed opacity-90 text-left">
                  Participants reported getting better sleep.
                </p>
              </div>

              <div>
                <p className="text-6xl font-light text-left">70%</p>
                <div className="my-3 h-px w-45 bg-white/60" />
                <p className="text-sm leading-relaxed opacity-90 text-left">
                  Participants noticed sharper focus and improved mental
                  clarity.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Buttons */}
          <div className="flex flex-col gap-4">
            <button className="rounded-full bg-[#50000b] px-8 py-3 text-sm font-semibold text-white">
              VIEW THIRD-PARTY TESTING RESULTS
            </button>
            <button className="rounded-full bg-[#f7a1a1] px-8 py-3 text-sm font-semibold text-[#50000b]">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Desktop Layout - Original Grid */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-16">
          {/* LEFT – Stats */}
          <div>
            <p className="mb-10 text-sm font-semibold opacity-90 text-left">
              Daily Ultimate Essentials
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <p className="text-6xl font-light text-left">95%</p>
                <div className="my-3 h-px w-45 bg-white/60" />
                <p className="text-sm leading-relaxed opacity-90 text-left">
                  Participants felt a noticeable boost in daily energy levels.
                </p>
              </div>

              <div>
                <p className="text-6xl font-light text-left">85%</p>
                <div className="my-3 h-px w-45 bg-white/60" />
                <p className="text-sm leading-relaxed opacity-90 text-left">
                  Felt less bloated and had improved digestion.
                </p>
              </div>

              <div>
                <p className="text-6xl font-light text-left">80%</p>
                <div className="my-3 h-px w-45 bg-white/60" />
                <p className="text-sm leading-relaxed opacity-90 text-left">
                  Participants reported getting better sleep.
                </p>
              </div>

              <div>
                <p className="text-6xl font-light text-left">70%</p>
                <div className="my-3 h-px w-45 bg-white/60" />
                <p className="text-sm leading-relaxed opacity-90 text-left">
                  Participants noticed sharper focus and improved mental
                  clarity.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT – Content */}
          <div>
            <h2 className="mb-8 text-4xl leading-tight md:text-5xl">
              Clinically Proven.
              <br />
              More Energy.
              <br />A Healthier Gut.<sup>*</sup>
            </h2>

            {/* NSF badge */}
            <div className="mb-6 flex items-center justify-between rounded-xl bg-[#fff3c4] px-6 py-4 text-[#50000b]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-2xl">
                  🏆
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    NSF CERTIFIED FOR SPORT
                  </p>
                  <p className="text-xs">280+ Substances Tested</p>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="h-12 w-px bg-[#50000b]/20"></div>

              <div className="flex items-center gap-3">
                <div className="text-xs">
                  <p className="font-semibold">Trusted by Aryna Sabalenka</p>
                  <p>World No. 1 Tennis Player</p>
                </div>

                <img
                  src="https://im8health.com/cdn/shop/files/media_arynasabalenka_2x_1.png?v=1750822572&width=150"
                  alt="Aryna Sabalenka"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
            </div>

            <p className="mb-8 max-w-xl text-sm leading-relaxed opacity-90">
              Every ingredient is third-party tested and NSF Certified for
              Sport, ensuring it's free from over 280 banned substances, heavy
              metals and contaminants. Trusted by athletes and sports leagues,
              including WADA, NFL, MLB, NHL and PGA.
            </p>

            <div className="flex flex-col gap-4">
              <button className="rounded-full bg-[#50000b] px-8 py-3 text-sm font-semibold text-white">
                VIEW THIRD-PARTY TESTING RESULTS
              </button>
              <button className="rounded-full bg-[#f7a1a1] px-8 py-3 text-sm font-semibold text-[#50000b]">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-14 text-xs opacity-70 text-left">
          *Results Based on a 12-Week Randomized, Controlled, Clinical Trial
          Conducted by the San Francisco Research Institute. Please Click Here
          for FULL Details of the National Library of Medicine Trial.
        </p>
      </div>
    </section>
  );
}