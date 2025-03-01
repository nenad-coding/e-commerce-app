import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(
  () => import('../../../components/custom/Map/component'),
  {
    ssr: false,
  },
)

export default async function UserPage({ params }) {
  const data = await fetch(`https://fakestoreapi.com/users/${params.id}`).then(
    response => response.json(),
  )

  return (
    <div className="px-16 py-8">
      <Card className="px-8 py-4 flex flex-col h-full pb-24">
        <Link href={'/users'} className="mb-4">
          <Button
            className="min-w-[80px] shadow-lg"
            variant="outline"
            size="icon">
            <ChevronLeft /> Back
          </Button>
        </Link>
        <Card className="px-8 py-4 shadow-lg flex justify-between">
          <div className="flex w-full">
            <div className="flex flex-col w-1/2">
              <div className="text-2xl font-bold">
                <span className="capitalize">{data.name.firstname}</span>{' '}
                <span className="capitalize">{data.name.lastname}</span>
              </div>
              <p className="text-gray-500 text-sm  mb-8">{data.email}</p>
              <p>
                ID: <span className="font-bold text-xl">{data.id}</span>
              </p>
              <p>
                Usrname:{' '}
                <span className="font-bold text-xl">{data.username}</span>
              </p>
              <p>
                Phone: <span className="font-bold text-xl">{data.phone}</span>
              </p>
              <p className="text-2xl font-bold mt-8">Address</p>
              <p>
                City:{' '}
                <span className="font-bold text-xl">{data.address.city}</span>
              </p>
              <p>
                Street:{' '}
                <span className="font-bold text-xl">{data.address.street}</span>
              </p>
              <p>
                Street number:{' '}
                <span className="font-bold text-xl">{data.address.number}</span>
              </p>
              <p>
                Zipcode:{' '}
                <span className="font-bold text-xl">
                  {data.address.zipcode}
                </span>
              </p>
            </div>

            <div className="flex flex-col w-1/2">
              <MapComponent
                x_position={data.address.geolocation.lat}
                y_position={data.address.geolocation.long}
              />
            </div>
          </div>
        </Card>
      </Card>
    </div>
  )
}
