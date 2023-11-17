import Image from "next/image"

import product1 from '../../../public/product1.png'
import product2 from '../../../public/product2.png'
import product3 from '../../../public/product3.png'

const Products = () =>{
    return(
        <>
            <section className="my-[70px] w-[90%] xl:w-[1350px] m-auto">
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[25px]">Коагулянт для очистки воды «CORRAFLOC» – это высокоэффективный продукт, разработанный с целью улучшения качества воды и экономии затрат на ее очистку.</p>
                <p className="md:text-[18px] xl:text-[22px] font-light mb-[25px]">Постоянное стремление к совершенствованию формул коагулянтов и поиск инновационных решений позволило создать более эффективный и безопасный продукт «CORRAFLOC» в виде сухого вещества и в виде раствора.</p>
                <p className="md:text-[18px] xl:text-[22px] font-light">Коагулянт «CORRAFLOC» прошел экспертизу в независимой лаборатории и получил сертификаты качества, выданные уполномоченными органами. Документы утверждают, что продукт соответствует всем стандартам действующего законодательства и может безопасно использоваться в широком спектре отраслей. </p>
                <div className="flex flex-col items-center justify-center mt-[100px] md:flex-row"> 
                    <Image className="w-[70%] md:w-[30%] lg:w-[290px]" alt={String(product1)} src={product1}/>
                    <Image className="w-[70%] md:w-[30%] lg:w-[290px]" alt={String(product2)} src={product2}/>
                    <Image className="w-[70%] md:w-[30%] lg:w-[290px]" alt={String(product3)} src={product3}/>
                </div>
            </section>
            <section className="mt-[150px] w-[90%] xl:w-[1350px] m-auto">
                <h3 className="text-[22px] xl:text-[30px] font-normal mb-[25px]">Импортозамещение</h3>
                <p className="text-[22px] font-light mb-[25px]">Постоянное стремление к совершенствованию формул коагулянтов и поиск инновационных решений позволило создать более эффективный и безопасный продукт «CORRAFLOC» в виде сухого вещества и в виде раствора.</p>
            </section>
            <section className="mt-[120px] w-[90%] xl:w-[1350px] m-auto">
                <h3 className="text-[22px] xl:text-[30px] font-normal mb-[25px]">Преимущества</h3>
                <p className="text-[22px] font-light mb-[25px]">Коагулянт «CORRAFLOC» – это современный высокоэффективный коагулянт для очистки сточных и питьевых вод, включающий в свой состав соли алюминия и флокулирующие компоненты. Все вещества в коагулянте взаимно дополняют друг друга и повышают интенсификацию процесса коагуляции. </p>
            </section>
            <section className="my-[150px] w-[90%] xl:w-[1350px] m-auto">
                <h3 className="text-[22px] xl:text-[30px] font-normal mb-[100px] text-center">Преимущества коагулянта «CORRAFLOC»</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <h4 className="text-[17px] xl:text-[23px] font-medium xl:font-normal mb-[10px]">Экономия расходов.</h4>
                        <p className="text-[19px] font-light mb-[25px]">Благодаря высокой эффективности коагулянта требуется доза реагента ниже, чем у других коагулянтов на 40-55%.</p>
                    </div>
                    <div>
                        <h4 className="text-[17px] xl:text-[23px] font-medium xl:font-normal mb-[10px]">Флокулирующие свойства. </h4>
                        <p className="text-[19px] font-light mb-[25px]">В состав коагулянта входит флокулянт с целью увеличения скорости осаждения агломератов.</p>
                    </div>
                    <div>
                        <h4 className="text-[17px] xl:text-[23px] font-medium xl:font-normal mb-[10px]">Широкий диапазон применения.</h4>
                        <p className="text-[19px] font-light mb-[25px]">Работает как при низких, так и при высоких температурах.</p>
                    </div>
                    <div className="mt-[30px]">
                        <h4 className="text-[17px] xl:text-[23px] font-medium xl:font-normal mb-[10px]">Дезинфицирующие свойства. </h4>
                        <p className="text-[19px] font-light mb-[25px]">В состав коагулянта входят обеззараживающие компоненты с целью уничтожения патогенных микроорганизмов и предотвращения передачи через воду возбудителей инфекционных заболеваний</p>
                    </div>
                    <div className="mt-[30px]">
                        <h4 className="text-[17px] xl:text-[23px] font-medium xl:font-normal mb-[10px]">Низкая коррозионная активность. </h4>
                        <p className="text-[19px] font-light mb-[25px]">Благодаря составу снижается нагрузка на трубы и водоочистное оборудование.</p>
                    </div>
                    <div className="mt-[30px]">
                        <h4 className="text-[17px] xl:text-[23px] font-medium xl:font-normal mb-[10px]">Повышение эффективности водоочистки. </h4>
                        <p className="text-[19px] font-light mb-[25px]">Компоненты коагулянта работают с более большим спектром загрязнений, относительно других коагулянтов.</p>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Products