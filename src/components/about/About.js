'use client'
import React from 'react'
import Image from 'next/image';
import { MdOutlineMapsHomeWork, MdOutlineBuildCircle, MdOutlineDirectionsCar } from 'react-icons/md';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { invariant, motion } from 'framer-motion';
import { fadeIn } from '../../../varriants';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section flex items-center bg-pink-200 ' id="about">
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-12 items-center xl:justify-between'>
          {/* image */}
          <motion.div
            variants={fadeIn('up', '0.2')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              className='rounded-[20px]'
              src={'/aboutcar3.jpg'}
              width={550}
              height={500}
              alt=''
            />
          </motion.div>
          {/* text and stats */}
          <div className='flex-1 flex items-center xl:justify-center'>
            <div className='xl:max-w[517px]'>
              <motion.h2
                variants={fadeIn('up', '0.2')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className='font-semibold text-2xl'
              >Car services aimplified.</motion.h2>
              <motion.p
                variants={fadeIn('up', '0.2')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className='text-xl'
              >Rent, choose, and repair with ease. Our convenient locations, diverse car types, and reliable repair points ensure a seamless car experience.</motion.p>
              <div className='flex items-center gap-x-16 my-8'>
                {/* car types */}
                <motion.div
                  variants={fadeIn('up', '0.2')}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='flex flex-col w-[100px]'>
                  <MdOutlineDirectionsCar className='text-5xl text-accent mb-2' />
                  <div ref={ref} className='text-3xl font-black mb-2'>
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null} +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary'>
                    car <br />types
                  </div>
                </motion.div>
                {/* rental outlets */}
                <motion.div
                  variants={fadeIn('up', '0.2')}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='flex flex-col w-[100px]'>
                  <MdOutlineMapsHomeWork className='text-5xl text-accent mb-2' />
                  <div ref={ref} className='text-3xl font-black mb-2'>
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null} +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary'>
                    rental <br />outlets
                  </div>
                </motion.div>
                {/* repair points */}
                <motion.div
                  variants={fadeIn('up', '0.2')}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='flex flex-col w-[100px]'>
                  <MdOutlineBuildCircle className='text-5xl text-accent mb-2' />
                  <div ref={ref} className='text-3xl font-black mb-2'>
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null} +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary'>
                    repair <br />points
                  </div>
                </motion.div>
              </div>
              {/* btn */}
              <motion.button
                variants={fadeIn('up', '0.2')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className='hidden xl:block bg-accent hover:bg-accent-hover 
                  rounded-[10px] w-full h-16 uppercase font-medium text-white
                   tracking-[2px] text-[13px] max-w-[184px]'>see car</motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
