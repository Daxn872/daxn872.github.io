
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { LineChart, BarChart, Wallet, Gem, TrendingUp, ShieldCheck, BarChart as ChartBar, Sparkles, Target, TrendingDown, ArrowUpRight, Percent, Zap, Eye, Clock, Star } from 'lucide-react';

const ParallaxTradingSection = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simplified transforms for mobile
  const transformScale = isMobile ? 0.3 : 1;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50 * transformScale]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50 * transformScale]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -25 * transformScale]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 35 * transformScale]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -40 * transformScale]);
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 3 : 10]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -3 : -10]);

  const handleMouseMove = (e) => {
    if (isMobile || !isInView) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 100);
    mouseY.set((e.clientY - centerY) / 100);
  };

  // Simplified spring animations for mobile
  const springConfig = { stiffness: isMobile ? 200 : 400, damping: isMobile ? 25 : 30 };
  const rotateX = useSpring(useTransform(mouseY, (value) => -value * (isMobile ? 0.1 : 0.5)), springConfig);
  const rotateY = useSpring(useTransform(mouseX, (value) => value * (isMobile ? 0.1 : 0.5)), springConfig);

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '15%' : '25%']);
  const patternScale = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1.1 : 1.25]);
  const patternRotate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 5 : 15]);

  const createCard = (title, icon, position, yTransform, rotateTransform, stats) => (
    <motion.div
      style={{ 
        y: yTransform,
        rotate: rotateTransform,
        scale: isMobile ? 0.8 : scale,
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
      }}
      className={`absolute ${position} ${isMobile ? 'transform-gpu' : ''}`}
    >
      <div className="crypto-card p-4 md:p-6 w-[260px] md:w-[320px] relative">
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            {icon}
            <h3 className="text-base md:text-xl font-bold crypto-gradient">{title}</h3>
          </div>
          <div className="space-y-2 md:space-y-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
                <span className="text-xs md:text-sm font-medium text-foreground flex items-center gap-1">
                  {stat.value}
                  {stat.icon && <stat.icon className="h-3 w-3 md:h-4 md:w-4" />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Reduced particles for better performance
  const particleCount = isMobile ? 5 : 15;

  return (
    <motion.div 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      className="relative min-h-[100vh] overflow-hidden bg-background/80 backdrop-blur-sm perspective-1000"
    >
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 opacity-20"
      >
        <motion.div 
          style={{ 
            scale: patternScale,
            rotate: patternRotate,
          }}
          className="absolute inset-0 grid-pattern"
        />
      </motion.div>

      {!isMobile && [...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-pink-500/20 rounded-full transform-gpu"
          initial={false}
          animate={{
            x: ["0vw", `${Math.random() * 100}vw`],
            y: ["0vh", `${Math.random() * 100}vh`],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {createCard("Market Analysis", <LineChart className="h-4 w-4 md:h-5 md:w-5 text-pink-500" />, "top-[20%] left-[20%] transform -translate-x-1/2 -translate-y-1/2", y1, rotate1, [
        { label: "Market Cap", value: "$2.1T", icon: ChartBar },
        { label: "24h Volume", value: "$84.5B", icon: TrendingUp },
        { label: "Dominance", value: "42.3%", icon: Target }
      ])}

      {createCard("Risk Management", <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />, "top-[35%] right-[20%] transform translate-x-1/2 -translate-y-1/2", y2, rotate2, [
        { label: "Risk Score", value: "Low", icon: TrendingDown },
        { label: "Volatility", value: "Medium", icon: BarChart },
        { label: "Safety Rating", value: "A+", icon: Star }
      ])}

      {createCard("Early Projects", <Gem className="h-4 w-4 md:h-5 md:w-5 text-pink-500" />, "top-[50%] left-[35%] transform -translate-x-1/2 -translate-y-1/2", y3, rotate1, [
        { label: "New Listings", value: "24/day", icon: Eye },
        { label: "Avg. ROI", value: "+180%", icon: TrendingUp },
        { label: "Success Rate", value: "89%", icon: Target }
      ])}

      {createCard("Portfolio Tracker", <Wallet className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />, "top-[65%] right-[35%] transform translate-x-1/2 -translate-y-1/2", y4, rotate2, [
        { label: "Assets", value: "2,450+", icon: Sparkles },
        { label: "Total Value", value: "$12.4M", icon: ChartBar },
        { label: "Daily Change", value: "+5.2%", icon: TrendingUp }
      ])}

      {createCard("Market Signals", <Zap className="h-4 w-4 md:h-5 md:w-5 text-pink-500" />, "top-[80%] left-[25%] transform -translate-x-1/2 -translate-y-1/2", y5, rotate1, [
        { label: "Accuracy", value: "94%", icon: Target },
        { label: "Signal Count", value: "12/day", icon: Eye },
        { label: "Response Time", value: "2.3s", icon: Clock }
      ])}

      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 0.5, 0.9]) }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 0.5, 0.9]) }}
      />
    </motion.div>
  );
};

export default ParallaxTradingSection;
