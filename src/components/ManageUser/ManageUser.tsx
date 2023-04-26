import React from 'react'
import { ItemUser } from './ItemUser'
import { PopUp } from '../PopUp/PopUp'
import { FormSign } from '../FormSign/FormSign'
import {NavLink} from 'react-router-dom'
interface User{
    id:number,
    name:string,
    email:string,
    age:number
}

export const ManageUser = () => {
    const [List, SetList] = React.useState<Array<User>>([])

    const SortASC = ()=>{
        SetList([...List.sort(( a , b)=>a.id - b.id || a.age - b.age || a.name.localeCompare(b.name)|| a.email.localeCompare(b.email))]) 
    }
    const SortDESC =()=>{
        SetList([...List.sort(( a , b)=>a.id + b.id || a.age + b.age || b.name.localeCompare(a.name)|| b.email.localeCompare(a.email))]) 
            
    }
    const Remove = React.useCallback((id:number)=>{
        const Index = List.findIndex((u) => u.id === id)
        if(Index >-1){
            List.splice(Index,1)
            SetList([...List])
        }
    },[])
    const Edit = (id: number, name: string, email: string, age: number) => {
        SetList((prevList) =>
          prevList.map((u) => {
            if (u.id === id) {
              return { ...u, name, email, age };
            } else {
              return u;
            }
          })
        );
    };
  return (
    <div className='bg-gray-200 w-screen h-screen'>
        <div className="w-screen h-14 flex flex-row justify-end items-center border-b border-solid border-gray-400 relative">
            <details className='absolute top-2 left-48 border border-solid border-gray-400 p-2 rounded '>
                <summary className='opacity-30'>
                    Сортування
                </summary>
                <div className='flex flex-col items-center text-gray-500'>
                    <button onClick={SortASC} className='my-2'>
                        по Зростанню
                    </button>
                    <button onClick={SortDESC} className='my-2'>
                        по Спадінню
                    </button>
                </div>
            </details>
            <PopUp button={<button className='w-10 h-10 border-2 border-solid border-gray-400 hover:border-blue-400 hover:text-blue-400 text-2xl rounded text-gray-400 text-center mr-3'>+</button>}>
                <FormSign edit={false} 
                Create={(name:string,email:string,age:number)=>SetList([...List,{id:List.length+1,name,email,age}])} 
                Edit={Edit}/>
            </PopUp>

        </div>
        <div className="w-screen h-screen flex flex-col items-center justify-start">
            {List.map((u)=><ItemUser {...u} key={u.id} Remove={Remove} Edit={Edit}/>)}
        </div>
        <NavLink to={'/price'} className='p-3 border border-solid border-gray-400 absolute bottom-[5%] right-[2%] rounded'> to Price</NavLink>
    </div>
  )
}
