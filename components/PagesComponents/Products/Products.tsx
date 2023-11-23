'use client'

import Image from "next/image"

import product1 from '../../../public/products/1.jpg'
import product2 from '../../../public/products/2.jpg'
import product3 from '../../../public/products/3.jpg'
import product4 from '../../../public/products/4.jpg'
import product5 from '../../../public/products/5.jpg'
import product6 from '../../../public/products/6.jpg'

import { useRouter } from "next/navigation"

const Products = () =>{

    const router = useRouter()

    const products = [
        {img: product1, id: 1, name: 'Пожаротушение'},
        {img: product2, id: 2, name: 'Отопление'},
        {img: product3, id: 3, name: 'Вентиляция и кондиционирование'},
        {img: product4, id: 4, name: 'Водоснабжение и водоотведение '},
        {img: product5, id: 5, name: 'Водоочистное оборудование'},
        {img: product6, id: 6, name: 'Проектирование и сервисное обслуживание'}
    ]

    return(
        <section className="my-[70px] max-md:mt-[30px] w-[90%] xl:w-[1350px] m-auto">
            <h1 className='text-center text-[20px] md:text-[25px] lg:text-[30px]'>Виды систем</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-3 md:gap-5 lg:gap-8 xl:gap-10 max-md:mt-[30px] md:mt-[70px]">
                {products.map((product)=>(
                        <div key={product.id+'_'+product.img.src} onClick={()=>router.push(`/products/${product.id}`)} className="flex group relative items-center justify-center cursor-pointer transition duration-150 hover:scale-[1.01]  hover:opacity-100"> 
                            <div className="rounded-2xl absolute opacity-40 md:group-hover:opacity-0 w-[100%] h-[100%] bg-[#0f4b84] transition duration-150"></div>
                            <p className="text-center absolute z-10  text-[#fff] text-[20px] xl:text-[25px] font-semibold">{product.name}</p>
                            <Image alt={String(product.img)} src={product.img} className="w-[100%] h-[100%] rounded-2xl" width={1920} height={1080}/>
                        </div>
                ))}
            </div>
        </section >
    )
}

export default Products