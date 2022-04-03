import React from 'react';

const CustomerReiview = ({ review }) => {
     const { name, comment, img, ratings, } = review;
     return (
          <div className='bg-slate-200 p-10'>
               <img className='rounded-3xl' src={img} alt="" />
               <div>
                    <h1>{name}</h1>
                    <h1>{ratings}</h1>
                    <p>{comment}</p>
               </div>

          </div>
     );
};

export default CustomerReiview;