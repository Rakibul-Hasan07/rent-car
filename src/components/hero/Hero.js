'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeIn } from '../../../varriants'

export default function Hero() {
    return (
        <section className='flex h-screen xl:h-[90vh] bg-[#b2b7c2]/10' id='home'>
            <div className='container mx-auto h-full xl:pt-10'>
                {/* text and image wrapper */}
                <div className='flex flex-col justify-center items-center xl:flex-row xl:justify-start h-full'>
                    <div className='text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0'>
                        <motion.h1
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.6 }}
                            className='h1'>Explore the Finest <span className='text-accent'>Global</span>{' '} Offers</motion.h1>
                        <motion.p
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.6 }}
                            className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>Find your ideal ride for any adventure with our drivers range of affordable and dependable car rentals</motion.p>
                        <motion.div
                            variants={fadeIn('down', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.8 }}
                            className='flex gap-x-3 justify-center xl:justify-start'>
                            <button className='btn-cta'>
                                <Image src='/apple1.png' width={132} height={36} alt='' />
                            </button>
                            <button className='btn-cta'>
                                <Image src={'/google.png'} width={132} height={36} alt='' />
                            </button>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.6 }}
                        className='relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px]
                     xl:max-h-[542px] xl:absolute xl:-right-[70px] min-[1680px] '>
                        <Image src='/cars.png' fill alt='' priority style={{ objectFit: 'contain' }} />
                    </motion.div>
                </div>
            </div>
            {/* {
                searchActive ?
                    <div className='fixed top-[80px] z-10 w-full max-w-[1920px]'>
                        <Search></Search>
                    </div> :
                    <div className='-mt-12 w-full max-w-[1300px] mx-auto'>
                        <Search></Search>
                    </div>
            } */}
        </section>
    )
}
