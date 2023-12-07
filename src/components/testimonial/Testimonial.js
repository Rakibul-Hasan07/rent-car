'use client'
import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialData = [
  { id: 1, name: 'John Smith', designation: 'Manager at AUC', image: 'https://i.ibb.co/XCkFpBj/tesimonial1.jpg', testimonial: "Amazing service! Seamless booking, affordable rates, and a wide selection of well-maintained cars. Super impressed with the efficiency and transparency. My go-to for stress-free car rentals!" },
  { id: 2, name: 'Rosa Fiore', designation: 'Founder at XYZ', image: 'https://i.ibb.co/LQkq8Vg/tesimonial2.jpg', testimonial: "Top-notch experience! Easy reservation, no hidden costs, and the vehicle was in excellent condition. The website's user-friendly interface made the entire process a breeze. Highly recommend for reliable and convenient car rentals.!" },
  { id: 2, name: 'Angela Troisi', designation: 'Co-Founder at XYZ', image: 'https://i.ibb.co/fvZXDHb/tesimonial3.jpg', testimonial: "Outstanding customer care! From the moment I booked, the support was exceptional. The car exceeded expectations, and the pricing was fair. This website truly prioritizes customer satisfaction – I won't consider renting from anywhere else!" }
]
const Testimonial = () => {
  return (
    <div className='bg-gray-50'>
      <h4 className='text-2xl font-semibold py-6 ml-3 md:p-8'>Happy Clients Says....</h4>
      <div className='grid grid-cols-1 gap-10 mx-3 lg:mx-10 md:grid-cols-2 lg:grid-cols-3'>
        {
          testimonialData.map((testimonial, idx) => <div key={idx}><TestimonialCard testimonial={testimonial} /></div>)
        }
      </div>
    </div>
  );
};

export default Testimonial;