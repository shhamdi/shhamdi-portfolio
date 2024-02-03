import ProjectCard from "@/components/project-card"

import killerBScreenshot from "../../../public/killer-b-screenshot.png"
import myPortfolioScreenshot from "../../../public/portfolio-screenshot.png"

export default function ProjectsPage() {
  return (
    <section className="not-prose">
      <h1 className="pb-14 text-center font-lora text-4xl font-bold md:text-5xl">
        Projects
      </h1>
      <div className="grid auto-rows-[1fr] justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        <ProjectCard
          title="Killer-B"
          description="A markdown-based note-taking app built using Next.js 13."
          href="/projects/r/killer-b"
          imageProps={{
            src: killerBScreenshot,
            alt: "killer-b project screenshot",
            height: 176,
          }}
          icons={["nextjs", "tailwind", "prisma", "trpc"]}
        />

        <ProjectCard
          title="My Portfolio"
          description="My first version of my own portfolio built using Next.js
              and Framer Motion for animations."
          href="/projects/r/my-portfolio"
          imageProps={{
            src: myPortfolioScreenshot,
            alt: "my portfolio project screenshot",
            height: 176,
          }}
          icons={["nextjs", "tailwind", "framerMotion"]}
        />
      </div>
    </section>
  )
}
