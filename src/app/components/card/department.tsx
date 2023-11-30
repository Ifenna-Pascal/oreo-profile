import { poppins } from '@src/util/font';
import Image from 'next/image'
import React from 'react'
import { Button } from '..';
type IProps = {
    img: string;
    position: string;
    name: string;
}

export const Department= ({img, position, name}:IProps) => {
    return (
      <div className='min-h-[310px] rounded-[10px] w-full border-[0.2px] pt-8 border-gray-100'>
          <Image src={img} width={200} height={150} alt='team_member' className='w-full h-[150px] object-contain ' />
          <div className='py-6 px-5 flex flex-col'>
              <h2 className={`${poppins.className} uppercase text-primary-300 pb-2 font-500`}>{name}</h2>
              <span  className={`${poppins.className} text-[14px] mb-3 text-gray-600`}>{position}</span>
          <Button text='Read More' variant={'outlined_text'} size={'small'} />
          </div>
      </div>
    )
  }