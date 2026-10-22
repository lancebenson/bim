import React from 'react';
import { X, Clock, Users, MapPin, Calendar, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Currency, Expedition, Locale } from '../types/safari';
import { CURRENCY_RATES } from '../data/safariData';

interface ExpeditionDetailModalProps {
  expedition: Expedition | null;
  currentCurrency: Currency;
  currentLocale: Locale;
  onClose: () => void;
  onBookExpedition: (expedition: Expedition) => void;
}

export const ExpeditionDetailModal: React.FC<ExpeditionDetailModalProps> = ({
  expedition,
  currentCurrency,
  currentLocale,
  onClose,
  onBookExpedition,
}) => {
  if (!expedition) return null;

  const rate = CURRENCY_RATES[currentCurrency];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#121512] border border-[#2b3329] rounded-xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 bg-[#121512]/95 backdrop-blur-md px-6 py-4 border-b border-[#242c22] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4973b] uppercase">
            <MapPin className="w-4 h-4" />
            <span>{expedition.countries.join(' & ')} · {expedition.comfortTier}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#918c80] hover:text-[#f5f2eb] rounded hover:bg-[#20251e] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Header Banner */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8c9488] mb-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#d4973b]" />
                <span>{expedition.durationDays} Days / {expedition.durationNights} Nights</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#d4973b]" />
                <span>Max {expedition.maxGroupSize} Guests</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Best: {expedition.bestMonths.join(', ')}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#fbf8f2] mb-3">
              {currentLocale === 'vi' ? expedition.titleVi : expedition.title}
            </h2>
            <p className="text-sm sm:text-base text-[#ada797] leading-relaxed">
              {currentLocale === 'vi' ? expedition.taglineVi : expedition.tagline}
            </p>
          </div>

          {/* Gallery image */}
          <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden border border-[#2b3329]">
            <img
              src={expedition.featuredImage}
              alt={expedition.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-mono text-[#f5f2eb]">
              <span>Landscape: {expedition.landscapeType}</span>
              <span className="text-[#d4973b] text-base font-bold">
                {rate.format(expedition.priceUSD)} per person
              </span>
            </div>
          </div>

          {/* What is Included */}
          <div className="bg-[#161a16] border border-[#262f24] rounded-lg p-5">
            <div className="text-xs font-mono text-[#d4973b] uppercase tracking-wider mb-3">
              EXPEDITION PRIVILEGES & INCLUSIONS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#cfcac0]">
              {expedition.includedExperiences.map((inc, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#d4973b] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day by Day Detailed Accordion / Timeline */}
          <div>
            <div className="text-xs font-mono text-[#d4973b] uppercase tracking-widest mb-4">
              DAY-BY-DAY CURATED ITINERARY
            </div>
            <div className="space-y-4">
              {expedition.dailyItinerary.map((dayItem) => (
                <div
                  key={dayItem.day}
                  className="bg-[#161916] border border-[#242b23] rounded-lg p-5 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#d4973b] font-bold">
                      DAY 0{dayItem.day}
                    </span>
                    <span className="text-[11px] font-mono text-[#8c9488]">
                      Lodge: <strong className="text-[#ede8dc]">{dayItem.lodge}</strong>
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-normal text-[#fbf8f2] mb-2">
                    {currentLocale === 'vi' ? dayItem.titleVi : dayItem.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#ada797] leading-relaxed mb-4">
                    {currentLocale === 'vi' ? dayItem.descriptionVi : dayItem.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#20261f] text-[11px] font-mono text-[#7d8679]">
                    <div>
                      <span>Meals: </span>
                      <span className="text-[#d8d3c5]">{dayItem.meals}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dayItem.activities.map((act, aIdx) => (
                        <span key={aIdx} className="px-2 py-0.5 bg-[#0e100e] border border-[#222920] rounded text-[#b3ac9b]">
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Sticky Footer */}
        <div className="sticky bottom-0 bg-[#121512]/95 backdrop-blur-md px-6 py-4 border-t border-[#242c22] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-[#8c9488] block">Starting from</span>
            <span className="font-mono text-2xl font-bold text-[#fbf8f2]">
              {rate.format(expedition.priceUSD)}
            </span>
            <span className="text-[10px] text-[#8c9488] ml-1 uppercase">{currentCurrency} / person sharing</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs text-[#b8b3a5] hover:text-[#fbf8f2] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookExpedition(expedition);
              }}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] rounded flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>{currentLocale === 'vi' ? 'Tùy Chỉnh Chuyến Đi Này' : 'Customize This Expedition'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
