'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { poppins } from '@src/util/font'
import React, { useEffect } from 'react'

type IProps = {
    title1: string;
    title2: string;
    content: string;
    color?: string
}

export const Heading = ({title1,title2, content, color}: IProps) => {
  const boxVariant = {
    visible: { opacity: 1, x:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 100 }
  };

  const lineVariant = {
    visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -100 }
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
    <div className='flex'>
            <motion.div 
              ref={ref}
              variants={lineVariant}
              initial="hidden"
              animate={control}
              transition={{ type: "linear" }}
            className='w-[3px] h-[22px] mt-2 bg-secondary-100'>
            </motion.div>
            <motion.div 
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                transition={{ type: "linear" }}
                className='flex flex-col ml-4'>
                <h2 className={`text-secondary-100 text-[24px] font-semibold ${poppins.className}`}>{title1} <span className={color || 'text-gray-600'}>{title2}</span> </h2>
                <p className={`text-[14px] mb-4  font-[400] tracking-[0.4px]  font-300 ${color || 'text-gray-500 '} ${poppins.className} `}>{content}</p>
            </motion.div>
        </div>
  )
}
