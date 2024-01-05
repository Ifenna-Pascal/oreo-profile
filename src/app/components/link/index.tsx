'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { poppins } from '@src/util/font';

type link = {
    href: string;
    title: string;
    close?: () => void
}

export const LinkWrap = ({href, title, close}: link) => {
  const pathname = usePathname();
  const isActive = href === pathname
  return (
    <Link onClick={close} href={href} className={`${poppins.className} mb-6 md:mb-0 text-[15px] focus:outline-none mr-4 ${isActive ? "text-secondary-100 font-semibold" : 'text-primary-300'} `}> {title} </Link>
   )
}
