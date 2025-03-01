'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { usePathname } from 'next/navigation'

export default function BreadcrumpContainer() {
  const pathname = usePathname()
  let paths = pathname.split('/')

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths &&
          paths.map((path, index) => (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink
                  className="capitalize"
                  href={
                    path == ''
                      ? '/'
                      : index == paths.length - 1
                      ? `${path}`
                      : `/${path}`
                  }>
                  {path == '' ? 'Home' : path}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="last:hidden" />
            </>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
