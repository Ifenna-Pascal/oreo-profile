import React from 'react'
import { Button, Heading, HeroHeader, Input } from '../components'
import { TextArea } from '../components/input/input'
import { poppins } from '@src/util/font'
import webIcons from '@src/util/icons'
import Link from 'next/link'
import Image from 'next/image'
import { images } from '@src/assets'

const Contact = () => {
  return (
    <div>
        <HeroHeader header1='Jeenpey' header2='Contact Us' image='contact-bg' />  
        <div className='centered-main-container px-5 md:px-0  py-16'>
          <Heading title1='Get Touch' title2='With Us' content='Quick Description text here...' />
          <div className='grid grid-cols-1 lg:grid-cols-5 mt-8 gap-x-6 justify-between'>
          <div className='md:col-span-3'>
          <p className={`text-[16px] mb-4  pb-3 font-[400] tracking-[0.4px] font-300 text-gray-500  ${poppins.className} `}>Make Appointment</p>
          <form className='grid gap-y-6 grid-cols-1 md:grid-cols-2 md:gap-x-6'>
            <Input label='Enter Name' className='w-full md:col-span-1 col-span-2' />
            <Input label='Enter Email'  className='w-full md:col-span-1 col-span-2' />
            <Input label='Enter Phone'  className='w-full md:col-span-1 col-span-2' />
            <Input label='Subject'  className='w-full md:col-span-1 col-span-2' />
            <div className='col-span-2'>
              <TextArea label='Your Message'/>
            </div>
            <Button text='Submit' variant={'tint'} size={'small'} />
          </form>
          </div>
          <div className='col-span-2 flex items-end justify-center'>
              <div className='bg-secondary-200 p-6 flex flex-col w-full mt-8 md:mt-0 md:w-[350px] rounded-md min-h-[400px]'>
                  <h1 className={`text-white ${poppins.className} text-[22px]`}>Quick Contact</h1>
                  <p className={`text-white py-4 ${poppins.className} text-[15px]`}>If you have any questions simply use the following contact details.</p>
                  <div className='py-3 flex'>
                    {webIcons.location}
                    <span className={`text-white w-[220px] ml-3 -mt-1 ${poppins.className} text-[15px]`}>
                      121, Park Drive, Varick Str
                      New York, NY 10012, USA
                    </span>
                  </div>
                  <div className='py-3 flex'>
                    {webIcons.mobile}
                    <span className={`text-white w-[220px] ml-3 -mt-1 ${poppins.className} text-[15px]`}>
                    + (123) 0200 12345,
                    + (123) 0200 12345, 
                    </span>
                  </div>
                  <div className='pt-3 pb-8 flex  border-b  border-white'>
                    {webIcons.mail}
                    <span className={`text-white w-[220px] ml-3 -mt-1 ${poppins.className} text-[15px]`}>
                    Mailus@hospitalteam.com
                    </span>
                  </div>
                  <div className='pt-5 flex gap-x-3 items-center'>
                    <Link href={"#"}>
                      {webIcons.facebook}
                    </Link>
                    <Link href={"#"}>
                      {webIcons.gmail}
                    </Link>
                    <Link href={"#"}>
                      {webIcons.instagram}
                    </Link>
                  </div>
              </div>
          </div>
          </div>
        </div>
        <Image src={images.map} width={100} height={250} alt='map-images' className='w-full object-cover h-[250px]' />
        <div className='centered-main-container md:px-0 px-5 py-16'>
        <Heading title1='Our' title2='Partners' content='Quick Description text here...' />
        <div className='flex py-4 md:items-center flex-col md:flex-row md:flex-wrap gap-x-6'>
            {
              [images.support1, images.support2, images.support1, images.support2].map((image, index) => (
                <Image src={image.src}  key={index} alt='partners-logo' width={220} height={150} className='w-full md:w-[220px] mb-4 md:mb-0 h-[120px] md:h-[150px]'/>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Contact  