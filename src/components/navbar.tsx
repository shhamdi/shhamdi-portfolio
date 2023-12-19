"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"
import { AnimatePresence, motion } from "framer-motion"

import { NavAnimations } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface NavBarProps {
  items: NavItem[]
}

const NavBar = ({ items }: NavBarProps) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const pathname = usePathname()

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="container flex items-center justify-center bg-background py-5 md:justify-between">
        <FixedNavBar items={items} pathname={pathname} layoutId="fixed" />
      </div>
      <AnimatePresence>
        {isScrolling ? (
          <ScrollNavBar items={items} pathname={pathname} layoutId="scroll" />
        ) : null}
      </AnimatePresence>
    </>
  )
}

const FixedNavBar = ({
  items,
  pathname,
  layoutId,
}: NavBarProps & { pathname: string; layoutId: string }) => {
  return (
    <nav>
      <div className="flex h-fit items-center font-medium">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "relative rounded-full px-4 py-2 text-base transition hover:text-foreground/80",
              item.href === pathname
                ? "text-primary-foreground hover:text-primary-foreground"
                : "",
              pathname.startsWith("/blog") && item.href === "/blog"
                ? "text-primary-foreground hover:text-primary-foreground"
                : ""
            )}
          >
            {item.href === pathname && layoutId === "fixed" && (
              <motion.span
                layoutId={layoutId}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="absolute inset-0 z-10 bg-primary"
                style={{ borderRadius: 9999 }}
              />
            )}

            {item.href === pathname && layoutId === "scroll" && (
              <span
                className="absolute inset-0 -z-10 bg-primary"
                style={{ borderRadius: 9999 }}
              />
            )}
            <span className="relative z-50">{item.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

const ScrollNavBar = ({
  items,
  pathname,
  layoutId,
}: NavBarProps & { pathname: string; layoutId: string }) => {
  return (
    <motion.div
      key={1}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={NavAnimations}
      className="fixed left-1/2 top-5 z-50 max-w-[25rem] rounded-full border-2 border-accent bg-background p-2 shadow-sm"
    >
      <FixedNavBar items={items} pathname={pathname} layoutId={layoutId} />
    </motion.div>
  )
}

export default NavBar
