import React from 'react';
import useCutomerReviews from '../hooks/useCutomerReviews';

const Reviews = () => {
     const [reviews, setReviews] = useCutomerReviews()
     return (
          <div>
               <h1>Reviews: {reviews.length}</h1>
          </div>
     );
};

export default Reviews;