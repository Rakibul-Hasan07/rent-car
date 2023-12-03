import DashboardNav from '@/components/navbar/DashboardNav';
import React from 'react';

const dashboardLayout = ({ children }) => {
    return (
        <div className='lg:grid lg:grid-cols-4 lg:gap-8'>
            <div className='lg:col-span-1 bg-pink-50 min-h-[100vh]'>
                <DashboardNav/>
            </div>
            <div className='lg:col-span-3'>
                {children}
            </div>
        </div>
    );
};

export default dashboardLayout;