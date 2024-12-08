// import { urlFor } from '@/sanity/image'
import { sanityFetch } from '@/sanity/live'
import { POST_QUERY } from '@/sanity/queries'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import { components } from '@/components/sanity-block-content-components'
import { Author, Categories, PublishedAt } from '@/components/post'

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
      <article className="container mt-36">
        <header className="flex flex-col items-start gap-4 lg:col-span-12">
          <div className="flex items-center gap-4">
            <Categories categories={post.categories} />
            <PublishedAt publishedAt={post.publishedAt} />
          </div>
          <h1 className="text-center font-cardo text-2xl font-medium sm:text-3xl md:text-5xl">
            {post.title}
          </h1>
          <Author author={post.author} />
        </header>
        {/* {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage)
              .width(800)
              .height(300)
              .auto('format')
              .url()}
            width={800}
            height={300}
            alt={post.mainImage.alt as string}
            className="container my-10 rounded-lg"
          />
        ) : null} */}
        {post.body ? (
          <div className="container prose lg:prose-lg lg:col-span-7 lg:col-start-6">
            <PortableText value={post.body} components={components} />
          </div>
        ) : null}
      </article>
    </>
  )
}
