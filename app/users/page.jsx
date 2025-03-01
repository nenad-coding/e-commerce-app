import AddNewUserItem from '@/components/custom/AddNewUser/item'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import DeleteButton from '@/components/custom/DeleteButton/delete-button'
import Link from 'next/link'

export default async function UsersPage() {
  const usersData = await fetch('https://fakestoreapi.com/users').then(
    response => response.json(),
  )

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-24 py-8 px-16">
      <AddNewUserItem />
      {usersData.map((user, index) => (
        <Card
          key={index}
          className="min-h-[270px] flex flex-col justify-between shadow-lg">
          <CardHeader className="flex">
            <CardDescription className="mx-auto font-bold text-black text-lg">
              <span className="capitalize">{user.name.firstname}</span>{' '}
              <span className="capitalize">{user.name.lastname}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <div>
              <p className="text-gray-500">{user.email}</p>
              <p>
                City:{' '}
                <span className="font-semibold capitalize">
                  {user.address.city}
                </span>
              </p>
              <p>
                Street:{' '}
                <span className="font-semibold capitalize">
                  {user.address.street}
                </span>
              </p>
              <p>
                Street number:{' '}
                <span className="font-semibold capitalize">
                  {user.address.number}
                </span>
              </p>
              <p>
                Zipcode:{' '}
                <span className="font-semibold capitalize">
                  {user.address.zipcode}
                </span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex gap-x-4 justify-center">
            <DeleteButton id={user.id} type={'users'} />
            <Link href={`/users/${user.id}`}>
              <Button className="h-[35px] shadow-md">View</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
