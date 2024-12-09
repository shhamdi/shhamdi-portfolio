import { POSTS_QUERY } from '@/sanity/queries'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/live'
import { PublishedAt } from './post'

export const LatestPosts = async () => {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY })

  return (
    <div>
      <ul className="divide-y divide-dashed divide-postsDivide">
        {posts.map((post) => (
          <li
            key={post._id}
            className="py-7 [&:first-child]:pt-0 [&:last-child]:pb-0"
          >
            <PublishedAt publishedAt={post.publishedAt} />
            <Link
              href={`/blog/${post?.slug?.current}`}
              className="font-crimsonPro text-2xl font-bold hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-base text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
