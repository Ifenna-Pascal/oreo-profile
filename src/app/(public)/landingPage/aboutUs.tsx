'use client'
import { Button, Heading } from '@src/app/components'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from '@src/assets'
import { poppins } from '@src/util/font'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

export const AboutUs = () => {
  const router = useRouter()
  const boxVariant = {
    visible: { opacity: 1, y:0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y:100 }
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
  const redirect = () => {
    router.push('/about')
  } 
  return (
    <div className='mt-12 pt-12 pb-16 px-5 centered-main-container'>
        <div className='flex md:flex-row flex-col items-center py-4  md:py-6'>
          <motion.div 
                  ref={ref}
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                  transition={{ type: "linear" }}
                  className='flex items-end cursor-pointer md:basis-[55%]'>
                <Image src={images.aboutImg} alt='about-us' height={350} width={400} className='md:h-[400px]  md:w-[550px]' />
            </motion.div>
            <motion.div 
                ref={ref}
                variants={boxVariant}
                 initial="hidden"
                 animate={control}
                transition={{ type: "linear" }}
                className='flex pt-6 md:pt-0 md:basis-[45%] flex-col'>
                <Heading title1='About' title2='Us' content='Quick description about us' /> 
                <p className={`${poppins.className} text-gray-600 text-[14px]  md:w-[520px] py-1 tracking-wide`}>
                Welcome to Jenpeey Diagnostic Services, where our commitment is to redefine the landscape of health diagnostic services. 
                Founded with a vision to revolutionize the industry, we pride ourselves on seamlessly integrating cutting-edge technology with unwavering human 
                compassion, setting a new standard in service delivery.
                <br /> <br />
                At Jenpeey Diagnostic Services, we understand the significance of accurate and timely diagnostic information in healthcare decision-making. That&apos;s why we have meticulously crafted an environment that fosters innovation, 
                leveraging the latest advancements in medical technology to ensure precision and reliability in our diagnostic offerings.
                </p>
                <Link href={'/about'}>
                <Button text='View More' spacing={'top'} variant={'tint'} size={'small'} className='rounded-none' onClick={redirect} />
                </Link>
                </motion.div>
            </div>
    </div>
  )
} 