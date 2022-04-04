import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReiview from '../CustomerReview/CustomerReiview';
import useCutomerReviews from '../hooks/useCutomerReviews';
import Reviews from '../Reviews/Reviews';

const Home = () => {
     const [reviews, setReviews] = useCutomerReviews()
     return (
          <>
               <div>
                    <div className='px-12 py-8 flex justify-center items-center'>
                         <div className='text-left'>
                              <h1 className='text-4xl font-extrabold mb-5 text-teal-500'>Apple Guys</h1>
                              <h1 className='text-6xl font-extrabold mb-1'>Every Last Byte</h1>
                              <h1 className='text-6xl font-extrabold mb-5 text-violet-600'>Those Apple Guys</h1>
                              <p className='mb-10 text-lg font-bold text-gray-500'>Our reputation of excellence, value and integrity has made us a trusted partner throughout Government for information technology services and solutions of the highest quality, and we will continue to earn that reputation every day.</p>
                              <Link to='/dashboard' className='bg-violet-200 py-3 px-6 rounded-xl text-2xl text-violet-700 font-medium hover:bg-violet-300'>Explore Now</Link>
                         </div>
                         <div >
                              <img className='h-[450px] w-[1200px]' src="https://i.ebayimg.com/thumbs/images/g/2B8AAOSwBnxhoEJO/s-l300.jpg" />
                         </div>

                    </div>

               </div>


               <h2 className='text-4xl font-semibold mt-8'>Customer Reviews</h2>
               <div className='grid grid-cols-3 gap-7 p-10'>
                    {
                         reviews.slice(0, 3).map(review => <CustomerReiview
                              key={review.id}
                              review={review}
                         />)
                    }
               </div>
               <div className='mb-5'>
                    <Link to='/reviews' className='bg-violet-200 py-3 px-6 rounded-xl text-xl text-violet-700 font-medium'>See All Reviews</Link>

               </div>

          </>
     );
};

export default Home;