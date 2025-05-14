
import React from 'react';

const WHOP_API_KEY = import.meta.env.VITE_WHOP_API_KEY || 'F6xFoe6_NFazB_K7-97FW7DMjbbgK73NP6dFYTf61LA';

export const fetchWhopReviews = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${WHOP_API_KEY}`
    }
  };

  const response = await fetch('https://api.whop.com/api/v2/reviews', options);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch reviews: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.data || !Array.isArray(data.data)) {
    throw new Error('Invalid data structure received from API');
  }

  return data.data
    .filter(review => (review.description && review.description.trim() !== '') || 
                    (review.comment && review.comment.trim() !== ''))
    .slice(0, 3)
    .map((review, index) => ({
      name: review.user?.username || 'Anonymous Member',
      content: review.description || review.comment || '',
      rating: review.stars || review.rating || 5,
      delay: 0.2 + (index * 0.1)
    }));
};
