import { Footer } from '@/components/footer'
import { Navbar } from '@/components/nav'
import { navConfig } from '@/config/nav'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar items={navConfig} />
      <div>{children}</div>
      <Footer />
    </>
  )
}
