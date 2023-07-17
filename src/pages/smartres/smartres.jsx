import React from 'react'
import Layout from '../../components/layout/layout.jsx'
import { Link } from 'react-router-dom'
import largeproduct from '../../assets/largeproduct.png'
import { FormControl, TextField } from '@mui/material'

const Smartres = () => {
  return (
    <Layout title={`Smart решения`}>
      <div className={`w-[100%] md:w-[80%] mx-auto`}>
        <div className={`w-[100%] flex flex-row flex-wrap py-4 px-4 md:px-0`}>
          <Link 
           to={`/`}
           className={`text-[14px] md:text-[16px] font-montserrat font-600 text-[#343434]`}
           >Главная/</Link>
          <Link 
           to={`/решения`}
           className={`text-[14px] md:text-[16px] font-montserrat font-600 text-[#343434]`}
           >Smart Решения/</Link>
          <Link className={`text-[14px] md:text-[16px] font-montserrat font-500 text-[#004CB2]`}>Стационарный компактор Europress DuoMax</Link>
        </div>

        <p className={`font-600 font-montserrat text-[20px] text-center md:text-start md:text-[28px] lg:text-[48px] text-[#343434] mb-6`}>Стационарный компактор <br/>Europress DuoMax</p>
        <p className={`font-500 font-montserrat text-[16px] px-4 md:px-0 md:text-[20px] mb-8 text-[#343434]`}>Надежные стационарные компакторы для отходов Europress Duo и DuoMаx предназначены
            для интенсивной эксплуатации. Это идеальное решение для переработки большого
            количества различных сухих материалов. Большое загрузочное окно компактора
            Так как DuoMах являются стационарными компакторами, их контейнеры отсоединяются
            для транспортировки, а блок прессования остается надежно прикрепленным к земле.
            Компакторы могут быть оборудованы хопперами для загрузки через стену или с высоких
            этажей, которые вместе с компактором образуют безопасную закрытую конструкцию.
            Конструкция также допускает установку различных загрузочных устройств, например
            конвейеров.
            Компакторы DuoMах могут поставляться с целым рядом дополнительных опций,
            например, с опрокидывателем для мусорных баков и системой открытия крышки. Для работы с чрезвычайно большими нагрузками с компакторами могут использоваться
            контейнеры нескольких стандартных объемов до 32 м2. Компакторы могут работать в режиме 24/7, особенно при наличии второго запасного контейнера.
            TTХ компактра можно взять с сайта www.eurorpessgroup.ru
        </p>

        <div className={`w-[95%] md:w-[100%] mx-auto min-h-[359px] border-2 md:p-0 border-[#004CB2] flex items-center flex-col md:flex-row`}>
          <div className={`w-[100%] md:w-[35%]`}>
            <img src={largeproduct} width={`100%`} alt="product" />
          </div>
          <div className={`w-[100%] md:w-[65%] flex md:flex-row flex-col items-center`}>
            <div className={`w-[95%] md:w-[60%] flex flex-col`}>
              <p className={`text-[20px] font-600 font-montserrat text-[#343434] leading-[24.38px] mb-6 gap-3`}>Вертикальный пресс HSM V-Press 503 ECO</p>
              <p className={`text-[16px] font-400 font-montserrat leading-[19.38px] text-[#343434] mb-5`}>Усилие прессования, тонн: <b className={`text-[#004CB2]`}>3,5</b></p>
              <p className={`text-[16px] font-400 font-montserrat leading-[19.38px] text-[#343434] mb-5`}>Мощность: <b className={`text-[#004CB2]`}>5,5 - 7,5 кВт</b></p>
              <p className={`text-[16px] font-400 font-montserrat leading-[19.38px] text-[#343434] mb-5`}>Время цикла прессования: <b className={`text-[#004CB2]`}>66/105 сек</b></p>
              <p className={`text-[16px] font-400 font-montserrat leading-[19.38px] text-[#343434] mb-5`}>Загрузочное окно: <b className={`text-[#004CB2]`}>1850х1300</b></p>
              <p className={`text-[16px] font-400 font-montserrat leading-[19.38px] text-[#343434] mb-5`}>Электропитание: <b className={`text-[#004CB2]`}>400 В, 50 Гц, 3x 16 A</b></p>
            </div>
            <div className={`w-[95%] mb-6 md:mb-0 md:w-[40%] `}> 
              <button className={`bg-[#F2DC6E] px-[28px] hover:rounded-lg py-3 font-medium leading-[24.38px] text-[16px] md:text-[16px] text-[#343434] mt-4 md:mr-28 hover:border-2 hover:border-[#312a07] hover:bg-white hover:text-[#312a07]`}>Запросить цену</button>
            </div>
          </div>
        </div>

        <form className={`w-[100%] mt-6 p-6 md:p-0  h-[650px] md:h-[581px] flex flex-col bg-[#001c4360] mx-auto`}>
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

      </div>
    </Layout>
  )
}

export default Smartres