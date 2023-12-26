import { Button } from '@src/app/components'
import { poppins } from '@src/util/font'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-200 w-full h-[300px] md:h-[220px] pb-4 flex flex-col items-center justify-center'>
    <h1 className={`font-[300] ${poppins.className} text-primary-300 text-[28px] text-center w-[220px] md:w-full py-4   md:text-[32px]`}>We provide 24/7 customer support.</h1>
    <span className={`pb-4 ${poppins.className} text-gray-500 text-center md:text-left py-2 md:py-0 text-[18px]`}>Please feel free to contact us at (01) 234 5678 for emergency case.</span>
    <Button text='Read More' variant={'outlined_text'} size={'small'} />
</div>
  )
}

export default Contact 