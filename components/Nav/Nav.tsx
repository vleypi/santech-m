'use client'

import Link from "next/link"


const Nav = () =>{


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
        },
        {
            href: '/facilities',
            name: 'Наши объекты'
        }
    ]

    const divLinks = links.map((link,index)=>(
        <Link 
            key={index+'_'+link.href} 
            href={link.href} 
            className={`text-[#fff] px-4 hover:text-[#e0f1fe] flex h-full items-center md:text-[11px] lg:text-[14px] xl:text-[16px]`}
        >
            {link.name}
        </Link>
    ))

    return(
        <nav className="hidden lg:flex md:h-full md:items-center">
            {divLinks}
        </nav>
    )
}

export default Nav