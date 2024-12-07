import { urlFor } from '@/sanity/image'
import { sanityFetch } from '@/sanity/live'
import { POST_QUERY } from '@/sanity/queries'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  })

  if (!post) {
    notFound()
  }

  return (
    <>
      <header className="container mb-12 mt-28 md:mb-20 md:mt-44">
        <h1 className="text-center font-cardo text-2xl font-medium sm:text-3xl md:text-5xl">
          {post.title}
        </h1>
      </header>
      <main className="container">
        {post.mainImage ? (
          <Image
            className="aspect-[800/300] w-full"
            src={urlFor(post.mainImage)
              .width(800)
              .height(300)
              .quality(80)
              .auto('format')
              .url()}
            alt={post.mainImage.alt as string}
            width="800"
            height="300"
            priority={true}
          />
        ) : null}
      </main>
    </>
  )
}
