'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { poppins } from '@src/util/font'
import React, { useEffect } from 'react'
import { Button, HeroContact } from '../../components'

export  function Hero() {
  const h1Variant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y:-60 }
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className='relative mb-12'>
        <div className='min-h-[550px] md:min-h-[480px] relative flex md:items-center flex-col pt-[72px] md:pt-0 md:justify-center hero-bg'>
        <div className='md:centered-main-container w-full '>
            <div className='flex flex-col px-6 md:px-0 '>
                <motion.h1 
                ref={ref}
                variants={h1Variant}
                initial="hidden"
                animate={control}
                transition={{ type: "linear" }}
                className={`text-[24px] md:text-[30px] font-[400] tracking-[0.4px] font-300 text-primary-300  ${poppins.className} `}>Welcome to</motion.h1>
                <h1 className={`${poppins.className} text-[36px] -mt-2 md:-mt-2 md:text-[42px] text-primary-300 font-[400]`}>Jenpeey <span className='font-semibold'>Hospital</span></h1>
                <p className={`${poppins.className} text-[17px] mt-2 w-[320px] text-gray-500 md:w-[450px] mb-2 `}>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                <Button text='View More ' variant={'tint'} size={'small'} />
            </div>
        </div>
        </div>
        <HeroContact />
    </div> 
  )
}
