import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CirclePlus } from 'lucide-react'
import AddNewUserForm from './form'

export default function AddNewUserItem() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="min-h-[270px] w-full shadow-lg">
          <CardHeader className="flex">
            <CardDescription className="mx-auto">Add new user</CardDescription>
          </CardHeader>
          <CardContent className="flex mt-[30px] cursor-pointer">
            <CirclePlus className="size-24 mx-auto" />
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new user</DialogTitle>
          <DialogDescription>
            Fill the form here. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <AddNewUserForm />
      </DialogContent>
    </Dialog>
  )
}
