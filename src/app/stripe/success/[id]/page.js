'use client'
import axios from 'axios';
import React, { useEffect } from 'react';
import Link from 'next/link';

const SuccessPage = ({ params }) => {
    const id = params.id;

    useEffect(() => {
        const updateData = { paymentStatus: true };
        if (id) {
            console.log(id)
            const fetchData = async () => {
                const response = await axios.put(`/api/car/bookings/my-car/${id}`,{ cache: 'no-store' }, updateData)
                console.log(response)
            }
            fetchData();
        }

    }, [id])
    return (
        <div>
            This is success page
            <Link href='/dashboard/myBooking'>My Booking</Link>
        </div>
    );
};

export default SuccessPage;