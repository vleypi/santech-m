'use client'

import Link from "next/link"
import Nav from "../Nav/Nav"
import Image from "next/image"
import { useRouter } from "next/navigation"

import logo from '../../public/img/logo.png'


const Footer = () =>{

    const router = useRouter()

    return(
      <footer>
          <div className="flex flex-col justify-between items-center p-10 text-[white] mx-auto  md:max-w-[1400px] md:flex-row">
            <div className="flex flex-col items-center md:block">
              <div>
                <Link href={'/'} className="flex items-center">
                  <Image alt="green-chem" className="w-[50px]" width={200} src={logo}/>
                </Link>
              </div>
                <p className="mt-[20px]">ООО “САНТЕХКОМПЛЕКТ-М”</p>
                <div className="mt-[20px]">
                  <p className="max-md:text-center">ИНН / КПП</p>
                  <p>7716985351/771601001</p>
                </div>
                <div className="mt-[20px] text-[#bdbbbb] text-[13px]">
                  <p>santech-m.ru</p>
                  <p className="max-md:text-center">2023</p>
                </div>
            </div>
            <Nav />
            <div className="flex flex-col items-center mt-[90px] md:mt-[0px]">
              <p className="mb-[15px]">santechm@inbox.ru</p>
              <p className="mb-[15px]">+7 (903) 553-65-30</p>
              <button 
                    onClick={()=>router.push('/contacts')}
                    className="bg-white text-center py-[5px] px-[25px] text-[15px] text-[#2B5F8F] rounded-[5px] ml-[10px]">
                      Связаться
              </button>
            </div>
          </div>
      </footer>
    )
}

export default Footer