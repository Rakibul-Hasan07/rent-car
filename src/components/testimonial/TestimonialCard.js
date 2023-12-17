import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="md:w-[100vw] h-[80vh] md:h-[85vh] lg:h-[90vh] xl:h-[75vh]">
            <div className="bg-sky-100 mt-10 w-full h-[400px] md:w-[350px] lg:w-[300px] lg:h-[470px] xl:w-[400px] xl:h-[410px] rounded-[10px] flex flex-col justify-center items-center relative opacity-90">
                <Image className="w-[120px] h-[120px] rounded-[150px] border-4 border-white shadow-[50px] absolute top-0 translate-y-[-60px]" height={200} width={200} alt='' src={testimonial.image} />
                <div className="text-center mt-20">
                    <h1 className="text-xl font-bold uppercase">{testimonial.name}</h1>
                    <h2 className="text-xl uppercase py-3">{testimonial.designation}</h2>
                </div>
                <div className="overflow-hidden pl-[15px] pr-[30px] py-[10px] h-[100vh] m-0 z-[1px] relative">
                    <p className="text-black text-xl text-center m-0 relative ml-4">
                        <span className="relative">
                            <span className="absolute -top-2 -left-6 opacity-50"><FaQuoteLeft /></span>
                            {testimonial.testimonial}
                            <span className="absolute -bottom-2 -right-6 opacity-50"><FaQuoteRight /></span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;