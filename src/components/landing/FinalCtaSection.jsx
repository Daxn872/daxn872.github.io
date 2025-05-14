
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal, Tag, Shield, Lock } from 'lucide-react';

const FinalCtaSection = () => {
  const handleClick = () => {
    window.open('https://whop.com/checkout/plan_yoWnM2N2P1syO/', '_blank');
  };

  return (
    <section className="container mx-auto px-4 py-24 md:py-40 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, type: "spring", stiffness: 70, delay: 0.2 }}
        className="text-center"
      >
        <Terminal className="h-20 w-20 text-primary mx-auto mb-8 opacity-80 animate-pulse" />
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          Initiate <span className="crypto-gradient">Contact Protocol</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          The future waits for no one. Plug into the NoneLimits network and redefine your digital frontier. Limited access windows.
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
            <span>Join for €22.95 per month</span>
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

export default FinalCtaSection;
