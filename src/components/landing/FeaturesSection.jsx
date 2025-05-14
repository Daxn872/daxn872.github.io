
import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Shield, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
  >
    <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const FeaturesSection = ({ companyName }) => {
  const features = [
    {
      icon: Search,
      title: 'Early Project Finds',
      description: 'Get exclusive access to hidden gems and promising projects before they go mainstream.',
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Deep-dive market analysis and trending opportunities in the crypto space.',
      delay: 0.3
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Professional risk management strategies to protect your investments.',
      delay: 0.4
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Join a community of professional traders and market analysts.',
      delay: 0.5
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose {companyName}?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access early opportunities and expert analysis to maximize your potential in the crypto market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
