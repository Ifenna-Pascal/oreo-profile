import { poppins } from '@src/util/font';
import { InputHTMLAttributes } from 'react';


interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  error?: string | undefined;
  label: string;
  touched?: boolean;
  isForget?: boolean;
}

export const Input = ({label, error, ...props}:InputProps) => {
  return (
    <input className={`w-full border-gray-300 border focus:outline-none px-4 py-2 rounded-[24px] placeholder:text-gray-100 text-[14px] focus:border-secondary-100 ${poppins.className}` } placeholder={label} {...props} />
  )
}

export const TextArea = ({label, error, ...props}: InputProps) => {
  return (
    <textarea 
      className={`w-full border-gray-300 border-b px-4 py-2 focus:outline-none text-gray-100 placeholder:text-gray-100 text-[14px] focus:border-secondary-100 ${poppins.className}`}  {...props}
    >{label}</textarea>
  )
}
