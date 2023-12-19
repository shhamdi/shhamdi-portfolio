"use client"

import { useState } from "react"
import { useCopyToClipboard } from "usehooks-ts"

import { Icons } from "./icons"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface CopyMailProps {
  mail: string
}

const CopyMail = ({ mail }: CopyMailProps) => {
  const [value, copy] = useCopyToClipboard()
  const [copied, setCopied] = useState<boolean>(false)

  return (
    <TooltipProvider>
      <Tooltip
        onOpenChange={(open) => (open === false ? setCopied(false) : null)}
        delayDuration={0}
      >
        <TooltipTrigger
          onClick={(e) => {
            e.preventDefault()
            copy(mail)
            setCopied(true)
          }}
        >
          <Icons.mail className="h-7 w-7 cursor-pointer text-foreground/80 transition-colors hover:text-primary" />
        </TooltipTrigger>
        <TooltipContent
          onPointerDownOutside={(e) => {
            e.preventDefault()
          }}
        >
          <div className="px-2 text-center text-base md:px-0">
            <p>
              {copied
                ? "Copied to clipboard 🥳"
                : "Click the mail logo to copy"}
            </p>
            <p className="bg-gradient-to-r from-primary/40 to-secondary/40">
              {mail}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CopyMail
