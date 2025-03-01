'use client'

import { usePathname } from 'next/navigation'

import { Folders, StickyNote, Users } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div
      className={`${
        pathname == '/login' ? 'hidden' : ''
      } fixed shadow-lg min-w-[250px] h-screen flex flex-col p-8 gap-y-8 text-xl`}>
      <Link href="/categories" className="flex gap-x-4">
        <Folders />
        <span
          className={`${
            pathname.startsWith('/categories') ? 'font-bold' : ''
          }`}>
          Categories
        </span>
      </Link>
      <Link href="/products" className="flex gap-x-4">
        <StickyNote />
        <span
          className={`${pathname.startsWith('/products') ? 'font-bold' : ''}`}>
          Products
        </span>
      </Link>
      <Link href="/users" className="flex gap-x-4">
        <Users />
        <span className={`${pathname.startsWith('/users') ? 'font-bold' : ''}`}>
          Users
        </span>
      </Link>
    </div>
  )
}
