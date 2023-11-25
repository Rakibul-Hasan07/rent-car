import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillCar, AiOutlineFolderAdd, AiOutlineHome } from 'react-icons/ai';
import { BsFileEarmarkLock2Fill } from 'react-icons/bs';
import { MdOutlineRateReview } from 'react-icons/md';

const DashboardNav = () => {
    return (
        <div className='flex flex-col gap-5 m-6 divide-y divide-gray-400 divide-dashed'>
            <div>
                <Image className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
                    src="/cars.png" width={200} height={200} alt="" />
            </div>
            <div className='flex items-center gap-3 hover:text-red-500'>
                <AiFillCar size={20} />
                <Link href='/dashboard/myCars'>My Car</Link>
            </div>
            <div className='flex items-center gap-3 hover:text-red-500'>
                <BsFileEarmarkLock2Fill size={20} />
                <Link href='/dashboard/myBooking'>My Booking</Link>
            </div>
            <div className='flex items-center gap-3 hover:text-red-500'>
                <MdOutlineRateReview size={20} />
                <Link href='/dashboard/myReviews'>My Reviews</Link>
            </div>
            <div className='flex items-center gap-3 hover:text-red-500'>
                <AiOutlineFolderAdd size={20} />
                <Link href='/dashboard/addCar'>Add New Car</Link>
            </div>
            <div className='flex items-center gap-3 hover:text-red-500'>
                <AiOutlineHome size={20} />
                <Link href='/'>Back TO Home</Link>
            </div>

        </div>
    );
};

export default DashboardNav;