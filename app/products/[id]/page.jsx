import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductPage({ params }) {
  const data = await fetch(
    `https://fakestoreapi.com/products/${params.id}`,
  ).then(response => response.json())

  return (
    <div className="px-16 py-8">
      <Card className="px-8 py-4 flex flex-col h-full pb-24">
        <Link href={'/products'} className="mb-4">
          <Button
            className="min-w-[80px] shadow-lg"
            variant="outline"
            size="icon">
            <ChevronLeft /> Back
          </Button>
        </Link>
        <Card className="px-8 py-4 shadow-lg flex justify-between">
          <div className="flex flex-col">
            <p className="text-xl font-bold mb-4">{data.title}</p>
            <p className="text-sm text-gray-500 2xl:max-w-[80%] mb-6">
              {data.description}
            </p>
            <p>
              ID: <span className="font-bold">{data.id}</span>
            </p>
            <p className="capitalize">
              Category: <span className="font-bold">{data.category}</span>
            </p>
            <p>
              Rating:{' '}
              <span className="font-bold">{`${
                Math.round(data.rating.rate * 10) / 10
              } / 5.0`}</span>
            </p>
            <div className="mt-auto">
              <Badge className="text-[30px] mt-4" variant="outline">
                {data.price}
              </Badge>
            </div>
          </div>
          <div>
            <Image
              className="min-h-[300px] min-w-[300px]"
              src={data.image}
              width={300}
              height={300}
              alt={data.description}
            />
          </div>
        </Card>
      </Card>
    </div>
  )
}
