import { Folders, StickyNote, Users } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="shadow-lg min-w-[250px] h-screen flex flex-col p-8 gap-y-8 text-xl">
      <Link href="/categories" className="flex gap-x-4">
        <Folders />
        <span className="font-bold">Categories</span>
      </Link>
      <Link href="/products" className="flex gap-x-4">
        <StickyNote />
        <span>Products</span>
      </Link>
      <Link href="/users" className="flex gap-x-4">
        <Users />
        <span>Users</span>
      </Link>
    </div>
  )
}
