'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { poppins } from '@src/util/font';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from '..';
type IProps = {
    img: string;
    position: string;
    name: string;
}

 const Department= ({img, position, name}:IProps) => {
    const boxVariant = {
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
      <motion.div 
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ type: "linear" }}
      className='rounded-[10px] w-full border-[0.2px] shadow-sm  border-gray-100'>
          <Image src={img} width={200} height={160} alt='team_member' className='w-full h-[160px] object-cover rounded-t-[10px]' />
          <div className='py-6 px-6 flex flex-col'>
              <h2 className={`${poppins.className} uppercase text-primary-300 pb-2 font-poppins tracking-wide font-[500]`}>{name}</h2>
              <span  className={`${poppins.className} text-[14px] font-poppins tracking-wider text-gray-600 pb-4`}>{position}</span>
          <Button text='View More' variant={'outlined_text'} size={'xs'} />
          </div>
      </motion.div>
    )
  }

  export default Department