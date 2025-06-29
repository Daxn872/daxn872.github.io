import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import LifestyleSection from '@/components/landing/LifestyleSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import ProfitsSection from '@/components/landing/ProfitsSection';
import PricingSection from '@/components/landing/PricingSection';
import InsightsSection from '@/components/landing/InsightsSection';
import FinalCtaSection from '@/components/landing/FinalCtaSection';
import Footer from '@/components/landing/Footer';
import Background from '@/components/landing/Background';

const LandingPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden relative">
      <Background />
      <Header companyName="NoneLimits" />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <LifestyleSection />
        <TestimonialsSection />
        <ProfitsSection />
        <PricingSection />
        <InsightsSection />
        <FinalCtaSection />
      </main>
      <Footer companyName="NoneLimits" />
    </div>
  );
};

export default LandingPage;