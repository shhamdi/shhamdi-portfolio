import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export const MobileNav = () => {
  return (
    <nav className="fixed left-4 right-4 top-4 z-50 rounded-lg bg-white outline outline-1 outline-primary">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>
          <div className="">
            <div className="ml-10 flex items-baseline space-x-4"></div>
          </div>
        </div> */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="about">
              <Link href="/about">about</Link>
            </SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </nav>
  )
}
