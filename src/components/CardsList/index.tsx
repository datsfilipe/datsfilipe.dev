'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { IoClose } from 'react-icons/io5'
import type { HTMLAttributes, ReactNode } from 'react'

interface CardsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
  listId: number;
}

export function CardsList ({ children, listId }: CardsListProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <>
      <div className='[&>*]:mb-5'>
        {children?.map((child, index) => (
          <motion.div
            key={index}
            layoutId={`${listId + 1}${index + 1}`}
            onClick={() => setSelectedId(parseInt(`${listId + 1}${index + 1}`))}
            className='hover:cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {child}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <div onClick={(e) => e.stopPropagation()}>
              <motion.div
                layoutId={`${selectedId}`}
                className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className='mx-auto mt-[calc(100vh-55vh)] max-w-[90%] max-md:max-w-[100%] h-fit'>
                  <div className='flex relative justify-end mx-4'>
                    {children[selectedId % 10 - 1]}
                    <motion.button
                      layoutId={`${selectedId}close`}
                      className='absolute top-0 right-0 p-1 m-2 text-red-600 bg-opacity-50 rounded-full dark:text-red-300 dark:bg-black bg-stone-500'
                      onClick={() => setSelectedId(null)}
                    >
                      <IoClose />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
