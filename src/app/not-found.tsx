import Image from 'next/image'

export default function NotFound() {
  return (
    <main className='flex flex-col justify-center items-center h-screen space-y-12'>
      <div className='relative h-1/3 w-full max-w-lg'>
        <Image
          src='/not-found.svg'
          alt='Not found'
          fill
        />
      </div>
      <div className='flex flex-col justify-center items-center space-y-6'>
        <h1 className='text-3xl font-bold font-secondary text-center'>
          Page not found
        </h1>
        <p className='text-gray-700 dark:text-gray-400 text-center'>
          The page you&apos;re looking for doesn&apos;t exist.<br/>
          <b>Maybe you want to go back! 🕵🏻</b>
        </p>
      </div>
    </main>
  )
}