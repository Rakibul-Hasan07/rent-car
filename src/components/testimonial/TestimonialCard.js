import Image from 'next/image';
import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

const TestimonialCard = ({ datas }) => {
    console.log(datas)
    return (
        <div className='flex gap-10 px-6'>
            <div className='p-5 md:px-1 rounded-3xl bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-300'>
                <div className='md:col-span-2 my-8 md:my-0 p-5'>
                    <p className='md:text-xl'>
                        Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.
                        It may be used to display a sample of fonts,  generate text for testing, or to spoof an e-mail spam filter.
                    </p>
                </div>
                <div className='flex flex-col items-center md:gap-y-2'>
                    <Image className='rounded-full h-16 w-16 md:h-24 md:w-24' src="/rakib.jpg" width={150} height={400} alt="Picture of the author" />
                    <span>
                        <h4 className='font-bold text-xl'>
                            Rakibul Hasan
                        </h4>
                        <p>
                            Web Developer
                        </p>
                    </span>
                    <span className='flex gap-2 text-orange-500 text-2xl'>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                    </span>
                </div>
            </div>

            <div className='p-5 md:px-1 rounded-3xl bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-300'>
                <div className='md:col-span-2 my-8 md:my-0 p-5'>
                    <p className='md:text-xl'>
                        Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.
                        It may be used to display a sample of fonts,  generate text for testing, or to spoof an e-mail spam filter.
                    </p>
                </div>
                <div className='flex flex-col items-center md:gap-y-2'>
                    <Image className='rounded-full h-16 w-16 md:h-24 md:w-24' src="/rakib.jpg" width={150} height={400} alt="Picture of the author" />
                    <span>
                        <h4 className='font-bold text-xl'>
                            Rakibul Hasan
                        </h4>
                        <p>
                            Web Developer
                        </p>
                    </span>
                    <span className='flex gap-2 text-orange-500 text-2xl'>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                    </span>
                </div>
            </div>

            <div className='p-5 md:px-1 rounded-3xl bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-300'>
                <div className='md:col-span-2 my-8 md:my-0 p-5'>
                    <p className='md:text-xl'>
                        Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.
                        It may be used to display a sample of fonts,  generate text for testing, or to spoof an e-mail spam filter.
                    </p>
                </div>
                <div className='flex flex-col items-center md:gap-y-2'>
                    <Image className='rounded-full h-16 w-16 md:h-24 md:w-24' src="/rakib.jpg" width={150} height={400} alt="Picture of the author" />
                    <span>
                        <h4 className='font-bold text-xl'>
                            Rakibul Hasan
                        </h4>
                        <p>
                            Web Developer
                        </p>
                    </span>
                    <span className='flex gap-2 text-orange-500 text-2xl'>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                    </span>
                </div>
            </div>


        </div>
    );
};

export default TestimonialCard;