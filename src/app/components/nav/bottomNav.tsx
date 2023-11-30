import React from 'react'
import { PrimaryLogo } from '@src/app/components/logo'
import { images } from '@src/assets'
import webIcons from '@src/util/icons'
import { LinkWrap } from '..'
import { poppins } from '@src/util/font'

export const BottomNav = () => {
  return (
    <nav className='relative z-20'>
         <div className='w-full  bg-primary-200 h-[180px]'>
        <div className='flex centered-main-container pt-5 mb-4  items-center justify-between w-full'>
            <PrimaryLogo src={images.primaryLogo.src} width={110} height={110} />
            <div className='flex flex-col items-end'>
            <div className='flex items-center gap-x-1 py-2'>
                {webIcons.timer}
                <span className={`${poppins.className} text-white text-[14px] tracking-[0.3px]`}> Mon - Sat: 9:00 - 18:00 Sunday CLOSED</span>
            </div>
            <div className='flex items-center gap-x-1 pb-2'>
                {webIcons.location}
                <span className={`${poppins.className} text-white text-[14px] tracking-[0.3px]`}> 1422 1st St. Santa Rosa CA 94559. United States</span>
            </div>
            </div>
        </div>
    </div>
    <div className='centered-main-container left-[13%]  absolute w-full top-[145px] h-[80px] bg-white shadow-sm flex items-center gap-x-4 rounded-[6px] px-10 py-4'>
      <LinkWrap href='#' title='Services'/>
      <LinkWrap href='/team' title='Our Team'/>
      <LinkWrap href='/department' title='Departments'/>
      <LinkWrap href='#' title='FAQ'/>
      <LinkWrap href='#' title='Contact Us'/>

    </div>
    </nav>
  )
}
