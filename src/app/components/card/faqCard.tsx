'use client'
import { poppins } from '@src/util/font';
import React, { useState } from 'react'

const FaqCard = ({question, answer}: {question: string, answer: string}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='w-full rounded-[8px] cursor-pointer py-6 bg-gray-200 mb-2 px-5' onClick={toggle}>
        <h2 className={`text-secondary-100  ${poppins.className} text-[16px]  w-full ${isOpen && 'mb-2 pb-2 border-b border-white'}`}>{question}</h2>
       {isOpen && 
        <span className={`text-[14px] tracking-wide  text-gray-700 font-poppins ${poppins.className}`}>
            {answer}
        </span>
        }
    </div>
  )
}

export default FaqCard