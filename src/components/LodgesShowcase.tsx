import React, { useState } from 'react';
import { Sparkles, MapPin, Droplets, SunMedium, Compass, Check } from 'lucide-react';
import { Locale, Lodge } from '../types/safari';
import { LODGES, SAFARI_IMAGES } from '../data/safariData';

interface LodgesShowcaseProps {
  currentLocale: Locale;
  onSelectLodgeBooking: (lodgeName: string) => void;
}

export const LodgesShowcase: React.FC<LodgesShowcaseProps> = ({ currentLocale, onSelectLodgeBooking }) => {
  const [selectedLodgeId, setSelectedLodgeId] = useState<string>(LODGES[0].id);

  const activeLodge = LODGES.find((l) => l.id === selectedLodgeId) || LODGES[0];

  return (
    <section id="lodges" className="py-20 bg-[#0f110f] border-b border-[#222622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono tracking-widest uppercase text-[#d4973b] mb-2">
            EXCLUSIVE RETREATS & CAMPS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] text-balance">
            {currentLocale === 'vi' ? 'Khu Nghỉ Dưỡng Sinh Thái & Lều Thảo Nguyên' : 'Sanctuaries in the Wild'}
          </h2>
          <p className="text-[#a5a092] text-sm sm:text-base mt-2">
            {currentLocale === 'vi'
              ? 'Tối đa 10 phòng suite tại mỗi khu bảo tồn nhằm đảm bảo sự riêng tư tuyệt đối, tĩnh lặng và mức độ ảnh hưởng môi trường gần như bằng không.'
              : 'Intentionally limited to under 10 suites per sanctuary to guarantee profound solitude, zero crowd disruption, and absolute ecological integrity.'}
          </p>
        </div>

        {/* Sanctuary Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {LODGES.map((lodge) => {
            const isSelected = lodge.id === selectedLodgeId;
            return (
              <button
                key={lodge.id}
                onClick={() => setSelectedLodgeId(lodge.id)}
                className={`p-5 rounded-lg border text-left transition-all ${
                  isSelected
                    ? 'bg-[#181d17] border-[#d4973b] shadow-lg'
                    : 'bg-[#131613] border-[#242b23] hover:border-[#384336]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#8c9488] mb-1">
                  <span>{lodge.country}</span>
                  <span className="text-[#d4973b]">{lodge.suiteCount} Suites Only</span>
                </div>
                <div className="font-serif text-xl font-normal text-[#fbf8f2] mb-1">{lodge.name}</div>
                <div className="text-xs text-[#a39e8f] line-clamp-1">{lodge.location}</div>
              </button>
            );
          })}
        </div>

        {/* Active Sanctuary Detailed Showcase (2-Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#141714] border border-[#242b23] rounded-xl overflow-hidden p-6 sm:p-8">
          
          {/* Left Column: Image showcase with twilight terrace */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-lg overflow-hidden border border-[#2e372c]">
              <img
                src={activeLodge.image}
                alt={activeLodge.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#f5f2eb]">
                <div className="flex items-center gap-1.5 font-mono text-[#d4973b]">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{activeLodge.coordinates}</span>
                </div>
                <div className="font-mono text-[11px] text-[#b3ac9b]">
                  Solar Powered & Off-Grid
                </div>
              </div>
            </div>

            {/* Lodge Highlights Pills removed -> unboxed inline */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#d6d2c4] pt-4 border-t border-[#232922]">
              {activeLodge.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Sparkles className="w-3 h-3 text-[#d4973b] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Eco-commitments */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4973b] mb-2 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeLodge.location}</span>
              </div>
              <h3 className="font-serif text-3xl font-normal text-[#fbf8f2] mb-4">
                {activeLodge.name}
              </h3>
              <p className="text-sm sm:text-base text-[#ada797] leading-relaxed mb-6">
                {currentLocale === 'vi' ? activeLodge.descriptionVi : activeLodge.description}
              </p>

              {/* Eco Features */}
              <div className="bg-[#111311] border border-[#212720] rounded-lg p-5 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#8c9488] mb-3 flex items-center gap-2">
                  <SunMedium className="w-3.5 h-3.5 text-[#d4973b]" />
                  <span>Sustainable Eco-Design Credentials</span>
                </div>
                <div className="space-y-2 text-xs text-[#c4bfae]">
                  {activeLodge.ecoFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#d4973b] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Action */}
            <div className="pt-4 border-t border-[#212720] flex items-center justify-between">
              <span className="text-xs text-[#8c9488]">
                {currentLocale === 'vi' ? 'Bao gồm trọn gói dịch vụ lữ hành' : 'All-inclusive wilderness board'}
              </span>
              <button
                onClick={() => onSelectLodgeBooking(activeLodge.name)}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] rounded transition-colors whitespace-nowrap shadow-sm"
              >
                {currentLocale === 'vi' ? 'Đặt Chỗ Khu Lều Này' : 'Request Lodge Stay'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
