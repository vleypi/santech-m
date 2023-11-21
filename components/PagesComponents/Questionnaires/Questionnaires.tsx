'use client'

import Image from "next/image"
import sfa from '../../../public/img/sfa.png'
import wilo from '../../../public/img/wilo.png'


export const Questionnaires = () =>{
    return(
        <div className="w-[90%] xl:w-[1350px] mx-auto p-[20px] my-[20px] lg:mb-[100px]">
            <h1 className='text-center text-[20px] md:text-[25px] lg:text-[30px]'>Опросные листы инженерного оборудования</h1>
            <section className='flex flex-col items-center md:flex-row justify-around mt-[70px] '>
                <div className="flex flex-col items-center">
                    <h2 className='text-[20px] md:text-[23px] lg:text-[27px] font-semibold mb-[20px]'>Опросный лист SFA</h2>
                    <Image width={404} height={524} alt="sfa лист" src={sfa}/>
                    <a className="mt-[30px] bg-[#0f4b84] text-[#fff] px-[20px] py-[5px] text-[16px] rounded-xl" href="/SFA.xlsx" download="SFA">Скачать</a>
                </div>
                <div className="flex flex-col items-center max-md:mt-[50px]">
                    <h2 className='text-[20px] md:text-[23px] lg:text-[27px] font-semibold mb-[20px]'>Опросный лист Wilo</h2>
                    <Image width={404} height={524} alt="sfa лист" src={wilo}/>
                    <a className="mt-[30px] bg-[#0f4b84] text-[#fff] px-[20px] py-[5px] text-[16px] rounded-xl" href="/Wilo.xlsx" download="Wilo">Скачать</a>
                </div>
            </section>
        </div>
    )
}

