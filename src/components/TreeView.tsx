import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { CollapseIcon } from './CollapseIcon'
import type { z } from 'astro/zod'
import type { notesSchema } from '../content/config'

type NoteData = z.infer<typeof notesSchema>
interface NoteNode {
  slug: string
  title: string
}

type MapOrObject<T> = Map<string, MapOrObject<T>> | T
interface TreeNode<T> extends Map<string, MapOrObject<T>> {}

const Node = ({ children, isFolder, pathname, slug }: {
  children: ReactNode
  isFolder: boolean
  pathname?: string
  slug?: string | undefined
}): ReactNode => {
  if (!isFolder) {
    const href = slug !== undefined ? `/brain/${slug}` : ''

    return (
      <a
        className={`flex flex-col pl-[1.5rem] ml-[0.45rem] py-1 border-l border-stone-700 hover:brightness-100 hover:border-blue-600 hover:text-blue-600 ${
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

export const TreeView = ({ notes, pathname }: {
  notes: Array<{ slug: string, data: NoteData }>
  pathname?: string
}): ReactNode => {
  const [tree, setTree] = useState<TreeNode<NoteNode>>(new Map())
  const [openedNodes, setOpenedNodes] = useState<Set<string>>(new Set())

  useEffect(() => {
    const newTree = new Map(tree)

    for (const note of notes) {
      const parts = note.slug.split('/')
      let currentMap = newTree

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i] as string

        if (!currentMap.has(part)) {
          if (i === parts.length - 1) {
            const noteNode: NoteNode = { slug: note.slug, title: note.data.title }
            currentMap.set(part, noteNode)
          } else {
            currentMap.set(part, new Map())
          }
        }

        currentMap = currentMap.get(part) as Map<string, MapOrObject<NoteNode>>
      }

      setTree(newTree)
    }
  }, [notes])

  const toggleNode = (slug: string): void => {
    setOpenedNodes(prevOpenedNodes => {
      const newOpenedNodes = new Set(prevOpenedNodes)
      newOpenedNodes.has(slug) ? newOpenedNodes.delete(slug) : newOpenedNodes.add(slug)
      return newOpenedNodes
    })
  }

  const renderTree = (tree: TreeNode<NoteNode>): ReactNode => {
    const sortedEntries = Array.from(tree.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
      const isFolderA = valueA instanceof Map
      const isFolderB = valueB instanceof Map

      if (isFolderA && !isFolderB) {
        return -1
      } else if (!isFolderA && isFolderB) {
        return 1
      } else {
        return keyA.localeCompare(keyB)
      }
    })

    return (
      <>
        {sortedEntries.map(([key, value]) => {
          const isOpened = openedNodes.has(key)
          const isFolder = value instanceof Map
          const isPageOpened = !isFolder && pathname === value.slug

          return (
            <li key={key} className="first:mt-2 text-stone-300">
              <Node
                isFolder={isFolder}
                pathname={pathname}
                slug={!isFolder ? value.slug : undefined}
              >
                <button className="flex items-center w-full" onClick={() => { toggleNode(key) }}>
                  {isFolder && (
                    <CollapseIcon
                      open={isOpened}
                    />
                  )}
                  <span className='text-left'>
                    {isFolder ? key : value.title}
                  </span>
                </button>
                {isFolder && (
                  <ul className="flex flex-col">
                    {isOpened && renderTree(value as TreeNode<NoteNode>)}
                  </ul>
                )}
              </Node>
            </li>
          )
        })}
      </>
    )
  }

  return (
    <ul className="mt-8 flex flex-col space-y-2 max-w-[18rem] p-2">
      {renderTree(tree)}
    </ul>
  )
}