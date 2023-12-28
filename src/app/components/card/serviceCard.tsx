'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { poppins } from '@src/util/font';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

type IProps = {
    title: string;
    content: string;
    img: string;
    href: string;
}

export const ServiceCard = ({ title, content, img, href }: IProps) => {
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
      className='flex flex-col items-center justify-center md:items-start md:justify-start mb-8'>
        <div className='mb-7 relative '>
        <Image src={img} alt="service_img" width={60} height={60}  className='bg-blend-lighten' />
        </div>
        <h1 className={`${poppins.className} font-bold text-[17px] text-primary-300 mb-1`}>{title}</h1>
        <span className={`py-3 text-[14px] text-center md:text-left text-gray-500 w-[350px] ${poppins.className} `}>{content.slice(0,100)}...</span>
        <Link href={href} className={`${poppins.className} text-secondary-50 font-400 text-[14px] pt-2`}> View More </Link>
    </motion.div>
  )
}
