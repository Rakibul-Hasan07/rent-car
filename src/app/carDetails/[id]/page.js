"use client"
import CarDetails from '@/components/cars/CarDetails';
import Loader from '@/components/loader/Loader';
import { Context } from '@/contexts/context';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const CarDetailsWithId = ({ params }) => {
    const { loading, setLoading } = useContext(Context)
    const [detailsData, setDetailsData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`/api/car/get-car/${params?.id}`, { cache: 'no-store' });
                setDetailsData(response?.data?.data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params?.id, setLoading]);
    return (
        <div>
            {
                loading ? <Loader /> : <CarDetails detailsData={detailsData} />}
        </div>
    );
};

export default CarDetailsWithId;