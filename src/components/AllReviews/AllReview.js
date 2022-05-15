import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const AllReview = ({ review }) => {
     const { name, comment, img, ratings, } = review;

     
     return (
          <div className='bg-slate-200 p-10 rounded-3xl shadow-2xl mx-auto max-w-7xl'>
               <img className='rounded-3xl mb-4' src={img} alt="" />
               <div className='text-left'>
                    <span className='flex justify-between'>
                         <h1 className='font-bold text-2xl text-slate-600 mb-2'>{name}</h1>
                         <h1 className='text-lg from-neutral-100'>Ratings: {ratings} <FontAwesomeIcon className='text-orange-500' icon={faStar} /></h1>
                    </span>
                    <p className='text-base text-gray-800'>“{comment}”</p>
               </div>
          </div>
     );
};
export default AllReview;