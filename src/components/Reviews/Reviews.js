import React from 'react';
import AllReview from '../AllReviews/AllReview';
import useCutomerReviews from '../hooks/useCutomerReviews';

const Reviews = () => {
     const [reviews, setReviews] = useCutomerReviews()
     return (
          <div>
               <h2 className='text-4xl font-semibold mt-8 underline'>All Customer Reviews</h2>
               <div className='grid grid-cols-3 gap-7 p-10'>

                    {
                         reviews.map(review => <AllReview
                              key={review.id}
                              review={review} />)
                    }
               </div>
          </div>
     );
};

export default Reviews;