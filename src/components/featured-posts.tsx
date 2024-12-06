import { POSTS_QUERY } from '@/sanity/queries'
import Link from 'next/link'
import { Icons } from './icons'
import { sanityFetch } from '@/sanity/live'

export const FeaturedPosts = async () => {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY })

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post._id} className="w-fit pb-4">
            <Link
              className="group hover:underline"
              href={`/blog/${post?.slug?.current}`}
            >
              <div className="flex items-center">
                <div>
                  <Icons.chevronRight />
                </div>
                <div>{post.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
