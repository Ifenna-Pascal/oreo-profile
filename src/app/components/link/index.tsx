import React from 'react'
import Link from 'next/link'
import { poppins } from '@src/util/font';

type link = {
    href: string;
    title: string;
}

export const LinkWrap = ({href, title}: link) => {
  return (
    <Link href={href} className={`font-poppins text-[16px] focus:outline-none mr-4 text-gray-900 ${poppins.className}`}> {title} </Link>
   )
}
