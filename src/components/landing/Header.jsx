
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const Header = ({ companyName }) => {
  const handleClick = () => {
    window.open('https://whop.com/checkout/plan_yoWnM2N2P1syO/', '_blank');
  };

  return (
    <header className="container mx-auto py-6 px-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-2"
      >
        <Zap className="h-8 w-8 text-primary animate-pulse" />
        <span className="text-xl font-bold crypto-gradient">{companyName}</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button 
          onClick={handleClick} 
          className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow shadow-lg shadow-primary/30 text-sm md:text-base px-3 md:px-4"
          variant="default"
          size="default"
        >
          Access NoneLimits <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </header>
  );
};

export default Header;
