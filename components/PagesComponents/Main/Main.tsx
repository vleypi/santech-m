'use client'

import Image from "next/image"
import m1 from '../../../public/img/m1.jpg'
import m2 from '../../../public/img/m2.svg'
import m3 from '../../../public/img/m3.svg'
import m4 from '../../../public/img/m4.svg'
import m5 from '../../../public/img/m5.svg'
import brands from '../../../public/img/brands.png'
import Form from "@/components/Form/Form"
import { useRef } from "react"

import brand1 from '../../../public/brands/1.png'
import brand2 from '../../../public/brands/2.png'
import brand4 from '../../../public/brands/4.png'
import brand5 from '../../../public/brands/5.png'
import brand6 from '../../../public/brands/6.png'
import brand7 from '../../../public/brands/7.png'
import brand8 from '../../../public/brands/8.png'
import brand9 from '../../../public/brands/9.png'
import brand10 from '../../../public/brands/10.png'
import brand11 from '../../../public/brands/11.png'
import brand12 from '../../../public/brands/12.png'
import brand13 from '../../../public/brands/13.png'
import brand14 from '../../../public/brands/14.png'
import brand15 from '../../../public/brands/15.png'
import brand16 from '../../../public/brands/16.png'
import brand17 from '../../../public/brands/17.png'
import brand18 from '../../../public/brands/18.png'
import brand19 from '../../../public/brands/19.png'


const Main = () =>{

    const formRef = useRef<HTMLDivElement>(null)

    const executeScroll = () => formRef.current?.scrollIntoView()    

    return(
        <>
            <section className="w-full relative">
                <Image alt={m1.src} className="w-full xl:h-[80vh]" width={1920} height={1080} src={m1}/>
                <div className="absolute w-full h-full flex flex-col items-center top-0 bg-[#0f4c847b]">
                    <div className="
                        w-[90%] 
                        m-auto
                        text-center
                        xl:py-[120px] xl:w-[1350px]"
                    >
                        <h1 className="text-[#fff] font-semibold text-[17px] md:text-[25px] lg:text-[27px] xl:text-[37px] mb-[25px] lg:mb-[40px] xl:mb-[50px]">Комплексные поставки <br className="md:hidden"/> инженерных систем <br /> по всей России</h1>
                        <button onClick={executeScroll} className="bg-[#ffffff] font-semibold text-[10px] lg:text-[17px] xl:text-[20px] py-[7px] px-[18px] rounded-xl">Связаться с нами</button>
                    </div>
                </div>
            </section>
            <section className="my-[70px] w-[90%] xl:w-[1350px] m-auto">
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[25px]">Компания САНТЕХКОМПЛЕКТ-М занимается предоставлением качественных и надежных инженерных решений для различных отраслей. Мы предлагаем широкий спектр услуг, включая проектирование, поставку, монтаж и обслуживание систем водоснабжения,  водоотведения, вентиляции, кондиционирования, отопления и пожаротушения.</p>
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[50px]">Наши инженеры обладают высокой квалификацией и богатым опытом работы в сфере инженерных систем. Компания готова разработать оптимальное решения для для Ваших потребностей, учитывая все технические, экономические и экологические аспекты.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[30px]">
                    <Image alt={String(m2)} src={m2} width={420} height={420}/>
                    <Image alt={String(m3)} src={m3} width={420} height={420}/>
                    <Image alt={String(m4)} src={m4} width={420} height={420}/>
                    <Image alt={String(m5)} src={m5} width={420} height={420}/>
                </div>
            </section>
            <section className="my-[100px] w-[90%] xl:w-[1350px] m-auto">
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[25px]">Компания САНТЕХКОМПЛЕКТ-М имеет широкую сеть партнеров и поставщиков, что позволяет предлагать высококачественное оборудование от ведущих производителей. Мы всегда следим за последними технологическими тенденциями и предлагаем наиболее инновационные решения на рынке инженерных систем.</p>
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[50px]">При выполнении проектов наши сотрудники строго выполняют все нормы и стандарты безопасности. Мы имеем все необходимые сертификаты и лицензии, подтверждающие нашу способность качественно выполнять инженерные работы.</p>
                <h3 className="text-center my-[50px] text-[22px] md:text-[22px] lg:text-[26px] xl:text-[30px]">Бренды партнеры</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-10">
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand1} width={192} height={108}/>
                    </div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand2} width={192} height={108}/>
                    </div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand4} width={192} height={108}/>
                    </div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand5} width={192} height={108}/>
                    </div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand6} width={192} height={108}/>
                    </div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand7} width={192} height={108}/>
                    </div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand8} width={192} height={108}/>
                    </div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand9} width={192} height={108}/>
                    </div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand10} width={192} height={108}/>
                    </ div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand11} width={192} height={108}/>
                    </div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand12} width={192} height={108}/>
                    </ div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand13} width={192} height={108}/>
                    </ div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand14} width={192} height={108}/>
                    </ div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand15} width={192} height={108}/>
                    </ div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand16} width={192} height={108}/>
                    </ div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand17} width={192} height={108}/>
                    </ div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand18} width={192} height={108}/>
                    </ div>
                    <div className="flex items-center justify-center"> 
                        <Image alt={String(brand1)} src={brand19} width={192} height={108}/>
                    </ div>
                </div>
            </section>
            <section className="my-[70px] w-[90%] xl:w-[1350px] m-auto">
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[50px]">Мы готовы предоставить полный спектр услуг - от консультации и разработки проекта до его реализации и последующего обслуживания. Наша главная цель - удовлетворение потребностей клиентов и установление долгосрочного сотрудничества, основанного на взаимном доверии.</p>
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[50px]">Будем рады ответить на все Ваши вопросы и обсудить возможные варианты совместной работы.</p>
                <Form formRef={formRef}/>
            </section>
        </>
    )
}

export default Main