import { Button, Heading } from '@src/app/components'
import { images } from '@src/assets'
import { poppins } from '@src/util/font'
import Image from 'next/image'
import React from 'react'

export const AboutUs = () => {
  return (
    <div className='pt-32 pb-16  centered-main-container'>
        <Heading title1='About' title2='Us' content='Quick Description about us' />
        <div className='flex items-center  py-6'>
                <Image alt='about image' src={images.aboutImg} width={390} height={365} />
                <div className='flex pl-24 flex-col'>
                <p className={`text-[19px] font-[400] pb-1 tracking-[0.4px] font-300 text-primary-300  ${poppins.className} `}>
                <b>Oreo Hospital</b> isIt is a long established fact that a reader will be distracted by the readable content.
                </p>

                <p className={`text-[14px] font-[400] py-3 tracking-[0.4px] font-300 text-gray-600  ${poppins.className} `}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and goingered the undoubtable source
                </p>
                <p className={`text-[14px] font-[400] py-3 tracking-[0.4px] font-300 text-gray-600  ${poppins.className} `}>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                </p>
                <Button text='View More' spacing={'top'} variant={'outlined'} size={'small'} />

                </div>
            </div>
    </div>
  )
}
