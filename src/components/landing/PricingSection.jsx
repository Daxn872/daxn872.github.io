import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Star, Gem, Users, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Explorer Pass",
    price: "$0",
    frequency: "Free",
    description: "Get a feel for our community and access public insights and our weekly newsletter.",
    features: [
      { text: "Public Discord Channels", icon: Users },
      { text: "Weekly Market Briefing", icon: BookOpen },
      { text: "Limited Community Interaction", icon: Check },
    ],
    buttonText: "Join for Free",
    buttonVariant: "outline",
    isPremium: false,
    actionLink: "https://discord.gg/nFt4vJACSE" 
  },
  {
    name: "NoneLimits Membership",
    price: "$22.95",
    frequency: "/ month",
    description: "The complete experience. Unlock all tools, private insights, and our full network.",
    features: [
      { text: "All Explorer features, plus:", icon: Check },
      { text: "Private Channels & Trade Ideas", icon: Gem },
      { text: "Full Access to The Network", icon: Users },
      { text: "The Complete Content Library", icon: BookOpen },
      { text: "Member-only Events & Workshops", icon: Star },
    ],
    buttonText: "Become a Member",
    buttonVariant: "default",
    isPremium: true,
    actionLink: "https://whop.com/checkout/plan_yoWnM2N2P1syO/",
    badge: "Recommended"
  }
];

const PricingCard = ({ plan, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, delay: index * 0.15 }
    }
  };
  
  const handleButtonClick = () => {
    window.open(plan.actionLink, '_blank');
  };

  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "relative flex flex-col rounded-xl border p-8 h-full",
        plan.isPremium 
          ? "bg-card pricing-premium-border" 
          : "bg-secondary/30 border-border/50 dark:border-border" 
      )}
    >
      {plan.isPremium && plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold z-10">
          {plan.badge}
        </div>
      )}
      <div className="mb-6 pt-4">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">{plan.name}</h3>
        <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
        <p className="text-4xl font-bold my-4 text-foreground">
            {plan.price}
            <span className="text-base font-normal ml-1 text-muted-foreground">{plan.frequency}</span>
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, i) => {
          const IconComponent = feature.icon;
          return (
            <li key={i} className="flex items-start">
              <IconComponent className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 text-growth" />
              <span className="text-sm text-foreground">{feature.text}</span>
            </li>
          );
        })}
      </ul>

      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-auto"
      >
        <Button
          onClick={handleButtonClick}
          size="lg"
          variant={plan.buttonVariant}
          className={cn(
            "w-full text-base py-3 h-auto font-semibold",
            plan.isPremium && "btn-primary",
          )}
        >
          {plan.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

const PricingSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 } }
  };

  return (
    <motion.section
      id="pricing"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="py-20 md:py-28 bg-secondary/30 text-foreground"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join NoneLimits
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, powerful membership to help you achieve your financial goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PricingSection;