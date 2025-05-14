
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Tag, Shield, Lock } from 'lucide-react';

const CtaSection = () => {
  const handleClick = () => {
    window.open('https://whop.com/checkout/plan_yoWnM2N2P1syO/', '_blank');
  };

  return (
    <section className="container mx-auto px-4 py-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 40, scale:0.9 }}
        whileInView={{ opacity: 1, y: 0, scale:1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="crypto-card rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto overflow-hidden cursor-pointer bg-card"
        onClick={handleClick}
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/30 rounded-full filter blur-2xl animate-pulse opacity-70"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/30 rounded-full filter blur-2xl animate-pulse opacity-70 delay-1000"></div>
        
        <Rocket className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Ascend?</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Your journey into the future of decentralized finance and digital assets starts now. Secure your spot in {new Date().getFullYear()}'s most anticipated crypto collective.
        </p>
        <div className="flex flex-col items-center">
          <Button 
            onClick={handleClick}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-8 h-auto btn-glow shadow-2xl shadow-primary/50 transform hover:scale-105 transition-transform duration-300"
          >
            Access NoneLimits <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-accent flex items-center gap-2"
          >
            <Tag className="h-5 w-5" /> 
            <span>For just €22.95 / month</span>
            <span className="line-through text-muted-foreground/80 text-base">€30.00</span>
          </motion.div>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Encrypted Data</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
