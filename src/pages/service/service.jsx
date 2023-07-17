import React, { useState } from 'react'
import Layout from '../../components/layout/layout.jsx'
import { FormControl, TextField } from '@mui/material'
import { Link } from 'react-router-dom'


const SmartService = () => {

  return (
    <Layout title={`Сервисное обслуживание`}>
        <div className={`w-[90%] md:w-[80%] mx-auto`}>

            <p className={`text-[#343434] text-[28px] md:text-[48px] font-montserrat my-6`}>Сервисное обслуживание</p>       
            </div>
            <div className={`bg-[#004CB2] px-8 py-6 font-[600]  `}>
               <div className={`w-[80%] mx-auto`}>
               <p className={`text-[#fff] text-[16px] text-start md:text-[20px] font-montserrat leading-[24px]`} style={{letterSpacing:'2px'}}>
                    Два собственных сервисных подразделения в Санкт-Петербурге и Москве и обширная сеть <br/>авторизованных сервис-партнеров по всей территории России и стран бывшего СНГ
                </p>
               </div>
            </div>
        <div className={`w-[90%] md:w-[80%] mx-auto my-6`}>

                <p  className={`text-[#343434] text-[20px] font-montserrat leading-[24.38px]`}>Два собственных сервисных подразделения в Санкт-Петербурге и Москве, обширная сеть надежных сервис-партнеров по всей территории России и стран бывшего СНГ
                    Наша компания на протяжении 15 лет осуществляет поставки и сервисное обслуживание оборудования по обращению с отходами. Сотрудничество с ведущими европейскими и мировыми производителями позволяет нам предлагать нашим клиентам только качественное оборудование и высокий уровень сервиса.

                    Одним из главных направлений деятельности нашей компании является сервисное обслуживание поставляемого оборудования. Мы понимаем, что для наших клиентов важна не только надежность и качество оборудования, но и квалифицированная техническая поддержка. Поэтому мы создали систему сервиса, которая включает в себя не только собственные сервисные подразделения, но и обширную сеть авторизованных сервис-партнеров по всей территории России и стран бывшего СНГ.

                    Отдел сервиса нашей компании включает в себя два сервис-центра, расположенных
                    в Санкт-Петербурге и Москве. Каждый сервисный центр имеет штат квалифицированных
                    специалистов, готовых выполнить любые работы по установке, наладке, профилактике
                    и ремонту оборудования. В целях эффективной работы сервисные инженеры компании
                    обеспечены полностью укомплектованными сервисными автомобилями, включая
                    необходимый ЗИП, наличие которого минимизирует время простоя оборудования.
                    Сервисное обслуживание на остальной территории России и стран бывшего СНГ
                    осуществляется нашими надежными сервис-партнерами, со многими из них мы сотрудничаем
                    более 10 лет, наличие постоянно пополняемого склада запчастей в Санкт-Петербурге
                    и в Москве позволяет нам оперативно доставлять необходимые детали нашим партнерам в регионы.</p>
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

    </Layout>
  )
}

export default SmartService