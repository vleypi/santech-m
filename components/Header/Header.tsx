'use client'

import Link from "next/link"
import Image from "next/image"
import logo from '../../public/img/logo.svg'
import Nav from "../Nav/Nav"
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import { useNavStore } from "@/store"
import { usePathname } from "next/navigation"

const Header = () =>{

    const {opened,setOpened} = useNavStore(state => state)

    const pathname = usePathname()

    return(
        <header className={`border-b-2 border-b-[#fff] bg-[#0f4b84]  w-full z-[100]`}>
            <div className='
              flex items-center mx-auto justify-between h-[60px] w-[90%] 
              md:h-[80px]
              lg:h-[90px]
              xl:w-[1350px] 
            '>
              <div>
                <Link href={'/'} className="flex items-center">
                  <Image alt="green-chem" className="w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px]" width={50} src={logo}/>
                  <div className='flex flex-col text-[#fff]'>
                    <div className='mx-[15px] mb-[5px] flex items-center'>
                      <AiOutlineMail className="mr-[5px]"/>
                      <p className="font-normal text-[7px] md:text-[9px] lg:text-[12px] xl:text-[15px]">santechm@inbox.ru</p>
                    </div>
                    <div className='mx-[15px] flex items-center'>
                      <BsTelephone className="mr-[5px]"/>
                      <p className="font-normal text-[7px] md:text-[9px] lg:text-[12px] xl:text-[15px]">+7 (903) 553-65-30</p>
                    </div>
                  </div>
                </Link>
              </div>
              <AiOutlineMenu className="block w-[30px] h-[30px] md:hidden text-[white]" onClick={setOpened} />
              <Nav />       
            </div>
        </header>
    )
}

export default Header