import React from 'react';
import { ArrowRight, Compass, Shield, Sun, Eye, MapPin } from 'lucide-react';
import { Locale } from '../types/safari';
import { SAFARI_IMAGES } from '../data/safariData';

interface HeroProps {
  currentLocale: Locale;
  onExploreExpeditions: () => void;
  onOpenPlanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLocale, onExploreExpeditions, onOpenPlanner }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c0d0c] pt-4 pb-12 lg:pt-8 lg:pb-16 border-b border-[#222622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              {/* Quiet kicker */}
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-mono text-[#d4973b] mb-4">
                <span>EST. ARUSHA & NAIROBI</span>
                <span aria-hidden="true">·</span>
                <span>PRIVATE WILDERNESS EXPEDITIONS</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#fbf8f2] mb-6 text-balance">
                {currentLocale === 'vi' ? (
                  <>
                    Vẻ Đẹp Hoang Dã <span className="italic text-[#d4973b]">Chân Thực Nhất</span> Của Lục Địa Đen.
                  </>
                ) : (
                  <>
                    The Untamed Soul of Africa, <span className="italic text-[#d4973b]">Crafted Exclusively</span> For You.
                  </>
                )}
              </h1>

              {/* Body Prose */}
              <p className="text-[#b4af9f] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                {currentLocale === 'vi'
                  ? 'Bimau Safari mang đến những chuyến hành trình thám hiểm thảo nguyên biệt lập khắp Serengeti, Maasai Mara và châu thổ Okavango. Đồng hành cùng các chuyên gia theo dấu thú bản địa Maasai trong những khu lều sinh thái sang trọng bậc nhất.'
                  : 'Bimau Safari orchestrates private, tailor-made wildlife expeditions through the Serengeti, Maasai Mara, and Okavango Delta. Accompanied by generational indigenous trackers in low-impact luxury eco-lodges.'}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <button
                  onClick={onExploreExpeditions}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] transition-colors rounded flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
                >
                  <span>{currentLocale === 'vi' ? 'Xem Các Hành Trình 2026/2027' : 'Explore Expeditions'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenPlanner}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#ede8dc] bg-[#1a1e19] hover:bg-[#252b24] border border-[#343c33] transition-colors rounded flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Compass className="w-4 h-4 text-[#d4973b]" />
                  <span>{currentLocale === 'vi' ? 'Lập Kế Hoạch Chuyến Đi' : 'Custom Safari Builder'}</span>
                </button>
              </div>
            </div>

            {/* Trust and ethical pedigree */}
            <div className="pt-6 border-t border-[#222622] flex items-center justify-between text-xs text-[#8c9488]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#d4973b]" />
                <span>100% Carbon-Neutral Travel</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#d4973b]" />
                <span>Private 4x4 & Uncrowded Concessions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dominant 16:9 Marquee Visual Asset */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[360px] sm:h-[460px] lg:h-full min-h-[440px] rounded-lg overflow-hidden border border-[#2b312a] bg-[#131613]">
              <img
                src={SAFARI_IMAGES.hero}
                alt="Serengeti golden hour safari showing lion pride on rocks and custom expedition 4x4"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              {/* Subtle filmic vignette scrim for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-xs text-[#f5f2eb]">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[#d4973b] tracking-wider uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Kogatende, North Serengeti</span>
                  </div>
                  <p className="font-serif text-lg italic text-[#e7e3d8]">
                    {currentLocale === 'vi'
                      ? 'Đàn sư tử sưởi nắng hoàng hôn trên mỏm đá granite trước giờ săn'
                      : 'Pride resting on kopjes at twilight before the twilight river crossing'}
                  </p>
                </div>
                <div className="hidden sm:block text-right font-mono text-[11px] text-[#b0a999]">
                  <div>LAT 1° 34&apos; S</div>
                  <div>ELEVATION 1,480M</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Live Ranger Dispatch & Ecosystem Indicators Strip below the split */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#222622]">
          <div className="p-4 bg-[#141714] border border-[#232822] rounded">
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#8c9688] mb-1 flex items-center justify-between">
              <span>Ranger Dispatch</span>
              <span className="text-[#d4973b]">Serengeti</span>
            </div>
            <div className="font-serif text-xl font-normal text-[#f5f2eb]">Mara River Crossings</div>
            <p className="text-xs text-[#a39e8f] mt-1">High herd concentration at Crossing #4 and #7; active croc ambushes.</p>
          </div>

          <div className="p-4 bg-[#141714] border border-[#232822] rounded">
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#8c9688] mb-1 flex items-center justify-between">
              <span>Wildlife Census</span>
              <span className="text-[#d4973b]">Ndutu Plains</span>
            </div>
            <div className="font-serif text-xl font-normal text-[#f5f2eb]">1.8M Herbivores</div>
            <p className="text-xs text-[#a39e8f] mt-1">Massive calving synchronization under way with peak cheetah activity.</p>
          </div>

          <div className="p-4 bg-[#141714] border border-[#232822] rounded">
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#8c9688] mb-1 flex items-center justify-between">
              <span>Conservation</span>
              <span className="text-[#d4973b]">Ngorongoro</span>
            </div>
            <div className="font-serif text-xl font-normal text-[#f5f2eb]">Black Rhino Sighted</div>
            <p className="text-xs text-[#a39e8f] mt-1">Caldera floor patrol confirms 3 mothers with healthy calves at Lake Magadi.</p>
          </div>

          <div className="p-4 bg-[#141714] border border-[#232822] rounded">
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#8c9688] mb-1 flex items-center justify-between">
              <span>Weather Index</span>
              <span className="text-[#d4973b]">Savannah</span>
            </div>
            <div className="font-serif text-xl font-normal text-[#f5f2eb]">27°C / Dawn 12°C</div>
            <p className="text-xs text-[#a39e8f] mt-1">Clear starlit nights, gentle southeast breeze, optimal dawn ballooning.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
