import type { ReactNode } from 'react'
import {
  PiCaretRight,
  PiCaretDown
} from 'react-icons/pi'

export const CollapseIcon = ({
  open
}: {
  open: boolean
  onClick?: () => void
}): ReactNode => {
  return (
    <span className="mr-1">
      {open
        ? <PiCaretDown />
        : <PiCaretRight />
      }
    </span>
  )
}