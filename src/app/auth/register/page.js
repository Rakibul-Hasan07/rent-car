'use client'
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../varriants';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { Context } from '@/contexts/context';


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [conditions, setConditions] = useState(false)
    const [registerError, setRegisterError] = useState('')
    const router = useRouter()
    const { loading, setLoading } = useContext(Context)

    const handleRegister = async (event) => {
        event.preventDefault();
        const image = event.target.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const uploadImage = await axios.post(
            `https://api.imgbb.com/1/upload?key=0908d2a66add35b8bb259f5e0708b76d`,
            formData
        )
        const userData = {
            image: uploadImage?.data?.data?.url,
            name,
            email,
            password,
            confirmPassword,
            conditions
        }
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const result = await response.json();
            if (result.status == 500) {
                setRegisterError(result?.error?.errors?.confirmPassword?.message)
            }
            else if (result.status == 400) {
                setRegisterError(result?.error?.error)
            }
            else if (result.status == 200) {
                toast.success('Register Successfully')
                setRegisterError('')
                router.push('/auth/login')
            }

        }
        catch (error) {
            console.error(error.message);
        }
    }
    return (
        <div>
            <section className="h-screen px-12">
                <div className="h-full">
                    {/* <!-- Left column container with background--> */}
                    <div
                        className="g-4 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <motion.div
                            variants={fadeIn("right", 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <Image
                                src={'/register.png'}
                                width={600}
                                height={350}
                                alt="Sample image" />
                        </motion.div>

                        {/* <!-- Right column container --> */}
                        <motion.div
                            variants={fadeIn("left", 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}
                            className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">

                            <form onSubmit={handleRegister}>
                                {/* <!-- Name input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="file"
                                        name='image'
                                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="name"
                                        placeholder="Name" />

                                </div>
                                {/* <!-- Name input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        name='name'
                                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="name"
                                        placeholder="Name" />
                                    <label
                                        htmlFor="name"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Name
                                    </label>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        name='email'
                                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="email"
                                        placeholder="Email address" />
                                    <label
                                        htmlFor="email"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Email address
                                    </label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        name='password'
                                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="password"
                                        placeholder="Password" />
                                    <label
                                        htmlFor="password"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Password
                                    </label>
                                </div>
                                {/* <!--Confirm Password input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        type="password"
                                        name='confirmPassword'
                                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="confirmPassword"
                                        placeholder="Confirm Password" />
                                    <label
                                        htmlFor="confirmPassword"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Confirm Password
                                    </label>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    {registerError && <div>
                                        <p className='text-red-500'>{registerError}</p>
                                    </div>}
                                </div>
                                <div className="mb-6 flex items-center justify-between">
                                    {/* <!-- Remember me checkbox --> */}
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            onClick={() => setConditions(!conditions)}
                                            name='condition'
                                            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-black outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                            type="checkbox"
                                            value=""
                                            id="condition" />
                                        <label
                                            className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                            htmlFor="condition">
                                            Agree with this terms and conditions
                                        </label>
                                    </div>
                                </div>

                                {/* <!-- Login button --> */}
                                <div className="text-center lg:text-left">
                                    {<button
                                        type="submit"
                                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Register
                                    </button>}

                                    {/* <!-- Register link --> */}
                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        You have already an account?
                                        <Link href="/auth/login" className='underline'>Login</Link>
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;