import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/firebase'
import { collection, getDocs, doc } from 'firebase/firestore'



const Sidebar = () => {
	const [questions, setQuestions] = useState([])
	const [loading, setLoading] = useState(true)

	//fetch questions stored from firestore
	const getQuestions = async () => {
		const querySnapshot = await getDocs(collection(db, "questions"));
		if (querySnapshot.empty) {
			console.log("No questions available");
		}
		else {
			const questionArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
			//console.log(questionArray);
			setQuestions(questionArray);
			setLoading(false)
		}
	}

	useEffect(() => {
		getQuestions();
	}, []);


	return (
		<div className='sticky top-0 mr-5 z-0 sidebar h-screen max-h-screen min-h-screen min-w-fit w-[15%] flex flex-col items-center overflow-y-clip'>
			{loading ? (
				<div className='flex items-center justify-center w-[220px] h-screen max-h-screen min-h-screen'>
					<span class="loader2"></span>
				</div>
			) : (
				<>
					<h1 className='text-2xl font-bold mt-4'>CodeVault</h1>
					<input type='text' placeholder='Search' className='bg-gray-50 rounded-md px-4 py-1 mt-4 w-[90%] text-black' />
					<div className='questions flex flex-col items-center mt-6 w-full flex-grow overflow-y-auto'>
						<h2 className='text-xl font-semibold'>All Questions</h2>
						<ul className='flex flex-col items-center w-full mt-2'>
							{questions.map((question) => (
								<li key={question.id} className='px-4 py-3 w-full text-gray-400 border-y-[1px] border-zinc-800 hover:bg-gray-100 hover:text-[#242424] cursor-pointer'>
									<a href={`/question/${question.title}`}>{question.title}</a>
								</li>
							))}
						</ul>
					</div>
					<div className='flex flex-col items-center mt-4 mb-4 w-full'>
						<button className='bg-green-800 text-white px-4 py-2 rounded-md w-[90%] hover:bg-green-700'>
							<a href='/add'>Add Question</a>
						</button>
					</div>
				</>
			)}
		</div>

	)
}

export default Sidebar