import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <section class="flex items-center bg-stone-100 lg:h-screen font-poppins dark:bg-gray-800 ">
            <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div class="px-4 mb-10 md:text-center md:mb-20">
                    <p class="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400">
                        About Us
                    </p>
                    <h2 class="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
                        What we do
                    </h2>
                    <div class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                        <div class="flex-1 h-2 bg-blue-200">
                        </div>
                        <div class="flex-1 h-2 bg-blue-400">
                        </div>
                        <div class="flex-1 h-2 bg-blue-300">
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap items-center">
                    <div class="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
                        <h2 class="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                            We are providing a better facility
                        </h2>
                        <p class="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            Welcome to our company! We are a team of passionate individuals dedicated to providing
                            excellent services to our customers. Our mission is to growup our business and provide a better services our customers.
                        </p>
                        <ul class="mb-10">
                            <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                                <span class="mr-3 text-blue-500 dark:text-blue-400 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg>
                                </span>
                                Experienced Drivers
                            </li>
                            <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                                <span class="mr-3 text-blue-500 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg>
                                </span>
                                Branded Car
                            </li>
                            <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                                <span class="mr-3 text-blue-500 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg>
                                </span>
                                Support Team
                            </li>
                            <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                                <span class="mr-3 text-blue-500 dark:text-blue-400 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg>
                                </span>
                                Successful Growth for business
                            </li>
                        </ul>
                        <a href="#"
                            class="px-4 py-2 text-gray-100 bg-blue-500 rounded-md dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                            Learn more
                        </a>
                    </div>
                    <div class="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
                        <Image src='/aboutus.jpg' width={600} height={600} alt='aboutus' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;