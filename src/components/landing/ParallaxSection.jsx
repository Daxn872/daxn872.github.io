
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[150vh] overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img  
            className="w-full h-full object-cover opacity-30"
            alt="Crypto trading visualization"
           src="https://images.unsplash.com/photo-1568092715422-fff34eabbe84" />
        </motion.div>

        <motion.div
          style={{ scale, opacity }}
          className="relative z-20 text-center max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 crypto-gradient">
            Market Analysis Mastery
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Our expert team analyzes market trends, identifies opportunities, and provides actionable insights
          </p>
        </motion.div>

        <motion.div 
          style={{ y: y2, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img  
            className="w-full h-full object-cover opacity-20"
            alt="Digital network visualization"
           src="https://images.unsplash.com/photo-1643101807331-21a4a3f081d5" />
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
