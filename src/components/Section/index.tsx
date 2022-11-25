'use client'
import type { MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { HTMLAttributes, ReactNode } from 'react'

interface SectionProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode[];
}

export function Section ({ children, ...props }: SectionProps & MotionProps) {
  const { className, variants, ...rest } = props

  return (
    <motion.section className={`flex min-h-screen ${className ? className : ''}`} {...rest}>
      {children?.map((child: ReactNode, index: number) => (
        <motion.div
          key={index}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.2 }}
          variants={variants}
        >
          {child}
        </motion.div>
      ))}
    </motion.section>
  )
}
