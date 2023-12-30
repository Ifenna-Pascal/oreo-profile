import { poppins } from '@src/util/font';
import { InputHTMLAttributes } from 'react';


interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  error?: string | undefined;
  label: string;
  touched?: boolean;
  isForget?: boolean;
}

interface SelectProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  error?: string | undefined;
  label: string;
  touched?: boolean;
  isForget?: boolean;
  children: React.ReactNode
}

export const Input = ({label, error, touched, className, ...props}:InputProps) => {
  return (
   <div>
     <input 
      className={
        `
        ${
          touched && error
            ? 'border-red-400'
            : touched && !error
            ? 'border-green-400'
            : 'border-gray-300'
        }  
        w-full border-gray-300  border focus:outline-none px-4 py-2 rounded-[24px] placeholder:text-gray-100 text-[14px] focus:border-secondary-100  ${className} ${poppins.className}` } placeholder={label} {...props} />
        <span className={`text-red-400 ml-2 -mt-1 text-[9px] ${poppins.className}`}>{error}</span>
   </div>
  )
}

export const SelectInput = ({label, error, touched, children, className, ...props}:SelectProps) => {
  return (
   <div>
     <select 
      className={
        `
        ${
          touched && error
            ? 'border-red-400'
            : touched && !error
            ? 'border-green-400'
            : 'border-gray-300'
        }  
        w-full border-gray-300  border focus:outline-none px-4 py-2 rounded-[24px] placeholder:text-gray-100 text-[14px] focus:border-secondary-100  ${className} ${poppins.className}` } placeholder={label} {...props}>
          {children}
          </select>
        <span className={`text-red-400 ml-2 -mt-1 text-[9px] ${poppins.className}`}>{error}</span>
   </div>
  )
}

export const TextArea = ({label, touched, error, className, ...props}: InputProps) => {
  return (
   <div>
     <textarea 
      className={`
      ${
        touched && error
          ? 'border-red-400'
          : touched && !error
          ? 'border-green-400'
          : 'border-gray-300'
      }  
      w-full border-gray-300 border-b px-4 py-2 focus:outline-none text-gray-100 placeholder:text-gray-100 text-[14px] focus:border-secondary-100 ${className} ${poppins.className}`}  {...props}
    />
      <span className={`text-red-400 ml-2 -mt-2 text-[9px] ${poppins.className}`}>{error}</span>
   </div>
  )
}
