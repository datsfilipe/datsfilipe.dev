import type { ReactNode } from 'react'

export default function TreeNode (props: {
  children: ReactNode
  isFolder: boolean
  pathname?: string | undefined
  slug?: string | undefined
}): ReactNode {
  if (!props.isFolder) {
    const href = props.slug !== undefined ? `/brain/${props.slug}` : ''

    return (
      <a
        className={`flex flex-col pl-[1.5rem] ml-[0.45rem] py-1 border-l border-stone-800 hover:brightness-100 hover:border-blue-600 hover:text-blue-600 ${
          props.pathname === href ? 'text-blue-600 !border-blue-600' : ''
        }`}
        href={href}
      >
        {props.children}
      </a>
    )
  }

  return (
    <div className="flex flex-col ml-4 my-1">
      {props.children}
    </div>
  )
}