import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Layers } from 'lucide-react';
import ThemeToggle from '@/components/landing/ThemeToggle';

const Header = ({ companyName }) => {
  const handleClick = () => {
    window.open('https://whop.com/checkout/plan_yoWnM2N2P1syO/', '_blank');
  };

  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header 
      initial={{ y: 0, opacity: 1 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'}`}
    >
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <Layers className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-foreground">{companyName}</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <ThemeToggle />
          <Button 
            onClick={handleClick} 
            className="btn-primary font-semibold"
            variant="default"
            size="sm" 
          >
            Join NoneLimits <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;