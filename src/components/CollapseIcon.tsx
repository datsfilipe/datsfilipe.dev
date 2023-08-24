import type { ReactNode } from 'react'
import {
  PiCaretRight,
  PiCaretDown
} from 'react-icons/pi'

export default function CollapseIcon ({ open }: { open: boolean }): ReactNode {
  return (
    <span className="mr-1">
      {open
        ? <PiCaretDown />
        : <PiCaretRight />
      }
    </span>
  )
}