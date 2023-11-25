"use client"
import { Context } from '@/contexts/context';
import { Menu, Transition } from '@headlessui/react';
import { FaSpinner } from "react-icons/fa";
import axios from 'axios';
import { format } from 'date-fns';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { MdDeleteForever, MdOutlineCheck } from 'react-icons/md';

const myBooking = () => {
    const [bookings, setBookings] = useState([])
    const { setLoading } = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get('/api/car/bookings/my-car');
                setBookings(response?.data?.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setLoading]);

    const pendingData = {
        status: 'Pending',
    };
    const approveData = {
        status: 'Approved',
    };
    const rejectData = {
        status: 'Rejected',
    };
    const handlePending = async (id) => {
        const response = await axios.put(`/api/car/bookings/my-car/${id}`, pendingData)
    }
    const handleReject = async (id) => {
        const response = await axios.put(`/api/car/bookings/my-car/${id}`, rejectData)
    }

    const handleApproved = async (id) => {
        const response = await axios.put(`/api/car/bookings/my-car/${id}`, approveData)
    }

    return (
        <div className=' bg-white px-6 py-10 h-[100vh] lg:px-8'>

            <table className="w-full">
                <thead>
                    <tr className=''>
                        <th>Booking Date</th>
                        <th>User</th>
                        <th>Pickup Date</th>
                        <th>Return Date</th>
                        <th>Price</th>
                        <th>Payment Status</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.map((booking) => {
                        const { _id, bookingDate, paymentStatus, status, userName, pickupDate, returnDate, price } = booking;
                        const bookingFormatDate = format(new Date(bookingDate), 'yyyy-MM-dd');
                        const pickupFormatDate = format(new Date(pickupDate), 'yyyy-MM-dd');
                        const returnFormatDate = format(new Date(returnDate), 'yyyy-MM-dd');

                        return (
                            <tr key={_id} className=''>
                                <td>{bookingFormatDate}</td>
                                <td>{userName}</td>
                                <td>{pickupFormatDate}</td>
                                <td>{returnFormatDate}</td>
                                <td>${price}</td>
                                <td>{paymentStatus == false ? 'not paid' : 'paid'}</td>
                                <td><div className="w-56 text-right">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/30 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                                {status}
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                <div className="px-1 py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => handlePending(_id)}
                                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                            >
                                                                {active ? (
                                                                    <FaSpinner
                                                                        className="mr-2 h-5 w-5 text-violet-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <FaSpinner
                                                                        className="mr-2 h-5 w-5 text-violet-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                                Pending
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => handleReject(_id)}
                                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                            >
                                                                {active ? (
                                                                    <MdDeleteForever
                                                                        className="mr-2 h-5 w-5 text-violet-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <MdDeleteForever
                                                                        className="mr-2 h-5 w-5 text-violet-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                                Rejected
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => handleApproved(_id)}
                                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                            >
                                                                {active ? (
                                                                    <MdOutlineCheck
                                                                        className="mr-2 h-5 w-5 text-violet-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <MdOutlineCheck
                                                                        className="mr-2 h-5 w-5 text-violet-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                                Approved
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default myBooking;