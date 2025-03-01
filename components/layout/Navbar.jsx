import BreadcrumpContainer from '../custom/Breadcrumb/containter'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <div className="w-full h-[60px] flex items-center justify-between px-4 shadow-lg">
      <BreadcrumpContainer />
      <div>
        <Button>
          <LogOut /> Logout
        </Button>
      </div>
    </div>
  )
}
