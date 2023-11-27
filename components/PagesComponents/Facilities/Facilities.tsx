'use client'

import Image from "next/image"

import { useRouter } from "next/navigation"

import facility1 from '../../../public/facilities/1.jpg'
import facility2 from '../../../public/facilities/2.jpg'
import facility3 from '../../../public/facilities/3.jpg'
import facility4 from '../../../public/facilities/4.jpg'
import facility5 from '../../../public/facilities/5.jpg'
import facility6 from '../../../public/facilities/6.jpg'

export const Facilities = () =>{

    const router = useRouter()

    const facilities = [
        {img: facility1, id: 1, name: '«Бизнес Центр L/R», Санкт-Петербург'},
        {img: facility2, id: 2, name: 'Клубный дом "Точка отсчета", Московская область'},
        {img: facility3, id: 3, name: 'Микрорайон "Центральный (Одинцово)"'},
        {img: facility4, id: 4, name: 'ЖК "Береговой", Москва'},
        {img: facility5, id: 5, name: 'БЦ «Пифагор», Санкт-Петербург'},
        {img: facility6, id: 6, name: 'ЖК "Рихард", Москва'}
    ]

    return(
        <section className="my-[70px] max-md:mt-[30px] w-[90%] xl:w-[1350px] m-auto">
            <h1 className='text-center text-[20px] md:text-[25px] lg:text-[30px]'>Наши объекты</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] gap-3 md:gap-5 lg:gap-8 xl:gap-10 max-md:mt-[30px] md:mt-[70px]">
                {facilities.map((facility)=>(
                    <div className="flex flex-col relative items-center justify-center cursor-pointer transition" key={facility.id + "_" + facility.img.src}> 
                        <Image alt={String(facility.img.src)} src={facility.img} className="w-[100%] h-[100%] rounded-2xl shadow-2xl" width={1920} height={1080}/>
                        <p className="text-center text-[#000] text-[20px] xl:text-[25px] mt-[20px] font-normal">{facility.name}</p>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Facilities