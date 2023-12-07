'use client'

import Image from "next/image"
import sfa from '../../../public/img/sfa.png'
import wilo from '../../../public/img/wilo.png'

import Form from "@/components/Form/Form"


export const Questionnaires = () =>{
    return(
        <div className="w-[90%] xl:w-[1350px] mx-auto p-[20px] my-[50px] max-md:mt-[20px] lg:mb-[100px]">
            <h1 className='text-center text-[20px] md:text-[25px] lg:text-[30px]'>Опросные листы инженерного оборудования</h1>
            <section className='flex flex-col items-center md:flex-row justify-around my-[70px] max-md:mt-[30px] '>
                <div className="flex flex-col items-center ">
                    <h2 className='text-[16px] md:text-[19px] lg:text-[22px] font-semibold mb-[20px]'>Опросный лист объекта/проекта</h2>
                    <Image width={404} height={524} className="border-solid border-[1px] border-black" height={524} alt="sfa лист" src={sfa}/>
                    <a className="mt-[30px] bg-[#0f4b84] text-[#fff] px-[20px] py-[5px] text-[16px] rounded-xl" href="/SFA2.xlsx" download="SFA">Скачать</a>
                </div>
                <div className="flex flex-col items-center max-md:mt-[50px]">
                    <h2 className='text-[16px] md:text-[19px] lg:text-[22px] font-semibold mb-[20px]'>Опросный лист на насосное оборудование</h2>
                    <Image width={404} height={504} className="border-solid border-[1px] border-black"  alt="sfa лист" src={wilo}/>
                    <a className="mt-[30px] bg-[#0f4b84] text-[#fff] px-[20px] py-[5px] text-[16px] rounded-xl" href="/Wilo2.xlsx" download="Wilo">Скачать</a>
                </div>
            </section>
            <div className="mt-[70px]">
                <Form />
            </div>
        </div>
    )
}

