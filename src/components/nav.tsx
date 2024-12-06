'use client'

import { cn } from '@/lib/utils'
import { NavItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Icons } from './icons'
import { MobileNav } from './mobile-nav'

interface NavbarProps {
  items: NavItem[]
}

export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname()
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <>
      <div className="fixed left-4 right-4 top-8 z-50 mx-auto h-auto rounded-lg border border-foreground/30 bg-white/60 bg-clip-padding shadow-md backdrop-blur-sm backdrop-filter sm:max-w-[20rem] md:max-w-[25rem]">
        <nav className="hidden px-3 sm:flex sm:justify-between">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'px-2 py-3 text-sm font-semibold transition-colors hover:text-primary/80 md:text-base',
                item.href === pathname ? 'text-primary' : 'text-foreground/60',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <nav className="sm:hidden">
          <div className="flex items-center justify-between gap-1">
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  item.href === pathname ? 'flex flex-col' : 'hidden',
                  'my-1 ml-1 w-full rounded-lg p-2',
                  'border border-foreground/20 bg-gray-50/70 bg-clip-padding backdrop-blur-sm backdrop-filter',
                )}
              >
                <div className="text-xl font-semibold text-foreground">
                  {item.title}
                </div>
                <div className="text-xs font-normal text-muted-foreground">
                  {item.description}
                </div>
              </div>
            ))}
            <div className="my-1 mr-1 flex h-full items-center justify-center">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-1"
              >
                <Icons.menu size={20} />
              </button>
            </div>
          </div>
        </nav>
      </div>
      {showMobileMenu ? (
        <MobileNav
          items={items}
          pathname={pathname}
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      ) : null}
    </>
  )
}
