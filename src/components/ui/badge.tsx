import { tv } from 'tailwind-variants'

type BadgeProps = {
  items: { object: React.ReactNode, text?: string | number }[]
  children?: React.ReactNode
}

const badgeVariants = tv({
  slots: {
    container: 'flex flex-row justify-center items-center h-10 rounded-md border-[1px] border-zinc-700 overflow-hidden',
    item: 'flex flex-row justify-center items-center text-lg bg-black text-gray-400 px-2',
    content: 'text-md font-sans px-4',
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