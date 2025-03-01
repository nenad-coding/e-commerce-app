import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Card } from '@/components/ui/card'
import { getAllCategoriesAndProducts } from '../services/productService'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default async function CategoriesPage() {
  const categoryMap = await getAllCategoriesAndProducts()

  return (
    <div className="p-8">
      <Card className="px-8 py-4">
        {Object.keys(categoryMap).length > 0 &&
          Object.keys(categoryMap).map((category, index) => (
            <Accordion className="mb-4" type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="capitalize">{category}</p>
                </AccordionTrigger>
                <AccordionContent>
                  {categoryMap[category].map(product => (
                    <div className="mb-8 flex flex-col">
                      <p className="font-semibold text-base">{product.title}</p>
                      <div className="flex justify-between">
                        <p className="min-w-[50px] text-xl font-bold">
                          {`[${product.id}]`}
                        </p>
                        <p className="text-gray-500 grow mr-4">
                          {product.description}
                        </p>
                        <div className="flex gap-x-2 min-w-[200px]">
                          <p className="text-xl">
                            {`${
                              Math.round(product.rating.rate * 10) / 10
                            } / 5.0`}
                          </p>
                          <p>
                            <span className="text-xl text-green-700">
                              {product.rating.count}
                            </span>{' '}
                            reviews
                          </p>
                        </div>
                        <p className="font-bold min-w-[70px] text-end text-2xl mr-4">
                          {product.price}
                        </p>
                        <Link href={`/products/${product.id}`}>
                          <Button
                            className="min-w-[40px] max-w-[40px]"
                            variant="outline"
                            size="icon">
                            <ChevronRight />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
      </Card>
    </div>
  )
}
