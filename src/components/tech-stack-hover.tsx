import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface TechStackHoverProps {
  children: React.ReactNode
  description: string
}

const TechStackHover = ({ children, description }: TechStackHoverProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="px-2 shadow-sm shadow-primary/50 md:px-2">
          <div className="text-center text-base font-medium text-foreground/80">
            <p>{description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TechStackHover
