'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiTwotoneDelete, AiTwotoneEdit } from 'react-icons/ai';

const myCars = () => {
    const [myCar, setMyCar] = useState([])
    const router = useRouter();
    // const [refreshPage, setRefreshPage] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/car/get-car')
            setMyCar(response?.data?.data)
        }
        fetchData();
    }, [])
    const handleDelete = async (id) => {
        const response = await axios.delete(`/api/car/get-car/${id}`)
        if (response?.data.status == 200) {
            router.refresh();
            // setRefreshPage(!refreshPage)
            toast.success('Delete successfully')
        }
        console.log(id)
    }
    // const handleEdit = async (id) => {

    //     console.log(id)
    // }
    return (
        <div className=' bg-white px-6 py-10 h-[100vh] lg:px-8'>
            <table className="w-full">
                <thead>
                    <tr className=''>
                        <th>Brand Name</th>
                        <th>Year</th>
                        <th>Rent Price</th>
                        <th>Minimun Rent Days</th>
                        <th>Maximun Rent Days</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        myCar?.map((car) => {
                            const { _id, brandName, rentPricePerDay, carYear, carMaximumRentalDays, carMinimunRentalDays } = car;
                            return (
                                <tr key={_id} className=''>
                                    <td>{brandName}</td>
                                    <td>{carYear}</td>
                                    <td>{rentPricePerDay}</td>
                                    <td>{carMaximumRentalDays}</td>
                                    <td>{carMinimunRentalDays}</td>
                                    <td className='flex gap-3'>

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

export default myCars;