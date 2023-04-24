'use client'; // Error components must be Client components

import { useEffect } from 'react'
import { Error as ErrorComponent } from '@/components/error'

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
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
        <button
          onClick={() => reset()}
          className="py-2 px-4 text-white bg-red-700 rounded-xl hover:bg-red-600"
        >
          Try resetting
        </button>
      </ErrorComponent>
    </div>
  )
}