import { poppins } from '@src/util/font'
import React from 'react'
import { Button, HeroContact } from '../../components'

export  function Hero() {
  return (
    <div className='relative mb-12'>
        <div className='min-h-[500px] relative flex items-center flex-col justify-center  bg-gray-200'>
        <div className='centered-main-container w-full '>
            <div className='flex flex-col '>
                <h1 className={`text-[32px] font-[400] tracking-[0.4px] font-300 text-primary-300  ${poppins.className} `}>Welcome to</h1>
                <h1 className={`${poppins.className} text-[42px] text-primary-300 font-semibold`}>Jenpeey <span className='font-[400]'>Diagnostic Center</span></h1>
                <p className={`${ poppins.className} text-[15px] text-gray-500 w-[450px] mb-4 py-2`}>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                <Button text='View More ' variant={'tint'} size={'small'} />
            </div>
        </div>
        </div>
        <HeroContact />
    </div> 
  )
}
