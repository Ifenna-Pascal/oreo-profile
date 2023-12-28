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
    <div className='pt-28 md:pt-32 pb-16 px-5 centered-main-container'>
        <Heading title1='About' title2='Us' content='Quick description about us' />
        <div className='flex md:flex-row flex-col items-center py-4  md:py-6'>
        <motion.div 
                ref={ref}
                variants={boxVariant}
                 initial="hidden"
                 animate={control}
                transition={{ type: "linear" }}
                className='flex items-end cursor-pointer md:basis-[50%]'>
              <Image src={images.aboutImg} alt='about-us' height={300} width={440} className='hmd:-[300px] rounded-[10px] md:w-[440px]' />
          </motion.div>
                <motion.div 
                ref={ref}
                variants={boxVariant}
                 initial="hidden"
                 animate={control}
                transition={{ type: "linear" }}
                className='flex pt-6 md:pt-0 md:basis-[50%] flex-col'>
                <p className={`${poppins.className} text-gray-600 text-[14px]  md:w-[520px] py-1 tracking-wide`}>
                Welcome to Jenpeey Diagnostic Services, where our commitment is to redefine the landscape of health diagnostic services. 
            Founded with a vision to revolutionize the industry, we pride ourselves on seamlessly integrating cutting-edge technology with unwavering human 
            compassion, setting a new standard in service delivery.
            <br /> <br />
            At Jenpeey Diagnostic Services, we understand the significance of accurate and timely diagnostic information in healthcare decision-making. That&apos;s why we have meticulously crafted an environment that fosters innovation, 
            leveraging the latest advancements in medical technology to ensure precision and reliability in our diagnostic offerings.
                </p>

                {/* <p className={`text-[14px] font-[400] py-3 tracking-[0.4px] font-300 text-gray-600  ${poppins.className} `}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and goingered the undoubtable source
                </p>
                <p className={`text-[14px] font-[400] py-3 tracking-[0.4px] font-300 text-gray-600  ${poppins.className} `}>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                </p> */}
                <Link href={'/about'}>
                <Button text='View More' spacing={'top'} variant={'outlined'} size={'small'} onClick={redirect} />

                </Link>
                </motion.div>
            </div>
    </div>
  )
}
