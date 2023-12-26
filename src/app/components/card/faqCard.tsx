'use client'
import { poppins } from '@src/util/font';
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FaqCard = ({question, answer}: {question: string, answer: string}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const boxVariant = {
      visible: { opacity: 1, x:0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, x: -100 }
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
    className='w-full rounded-[8px] cursor-pointer py-6 bg-gray-200 mb-2 px-5' onClick={toggle}>
        <h2 className={`text-secondary-100  ${poppins.className} text-[16px]  w-full ${isOpen && 'mb-2 pb-2 border-b border-white'}`}>{question}</h2>
       {isOpen && 
        <span className={`text-[14px] tracking-wide  text-gray-700 font-poppins ${poppins.className}`}>
            {answer}
        </span>
        }
    </motion.div>

    
  )
}

export default FaqCard