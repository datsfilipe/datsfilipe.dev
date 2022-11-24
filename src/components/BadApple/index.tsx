'use client'
import { BadApple as BadAppleComponent } from '@datsfilipe/react-bad-apple'
import { Button } from '../Button'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export function BadApple () {
  const [hidden, setHidden] = useState(false)

  return (
    <>
      {!hidden && (
        <div className='overflow-hidden absolute w-screen h-screen text-base opacity-50 select-none text-stone-400 dark:text-stone-700'>
          <BadAppleComponent
            width={90}
            height={50}
            framesDir={'/frames'}
            loop
            customStyles={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
        </div>
      )}
      <Button
        onClick={() => setHidden(!hidden)}
        className='fixed right-4 bottom-4 z-30 p-3'
        aria-label='Toggle Bad Apple'
        title='Toggle Bad Apple'
      >
        {hidden ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </Button>
    </>
  )
}
