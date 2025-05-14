
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Tag, Shield } from 'lucide-react';

const HeroSection = ({ companyName }) => {
  const handleClick = () => {
    window.open('https://whop.com/checkout/plan_yoWnM2N2P1syO/', '_blank');
  };

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Zap className="h-8 w-8 text-primary animate-pulse" />
            <span className="text-2xl font-bold crypto-gradient">NoneLimits</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Elevate Your <span className="crypto-gradient">Crypto Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join the elite community of traders accessing early opportunities and expert market analysis
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button
              onClick={handleClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-8 h-auto btn-glow shadow-2xl shadow-primary/50 transform hover:scale-105 transition-transform duration-300"
            >
              Access NoneLimits <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-accent flex items-center gap-2"
            >
              <Tag className="h-5 w-5" />
              <span>For just €22.95 / month</span>
              <span className="line-through text-muted-foreground/80 text-base">€30.00</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mt-2"
            >
              <Shield className="h-4 w-4 text-primary" />
              <span>Secure payments & encrypted data protection</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="hero-glow hero-glow-3"></div>
    </section>
  );
};

export default HeroSection;
