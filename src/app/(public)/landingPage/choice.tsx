import { Button, Heading } from '@src/app/components'
import { images } from '@src/assets'
import { poppins } from '@src/util/font'
import Image from 'next/image'
import React from 'react'
import Contact from './contact'

export function Choice() {
  return (
<div>
<div className='bg-[#2d3035] px-5 md:px-0 w-full py-16 md:pb-16 pb-20'>
        <div className='w-full centered-main-container flex md:flex-row flex-col items-center justify-between'>
            <div className='flex mb-8 md:mb-0 flex-col'>
                <Heading title1='Why' title2='Choose Us'  content='Quick Description text here...' />
                <h1 className={`${poppins.className} md:w-[500px] text-[28px] md:text-[34px] text-[#b4b4b5] md:py-2`}>
                    Our goal is to make sure with advances in technology 
                </h1>
                <p className={`text-[#b4b4b5] ${poppins.className} text-[15px] leading-[24px] mb-4 lg:py-0  pt-3 md:w-[500px]`}>
                 Professional dental clinic 32roDent offers the whole range of dentistry services: treatment of caries, gum diseases, tooth whitening,
                 implantation, dentures (crowns installation), surgery, correction (braces) etc.
                </p>
                <Button text='More about practice' variant={'tint'} size={'medium'} />
            </div>
            <Image src={images.choice} width={450} height={600} alt='chice image' />
        </div>
    </div>
 
</div>
  )
}
