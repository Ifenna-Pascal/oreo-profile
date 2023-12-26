import React from 'react'
import { Heading } from '.'
import { choices } from '@src/__mockdata__'
import Choice from './card/choice'

const ChoicesAlt = () => {
  return (
<div className='bg-[#2d3035] px-5  md:px-0 w-full py-16 md:pb-16 pb-20'>
    <div className='centered-main-container '>
<Heading color='text-[#b4b4b5]' title1='Why' title2='Choose Us'  content='Quick Description text here...' />

    </div>
<div className='py-4 w-full centered-main-container grid-cols-1 md:gap-6 grid lg:grid-cols-3'>
    {
        choices.map((choice, index) => (
            <Choice key={index} icon={choice.icon} header={choice.header} content={choice.content} />
        ))
    }
</div>
    </div>
  )
}

export default ChoicesAlt