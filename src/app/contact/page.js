import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'

export default function contact() {
    return (
        <div className='bg-gray-50 h-[100vh] flex flex-col-reverse md:flex-row gap-4 justify-center items-center px-12'>
            <div className='flex-1'>
                <h1 className='text-xl'>Get in Touch</h1>
                <p className='max-w-[500px]'>lorem This handy tool helps you create dummy text for all your layout needs.
                    We are gradually </p>
                <div className='mt-6 flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <AiOutlinePhone className='border border-black rounded-full' size={30}/>
                        <span>
                            <h2>PHONE</h2>
                            <p>+8801846472428</p>
                        </span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiOutlineMail className='border border-black rounded-full' size={30}/>
                        <span>
                            <h2>EMAIL</h2>
                            <p>iamrakibulhasaan@gmail.com</p>
                        </span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <MdLocationPin className='border border-black rounded-full' size={30}/>
                        <span>
                            <h2>LOCATION</h2>
                            <p>Mohakhali, Dhaka</p>
                        </span>
                    </div>
                </div>
                <div className='flex gap-4 mt-6'>
                    <AiFillFacebook size={30}/>
                    <AiFillTwitterSquare size={30}/>
                    <AiFillInstagram size={30}/>
                    <AiFillLinkedin size={30}/>
                </div>
            </div>
            <div className='flex-1 my-8 md:my-0 '>
                <form>
                    <div className='flex justify-between gap-2 md:gap-0'>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full border-b-2 border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                                id="name"
                                placeholder="" />
                            <label
                                htmlFor="name"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]"
                            >Your Name
                            </label>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block min-h-[auto] border-b-2 border-black w-full bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                                id="email"
                                placeholder="" />
                            <label
                                htmlFor="email"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]"
                            >Email address
                            </label>
                        </div>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                            type="text"
                            className="peer block min-h-[auto] w-full border-b-2 border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                            id="description"
                            placeholder="" />
                        <label
                            htmlFor="description"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]"
                        >Say Something
                        </label>
                    </div>
                    <div className="text-center lg:text-left">
                        <button
                            type="submit"
                            className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"

                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
