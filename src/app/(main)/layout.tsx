import Footer from '@/components/footer'
import { Navbar } from '@/components/nav'
import { navConfig } from '@/config/nav'
import { SanityLive } from '@/sanity/live'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar items={navConfig} />
      {children}
      <SanityLive />
      <Footer />
    </>
  )
}
