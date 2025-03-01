import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { CirclePlus } from 'lucide-react'

export default async function UsersPage() {
  const usersData = await fetch('https://fakestoreapi.com/users').then(
    response => response.json(),
  )

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-24 py-8 px-16">
      <Card className="min-h-[270px] w-full shadow-lg">
        <CardHeader className="flex">
          <CardDescription className="mx-auto">Add new user</CardDescription>
        </CardHeader>
        <CardContent className="flex mt-[30px] cursor-pointer">
          <CirclePlus className="size-24 mx-auto" />
        </CardContent>
      </Card>
      {usersData.map((user, index) => (
        <Card
          key={index}
          className="min-h-[270px] flex flex-col justify-between shadow-lg">
          <CardHeader className="flex">
            <CardDescription className="mx-auto">
              <span className="capitalize">{user.name.firstname}</span>{' '}
              <span className="capitalize">{user.name.lastname}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <div>
              <p>City: {user.address.city}</p>
              <p>Street: {user.address.street}</p>
              <p>Street number: {user.address.number}</p>
              <p>Zipcode: {user.address.zipcode}</p>
            </div>
          </CardContent>
          <CardFooter className="flex gap-x-4 justify-center">
            <Button
              variant="outline"
              className="h-[35px] shadow-md text-red-500">
              Delete
            </Button>
            <Button className="h-[35px] shadow-md">View</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
