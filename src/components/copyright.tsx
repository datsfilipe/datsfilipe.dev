import { link } from '@/styles/appVariants'

export const Copyright = () => {
  return (
    <>
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className={link({ type: 'secondary' }) + ' mr-2'}
        aria-label='Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License'
      >
        CC BY-NC-SA 4.0
      </a>2023-PRESENT © Filipe Lima
    </>
  )
}