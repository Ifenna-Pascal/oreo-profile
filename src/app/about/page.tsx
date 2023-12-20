import React from 'react'
import { Department, Heading, HeroHeader } from '../components'
import { poppins } from '@src/util/font'
import Image from 'next/image'
import { images } from '@src/assets'
import { Choice } from '../(public)'
import { depts } from '@src/__mockdata__'

const About = () => {
  return (
    <div>
        <HeroHeader header1='About' image="about-bg" header2='Jenepey' />  
        <div className='py-16 flex  justify-between centered-main-container items-center'>
          <div className='basis-[50%] '>
          <Heading title1='Welcome To' title2='Jeenpey Pharmacy' content='Quick Description text here...' />
          <p  className={`${poppins.className} text-gray-400 text-[16px] w-[400px] py-3 tracking-wide`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
           been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
          </div>
          <div className='flex items-end py-8 justify-center basis-[50%]'>
              <Image src={images.aboutImg} alt='about-us' height={300} width={470} className='h-[300px] rounded-[10px] w-[470px]' />
          </div>
        </div>
        <Choice />
        <div className='centered-main-container py-16'>
          <Heading title1='Most' title2='Popular Services' content='Quick Description text here...' />
        <div className='py-6 centered-main-container grid grid-cols-3 gap-8'>      
          {depts.map((team, index) => (
            <Department key={index} img={team.img.src} name={'CARDIOLOGY'} position={'How all this mistaken al idea of denouncing pleasure praisings pain'} />
          ))}
        </div>
        </div>
      
    </div>
  )
}

export default About