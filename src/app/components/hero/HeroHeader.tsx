import { poppins } from '@src/util/font'
import React from 'react'

type IProps = {
    header1: string;
    header2: string;
    image?: string
}

export const HeroHeader = ({header1, header2, image }: IProps) => {
  return (
    <div className='bg-gray-200 h-[350px] '>
        <div className='centered-main-container flex items-center h-full'>
            <div className='w-[310px] flex flex-col '>
                <span className={`text-[34px] font-300 ${poppins.className} `}>{header1}</span>
                <h1  className={`text-[50px] -mt-4 font-[600] mb-2 ${poppins.className} `}>{header2}</h1>
            </div>
        </div>
    </div>
  )
}
