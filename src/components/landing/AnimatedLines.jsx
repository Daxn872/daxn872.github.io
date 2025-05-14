
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedLines = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable lines on mobile for better performance
  if (isMobile) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: [0, 0.03, 0],
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 15,
            delay: index * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute h-[1px] w-[150px] bg-gradient-to-r from-transparent via-primary/20 to-transparent transform-gpu"
          style={{
            top: `${20 + (index * 30)}%`,
            transform: `rotate(-${25 + (index * 5)}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLines;
