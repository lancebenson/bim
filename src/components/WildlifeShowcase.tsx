import React, { useState } from 'react';
import { Camera, Sunrise, Eye, Sparkles, Compass } from 'lucide-react';
import { Locale, WildlifeProfile } from '../types/safari';
import { SAFARI_IMAGES, WILDLIFE_PROFILES } from '../data/safariData';

interface WildlifeShowcaseProps {
  currentLocale: Locale;
  onOpenPlanner: () => void;
}

export const WildlifeShowcase: React.FC<WildlifeShowcaseProps> = ({ currentLocale, onOpenPlanner }) => {
  const [activeAnimalId, setActiveAnimalId] = useState<string>('cheetah');

  const selectedAnimal = WILDLIFE_PROFILES.find((a) => a.id === activeAnimalId) || WILDLIFE_PROFILES[0];

  return (
    <section id="wildlife" className="py-20 bg-[#0c0d0c] border-b border-[#222622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono tracking-widest uppercase text-[#d4973b] mb-2">
            INDIGENOUS FIELD INTELLIGENCE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] text-balance">
            {currentLocale === 'vi' ? 'Sổ Tay Quan Sát Động Vật Hoang Dã' : 'Wildlife & Field Encounters'}
          </h2>
          <p className="text-[#a5a092] text-sm sm:text-base mt-2">
            {currentLocale === 'vi'
              ? 'Mỗi cuộc gặp gỡ nơi hoang dã được dẫn dắt bởi sự thấu hiểu tập tính sinh học của người Maasai, tôn trọng khoảng cách an toàn cho muông thú.'
              : 'Every encounter is governed by deep behavioral ethology and strict non-invasive distance protocols led by native tracker elders.'}
          </p>
        </div>

        {/* 2-Part Grid: Left is Wildlife Profiles / Right is Balloon & Cheetah Imagery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Interactive Animal List & Selected Card */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#131613] border border-[#242b23] rounded-lg p-6 sm:p-8">
            <div>
              {/* Animal Selector Buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {WILDLIFE_PROFILES.map((animal) => {
                  const isSelected = animal.id === activeAnimalId;
                  return (
                    <button
                      key={animal.id}
                      onClick={() => setActiveAnimalId(animal.id)}
                      className={`px-3.5 py-1.5 text-xs rounded font-medium transition-all ${
                        isSelected
                          ? 'bg-[#d4973b] text-black font-semibold'
                          : 'bg-[#1a1f19] text-[#9b9586] hover:text-[#fbf8f2] border border-[#293228]'
                      }`}
                    >
                      <span>{animal.commonName}</span>
                      <span className="opacity-70 ml-1.5 italic font-serif">({animal.swahiliName})</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Animal Detail */}
              <div className="pt-4 border-t border-[#222921]">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#d4973b] italic">{selectedAnimal.scientificName}</span>
                  <span className="text-[#8c9488]">Swahili: <strong className="text-[#f5f2eb]">{selectedAnimal.swahiliName}</strong></span>
                </div>

                <h3 className="font-serif text-3xl font-normal text-[#fbf8f2] mb-3">
                  {selectedAnimal.commonName}
                </h3>

                <p className="text-[#ada797] text-sm sm:text-base leading-relaxed mb-6">
                  {currentLocale === 'vi' ? selectedAnimal.behaviorFactVi : selectedAnimal.behaviorFact}
                </p>

                {/* Sighting likelihood & prime territories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0d0f0d] p-4 rounded border border-[#1f261f]">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#7a8375] mb-1">Likelihood of Sighting</div>
                    <div className="text-sm font-semibold text-[#f5f2eb] flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#d4973b]" />
                      <span>{selectedAnimal.sightingLikelihood}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#7a8375] mb-1">Prime Concessions</div>
                    <div className="text-xs text-[#cfcac0] line-clamp-2">
                      {selectedAnimal.bestSpots.join(' · ')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photography Tip */}
            <div className="mt-6 pt-5 border-t border-[#222921] flex items-center justify-between text-xs text-[#8c9488]">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#d4973b]" />
                <span>Recommended Kit: 100-400mm lens on open beanbag mount</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Visual of Cheetah at Dawn */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full rounded-lg overflow-hidden border border-[#2b3329] bg-[#141714]">
              <img
                src={SAFARI_IMAGES.cheetah}
                alt="Cheetah resting on savannah termite mound at dawn"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-[#f5f2eb]">
                <div className="font-mono text-[#d4973b] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Mara North Conservancy</span>
                </div>
                <div className="font-serif text-lg text-[#fbf8f2]">
                  Female cheetah alert at dawn on a termite mound overlook
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sunrise Hot Air Balloon Feature Banner */}
        <div className="relative rounded-xl overflow-hidden border border-[#293227] bg-[#141714]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 relative h-72 sm:h-84 lg:h-[340px] w-full overflow-hidden">
              <img
                src={SAFARI_IMAGES.balloon}
                alt="Sunrise hot air balloon drifting over Serengeti plains"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#141714] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141714] via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-xs font-mono uppercase tracking-widest text-[#d4973b] mb-2 flex items-center gap-2">
                <Sunrise className="w-4 h-4" />
                <span>DAWN WILDERNESS EXPERIENCES</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#fbf8f2] mb-3">
                {currentLocale === 'vi' ? 'Khinh Khí Cầu Bình Minh & Bữa Sáng Thảo Nguyên' : 'Serengeti Dawn Balloon Safari'}
              </h3>
              <p className="text-xs sm:text-sm text-[#ada797] leading-relaxed mb-6">
                {currentLocale === 'vi'
                  ? 'Cất cánh trong tĩnh lặng lúc bình minh hé rạng, lướt nhẹ trên những tán cây keo và đàn thú đang di chuyển, kết thúc bằng ly champagne Pháp thượng hạng ngay trên đồng cỏ.'
                  : 'Lift off before dawn into golden morning air. Drift over winding rivers and racing herds before touching down for a five-star white-linen champagne breakfast cooked on open embers.'}
              </p>
              <div>
                <button
                  onClick={onOpenPlanner}
                  className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] rounded transition-colors whitespace-nowrap shadow-sm inline-flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentLocale === 'vi' ? 'Thêm Trải Nghiệm Này Vào Tour' : 'Add Experience to Itinerary'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
