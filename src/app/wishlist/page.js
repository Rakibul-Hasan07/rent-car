'use client'
import { Context } from '@/contexts/context';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

const page = () => {
    const {  setLoading, wishList, setWishList } = useContext(Context)

    console.log(wishList)

    return (
        <div className=' bg-white px-6 py-10 h-[100vh] lg:px-8'>
            <table className="w-full">
                <thead>
                    <tr className=''>
                        <th>Brand Name</th>
                        <th>carEngineCapacity</th>
                        <th>carTransmission</th>
                        <th>wishListUserEmail</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        wishList?.map((wish) => {
                            const {
                                _id,
                                wishListCarId,
                                brandName,
                                carEngineCapacity,
                                carTransmission,
                                wishListUserEmail } = wish;
                            return (
                                <tr key={_id} className=''>
                                    <td>{brandName}</td>
                                    <td>{carEngineCapacity}</td>
                                    <td>{carTransmission}</td>
                                    <td>{wishListUserEmail}</td>
                                    <td><Link href={`/carDetails/${wishListCarId}`}>
                                        <button className='bg-sky-500 rounded-lg p-2 text-white text-sm'>View Details</button>
                                    </Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default page;