import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { InteractiveCartSimulator } from './components/InteractiveCartSimulator';
import { DualScannerShowcase } from './components/DualScannerShowcase';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ComparisonTable } from './components/ComparisonTable';
import { HomemakerTestimonials } from './components/HomemakerTestimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-market-canvas text-slate-900 flex flex-col font-sans">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <HowItWorks />
        <InteractiveCartSimulator />
        <DualScannerShowcase />
        <FeaturesGrid />
        <ComparisonTable />
        <HomemakerTestimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;

