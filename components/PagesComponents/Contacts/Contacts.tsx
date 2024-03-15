'use client'

import Form from '@/components/Form/Form'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { useRef } from 'react'

const Contacts = () =>{

    const formRef = useRef<HTMLDivElement>(null)   

    return(
        <div className="w-[90%] xl:w-[1350px] mx-auto p-[20px] my-[50px] max-md:mt-[10px] lg:mb-[100px]">
            <h1 className='text-center text-[20px] md:text-[25px] lg:text-[30px]'>Контакты</h1>
            <section className='flex flex-col lg:flex-row justify-between  my-[70px] max-md:mt-[30px] '>
                <div className='flex flex-col w-[90%] mb-[30px] lg:w-[30%]'>
                    <div className='mb-[20px]'>
                        <p><span className='font-bold'>Почта:</span> santechm@inbox.ru</p>
                        <p><span className='font-bold'>Телефон:</span> +7 (903) 553-65-30</p>
                    </div>
                    <div className='mb-[20px]'>
                        <p><span className='font-bold'>Юридический адрес:</span> 119049, г. Москва, <br className='hidden lg:block'/> вн. тер. г. муниципальный округ<br className='hidden lg:block'/> Замоскворечье, ул. Коровий Вал, д. 3, стр. 5,<br className='hidden lg:block'/> помещ. 2/1</p>
                    </div>
                    <div className='mb-[20px]'>
                        <p><span className='font-bold'>Генеральный директор: </span> Красняк Евгений Александрович  <br /> +7 (903) 553-65-30 <span /></p>
                    </div>
                    <div>
                        <p><span className='font-bold'>Директор по региональному развитию: </span> Новичков Василий Витальевич <br /> +7 (985) 289-00-09 <span /></p>
                    </div>
                </div>
                
                <div className='w-[100%] lg:w-[60%] h-[500px] bg-[#c7c6c6] flex items-center justify-center'>
                    <YMaps query={{lang: 'ru_RU'}}>
                        <Map defaultState={{ center: [55.728540, 37.621390], zoom: 17 }} width={"100%"} height={"100%"}>
                            <Placemark geometry={[55.728540, 37.621390]} />
                        </Map>
                    </YMaps>
                </div>
            </section>
            <Form formRef={formRef}/>
        </div>
    )
}

export default Contacts