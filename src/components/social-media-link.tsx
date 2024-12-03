import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

interface SocialMediaLinkProps {
  href: string
  children: React.ReactNode
  tooltipContent: string
}

export function SocialMediaLink({
  href,
  children,
  tooltipContent,
}: SocialMediaLinkProps) {
  return (
    <Link href={href} target="_blank">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="text-muted-foreground">
            {children}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipContent}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )
}
