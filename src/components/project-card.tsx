import Image from "next/image"
import Link from "next/link"

import { Icons } from "./icons"
import Reveal from "./reveal"

interface ProjectCardProps {
  title: string
  description: string
  href: string
  imageProps: React.ComponentProps<typeof Image>
  icons: (keyof typeof Icons)[]
}

const ProjectCard = ({
  title,
  description,
  href,
  imageProps,
  icons,
}: ProjectCardProps) => {
  return (
    <div className="rounded-md border border-border bg-background p-4 transition-transform duration-300 hover:scale-105 hover:shadow-sm">
      <Link href={href} className="group flex flex-col justify-between">
        <div className="space-y-3">
          <Reveal>
            <h3 className="font-lora text-lg font-semibold md:text-xl">
              {title}
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-base text-foreground/60 md:text-sm">
              {description}
            </p>
          </Reveal>
          <Reveal>
            <div className="flex gap-2">
              {icons.map((name, index) => {
                let Icon = Icons[name]
                return <Icon key={index} className="h-5 w-5" />
              })}
            </div>
          </Reveal>
          <Reveal>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image {...imageProps} />
          </Reveal>
        </div>
        <Reveal>
          <div className="flex items-center gap-1">
            <p className="text-base font-bold decoration-secondary decoration-dotted underline-offset-4 transition-colors duration-300 group-hover:underline">
              See more
            </p>
            <Icons.rightArrow className="h-4 w-4" />
          </div>
        </Reveal>
      </Link>
    </div>
  )
}

export default ProjectCard
