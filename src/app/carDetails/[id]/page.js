"use client"
import CarDetails from '@/components/cars/CarDetails';
import { Context } from '@/contexts/context';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const page = ({ params }) => {
    const { loading, setLoading } = useContext(Context)
    // const detailsData = carsData.find((carData) => carData?._id === params.id)
    // console.log(carsData)
    const [detailsData, setDetailsData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`/api/car/get-car/${params?.id}`);
                setDetailsData(response?.data?.data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params?.id, setLoading]);
    console.log(detailsData)
    return (
        <div>
            <CarDetails detailsData={detailsData} />
        </div>
    );
};

export default page;