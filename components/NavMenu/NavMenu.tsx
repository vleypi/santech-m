'use client'

import { useNavStore } from "@/store"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {AiOutlineMenu} from 'react-icons/ai'

export const NavMenu = () =>{

    const pathname = usePathname()

    const {opened,setOpened} = useNavStore(state => state)
    
    const links = [
        {
            href: '/',
            name: 'Главная'
        },
        {
            href: '/contacts',
            name: 'Контакты'
        },
        {
            href: '/questionnaires',
            name: 'Опросные листы'
        },
        {
            href: '/products',
            name: 'Виды систем'
        }
    ]

    const divLinks = links.map((link,index)=>(
        <Link 
            key={index+'_'+link.href} 
            href={link.href} 
            className={`${pathname === link.href && 'font-medium'} my-[10px]`}
            onClick={setOpened}
        >
                {link.name}
        </Link>
    ))

    return (
        <>
            {opened &&
                <div className="fixed flex flex-col items-center bg-[#0f4b84] w-full h-full p-[20px] md:hidden z-[10000] ">
                    <AiOutlineMenu onClick={setOpened} className="absolute left-[20px] block w-[30px] h-[30px] md:hidden text-[white]"/>
                    <h3  className="text-[18px] text-[white] font-normal">Меню</h3>
                    <nav className="flex flex-col h-full w-full text-[16px] mt-[20px] text-[white]" >
                        {divLinks}
                    </nav>
                </div>
            }   
        </>
    )
}
