import { poppins } from '@src/util/font';
import React, { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  text:string;
}

const buttonVariants = cva(
  'focus:outline-none  duration-150',
  {
    variants: {
     variant: {
      tint: 'bg-secondary-100 border-none hover:ml-2 hover:mr-2  duration-300 text-white',
      outlined: 'border-secondary-100 hover:bg-secondary-100 hover:border-none border hover:text-white duration-300 bg-transparent text-gray-600',
      outlined_text: 'border-secondary-100 border bg-transparent text-secondary-100',
      default: 'border-none'
     },
     size: {
      xs: ['w-[130px] px-2 py-2 text-[11px] rounded-[30px]'],
      small: ['w-[133px] px-2 py-3 text-[13px] rounded-[30px]'],
      medium: ['w-[200px] px-2 py-3 text-[13px] rounded-[30px]'],
      fill: ['w-full px-2 rounded-[30px] text-[13px] py-3']
     },
     spacing: {
      top: "mt-4",
      regular: "mt-2"
     }
    },
    defaultVariants: {
      variant: 'default',
      size: 'fill',
      spacing: "regular"
    }
  }
)



export const Button = ({text, variant, spacing, size, ...props}: ButtonProps) => {
  return (
    <button
    className={buttonVariants({ variant, spacing, size})} {...props}>{text}</button>
  )
}
