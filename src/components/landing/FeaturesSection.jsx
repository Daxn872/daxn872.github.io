import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BrainCircuit, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description: "Clear, concise analysis on market trends and opportunities, cutting through the noise.",
  },
  {
    icon: BrainCircuit,
    title: "Smarter Tools",
    description: "Access our suite of proprietary tools designed to help you analyze, track, and manage your portfolio.",
  },
  {
    icon: Users,
    title: "A Private Network",
    description: "Connect with a vetted community of peers who are building, investing, and thinking for the long-term.",
  },
  {
    icon: ShieldCheck,
    title: "Resilient Strategies",
    description: "Learn and apply frameworks for portfolio construction and risk management for sustainable growth.",
  }
];

const FeaturesSection = () => {
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
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.7 }
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get The Unfair Advantage</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built the toolkit every modern investor needs to get ahead and stay ahead.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="bg-card rounded-xl border border-border/50 dark:border-border p-6 text-center flex flex-col items-center"
            >
              <div className="p-3 bg-primary/10 rounded-lg mb-5 inline-block">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;