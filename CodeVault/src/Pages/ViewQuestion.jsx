import link from '../Assets/link.svg'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase'
import { collection, getDocs,doc,getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react';



const ViewQuestion = () => {
  
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [solution, setSolution] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [code, setCode] = useState('')
  const [notes, setNotes] = useState('')
  const [url , setUrl] = useState('')

  //fetch question details from firestore
  const { id } = useParams()
  useEffect(() => {
    const getQuestion = async () => {
      const docRef = doc(db, "questions", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data = docSnap.data()
        setTitle(data.title)
        setQuestion(data.question)
        setSolution(data.solution)
        setDescription(data.description)
    
        setTags(data.tags)
        //split tags by space
         const tag = data.tags.split(' ')
          setTags(tag)

        setCode(data.solution)
        setNotes(data.notes)
        setUrl(data.url)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getQuestion()
  }, [id])

//     const code = `class Solution:
//     def stringMirror(self, str : str) -> str:
//         # v1
//         # string_arr = []
//         # for k in range(0, len(str)):
//         #     substr = str[:k+1]
//         #     string = substr + substr[::-1]
//         #     string_arr.append(string)
           
//         # string_arr.sort() 
//         # return string_arr[0]
        
//         #v2
//         min_string = str + str[::-1]
//         rev_substr = str[::-1]
//         n = len(str)
//         for k in range(0, n):
//             substr = str[:k+1]
//             string = substr + rev_substr[-k-1:]
//             if string < min_string:
//                 min_string = string
           
//         return min_string
            



// #{ 
//  # Driver Code Starts
// if __name__=="__main__":
//     t = int(input())
//     for _ in range(t):
        
//         str = (input())
        
//         obj = Solution()
//         res = obj.stringMirror(str)
        
//         print(res)
        

// # } Driver Code Ends`

    return (
        <div className='flex flex-col p-4 items-start justify-start w-full flex-grow'>
            <h2 className='text-2xl font-semibold text-gray-900'>
                {title}
            </h2>
            <p className='text-gray-400 text-justify mt-2'>
                {description}
            </p>
            <div className='flex justify-between items-stretch w-full'>
                <div className='flex'>
                    
                    {/* <p className='text-gray-800 self-center py-1 rounded-lg bg-gray-200 text-center px-3 mt-2 mr-2'>
                        Dynamic Programming
                    </p> */}
                    {tags.map((tag, index) => (
                        <p key={index} className='text-gray-800 self-center py-1 rounded-lg bg-gray-200 text-center px-3 mt-2 mr-2'>
                            {tag}
                        </p>
                    ))}
                </div>
                <a href={url} className='flex mt-4 items-center hover:underline' target='_blank'>
                    <p className='text-gray-800 text-sm'>
                        Link to Question
                    </p>
                    <div className='w-6 h-6  flex justify-center items-center text-neutral-900 rounded-full hover:bg-neutral-200'>
                        <img src={link} className='w-4 h-4 inline-block ' alt='link' />
                    </div>
                </a>

            </div>
            <div className='flex flex-col items-start justify-start w-full mt-6'>
                <h3 className='text-xl font-semibold text-gray-900'>
                    Answers
                </h3>
                <div className='flex flex-col items-start justify-start w-full border rounded-md mt-4 p-4 '>
                    <h4 className='text-lg font-semibold text-gray-900'>
                        Notes
                    </h4>
                    <p className='text-gray-700 text-justify mt-2'>
                       {notes}
                    </p>
                </div>
                <div className='flex flex-col items-start justify-start w-full mt-4 '>
                    <h4 className='text-lg font-semibold text-gray-900'>
                        Code
                    </h4>
                    <div className='text-gray-700 text-justify mt-2 border w-full rounded-md p-4 '>
                        <SyntaxHighlighter language="python" style={syntaxStyle}  showLineNumbers={true} wrapLines={true} wrapLongLines={true}>
                            {code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>

            {/* <div className='flex flex-col items-start justify-start w-full border rounded-md mt-4 p-4'>
                Amet aliquip enim elit tempor sint ad magna incididunt laboris eu. Deserunt aliquip officia voluptate nisi voluptate ullamco consectetur est consequat dolor laboris. Consequat mollit sunt anim mollit ipsum aliquip quis culpa id. Proident tempor elit exercitation incididunt elit elit consequat. Elit irure anim esse fugiat excepteur sunt labore cillum Lorem proident. Deserunt exercitation elit magna aute in nostrud ea veniam adipisicing nisi.
            </div> */}
        </div>

    )
}

export default ViewQuestion