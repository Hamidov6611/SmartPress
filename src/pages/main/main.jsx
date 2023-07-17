import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout'
import product from '../../assets/product.png'
import product2 from '../../assets/product2.png'
import card from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import { Link } from 'react-router-dom'
import {FaArrowRightLong} from 'react-icons/fa6'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import imageCard from '../../assets/hamkor.png'

const subdata = [
    {id:1, title: 'Вертикальные прессы'},
    {id:2, title: 'Горизонтальные прессы'},
    {id:3, title: 'Конвейеры'},
    {id:4, title: 'Шредеры'},
    {id:5, title: 'Компакторы'},
    {id:6, title: 'Контейнеры'},
]

const Main = () => {
    const [sub1, setSub1] = useState(true)
    const [sub2, setSub2] = useState(false)
    const [sub3, setSub3] = useState(false)
    const [sub4, setSub4] = useState(false)
    const [sub5, setSub5] = useState(false)
    const [sub6, setSub6] = useState(false)
    const [str, setStr] = useState('Вертикальные прессы')
    const click1Handler = () => {
        setSub1(true)
        setSub2(false)
        setSub3(false)
        setSub4(false)
        setSub5(false)
        setSub6(false)
    }
    const click1Handler2 = () => {
        setSub2(true)
        setSub1(false)
        setSub3(false)
        setSub4(false)
        setSub5(false)
        setSub6(false)
    }
    const click1Handler3 = () => {
        setSub3(true)
        setSub2(false)
        setSub1(false)
        setSub4(false)
        setSub5(false)
        setSub6(false)
    }
    const click1Handler4 = () => {
        setSub4(true)
        setSub2(false)
        setSub3(false)
        setSub1(false)
        setSub5(false)
        setSub6(false)
    }
    const click1Handler5 = () => {
        setSub5(true)
        setSub2(false)
        setSub3(false)
        setSub4(false)
        setSub1(false)
        setSub6(false)
    }
    const click1Handler6 = () => {
        setSub6(true)
        setSub2(false)
        setSub3(false)
        setSub4(false)
        setSub5(false)
        setSub1(false)
    }
 useEffect(() => {
    if(sub1) {
        setStr('Вертикальные прессы')
    }
    if(sub2) {
        setStr('Горизонтальные прессы')
    }
    if(sub3) {
        setStr('Конвейеры')
    }
    if(sub4) {
        setStr('Шредеры')
    }
    if(sub5) {
        setStr('Компакторы')
    }
    if(sub6) {
        setStr('Контейнеры')
    }
    
 },[sub1, sub2, sub3, sub4, sub5, sub6])
  return (
    <Layout>
        <div className={`w-[100%]`}>
            <div className={`w-[100%] h-[1200px] md:h-[917px] flex flex-col md:flex-row  justify-between `}>
                <div className={`w-[100%] p-3 md:w-[40%]  flex items-center mt-6 md:mt-32 flex-col `}>
                    <p className={`hidden md:flex font-medium leading-[58.09px] mb-[40px] text-[24px] md:text-[32px] lg:text-[48px] text-[#343434]`}>
                        Оборудование <br/> для обращения <br/>с отходами
                    </p>
                    <p className={`flex md:hidden font-medium  mb-[20px] text-center text-[24px] md:text-[32px] lg:text-[48px] text-[#343434]`}>
                        Оборудование  для обращения с отходами
                    </p>
                    <ul className='list-disc ml-6'>
                        <li className={`font-medium text-[18px] md:text-[20px] mb-[20px] gap-3 leading-[24.38px] text-[#343434]`}>Мы НЕ занимаемся продажей красивых <br/> картинок на сайтах</li>
                        <li className={`font-medium text-[18px] md:text-[20px] mb-[20px] gap-3 leading-[24.38px] text-[#343434]`}>Мы профессионально занимаемся <br/> поставками оборудования </li>
                        <li className={`font-medium text-[18px] md:text-[20px] mb-[20px] gap-3 leading-[24.38px] text-[#343434]`}>Оказываем услуги сервиса и ремонта</li>
                    </ul>
                    <button className={`bg-[#F2DC6E] hidden md:flex hover:rounded-lg px-[28px] py-3 font-medium leading-[24.38px] text-[16px] md:text-[20px] text-[#343434] mt-4 mr-28 hover:border-2 hover:border-[#312a07] hover:bg-white hover:text-[#312a07] hover:transition-all`}>Получить консультацию</button>
                    <button className={`bg-[#F2DC6E] w-[100%] md:hidden flex justify-center hover:rounded-lg py-3 font-medium  text-[16px] md:text-[20px] text-[#343434] mt-4 text-center hover:border-2 hover:border-[#312a07] hover:bg-white hover:text-[#312a07] hover:transition-all`}>Получить консультацию</button>

                </div>
                <div className={`w-[100%]  md:w-[24%] bgImage`}>
                </div>
                <div className={`hidden md:flex  md:w-[36%] h-[100%] bg-[#004CB2]`}>
                    {/* <img src={product} alt="" /> */}
                </div>
                <div className={` md:hidden w-[100%]  md:w-[36%] h-[100%] bg-[#004CB2]`}>
                    <img src={product} alt="" />
                </div>
            </div>

            <div className='mt-16 mb-40 md:mb-0 md:mt-0 w-[100%] md:w-[70%] h-[130px] mx-auto flex md:flex-row flex-col justify-between relative top-[-40px]'>
                <div className={`flex justify-center items-center text-center px-12 py-8 mb-3 md:mb-0 w-[100%] md:w-[30%] shadow-2xl h-[100%]' bg-white`}>
                    <p className={`text-[20px] text-[#343434] font-medium leading-[24.38px]`}>Внедряем иновационные технологии </p>
                </div>
                <div className={`flex justify-center items-center text-center px-12 py-8 mb-3 md:mb-0 w-[100%] md:w-[30%] shadow-2xl h-[100%]' bg-white`}>
                    <p className={`text-[20px] text-[#343434] font-medium leading-[24.38px]`}>Предлагаем проверенные решения для наших клиентов </p>
                </div>
                <div className={`flex justify-center items-center text-center px-12 py-8 mb-3 md:mb-0 w-[100%] md:w-[30%] shadow-2xl h-[100%]' bg-white`}>
                    <p className={`text-[20px] text-[#343434] font-medium leading-[24.38px]`}>Предоставляем сервис по всей России и СНГ</p>
                </div>
            </div>

            <div className='mt-32 mb-40 md:mb-0 md:mt-12 w-[100%] md:w-[70%] mx-auto hidden md:flex md:flex-row items-center justify-between relative top-[-40px]'>
                <button className={`font-medium text-[18px] md:text-[20px] leading-[24.38px] text-center cursor-pointer text-[#343434]`}
                onClick={() => click1Handler()}
                >Вертикальные <br/> прессы</button>
                <button className={`font-medium text-[18px] md:text-[20px] leading-[24.38px] text-center cursor-pointer text-[#343434]`}
                onClick={() => click1Handler2()}
                >Горизонтальные <br/>прессы</button>
                <button className={`font-medium text-[18px] md:text-[20px] leading-[24.38px] text-center cursor-pointer text-[#343434]`}
                onClick={() => click1Handler3()}
                >Конвейеры</button>
                <button className={`font-medium text-[18px] md:text-[20px] leading-[24.38px] text-center cursor-pointer text-[#343434]`}
                onClick={() => click1Handler4()}
                >Шредеры</button>
                <button className={`font-medium text-[18px] md:text-[20px] leading-[24.38px] text-center cursor-pointer text-[#343434]`}
                onClick={() => click1Handler5()}
                >Компакторы</button>
                <button className={`font-medium text-[18px] md:text-[20px] leading-[24.38px] text-center cursor-pointer text-[#343434]`}
                 onClick={() => click1Handler6()}
                >Контейнеры</button>
            </div>

            <div className='mt-32 mb-40 md:mb-0 md:mt-12 w-[100%] md:w-[70%] mx-auto md:hidden flex md:flex-row items-center justify-between relative top-[150px] ml-5'>
                <FormControl sx={{ mb: 2, minWidth: 120 }}>
                {/* <Typography>Yo'nalish</Typography> */}
                <Select
                className="editItem"
                // value={12}
                // onChange={handleChange}
                displayEmpty
                placeholder="Mahalla mas'ullari"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                    {subdata?.map((item, index) => {
                        return (
                             <MenuItem key={index} value={item?.title}>{item?.title}</MenuItem>
                        )
                    })}                
                </Select>
            </FormControl>
            </div>

            <div className='mt-16 mb-40 md:mb-0 md:mt-12 w-[100%] md:w-[70%] mx-auto hidden md:flex md:flex-row justify-ar relative top-[-40px]'>

                <div onClick={() => click1Handler()} className={`text-[20px] h-1 cursor-pointer ${sub1 ? 'bg-[#004CB2]' : 'bg-[#BCBCBC]'}  w-[16.6%]  text-[#343434]`}></div>
                <div onClick={() => click1Handler2()} className={`text-[20px] h-1 cursor-pointer ${sub2 ? 'bg-[#004CB2]' : 'bg-[#BCBCBC]'}  w-[16.6%] text-[#343434]`}></div>
                <div onClick={() => click1Handler3()} className={`text-[20px] h-1 cursor-pointer ${sub3 ? 'bg-[#004CB2]' : 'bg-[#BCBCBC]'}  w-[16.6%]  text-[#343434]`}></div>
                <div onClick={() => click1Handler4()} className={`text-[20px] h-1 cursor-pointer ${sub4 ? 'bg-[#004CB2]' : 'bg-[#BCBCBC]'}  w-[16.6%]  text-[#343434]`}></div>
                <div onClick={() => click1Handler5()} className={`text-[20px] h-1 cursor-pointer ${sub5 ? 'bg-[#004CB2]' : 'bg-[#BCBCBC]'}  w-[16.6%]  text-[#343434]`}></div>
                <div onClick={() => click1Handler6()} className={`text-[20px] h-1 cursor-pointer ${sub6 ? 'bg-[#004CB2]' : 'bg-[#BCBCBC]'}  w-[16.6%]  text-[#343434]`}></div>
            </div>

            <div className='mt-60 p-4  md:mb-0 md:mt-12 w-[100%] md:w-[70%] mx-auto md:flex md:flex-row justify-center relative top-[-40px]'>
                <div className={`w-[100%] md:w-[30%]`}>
                    <img src={product2} alt="product" />
                </div>
                <div className={`w-[100%] md:w-[70%] mt-4 flex flex-col`}>
                    <p className={`text-[24px] md:text-[32px] leading-[38.73px] text-[#343434] font-medium`}>{str}</p>
                    <p className={`text-[16px] mt-6 text-[#343434]`}>Вертикальные прессы - это оборудование для сжатия и уплотнения (прессования) <br/>различных типов вторичных ресурсов, таких как картон, пластик, полиэтилен, бумага и т.д.<br/> В процессе прессования материалов формируется плотная кипа (тюк).<br/> Данный тип оборудования широко используется в торговых сетях и на промышленных <br /> предприятиях.</p>
                    <Link className={`flex flex-row mt-6 items-center`}>
                        <p className={`text-[#004CB2] font-montserrat text-[20px] mr-4`}>Все оборудование</p>
                        <FaArrowRightLong fill='#004CB2' />
                    </Link>
                    <div className={`w-[100%] mt-6 flex flex-row flex-wrap justify-center`}>
                        <div className={`w-[100%] md:w-[50%] mb-4 `}>
                            <p className={`text-[20px] font-montserrat text-[#343434]`}>Производительность</p>
                            <p className={`text-[20px] font-montserrat text-[#004CB2]`}>200 - 1000 кг/час</p>
                        </div>

                        <div className={`w-[100%] md:w-[50%] mb-4`}>
                            <p className={`text-[20px] font-montserrat text-[#343434]`}>Производительность</p>
                            <p className={`text-[20px] font-montserrat text-[#004CB2]`}>200 - 1000 кг/час</p>
                        </div>

                        <div className={`w-[100%] md:w-[50%] mb-4`}>
                            <p className={`text-[20px] font-montserrat text-[#343434]`}>Производительность</p>
                            <p className={`text-[20px] font-montserrat text-[#004CB2]`}>200 - 1000 кг/час</p>
                        </div>

                        <div className={`w-[100%] md:w-[50%] mb-4`}>
                            <p className={`text-[20px] font-montserrat text-[#343434]`}>Производительность</p>
                            <p className={`text-[20px] font-montserrat text-[#004CB2]`}>200 - 1000 кг/час</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`w-[100%] md:w-[70%] mx-auto text-center md:text-start mb-6`}>
                <p className={`text-[24px] md:text-[48px] font-600 text-[#343434]`}>Почему выбирают нас</p>
            </div>
            
            <div className={`w-[100%] p-6 md:p-0 md:w-[70%] mx-auto flex flex-row flex-wrap`}>
                <div className={`w-[100%] md:w-[50%] flex flex-col`}>
                    <div className={`w-[200px] h-[2px] mb-4 mt-4 bg-[#004CB2]`}></div>
                    <p>Мы не покупаем оборудование в интернете, <br/> а лично проводим оценку производственных <br/> мощностей и проводим аудит ранее <br/> установленного оборудования наших <br/>производителей.</p>
                </div>
                <div className={`w-[100%] md:w-[50%] flex flex-col`}>
                    <div className={`w-[200px] h-[2px] mb-4 mt-4 bg-[#004CB2]`}></div>
                    <p>Мы работаем только с проверенными производителями, известными своим высоким качеством и надежностью продукции. Все наше оборудование проходит тщательное тестирование перед отправкой клиентам, чтобы гарантировать его безупречную работу и долгий срок службы.</p>
                </div>
                <div className={`w-[100%] md:w-[50%] flex flex-col`}>
                    <div className={`w-[200px] h-[2px] mb-4 mt-4 bg-[#004CB2]`}></div>
                    <p>МЫ это команда специалистов с более чем 15 летним опытом поставок и обслуживания оборудования ведущих европейских производителей. За годы работы мы поставили и ввели в эксплуатацию более 3500 единиц оборудования по всей территории России и стран СНГ.(1000 - компакторов, 2000 - вертикальных прессов, 10 - горизонтальных прессов)</p>
                </div>
                <div className={`w-[100%] md:w-[50%] flex flex-col`}>
                    <div className={`w-[200px] h-[2px] mb-4 mt-4 bg-[#004CB2]`}></div>
                    <p>Мы добросовестный налогоплательщик и финансово стабильная компания.</p>
                </div>
            </div>

            <form className={`w-[100%] mt-6 p-6 md:p-0 md:w-[70%] h-[650px] md:h-[581px] flex flex-col bg-[#001c4360] mx-auto`}>
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
                    <button className={`bg-[#F2DC6E] hover:rounded-lg w-[100%] md:w-[600px] py-3 font-medium  text-[16px] md:text-[20px] text-[#343434] hover:border-2 hover:border-[#312a07] hover:bg-white hover:text-[#312a07]`}>Получить консультацию</button>
               </div>

            </form>
            <div className={`w-[100%] md:w-[70%] mx-auto mt-6 mb-16`}>
                <p className={`text-[28px] font-semibold md:text-[48px] text-center md:text-start`}>Новости</p>

                <div className={`w-[100%] flex flex-col md:flex-row mt-4 p-4 md:p-0`}>
                    <div className={`w-[100%] md:w-[31%] mb-[20px] md:mr-[45px] h-[455px] p-4 border-2 border-[#004db2ac]`}>
                        <img src={card} alt="card" />
                        <p className={`text-[16px] font-medium text-[#343434]`}>Поставка автоматического горизонтального пресса SMARTpress SPA_60TC на промышленное предприятие в Ленинградской области</p>
                        <Link className={`flex flex-row justify-end mt-4 items-center`}>
                            <p className={`text-[#004CB2] text-[20px] font-montserrat mr-4`}>Читать</p>
                            <FaArrowRightLong fill='#004CB2' />
                        </Link>
                    </div>
                    <div className={`w-[100%] md:w-[31%] mb-[20px]  md:mr-[45px] h-[455px] p-4 border-2 border-[#004db2ac]`}>
                        <img src={card2} alt="card" />
                        <p className={`text-[16px] font-medium text-[#343434]`}>Поставка автоматического горизонтального пресса SMARTpress SPA_60TC на промышленное предприятие в Ленинградской области</p>
                        <Link className={`flex flex-row justify-end mt-4 items-center`}>
                            <p className={`text-[#004CB2] text-[20px] font-montserrat mr-4`}>Читать</p>
                            <FaArrowRightLong fill='#004CB2' />
                        </Link>
                    </div>
                    <div className={`w-[100%] md:w-[31%]  mr-0 h-[455px] p-4 border-2 border-[#004db2ac]`}>
                        <img src={card3} alt="card" />
                        <p className={`text-[16px] font-medium text-[#343434]`}>Поставка автоматического горизонтального пресса SMARTpress SPA_60TC на промышленное предприятие в Ленинградской области</p>
                        <Link className={`flex flex-row justify-end mt-4 items-center`}>
                            <p className={`text-[#004CB2] text-[20px] font-montserrat mr-4`}>Читать</p>
                            <FaArrowRightLong fill='#004CB2' />
                        </Link>
                    </div>
                </div>

            </div>

            <div className={`w-[100%] md:w-[70%] mx-auto flex flex-row justify-center p-6 md:p-0`}>
                <img src={imageCard} alt="image" className={`object-cover`} />
            </div>
            

        </div>
    </Layout>
  )
}

export default Main