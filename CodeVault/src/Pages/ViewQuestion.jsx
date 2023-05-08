import link from '../Assets/link.svg'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/firebase'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import Loader from '../Components/Loader';

const ViewQuestion = () => {

    const [title, setTitle] = useState('')
    const [question, setQuestion] = useState('')
    const [solution, setSolution] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [language, setLanguage] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState([])
    const [code, setCode] = useState('')
    const [notes, setNotes] = useState('')
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(true)

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
                
                const lng = data.language
                setLanguage(lng.toLowerCase())

                setCode(data.solution)
                setNotes(data.notes)
                setUrl(data.url)
                setLoading(false)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        getQuestion()
    }, [id])

    if (loading) return (
        <Loader />
    )

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
                        <SyntaxHighlighter language={language} style={syntaxStyle} showLineNumbers={true} wrapLines={true} wrapLongLines={true}>
                            {code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewQuestion