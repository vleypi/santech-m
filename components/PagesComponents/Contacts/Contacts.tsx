'use client'

import Form from '@/components/Form/Form'
import { useRef } from 'react'

const Contacts = () =>{

    const formRef = useRef<HTMLDivElement>(null)

    const executeScroll = () => formRef.current?.scrollIntoView()    

    return(
        <div className="w-[90%] xl:w-[1350px] mx-auto p-[20px] my-[20px] lg:mb-[100px]">
            <h1 className='text-center text-[20px] md:text-[25px] lg:text-[30px]'>Контакты</h1>
            <section className='flex flex-col lg:flex-row justify-between  my-[70px] '>
                <div className='flex flex-col w-[90%] mb-[30px] lg:w-[30%]'>
                    <div className='mb-[20px]'>
                        <p><span className='font-bold'>Почта:</span> info@santech-m.ru</p>
                        <p><span className='font-bold'>Телефон:</span> +7 (903) 553-65-30</p>
                    </div>
                    <div className='mb-[20px]'>
                        <p><span className='font-bold'>Юридический адрес:</span> 129343, г. Москва, <br className='hidden lg:block'/> вн. тер. г. муниципальный округ<br className='hidden lg:block'/> Свиблово, Серебрякова проезд д. 11, к. 1,<br className='hidden lg:block'/> помещ. 12Н/2</p>
                    </div>
                    <div>
                        <p><span className='font-bold'>Фактический адрес:</span> 129343, г. Москва, <br className='hidden lg:block'/> вн. тер. г. муниципальный округ<br className='hidden lg:block'/> Свиблово, Серебрякова проезд д. 11, к. 1,<br className='hidden lg:block'/> помещ. 12Н/2</p>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[60%] h-[500px] bg-[#c7c6c6] animate-pulse flex items-center justify-center'>
                </div>
            </section>
            <Form formRef={formRef}/>
        </div>
    )
}

export default Contacts