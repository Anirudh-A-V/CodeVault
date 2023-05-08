import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import AddQuestion from './Pages/AddQuestion'
import ViewQuestion from './Pages/ViewQuestion'

function App() {

  return (
    <div className='flex'>
      <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddQuestion />} />
            <Route path='/question/:id' element={<ViewQuestion />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
