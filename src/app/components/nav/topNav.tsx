import { poppins } from '@src/util/font'
import webIcons from '@src/util/icons'
import React from 'react'

export const TopNav = () => {
  return (
    <div className='w-full  z-20 lg:px-0 md:px-12 px-4  lg:centered-main-container py-7 flex items-center justify-between'>
        <div className='flex items-center'>
            <div className='flex items-center gap-x-1 mr-2 md:mr-6'>
                {webIcons.email}
                <span className={` text-black italic text-[11px] md:text-[14px] tracking-[0.1px]`}>Mon – Sat: 9:00 am – 6:00 pm, Sunday <b>CLOSED</b></span>
            </div>
            {/* <div className='flex items-center gap-x-2 mr-8'>
                {webIcons.phone}
                <span className={`${poppins.className} text-black text-[11px] md:text-[14px] tracking-[0.3px]`}>+234-322-11-1223</span>
            </div> */}
        </div>
    </div>
  )
}
