import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="container flex items-center justify-center bg-primary py-8 text-secondary">
      <div className="flex gap-4">
        <Link href="/" className="font-semibold hover:underline">
          @shhamdi
        </Link>
        <Link href="/" className="font-semibold hover:underline">
          github
        </Link>
        <Link href="/" className="font-semibold hover:underline">
          linkedin
        </Link>
      </div>
    </footer>
  )
}

export default Footer
