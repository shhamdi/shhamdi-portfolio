import Image from "next/image"

import { Icons } from "@/components/icons"
import TechStackHover from "@/components/tech-stack-hover"

import PersonalPhoto from "../../../public/photo.jpg"

export default function AboutPage() {
  return (
    <section>
      <div className="pb-5">
        <p className="pb-14 text-center font-lora text-4xl font-bold md:text-5xl">
          Hello! 👋
        </p>
        <h1 className="text-base font-bold text-secondary md:text-lg">About</h1>
        <h2 className="inline-block font-lora text-2xl font-bold text-foreground/90 md:text-4xl">
          Sameh Hamdi
        </h2>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <p className="pb-2 text-base text-foreground/70 md:text-lg">
            I{"'"}m Sameh, a self-taught front-end developer. My interest in
            programming started when I was 14 years old, but I started learning
            web development seriously in 2022.
          </p>

          <p className="py-2 text-base text-foreground/70 md:text-lg ">
            There are a lot to learn and I believe in continuous learning and
            improving myself, so I am motivated to learn new technologies as
            much as possible.
          </p>

          <p className="py-2 text-base text-foreground/70 md:text-lg">
            In my belief that sharing knowledge is a powerful tool for personal
            growth, I{"'"}ve created this website to share my thoughts, the
            lessons I{"'"}ve learned and showcase my projects. Please don
            {"'"}t hesitate to contact me and I{"'"}ll be very happy to help.
          </p>
        </div>
        <div>
          <Image
            src={PersonalPhoto}
            alt="personal photo"
            placeholder="blur"
            className="max-w-[200px] rounded-full border-4 border-solid border-primary md:max-w-[300px]"
          />
        </div>
      </div>
      <div className="pt-8">
        <h2 className="py-2 font-lora text-xl font-bold text-secondary md:text-2xl">
          Tech Stack
        </h2>
        <div className="flex gap-3 py-4">
          <TechStackHover description="Next.js">
            <Icons.nextjs className="h-10 w-10 text-foreground/90 transition-colors hover:text-primary" />
          </TechStackHover>

          <TechStackHover description="React">
            <Icons.react className="h-10 w-10 text-foreground/90 transition-colors hover:text-primary" />
          </TechStackHover>

          <TechStackHover description="TypeScript">
            <Icons.typescript className="h-10 w-10 text-foreground/90 transition-colors hover:text-primary" />
          </TechStackHover>

          <TechStackHover description="TailWind CSS">
            <Icons.tailwind className="h-10 w-10 text-foreground/90 transition-colors hover:text-primary" />
          </TechStackHover>

          <TechStackHover description="TanStack React Query">
            <Icons.reactQuery className="h-10 w-10 text-foreground/90 transition-colors hover:text-primary" />
          </TechStackHover>

          <TechStackHover description="tRPC">
            <Icons.trpc className="h-10 w-10 text-foreground/90 transition-colors hover:text-primary" />
          </TechStackHover>

          <TechStackHover description="Prisma">
            <Icons.prisma className="h-10 w-10 text-foreground/90 transition-colors hover:text-primary" />
          </TechStackHover>

          <TechStackHover description="Framer Motion">
            <Icons.framerMotion className="h-10 w-10 text-foreground/90 transition-colors hover:text-primary" />
          </TechStackHover>
        </div>
      </div>
      <div className="pt-8">
        <h2 className="py-2 font-lora text-xl font-bold text-secondary md:text-2xl">
          Contact
        </h2>
        <p className="pt-2 text-base text-foreground/70 md:text-lg">
          I{"'"}ll be happy to answer any question, don{"'"}t hesitate to
          contact me.
        </p>
        <p className="font-lora text-base font-bold text-foreground/90 md:text-lg">
          find my email in the footer.
        </p>
      </div>
    </section>
  )
}
