import { poppins } from '@src/util/font';
import React from 'react'

type IProps = {
    icon: React.ReactNode;
    value: string;
    text: string;
}

export default function Results({ icon, value, text}: IProps) {
  return (
    <div className='flex flex-col py-6 md:py-0 items-center justify-center'>
        {icon}
        <h2 className={`${poppins.className} text-[36px] md:text-[30px] py-2 text-white `}>{value}</h2>
        <span className={`${poppins.className} text-[16px] md:mt-1 text-white`}>{text}</span>
    </div>
  )
}
