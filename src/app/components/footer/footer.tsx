import { poppins } from '@src/util/font'
import webIcons from '@src/util/icons'
import Link from 'next/link'
import React from 'react'
import { Button, Input } from '..'

export function Footer() {
    return (
      <footer className='relative  mt-12'>
         <div className='lg:centered-main-container absolute gap-y-3 md:gap-y-0  -top-20  md:-top-14 flex-col md:flex-row md:left-[12%] px-5 flex items-center  bg-white shadow-lg py-6 md:py-0 min-h-[110px]  rounded-[8px] w-[92%] left-[4%] md:w-full'>
          <form className='w-full gap-x-5 items-center grid grid-cols-1 gap-y-4 md:grid-cols-3'>
          <Input label='Enter Name' className='w-full' />
         <Input label='Enter Email' type='email' />
         <Button variant={'tint'} size={'fill'} text='Submit' />
          </form>
         </div>
        <div className='w-full min-h-[350px] px-5 md:px-0 flex justify-center flex-col bg-gray-200 pt-[150px] md:pt-[100px] pb-[28px]'>
      <div className='md:flex hidden items-center w-full pb-6 justify-between lg:centered-main-container'>
         {/* <h1 className={`text-primary-300 text-[16px] flex-1 ${poppins.className}`}>About Hospitals</h1> */}
         <h1 className={`text-primary-300 text-[16px] flex-1 ${poppins.className}`}>Useful Links</h1>
         <h1 className={`text-primary-300 text-[16px] flex-1 ${poppins.className}`}>Contact Details</h1>
      </div>
      <div className='flex justify-between w-full flex-col md:flex-row  lg:centered-main-container'>
       {/* <div className={`flex-1 text-[13px] font-normal`}>
       <h1 className={`text-primary-300 text-[16px] md:hidden pb-4 flex-1 ${poppins.className}`}>About Hospitals</h1>
 
       <p className='w-[90%] pb-4 tracking-wide text-gray-500'>
        The relentless service of Hospitals in the past 25 years taken health care to the most modern levels in the region catering to urban & rural.
        </p>
        <p className='w-[90%] tracking-wide text-gray-500 '>
        The relentless service of Hospitals in the past 25 years taken health care to the most modern levels in the region catering to urban & rural.
        </p>
       </div> */}
       <div className='flex-1 mt-8 md:mt-0 '>
       <h1 className={`text-primary-300 pb-4 block md:hidden text-[16px] flex-1 ${poppins.className}`}>Useful Links</h1>
        <div className='flex'>
        <ul className='basis-[42%]'>
          <li className='font-[13px] flex gap-x-[2px] items-center mb-4 text-gray-500 tracking-wide'>
            {webIcons.rightArrow}
            <Link href={'#'} className="text-[13px]">About Us</Link>
          </li>
          <li className='font-[13px] flex gap-x-[2px] items-center mb mb-4 text-gray-500 tracking-wide'>
          {webIcons.rightArrow}
            <Link href={'#'} className="text-[13px]">Our Services</Link>
          </li>  
          <li className='font-[13px] flex gap-x-[2px] items-center mb mb-4 text-gray-500 tracking-wide'>
          {webIcons.rightArrow}
            <Link href={'#'} className="text-[13px]">Departments</Link>
          </li>
          <li className='font-[13px] mb-4 flex gap-x-[2px] items-center mb text-gray-500 tracking-wide'>
          {webIcons.rightArrow}

            <Link href={'#'} className="text-[13px]">FAQ</Link>
          </li>
        </ul>
        <ul className='basis-[50%]'>
          <li className='font-[13px] mb-4 flex gap-x-[2px] items-center mb text-gray-500 tracking-wide'>
          {webIcons.rightArrow}
            <Link href={'#'} className="text-[13px]">About Us</Link>
          </li>
          <li className='font-[13px] mb-4 flex gap-x-[2px] items-center mb text-gray-500 tracking-wide'>
          {webIcons.rightArrow}

            <Link href={'#'} className="text-[13px]">Our Services</Link>
          </li>  
          <li className='font-[13px] mb-4 flex gap-x-[2px] items-center mb text-gray-500 tracking-wide'>
          {webIcons.rightArrow}
            <Link href={'#'} className="text-[13px]">Departments</Link>
          </li>
          <li className='font-[13px] mb-4 flex gap-x-[2px] items-center mb text-gray-500 tracking-wide'>
          {webIcons.rightArrow}
            <Link href={'#'} className="text-[13px]">FAQ</Link>
          </li>
        </ul>
        </div>
      </div>
       <div className='flex-1 md:mt-0 mt-8 flex flex-col'>
       <h1 className={`text-primary-300 pb-4 block md:hidden text-[16px] flex-1 ${poppins.className}`}>Contact Details</h1>
         <div className='pb-5 flex'>
          {webIcons.venue}
          <span className={`text-gray-500 w-[220px] ml-3 -mt-1 ${poppins.className} text-[13px]`}>
          #1 Otolo Street, Federal Housing Estate, Trans-Ekulu Enugu

          </span>
        </div>
        <div className='pb-5 flex'>
        {webIcons.phone}
        <span className={`text-gray-500 w-[220px] ml-3 -mt-1 ${poppins.className} text-[13px]`}>
        (123) 0200 12345 & 7890
        </span>
      </div>
      <div className='pb-5 flex'>
        {webIcons.venue}
        <span className={`text-gray-500 w-[220px] ml-3 -mt-1 ${poppins.className} text-[13px]`}>
        (123) 0200 12345 & 7890
        </span>
      </div>
      
      <div className='pb-5 flex'>
        {webIcons.phone}
        <span className={`text-gray-500 w-[220px] ml-3 -mt-1 ${poppins.className} text-[13px]`}>
          121, Park Drive, Varick Str
          New York, NY 10012, USA
        </span>
      </div>
       </div>
      </div>
    </div>
      </footer>
  )
}
 