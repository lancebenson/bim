import React, { useState } from 'react';
import { Clock, Users, ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';
import { Currency, Expedition, Locale } from '../types/safari';
import { CURRENCY_RATES, EXPEDITIONS } from '../data/safariData';

interface ExpeditionExplorerProps {
  currentCurrency: Currency;
  currentLocale: Locale;
  onSelectExpedition: (expedition: Expedition) => void;
  onBookExpedition: (expedition: Expedition) => void;
}

export const ExpeditionExplorer: React.FC<ExpeditionExplorerProps> = ({
  currentCurrency,
  currentLocale,
  onSelectExpedition,
  onBookExpedition,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'migration' | 'big5' | 'water' | 'gorilla'>('all');

  const filteredExpeditions = EXPEDITIONS.filter((item) => {
    if (activeFilter === 'migration') return item.id === 'great-migration-odyssey';
    if (activeFilter === 'big5') return item.id === 'serengeti-ngorongoro-big-five' || item.id === 'great-migration-odyssey';
    if (activeFilter === 'water') return item.id === 'okavango-chobe-water-safari';
    if (activeFilter === 'gorilla') return item.id === 'bwindi-gorilla-volcanoes';
    return true;
  });

  const rate = CURRENCY_RATES[currentCurrency];

  return (
    <section id="expeditions" className="py-20 bg-[#0f110f] border-b border-[#222622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#d4973b] mb-2">
              CURATED JOURNEYS 2026/2027
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] text-balance">
              {currentLocale === 'vi' ? 'Các Hành Trình Thám Hiểm Đặc Sắc' : 'Signature Wildlife Expeditions'}
            </h2>
            <p className="text-[#a5a092] text-sm sm:text-base mt-2 max-w-2xl">
              {currentLocale === 'vi'
                ? 'Mỗi hành trình được may đo tỉ mỉ, kết hợp các chuyến bay rừng riêng, xe địa hình Land Cruiser cải tiến và quyền tiếp cận các khu bảo tồn tư nhân độc quyền.'
                : 'Each expedition is meticulously paced with internal bush flights, private 4x4 Land Cruisers, and private concession permits for untamed exclusivity.'}
            </p>
          </div>

          {/* Filter Bar (Functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#161a16] border border-[#272e26] rounded-md">
            {[
              { id: 'all', label: currentLocale === 'vi' ? 'Tất cả' : 'All Expeditions' },
              { id: 'migration', label: currentLocale === 'vi' ? 'Đại Di Cư' : 'Great Migration' },
              { id: 'big5', label: 'Big Five' },
              { id: 'water', label: currentLocale === 'vi' ? 'Châu thổ Okavango' : 'Okavango Water' },
              { id: 'gorilla', label: currentLocale === 'vi' ? 'Khỉ đột Bwindi' : 'Gorilla Trek' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#d4973b] text-black font-semibold'
                    : 'text-[#9c9789] hover:text-[#fbf8f2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Expedition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredExpeditions.map((exp) => (
            <div
              key={exp.id}
              className="group bg-[#141714] border border-[#242b23] hover:border-[#3d4739] rounded-lg overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Media Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1c221c]">
                <img
                  src={exp.featuredImage}
                  alt={exp.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Region & Comfort unboxed metadata */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#f5f2eb] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                    {exp.countries.join(' & ')}
                  </span>
                  <span className="text-[#d4973b] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-[#d4973b]/30">
                    {exp.comfortTier}
                  </span>
                </div>

                {/* Bottom Card Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 text-xs text-[#d8d3c5] mb-1 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#d4973b]" />
                      <span>{exp.durationDays} Days / {exp.durationNights} Nights</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#d4973b]" />
                      <span>Max {exp.maxGroupSize} Guests</span>
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#fbf8f2] group-hover:text-[#d4973b] transition-colors">
                    {currentLocale === 'vi' ? exp.titleVi : exp.title}
                  </h3>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-[#aba595] leading-relaxed mb-4">
                    {currentLocale === 'vi' ? exp.taglineVi : exp.tagline}
                  </p>

                  {/* Clean unboxed wildlife highlights */}
                  <div className="mb-5 pb-5 border-b border-[#232922]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#798375] mb-2">
                      Key Wildlife Highlights
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#cfcac0]">
                      {exp.wildlifeHighlights.map((wildlife, idx) => (
                        <React.Fragment key={wildlife}>
                          <span>{wildlife}</span>
                          {idx < exp.wildlifeHighlights.length - 1 && (
                            <span className="text-[#555d52]" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Included highlights summary */}
                  <div className="space-y-1.5 mb-6 text-xs text-[#9d9789]">
                    {exp.includedExperiences.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4973b] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="pt-4 border-t border-[#232922] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#878e82] block">From per person sharing</span>
                    <span className="font-mono text-xl font-bold text-[#fbf8f2]">
                      {rate.format(exp.priceUSD)}
                    </span>
                    <span className="text-[10px] text-[#878e82] ml-1 uppercase">{currentCurrency}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectExpedition(exp)}
                      className="px-3.5 py-2 text-xs font-medium text-[#ede8dc] bg-[#1d221c] hover:bg-[#283027] border border-[#343c32] rounded transition-colors whitespace-nowrap"
                    >
                      {currentLocale === 'vi' ? 'Xem Chi Tiết' : 'Day-by-Day Plan'}
                    </button>
                    <button
                      onClick={() => onBookExpedition(exp)}
                      className="p-2 text-black bg-[#d4973b] hover:bg-[#e0a64c] rounded transition-colors"
                      title="Reserve or customize this expedition"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
