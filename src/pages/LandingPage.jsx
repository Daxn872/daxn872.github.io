
import React from 'react';
import { useAppContext } from '@/context/AppContext';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ParallaxTradingSection from '@/components/landing/ParallaxTradingSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import CtaSection from '@/components/landing/CtaSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FinalCtaSection from '@/components/landing/FinalCtaSection';
import Footer from '@/components/landing/Footer';
import BackgroundElements from '@/components/landing/BackgroundElements';
import AnimatedLines from '@/components/landing/AnimatedLines';

const LandingPage = () => {
  const { companyName, redirectToWhop } = useAppContext();
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden isolate">
      <BackgroundElements />
      <AnimatedLines />
      
      <div className="relative z-10">
        <Header companyName={companyName} onJoinDiscord={redirectToWhop} />
        <main>
          <HeroSection companyName={companyName} onJoinDiscord={redirectToWhop} />
          <ParallaxTradingSection />
          <FeaturesSection companyName={companyName} />
          <CtaSection onJoinDiscord={redirectToWhop} />
          <TestimonialsSection />
          <FinalCtaSection onJoinDiscord={redirectToWhop} />
        </main>
        <Footer companyName={companyName} />
      </div>
    </div>
  );
};

export default LandingPage;
