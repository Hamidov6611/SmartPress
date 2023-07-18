import './index.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/main.jsx'
import Onas from './pages/onas/onas.jsx'
import Smartres from '../src/pages/smartres/smartres.jsx'
import SmartAbout from './pages/about/smart-about'
import Notfound from './pages/notfound/notfound'
import SmartService from './pages/service/service'
import AdminLogin from './pages/dashboard/login/login'
import MainAdmin from './pages/dashboard/admin/main-admin'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Онас' element={<Onas />} />
        <Route path='/решения' element={<Smartres />} />
        <Route path='/Оборудование' element={<SmartAbout />} />
        <Route path='/service' element={<SmartService />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/dashboard' element={<MainAdmin />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
