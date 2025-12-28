"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/utils/tw-merge.util'

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "colors",
    link: "/BackgroundChanger",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
]

const NavLinks = () => {
    const pathName = usePathname()
  return (
    <div className="flex gap-4 tracking-wider">
        {links.map((item, index) => {

          const isActive = pathName === item.link

          return (
            <Link href={item.link} key={index}>
              <span className={cn(
                "text-lg font-semibold text-gray-700 hover:text-blue-500",
                isActive ? 'text-blue-600' :''
              )}>{item.label}</span>
            </Link> 
          );
        })}
    </div>
  )
}

export default NavLinks