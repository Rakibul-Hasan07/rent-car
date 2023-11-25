'use client'
import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { AiOutlineArrowDown, AiOutlineCalendar, AiOutlineCheck } from 'react-icons/ai'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

export default function Search() {
  const [selectedCity, setSelectedCity] = useState(people[0])
  const [selectedArea, setSelectedArea] = useState(people[3])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
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

  // date picker function start date
  const handleSelectStart = (date) => {
    setStartDate(date)

  }
  // date picker function end date
  const handleSelectEnd = (date) => {
    setEndDate(date)
  }

  return (
    <div className='my-8 mx-4'>
      <h3 className='text-center my-6 text-2xl font-bold text-gray-400'>Search here what is your need!</h3>
      <form className='flex gap-4 items-center'>
        {/* City selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Select City
          </label>
          <div className="w-72">
            <Combobox value={selectedCity} onChange={setSelectedCity}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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

        {/* Area selection */}
        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Select Area
          </label>
          <div className="w-72">
            <Combobox value={selectedArea} onChange={setSelectedArea}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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

        {/* Pickup Date selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            PickUp Date
          </label>
          <div className="w-72">
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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Return Date
          </label>
          <div className="w-72">
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

        {/* Submit button  */}
        <div>
        <button type='submit' className='bg-sky-500 rounded-lg p-4 mt-3 text-white text-sm'>Search</button>
        </div>
      </form>
    </div>
  )
}
