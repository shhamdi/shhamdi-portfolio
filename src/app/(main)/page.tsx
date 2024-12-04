import { Icons } from '@/components/icons'
import { SocialMediaLink } from '@/components/social-media-link'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '../../lib/utils'

export default function Home() {
  return (
    <main className="container max-w-[74rem]">
      <header className="min-h-[90vh] space-y-6 pb-12 pt-28 md:pb-20 md:pt-36">
        <div className="text-left">
          <div>
            <h1 className="mt-14 text-5xl font-semibold sm:text-6xl md:text-7xl">
              <span className="block text-2xl sm:text-3xl md:text-4xl">
                Hello 👋 I{"'"}m
              </span>
              Sameh Hamdi
            </h1>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base md:text-lg">
              I{"'"}m a fullstack developer. I work with React Ecosystem.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'text-xs sm:text-sm',
                'py-5 shadow-md',
              )}
            >
              More About Me
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-start gap-4">
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
        <h2 className="text-5xl font-semibold sm:text-6xl md:text-7xl">
          Featured <span className="text-primary">Posts</span>
        </h2>
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-lg font-medium hover:underline">
            See more posts {'>'}
          </Link>
        </div>
      </section>

      <section className="mb-5 mt-24">
        <h2 className="text-5xl font-semibold sm:text-6xl md:text-7xl">
          Featured <span className="text-primary">Projects</span>
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
    </main>
  )
}
