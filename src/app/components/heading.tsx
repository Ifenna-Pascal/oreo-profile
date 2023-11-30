import { poppins } from '@src/util/font'
import React from 'react'

type IProps = {
    title1: string;
    title2: string;
    content: string
}

export const Heading = ({title1,title2, content}: IProps) => {
  return (
    <div className='flex'>
            <div className='w-[2px] h-[22px] mt-2 bg-primary-200'>
            </div>
            <div className='flex flex-col ml-4'>
                <h2 className={`text-primary-200 text-[24px] ${poppins.className}`}>{title1} <span className='text-gray-600'>{title2}</span> </h2>
                <p className={`text-[14px] mb-4  font-[400] tracking-[0.4px]  font-300 text-gray-500  ${poppins.className} `}>{content}</p>
            </div>
        </div>
  )
}
