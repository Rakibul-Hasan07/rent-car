'use client'
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <div className='bg-gray-100'>
      <h4 className='text-2xl font-semibold py-6 ml-3 md:p-8'>Happy Clients Says....</h4>
      <div className='grid grid-cols-1 gap-10 mx-3 lg:mx-10 md:grid-cols-2 lg:grid-cols-3'>
        {
          [...Array(3)].map((item, idx) => <div key={idx}><TestimonialCard /></div>)
        }
      </div>
    </div>
  );
};

export default Testimonial;