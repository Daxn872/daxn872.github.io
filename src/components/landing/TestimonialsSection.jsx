import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Loader2, MessageSquare } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { fetchWhopReviews } from '@/services/whopService';

const TestimonialCard = ({ name, content, rating, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay * 0.1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
    className="bg-card rounded-xl border border-border/50 dark:border-border p-6 h-full flex flex-col"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'fill-accent text-accent' : 'fill-muted/30 text-muted/50 dark:fill-muted/30 dark:text-muted/50'}`} 
        />
      ))}
    </div>
    <p className="text-muted-foreground mb-5 text-base leading-relaxed flex-grow">&ldquo;{content}&rdquo;</p>
    <div className="mt-auto flex items-center gap-3">
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">NoneLimits Member</p>
      </div>
    </div>
  </motion.div>
);

const LoadingPlaceholder = () => (
  <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center py-16 text-center">
    <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
    <p className="text-md text-muted-foreground font-medium">Loading member stories...</p>
  </div>
);

const ErrorPlaceholder = () => (
  <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-muted-foreground py-16">
    <p className="text-lg font-semibold mb-2">Could not load testimonials.</p>
    <p className="text-sm">There was an issue fetching the latest reviews.</p>
  </div>
);

const NoReviewsPlaceholder = () => (
  <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-muted-foreground py-16">
    <p className="text-lg font-semibold mb-2">Be the First to Share Your Story</p>
    <p className="text-sm">Your success could be featured here for our community to see.</p>
  </div>
);

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const reviewData = await fetchWhopReviews();
        setReviews(reviewData);
      } catch (err) {
        setError(err);
        toast({
          variant: "destructive",
          title: "Failed to Load Reviews",
          description: "There was an issue fetching testimonials.",
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadReviews();
  }, [toast]);

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 } }
  };

  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Members Are Saying</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from people building their future inside NoneLimits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <LoadingPlaceholder />
          ) : error ? (
            <ErrorPlaceholder />
          ) : reviews.length > 0 ? (
            reviews.slice(0, 3).map((review, index) => (
              <TestimonialCard key={review.id || index} {...review} delay={index} />
            ))
          ) : (
            <NoReviewsPlaceholder />
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;