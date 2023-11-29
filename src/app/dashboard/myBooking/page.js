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
                        <th>CheckOut</th>
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
                                <td><button>CheckOut</button></td>
                                <td>{status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default myBooking;