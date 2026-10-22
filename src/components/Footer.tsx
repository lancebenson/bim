import React from 'react';
import { Compass, Mail, Phone, MapPin } from 'lucide-react';
import { Locale } from '../types/safari';

interface FooterProps {
  currentLocale: Locale;
  onOpenPackingGuide: () => void;
  onOpenPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLocale, onOpenPackingGuide, onOpenPlanner }) => {
  return (
    <footer className="bg-[#080908] border-t border-[#1e231e] text-[#8e887a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1b201b]">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-[#1c221b] border border-[#343e32] flex items-center justify-center text-[#d4973b]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl tracking-wider uppercase font-semibold text-[#f5f2eb]">
                Bimau Safari
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-[#9f9a8d]">
              {currentLocale === 'vi'
                ? 'Công ty thám hiểm safari sang trọng hàng đầu Đông Phi và Nam Phi. Thiết kế theo yêu cầu riêng, bảo tồn động vật hoang dã và tôn vinh tri thức bản địa.'
                : 'Pioneering private, low-impact luxury wildlife expeditions across the Serengeti, Maasai Mara, and Okavango Delta since 2011.'}
            </p>
            <div className="text-[11px] font-mono text-[#787f74]">
              Member of African Travel & Tourism Association (ATTA #4928)
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-2.5 text-xs">
            <div className="font-mono uppercase text-[#d4973b] tracking-wider mb-2">Expeditions</div>
            <div><a href="#expeditions" className="hover:text-[#f5f2eb] transition-colors">The Great Migration</a></div>
            <div><a href="#expeditions" className="hover:text-[#f5f2eb] transition-colors">Ngorongoro Crater</a></div>
            <div><a href="#expeditions" className="hover:text-[#f5f2eb] transition-colors">Okavango Water Safari</a></div>
            <div><a href="#expeditions" className="hover:text-[#f5f2eb] transition-colors">Bwindi Gorilla Trek</a></div>
          </div>

          {/* Retreats & Intelligence */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <div className="font-mono uppercase text-[#d4973b] tracking-wider mb-2">Safari Intelligence</div>
            <div><a href="#migration" className="hover:text-[#f5f2eb] transition-colors">12-Month Migration Map</a></div>
            <div><a href="#lodges" className="hover:text-[#f5f2eb] transition-colors">Eco-Lodges & Tented Camps</a></div>
            <div><a href="#wildlife" className="hover:text-[#f5f2eb] transition-colors">Swahili Wildlife Field Guide</a></div>
            <div>
              <button
                onClick={onOpenPackingGuide}
                className="hover:text-[#d4973b] text-left transition-colors"
              >
                Bush Flight 15kg Packing Protocol
              </button>
            </div>
            <div>
              <button
                onClick={onOpenPlanner}
                className="text-[#d4973b] hover:underline text-left"
              >
                Launch Custom Safari Builder
              </button>
            </div>
          </div>

          {/* Bush Offices Contact */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="font-mono uppercase text-[#d4973b] tracking-wider mb-2">Expedition Offices</div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4973b] shrink-0 mt-0.5" />
              <span>Arusha Field Base: Sakina Hill, Plot 42, Arusha, Tanzania</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4973b] shrink-0 mt-0.5" />
              <span>Nairobi Hangar: Wilson Airport, Hangar 3, Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#d4973b] shrink-0" />
              <span className="font-mono">+254 20 891 BIMAU (24/7 Dispatch)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#d4973b] shrink-0" />
              <span className="font-mono">expeditions@bimausafari.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#6e766a] gap-4">
          <div>
            © {new Date().getFullYear()} Bimau Safari Expeditions Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Fair Trade Tourism Certified</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Plastic Conservancy Protocol</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Wilderness Carriage</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
