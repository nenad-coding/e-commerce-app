'use client'

import { toast } from 'sonner'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters.' }),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const router = useRouter()

  // Login submit handler
  async function onSubmit(values) {
    console.log(values)
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        toast('Invalid credentials!')
      }

      const responseData = await response.json()
      toast('You are logged in!')
      router.push('/')

      localStorage.setItem('authToken', responseData.token)
    } catch (error) {
      toast('Invalid credentials!')
    }
  }

  return (
    <div className="py-12 px-56 mr-[250px]">
      <Card className="px-4 py-8 max-w-[600px] mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username..." {...field} />
                  </FormControl>
                  <FormDescription>Enter your username...</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription>Enter your password...</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}
