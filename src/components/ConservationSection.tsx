import React from 'react';
import { ShieldCheck, HeartHandshake, Trees, Users2 } from 'lucide-react';
import { Locale } from '../types/safari';
import { CONSERVATION_INITIATIVES } from '../data/safariData';

interface ConservationSectionProps {
  currentLocale: Locale;
}

export const ConservationSection: React.FC<ConservationSectionProps> = ({ currentLocale }) => {
  return (
    <section id="conservation" className="py-20 bg-[#0f110f] border-b border-[#222622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono tracking-widest uppercase text-[#d4973b] mb-2">
            FOOTPRINT & GUARDIANSHIP
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] text-balance">
            {currentLocale === 'vi' ? 'Cam Kết Bảo Tồn & Đồng Hành Cùng Bản Địa' : 'Conservation & Community Guardianship'}
          </h2>
          <p className="text-[#a5a092] text-sm sm:text-base mt-2">
            {currentLocale === 'vi'
              ? 'Chúng tôi tin rằng sự xa xỉ đích thực không thể tách rời khỏi việc bảo vệ sự sống hoang dã và tôn vinh những người gác rừng truyền đời.'
              : 'True luxury demands regenerative stewardship. We directly empower indigenous communities who have co-existed with African wildlife for millennia.'}
          </p>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CONSERVATION_INITIATIVES.map((init, idx) => (
            <div
              key={idx}
              className="bg-[#141714] border border-[#242b23] rounded-lg p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#d4973b] mb-1">0{idx + 1}. INITIATIVE</div>
                <div className="font-serif text-2xl font-normal text-[#fbf8f2] mb-2">
                  {currentLocale === 'vi' ? init.titleVi : init.title}
                </div>
                <div className="font-mono text-lg font-bold text-[#e0a64c] mb-4">
                  {currentLocale === 'vi' ? init.metricVi : init.metric}
                </div>
                <p className="text-xs sm:text-sm text-[#ada797] leading-relaxed">
                  {currentLocale === 'vi' ? init.descriptionVi : init.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#212720] flex items-center gap-2 text-xs text-[#8c9488]">
                <ShieldCheck className="w-4 h-4 text-[#d4973b]" />
                <span>Audited Bi-Annually by ATTA Eco-Standards</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility & Certifications Bar */}
        <div className="p-6 bg-[#131613] border border-[#242b23] rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#9d9789]">
          <div className="flex items-center gap-3">
            <Trees className="w-5 h-5 text-[#d4973b] shrink-0" />
            <div>
              <span className="font-semibold text-[#f5f2eb] block">100% Certified Carbon-Neutral Fleet & Flights</span>
              <span>All Land Cruiser fuel and internal bush flights offset through local tree planting in the Mau Forest.</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users2 className="w-5 h-5 text-[#d4973b] shrink-0" />
            <div>
              <span className="font-semibold text-[#f5f2eb] block">Direct Conservancy Land Lease</span>
              <span>Over $1.2M annually paid directly to Maasai family landowners in private wildlife concessions.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
