import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const TestimonialCard = ({ datas }) => {
    return (
        <div class="w-[100vw] h-[85vh]">
            <h4 className='text-2xl font-semibold m-3'>Happy Clients Says....</h4>
            <div className='flex gap-10 justify-center items-center'>
                <div className="bg-gray-200 mt-10 w-[400px] h-[70vh] rounded-[10px] flex flex-col justify-center items-center relative opacity-50">
                    <Image className="w-[120px] h-[120px] rounded-[150px] border-4 border-white shadow-[50px] absolute top-0 translate-y-[-60px]" height={200} width={200} alt='' src="/cars.png" />
                    <div className="text-center mt-20">
                        <h1 className="text-2xl uppercase">Amy Liu</h1>
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
                <div className="bg-gray-200 mt-10 w-[400px] h-[70vh] rounded-[10px] flex flex-col justify-center items-center relative opacity-50">
                    <Image className="w-[120px] h-[120px] rounded-[150px] border-4 border-white shadow-[50px] absolute top-0 translate-y-[-60px]" height={200} width={200} alt='' src="/cars.png" />
                    <div className="text-center mt-20">
                        <h1 className="text-2xl uppercase">Amy Liu</h1>
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
                <div className="bg-gray-200 mt-10 w-[400px] h-[70vh] rounded-[10px] flex flex-col justify-center items-center relative opacity-50">
                    <Image className="w-[120px] h-[120px] rounded-[150px] border-4 border-white shadow-[50px] absolute top-0 translate-y-[-60px]" height={200} width={200} alt='' src="/cars.png" />
                    <div className="text-center mt-20">
                        <h1 className="text-2xl uppercase">Amy Liu</h1>
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
        </div>
    );
};

export default TestimonialCard;