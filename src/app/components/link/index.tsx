'use client'
import React from 'react'
import Link from 'next/link'
import { poppins } from '@src/util/font';
import { usePathname } from 'next/navigation';

type link = {
    href: string;
    title: string;
}

export const LinkWrap = ({href, title}: link) => {
  const pathname = usePathname();
  const isActive = href === pathname
  return (
    <Link href={href} className={`font-poppins text-[16px] focus:outline-none mr-4 ${isActive ? "text-secondary-100 font-semibold" : 'text-gray-900'} ${poppins.className}`}> {title} </Link>
   )
}
