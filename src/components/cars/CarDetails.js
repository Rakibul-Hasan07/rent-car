'use client'
import { Combobox, Transition } from '@headlessui/react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './car.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { Calendar } from 'react-date-range';
import { AiFillCheckCircle, AiOutlineCalendar, AiOutlineDown, AiOutlineUp, AiOutlineUsergroupAdd, AiTwotoneCar } from 'react-icons/ai';
import { BsDoorOpenFill, BsFuelPumpDieselFill } from 'react-icons/bs';
const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

const CarDetails = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [increaseDecrease, setIncreaseDecreace] = useState(1)
    const [query, setQuery] = useState('')
    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    const handleSelectStart = (date) => {
        setStartDate(date)

    }
    // date picker function end date
    const handleSelectEnd = (date) => {
        setEndDate(date)
    }

    return (
        <div className='mx-20'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 bg-gray-200 p-4'>
                    <div className='mb-4'>
                        <h4>Toyota 2021</h4>
                        <p>Bangladesh</p>
                    </div>

                    {/* carousel */}
                    <div className='border border-black'>
                        <Swiper
                            pagination={{
                                type: 'progressbar',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><Image src='/cars.png' width={300} height={300} alt='cars'/></SwiperSlide>
                            <SwiperSlide><Image src='/cars.png' width={300} height={300} alt='cars'/></SwiperSlide>
                            <SwiperSlide><Image src='/cars.png' width={300} height={300} alt='cars'/></SwiperSlide>            
                        </Swiper>
                    </div>

                    {/* Description */}
                    <div className='my-4'>
                        <h5 className='text-xl'>Vehicle Description</h5>
                        <p>This is Toyota car its is very good car</p>
                    </div>

                    {/* Features */}
                    <div>
                        <h4 className='text-xl'>Features</h4>
                        <div className='grid grid-cols-4 gap-3 justify-between my-3'>
                            <div className='bg-white p-6 flex flex-col items-center'>
                                <AiOutlineUsergroupAdd size={20}/>
                                <h5>Seating Capacity</h5>
                                <p>5</p>
                            </div>
                            <div className='bg-white p-6 flex flex-col items-center'>
                                <AiTwotoneCar size={20} />
                                <h5>Transmission</h5>
                                <p>Automatic</p>
                            </div>
                            <div className='bg-white p-6 flex flex-col items-center'>
                                <BsFuelPumpDieselFill size={20}/>
                                <h5>Fuel Type</h5>
                                <p>Galosine</p>
                            </div>
                            <div className='bg-white p-6 flex flex-col items-center'>
                                <BsFuelPumpDieselFill size={20}/>
                                <h5>Engine Capacity</h5>
                                <p>5L</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-white p-4'>
                            <span className='flex gap-2 items-center'>
                                <AiFillCheckCircle />
                                <p>Blutooth.</p>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <AiFillCheckCircle />
                                <p>Keyless Entry.</p>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <AiFillCheckCircle />
                                <p>Backup Camera.</p>
                            </span>
                        </div>
                        <div className='bg-white p-4'>
                            <span className='flex items-center gap-2'>
                                <BsDoorOpenFill />
                                <p>4 Doors</p>
                            </span>
                            <span className='flex justify-between'>
                                <p>Ac Available</p>
                                <p>Yes</p>
                            </span>
                            <span className='flex justify-between'>
                                <p>Ac Working</p>
                                <p>Yes</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 bg-pink-50 p-4'>
                    <h4>Booking Details</h4>

                    {/* date selection */}
                    <div className='flex justify-between my-4'>
                        {/* Pickup Date selection */}
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                PickUp Date
                            </label>
                            <div className="w-40">
                                <Combobox>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                placeholder='Click to calendar icon'
                                                disabled
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <AiOutlineCalendar
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto
                 rounded-md bg-white py-1 text-base 
                 shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                <Calendar
                                                    date={new Date()}
                                                    onChange={handleSelectStart}
                                                    minDate={addDays(new Date(), 0)}
                                                />
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                                <div />
                            </div>
                        </div>
                        {/* Return date selection */}

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Return Date
                            </label>
                            <div className="w-40">
                                <Combobox>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                placeholder='Click to calendar icon'
                                                disabled
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <AiOutlineCalendar
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto
                 rounded-md bg-white py-1 text-base 
                 shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                <Calendar
                                                    onChange={handleSelectEnd}
                                                    date={new Date()}
                                                    minDate={addDays(new Date(), 0)}
                                                />
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                                <div />
                            </div>
                        </div>
                    </div>
                    {/* location  */}
                    <div>
                        <h4 className='mb-4'>Address/Location</h4>
                        <div>
                            <p>District</p>
                        </div>
                        <div>
                            <p>City</p>
                        </div>
                        <div>
                            <p>Street</p>
                        </div>
                    </div>
                    {/* rental info */}
                    <div className='mt-4'>
                        <h4>Rental Info</h4>
                        <div className='bg-gray-200 p-4 mt-4 divide-y divide-blue-300'>
                            <div className='flex flex-col gap-2'>
                                <span className='flex justify-between'>
                                    <p>Minimum Rental Days</p>
                                    <p>1</p>
                                </span>
                                <span className='flex justify-between'>
                                    <p>Maximum Rental Days</p>
                                    <p>30</p>
                                </span>
                                <span className='flex justify-between'>
                                    <p>Price Per Day</p>
                                    <p>$300</p>
                                </span>
                            </div>

                            {/* days selection */}
                            <div>
                                <div class="mb-4 mt-2">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Number Of Days
                                    </label>
                                    <div className='relative'>
                                        <input className="relative shadow appearance-none border rounded w-full py-2 
                                    px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="username" value={increaseDecrease} />
                                        <span className='absolute top-0 right-0'>
                                            <AiOutlineUp onClick={() => setIncreaseDecreace((pre) => pre + 1)} className='border' />
                                            <AiOutlineDown onClick={() => setIncreaseDecreace((pre) => pre - 1)} className='border' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <h4>Total Price</h4>
                                <p>${increaseDecrease * 3}</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <button className='bg-sky-200 w-full p-2 rounded-lg mt-8'>Book Now</button>
                    </div>
                </div>
            </div>
            <div>
                <h4>Car Reviews</h4>
                <p>No reviews Available</p>
            </div>
        </div>
    );
};

export default CarDetails;