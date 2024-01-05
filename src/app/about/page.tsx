'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react'
import {Heading, HeroHeader } from '../components'
import { poppins } from '@src/util/font'
import Image from 'next/image'
import { images } from '@src/assets'
import Department from "../components/card/department";
import { services } from "@src/__mockdata__/results";
import ChoicesAlt from "../components/choices";


const About = () => {
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
  return (
    <div>
        <HeroHeader header1='About' image="about-bg" header2='Jenepey' />  
        <div className='py-16 flex px-5 md:px-0  justify-between flex-col md:flex-row md:centered-main-container md:items-center'>
          <div className='md:basis-[50%] '>
          <Heading title1='About' title2='Jenpeey' content='who we are & what we offer' />
          <motion.span
            className={`${poppins.className} text-gray-400 text-[12px] md:text-[14px] w-full  md:w-[520px] py-1 md:tracking-wide`}>
            Welcome to Jenpeey Diagnostic Services, where our commitment is to redefine the landscape of health diagnostic services. 
            Founded with a vision to revolutionize the industry, we pride ourselves on seamlessly integrating cutting-edge technology with unwavering human 
            compassion, setting a new standard in service delivery.
            <br />
            <br />
            At Jenpeey Diagnostic Services, we understand the significance of accurate and timely diagnostic information in healthcare decision-making. That&apos;s why we have meticulously crafted an environment that fosters innovation,
             leveraging the latest advancements in medical technology to ensure precision and reliability in our diagnostic offerings.
             <br /> <br />
             Our dedicated team of skilled professionals, comprising experienced medical practitioners and compassionate support staff, is at the heart of our commitment to delivering unparalleled diagnostic services. Beyond state-of-the-art equipment and technology, it&apos;s our human touch that distinguishes us. We prioritize patient comfort, empathy, and understanding, creating an atmosphere 
             where individuals feel cared for and supported throughout their diagnostic journey.
          </motion.span>
          </div>
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            transition={{ type: "linear" }}
            className='flex items-end py-8 justify-center md:basis-[50%]'>
              <Image src={images.aboutImg} alt='about-us' height={360} width={500} className='md:h-[360px] rounded-[10px] md:w-[500px]' />
          </motion.div>
        </div>
        <ChoicesAlt />  
        <div className='md:centered-main-container px-5  md:px-0 py-16'>
          <Heading title1='Most' title2='Popular Services' content='what we do best...' />
        <div className='py-6 centered-main-container grid grid-col gap-y-8 lg:grid-cols-3 md:gap-8'>      
          {services.map((service, index) => (
            <Department key={index} img={service.img.src} name={service.name} position={service.value.slice(0,100)} />
          ))}
        </div>
        </div>
      
    </div>
  )
}

export default About