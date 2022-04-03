import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReiview from '../CustomerReview/CustomerReiview';
import useCutomerReviews from '../hooks/useCutomerReviews';

const Home = () => {
     const [reviews, setReviews] = useCutomerReviews()
     return (
          <>
               <div>
                    <div className=' px-12 py-8 flex justify-center items-center'>
                         <div className='text-left'>
                              <h1 className='text-6xl font-extrabold mb-1'>You Next Laptop</h1>
                              <h1 className='text-6xl font-extrabold mb-5 text-violet-600'>Your Best laptop</h1>
                              <p className='mb-10 text-lg font-bold text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, commodi aperiam? Architecto, corporis consequuntur! Reiciendis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, possimus!</p>
                              <Link to='/reviews' className='bg-violet-200 py-3 px-6 rounded-xl text-2xl text-violet-700 font-medium'>Live Demo</Link>
                         </div>
                         <div >
                              <img className='h-[450px] w-[1200px]' src="https://i.ebayimg.com/thumbs/images/g/2B8AAOSwBnxhoEJO/s-l300.jpg" />
                         </div>

                    </div>

               </div>


               <h2 className='text-4xl font-semibold mt-8'>Customer Reviews: {reviews.length}</h2>
               <div className='grid grid-cols-3 gap-7 p-10'>
                    {
                         reviews.slice(0, 3).map(review => <CustomerReiview
                              key={review.id}
                              review={review}
                         />)
                    }
               </div>

          </>
     );
};

export default Home;