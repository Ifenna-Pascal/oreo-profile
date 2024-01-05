import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type IProps = {
    height?: number;
    width: number;
    src: string;
    className?: string
}
export const PrimaryLogo = ({width, src, height, className}: IProps) => {
  return (
    <Link href={"/"} className={`flex items-center -mt-5 md:mt-0 justify-center w-[120px] md:w-[${width}px] ${className}`}>
        <Image alt='logo-image' className='w-full rounded-full' width={width} height={height}  src={src} />
    </Link>
  )
}
