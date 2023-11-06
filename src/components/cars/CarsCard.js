import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillSnippets, AiFillTool, AiOutlineAntDesign, AiOutlineUsergroupAdd } from 'react-icons/ai';

const CarsCard = () => {
    return (
        <div className='max-w-[350px] bg-gray-100 rounded-lg shadow-lg p-2'>
            <div className='m-2'>
                <Image className='w-full rounded-xl' src='/aboutcar3.jpg' width={200} height={200} alt='this is ferrari car' />
            </div>
            <div className='mx-2 mt-4'>
                <span className='flex justify-between text-xl'>
                    <h3 className=''>Ferrari smash quest34</h3>
                    <p className='border-2 border-gray-300 border-dashed p-1 rounded-xl'>2023</p>
                </span>
                <div className='grid grid-cols-2 gap-2'>
                    <span className='flex items-center gap-2'>
                        <AiOutlineUsergroupAdd size={25} />
                        <p className='text-lg'>4 People</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <AiOutlineAntDesign size={25} />
                        <p className='text-lg'>4 Hybrid</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <AiFillSnippets size={25} />
                        <p className='text-lg'>8.3km/Litre</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <AiFillTool size={25} />
                        <p className='text-lg'>4 Automatic</p>
                    </span>
                </div>
                <Link href='/carDetails'>
                    <div className='flex justify-between items-center my-4'>
                        <p className='text-lg'>$344<span className='text-sm'>/Month</span></p>
                        <button className='bg-sky-500 rounded-lg p-2 text-white text-sm'>View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CarsCard;