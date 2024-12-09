import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '../../lib/utils'
import { FeaturedPosts } from '@/components/featured-posts'

export default function Home() {
  return (
    <main>
      <header className="container flex min-h-[100vh] items-center justify-center bg-primary">
        <div className="flex flex-col justify-center gap-7">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-wide">
              Hi, I{"'"}m Sameh!
            </h1>
            <p className="mt-4 max-w-[35rem] text-xl text-secondary">
              I{"'"}m a{' '}
              <strong className="font-bold">fullstack developer</strong>. I work
              with React Ecosystem.
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
            <Link
              href="/"
              aria-label="Visit my github account"
              className={cn(buttonVariants({ variant: 'icon', size: 'icon' }))}
            >
              <Icons.github />
            </Link>
            <Link
              href="/"
              aria-label="Visit my twitter account"
              className={cn(buttonVariants({ variant: 'icon', size: 'icon' }))}
            >
              <Icons.twitter />
            </Link>
            <Link
              href="/"
              aria-label="Visit my linkedin account"
              className={cn(buttonVariants({ variant: 'icon', size: 'icon' }))}
            >
              <Icons.linkedin />
            </Link>
          </div>
        </div>
      </header>

      <section className="container my-28 space-y-10">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          Featured Posts
        </h2>
        <FeaturedPosts />
        <div className="text-center">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            See more posts
          </Link>
        </div>
      </section>

      <section className="container my-28 space-y-10">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>

        <div className="text-center">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            See more projects
          </Link>
        </div>
      </section>
    </main>
  )
}
