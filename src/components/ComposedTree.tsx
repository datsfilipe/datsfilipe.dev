import type { ReactElement, ReactNode } from 'react'
import type { ITreeView, NoteData, NoteNode } from './TreeView/utils/types'
import { useEffect, useState } from 'react'
import { Tree } from './TreeView'

import { generateTree } from './TreeView/utils/generateTree'
import { toggleNode } from './TreeView/utils/toggleNode'
import { sortTree } from './TreeView/utils/sortTree'

interface ComposedTreeProps {
  notes: Array<{ slug: string, data: NoteData }>
  pathname: string
}

interface RecursiveRenderProps {
  tree: ITreeView<NoteNode>
  pathname: string
}

const RecursiveRender = ({
  tree,
  pathname
}: RecursiveRenderProps): ReactNode => {
  const [openNodes, setOpenNodes] = useState<Set<string>>(new Set())
  const sortedTree = sortTree(tree)

  return sortedTree.map(([key, value]) => {
    const slug = value instanceof Map ? undefined : value.slug
    const isMap = value instanceof Map

    return (
      <Tree.List key={key}>
        <Tree.Node
          type={isMap ? 'folder' : 'file'}
          pathname={pathname}
          slug={slug}
        >
          <Tree.Button onClick={() => { setOpenNodes(toggleNode(openNodes, key)) }}>
            {isMap && (
              <Tree.Icon open={openNodes.has(key)} />
            )}
            <span className='text-left'>
              {isMap ? key : value.title}
            </span>
          </Tree.Button>
        </Tree.Node>
        {isMap && openNodes.has(key) && (
          <RecursiveRender
            tree={value}
            pathname={pathname}
          />
        )}
      </Tree.List>
    )
  })
}

export default function ComposedTree ({
  notes,
  pathname
}: ComposedTreeProps): ReactElement {
  const [tree, setTree] = useState(generateTree(notes))

  useEffect(() => {
    const updatedTree = generateTree(notes)
    if (updatedTree !== tree) {
      setTree(updatedTree)
    }
  }, [notes])

  return (
    <Tree.Root>
      <RecursiveRender
        tree={tree}
        pathname={pathname}
      />
    </Tree.Root>
  )
}