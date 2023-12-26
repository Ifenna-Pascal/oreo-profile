'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { poppins } from '@src/util/font';
import React, { useEffect } from 'react'

type IProps = {
    icon: React.ReactNode;
    value: number;
    text: string;
}

export default function Results({ icon, value, text}: IProps) {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
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
      className='flex flex-col py-6 md:py-0 items-center justify-center'>
        {icon}
        <h2 className={`${poppins.className} text-[36px] md:text-[30px] py-2 text-white `}>{value}</h2>
        <span className={`${poppins.className} text-[16px] md:mt-1 text-white`}>{text}</span>
    </motion.div>
  )
}
