import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { insights } from '@/data/_insightsData';

const InsightsSection = () => {
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
      transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.7, delay: i * 0.15 }
    })
  };

  return (
    <section id="insights-section" className="py-20 md:py-28 bg-secondary/30 dark:bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            From the Journal
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our latest thoughts on strategy, mindset, and the future of modern wealth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={`${insight.title}-${index}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-card rounded-xl border border-border/50 dark:border-border p-6 md:p-8 flex flex-col items-start text-left h-full transition-all hover:shadow-lg hover:border-primary/50"
            >
              <span className="text-sm font-semibold text-primary mb-2">{insight.category}</span>
              <h3 className="text-xl font-semibold mb-3 text-foreground flex-grow">{insight.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{insight.description}</p>
              <a href={insight.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-primary font-semibold inline-flex items-center group">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;