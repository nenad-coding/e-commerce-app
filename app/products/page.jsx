import AddNewProductItem from '@/components/custom/AddNewProduct/item'
import DeleteButton from '@/components/custom/DeleteButton/delete-button'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductsPage() {
  const productsData = await fetch('https://fakestoreapi.com/products').then(
    response => response.json(),
  )

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-24 gap-y-12 py-8 px-16">
      <AddNewProductItem />
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
            <DeleteButton id={product.id} type="products" />
            <Link href={`/products/${product.id}`}>
              <Button variant="outline" className="h-[35px] shadow-md">
                View
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
