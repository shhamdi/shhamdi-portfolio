import Image from 'next/image'
import { PortableTextComponents } from 'next-sanity'
import { urlFor } from '@/sanity/image'

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="not-prose h-auto w-full rounded-lg"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto('format')
            .url()}
          alt={props?.value?.alt as string}
          width="600"
          height="400"
        />
      ) : null,
  },
}
