import React, { useState } from 'react';
import { Compass, Check, Calendar, Users, Sparkles, Send, ShieldCheck, ChevronRight, Calculator, CheckCircle2 } from 'lucide-react';
import { Currency, Locale } from '../types/safari';
import { CURRENCY_RATES } from '../data/safariData';

interface SafariBuilderProps {
  currentCurrency: Currency;
  currentLocale: Locale;
  preselectedMonth?: string;
  preselectedLodge?: string;
  preselectedExpeditionTitle?: string;
}

export const SafariBuilder: React.FC<SafariBuilderProps> = ({
  currentCurrency,
  currentLocale,
  preselectedMonth,
  preselectedLodge,
  preselectedExpeditionTitle,
}) => {
  // Destinations
  const [destinations, setDestinations] = useState<string[]>(['Serengeti (Tanzania)', 'Maasai Mara (Kenya)']);
  const [durationDays, setDurationDays] = useState<number>(8);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [travelMonth, setTravelMonth] = useState<string>(preselectedMonth || 'August');
  const [comfortTier, setComfortTier] = useState<'Classic Luxury' | 'Ultra-Luxe Signature' | 'Private Bush Camp'>('Ultra-Luxe Signature');
  
  // Add-ons
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([
    'Dawn Hot Air Balloon & Champagne Breakfast',
    'Walking Safari with Maasai Elder'
  ]);

  // Lead Form
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>(
    preselectedLodge ? `Interested in staying at ${preselectedLodge}.` : 
    preselectedExpeditionTitle ? `Interested in ${preselectedExpeditionTitle}.` : ''
  );
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const rate = CURRENCY_RATES[currentCurrency];

  const destinationOptions = [
    { id: 'Serengeti (Tanzania)', label: 'Serengeti (Tanzania)', basePerDay: 750 },
    { id: 'Maasai Mara (Kenya)', label: 'Maasai Mara (Kenya)', basePerDay: 780 },
    { id: 'Ngorongoro Crater', label: 'Ngorongoro Crater', basePerDay: 820 },
    { id: 'Okavango Delta (Botswana)', label: 'Okavango Delta (Botswana)', basePerDay: 950 },
    { id: 'Bwindi Gorillas (Uganda)', label: 'Bwindi Gorillas (Uganda)', basePerDay: 1100 },
  ];

  const experienceOptions = [
    { id: 'Dawn Hot Air Balloon & Champagne Breakfast', label: 'Sunrise Hot Air Balloon Flight', costUSD: 590 },
    { id: 'Private Helicopter Scenic Flight', label: 'Scenic Doors-Off Helicopter Safari', costUSD: 850 },
    { id: 'Walking Safari with Maasai Elder', label: 'Walking Safari with Indigenous Tracker', costUSD: 180 },
    { id: 'Night Infrared Spotlight Drive', label: 'Nocturnal Predator Night Safari', costUSD: 240 },
    { id: 'Bush Photography Kit & 400mm Lens', label: 'Professional Wildlife Camera Kit Rental', costUSD: 350 },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Calculation
  const comfortMultiplier = comfortTier === 'Classic Luxury' ? 1.0 : comfortTier === 'Ultra-Luxe Signature' ? 1.35 : 1.6;
  
  // Average daily rate of selected destinations
  const avgDestBase = destinations.length > 0
    ? destinations.reduce((sum, destId) => {
        const found = destinationOptions.find(d => d.id === destId);
        return sum + (found ? found.basePerDay : 700);
      }, 0) / destinations.length
    : 700;

  const totalPax = adults + (children * 0.6);
  const baseAccommodationAndGuide = avgDestBase * comfortMultiplier * durationDays * totalPax;
  
  // Park permits & internal flight flat allowance
  const parkAndFlightFees = (450 * durationDays) + (totalPax * 380);

  // Add-ons total
  const addOnsTotal = selectedExperiences.reduce((sum, expId) => {
    const item = experienceOptions.find(e => e.id === expId);
    return sum + (item ? item.costUSD * (adults + (children > 0 ? 1 : 0)) : 0);
  }, 0);

  const estimatedTotalUSD = Math.round(baseAccommodationAndGuide + parkAndFlightFees + addOnsTotal);
  const estimatedPerPersonUSD = Math.round(estimatedTotalUSD / Math.max(1, adults + children));

  const toggleDestination = (id: string) => {
    if (destinations.includes(id)) {
      if (destinations.length > 1) {
        setDestinations(destinations.filter(d => d !== id));
      }
    } else {
      setDestinations([...destinations, id]);
    }
  };

  const toggleExperience = (id: string) => {
    if (selectedExperiences.includes(id)) {
      setSelectedExperiences(selectedExperiences.filter(e => e !== id));
    } else {
      setSelectedExperiences([...selectedExperiences, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    const randomCode = `BIMAU-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedCode(randomCode);
  };

  return (
    <section id="planner" className="py-20 bg-[#0c0d0c] border-b border-[#222622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono tracking-widest uppercase text-[#d4973b] mb-2 flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE ITINERARY & COST ESTIMATOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] text-balance">
            {currentLocale === 'vi' ? 'Thiết Kế Chuyến Safari Riêng Của Bạn' : 'Craft Your Tailor-Made Safari'}
          </h2>
          <p className="text-[#a5a092] text-sm sm:text-base mt-2">
            {currentLocale === 'vi'
              ? 'Tùy chỉnh điểm đến, số ngày, cấp độ sang trọng và các trải nghiệm bay khinh khí cầu để nhận ngay dự toán chi phí minh bạch.'
              : 'Select your preferred wilderness parks, pace, camp luxury tier, and private experiences to generate a real-time indicative quote.'}
          </p>
        </div>

        {submittedCode ? (
          /* Confirmation State */
          <div className="bg-[#141714] border border-[#d4973b]/40 rounded-xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-[#212720] border border-[#d4973b] text-[#d4973b] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="text-xs font-mono text-[#d4973b] uppercase tracking-widest mb-2">
              EXPEDITION PROPOSAL INITIATED
            </div>
            <h3 className="font-serif text-3xl text-[#fbf8f2] mb-3">
              {currentLocale === 'vi' ? 'Yêu Cầu Đã Được Tiếp Nhận' : 'Your Safari Vision is in Motion'}
            </h3>
            <p className="text-[#b3ac9b] text-sm sm:text-base mb-6 leading-relaxed">
              {currentLocale === 'vi'
                ? `Cảm ơn bạn, ${fullName}. Trưởng đoàn chuyên gia thám hiểm Bimau Safari tại Arusha sẽ liên hệ qua email ${email} trong vòng 24 giờ cùng hành trình chi tiết ngày theo ngày.`
                : `Thank you, ${fullName}. A Senior Bimau Naturalist in our Arusha expedition office is preparing your day-by-day bespoke proposal and will contact you at ${email} within 24 hours.`}
            </p>

            <div className="bg-[#0e100e] border border-[#232a22] p-4 rounded-lg inline-block text-left mb-6 text-xs font-mono">
              <div className="text-[#8c9488]">CONFIRMATION REFERENCE:</div>
              <div className="text-base font-bold text-[#d4973b] mt-0.5">{submittedCode}</div>
              <div className="text-[#a8a192] mt-2">
                {durationDays} Days · {adults} Adults · {destinations.join(', ')}
              </div>
            </div>

            <div>
              <button
                onClick={() => setSubmittedCode(null)}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] rounded transition-colors"
              >
                {currentLocale === 'vi' ? 'Thiết Kế Hành Trình Khác' : 'Configure Another Itinerary'}
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Builder Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Interactive Options */}
            <div className="lg:col-span-7 space-y-8 bg-[#131613] border border-[#232a22] rounded-xl p-6 sm:p-8">
              
              {/* Step 1: Destinations */}
              <div>
                <div className="text-xs font-mono text-[#d4973b] uppercase tracking-wider mb-2">
                  01. TARGET WILDERNESS REGIONS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destinationOptions.map((dest) => {
                    const isChecked = destinations.includes(dest.id);
                    return (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => toggleDestination(dest.id)}
                        className={`p-3 rounded border text-left text-xs font-medium transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#1b221a] border-[#d4973b] text-[#fbf8f2]'
                            : 'bg-[#101210] border-[#252c24] text-[#9a9485] hover:border-[#384336]'
                        }`}
                      >
                        <span>{dest.label}</span>
                        {isChecked && <Check className="w-4 h-4 text-[#d4973b]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Duration Slider & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#20261f]">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#d4973b] uppercase tracking-wider mb-2">
                    <span>02. EXPEDITION DURATION</span>
                    <span className="text-[#f5f2eb] font-bold">{durationDays} DAYS</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="16"
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full accent-[#d4973b] cursor-pointer bg-[#20271f]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#788274] mt-1">
                    <span>4 Days (Mini)</span>
                    <span>10 Days (Optimal)</span>
                    <span>16 Days (Grand)</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-[#d4973b] uppercase tracking-wider mb-2">
                    TRAVEL PARTY SIZE
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-[#101210] border border-[#252c24] rounded flex items-center justify-between">
                      <span className="text-[#9e9889]">Adults:</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-5 h-5 bg-[#1b221a] rounded text-[#f5f2eb] flex items-center justify-center font-bold"
                        >-</button>
                        <span className="font-mono font-bold text-[#f5f2eb]">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-5 h-5 bg-[#1b221a] rounded text-[#f5f2eb] flex items-center justify-center font-bold"
                        >+</button>
                      </div>
                    </div>
                    <div className="p-2.5 bg-[#101210] border border-[#252c24] rounded flex items-center justify-between">
                      <span className="text-[#9e9889]">Kids:</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-5 h-5 bg-[#1b221a] rounded text-[#f5f2eb] flex items-center justify-center font-bold"
                        >-</button>
                        <span className="font-mono font-bold text-[#f5f2eb]">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-5 h-5 bg-[#1b221a] rounded text-[#f5f2eb] flex items-center justify-center font-bold"
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Travel Month & Comfort Tier */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#20261f]">
                <div>
                  <div className="text-xs font-mono text-[#d4973b] uppercase tracking-wider mb-2">
                    03. PREFERRED MONTH
                  </div>
                  <select
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full bg-[#101210] border border-[#252c24] rounded p-2.5 text-xs text-[#f5f2eb] font-mono focus:border-[#d4973b] outline-none"
                  >
                    {months.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="text-xs font-mono text-[#d4973b] uppercase tracking-wider mb-2">
                    COMFORT TIER
                  </div>
                  <div className="flex flex-col gap-1.5 text-xs">
                    {(['Classic Luxury', 'Ultra-Luxe Signature', 'Private Bush Camp'] as const).map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setComfortTier(tier)}
                        className={`px-3 py-1.5 rounded border text-left text-xs transition-colors flex items-center justify-between ${
                          comfortTier === tier
                            ? 'bg-[#1b221a] border-[#d4973b] text-[#fbf8f2] font-semibold'
                            : 'bg-[#101210] border-[#252c24] text-[#8e887a] hover:border-[#384336]'
                        }`}
                      >
                        <span>{tier}</span>
                        {comfortTier === tier && <Check className="w-3.5 h-3.5 text-[#d4973b]" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Special Experiences */}
              <div className="pt-6 border-t border-[#20261f]">
                <div className="text-xs font-mono text-[#d4973b] uppercase tracking-wider mb-3">
                  04. BESPOKE BUSH ENHANCEMENTS
                </div>
                <div className="space-y-2">
                  {experienceOptions.map((exp) => {
                    const isChecked = selectedExperiences.includes(exp.id);
                    return (
                      <button
                        key={exp.id}
                        type="button"
                        onClick={() => toggleExperience(exp.id)}
                        className={`w-full p-2.5 rounded border text-left text-xs transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#1b221a] border-[#d4973b] text-[#fbf8f2]'
                            : 'bg-[#101210] border-[#252c24] text-[#8f897c] hover:border-[#384336]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#d4973b]" />
                          <span>{exp.label}</span>
                        </span>
                        <span className="font-mono text-[#d4973b]">
                          +{rate.format(exp.costUSD)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Live Estimate & Inquiry Form */}
            <div className="lg:col-span-5 bg-[#141714] border border-[#242b23] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#d4973b] mb-1">
                  ESTIMATED ITINERARY VALUE
                </div>
                
                {/* Total and Per Person */}
                <div className="py-4 border-b border-[#222921]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs text-[#8c9488]">Estimated Total:</span>
                    <span className="font-mono text-3xl font-bold text-[#fbf8f2]">
                      {rate.format(estimatedTotalUSD)}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between text-xs text-[#a8a192]">
                    <span>Approx. per traveler:</span>
                    <span className="font-mono text-sm font-semibold text-[#d4973b]">
                      {rate.format(estimatedPerPersonUSD)} / person
                    </span>
                  </div>
                </div>

                {/* Breakdown Summary */}
                <div className="py-4 space-y-2 text-xs border-b border-[#222921] font-mono text-[#979182]">
                  <div className="flex justify-between">
                    <span>{durationDays} Days All-Inclusive Wilderness:</span>
                    <span className="text-[#ded9cb]">{rate.format(Math.round(baseAccommodationAndGuide))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Park Fees & Internal Bush Charters:</span>
                    <span className="text-[#ded9cb]">{rate.format(Math.round(parkAndFlightFees))}</span>
                  </div>
                  {selectedExperiences.length > 0 && (
                    <div className="flex justify-between">
                      <span>{selectedExperiences.length} Selected Enhancements:</span>
                      <span className="text-[#ded9cb]">{rate.format(Math.round(addOnsTotal))}</span>
                    </div>
                  )}
                </div>

                {/* Inquiry Form */}
                <form onSubmit={handleSubmit} className="pt-5 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#d4973b] mb-2">
                    REQUEST PRIVATE ITINERARY PROPOSAL
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder={currentLocale === 'vi' ? 'Họ và tên của bạn' : 'Your Full Name'}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#0d0f0d] border border-[#262e25] rounded p-2.5 text-xs text-[#f5f2eb] focus:border-[#d4973b] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0d0f0d] border border-[#262e25] rounded p-2.5 text-xs text-[#f5f2eb] focus:border-[#d4973b] outline-none"
                    />
                    <input
                      type="tel"
                      placeholder={currentLocale === 'vi' ? 'Số điện thoại / WhatsApp' : 'Phone / WhatsApp'}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0d0f0d] border border-[#262e25] rounded p-2.5 text-xs text-[#f5f2eb] focus:border-[#d4973b] outline-none"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder={currentLocale === 'vi' ? 'Yêu cầu đặc biệt (chụp ảnh, sinh nhật, chế độ ăn...)' : 'Special requests or preferences (photography goals, anniversaries, dietary requirements)...'}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full bg-[#0d0f0d] border border-[#262e25] rounded p-2.5 text-xs text-[#f5f2eb] focus:border-[#d4973b] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] active:bg-[#c28830] rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{currentLocale === 'vi' ? 'Gửi Yêu Cầu Đặt Chuyến Đi' : 'Submit Expedition Request'}</span>
                  </button>
                </form>
              </div>

              <div className="pt-4 border-t border-[#20271f] flex items-center justify-between text-[11px] text-[#7d8579] font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4973b]" />
                  <span>No obligation quote</span>
                </span>
                <span>Response in &lt; 24h</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
