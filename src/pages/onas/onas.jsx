import React from 'react'
import Layout from '../../components/layout/layout.jsx'
import onas from '../../assets/onas.png'
import onas2 from '../../assets/onas2.png'
import onasmemu1 from '../../assets/onasmenu1.png'
import onasmemu2 from '../../assets/onasmenu2.png'
import onasmemu3 from '../../assets/onasmenu3.png'
import onasmemu4 from '../../assets/onasmenu4.png'
import large from '../../assets/large.png'
import little from '../../assets/little.png'
import { FormControl, TextField } from '@mui/material'

const Onas = () => {
  return (
    <Layout>
        <div className={`w-[100%] flex flex-col md:flex-row md:justify-between`}>
            <div className={`w-[100%] md:w-[55%] mb-9 md:mb-0 mt-8 md:mt-0 flex justify-center items-center`}>
                <div className='w-[90%] md:mb-0 md:w-[63%] mx-auto font-montserrat text-[18px] md:text-[24px]'>
                    <p className={`text-[#343434]`}>Специалистами нашей компании с 2008 года накоплен богатый опыт поставок и сервисного обслуживания оборудования по обращению с отходами ведущих европейских производителей.
                        За время нашей работы на Российский рынок и рынок стран СНГ было поставлено порядка полутора тысяч единиц оборудования в числе которых пресс-компакторы, вертикальные прессы и горизонтальные прессы.
                        Текущие реалии вынуждают нас переориентироваться на дистрибьюцию качественного оборудования из Китая и собственное производство.
                    </p>
                </div>
            </div>
            <div className={`w-[100%] md:w-[45%]`}>
                <img src={onas} width={'100%'} className={`object-cover`} alt="onas" />
            </div>
        </div>

        <div className={`w-[100%] bg-[#004CB2] flex`}>
            <div className={`w-[100%] md:w-[80%] mx-auto py-4`}>
                <div className={`w-[95%] md:w-[76%] mx-auto`}>
                <p className={`font-montserrat mb-4 md:mb-4 font-[600] text-center md:text-start text-[32px] md:text-[36px] lg:text-[48px] text-white`}>Наша миссия</p>
                <p className={`font-montserrat font-[500] text-[16px] md:text-[20px] text-white`}>Наша миссия заключается в оказании профессиональных услуг поставки качественного оборудования для утилизации отходов и обеспечения надежности и безопасности работы наших клиентов МЫ - надежный и ответственный поставщик, пропагандирующий индивидуальный подход к каждому заказчику. Мы предоставляем оптимальные решения в плане выбора и обслуживания прессового оборудования, придерживаемся высоких стандартов качества, обеспечивающих полную удовлетворенность наших клиентов.</p>
                </div>
            </div>
            <div className={`hidden md:flex md:w-[20%]`}>
                <img src={onas2} alt="onas2" />
            </div>
        </div>

        <div className={`w-[95%] md:w-[80%] mx-auto mt-6 flex flex-col mb-9`}>
            <p className={`text-[20px] md:text-[32px] lg:text-[48px] font-[600] mb-9 text-center md:text-start font-inter text-[#343434]`}>Сотрудничая с нами, вы получаете:</p>
            <div className={`w-[95%] md:w-[80%] mx-auto flex flex-wrap justify-between md:flex-row`}>
                <div className={`w-[45%] md:w-[25%]`}>
                    <img src={onasmemu1} alt="onasmenu1" />
                    <p className={`text-[#343434] font-montserrat font-600`}>Профессиональную <br/>консультацию</p>
                </div>
                <div className={`w-[45%] md:w-[25%]`}>
                    <img src={onasmemu2} alt="onasmenu1" />
                    <p className={`text-[#343434] font-montserrat font-600`}>Профессиональную <br/>консультацию</p>
                </div>
                <div className={`w-[45%] md:w-[25%]`}>
                    <img src={onasmemu3} alt="onasmenu1" />
                    <p className={`text-[#343434] font-montserrat font-600`}>Профессиональную <br/>консультацию</p>
                </div>
                <div className={`w-[45%] md:w-[25%]`}>
                    <img src={onasmemu4} alt="onasmenu1" />
                    <p className={`text-[#343434] font-montserrat font-600`}>Профессиональную <br/>консультацию</p>
                </div>
            </div>
        </div>
        
        <div className={`w-[80%] mx-auto`}>
            <p className={`text-[20px] mb-8 text-center md:text-start md:text-[32px] lg:text-[48px] font-inter font-[600] text-[#343434]`}>Награды и достижения</p>

            <div className={`w-100% flex md:flex-row justify-between flex-wrap`}>
                <div className={`w-[90%] mx-auto mb-[20px] sm:w-[45%] lg:w-[23%] border-2 border-[#C3C3C3] h-[317px] flex justify-center items-center`}>
                    <p className={`font-montserrat font-[300] text-[36px] text-[#C3C3C3]`}>диплом</p>
                </div>
                <div className={`w-[90%] mx-auto mb-[20px] sm:w-[45%] lg:w-[23%] border-2 border-[#C3C3C3] h-[317px] flex justify-center items-center`}>
                    <p className={`font-montserrat font-[300] text-[36px] text-[#C3C3C3]`}>диплом</p>
                </div>
                <div className={`w-[90%] mx-auto mb-[20px] sm:w-[45%] lg:w-[23%] border-2 border-[#C3C3C3] h-[317px] flex justify-center items-center`}>
                    <p className={`font-montserrat font-[300] text-[36px] text-[#C3C3C3]`}>диплом</p>
                </div>
                <div className={`w-[90%] mx-auto mb-[20px] sm:w-[45%] lg:w-[23%] border-2 border-[#C3C3C3] h-[317px] flex justify-center items-center`}>
                    <p className={`font-montserrat font-[300] text-[36px] text-[#C3C3C3]`}>диплом</p>
                </div>
            </div>
        </div>

        <div className={`w-[80%] mx-auto flex flex-col md:flex-row justify-between md:mb-44`}>
            <div className={`w-[100%] sm:w-[65%] md:h-[465px]`}>
                <img src={large} className={`object-cover`} width={'100%'} alt="large" />
            </div>
            <div className={`w-[100%] sm:w-[30%] md:h-[465px] flex flex-row md:flex-col mt-6 md:mt-0`}>
                <div className={'w-[100%] h-[32%] lg:mb-[70px]'}>
                    <img src={little} className={`object-cover`} width={'100%'} alt="little" />
                </div>
                <div className={'w-[100%] h-[32%] lg:mb-[70px]'}>
                    <img src={little} className={`object-cover`} width={'100%'} alt="little" />
                </div>
                <div className={'w-[100%] h-[32%]'}>
                    <img src={little} className={`object-cover`} width={'100%'} alt="little" />
                </div>
            </div>
        </div>

        <form className={`w-[100%] mt-6 p-6 md:p-0 md:w-[80%] h-[650px] md:h-[581px] flex flex-col bg-[#001c4360] mx-auto`}>
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
                    <button className={`bg-[#F2DC6E]  w-[100%] md:w-[600px] py-3 font-medium  text-[16px] md:text-[20px] text-[#343434] hover:border-2 hover:border-[#312a07] hover:bg-white hover:text-[#312a07]`}>Получить консультацию</button>
               </div>

            </form>
    </Layout>
  )
}

export default Onas