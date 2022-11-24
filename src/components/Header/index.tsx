import { ToggleThemeBtn } from '../ToggleThemeBtn'
import { Navigation } from '../Navigation'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export function Header () {
  return (
    <header className='flex fixed z-10 justify-between items-center p-4 w-screen bg-opacity-20 dark:bg-opacity-5 max-sm:p-2 bg-neutral-100 backdrop-blur-sm dark:bg-neutral-700'>
      <div className='flex items-center'>
        <h2 className='text-xl font-bold text-orange-500 max-lg:hidden font-mplus'>datsfilipe</h2>
        <a
          href='https://github.com/datsfilipe'
          className='ml-3 text-xl transition-all hover:text-2xl hover:text-orange-500 max-sm:ml-2 max-sm:text-lg max-lg:ml-0 text-stone-600 dark:text-neutral-300 hover:dark:text-orange-500'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/datsfilipe'
          className='ml-3 text-xl transition-all hover:text-2xl hover:text-orange-500 max-sm:ml-2 max-sm:text-lg text-stone-600 dark:text-neutral-300 hover:dark:text-orange-500'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://twitter.com/datsfilipe1'
          className='ml-3 text-xl transition-all hover:text-2xl hover:text-orange-500 max-sm:ml-2 max-sm:text-lg text-stone-600 dark:text-neutral-300 hover:dark:text-orange-500'
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter />
        </a>
      </div>
      <Navigation />
      <ToggleThemeBtn />
    </header>
  )
}
