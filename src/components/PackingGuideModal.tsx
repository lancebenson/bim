import React from 'react';
import { X, Plane, AlertTriangle, Camera, Check, ShieldAlert } from 'lucide-react';
import { Locale } from '../types/safari';
import { PACKING_ITEMS } from '../data/safariData';

interface PackingGuideModalProps {
  currentLocale: Locale;
  onClose: () => void;
}

export const PackingGuideModal: React.FC<PackingGuideModalProps> = ({ currentLocale, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#121512] border border-[#2b3329] rounded-xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="sticky top-0 z-10 bg-[#121512]/95 backdrop-blur-md px-6 py-4 border-b border-[#242c22] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4973b] uppercase">
            <Plane className="w-4 h-4" />
            <span>Bush Flight & Wilderness Equipment Guide</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#918c80] hover:text-[#f5f2eb] rounded hover:bg-[#20251e] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-serif text-3xl text-[#fbf8f2] mb-2">
              {currentLocale === 'vi' ? 'Cẩm Nang Chuẩn Bị Hành Lý Safari' : 'Safari Packing & Bush Flight Protocol'}
            </h3>
            <p className="text-xs sm:text-sm text-[#ada797] leading-relaxed">
              {currentLocale === 'vi'
                ? 'Các chuyến bay rừng bằng phi cơ hạng nhẹ (Cessna Caravan) có khoang chứa hành lý giới hạn nghiêm ngặt. Vui lòng tuân thủ các quy tắc dưới đây để chuyến đi diễn ra suôn sẻ.'
                : 'Internal bush transfers utilize small light aircraft (Cessna Grand Caravan). Strict cargo pod geometry requires soft duffels with no rigid wheels or hard shells.'}
            </p>
          </div>

          {/* Strict 15KG Alert Box */}
          <div className="p-4 bg-[#1f1a14] border border-[#d4973b]/40 rounded-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#d4973b] shrink-0 mt-0.5" />
            <div className="text-xs text-[#cfcac0] leading-relaxed">
              <strong className="text-[#f5f2eb] block text-sm font-mono mb-1">
                STRICT 15 KG (33 LBS) SOFT DUFFEL LIMIT
              </strong>
              Each traveler is limited to 15kg total baggage including camera gear and hand luggage. Hard-shell rolling suitcases cannot be loaded into aircraft belly pods and will be refused at Nairobi / Arusha airfields. Laundry service is complimentary at all Bimau lodges daily.
            </div>
          </div>

          {/* Color rule warning */}
          <div className="p-4 bg-[#141814] border border-[#232b22] rounded-lg">
            <div className="text-xs font-mono text-[#d4973b] uppercase tracking-wider mb-2">
              Color Discipline in the Savannah
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#ada797]">
              <div className="p-2.5 bg-[#0e100e] rounded border border-[#1e241d]">
                <span className="text-[#96a58f] font-semibold block mb-1">✓ Recommended Tones</span>
                <span>Khaki, olive, taupe, stone, muted sand, and light brown. Blends seamlessly with savannah grass and stays cool.</span>
              </div>
              <div className="p-2.5 bg-[#0e100e] rounded border border-[#1e241d]">
                <span className="text-[#e67a4d] font-semibold block mb-1">✗ Strictly Prohibited</span>
                <span>Dark Navy Blue & Black (attract biting tsetse flies); Bright White & Neon (signals alarm to game herds).</span>
              </div>
            </div>
          </div>

          {/* Detailed Lists */}
          <div className="space-y-6">
            {PACKING_ITEMS.map((cat, cIdx) => (
              <div key={cIdx} className="bg-[#151915] border border-[#242b23] rounded-lg p-5">
                <div className="text-xs font-mono uppercase text-[#d4973b] mb-3">
                  {cat.category}
                </div>
                <div className="space-y-2 text-xs text-[#cfcac0]">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#d4973b] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#121512]/95 backdrop-blur-md px-6 py-4 border-t border-[#242c22] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] rounded transition-colors"
          >
            Understood & Close
          </button>
        </div>

      </div>
    </div>
  );
};
