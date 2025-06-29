import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Globe, TrendingUp, Zap, Activity, Shield } from 'lucide-react';

const AbstractShapes = () => {
  const shapeVariants = {
    initial: { opacity: 0, scale: 0.5, rotate: -45 },
    animate: (i) => ({
      opacity: [0, 0.5, 0.3, 1],
      scale: [0.5, 1.1, 0.9, 1],
      rotate: [-45, 0, 10, 0],
      transition: {
        delay: i * 0.2,
        duration: 1.2,
        ease: "circOut",
      },
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  const iconContainerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 }
    }
  };


  const shapes = [
    { Icon: Zap, color: "text-primary", size: "h-12 w-12", position: "top-1/4 left-1/4" },
    { Icon: Activity, color: "text-accent", size: "h-16 w-16", position: "bottom-1/3 right-1/4 animate-pulse-slow" },
    { Icon: Shield, color: "text-muted-gold dark:text-accent", size: "h-10 w-10", position: "top-1/3 right-1/3" },
  ];

  return (
    <motion.div 
      className="relative w-full h-64 md:h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center"
      variants={iconContainerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-muted-gold/5 dark:from-primary/5 dark:via-accent/5 dark:to-accent/5 rounded-2xl opacity-50 blur-xl"></div>
      
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={shapeVariants}
          whileHover="hover"
          className={`absolute ${shape.position} p-4 bg-card/60 dark:bg-card/60 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-border/10`}
        >
          <shape.Icon className={`${shape.size} ${shape.color}`} />
        </motion.div>
      ))}
       <motion.div 
        custom={3} 
        variants={shapeVariants} 
        whileHover="hover"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full shadow-2xl flex items-center justify-center border border-primary/20"
      >
        <Zap className="h-10 w-10 text-primary opacity-70" />
      </motion.div>
       <motion.div 
        custom={4} 
        variants={shapeVariants} 
        whileHover="hover"
        className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-accent/10 rounded-lg shadow-xl transform rotate-12 flex items-center justify-center border border-accent/20"
      >
        <Globe className="h-8 w-8 text-accent opacity-70" />
      </motion.div>
       <motion.div 
        custom={5} 
        variants={shapeVariants} 
        whileHover="hover"
        className="absolute top-1/4 right-1/3 w-20 h-20 bg-muted-gold/10 dark:bg-accent/10 rounded-2xl shadow-xl transform -rotate-6 flex items-center justify-center border border-muted-gold/20 dark:border-accent/20"
      >
        <TrendingUp className="h-9 w-9 text-muted-gold dark:text-accent opacity-70" />
      </motion.div>
    </motion.div>
  );
};


const benefits = [
  {
    icon: Eye,
    title: "Clarity",
    description: "Find your focus and make confident decisions, free from market hype."
  },
  {
    icon: Globe,
    title: "Freedom",
    description: "Build a life where your finances serve your passions, not the other way around."
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Join a network dedicated to personal and financial evolution."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const LifestyleSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <AbstractShapes />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              This is About More Than Money. <span className="accent-gradient">It's About Your Life.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
              We believe true wealth is the freedom to live on your own terms. It's having the time for what matters, the clarity to make confident decisions, and the resources to turn your biggest goals into reality.
            </motion.p>
            
            <motion.div variants={itemVariants} className="space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;