import { poppins } from '@src/util/font'
import React from 'react'
import { Button, Input } from '..'

export function HeroContact() {
  return (
    <div className='flex flex-col p-6 absolute -bottom-[140px] md:-bottom-[100px] shadow-md md:left-[13%] bg-white max-w-[94%] left-[3%] w-full md:centered-main-container rounded-[8px]  min-h-[186px]'>
     <p className={`text-[16px] mb-4  font-[400] tracking-[0.4px] font-300 text-gray-600  ${poppins.className} `}>Make Appointment</p>
    <form className='grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6'>
        <Input label='Enter Name' className='col-span-2 md:col-span-1' />
        <Input label='Enter Mobile' />
        <Input label='Enter Department' />
        <Input label='Select Doctor' />
        <Input label='Enter Service' />
        <div className='col-span-2 md:col-span-1'>
        <Button text='View More ' variant={'tint'} size={'fill'} />
        </div>
    </form>
    </div>
  )
}
