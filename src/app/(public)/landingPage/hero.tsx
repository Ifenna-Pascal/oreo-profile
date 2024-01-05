'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { poppins } from '@src/util/font'
import React, { useEffect } from 'react'
import { Button, HeroContact } from '../../components'
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export  function Hero() {
  const router = useRouter()
  const redirect = () => {
    router.push('/about')
  } 
  const h1Variant = {
    initial: { x: 100 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
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
    <div className='relative'>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
        <SwiperSlide>
        <div className='min-h-[85vh] md:min-h-[70vh] relative flex items-center flex-col justify-center hero-bg-3'>
        <div className='md:centered-main-container w-full '>
      
              <motion.div
                  ref={ref}
                  // variants={h1Variant}
                  // initial="initial"
                  // exit={'hidden'}
                  // animate={control}
                  // transition={{ type: "linear" }}
                  className='flex flex-col items-center md:items-start justify-center md:justify-start px-6 md:px-0 '>
                  <h1
                  className={`text-[24px] md:text-[30px] font-[400] pb-1 tracking-[0.4px] font-300 text-gray-200  ${poppins.className} `}>Welcome to</h1>
                  <h1 className={` text-[36px] -mt-2 md:-mt-2 md:text-[42px] text-center md:text-left text-gray-200 font-[400]`}>The Jenpeey <span className='font-semibold'> Diagnostic Center</span></h1>
                  <p className={` text-[14px] mt-2 w-[320px] text-gray-200  text-center md:text-left md:w-[450px] mb-2 `}>Jenpeey is changing the narrative in health diagnostic services by combining both excellent technology and human compassion</p>
                  <Button text='View More ' variant={'tint'} size={'small'} onClick={redirect} className="rounded-none"/>
              </motion.div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='min-h-[85vh] md:min-h-[70vh] relative flex md:items-center flex-col  md:pt-0 justify-center hero-bg-2'>
        <div className='md:centered-main-container w-full '>
      
        <motion.div
                  ref={ref}
                  // variants={h1Variant}
                  // initial="initial"
                  // exit={'hidden'}
                  // animate={control}
                  // transition={{ type: "linear" }}
                  className='flex flex-col items-center md:items-start justify-center md:justify-start px-6 md:px-0 '>
                  <h1
                  className={`text-[24px] md:text-[30px] font-[400] pb-1 tracking-[0.4px] font-300 text-gray-200  ${poppins.className} `}>Welcome to</h1>
                  <h1 className={` text-[36px] -mt-2 md:-mt-2 md:text-[42px] text-center md:text-left text-gray-200 font-[400]`}>The Jenpeey <span className='font-semibold'> Diagnostic Center</span></h1>
                  <p className={` text-[14px] mt-2 w-[320px] text-gray-200  text-center md:text-left md:w-[450px] mb-2 `}>Jenpeey is changing the narrative in health diagnostic services by combining both excellent technology and human compassion</p>
                  <Button text='View More ' variant={'tint'} size={'small'} onClick={redirect} className="rounded-none"/>
              </motion.div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='min-h-[85vh] md:min-h-[70vh] relative flex md:items-center flex-col  md:pt-0 justify-center hero-bg'>
        <div className='md:centered-main-container w-full '> 
        <motion.div
                  ref={ref}
                  // variants={h1Variant}
                  // initial="initial"
                  // exit={'hidden'}
                  // animate={control}
                  // transition={{ type: "linear" }}
                  className='flex flex-col items-center md:items-start justify-center md:justify-start px-6 md:px-0 '>
                  <h1
                  className={`text-[24px] md:text-[30px] font-[400] pb-1 tracking-[0.4px] font-300 text-gray-200  ${poppins.className} `}>Welcome to</h1>
                  <h1 className={` text-[36px] -mt-2 md:-mt-2 md:text-[42px] text-center md:text-left text-gray-200 font-[400]`}>The Jenpeey <span className='font-semibold'> Diagnostic Center</span></h1>
                  <p className={` text-[14px] mt-2 w-[320px] text-gray-200  text-center md:text-left md:w-[450px] mb-2 `}>Jenpeey is changing the narrative in health diagnostic services by combining both excellent technology and human compassion</p>
                  <Button text='View More ' variant={'tint'} size={'small'} onClick={redirect} className="rounded-none"/>
              </motion.div>
        </div>
        </div>
        </SwiperSlide>
        </Swiper>
        {/* <HeroContact /> */}
    </div> 
  )
}
