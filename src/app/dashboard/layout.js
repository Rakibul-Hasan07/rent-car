import DashboardNav from '@/components/navbar/DashboardNav';
import React from 'react';

const dashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-4 gap-8'>
            <div className='col-span-1 bg-pink-50 h-[100vh]'>
                <DashboardNav/>
            </div>
            <div className='col-span-3'>
                {children}
            </div>
        </div>
    );
};

export default dashboardLayout;