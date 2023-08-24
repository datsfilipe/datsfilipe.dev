import type { ReactNode } from 'react'

export default function TreeNode ({ children, isFolder, pathname, slug }: {
  children: ReactNode
  isFolder: boolean
  pathname?: string | undefined
  slug?: string | undefined
}): ReactNode {
  if (!isFolder) {
    const href = slug !== undefined ? `/brain/${slug}` : ''

    return (
      <a
        className={`flex flex-col pl-[1.5rem] ml-[0.45rem] py-1 border-l border-stone-800 hover:brightness-100 hover:border-blue-600 hover:text-blue-600 ${
          pathname === href ? 'text-blue-600 !border-blue-600' : ''
        }`}
        href={href}
      >
        {children}
      </a>
    )
  }

  return (
    <div className="flex flex-col ml-4 my-1">
      {children}
    </div>
  )
}