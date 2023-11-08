import React from 'react';
import { AiTwotoneDelete, AiTwotoneEdit } from 'react-icons/ai';

const myCars = () => {
    return (
        <div className=' bg-white px-6 py-10 h-[100vh] lg:px-8'>
            <table class="w-full">
                <thead>
                    <tr className='flex justify-between items-center'>
                        <th>Booking Date</th>
                        <th>User</th>
                        <th>Pickup Date</th>
                        <th>Return Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='flex justify-between items-center'>
                        <td>3 mar, 2012</td>
                        <td>The Eagles</td>
                        <td>12 may, 1972</td>
                        <td>21 may, 1972</td>
                        <td>$972</td>
                        <td>Pending</td>
                        <td className='flex gap-3'>
                            <AiTwotoneEdit size={20}/>
                            <AiTwotoneDelete size={20}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default myCars;