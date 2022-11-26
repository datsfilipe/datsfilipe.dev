import { UserInfo } from '../components/UserInfo'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BadApple } from '../components/BadApple'

export default function Page() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <div className='z-10 mx-4 text-7xl font-bold shadow-inner max-lg:text-5xl max-md:text-2xl max-md:mt-28 max-lg:mt-5 font-mplus'>
        <UserInfo />
        <h1 className='mt-6 text-orange-700 dark:text-orange-600'>
          Filipe Lima,
        </h1>
        <h1>Web Developer,</h1>
        <h1>I&apos;m making what I love &lt;3</h1>
        <div className='flex text-neutral-600 dark:text-neutral-500'>
          <FaMapMarkerAlt />
          <h1 className='ml-2'>Brazil, Porto Franco - MA</h1>
        </div>
      </div>
      <BadApple />
    </div>
  )
}
