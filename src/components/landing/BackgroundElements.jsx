
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background/90" />
      
      {/* Grid pattern - simplified for mobile */}
      <div className={`fixed inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] ${
        isMobile ? 'bg-[size:20px_20px] opacity-30' : 'bg-[size:14px_24px] opacity-50'
      } [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`} />

      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-background [mask-image:radial-gradient(ellipse_100%_40%_at_50%_0%,transparent_70%,#000_100%)]" />
      
      {/* Animated orbs - Simplified for mobile */}
      {!isMobile && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="fixed -top-1/3 left-1/2 -translate-x-1/2 transform"
          >
            <div className="h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[100px] md:h-[40rem] md:w-[40rem]" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="fixed -bottom-1/3 left-1/2 -translate-x-1/2 transform"
          >
            <div className="h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[100px] md:h-[40rem] md:w-[40rem]" />
          </motion.div>
        </>
      )}
    </>
  );
};

export default BackgroundElements;
