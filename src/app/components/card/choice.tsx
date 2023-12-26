'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react'
type IProps = {
    header: string;
    content:  string;
    icon: React.ReactNode
}

const Choice = ({icon, header, content}: IProps) => {

      const headerVariant = {
        visible: { opacity: 1, y:0, transition: { duration: 0.5} },
        hidden: { opacity: 0, y: 120 }
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
    variants={headerVariant}
    initial="hidden"
    animate={control}
    transition={{ type: "linear" }}
    className='flex'>
        <div>
            {icon}
        </div>
       <div className='flex flex-col ml-2 mb-6 md:mr-4 pb-4'>
       <h1 className='text-[#b4b4b5]  font-semibold text-[16px]'>{header}</h1>
        <p className='text-[#b4b4b5] text-[14px]'> {content}</p>
       </div>
    </motion.div>
  )
}

export default Choice