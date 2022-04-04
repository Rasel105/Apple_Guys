import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
     return (
          <section className='px-4 py-32 mx-auto max-w-7xl'>
               <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                    <div>
                         <p className='mb-2 font-semibold text-blue-500 uppercase text-left text-6xl'>
                              404
                         </p>
                         <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                              Ooops! You weren't suppossed to see this
                         </h1>
                         <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                              The page you're looking for no longer exists. Return to the home page and remember: you haven't seen anything.
                         </p>
                         <Link to='/' className='text-left mb-2 py-2 px-3 text-white mt-3 bg-cyan-600 sm:w-auto sm:mb-0'>
                              Back to homepage
                         </Link>

                    </div>
                    <div>
                         <div className='w-full h-full bg-gray-200 rounded-lg'>
                              <img
                                   src='https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png'
                                   alt=''
                              />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default NotFound
