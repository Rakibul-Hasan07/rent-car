"use client"
import { Context } from '@/contexts/context';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';

const myBooking = () => {
    const [bookings, setBookings] = useState([])
    const { setLoading } = useContext(Context)
    const { userInfo } = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`/api/car/bookings/user-bookings?email=${userInfo?.email}`);
                console.log(response.data)
                setBookings(response?.data?.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userInfo?.email, setLoading]);


    return (
        <div className=' bg-white px-6 lg:py-10 h-[100vh] lg:px-8'>

            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" className="px-6 py-4">Booking Date</th>
                        <th scope="col" className="px-6 py-4">User</th>
                        <th scope="col" className="px-6 py-4">Pickup Date</th>
                        <th scope="col" className="px-6 py-4">Return Date</th>
                        <th scope="col" className="px-6 py-4">Price</th>
                        <th scope="col" className="px-6 py-4">Payment Status</th>
                        <th scope="col" className="px-6 py-4">CheckOut</th>
                        <th scope="col" className="px-6 py-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.map((booking) => {
                        const { _id, bookingDate, paymentStatus, status, userName, pickupDate, returnDate, price } = booking;
                        const bookingFormatDate = format(new Date(bookingDate), 'yyyy-MM-dd');
                        const pickupFormatDate = format(new Date(pickupDate), 'yyyy-MM-dd');
                        const returnFormatDate = format(new Date(returnDate), 'yyyy-MM-dd');

                        return (
                            <tr key={_id} className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{bookingFormatDate}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{userName}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{pickupFormatDate}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{returnFormatDate}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">${price}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{paymentStatus == false ? 'not paid' : 'paid'}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium"><button>CheckOut</button></td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default myBooking;