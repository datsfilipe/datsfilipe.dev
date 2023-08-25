import React, { useEffect, useState } from 'react'
import type { z } from 'astro/zod'
import type { notesSchema } from '../content/config'
import Tree from './Tree'

type NoteData = z.infer<typeof notesSchema>
export interface NoteNode {
  slug: string
  title: string
}

type MapOrObject<T> = Map<string, MapOrObject<T>> | T
export interface ITreeView<T> extends Map<string, MapOrObject<T>> {}

const generateTree = (notes: Array<{ slug: string, data: NoteData }>): ITreeView<NoteNode> => {
  const newTree = new Map()

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
  }

  return newTree
}

interface TreeViewProps {
  notes: Array<{ slug: string, data: NoteData }>
  pathname?: string
}

export default function TreeView (props: TreeViewProps): React.ReactElement {
  const [tree, setTree] = useState<ITreeView<NoteNode>>(generateTree(props.notes))
  const [openedNodes, setOpenedNodes] = useState<Set<string>>(new Set())

  useEffect(() => {
    const newTree = generateTree(props.notes)
    if (newTree !== tree) {
      setTree(newTree)
    }
  }, [props.notes])

  const toggleNode = (slug: string): void => {
    setOpenedNodes((prevOpenedNodes) => {
      const newOpenedNodes = new Set(prevOpenedNodes)
      newOpenedNodes.has(slug) ? newOpenedNodes.delete(slug) : newOpenedNodes.add(slug)
      return newOpenedNodes
    })
  }

  return (
    <ul className="flex flex-col space-y-2 max-w-[18rem] p-2 -ml-6">
      <Tree tree={tree} openedNodes={openedNodes} toggleNode={toggleNode} {...props} />
    </ul>
  )
}