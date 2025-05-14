
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Star, Loader2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { fetchWhopReviews } from '@/services/whopService';

const TestimonialCard = ({ name, content, rating, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} 
        />
      ))}
    </div>
    <p className="text-muted-foreground mb-4">{content}</p>
    <div>
      <p className="font-semibold">{name}</p>
    </div>
  </motion.div>
);

const LoadingPlaceholder = () => (
  <div className="col-span-3 flex justify-center items-center py-12">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

const ErrorPlaceholder = () => (
  <div className="col-span-3 text-center text-muted-foreground py-12">
    <p>Unable to load reviews at this time.</p>
  </div>
);

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    let mounted = true;

    const loadReviews = async () => {
      try {
        const reviewData = await fetchWhopReviews();
        if (mounted) {
          setReviews(reviewData);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err);
          setLoading(false);
          toast({
            variant: "destructive",
            title: "Error loading reviews",
            description: "Reviews will be available soon.",
          });
        }
      }
    };

    // Delay loading reviews to prioritize main content
    const timeoutId = setTimeout(() => {
      loadReviews();
    }, 2000);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, [toast]);

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
          <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of successful traders who have transformed their crypto journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Suspense fallback={<LoadingPlaceholder />}>
            {loading ? (
              <LoadingPlaceholder />
            ) : error ? (
              <ErrorPlaceholder />
            ) : reviews.length > 0 ? (
              reviews.map((review, index) => (
                <TestimonialCard key={index} {...review} />
              ))
            ) : (
              <div className="col-span-3 text-center text-muted-foreground py-12">
                <p>No reviews available at the moment.</p>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
