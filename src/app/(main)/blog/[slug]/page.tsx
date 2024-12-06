import { sanityFetch } from '@/sanity/live'
import { POST_QUERY } from '@/sanity/queries'
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
    <header className="container mb-12 mt-28 md:mb-20 md:mt-44">
      <h1 className="text-center font-cardo text-2xl font-medium sm:text-3xl md:text-5xl">
        {post.title}
      </h1>
    </header>
  )
}
