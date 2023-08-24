import { useState, type KeyboardEventHandler, useRef, useEffect, type ReactNode } from 'react'
import { PiMagnifyingGlass } from 'react-icons/pi'

interface Entry {
  title: string
  slug: string
}

export default function Searchbox ({ entries }: { entries: Entry[] }): ReactNode {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const dropdown = useRef<HTMLDivElement>(null)

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event): void => {
    event.preventDefault()

    if (event.key === 'ArrowDown') {
      setSelectedIndex(Math.min(selectedIndex + 1, entries.length - 1))
    } else if (event.key === 'ArrowUp') {
      setSelectedIndex(Math.max(selectedIndex - 1, -1))
    } else if (event.key === 'Enter') {
      const entry = entries[selectedIndex] as Entry

      if (entry !== undefined) {
        window.location.href = `/brain/${entry.slug}`
      }
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (container.current !== null && !container.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isDropdownOpen && (dropdown.current !== null)) {
      const selectedItem = dropdown.current.querySelector('#selected') as HTMLElement
      if (selectedItem !== null) {
        const dropdownHeight = dropdown.current.clientHeight
        const scrollThreshold = selectedItem.offsetTop + selectedItem.clientHeight - dropdownHeight

        if (selectedItem.offsetTop >= scrollThreshold) {
          dropdown.current.scrollTop = selectedItem.offsetTop - dropdownHeight + selectedItem.clientHeight
        }
      }
    }
  }, [isDropdownOpen, selectedIndex])

  return (
    <div className="relative" ref={container}>
      <div className="flex items-center w-full rounded-sm p-1 px-2 text-stone-300 text-sm bg-neutral-800 border border-stone-700">
        <PiMagnifyingGlass size={18} />
        <input
          type="text"
          placeholder="Search page..."
          className="w-full bg-transparent p-1 ml-2 focus:outline-none"
          onKeyDown={handleKeyDown}
          onFocus={toggleDropdown}
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute p-0 top-full flex flex-col max-h-[35rem] overflow-y-scroll mt-2 left-0 w-full bg-neutral-800 rounded-sm border border-stone-700" ref={dropdown}>
          {entries.map((entry, index) => (
            <a
              key={index}
              className={`${index === selectedIndex ? 'bg-neutral-700 selected' : 'hover:bg-neutral-600'} px-4 py-2 cursor-pointer hover:no-underline`}
              href={`/brain/${entry.slug}`}
              id={index === selectedIndex ? 'selected' : ''}
            >
              {entry.title}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}