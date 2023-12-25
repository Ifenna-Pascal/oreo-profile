import { poppins } from '@src/util/font'
import webIcons from '@src/util/icons'
import React from 'react'

export const TopNav = () => {
  return (
    <div className='w-full z-20 lg:px-0 md:px-12 px-8  lg:centered-main-container py-7 flex items-center justify-between'>
        <div className='flex items-center'>
            <div className='flex items-center gap-x-2 mr-4 md:mr-8'>
                {webIcons.email}
                <span className={`${poppins.className} text-black text-[14px] tracking-[0.3px]`}>info@example.com</span>
            </div>
            <div className='flex items-center gap-x-2 mr-8'>
                {webIcons.phone}
                <span className={`${poppins.className} text-black text-[14px] tracking-[0.3px]`}>+234-322-11-1223</span>
            </div>
        </div>
    </div>
  )
}
