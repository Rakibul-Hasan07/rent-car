import CarDetails from '@/components/cars/CarDetails';
import React from 'react';

const page = ({params}) => {
    console.log(params.id)
    return (
        <div>
            <CarDetails/>
        </div>
    );
};

export default page;