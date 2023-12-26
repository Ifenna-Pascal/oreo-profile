'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { poppins } from '@src/util/font'
import React, { useEffect } from 'react'
import { Button, HeroContact } from '../../components'
import { useRouter } from "next/navigation";

export  function Hero() {
  const router = useRouter()
  const redirect = () => {
    router.push('/about')
  } 
  const h1Variant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
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
            <motion.div
                 ref={ref}
                 variants={h1Variant}
                 initial="hidden"
                 animate={control}
                 transition={{ type: "linear" }}
            className='flex flex-col  md:-mt-20 px-6 md:px-0 '>
                <h1
                className={`text-[24px] md:text-[30px] font-[400] pb-1 tracking-[0.4px] font-300 text-gray-200  ${poppins.className} `}>Welcome to</h1>
                <h1 className={` text-[36px] -mt-2 md:-mt-2 md:text-[42px] text-gray-200 font-[400]`}>Jenpeey <span className='font-semibold'> Diagnostic Center</span></h1>
                <p className={` text-[14px] mt-2 w-[320px] text-gray-200 md:w-[450px] mb-2 `}>Jenpeey is changing the narrative in health diagnostic services by combining both excellent technology and human compassion</p>
                <Button text='View More ' variant={'tint'} size={'small'} onClick={redirect} />
            </motion.div>
        </div>
        </div>
        <HeroContact />
    </div> 
  )
}
