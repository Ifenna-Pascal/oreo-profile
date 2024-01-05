import { poppins } from '@src/util/font'
import webIcons from '@src/util/icons'
import React from 'react'

export const TopNav = () => {
  return (
    <div className='w-full bg-[#49b241]'>
      <div className='w-full  z-20 lg:px-0 md:px-12 px-4  lg:centered-main-container  py-4 flex items-center justify-between'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-1 mr-2 md:mr-6'>
                <span className={` text-white  text-[11px] md:text-[14px] tracking-[0.1px]`}>Mon – Sat; 9am – 6pm, Sunday closed</span>
            </div>
        </div>
        <div className='flex items-center gap-x-4'>
                {webIcons.facebook}
                {webIcons.gmail}
                {webIcons.instagram}
                {webIcons.location}
            </div>
    </div>
    </div>
  )
}
