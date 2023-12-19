import Link from "next/link"

import CopyMail from "./copy-mail"
import { Icons } from "./icons"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

const SiteFooter = () => {
  return (
    <footer className="container">
      <div className="flex flex-col items-center gap-3 border-t border-foreground/20 pb-2 pt-8">
        <p className="font-medium text-foreground/80">Reach me out</p>
        <div className="flex items-center justify-between gap-3">
          <CopyMail mail="sameh.hamdi@insat.ucar.tn" />

          <Link
            href="https://github.com/shhamdi"
            target="_blank"
            className="hover:cursor-newtab"
          >
            <Icons.github className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/semah-hamdi/"
            target="_blank"
            className="hover:cursor-newtab"
          >
            <Icons.linkedin className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
          </Link>
        </div>
        <p className="mt-5 text-base font-normal text-foreground/90 md:text-sm">
          &copy; Sameh Hamdi 2023
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
