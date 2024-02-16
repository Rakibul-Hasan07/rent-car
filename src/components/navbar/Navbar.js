'use client'
import Link from 'next/link';
import React, { Fragment, useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Context } from '@/contexts/context';
import Image from 'next/image';
import { MdDeleteForever, MdOutlineCheck } from 'react-icons/md';
import { FaChevronDown, FaSpinner } from 'react-icons/fa';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { userInfo, logOut, wishList } = useContext(Context)
    return (
        <div className='flex items-center justify-between bg-gray-200'>
            <Link href='/'><Image className='h-[50px] w-[50px] md:w-[100px] md:h-[100px] xl:h-[120px] xl:w-[120px]' src="/logo.png" height={100} width={150} alt="logo" /></Link>
            <div className='md:hidden'>
                {open ?
                    <AiOutlineClose onClick={() => setOpen(!open)} className='z-20 fixed right-5 top-5' size={20} /> :
                    <AiOutlineMenu onClick={() => setOpen(!open)} className='z-20 fixed right-5 top-5' size={20} />
                }
            </div>

            <div className={`p-4 backdrop-blur-lg z-10 pr-10 md:static fixed
             top-0 md:h-auto h-screen duration-500 ease-linear  ${!open ? 'right-[-100%]' : 'right-0'}`}>
                <div className='flex justify-between items-center'>
                    <div className='hidden md:block w-full sm:w-[300px] md:w-[60%] lg:w-[70%] relative'>
                        <input className='border-gray-200 border p-2 px-4 rounded-lg w-full' type='text' name='car' placeholder='Enter car name...' />
                        <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} />
                    </div>
                    <div className='flex gap-4 text-gray-500 text-[30px]'>
                        {userInfo?.image ? <Menu as="div" className="inline-block text-left">
                            <div>
                                <Menu.Button className="">
                                    <span><Image className='h-[30px] w-[30px] rounded-full' src={userInfo?.image} height={50} width={50} alt='user image' title={userInfo?.name} /> </span>
                                </Menu.Button>

                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-16 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? (
                                                        <MdOutlineCheck
                                                            className="mr-2 h-5 w-5 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <MdOutlineCheck
                                                            className="mr-2 h-5 w-5 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    {userInfo?.name}
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? (
                                                        <MdOutlineCheck
                                                            className="mr-2 h-5 w-5 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <MdOutlineCheck
                                                            className="mr-2 h-5 w-5 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    {userInfo?.email}
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? (
                                                        <MdOutlineCheck
                                                            className="mr-2 h-5 w-5 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <MdOutlineCheck
                                                            className="mr-2 h-5 w-5 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    <Link href='/my-profile'>Profile</Link>
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>

                        </Menu> : <BiUser />}
                        <Link href='/wishlist'>
                            <div className='relative'>
                                <FiHeart />
                                <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px]
                                             text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                                    {wishList?.length}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='container'>
                    <div className='flex flex-col md:flex-row w-fit gap-6 lg:gap-10 mx-auto font-medium py-4 text-black'>
                        <Link className='navbar_link relative' href='/'>Home</Link>
                        <Link className='navbar_link relative' href='/cars'>Cars</Link>
                        <Link className='navbar_link relative' href='/faq'>FAQ</Link>
                        <Link className='navbar_link relative' href='/about-us'>About</Link>
                        <Link className='navbar_link relative' href='/contact'>Contact</Link>
                        {
                            userInfo?.email
                                ?
                                userInfo?.role == 'admin' ? <Link className='navbar_link relative' href='/dashboard/monitoring'>Dashboard</Link> : <Link className='navbar_link relative' href='/dashboard/myBooking'>Dashboard</Link>
                                : <></>
                        }

                        {userInfo?.email ? <> <Link onClick={() => logOut()} className='navbar_link relative' href=''>LogOut</Link></> : <> <Link className='navbar_link relative' href='/auth/login'>Login</Link>
                            <Link className='navbar_link relative' href='/auth/register'>Register</Link></>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;