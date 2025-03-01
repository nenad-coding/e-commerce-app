'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { toast } from 'sonner'

export default function DeleteButton({ id, type }) {
  let in_sentence = ''
  switch (type) {
    case 'users':
      in_sentence = 'User'
    case 'products':
      in_sentence = 'Product'
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/${type}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to delete ${in_sentence}`)
      }

      const data = await response.json()
      toast(`${in_sentence} has been deleted.`)
    } catch (error) {
      console.error(`Error deleting ${in_sentence}`, error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div
          variant="outline"
          className="h-[35px] shadow-md text-red-500 w-[90px] rounded-lg border border-gray-100 flex">
          <p className="my-auto mx-auto">Delete</p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{' '}
            {in_sentence} and remove all data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
