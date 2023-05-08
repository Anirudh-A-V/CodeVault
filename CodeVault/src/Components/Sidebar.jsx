import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar h-screen max-h-screen min-h-screen min-w-fit w-[15%] flex flex-col items-center overflow-clip'>
      <h1 className='text-2xl font-bold mt-4'>CodeVault</h1>
      <input type='text' placeholder='Search' className='bg-gray-50 rounded-md px-4 py-1 mt-4 w-[90%]' />
      <div className='flex flex-col items-center mt-6 w-full flex-grow'>
        <h2 className='text-xl font-semibold'>All Questions</h2>
        <ul className='flex flex-col items-center w-full mt-2'>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 1</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 2</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 3</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 4</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 5</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 6</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 7</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 8</li>
        </ul>
      </div>
      <div className='flex flex-col items-center mt-1 mb-8 w-full'>
        <button className='bg-green-800 text-white px-4 py-2 rounded-md w-[90%] hover:bg-green-700'>Add Question</button>
      </div>
    </div>
  )
}

export default Sidebar