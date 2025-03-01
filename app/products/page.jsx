import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { CirclePlus } from 'lucide-react'
import Image from 'next/image'

export default async function ProductsPage() {
  const productsData = await fetch('https://fakestoreapi.com/products').then(
    response => response.json(),
  )

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-24 gap-y-12 py-8 px-16">
      <Card className="min-h-[270px] w-full shadow-lg">
        <CardHeader className="flex">
          <CardDescription className="mx-auto">Add new product</CardDescription>
        </CardHeader>
        <CardContent className="flex mt-[30px] cursor-pointer">
          <CirclePlus className="size-24 mx-auto" />
        </CardContent>
      </Card>
      {productsData.map((product, index) => (
        <Card
          key={index}
          className="min-h-[270px] flex flex-col justify-between shadow-lg">
          <CardHeader className="flex">
            <CardDescription className="mx-auto">
              <p className="text-center">{product.title}</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="grow flex items-center">
            <Image
              src={product.image}
              height={0}
              width={100}
              className="mx-auto my-auto"
              alt={product.title}
            />
          </CardContent>
          <CardFooter className="flex gap-x-4 justify-center">
            <Button
              variant="outline"
              className="h-[35px] shadow-md text-red-500">
              Delete
            </Button>
            <Button variant="outline" className="h-[35px] shadow-md">
              View
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
