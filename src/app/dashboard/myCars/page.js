'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiTwotoneDelete, AiTwotoneEdit } from 'react-icons/ai';

const MyCars = () => {
    const [myCar, setMyCar] = useState([])
    const router = useRouter();
    // const [refreshPage, setRefreshPage] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/car/get-car',{ cache: 'no-store' })
            setMyCar(response?.data?.data)
        }
        fetchData();
    }, [])
    const handleDelete = async (id) => {
        const response = await axios.delete(`/api/car/get-car/${id}`,{ cache: 'no-store' })
        if (response?.data.status == 200) {
            router.refresh();
            // setRefreshPage(!refreshPage)
            toast.success('Delete successfully')
        }
        console.log(id)
    }
    return (
        <div className=' bg-white px-6 py-10 min-h-[100vh] lg:px-8'>
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr className=''>
                        <th scope="col" className="px-6 py-4">Brand Name</th>
                        <th scope="col" className="px-6 py-4">Year</th>
                        <th scope="col" className="px-6 py-4">Rent Price</th>
                        <th scope="col" className="px-6 py-4">Minimun Rent Days</th>
                        <th scope="col" className="px-6 py-4">Maximun Rent Days</th>
                        <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        myCar?.map((car) => {
                            const { _id, brandName, rentPricePerDay, carYear, carMaximumRentalDays, carMinimumRentalDays } = car;
                            console.log(car)
                            return (
                                <tr key={_id} className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">{brandName}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">{carYear}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">{rentPricePerDay}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">{carMinimumRentalDays}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">{carMaximumRentalDays}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium flex gap-5 text-center">

                                        <Link href={`/dashboard/updateCar/${_id}`}> <AiTwotoneEdit size={20} /></Link>
                                        <AiTwotoneDelete onClick={() => handleDelete(_id)} size={20} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyCars;