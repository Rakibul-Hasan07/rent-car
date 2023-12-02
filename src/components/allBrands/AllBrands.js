import Image from 'next/image';
import React from 'react';

const AllBrands = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <h3 className='text-center text-3xl font-bold text-gray-400 my-7'>There is our all brand</h3>
            <div className=''>
                <div className='grid gap-4 justify-between grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 xl:gap-6 xl:my-5 xl:px-8'>
                    <Image className='h-28 w-28 border border-red-500' src='/audi.png' height={200} width={200} alt='audi brand' />
                    <Image className='h-28 w-28 border border-red-500' src='/vw.png' height={200} width={200} alt='audi brand' />
                    <Image className='h-28 w-28 border border-red-500' src='/rolls.png' height={200} width={200} alt='audi brand' />
                    <Image className='h-28 w-28 border border-red-500' src='/mazda.png' height={200} width={200} alt='audi brand' />
                    <Image className='h-28 w-28 border border-red-500' src='/lamborgini.png' height={200} width={200} alt='audi brand' />
                    <Image className='h-28 w-28 border border-red-500' src='/ferrari.png' height={200} width={200} alt='audi brand' />
                    <Image className='h-28 w-28 border border-red-500' src='/hundai.png' height={200} width={200} alt='audi brand' />
                    <Image className='h-28 w-28 border border-red-500' src='/honda.png' height={200} width={200} alt='audi brand' />
                    <Image className='h-28 w-28 border border-red-500' src='/benz.png' height={200} width={200} alt='audi brand' />
                </div>
            </div>
        </div>
    );
};

export default AllBrands;