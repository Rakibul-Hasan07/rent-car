import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillSnippets, AiFillTool, AiOutlineAntDesign, AiOutlineUsergroupAdd } from 'react-icons/ai';

const CarsCard = ({ carData }) => {
    const { _id, carSeatingCapacity, carFuelType, carTransmission, rentPricePerDay, brandName, carModelName, carYear, carEngineCapacity } = carData;
    return (
        <div>
            <div className='max-h-[750px] max-w-[350px] bg-gray-100 rounded-lg shadow-lg p-2'>
                <div className='m-2'>
                    <Image className='w-full h-[200px] rounded-xl' src={carData?.images[0]} width={200} height={200} alt='' />
                </div>
                <div className='mx-2 mt-4'>
                    <span className='flex justify-between text-xl'>
                        <h3 className=''>{brandName}/{carModelName}</h3>
                        <p className='border-2 border-gray-300 border-dashed p-1 rounded-xl'>{carYear}</p>
                    </span>
                    <div className='grid grid-cols-2 gap-2'>
                        <span className='flex items-center gap-2'>
                            <AiOutlineUsergroupAdd size={25} />
                            <p className='text-lg'>{carSeatingCapacity} People</p>
                        </span>
                        <span className='flex items-center gap-2'>
                            <AiOutlineAntDesign size={25} />
                            <p className='text-lg'>{carFuelType}</p>
                        </span>
                        <span className='flex items-center gap-2'>
                            <AiFillSnippets size={25} />
                            <p className='text-lg'>{carEngineCapacity}/km</p>
                        </span>
                        <span className='flex items-center gap-2'>
                            <AiFillTool size={25} />
                            <p className='text-lg'>{carTransmission}</p>
                        </span>
                    </div>
                    <Link href={`/carDetails/${_id}`}>
                        <div className='flex justify-between items-center my-4'>
                            <p className='text-lg'>${rentPricePerDay}<span className='text-sm'>/Day</span></p>
                            <button className='bg-sky-500 rounded-lg p-2 text-white text-sm'>View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarsCard;