'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button, Heading } from '@src/app/components'
import { images } from '@src/assets'
import { poppins } from '@src/util/font'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";

export function Choice() {
  const router = useRouter()
  const redirect = () => {
    router.push('/contact')
  } 
  const boxVariant = {
    visible: { opacity: 1, y:0, transition: { duration: 0.8} },
    hidden: { opacity: 0, y: 120 }
  };
  const headerVariant = {
    visible: { opacity: 1, y:0, transition: { duration: 0.5} },
    hidden: { opacity: 0, y: -120 }
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
<div>
<div className='bg-[#2d3035] px-5 md:px-0 w-full py-16 md:pb-16 pb-20'>
        <div className='w-full centered-main-container flex md:flex-row flex-col items-center justify-between'>
            <div className='flex mb-8 md:mb-0 flex-col'>
                <Heading title1='Why' title2='Choose Us'  content='Quick Description text here...' />
                <motion.h1 
                 ref={ref}
                 variants={headerVariant}
                 initial="hidden"
                 animate={control}
                 transition={{ type: "linear" }}
                className={`${poppins.className} md:w-[500px] text-[28px] md:text-[34px] text-[#b4b4b5] md:py-2`}>
                      Our goal is provide adequate health care.
                </motion.h1>
                <motion.p 
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                transition={{ type: "linear" }}
                className={`text-[#b4b4b5] ${poppins.className} text-[15px] leading-[24px] mb-4 lg:py-0  pt-3 md:w-[500px]`}>
                 Whether you're seeking routine check-ups, specialized diagnostics, or preventive screenings, Jenpeey Diagnostic Services is your trusted partner in health. Join us on a journey where technology meets compassion,
                  and let's redefine the future of health diagnostics together. Your well-being is our priority.
                </motion.p>
                <Button onClick={redirect} text='Contact Us' variant={'tint'} size={'medium'} />
            </div>
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                transition={{ type: "linear" }}
            >
            <Image src={images.choice} width={450} height={600} alt='chice image' />
            </motion.div>
        </div>
    </div>
 
</div>
  )
}
