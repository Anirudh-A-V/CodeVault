import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { collection, getDocs,doc,getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




const ViewQuestion = () => {



  //function to fetch question details from firestore based on url params
  const questionId = useParams();
  console.log(questionId);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [tags, setTags] = useState([])
  const [notes, setNotes] = useState('')
  const [solution, setSolution] = useState('')
  const [language, setLanguage] = useState('')


   const getQuestion = async () => {console.log("get question")
      const questionRef = doc(db, "questions", questionId);
      const docSnap = await getDoc(questionRef);
      console.log(docSnap)
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setTitle(docSnap.data().title)
        setDescription(docSnap.data().description)
        setUrl(docSnap.data().url)
        setTags(docSnap.data().tags)
        setNotes(docSnap.data().notes)
        setSolution(docSnap.data().solution)
        setLanguage(docSnap.data().language)

      } else {
        console.log("No such document!");
      }
    }
    useEffect(() => {
      getQuestion();
    }, []);

  return (
    <div className='flex flex-col items-center justify-start w-full flex-grow'>
        <h2 className='text-2xl font-semibold text-gray-900 mt-4'>
            Edit Question
        </h2>
        <p className='text-gray-400 text-center mt-2'>
            View and edit question details.
        </p>
        <div className='flex flex-col items-start mt-6 w-full flex-grow overflow-y-auto'>
            <form className='flex flex-col items-start w-full mb-10'>
                <div className='relative mb-6 w-full'>
                    <input
                        type="text"
                        className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-600 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none  [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                        id="Title"
                        required
                        value={title}
                        placeholder="Title"
                        onChange={(e) => { 
                            setTitle(e.target.value)
                        }}
                    />
                    <label
                        htmlFor="Title"
                        className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-600 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none"
                    >
                        Title
                    </label>
                </div>
                <div className='relative mb-6 w-full'>
                    <textarea
                        className="peer m-0 block h-[150px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-600 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none  [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                        id="Description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                            }
                        }
                    />
                    <label
                        htmlFor="Description"
                        className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-600 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none"
                    >
                        Description
                    </label>
                </div>
                <div className='relative mb-6 w-full'>
                    <input
                        type="url"
                        className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-600 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none  [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                        id="url"
                        placeholder="url"
                        value={url}
                        onChange={(e) => { 
                            //remove http:// from url
                          
                        
                            setUrl(e.target.value)
                        }}
                        required
                    />
                    <label
                        htmlFor="url"
                        className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-600 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none"
                    >
                        url
                    </label>
                </div>
                <div className='relative mb-6 w-full'>
                    <textarea
                        className="peer m-0 block h-[300px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-600 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none  [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                        id="Solution"
                        placeholder="Solution"
                        value={solution}
                        onChange={(e) => {
                            setSolution(e.target.value);
                         }}
                    />
                    <label
                        htmlFor="Solution"
                        className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-600 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none"
                    >
                        Code
                    </label>
                </div>
                <div className='relative mb-6 w-full'>
                    <textarea
                        className="peer m-0 block h-[300px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-600 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none  [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                        id="Notes"
                        value={notes}
                        placeholder="Notes"
                        onChange={(e) => { 
                            setNotes(e.target.value)
                        }}
                    />
                    <label
                        htmlFor="Notes"
                        className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-600 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none"
                    >
                        Notes
                    </label>
                </div>
                <div className='relative mb-6 w-full'>
                    <label htmlFor='language' className='text-neutral-600 mt-4'>Language</label>
                    <select id='language' className='bg-gray-50 rounded-md px-4 py-1 mt-2 w-full'
                    value={language} onChange={(e) => {
                        setLanguage(e.target.value)
                    }}>
                    
                        <option value='javascript'>JavaScript</option>
                        <option value='python'>Python</option>
                        <option value='java'>Java</option>
                        <option value='c++'>C++</option>
                        <option value='c#'>C#</option>
                        <option value='php'>PHP</option>
                        <option value='ruby'>C</option>
                    </select>
                </div>

                <div className='relative mb-6 w-full'>
                    <input
                        type="text"
                        className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-600 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none  [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                        id="Tags"
                        placeholder="Tags"
                        onChange={(e) => { 
                            setTags(e.target.value)
                        }}
                    />
                    <label
                        htmlFor="Tags"
                        className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-600 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none"
                    >
                        Tags
                    </label>
                </div>
                <button className='bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4' type='submit' >
                    Submit
                </button>
            </form>
        </div>
    </div>
)
}

export default ViewQuestion