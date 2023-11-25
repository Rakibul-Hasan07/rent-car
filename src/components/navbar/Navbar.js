'use client'
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { useSession, signIn, signOut } from "next-auth/react"
import { AiOutlineClose, AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    return (
        <div className='flex items-center justify-between pt-5'>
            <div className='border-b border-gray-200 py-6'>
                <div className='container sm:flex justify-between items-center'>
                    <div className='font-bold text-4xl text-center pb-4 z-20 fixed md:static left-5 top-3  text-black'>Logo</div>

                </div>
            </div>
            <div className='md:hidden'>
                {open ?
                    <AiOutlineClose onClick={() => setOpen(!open)} className='z-20 fixed right-5 top-6' size={20} /> :
                    <AiOutlineMenu onClick={() => setOpen(!open)} className='z-20 fixed right-5 top-6' size={20} />
                }
            </div>

            <div className={`p-4 backdrop-blur-lg z-10 pr-28 md:static fixed
             top-0 md:h-auto h-screen duration-500 ease-linear  ${!open ? 'right-[-100%]' : 'right-0'}`}>
                <div className='flex justify-between items-center'>
                    <div className='hidden md:block w-full sm:w-[300px] md:w-[70%] relative'>
                        <input className='border-gray-200 border p-2 px-4 rounded-lg w-full' type='text' placeholder='Enter car name...' />
                        <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} />
                    </div>
                    <div className='flex gap-4 text-gray-500 text-[30px]'>
                        <BiUser />
                        <div className='relative'>
                            <FiHeart />
                            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px]
                                             text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                                0
                            </div>
                        </div>
                        <div className='relative'>
                            <AiOutlineShopping />
                            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px]
                                            text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                                0
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='flex flex-col md:flex-row w-fit gap-10 mx-auto font-medium py-4 text-black'>
                        <Link className='navbar_link relative' href='/'>Home</Link>
                        <Link className='navbar_link relative' href='/cars'>Cars</Link>
                        <Link className='navbar_link relative' href='#'>FAQ</Link>
                        <Link className='navbar_link relative' href='#'>About</Link>
                        <Link className='navbar_link relative' href='/contact'>Contact</Link>
                        <Link className='navbar_link relative' href='/dashboard'>Dashboard</Link>
                        {userInfo?.email ? <Link onClick={()=> localStorage.removeItem('userInfo')} className='navbar_link relative' href=''>LogOut</Link> : <> <Link className='navbar_link relative' href='/auth/login'>Login</Link>
                            <Link className='navbar_link relative' href='/auth/register'>Register</Link></>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;