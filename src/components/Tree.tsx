import type { ReactElement } from 'react'
import CollapseIcon from './CollapseIcon'
import TreeNode from './TreeNode'
import type { ITreeView, NoteNode } from './TreeView'

export default function Tree (props: {
  tree: ITreeView<NoteNode>
  openedNodes: Set<string>
  toggleNode: (slug: string) => void
  pathname?: string | undefined
}): ReactElement {
  const sortedEntries = Array.from(props.tree.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
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
        const isOpened = props.openedNodes.has(key)
        const isFolder = value instanceof Map

        return (
          <li key={key} className="first:mt-2 text-stone-300">
            <TreeNode
              isFolder={isFolder}
              pathname={props.pathname}
              slug={!isFolder ? value.slug : undefined}
            >
              <button className="flex items-center w-full" onClick={() => { props.toggleNode(key) }}>
                {isFolder && <CollapseIcon open={isOpened} />}
                <span className="text-left">{isFolder ? key : value.title}</span>
              </button>
              {isFolder && (
                <ul className="flex flex-col">{isOpened && <Tree
                  tree={value as ITreeView<NoteNode>}
                  openedNodes={props.openedNodes}
                  toggleNode={props.toggleNode}
                  pathname={props.pathname}
                />}</ul>
              )}
            </TreeNode>
          </li>
        )
      })}
    </>
  )
}