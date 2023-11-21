'use client'

import Image from "next/image"

import system1 from '../../../public/systems/1.jpg'
import system2 from '../../../public/systems/2.jpg'
import system3 from '../../../public/systems/3.jpg'
import system4 from '../../../public/systems/4.jpg'
import system5 from '../../../public/systems/5.jpg'

import { useRouter } from "next/navigation"

const Products = () =>{

    const router = useRouter()

    const products = [
        {img: system1, id: 1, name: 'Пожаротушение'},
        {img: system2, id: 2, name: 'Отопление'},
        {img: system3, id: 3, name: 'Вентиляция и кондиционирование'},
        {img: system4, id: 4, name: 'Водоснабжение и водоотведение '},
        {img: system5, id: 5, name: 'Водоочистное оборудование'},
    ]

    return(
        <section className="my-[70px] max-md:mt-[30px] w-[90%] xl:w-[1350px] m-auto">
            <h1 className='text-center text-[20px] md:text-[25px] lg:text-[30px]'>Виды систем</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-3 md:gap-5 lg:gap-8 xl:gap-10 max-md:mt-[30px] md:mt-[70px]">
                {products.map((product)=>(
                    <div key={product.id+'_'+product.img.src} onClick={()=>router.push(`/products/${product.id}`)} className="flex group relative items-center justify-center cursor-pointer transition duration-150 hover:scale-[1.01]  hover:opacity-100"> 
                        <div className="rounded-2xl absolute opacity-40 group-hover:opacity-0 w-[100%] h-[100%] bg-[#0f4b84] transition duration-150"></div>
                        <p className="text-center absolute z-10  text-[#fff] text-[20px] xl:text-[30px] font-semibold">{product.name}</p>
                        <Image alt={String(product.img)} src={product.img} className="w-[100%] h-[100%] rounded-2xl" width={1920} height={1080}/>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Products