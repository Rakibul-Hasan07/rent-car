"use client"
import CarsCard from './CarsCard'
import React, { useEffect, useContext, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'
import axios from "axios";
import { Context } from '@/contexts/context'


const Cars = () => {
  const { setLoading } = useContext(Context)
  const [carsData, setCarsData] = useState([])
  const [brand, setBrand] = useState('')

  console.log(brand)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`/api/car/get-car?brand=${brand}`);
        setCarsData(response?.data?.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [brand, setLoading]);


  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col justify-center lg:flex-row items-center lg:items-start my-4 md:my-8'>
          <div className='w-72 xl:w-60'>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Brand Name
            </label>
            <div className="relative mt-2.5">
              <select onChange={(e) => setBrand(e.target.value)} name="brandName" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
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
          <div className='w-full'>
            <div className='grid grid-cols-1 justify-center items-center md:grid-cols-2 xl:grid-cols-3 gap-5 mx-5 '>
              {
                carsData?.map((carData, idx) => <div key={idx}><CarsCard carData={carData} /></div>)
              }
            </div>
          </div>
        </div>
      </div>
      <Link href='/cars'>
        <div className='flex justify-end items-center mr-6 mb-6 hover:text-red-700'>
          <button className='rounded-lg p-2 text-lg'>View More</button>
          <AiOutlineArrowRight />
        </div>
      </Link>
    </div>
  )
}

export default Cars;
