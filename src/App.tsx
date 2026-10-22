import React, { useState } from 'react';
import { Currency, Expedition, Locale } from './types/safari';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExpeditionExplorer } from './components/ExpeditionExplorer';
import { MigrationCalendar } from './components/MigrationCalendar';
import { LodgesShowcase } from './components/LodgesShowcase';
import { WildlifeShowcase } from './components/WildlifeShowcase';
import { SafariBuilder } from './components/SafariBuilder';
import { ConservationSection } from './components/ConservationSection';
import { ExpeditionDetailModal } from './components/ExpeditionDetailModal';
import { PackingGuideModal } from './components/PackingGuideModal';
import { Footer } from './components/Footer';
import { Quote } from 'lucide-react';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('USD');
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');

  // Modals state
  const [selectedExpedition, setSelectedExpedition] = useState<Expedition | null>(null);
  const [isPackingGuideOpen, setIsPackingGuideOpen] = useState(false);

  // Planner prefill state
  const [plannerMonth, setPlannerMonth] = useState<string | undefined>(undefined);
  const [plannerLodge, setPlannerLodge] = useState<string | undefined>(undefined);
  const [plannerExpeditionTitle, setPlannerExpeditionTitle] = useState<string | undefined>(undefined);

  const scrollToPlanner = () => {
    const el = document.getElementById('planner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookExpedition = (exp: Expedition) => {
    setPlannerExpeditionTitle(exp.title);
    scrollToPlanner();
  };

  const handlePlanForMonth = (month: string) => {
    setPlannerMonth(month);
    scrollToPlanner();
  };

  const handleSelectLodgeBooking = (lodgeName: string) => {
    setPlannerLodge(lodgeName);
    scrollToPlanner();
  };

  return (
    <div className="min-h-screen bg-[#0c0d0c] text-[#f5f2eb] flex flex-col font-sans">
      {/* Top Bar with 3-Zone Contract */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        onOpenPlanner={scrollToPlanner}
        onOpenPackingGuide={() => setIsPackingGuideOpen(true)}
      />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          currentLocale={currentLocale}
          onExploreExpeditions={() => {
            const el = document.getElementById('expeditions');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenPlanner={scrollToPlanner}
        />

        {/* Featured Expeditions */}
        <ExpeditionExplorer
          currentCurrency={currentCurrency}
          currentLocale={currentLocale}
          onSelectExpedition={(exp) => setSelectedExpedition(exp)}
          onBookExpedition={handleBookExpedition}
        />

        {/* 12-Month Great Migration Tracker & Map */}
        <MigrationCalendar
          currentLocale={currentLocale}
          onPlanForMonth={handlePlanForMonth}
        />

        {/* Lodges & Eco Sanctuaries */}
        <LodgesShowcase
          currentLocale={currentLocale}
          onSelectLodgeBooking={handleSelectLodgeBooking}
        />

        {/* Wildlife Guide & Sunrise Balloon spotlight */}
        <WildlifeShowcase
          currentLocale={currentLocale}
          onOpenPlanner={scrollToPlanner}
        />

        {/* Interactive Custom Safari Planner / Cost Estimator */}
        <SafariBuilder
          key={`${plannerMonth}-${plannerLodge}-${plannerExpeditionTitle}`}
          currentCurrency={currentCurrency}
          currentLocale={currentLocale}
          preselectedMonth={plannerMonth}
          preselectedLodge={plannerLodge}
          preselectedExpeditionTitle={plannerExpeditionTitle}
        />

        {/* Conservation & Community */}
        <ConservationSection
          currentLocale={currentLocale}
        />

        {/* Social Proof & Field Testimonial Strip */}
        <section className="py-16 bg-[#0c0d0c] border-b border-[#222622]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-8 h-8 text-[#d4973b] mx-auto mb-4 opacity-75" />
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-[#fbf8f2] leading-snug mb-6 max-w-3xl mx-auto text-balance">
              &ldquo;Sitting meters away from a cheetah mother and her cubs as dawn broke over Ndutu was transcendent. Bimau&apos;s guides have an intimacy with this landscape that cannot be replicated.&rdquo;
            </blockquote>
            <div className="text-xs font-mono text-[#8c9488]">
              <span className="text-[#f5f2eb] font-semibold">Lord Alistair & Lady Evelyn Vance</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Private 12-Day Serengeti & Mara Crossing, August 2025</span>
            </div>
          </div>
        </section>
      </main>

      {/* Strict Quiet Footer */}
      <Footer
        currentLocale={currentLocale}
        onOpenPackingGuide={() => setIsPackingGuideOpen(true)}
        onOpenPlanner={scrollToPlanner}
      />

      {/* Modals */}
      <ExpeditionDetailModal
        expedition={selectedExpedition}
        currentCurrency={currentCurrency}
        currentLocale={currentLocale}
        onClose={() => setSelectedExpedition(null)}
        onBookExpedition={handleBookExpedition}
      />

      {isPackingGuideOpen && (
        <PackingGuideModal
          currentLocale={currentLocale}
          onClose={() => setIsPackingGuideOpen(false)}
        />
      )}
    </div>
  );
}
