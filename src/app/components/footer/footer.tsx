import { poppins } from '@src/util/font'
import React from 'react'

export function Footer() {
  return (
    <div className='w-full bg-gray-200 py-[24px]'>
        <div className='w-full centered-main-container flex items-center justify-between'>
            <div className='flex flex-col'>
        <h2 className={`font-[300] ${poppins.className} text-primary-300 text-[22px]`}>We provide 24/7 customer support.</h2>
        <span className={`pb-4 ${poppins.className} text-gray-500 text-[14px]`}></span>
        <span className={`pb-4 ${poppins.className} text-gray-500 text-[14px]`}>Please feel free to contact us at (01) 234 5678 for emergency case.</span>
    <p>
    The relentless service of Hospitals in the past 25 years taken health care to the most modern levels in the region catering to urban & rural.
    </p>
    <br />  
            </div>
        </div>
    </div>
  )
}
