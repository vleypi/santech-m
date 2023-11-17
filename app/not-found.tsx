import Link from 'next/link'


const NotFound = () =>{
    return(
        <div className="w-full h-screen absolute flex flex-col items-center justify-center bg-[#ffffff] text-[black]">
            <h1 className="text-[100px]">404</h1>
            <p className="text-center mb-[50px] font-semibold">Такой страницы не существует </p>
            <Link href={'/'} className="bg-[#0f4b84] text-[#ffffff] px-[30px] py-[10px] rounded">На главную</Link>
        </div>
    )
}

export default NotFound