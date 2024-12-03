'use client'

import { cn } from '@/lib/utils'
import { NavItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavbarProps {
  items: NavItem[]
}

export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname()
  console.log('segment = ', pathname)
  return (
    <div className="fixed left-4 right-4 top-8 z-50 mx-auto h-auto rounded-lg border border-primary/10 bg-white/60 bg-clip-padding backdrop-blur-sm backdrop-filter sm:max-w-[30rem]">
      <div>
        <nav className="hidden px-3 sm:flex sm:justify-between">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'px-2 py-3 text-lg font-normal transition-colors hover:text-foreground/80',
                item.href === pathname ? 'text-primary' : 'text-foreground/60',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <nav className="px-3 sm:hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                item.href === pathname ? 'flex flex-col' : 'hidden',
                'px-2 py-3 font-normal',
              )}
            >
              <div className="text-xl font-semibold text-primary">
                {item.title}
              </div>
              <div className="text-xs font-normal text-muted-foreground">
                {item.description}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
