import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {
     return (
          <div className='flex justify-center py-5 text-2xl text-center 
           font-medium sticky top-0 bg-violet-300'>
               <CustomLink className='mr-3' to={'/'}>Home</CustomLink>
               <CustomLink className='mr-3' to={'/reviews'}>Reviews</CustomLink>
               <CustomLink className='mr-3' to={'/dashboard'}>Dashboard</CustomLink>
               <CustomLink className='mr-3' to={'/blogs'}>Blogs</CustomLink>
               <CustomLink className='mr-3' to={'/about'}>About</CustomLink>
          </div>
     );
};

export default NavBar;