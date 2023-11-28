'use client'

import Image from "next/image"
import main2 from '../../../public/img/main2.png'
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
import brand20 from '../../../public/brands/20.png'
import brand21 from '../../../public/brands/21.png'
import brand22 from '../../../public/brands/22.png'


import product1 from '../../../public/products/1.jpg'
import product2 from '../../../public/products/2.jpg'
import product3 from '../../../public/products/3.jpg'
import product4 from '../../../public/products/4.jpg'
import product5 from '../../../public/products/5.jpg'
import product6 from '../../../public/products/6.jpg'


import { useRouter } from "next/navigation"

const Main = () =>{

    const formRef = useRef<HTMLDivElement>(null)

    const executeScroll = () => formRef.current?.scrollIntoView()    

    const products = [
        {img: product1, id: 1, name: 'Пожаротушение'},
        {img: product2, id: 2, name: 'Отопление'},
        {img: product3, id: 3, name: 'Вентиляция и кондиционирование'},
        {img: product4, id: 4, name: 'Водоснабжение и водоотведение '},
        {img: product5, id: 5, name: 'Водоочистное оборудование'},
        {img: product6, id: 6, name: 'Проектирование и сервисное обслуживание'}
    ]

    const brands = [
        {img: brand13, id: 13},
        {img: brand2, id: 2},
        {img: brand5, id: 5},
        {img: brand1, id: 1},
        {img: brand4, id: 4},
        {img: brand6, id: 6},
        {img: brand7, id: 7},
        {img: brand8, id: 8},
        {img: brand9, id: 9},
        {img: brand10, id: 10},
        {img: brand11, id: 11},
        {img: brand12, id: 12},
        {img: brand14, id: 14},
        {img: brand15, id: 15},
        {img: brand16, id: 16},
        {img: brand18, id: 18},
        {img: brand19, id: 19},
        {img: brand20, id: 20},
        {img: brand21, id: 21},
        {img: brand22, id: 22},
    ]

    const router = useRouter()

    return(
        <>
            <section className="
                flex justify-between flex-col py-[50px] w-[90%] 
                m-auto md:flex-row md:items-center
                xl:w-[1350px]
                max-lg:pb-[0px]
            ">
                <div className="font-normal ">
                    <h3 className="text-[23px] lg:text-[27px] xl:text-[35px]">Комплексные поставки <br /> оборудования и материалов <br /> для инженерных систем <br /> и водоочистки</h3>
                    <button onClick={executeScroll} className="text-[white] my-[30px] text-[10px] lg:text-[17px] xl:text-[20px] py-[7px] px-[18px] rounded-xl bg-[#0f4b84]">Связаться с нами</button>
                </div>
                <Image className="w-[100%] h-auto md:w-[33%] lg:w-[500px] rounded-2xl" alt={main2.src} src={main2} width={500} height={500}/>
            </section>
            <section className="my-[70px] w-[90%] xl:w-[1350px] m-auto">
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[25px]">Компания САНТЕХКОМПЛЕКТ-М занимается поставками качественных и надежных инженерных решений для различных отраслей. Мы предлагаем широкий спектр услуг, включая проектирование, поставку, монтаж и обслуживание систем водоснабжения,  водоотведения, вентиляции, кондиционирования, отопления, пожаротушения и систем водоочистки..</p>
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[50px]">Наши инженеры обладают высокой квалификацией и богатым опытом работы в сфере инженерных систем. Компания готова разработать оптимальное решения для для Ваших потребностей, учитывая все технические, экономические и экологические аспекты.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] gap-3 md:gap-5 lg:gap-8 xl:gap-10 mt-[70px]">
                    {products.map((product)=>(
                        <div key={product.id+'_'+product.img.src} onClick={()=>router.push(`/products/${product.id}`)} className="flex group relative items-center justify-center cursor-pointer transition duration-150 hover:scale-[1.01]  hover:opacity-100"> 
                            <div className="rounded-2xl absolute opacity-40 md:group-hover:opacity-0 w-[100%] h-[100%] bg-[#0f4b84] transition duration-150"></div>
                            <p className="text-center absolute z-10  text-[#fff] text-[20px] xl:text-[25px] font-semibold">{product.name}</p>
                            <Image alt={String(product.img)} src={product.img} className="w-[100%] h-[100%] rounded-2xl" width={500} height={300}/>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-[90%] xl:w-[1350px] m-auto">
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[25px]">Компания САНТЕХКОМПЛЕКТ-М имеет широкую сеть партнеров и поставщиков, что позволяет предлагать высококачественное оборудование от ведущих производителей. Мы всегда следим за последними технологическими тенденциями и предлагаем наиболее инновационные решения на рынке инженерных систем.</p>
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[50px]">При выполнении проектов наши сотрудники строго выполняют все нормы и стандарты безопасности. Мы имеем все необходимые сертификаты и лицензии, подтверждающие нашу способность качественно выполнять инженерные работы.</p>
                <h3 className="text-center my-[50px] text-[22px] md:text-[22px] lg:text-[26px] xl:text-[30px]">Бренды партнеры</h3>
                <div className="grid grid-cols-4 md:grid-cols-5 gap-10">
                    {brands.map((brand)=>(
                        <div className="flex items-center justify-center" key={brand.img.src}> 
                            <Image alt={String(brand.img.src)} className="w-auto h-auto" src={brand.img} width={150} height={80}/>
                        </div>
                    ))}
                </div>
            </section>
            <section className="my-[70px] w-[90%] xl:w-[1350px] m-auto">
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[50px]">Мы готовы предоставить полный спектр услуг - от консультации и разработки проекта до его реализации и последующего обслуживания. Наша главная цель - удовлетворение потребностей клиентов и установление долгосрочного сотрудничества, основанного на взаимном доверии.</p>
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[70px]">Будем рады ответить на все Ваши вопросы и обсудить возможные варианты совместной работы.</p>
                <Form formRef={formRef}/>
            </section>
        </>
    )
}

export default Main