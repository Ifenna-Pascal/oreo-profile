'use client'
import React, { useState } from 'react'
import { PrimaryLogo } from '@src/app/components/logo'
import { images } from '@src/assets'
import webIcons from '@src/util/icons'
import { LinkWrap } from '..'
import { poppins } from '@src/util/font'

 const BottomNav = () => {
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }
  const closeModal = () => {
    setShow(false)
  }
  return (
    <nav className='relative  z-20'>
         <div className='w-full  bg-primary-200 md:h-[180px]  h-[150px]'>
        <div className='flex centered-main-container pl-4 pt-5 mb-4  items-center justify-between w-full'>
            <PrimaryLogo src={images.primaryLogo.src} width={110} height={110}  />
            <div className='mdflex hidden flex-col items-end'>
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
    <div className='md:centered-main-container left-[3%]  max-w-[94%] mx-auto md:left-[13%] absolute w-[100%] flex md:flex-row flex-col md:items-center  md:w-full top-[120px]  md:top-[145px]   md:h-[80px] bg-white shadow-sm gap-x-4 rounded-[6px] px-8 md:px-10 py-4'>
      <div className='md:flex item-center  hidden'>
      <LinkWrap close={closeModal} href='/about' title='Services'/>
      <LinkWrap close={closeModal} href='/team' title='Our Team'/>
      <LinkWrap close={closeModal} href='/department' title='Departments'/>
      <LinkWrap close={closeModal} href='/contact' title='Contact Us'/>
      <LinkWrap close={closeModal} href='/faq' title='FAQ'/>

      </div>
      <button className={`md:hidden`} onClick={toggleShow} >
        {webIcons.menuIcon}
      </button>
      <div className={`${show ? "flex" : "hidden"} pt-6 flex-col`}>
      <LinkWrap close={closeModal} href='/about' title='Services'/>
      <LinkWrap close={closeModal} href='/team' title='Our Team'/>
      <LinkWrap close={closeModal} href='/department' title='Departments'/>
      <LinkWrap close={closeModal} href='/contact' title='Contact Us'/>
      <LinkWrap close={closeModal} href='/faq' title='FAQ'/>
      </div>
    </div>
   
    </nav>
  )
}

export default BottomNav