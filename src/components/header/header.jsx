import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'


const Header = () => {
  const [drop, setDrop] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const dropHandler = () => setDrop(prev => !prev)
  const dropHandler2 = () => setDrop2(prev => !prev)
  return (
    <div className={`w-[100%] h-[96px] bg-white border-b-4 border-b-[#dbd9d9]`}>
      <div className={`w-[90%] lg:w-[80%] mx-auto h-[100%] flex flex-row items-center`}>
        <div className={`w-[50%] md:w-[15%]`}>
          <Link to={'/'} className={`w-[130px] md:w-[120px] lg:w-[160px] h-[49px]`}>
          <img src={logo} alt='logo' width={'100%'} height={'100%'}/>
          </Link>
        </div>
        <div className={`hidden w-[80%] md:flex md:flex-row items-center justify-around`}>
          <Link to={'/Онас'} ><p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>О компании</p></Link>
          <Link  to={`/решения`} className={`flex flex-row items-center`}>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>
              <p>Smart</p>
              <p>решения</p>
            </p>
            {drop ? <IoMdArrowDropup onClick={dropHandler}/> : <IoMdArrowDropdown onClick={dropHandler}/>}
          </Link>

          <Link className={`flex flex-row items-center`}>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>
              <p>Б/у</p>
              <p>решения</p>
            </p>
            {drop2 ? <IoMdArrowDropup onClick={dropHandler2}/> : <IoMdArrowDropdown onClick={dropHandler2}/>}
          </Link>
          
          <Link>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>
              <p>Smart</p>
              <p>сервис</p>
            </p>
          </Link>
          <Link>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>Производители</p>
          </Link>
          <Link>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>Новости</p>
          </Link>
          <Link>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>Контакты</p>
          </Link>
        </div>
        <div className={`w-[50%] text-end md:w-[5%] flex flex-col`}>
          <Link><strong className={`font-montserrat leading-[19.5px] text-[16px] text-[#343434]`}>RU</strong></Link>
          <Link><strong className={`font-montserrat leading-[19.5px] text-[16px] text-[#343434]`}>EN</strong></Link>
        </div>
      </div>
    </div>
  )
}

export default Header