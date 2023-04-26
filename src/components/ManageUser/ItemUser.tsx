import React from 'react'
import { PopUp } from '../PopUp/PopUp'
import { FormSign } from '../FormSign/FormSign'

interface Props{
    id:number,
    name:string,
    email:string,
    age:number,
    Remove:(id:number)=>void,
    Edit:(id: number,name:string,email:string,age:number)=>void
}

export const ItemUser:React.FC<Props> = ({age,email,id,name,Remove,Edit}) => {
  return (
    <div className='my-2 p-2 w-60 md:w-[450px] h-12 flex items-center justify-between border border-solid border-gray-400 hover:border-blue-400  rounded text-gray-600  '>
        <div>
            {id}
        </div>
        <div>
            {name}
        </div>
        <div>
            {email}
        </div>
        <div>
            {age}
        </div>
        <PopUp button={
        <button className='border border-solid border-gray-400 hover:border-blue-400 text-blue-400 text-base rounded p-2'>
            Редагувати
        </button>}>
            <FormSign edit={true} Edit={Edit} Create={(a,b,c)=>{}} key={id} id={id} age={age} email={email} name={name}/>
        </PopUp>
        <button onClick={()=>Remove(id)} className='border border-solid border-red-600 text-red-600 rounded p-2  text-base hover:bg-red-600 hover:text-white '>
            Видалити
        </button>
    </div>
  )
}
