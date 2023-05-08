import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, getDocs,doc } from 'firebase/firestore'




const Sidebar = () => {

  //fetch questions stored from firestore
   const [questions, setQuestions] = useState([])
    const getQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      if (querySnapshot.empty) {
        console.log("No questions available");
      }
      else {
      const questionArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      //console.log(questionArray);
      setQuestions(questionArray);
      }
    }
    useEffect(() => {
      getQuestions();
    }, []);
  return (
    <div className='sticky top-0 mr-5 z-0 sidebar h-screen max-h-screen min-h-screen min-w-fit w-[15%] flex flex-col items-center overflow-y-auto'>
    
      <h1 className='text-2xl font-bold mt-4'>CodeVault</h1>
      <input type='text' placeholder='Search' className='bg-gray-50 rounded-md px-4 py-1 mt-4 w-[90%] text-black' />
      <div className='flex flex-col items-center mt-6 w-full flex-grow'>
        <h2 className='text-xl font-semibold'>All Questions</h2>
        <ul className='flex flex-col items-center w-full mt-2'>
          {/* <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 1</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 2</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 3</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 4</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 5</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 6</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 7</li>
          <li className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>Question 8</li> */}
          
          {questions.map((question) => (
            <li key={question.id} className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>
              <a href={`/question/${question.title}`}>{question.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-center mt-1 mb-8 w-full'>
        <button className='bg-green-800 text-white px-4 py-2 rounded-md w-[90%] hover:bg-green-700'>
          <a href='/add'>Add Question</a>
        </button>
      </div>
    </div>
  )
}

export default Sidebar