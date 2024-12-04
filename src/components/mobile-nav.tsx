'use client'

import Link from 'next/link'
import { NavItem } from '@/types'
import { cn } from '@/lib/utils'
import { Dispatch, SetStateAction } from 'react'

interface MobileNavProps {
  items: NavItem[]
  pathname: string
  showMobileMenu: boolean
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
}

export const MobileNav = ({
  items,
  pathname,
  showMobileMenu,
  setShowMobileMenu,
}: MobileNavProps) => {
  return (
    <div
      className={cn(
        'fixed left-4 right-4 top-28 z-50 mx-auto h-auto overflow-auto rounded-lg border border-primary/10 bg-white/90 bg-clip-padding shadow-md backdrop-blur-sm backdrop-filter animate-in slide-in-from-bottom-80 sm:hidden',
      )}
    >
      <div className="flex flex-col items-center gap-1 p-1">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'inline-block',
              'flex items-start justify-between',
              'w-full rounded-lg p-2',
              'border border-primary/10 bg-gray-50/70 bg-clip-padding backdrop-blur-sm backdrop-filter',
            )}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <div className="flex flex-col">
              <div className="text-xl font-semibold text-primary">
                {item.title}
              </div>
              <div className="text-xs font-normal text-muted-foreground">
                {item.description}
              </div>
            </div>
            <div className={cn(item.href === pathname ? 'block' : 'hidden')}>
              <div className="rounded-sm bg-gray-300 px-1 text-[11px] font-medium text-gray-500">
                Current
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
