'use client'
import { useEffect } from 'react'
import { Error as ErrorComponent } from '@/components/error'

export default function Error({
  error,
}: {
  error: Error;
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ErrorComponent>
        <h2 className="mb-4 font-serif text-2xl font-bold">
          Something went wrong!
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          Maybe you want to reload the page? 😅
        </p>
      </ErrorComponent>
    </div>
  )
}