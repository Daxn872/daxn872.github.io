import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { stats as staticStats } from '@/data/_profitsData';
import { BarChart, Award, TrendingUp } from 'lucide-react';

const iconMap = {
  TrendingUp,
  Award,
  BarChart,
};

const ProfitsSection = () => {
  const [stats, setStats] = useState(staticStats);

  useEffect(() => {
    try {
      const storedStats = localStorage.getItem('profitsData');
      if (storedStats) {
        const parsedStats = JSON.parse(storedStats);
        if (Array.isArray(parsedStats) && parsedStats.length > 0) {
          setStats(parsedStats);
        }
      }
    } catch (error) {
      console.error("Failed to parse profits data from localStorage", error);
    }
  }, []);


  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.7, delay: i * 0.1 }
    })
  };

  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 bg-secondary/30 dark:bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Success Stories, Backed by Data</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We focus on consistent growth and tangible results. Here's a snapshot of our members' success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon && iconMap[stat.icon] ? iconMap[stat.icon] : BarChart;
            return (
              <motion.div
                key={stat.title}
                custom={index}
                variants={cardVariants}
                className="bg-card rounded-xl border border-border/50 dark:border-border p-6 text-center flex flex-col items-center"
              >
                <div className="p-3 bg-growth/10 rounded-lg mb-4 inline-block">
                  <Icon className="h-8 w-8 text-growth" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-growth mb-2">{stat.value}</p>
                <h3 className="text-lg font-semibold mb-1 text-foreground">{stat.title}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ProfitsSection;