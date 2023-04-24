import { tv } from 'tailwind-variants'

type HexColor = `#${string}`

type BadgeProps = {
  items: { object: React.ReactNode, text?: string | number }[]
  children?: React.ReactNode
}

const badgeVariants = tv({
  slots: {
    container: 'flex flex-row justify-center items-center rounded-2xl bg-zinc-800 overflow-hidden',
    item: 'flex flex-row justify-center items-center text-md h-8 bg-black text-gray-400 px-2',
    content: 'text-md font-sans font-medium px-4',
  },
})

const Badge = ({ items, children }: BadgeProps) => {
  return (
    <div className={badgeVariants().container()}>
      {children && <span className={badgeVariants().content()}>{children}</span>}
      {items.map((item, index) => (
        <span key={index} className={badgeVariants().item()}>
          {item.object}{item.text && <span className='text-xs ml-[2px] mt-[2px]'>{item.text}</span>}
        </span>
      ))}
    </div>
  )
}

export { Badge }