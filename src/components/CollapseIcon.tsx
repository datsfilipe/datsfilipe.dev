import type { ReactNode } from 'react'
import {
  FaAngleRight,
  FaAngleDown
} from 'react-icons/fa'

export const CollapseIcon = ({
  open
}: {
  open: boolean
  onClick?: () => void
}): ReactNode => {
  return (
    <span className="mr-1">
      {open
        ? <FaAngleDown />
        : <FaAngleRight />
      }
    </span>
  )
}