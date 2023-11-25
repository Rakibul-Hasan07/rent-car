"use client"
import CarsCard from './CarsCard'
import React, { Fragment, useState, useEffect, useContext } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { AiOutlineArrowDown, AiOutlineArrowRight, AiOutlineCheck } from 'react-icons/ai'
import Link from 'next/link'
import axios from "axios";
import { Context } from '@/contexts/context'

const people = [
  { id: 1, name: 'All Brand' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]


const Cars = () => {
  const [selectedBrand, setSelectedBrand] = useState(people[0])
  const [query, setQuery] = useState('')
  const { setLoading, carsData, setCarsData } = useContext(Context)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('/api/car/get-car');
        setCarsData(response?.data?.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setCarsData, setLoading]);


  return (
    <div className='mx-4'>
      <div className='flex items-start my-8'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Select Brand
          </label>
          <div className="w-52">
            <Combobox value={selectedBrand} onChange={setSelectedBrand}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                    displayValue={(person) => person.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <AiOutlineArrowDown
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
                  afterLeave={() => setQuery('')}
                >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {filteredPeople.length === 0 && query !== '' ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredPeople.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                  }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                    }`}
                                >
                                  <AiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
            <div />
          </div>
        </div>
        <div className='w-full'>
          <div className='grid grid-cols-3 gap-5 mx-5 '>
            {
              carsData?.map((carData, idx) => <div key={idx}><CarsCard carData={carData} /></div>)
            }
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
