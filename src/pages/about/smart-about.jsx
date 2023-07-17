import React, { useState } from 'react'
import Layout from '../../components/layout/layout.jsx'
import { FormControl, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import card from '../../assets/maincard.png'
import largemenu from '../../assets/shortmenu.png'

const faceProduct = [
    {id:1, title: 'product'},
    {id:2, title: 'product'},
    {id:3, title: 'product'},
    {id:4, title: 'product'},
    {id:5, title: 'product'},
    {id:6, title: 'product'},
    {id:7, title: 'product'},
    {id:8, title: 'product'},
    {id:9, title: 'product'},
    {id:10, title: 'product'},
    {id:11, title: 'product'},
    {id:12, title: 'product'},
]

const SmartAbout = () => {
  const [show, setShow] = useState(false);

  return (
    <Layout title={`Б/у оборудование`}>
        <div className={`w-[100%] md:w-[80%] mx-auto`}>
        <div className={`w-[100%] flex flex-row flex-wrap py-4 px-4 md:px-0`}>
          <Link 
           to={`/`}
           className={`text-[14px] md:text-[16px] font-montserrat font-600 text-[#343434]`}
           >Главная/</Link>
          <Link 
           to={`/Оборудование`}
           className={`text-[14px] md:text-[16px] font-montserrat font-600 text-[#343434]`}
           >Smart Оборудование/</Link>
          <Link className={`text-[14px] md:text-[16px] font-montserrat font-500 text-[#004CB2]`}>Вертикальные прессы</Link>
        </div>

        <p className={`font-600 font-montserrat text-[20px] text-center md:text-start md:text-[28px] lg:text-[48px] text-[#343434] mb-6`}>Вертикальные прессы</p>
        <p className={`font-500 font-montserrat text-[16px] px-4 md:px-0 md:text-[20px] mb-8 text-[#343434]`}>Вертикальный пресс предназначен для прессования вторичного сырья и
            последующей его упаковки в плотный тюк (кипу). Благодаря своей компактности
            пресс может быть установлен в небольших помещениях. Тип пресса -
            гидравлический. Пресс снабжен пресс-плитой, расположенной внутри пресс-камеры,
            которая движется в вертикальной плоскости и сжимает материал,
            загруженный в пресс-камеру. В конечном итоге из объемного вторичного сырья
            формируется плотная кипа.
            Основная идея использования прессового оборудования - уменьшение объема
            прессуемого материала с целью сокращения затрат на его транспортировку
            к месту переработки.
        </p>

        <div className={`w-[100%] flex md:flex-row flex-col flex-wrap `}>
          
            {faceProduct?.map((pro, index) => {
                    return (index < 6 || show) && (
                        <div className={`w-[95%] mx-auto md:w-[30%] mb-[20px] md:mr-[45px] h-[720px] p-4 border-2 border-[#004db2ac]`}>
                        <img src={card} alt="card" width={'100%'} className={`object-cover`} />
                        <div className={`w-[90%] mx-auto`}>
                            <p className={`text-[20px] font-montserrat font-[600] text-[#343434] my-4`} style={{letterSpacing:'5px'}}>Вертикальный пресс HSM <br/>V-Press 503 ECO</p>
                            <p className={`text-[16px] font-400 font-montserrat leading-[19.38px] text-[#343434] mb-5`}>Усилие прессования, тонн: <b className={`text-[#004CB2]`}>3,0</b></p>
                            <p className={`text-[16px] font-400 font-montserrat leading-[19.38px] text-[#343434] mb-5`}>Размер тюка Д×Ш×В, мм: <b className={`text-[#004CB2]`}>700х500х600</b></p>
                            <p className={`text-[16px] font-400 font-montserrat leading-[19.38px] text-[#343434] mb-5`}>Вес тюка (зависит от материала): <b className={`text-[#004CB2]`}>до 50 кг</b></p>
                            <button className={` bg-[#F2DC6E] w-[100%] px-[28px] py-3 font-medium leading-[24.38px] text-[16px] md:text-[16px] text-[#343434] mt-4 md:mr-28 hover:border-2 hover:border-[#312a07] hover:bg-white hover:text-[#312a07] hover:rounded-lg`}>Полное описание</button>
                            <img src={largemenu} className={`my-4`} alt="largemenu" />
                        </div>
                    </div>
                    )
            })}
        </div>

       <div className={`w-[100%] flex justify-center`}>
       <button 
       className={` bg-white  px-[28px] py-3 font-medium leading-[24.38px] text-[16px] md:text-[16px] text-[#004CB2] mt-4 md:mr-28 border-2 border-[#004CB2] hover:bg-[#004CB2] transition-all hover:text-white hover:rounded-lg`}
       onClick={() => setShow(!show)}
       >{show ? "Cократить" : "Смотреть еще"}</button>
       </div>

        <form className={`w-[100%] mt-6 p-6 h-[650px] md:h-[581px] flex flex-col bg-[#001c4360] mx-auto`}>
                <p className={`text-[28px] mt-12 md:text-[48px] font-normal text-white text-center`}>Обратная связь</p>
                <p className={`text-[20px] mt-6 mb-6 md:text-[32px] font-normal text-white text-center`}>Всегда рады Вам помочь!</p>
               <div className={`w-[100%] md:w-[70%] mx-auto flex flex-col md:flex-row justify-between`}>
                    <FormControl className={`w-[100%] md:w-[30%] mb-[20px] md:mb-0`}>
                        <TextField
                        type='text'
                        id="standard-multiline-flexible"
                        label="Ваше имя"
                        multiline
                        maxRows={4}
                        variant="standard"
                        />
                    </FormControl>

                    <FormControl className={`w-[100%] md:w-[30%] mb-[20px] md:mb-0`}>
                        <TextField
                        type='text'
                        id="standard-multiline-flexible"
                        label="Телефон для связи"
                        multiline
                        maxRows={4}
                        variant="standard"
                        />
                    </FormControl>

                    <FormControl className={`w-[100%] md:w-[30%] mb-[20px] md:mb-0` }>
                        <TextField
                        type='email'
                        id="standard-multiline-flexible"
                        label="Ваш e-mail"
                        multiline
                        maxRows={4}
                        variant="standard"
                        />
                    </FormControl>
               </div>
               <div className={`w-[100%] md:w-[70%] mt-6 mx-auto`}>
                    <FormControl className={`w-[100%] text-white min-h-[200px]`}>
                    <TextField
                    id="standard-multiline-static"
                    label="Ваши вопросы "
                    multiline
                    rows={4}
                    //   defaultValue="Default Value"
                    variant="standard"
                    />
                    </FormControl>
               </div>
               <div className={`flex justify-center `}>
                    <button className={`bg-[#F2DC6E]  w-[100%] md:w-[600px] py-3 font-medium  text-[16px] md:text-[20px] text-[#343434] hover:border-2 hover:border-[#312a07] hover:bg-white hover:text-[#312a07] hover:rounded-lg`}>Получить консультацию</button>
               </div>

            </form>

      </div>
    </Layout>
  )
}

export default SmartAbout