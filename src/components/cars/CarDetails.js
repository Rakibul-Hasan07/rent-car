'use client'
import { Combobox, Transition } from '@headlessui/react';
import { addDays, format, parseISO } from 'date-fns';
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
import React, { Fragment, useContext, useState } from 'react';
import { Calendar } from 'react-date-range';
import { AiFillCheckCircle, AiOutlineCalendar, AiOutlineDown, AiOutlineUp, AiOutlineUsergroupAdd, AiTwotoneCar } from 'react-icons/ai';
import { BsDoorOpenFill, BsFuelPumpDieselFill } from 'react-icons/bs';
import { Context } from '@/contexts/context';
import axios from 'axios';
import toast from 'react-hot-toast';

const CarDetails = ({ detailsData }) => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [increaseDecrease, setIncreaseDecreace] = useState(1)
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const { _id, acAvailabe, acWorking, backupCamera, blutooth,
        bodyType, brandName, carColor, carConditon, carDescription,
        carEngineCapacity, carFuelType, carMaximumRentalDays, carMinimumRentalDays,
        carModelName, carNumberOfDoors, carSeatingCapacity, carTransmission, carYear,
        rentPricePerDay, phoneNo } = detailsData;

    const { userInfo, loading } = useContext(Context);

    const handleSelectStart = (date) => {
        const formattedStartDate = format(date, 'yyyy-MM-dd');
        setStartDate(formattedStartDate)

    }
    // date picker function end date
    const handleSelectEnd = (date) => {
        const formattedEndDate = format(date, 'yyyy-MM-dd');
        setEndDate(formattedEndDate)
    }

    const bookingInfo = {
        pickupDate: startDate,
        returnDate: endDate,
        brandName,
        district,
        city,
        street,
        price: increaseDecrease * rentPricePerDay,
        numberOfBookingDay: increaseDecrease,
        bookingDate: format(new Date(), 'yyyy-MM-dd'),
        userName: userInfo?.name,
        userEmail: userInfo?.email
    }
    const handleBooking = async () => {
        try {
            const response = await axios.post('/api/car/bookings', { cache: 'no-store' },
                bookingInfo
            )
            if (response.data.status == 200) {
                toast.success('Booking Successfull')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mx-20'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 bg-gray-200 p-4'>
                    <div className='mb-4'>
                        <h4>{brandName} {carYear}</h4>
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
                            {
                                detailsData?.images?.map((image, idx) => <SwiperSlide key={idx}><Image src={image} width={300} height={300} alt='cars' /></SwiperSlide>)
                            }
                        </Swiper>
                    </div>

                    {/* Description */}
                    <div className='my-4'>
                        <h5 className='text-xl'>Vehicle Description</h5>
                        <p>{carDescription}</p>
                    </div>

                    {/* Features */}
                    <div>
                        <h4 className='text-xl'>Features</h4>
                        <div className='grid grid-cols-4 gap-3 justify-between my-3'>
                            <div className='bg-white p-6 flex flex-col items-center'>
                                <AiOutlineUsergroupAdd size={20} />
                                <h5>Seating Capacity</h5>
                                <p>{carSeatingCapacity}</p>
                            </div>
                            <div className='bg-white p-6 flex flex-col items-center'>
                                <AiTwotoneCar size={20} />
                                <h5>Transmission</h5>
                                <p>{carTransmission}</p>
                            </div>
                            <div className='bg-white p-6 flex flex-col items-center'>
                                <BsFuelPumpDieselFill size={20} />
                                <h5>Fuel Type</h5>
                                <p>{carFuelType}</p>
                            </div>
                            <div className='bg-white p-6 flex flex-col items-center'>
                                <BsFuelPumpDieselFill size={20} />
                                <h5>Engine Capacity</h5>
                                <p>{carEngineCapacity}</p>
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
                                <p>{carNumberOfDoors} Doors</p>
                            </span>
                            <span className='flex justify-between'>
                                <p>Ac Available</p>
                                {acAvailabe ? <p>Yes</p> : <p>No</p>}
                            </span>
                            <span className='flex justify-between'>
                                <p>Ac Working</p>
                                {acWorking ? <p>Yes</p> : <p>No</p>}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 bg-pink-50 p-4'>
                    <h4>Booking Details</h4>

                    {/* date selection */}
                    <div className='flex justify-between my-4'>
                        {/* Pickup Date selection */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickUpDate">
                                PickUp Date
                            </label>
                            <div className="w-40">
                                <Combobox>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                value={startDate}
                                                id="pickUpDate"
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
                                                    format="dd/MM/yyyy"
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

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="returnUpDate">
                                Return Date
                            </label>
                            <div className="w-40">
                                <Combobox>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                value={endDate}
                                                id='returnUpDate'
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
                                                    format="dd/MM/yyyy"
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
                        <div className='flex items-center justify-between gap-6 mb-3'>
                            <p>District</p>
                            <input onChange={(e) => setDistrict(e.target.value)} className="shadow appearance-none border rounded w-64 py-2 
                                    px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="distict" placeholder='Type here........' />
                        </div>
                        <div className='flex items-center justify-between gap-6 mb-3'>
                            <p>City</p>
                            <input onChange={(e) => setCity(e.target.value)} className="shadow appearance-none border rounded w-64 py-2 
                                    px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="city" placeholder='Type here........' />
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <p>Street</p>
                            <input onChange={(e) => setStreet(e.target.value)} className="hadow appearance-none border rounded w-64 py-2 
                                    px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="street" placeholder='Type here........' />
                        </div>
                    </div>
                    {/* rental info */}
                    <div className='mt-4'>
                        <h4>Rental Info</h4>
                        <div className='bg-gray-200 p-4 mt-4 divide-y divide-blue-300'>
                            <div className='flex flex-col gap-2'>
                                <span className='flex justify-between'>
                                    <p>Minimum Rental Days</p>
                                    <p>{carMinimumRentalDays}</p>
                                </span>
                                <span className='flex justify-between'>
                                    <p>Maximum Rental Days</p>
                                    <p>{carMaximumRentalDays}</p>
                                </span>
                                <span className='flex justify-between'>
                                    <p>Price Per Day</p>
                                    <p>${rentPricePerDay}</p>
                                </span>
                            </div>

                            {/* days selection */}
                            <div>
                                <div className="mb-4 mt-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rentDays">
                                        Number Of Rental Days
                                    </label>
                                    <div className='relative'>
                                        <input className="relative shadow appearance-none border rounded w-full py-2 
                                    px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="rentDays" value={increaseDecrease} />
                                        <span className='absolute top-0 right-0'>
                                            <AiOutlineUp onClick={() => setIncreaseDecreace((pre) => pre + 1)} className='border' />
                                            <AiOutlineDown onClick={() => increaseDecrease > 1 ? setIncreaseDecreace(() => increaseDecrease - 1) : setIncreaseDecreace(() => increaseDecrease)} className='border' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <h4>Total Price</h4>
                                <p>${increaseDecrease * rentPricePerDay}</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <button onClick={handleBooking} className='bg-sky-200 w-full p-2 rounded-lg mt-8'>Book Now</button>
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