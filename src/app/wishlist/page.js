'use client'
import { Context } from '@/contexts/context';
import axios from 'axios';
import Link from 'next/link';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

const WishList = () => {
    const { wishList, refreshPage, setRefreshPage } = useContext(Context)

    const handleWishListDelete = async (id) => {
        const response = await axios.delete(`/api/car/wish-list/${id}`)
        if (response?.data.status == 200) {
            setRefreshPage(!refreshPage)
            toast.success('Delete successfully')
        }
    }

    return (
        <div className=' bg-white px-6 py-10 h-[100vh] lg:px-8'>
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr className=''>
                        <th scope="col" className="px-6 py-4">Brand Name</th>
                        <th scope="col" className="px-6 py-4">carEngineCapacity</th>
                        <th scope="col" className="px-6 py-4">carTransmission</th>
                        <th scope="col" className="px-6 py-4">wishListUserEmail</th>
                        <th scope="col" className="px-6 py-4">View</th>
                        <th scope="col" className="px-6 py-4">Action</th>
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
                                <tr key={_id} className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{brandName}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{carEngineCapacity}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{carTransmission}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{wishListUserEmail}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium"><Link href={`/carDetails/${wishListCarId}`}>
                                        <button className='bg-sky-500 rounded-lg p-2 text-white text-sm'>View Details</button>
                                    </Link></td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium"><button onClick={() => handleWishListDelete(_id)} className='bg-red-400 px-4 py-2 rounded-md'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default WishList;