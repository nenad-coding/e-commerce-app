'use client'

import BreadcrumpContainer from '../custom/Breadcrumb/containter'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    // logout functionality

    toast('Successfuly logged out!')
    router.push('/login')
  }

  return (
    <div
      className={`${
        pathname == '/login' ? 'hidden' : ''
      } fixed bg-white w-full h-[60px] flex items-center justify-between px-4 shadow-lg`}>
      <BreadcrumpContainer />
      <div>
        <Button onClick={handleLogout}>
          <LogOut /> Logout
        </Button>
      </div>
    </div>
  )
}
