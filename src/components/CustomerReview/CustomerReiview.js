import React from 'react';

const CustomerReiview = ({ review }) => {
     const { name, comment, img, ratings, } = review;
     return (
          <div className='bg-slate-200 p-10 rounded-3xl'>
               <img className='rounded-3xl mb-4' src={img} alt="" />
               <div className='text-left'>
                    <span className='flex justify-between'>
                         <h1 className='font-bold text-2xl text-slate-600 mb-2'>{name}</h1>
                         <h1 className='text-lg from-neutral-100'>Ratings: {ratings}</h1>
                    </span>
                    <p className='text-base text-gray-800'>“{comment}”</p>
               </div>

          </div>
     );
};

export default CustomerReiview;