import React, { useState } from 'react';
import { Calendar, Compass, ShieldAlert, Sparkles, MapPin, ChevronRight, Info } from 'lucide-react';
import { Locale } from '../types/safari';
import { MIGRATION_CALENDAR } from '../data/safariData';

interface MigrationCalendarProps {
  currentLocale: Locale;
  onPlanForMonth: (month: string) => void;
}

export const MigrationCalendar: React.FC<MigrationCalendarProps> = ({ currentLocale, onPlanForMonth }) => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(6); // Default July (Peak Mara crossing)

  const activeData = MIGRATION_CALENDAR[selectedMonthIndex];

  return (
    <section id="migration" className="py-20 bg-[#0c0d0c] border-b border-[#222622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono tracking-widest uppercase text-[#d4973b] mb-2">
            THE 1,000-KILOMETER ANNUAL CYCLE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] text-balance">
            {currentLocale === 'vi' ? 'Bản Đồ & Lịch Trình Đại Di Cư 12 Tháng' : 'The Great Migration Seasonal Tracker'}
          </h2>
          <p className="text-[#a5a092] text-sm sm:text-base mt-2">
            {currentLocale === 'vi'
              ? 'Khám phá vị trí của 2 triệu linh dương và ngựa vằn theo từng tháng trong năm để lựa chọn thời điểm và khu cắm trại hoàn hảo nhất.'
              : 'Select any month to track the exact coordinates of two million wildebeest and zebras, river crossing flashpoints, and predator concentrations.'}
          </p>
        </div>

        {/* 12-Month Scrub Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {MIGRATION_CALENDAR.map((item, idx) => {
            const isSelected = idx === selectedMonthIndex;
            return (
              <button
                key={item.month}
                onClick={() => setSelectedMonthIndex(idx)}
                className={`px-4 py-2.5 rounded text-xs font-mono tracking-wider uppercase transition-all shrink-0 border ${
                  isSelected
                    ? 'bg-[#d4973b] text-black border-[#d4973b] font-bold shadow-md'
                    : 'bg-[#151915] text-[#9a9485] hover:text-[#fbf8f2] border-[#252c24] hover:border-[#384336]'
                }`}
              >
                <span>{currentLocale === 'vi' ? item.monthVi : item.month}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Layout: Left details & Right ecosystem SVG map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Month Detail Card */}
          <div className="lg:col-span-6 bg-[#131613] border border-[#232a22] rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Region and Month */}
              <div className="flex items-center justify-between pb-4 border-b border-[#212720] text-xs font-mono">
                <span className="text-[#d4973b] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeData.region}</span>
                </span>
                <span className="text-[#899184]">
                  {currentLocale === 'vi' ? activeData.monthVi : activeData.month} Edition
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#fbf8f2] mt-5 mb-3">
                {currentLocale === 'vi' ? activeData.eventTitleVi : activeData.eventTitle}
              </h3>

              <p className="text-sm sm:text-base text-[#ada798] leading-relaxed mb-6">
                {currentLocale === 'vi' ? activeData.descriptionVi : activeData.description}
              </p>

              {/* Key Indicators */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#212720] mb-6">
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#7a8375] mb-1">Estimated Herd Count</div>
                  <div className="font-mono text-sm font-semibold text-[#f5f2eb]">{activeData.animalCount}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#7a8375] mb-1">Apex Predator Threat</div>
                  <div className={`font-mono text-sm font-semibold ${
                    activeData.predatorActivity === 'Extreme' ? 'text-[#e67a4d]' : 'text-[#d4973b]'
                  }`}>
                    {activeData.predatorActivity} Intensity
                  </div>
                </div>
              </div>

              {/* Recommended Camps */}
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase text-[#7a8375] mb-2">Optimal Bimau Wilderness Camps</div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {activeData.recommendedCamps.map((camp, cIdx) => (
                    <span key={camp} className="px-2.5 py-1 bg-[#1a1f19] border border-[#2d362c] text-[#d6d2c4] rounded">
                      {camp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-[#212720] flex items-center justify-between">
              <span className="text-xs text-[#8c9488]">
                {currentLocale === 'vi' ? 'Mùa cao điểm cần đặt trước 6-9 tháng' : 'Peak season booking recommended 6-9 months prior'}
              </span>
              <button
                onClick={() => onPlanForMonth(activeData.month)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] rounded transition-colors flex items-center gap-1.5"
              >
                <span>{currentLocale === 'vi' ? `Đặt Tháng ${selectedMonthIndex + 1}` : `Plan for ${activeData.month}`}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Custom Interactive Ecosystem Map Diagram */}
          <div className="lg:col-span-6 bg-[#131613] border border-[#232a22] rounded-lg p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4 text-xs font-mono text-[#8b9386]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#d4973b]" />
                <span>SERENGETI-MARA ECOSYSTEM CORRIDOR</span>
              </span>
              <span>1:2,500,000 SCALE</span>
            </div>

            {/* SVG Visual Map */}
            <div className="relative w-full h-[360px] sm:h-[400px] bg-[#0c0e0c] rounded border border-[#1e251e] overflow-hidden p-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Kenya - Tanzania Border Line */}
                <line x1="10" y1="28" x2="90" y2="28" stroke="#374335" strokeWidth="0.6" strokeDasharray="2,2" />
                <text x="14" y="24" fill="#6c7767" fontSize="2.5" fontFamily="monospace">KENYA (MAASAI MARA)</text>
                <text x="14" y="33" fill="#6c7767" fontSize="2.5" fontFamily="monospace">TANZANIA (SERENGETI)</text>

                {/* Mara River Path */}
                <path
                  d="M 30,22 Q 45,26 55,24 T 75,27"
                  fill="none"
                  stroke="#3e6382"
                  strokeWidth="1.2"
                />
                <text x="76" y="27" fill="#678fae" fontSize="2.2" fontFamily="monospace">Mara River</text>

                {/* Grumeti River */}
                <path
                  d="M 20,48 Q 35,46 50,48"
                  fill="none"
                  stroke="#35536b"
                  strokeWidth="0.8"
                />
                <text x="18" y="52" fill="#587994" fontSize="2" fontFamily="monospace">Grumeti River</text>

                {/* Lake Victoria outline suggestion */}
                <path
                  d="M 5,20 C 8,35 6,55 8,70 C 12,65 15,50 14,30 Z"
                  fill="#15202b"
                  stroke="#26394c"
                  strokeWidth="0.5"
                />
                <text x="7" y="44" fill="#4d6f8f" fontSize="2.2" fontFamily="monospace" transform="rotate(-90 7 44)">Lake Victoria</text>

                {/* Great Migration Annual Oval Pathway */}
                <ellipse
                  cx="50"
                  cy="50"
                  rx="22"
                  ry="32"
                  fill="none"
                  stroke="#2b3629"
                  strokeWidth="1"
                  strokeDasharray="1.5,1.5"
                />

                {/* Ngorongoro Crater representation */}
                <circle cx="75" cy="80" r="5" fill="#1b241a" stroke="#485945" strokeWidth="0.6" />
                <text x="70" y="88" fill="#849480" fontSize="2.2" fontFamily="monospace">Ngorongoro</text>

                {/* Historical crossing points indicator */}
                <circle cx="50" cy="25" r="1.5" fill="#e67a4d" />
                <text x="53" y="24" fill="#e67a4d" fontSize="2" fontFamily="monospace">Crossing #4</text>

                {/* Dynamic Active Hotspot Marker */}
                <g>
                  {/* Outer pulse wave */}
                  <circle
                    cx={activeData.mapHotspot.x}
                    cy={activeData.mapHotspot.y}
                    r="4.5"
                    fill="#d4973b"
                    fillOpacity="0.2"
                    stroke="#d4973b"
                    strokeWidth="0.6"
                  />
                  {/* Center pin */}
                  <circle
                    cx={activeData.mapHotspot.x}
                    cy={activeData.mapHotspot.y}
                    r="1.8"
                    fill="#d4973b"
                  />
                </g>

                {/* Active Hotspot Label Box */}
                <rect
                  x={Math.min(activeData.mapHotspot.x + 3, 62)}
                  y={activeData.mapHotspot.y - 4}
                  width="32"
                  height="7"
                  fill="#181d17"
                  stroke="#d4973b"
                  strokeWidth="0.4"
                  rx="1"
                />
                <text
                  x={Math.min(activeData.mapHotspot.x + 5, 64)}
                  y={activeData.mapHotspot.y + 0.5}
                  fill="#f5f2eb"
                  fontSize="2.2"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {activeData.mapHotspot.name}
                </text>
              </svg>

              {/* Map Legend */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#131713]/90 backdrop-blur-sm border border-[#232b22] px-3 py-2 rounded flex items-center justify-between text-[10px] font-mono text-[#8c9488]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4973b] inline-block" />
                  <span>Current {activeData.month} Herd Concentration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-0.5 bg-[#3e6382] inline-block" />
                  <span>River Crossing Channels</span>
                </div>
              </div>
            </div>

            <div className="mt-3 text-xs text-[#8c9688] flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#d4973b] shrink-0" />
              <span>Migration routes follow local rain showers and fluctuate annually within a 2-3 week variance.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
