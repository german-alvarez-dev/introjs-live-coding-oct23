import './App.css'
import { Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import CoastersPage from './pages/CoastersPage'
import CoasterDetails from './pages/CoasterDetails'


function App() {

  return (

    <Routes>

      <Route path='/' element={<IndexPage />} />

      <Route path='/galeria' element={<CoastersPage />} />

      <Route path='/detalles/:coaster_id' element={<CoasterDetails />} />

    </Routes>

  )
}

export default App