import { urlFor } from '@/sanity/image'
import { POST_QUERYResult } from '@/sanity/types'
import Image from 'next/image'
import dayjs from 'dayjs'

type AuthorProps = {
  author: NonNullable<POST_QUERYResult>['author']
}

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>['categories']
}

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>['publishedAt']
}

export const Author = ({ author }: AuthorProps) => {
  return author?.image || author?.name ? (
    <div className="flex items-center gap-2">
      {author?.image ? (
        <Image
          src={urlFor(author.image).width(80).height(80).url()}
          width={80}
          height={80}
          alt={author.name || ''}
          className="size-10 rounded-full bg-pink-50 shadow-inner"
        />
      ) : null}
      {author?.name ? (
        <p className="text-base text-slate-700">{author.name}</p>
      ) : null}
    </div>
  ) : null
}

export const Categories = ({ categories }: CategoriesProps) => {
  return categories.map((category) => (
    <span
      key={category._id}
      className="whitespace-nowrap rounded-full bg-cyan-50 px-2 py-1 text-sm font-semibold leading-none text-cyan-700"
    >
      {category.title}
    </span>
  ))
}

export const PublishedAt = ({ publishedAt }: PublishedAtProps) => {
  return publishedAt ? (
    <p className="text-sm text-secondary">
      {dayjs(publishedAt).format('D MMMM YYYY')}
    </p>
  ) : null
}
