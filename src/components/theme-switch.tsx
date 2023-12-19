"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Icons } from "./icons"

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)
  const currentTheme = theme === "system" ? systemTheme : theme

  function toggleTheme() {
    return currentTheme === "light" ? setTheme("dark") : setTheme("light")
  }
  useEffect(() => setHasMounted(true), [])

  if (!hasMounted)
    return (
      <span className="min-h-[28px] min-w-[28px] animate-pulse rounded-full border border-zinc-300 bg-zinc-200 p-2 dark:border-zinc-700 dark:bg-zinc-800"></span>
    )

  return (
    <button
      onClick={toggleTheme}
      className={`group: rounded-full border border-secondary/50 bg-foreground/5 p-2 transition-all duration-300 dark:border-primary/50 ${
        currentTheme === "light" ? "-rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle Theme"
    >
      {currentTheme === "light" ? (
        <Icons.sun className="h-4 w-4 text-secondary/80 md:h-5 md:w-5" />
      ) : (
        <Icons.moon className="h-4 w-4 text-primary/80 md:h-5 md:w-5" />
      )}
    </button>
  )
}

export default ThemeSwitch
