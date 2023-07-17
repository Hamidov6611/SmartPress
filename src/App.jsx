import './index.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/main.jsx'
import Onas from './pages/onas/onas.jsx'
import Smartres from '../src/pages/smartres/smartres.jsx'
import SmartAbout from './pages/about/smart-about'
import Notfound from './pages/notfound/notfound'
import SmartService from './pages/service/service'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Онас' element={<Onas />} />
        <Route path='/решения' element={<Smartres />} />
        <Route path='/Оборудование' element={<SmartAbout />} />
        <Route path='/service' element={<SmartService />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
