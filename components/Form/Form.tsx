'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import {ImSpinner8} from 'react-icons/im'
import { useRouter } from 'next/navigation'
import TextareaAutosize from 'react-textarea-autosize';

export interface IForm {
        name: string,
        email: string,
        phone: string,
        text: string,
}

export enum Status {
    WAITING = 'waiting',
    SENDING = 'sending',
    SUCCESS = 'succes',
    ERROR = 'error'
}

type Props = {
    formRef: React.RefObject<HTMLDivElement>
}

const Form = ({formRef}: Props) =>{

    const router = useRouter()
    
    const [form,setForm] = useState<IForm>({
        name: '',
        email: '',
        phone: '',
        text: ''
    })

    const post = async () =>{
        try{
            setBtnStatus("SENDING")

            if(form.email && form.email && form.phone ){
                axios.post('/api/contact', {
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    text: form.text
                })
                setTimeout(()=>{
                    setBtnStatus('SUCCESS')
                },2000)
            }
            else{
                setBtnStatus('ERROR')
                setTimeout(()=>{
                    setBtnStatus('WAITING')
                },3000)
            }
        }
        catch(err){
            router.refresh()
        }
    }

    const [btnStatus,setBtnStatus] = useState<keyof typeof Status>("WAITING")

    const formHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setForm({...form,[e.target.name]: e.target.value})
    }


    return(
        <div className="flex flex-col" ref={formRef}>
            <p className='text-left text-[22px]'>Оставить заявку</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-[20px]'>
                <input max={20} name='name' placeholder='Имя' onChange={formHandler} className="border-[1px] px-[15px] py-[10px] rounded-xl outline-none  "/>
                <input max={20} name='email' placeholder='e-mail' onChange={formHandler} className="border-[1px] px-[15px] py-[10px] rounded-xl outline-none "/>
                <input max={20} name='phone' placeholder='Телефон' onChange={formHandler} className="border-[1px] px-[15px] py-[10px] rounded-xl outline-none "/>
            </div>
            
            
            {btnStatus !== "SUCCESS" && btnStatus !== "ERROR" &&
                <button disabled={btnStatus == 'SENDING'} className='mt-[20px] w-full bg-[#0f4b84] text-[white] rounded-xl p-2 bordero disabled:opacity-70 flex justify-center items-center' onClick={post}>
                    {btnStatus !== 'WAITING'   ? 'Отправка...' : 'Отправить'}
                    {btnStatus !== 'WAITING' && <ImSpinner8 className="ml-[10px] animate-spin"/>}
                </button> 
            }
            {btnStatus == "SUCCESS" &&
                <button className='mt-[20px] w-full bg-[#24984d] text-[white] rounded-xl p-2 bordero disabled:opacity-70 flex justify-center items-center'>
                    Форма успешно отправлена
                </button>
            }
            {btnStatus == "ERROR" &&
                <button className='mt-[20px] w-full bg-[#882121] text-[white] rounded-xl p-2 bordero disabled:opacity-70 flex justify-center items-center '>
                    Не все поля заполнены
                </button>
            }
        </div>
    )
}

export default Form