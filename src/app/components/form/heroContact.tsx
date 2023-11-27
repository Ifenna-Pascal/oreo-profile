import { poppins } from '@src/util/font'
import React from 'react'
import { Button, Input } from '..'

export function HeroContact() {
  return (
    <div className='flex flex-col p-6   absolute -bottom-[100px] shadow-md left-[13%] bg-white w-full centered-main-container rounded-[4px]  h-[186px]'>
     <p className={`text-[16px] mb-4  font-[400] tracking-[0.4px] font-300 text-gray-600  ${poppins.className} `}>Make Appointment</p>
    <form className='grid grid-cols-3 gap-y-5 gap-x-6'>
        <Input label='Enter Name' />
        <Input label='Enter Mobile' />
        <Input label='Enter Department' />
        <Input label='Select Doctor' />
        <Input label='Enter Service' />
        <Button text='View More ' variant={'tint'} size={'fill'} />
    </form>
    </div>
  )
}
