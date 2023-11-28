import Image from "next/image"
import { ImageProps } from "next/image"
import Form from "@/components/Form/Form"


const Products = ({product}) =>{
    return(
                <>
                    <section className="w-full relative">
                        <Image alt={product.img.src} className="w-full xl:h-[80vh]" width={1920} height={1080} src={product.img}/>
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