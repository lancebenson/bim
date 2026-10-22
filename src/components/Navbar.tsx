import React, { useState } from 'react';
import { Compass, Globe, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Currency, Locale } from '../types/safari';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  currentLocale: Locale;
  onLocaleChange: (l: Locale) => void;
  onOpenPlanner: () => void;
  onOpenPackingGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  currentLocale,
  onLocaleChange,
  onOpenPlanner,
  onOpenPackingGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const currencies: Currency[] = ['USD', 'EUR', 'GBP', 'AUD', 'ZAR', 'VND'];

  const navLinks = [
    { href: '#expeditions', label: currentLocale === 'vi' ? 'Hành trình' : 'Expeditions' },
    { href: '#migration', label: currentLocale === 'vi' ? 'Đại di cư' : 'Migration Calendar' },
    { href: '#lodges', label: currentLocale === 'vi' ? 'Khu nghỉ dưỡng' : 'Lodges & Camps' },
    { href: '#wildlife', label: currentLocale === 'vi' ? 'Muông thú' : 'Wildlife Guide' },
    { href: '#conservation', label: currentLocale === 'vi' ? 'Bảo tồn' : 'Conservation' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0d0c]/90 backdrop-blur-md border-b border-[#252825]">
      {/* 3-Zone Top Bar Contract: Brand — 4-5 Nav Links — 1 Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
          <div className="w-9 h-9 rounded-sm bg-[#222721] border border-[#3c453a] flex items-center justify-center text-[#d4973b] group-hover:border-[#d4973b] transition-colors">
            <Compass className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-wider uppercase font-semibold text-[#f5f2eb]">
              Bimau Safari
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-[#b5b1a6]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#d4973b] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenPackingGuide}
            className="hover:text-[#d4973b] transition-colors whitespace-nowrap shrink-0 text-xs text-[#8c9688] uppercase tracking-wider"
          >
            {currentLocale === 'vi' ? 'Chuẩn bị đồ đạc' : 'Bush Packing Guide'}
          </button>
        </nav>

        {/* Zone 3: 1 primary action + currency/lang switches */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-[#c4bfae] bg-[#171a17] hover:bg-[#202420] border border-[#2c332b] rounded transition-colors whitespace-nowrap"
              title="Change Currency"
            >
              <span>{currentCurrency}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#8f8b80]" />
            </button>
            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-1 w-28 bg-[#171a17] border border-[#2f382e] shadow-xl rounded py-1 z-50 text-xs font-mono">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      onCurrencyChange(curr);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-[#232922] transition-colors ${
                      currentCurrency === curr ? 'text-[#d4973b] font-bold bg-[#1f261e]' : 'text-[#c4bfae]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Locale switcher */}
          <button
            onClick={() => onLocaleChange(currentLocale === 'en' ? 'vi' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-[#c4bfae] bg-[#171a17] hover:bg-[#202420] border border-[#2c332b] rounded transition-colors whitespace-nowrap"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#8f8b80]" />
            <span className="uppercase">{currentLocale}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenPlanner}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] active:bg-[#c28830] rounded transition-colors whitespace-nowrap shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLocale === 'vi' ? 'Thiết kế Tour' : 'Plan Custom Safari'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#c4bfae] hover:text-[#f5f2eb] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121412] border-b border-[#252825] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-base">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#d8d4c9] hover:text-[#d4973b] transition-colors py-1 border-b border-[#1f221f]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPackingGuide();
              }}
              className="text-left text-sm text-[#97a094] hover:text-[#d4973b] py-1"
            >
              {currentLocale === 'vi' ? 'Hướng dẫn chuẩn bị hành lý bay rừng' : 'Bush Flight Packing Guide'}
            </button>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-black bg-[#d4973b] hover:bg-[#e0a64c] rounded"
            >
              {currentLocale === 'vi' ? 'Thiết kế chuyến đi của bạn' : 'Plan Custom Safari'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
