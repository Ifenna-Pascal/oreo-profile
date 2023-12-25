import { poppins } from '@src/util/font'
import React from 'react'
import { Button, HeroContact } from '../../components'

export  function Hero() {
  return (
    <div className='relative mb-12'>
        <div className='min-h-[550px] md:min-h-[480px] relative flex md:items-center flex-col pt-[72px] md:pt-0 md:justify-center hero-bg'>
        <div className='md:centered-main-container w-full '>
            <div className='flex flex-col px-6 md:px-0 '>
                <h1 className={`text-[24px] md:text-[32px] font-[400] tracking-[0.4px] font-300 text-primary-300  ${poppins.className} `}>Welcome to</h1>
                <h1 className={`${poppins.className} text-[36px] -mt-2 md:mt-0 md:text-[42px] text-primary-300 font-[400]`}>Jenpeey <span className='font-semibold'>Hospital</span></h1>
                <p className={`${poppins.className} text-[17px] mt-2 w-[320px] text-gray-500 md:w-[450px] mb-4 py-2`}>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                <Button text='View More ' variant={'tint'} size={'small'} />
            </div>
        </div>
        </div>
        <HeroContact />
    </div> 
  )
}
