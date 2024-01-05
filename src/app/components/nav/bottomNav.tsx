'use client'
import React, { useState } from 'react'
import { PrimaryLogo } from '@src/app/components/logo'
import { images } from '@src/assets'
import webIcons from '@src/util/icons'
import { Button, LinkWrap } from '..'
import { poppins } from '@src/util/font'
import { useRouter } from 'next/navigation'

 const BottomNav = () => {
  const router = useRouter();
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }
  const closeModal = () => {
    setShow(false)
  }
  const redirect = () => {
    router.push('/contact')
  }
  return (
    <nav className='relative bg-white   z-20'>
    <div className='w-full centered-main-container  md:h-[100px] flex items-center justify-between  h-[100px]'>
        <div className='flex justify-between  items-center w-full'>
            <PrimaryLogo src={images.primaryLogo.src} width={60} height={60} className='mt-1 md:mt-0'  />
            <button className={`md:hidden mr-8`} onClick={toggleShow} >
                {webIcons.menuIcon}
            </button>
            <div className={`md:flex hidden ml-8 items-center md:flex-row flex-col`}>
            <LinkWrap close={closeModal} href='/about' title='Services'/>
            <LinkWrap close={closeModal} href='/team' title='Our Team'/>
            <LinkWrap close={closeModal} href='/department' title='Departments'/>
            <LinkWrap close={closeModal} href='/contact' title='Contact Us'/>
            <LinkWrap close={closeModal} href='/faq' title='FAQ'/>
           </div> 
          
        </div>
        <Button text='Schedule An Appointment' variant={'tint'} size={'medium'} className='rounded-none w-[250px] md:block hidden py-4' onClick={redirect}/>
        
    </div>
    <div className={`${show ? "flex" : "hidden"} bg-white w-full px-6 absolute py-8 items-center flex-col`}>
              <LinkWrap close={closeModal} href='/about' title='Services'/>
              <LinkWrap close={closeModal} href='/team' title='Our Team'/>
              <LinkWrap close={closeModal} href='/department' title='Departments'/>
              <LinkWrap close={closeModal} href='/contact' title='Contact Us'/>
              <LinkWrap close={closeModal} href='/faq' title='FAQ'/>
        <Button text='Schedule An Appointment' variant={'tint'} size={'fill'} className='rounded-none w-[250px] py-4' onClick={redirect}/>

   </div>
    </nav>
  )
}

export default BottomNav
// #6c6c6c