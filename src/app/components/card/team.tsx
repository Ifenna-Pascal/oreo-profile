import { poppins } from '@src/util/font';
import Image from 'next/image'
import React from 'react'

type IProps = {
    img: string;
    position: string;
    name: string;
}

export const Team = ({img, position, name}:IProps) => {
  return (
    <div className='min-h-[410px] w-full border-[0.2px] pt-8 border-gray-100'>
        <Image src={img} width={200} height={120} alt='team_member' className='w-full h-[260px] object-contain ' />
        <div className='h-[100px] flex flex-col items-center justify-center'>
            <h2 className={`${poppins.className} uppercase text-primary-300 pb-2 font-500`}>{name}</h2>
            <span  className={`${poppins.className} text-[14px] text-gray-600`}>{position}</span>
        </div>
    </div>
  )
}
