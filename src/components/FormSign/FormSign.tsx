import { useFormik } from 'formik'
import React from 'react'

interface User{
  name:string,
  email:string,
  age:number,
}

interface Props{
  edit:boolean,
  Create: (name:string,email:string,age:number,)=>void,
  Edit: (id: number,name:string,email:string,age:number,)=>void,
  name?:string,
  email?:string,
  age?:number,
  id?:number
}
export const FormSign:React.FC<Props> = ({age=0,email='',name='',edit,Create,Edit,id=1}) => {
  const formik =useFormik<User>({
    initialValues:{
      age,
      email,
      name      
    },onSubmit:(value)=>{
      if(edit){
        Edit(id,value.name,value.email,value.age)
      }
      else{
        Create(value.name,value.email,value.age)
      }
    }
  })
  return (
  <form onChange={formik.handleChange} onSubmit={formik.handleSubmit} className=' bg-white flex flex-col justify-around items-center w-[570px] h-[420px] drop-shadow-md border  border-gray-300  border-solid rounded-lg'>
    <h2 className='text-gray-500'>Реєстарція</h2>
    <input value={formik.values.name} className='w-64 h-12 px-2 outline-none drop-shadow border hover:border-blue-300 border-gray-300  border-solid rounded-lg'
      type="text" name='name' placeholder="Вкажіть ваше ім'я" />
    <input value={formik.values.email} className='w-64 h-12 px-2 outline-none drop-shadow border hover:border-blue-300 border-gray-300  border-solid rounded-lg'
      type="email" name='email' placeholder="Вкажіть вашу електронну пошту"  />
    <input value={formik.values.age} className='w-64 h-12 px-2 outline-none drop-shadow border hover:border-blue-300 border-gray-300  border-solid rounded-lg'
      type="text" name='age' placeholder="Вкажіть ваш вік"  />
    <button className='bg-blue-300 p-3 text-white rounded' type='submit'>Створити акаунт</button>
  </form>
  )
}
