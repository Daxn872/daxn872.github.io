import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleClick = () => {
    window.open('https://whop.com/checkout/plan_yoWnM2N2P1syO/', '_blank');
  };

  const handleScrollToInsights = () => {
    const insightsSection = document.getElementById('insights-section');
    if (insightsSection) {
      insightsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.8 }
    }
  };
  
  const buttonHoverEffect = {
    scale: 1.03,
    transition: { type: "spring", stiffness: 400, damping: 15 }
  };
  
  const buttonTapEffect = { scale: 0.97 };

  return (
    <section className="relative pt-40 pb-32 md:pt-56 md:pb-48 text-center">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <img  class="absolute inset-0 w-full h-full object-cover" alt="A person working on a laptop at a clean, modern desk with a large window overlooking a city skyline at dusk." src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
            Your Journey to <span className="accent-gradient">Financial Clarity.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join a private community of investors and entrepreneurs focused on building sustainable wealth and personal freedom.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={buttonHoverEffect}
              whileTap={buttonTapEffect}
            >
              <Button
                onClick={handleClick}
                size="lg"
                className="btn-primary text-base md:text-lg px-8 py-6 h-auto font-bold w-full sm:w-auto"
              >
                Become a Member <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={buttonHoverEffect}
              whileTap={buttonTapEffect}
            >
              <Button
                onClick={handleScrollToInsights}
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 py-6 h-auto font-bold w-full sm:w-auto bg-card/80 dark:bg-card/80 backdrop-blur-sm border-border/70 hover:bg-muted/20 dark:hover:bg-muted/20"
              >
                Explore Insights
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;