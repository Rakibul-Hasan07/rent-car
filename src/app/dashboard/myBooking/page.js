import React from 'react';

const myBooking = () => {
    return (
        <div className=' bg-white px-6 py-10 h-[100vh] lg:px-8'>
            
            <table class="w-full">
                <thead>
                    <tr className='flex justify-between'>
                        <th>Booking Date</th>
                        <th>User</th>
                        <th>Pickup Date</th>
                        <th>Return Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='flex justify-between'>
                        <td>3 mar, 2012</td>
                        <td>The Eagles</td>
                        <td>12 may, 1972</td>
                        <td>21 may, 1972</td>
                        <td>$972</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default myBooking;