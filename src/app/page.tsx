import { Icons } from '@/components/icons'
import { SocialMediaLink } from '@/components/social-media-link'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-12 pt-12 md:pb-20 md:pt-36">
        <div className="container max-w-[74rem] text-left">
          <div>
            <h1 className="mt-10 text-5xl font-semibold sm:text-7xl">
              Sameh Hamdi
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              I{"'"}m a frontend developer. I work with React Ecosystem.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className={buttonVariants({ variant: 'default' })}
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
      </section>
    </>
  )
}
