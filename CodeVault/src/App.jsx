import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <div className='flex'>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
