'use client'
import toast from 'react-hot-toast'
import { FormEvent, useState } from 'react'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'

type Email = {
  email?: string;
  message?: string;
}

export default function Contact () {
  const [email, setEmail] = useState<Email | null>(null)

  const handleSendEmail = async (e: FormEvent) => {
    e.preventDefault()

    const toastId = toast.loading('Sending email...')

    if (!email) return

    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })

    if (response.ok) {
      setEmail(null)

      toast.dismiss(toastId)

      toast.success('Email sent successfully!')
    } else {
      toast.error('An error occurred while sending the email.')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mx-10 min-h-screen'>
      <main className='flex flex-col items-center w-full max-w-3xl'>
        <Title className='my-14 text-8xl max-md:text-5xl font-mplus'>Say Hello!</Title>
        <form onSubmit={handleSendEmail} className='flex flex-col [&>*]:mb-4 [&>button]:mt-6 w-full'>
          <label htmlFor='email' className='font-serif text-lg font-medium'>Your email:</label>
          <input
            type='email'
            id='email'
            className='p-4 font-serif rounded-3xl border-2 border-stone-400 text-neutral-900 placeholder:text-neutral-400 placeholder:italic bg-neutral-100 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:border-stone-700 dark:bg-neutral-800'
            placeholder='datsfilipe.dev@gmail.com'
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
            value={email?.email || ''}
            aria-label='Your email'
            required
          />
          <label htmlFor='message' className='font-serif text-lg font-medium'>Your message:</label>
          <textarea
            id='message'
            className='p-4 font-serif rounded-3xl border-2 resize-none text-neutral-900 placeholder:text-neutral-400 placeholder:italic border-stone-400 bg-neutral-100 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:border-stone-700 dark:bg-neutral-800'
            rows={6}
            placeholder='Hello...'
            onChange={(e) => setEmail({ ...email, message: e.target.value })}
            value={email?.message || ''}
            aria-label='Your message'
            required
          />
          <Button
            className='ml-auto'
            type='submit'
            aria-label='Send email'
            aria-disabled={email?.email && email?.message ? false : true}
            title={email?.email && email?.message ? 'Send email' : 'Fill in all fields'}
            disabled={email?.email && email?.message ? false : true}
          >
            Send
          </Button>
        </form>
      </main>
    </div>
  )
}
