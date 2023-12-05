import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const TestimonialCard = ({ datas }) => {
    return (
        <div className="md:w-[100vw] h-[80vh] md:h-[85vh] lg:h-[90vh] xl:h-[75vh]">      
                <div className="bg-gray-200 mt-10 w-full h-[400px] md:w-[350px] lg:w-[300px] lg:h-[470px] xl:w-[400px] xl:h-[410px] rounded-[10px] flex flex-col justify-center items-center relative opacity-50">
                    <Image className="w-[120px] h-[120px] rounded-[150px] border-4 border-white shadow-[50px] absolute top-0 translate-y-[-60px]" height={200} width={200} alt='' src="/cars.png" />
                    <div className="text-center mt-20">
                        <h1 className="text-2xl font-bold uppercase">Amy Liu</h1>
                        <h2 className="text-xl uppercase py-3">CTO, Cybertech Solutions</h2>
                    </div>
                    <div className="overflow-hidden pl-[15px] pr-[30px] py-[10px] h-[100vh] m-0 z-[1px] relative">
                        <p className="text-black text-xl text-center m-0 relative ml-4">
                            <span className="relative">
                                <span className="absolute -top-2 -left-6"><FaQuoteLeft /></span>
                                I engage with the world, I was sold. Its integration capability and responsiveness are unlike anything Ive seen before. Were not just talking about a step forward in technology, but a quantum leap into the future.
                                <span className="absolute -bottom-2 -right-6"><FaQuoteRight /></span>
                            </span>
                        </p>
                    </div>
                </div>
        </div>
    );
};

export default TestimonialCard;