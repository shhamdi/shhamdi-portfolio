import { Icons } from '@/components/icons'
import { SocialMediaLink } from '@/components/social-media-link'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '../../lib/utils'
import { FeaturedPosts } from '@/components/featured-posts'

export default function Home() {
  return (
    <>
      <header className="flex min-h-[100vh] items-center justify-center bg-primary">
        <div className="flex flex-col justify-center gap-7">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-wide">
              Hi, I{"'"}m Sameh!
            </h1>
            <p className="mt-4 text-sm text-secondary sm:text-base md:text-lg">
              I{"'"}m a fullstack developer. I work with React Ecosystem.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              More about me
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4">
            <SocialMediaLink href="" tooltipContent="GitHub">
              <Icons.github strokeWidth={1} />
            </SocialMediaLink>
            <SocialMediaLink href="" tooltipContent="Twitter">
              <Icons.twitter strokeWidth={1} />
            </SocialMediaLink>
            <SocialMediaLink href="" tooltipContent="Linkedin">
              <Icons.linkedin strokeWidth={1} />
            </SocialMediaLink>
          </div>
        </div>
      </header>

      <section className="mb-5 mt-24">
        <h2 className="mb-10 text-5xl font-semibold text-primary sm:text-6xl md:text-7xl">
          Featured <span className="text-highlight">Posts</span>
        </h2>
        <FeaturedPosts />
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-lg font-medium hover:underline">
            See more posts {'>'}
          </Link>
        </div>
      </section>

      <section className="mb-5 mt-24">
        <h2 className="text-5xl font-semibold text-primary sm:text-6xl md:text-7xl">
          Featured <span className="text-highlight">Projects</span>
        </h2>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="text-lg font-medium hover:underline"
          >
            See more projects {'>'}
          </Link>
        </div>
      </section>
    </>
  )
}
