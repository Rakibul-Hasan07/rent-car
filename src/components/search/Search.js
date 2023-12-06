'use client'
import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { AiOutlineCalendar } from 'react-icons/ai'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { addDays } from 'date-fns';
import axios from 'axios';


export default function Search({ getSearchResults }) {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  // date picker function start date
  const handleSelectStart = (date) => {
    setStartDate(date)

  }
  // date picker function end date
  const handleSelectEnd = (date) => {
    setEndDate(date)
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`api/car/get-car/search?city=${selectedCity}&area=${selectedArea}`)
    getSearchResults(response?.data?.data)
    console.log(response?.data?.data)
  }

  return (
    <div className='flex flex-col items-center justify-center my-8 mx-4'>
      <h3 className='text-center my-6 text-2xl font-bold text-gray-400'>Search here what is your need!</h3>
      <div>
        <form onSubmit={handleSearch} className='grid sm:grid-cols-2 lg:grid-cols-3 xl:flex gap-1 md:gap-3 justify-center items-center'>
          {/* City selection */}

          <div className='w-72 xl:w-60 mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              City
            </label>
            <div className="relative">
              <select onChange={(e) => setSelectedCity(e.target.value)} name="brandName" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Dhaka</option>
                <option>Rajshahi</option>
                <option>Khulna</option>
                <option>Sirajganj</option>
                <option>Bogura</option>
                <option>Rangpur</option>
                <option>Gazipur</option>
                <option>Tangail</option>
                <option>Pabna</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          {/* Area selection */}

          <div className='w-72 xl:w-60 mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Area
            </label>
            <div className="relative">
              <select onChange={(e) => setSelectedArea(e.target.value)} name="areaName" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Kamarkhand</option>
                <option>Belkuchi</option>
                <option>Kazipur</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          {/* Pickup Date selection */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              PickUp Date
            </label>
            <div className="w-72 xl:w-60">
              <Combobox>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Return Date
            </label>
            <div className="w-72 xl:w-60">
              <Combobox>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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

          {/* Submit button  */}
          <div>
            <button type='submit' className='bg-sky-500 w-72 xl:w-60 rounded-lg p-3 mt-3 text-white text-sm'>Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}
