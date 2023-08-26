import type { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

const treeView = tv({
  base: 'flex flex-col space-y-2 max-w-[18rem] p-2 -ml-6'
})

interface TreeRootProps {
  children?: ReactNode
}

export default function TreeRoot ({
  children
}: TreeRootProps): React.ReactElement {
  return (
    <ul className={treeView()}>
      {children}
    </ul>
  )
}