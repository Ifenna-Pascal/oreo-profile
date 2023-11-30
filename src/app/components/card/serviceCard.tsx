import { poppins } from '@src/util/font';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type IProps = {
    title: string;
    content: string;
    img: string;
    href: string;
}

export const ServiceCard = ({ title, content, img, href }: IProps) => {
  return (
    <div className='flex flex-col mb-8'>
        <div className='mb-7 relative '>
        {/* <div className='h-[50px] w-[50px] absolute left-2 rounded-[24px] bg-primary-50 bg-blend-screen '></div> */}
        <Image src={img} alt="service_img" width={60} height={60}  className='bg-blend-lighten' />
        </div>
        <h1 className={`${poppins.className} font-bold text-[17px] text-primary-300 mb-1`}>{title}</h1>
        <span className={`py-3 text-[14px] text-gray-500 w-[350px] ${poppins.className} `}>{content}</span>
        <Link href={href} className={`${poppins.className} text-secondary-50 font-400 text-[14px] pt-2`}> View More </Link>
    </div>
  )
}
