import Link from "next/link"

import { cn } from "@/lib/utils"
import ProjectCard from "@/components/project-card"
import Reveal from "@/components/reveal"

import killerBScreenshot from "../../public/killer-b-screenshot.png"
import myPortfolioScreenshot from "../../public/portfolio-screenshot.png"

export default function Home() {
  return (
    <div>
      <section className="pb-11 pt-14 md:pb-16 md:pt-24 lg:pb-24 lg:pt-32">
        <div className={cn("container", "md:px-32")}>
          <Reveal>
            <p className="py-1 text-left font-lora text-xl font-bold text-primary md:py-3 md:text-5xl">
              Hey, I{"'"}m{" "}
              <Link
                href="/about"
                className="text-secondary decoration-secondary decoration-dotted underline-offset-4 hover:cursor-pointer hover:underline"
              >
                Sameh
              </Link>
            </p>
          </Reveal>
          <Reveal>
            <h1 className="py-2 text-left font-lora text-5xl text-foreground/90 md:pb-6 md:pt-3 md:text-9xl">
              <span className="font-bold">I{"'"}m a </span>
              <span className="font-extrabold">Front End Developer</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="py-3 text-xl font-light md:text-2xl">
              I build websites with focus on responsive design and
              accessibility.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-11 pt-14 md:pb-16 md:pt-24 lg:pb-24 lg:pt-32">
        <div className={cn("container", "md:px-32")}>
          <Reveal>
            <p className="my-3 text-xl font-light md:text-3xl">
              I{"'"} m a self-taught Front End Developer and a school-taught
              Industrial Engineer from Tunisia.
            </p>
          </Reveal>
          <Reveal>
            <p className="my-3 text-xl font-light md:text-3xl">
              I started learning web development in 2022. There are a lot of
              things to learn and I am motivated to learn as much as possible.
            </p>
          </Reveal>
          <div className="m-4 flex justify-center">
            <Reveal>
              <div>
                <Link
                  href="/about"
                  className="inline-block rounded-full border-[3px] border-primary bg-transparent px-8 py-3 text-lg text-primary transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
                >
                  More about me
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-11 pt-14 md:pb-16 md:pt-24 lg:pb-24 lg:pt-32">
        <div className={cn("container", "md:px-32")}>
          <Reveal>
            <h2 className="my-2 font-lora text-3xl font-semibold text-secondary md:text-5xl">
              Featured Projects
            </h2>
          </Reveal>
          <Reveal>
            <p className="mb-12 text-lg font-normal text-foreground/80 md:text-xl">
              Here are some of my most recent projects that I{"'"}m proud of
            </p>
          </Reveal>

          <div className="grid auto-rows-[1fr] justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            <ProjectCard
              title="Killer-B"
              description="A markdown-based note-taking app built using Next.js 13."
              href="/projects/killer-b"
              imageProps={{
                src: killerBScreenshot,
                alt: "killer-b project screenshot",
              }}
              icons={["nextjs", "tailwind", "prisma", "trpc"]}
            />

            <ProjectCard
              title="My Portfolio"
              description="My first version of my own portfolio built using Next.js
              and Framer Motion for animations."
              href="/projects/my-portfolio"
              imageProps={{
                src: myPortfolioScreenshot,
                alt: "my portfolio project screenshot",
                height: 176,
              }}
              icons={["nextjs", "tailwind", "framerMotion"]}
            />
          </div>

          <div className="my-8">
            <Reveal>
              <div>
                <Link
                  href="/projects"
                  className="inline-block rounded-full border-[3px] border-primary bg-transparent px-4 py-2 text-sm text-primary transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
                >
                  See more projects
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-11 pt-14 md:pb-16 md:pt-24 lg:pb-24 lg:pt-32">
        <div className={cn("container", "md:px-32")}>
          <Reveal>
            <h2 className="my-2 font-lora text-3xl font-semibold text-secondary md:text-5xl">
              Featured Articles
            </h2>
          </Reveal>
          <div className="my-8">
            <Reveal>
              <div>
                <Link
                  href="/articles"
                  className="inline-block rounded-full border-[3px] border-primary bg-transparent px-4 py-2 text-sm text-primary transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
                >
                  See more articles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
