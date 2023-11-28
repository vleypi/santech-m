import Image from "next/image"

import Form from "@/components/Form/Form"

import img1 from '../../../public/products/1.jpg'
import img2 from '../../../public/products/2.jpg'
import img3 from '../../../public/products/3.jpg'
import img4 from '../../../public/products/4.jpg'
import img5 from '../../../public/products/5.jpg'
import img6 from '../../../public/products/6.jpg'

type Props = {
    product: {
        id: number,
        h1: string,
        texts: {
            p: string
        }[]
    }
}

const Products = ({product}: Props) =>{

    const images = [img1,img2,img3,img4,img5,img6]

    return(
                <>
                    <section className="w-full relative">
                        <Image alt={images[product.id-1].src} className="w-full xl:h-[80vh]" width={1920} height={1080} src={images[product.id-1]}/>
                        <div className="absolute w-full h-full flex flex-col items-center top-0 bg-[#0f4c847b]">
                            <div className="
                                w-[90%] 
                                m-auto
                                text-center
                                xl:py-[120px] xl:w-[1350px]"
                            >
                                <h1 className="text-[#fff] font-semibold text-[25px] md:text-[30px] lg:text-[35px] xl:text-[45px] mb-[25px] lg:mb-[40px] xl:mb-[50px]"><br className="md:hidden"/>{product.h1} </h1>
                            </div>
                        </div>
                    </section >
                    <section className="my-[70px] w-[90%] xl:w-[1350px] m-auto">
                        {product.texts.map((p)=>(
                            <p key={p.p} className="md:text-[18px] xl:text-[22px] font-light mb-[25px]">{p.p}</p>
                        ))}
                        <div className="mt-[70px]">
                            <Form />
                        </div>
                    </section>
                </> 
    )
}

export default Products