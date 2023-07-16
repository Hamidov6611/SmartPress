import React, { useState } from 'react'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import logo from '../../assets/lightlogo.png'
import whatsapp from '../../assets/whatsapp.png'
import telegram from '../../assets/telegram.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [drop, setDrop] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const dropHandler = () => setDrop(prev => !prev)
  const dropHandler2 = () => setDrop2(prev => !prev)
  return (
    <div className={`w-[100%] mt-16 h-[330px]  md:h-[204px] bg-[#004CB2] flex flex-col items-center`}>
      <div className={`w-[95%] p-3 md:p-0 md:w-[80%] mx-auto h-[100%] flex md:flex-row items-center justify-between`}>
        <div className={`w-[100%] md:w-[15%]`}>
          <div className={`w-[200px] mx-auto sm:w-[160px] md:w-[160px] h-[49px]`}>
            <img src={logo} alt='logo' width={'100%'} height={'100%'}/>
          </div>
        </div>
        <div className={` w-[80%] hidden sm:flex flex-row  items-center justify-around`}>
          <div className={`w-[50%] flex md:flex-row flex-col items-center justify-around`}>
          <Link className={`md:mb-0 mb-[20px]`} ><p className={`font-[600] text-[16px] leading-[19.5px] text-[#fff] mr-1 block text-center`}>О компании</p></Link>
          <Link className={`flex flex-row items-center md:mb-0 mb-[20px]`}>
            <p className={`font-[600] text-[16px] leading-[19.5px] text-[#fff] mr-1 block text-center`}>
              <p>Smart</p>
              <p>решения</p>
            </p>
            {drop ? <IoMdArrowDropup fill='#fff' onClick={dropHandler}/> : <IoMdArrowDropdown fill='#fff' onClick={dropHandler}/>}
          </Link>

          <Link className={`flex flex-row items-center md:mb-0 mb-[20px]`}>
            <p className={`font-[600] text-[16px] leading-[19.5px] text-[#fff] mr-1 block text-center`}>
              <p>Б/у</p>
              <p>решения</p>
            </p>
            {drop2 ? <IoMdArrowDropup style={{color:'#fff'}} className={`text-[#fff]`} onClick={dropHandler2}/> : <IoMdArrowDropdown fill='#fff' onClick={dropHandler2}/>}
          </Link>
          </div>
          
          <div className={`w-[50%] flex md:flex-row flex-col items-center justify-around`}>
          <Link className={`md:mb-0 mb-[20px]`}> 
            <p className={`font-[600] text-[16px] leading-[19.5px] text-[#fff] mr-1 block text-center`}>
              <p>Smart</p>
              <p>сервис</p>
            </p>
          </Link>
          <Link className={`md:mb-0 mb-[20px]`}>
            <p className={`font-[600] text-[16px] leading-[19.5px] text-[#fff] mr-1 block text-center`}>Производители</p>
          </Link>
          <Link className={`md:mb-0 mb-[20px]`}>
            <p className={`font-[600] text-[16px] leading-[19.5px] text-[#fff] mr-1 block text-center`}>Новости</p>
          </Link>
          <Link className={`md:mb-0 mb-[20px]`}>
            <p className={`font-[600] text-[16px] leading-[19.5px] text-[#fff] mr-1 block text-center`}>Контакты</p>
          </Link>
          </div>
        </div>

      </div>
      <div className={`w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between mb-9`}>
          <div className='w-[100%] mb-[20px] md:mb-0 md:w-[20%]'>
            <p className={`font-montserrat leading-[18.63px] text-[12px] text-[white]`}>*оставляя заявку на данном сайте Вы даете свое разрешение на обработку своих персональных данных в соответствии с ФЗ-152</p>
          </div>
          <div className='w-[100%] md:w-[80%] justify-center md:justify-end flex flex-row  items-center'>
            <Link className={`mr-[20px]`}>
              <img src={whatsapp} alt='whatsapp' />
            </Link>
           <Link className={`mr-[20px]`}>
            <img src={telegram} alt='telegram' />
           </Link>
            
            <Link to={"tel: +78126110971"}>
              <p className={`font-[700] text-[20px] leading-[24.38px] text-white`}>+7 812 611 09 71</p>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Footer