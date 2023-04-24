const Error = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col justify-center items-center p-4 m-4 text-white bg-red-700 bg-opacity-30 rounded-2xl border-red-500 border-[1px]'>
      {children}
    </div>
  )
}

export { Error }