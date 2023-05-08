import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full flex-grow'>
        <h2 className='text-2xl font-semibold text-gray-900'>
            Welcome to CodeVault
        </h2>
        <p className='text-gray-400 text-center mt-2'>
            Add a question or select one from the sidebar to get started
        </p>
    </div>
  )
}

export default Home