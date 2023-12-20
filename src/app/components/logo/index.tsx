import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type IProps = {
    height?: number;
    width: number;
    src: string
}
export const PrimaryLogo = ({width, src, height}: IProps) => {
  return (
    <Link href={"/"} className={`flex items-center justify-center w-[${width}px]`}>
        <Image alt='logo-image' className='w-full rounded-full' width={width} height={height}  src={src} />
    </Link>
  )
}
