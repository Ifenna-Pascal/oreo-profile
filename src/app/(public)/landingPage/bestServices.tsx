import { services } from '@src/__mockdata__'
import { Heading, ServiceCard } from '@src/app/components'
import Numbering from '@src/app/components/card/numbering'
import React from 'react'

export function BestServices() {
  return (
   <>
    <div className='w-full px-5 bg-gray-200 py-24 min-h-[600px]'>
        <div className='centered-main-container'>
            <Heading title1='Our' title2='Best Services' content='Quick Description text here...' />
            <div className='pt-8 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                  services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} content={service.content} href={service.href} img={service.img.src}/>
                  ))
                }
            </div>
        </div>
    </div>
    <Numbering />
   </>
  )
}
