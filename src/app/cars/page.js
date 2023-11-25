'use client'
import CarsCard from '@/components/cars/CarsCard';
import Search from '@/components/search/Search';
import { Context } from '@/contexts/context';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const cars = () => {
    const [allCarData, setAllCarData] = useState([])
    const { setLoading } = useContext(Context)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get('/api/car/get-car');
                setAllCarData(response?.data?.data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setAllCarData, setLoading]);

    console.log(allCarData)
    return (
        <div className='mx-4'>
            <Search />
            <div className='flex items-start my-8'>
                <div className='w-40'>
                    <label htmlFor="brandName" className="block text-sm font-semibold leading-6 text-gray-900">
                        Brand Name
                    </label>
                    <div className="relative mt-2.5">
                        <select name="brandName" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Toyota</option>
                            <option>Lamborgini</option>
                            <option>Mercedes</option>
                            <option>Hundai</option>
                            <option>Rolls Royels</option>
                            <option>Ferrari</option>
                            <option>Rolls Royels</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='w-40 ml-3'>
                    <label htmlFor="sortPrice" className="block text-sm font-semibold leading-6 text-gray-900">
                        Sort Price
                    </label>
                    <div className="relative mt-2.5">
                        <select name="sortPrice" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>High To Low</option>
                            <option>Low To High</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='grid grid-cols-3 gap-5 ml-5 '>
                        {
                            allCarData?.map((carData, idx) => <div key={idx}><CarsCard carData={carData} /></div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cars;   