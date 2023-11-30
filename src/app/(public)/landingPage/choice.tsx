import { Button, Heading } from '@src/app/components'
import { images } from '@src/assets'
import { poppins } from '@src/util/font'
import Image from 'next/image'
import React from 'react'
import Contact from './contact'

export function Choice() {
  return (
<div>
<div className='bg-[#2d3035] w-full py-16'>
        <div className='w-full centered-main-container flex items-center justify-between'>
            <div className='flex flex-col'>
                <Heading title1='Why' title2='Choose Us' content='Quick Description text here...' />
                <h1 className={`${poppins.className} w-[500px] text-[34px] text-gray-400 py-2`}>
                    Our goal is to make sure with advances in technology 
                </h1>
                <p className={`text-gray-300  ${poppins.className} text-[15px] leading-[24px] mb-4 w-[500px]`}>
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
