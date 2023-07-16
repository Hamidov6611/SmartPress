import './index.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/main.jsx'
import Onas from './pages/onas/onas.jsx'
import Smartres from '../src/pages/smartres/smartres.js'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Онас' element={<Onas />} />
        <Route path='/решения' element={<Smartres />} />
      </Routes>
    </>
  )
}

export default App
