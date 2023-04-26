import React from 'react'

interface Props{
    price:number,
    priceof:string,
    list:Array<string>,
    link:string,
    popular:boolean,
    title:string
}

export const Item:React.FC<Props> = ({list,price,priceof,link,title,popular}) => {
  return (
    <div className="md:w-[350px] w-[250px] overflow-hidden relative min-h-min drop-shadow my-3 bg-white rounded flex flex-col justify-center items-center hover:border-2 border-solid hover:border-green-400">
        { popular?<div className='w-[200px] text-center font-bold text-white absolute bg-red-600  p-1 right-[-50px] top-[30px] rotate-45'><span>Popular</span></div>:''}
        <div className="text-center">
            <h3 className='text-lg mt-2'>{title}</h3>
            <div className="mt-4 text-blue-900 text-5xl">
                <span className="m-0">$</span>
                <span>{price}</span>
                <span className='text-gray-400 text-xl'>{priceof}</span>
            </div>
        </div>
        <ul className="text-gray-400 mt-4 mx-5 list-inside list-image-[url(https://img.icons8.com/material-outlined/24/000000/checked--v1.png)]">
            {list.map(u =>{
                return(
                    <li className="my-2">
                        <i className="me-2 "></i>
                        {u}
                    </li>
                )})}
        </ul>

        <div className="my-4">
            <button  className="hover:bg-green-400 hover:border-none border-2 border-gray-600 border-solid w-[220px] md:w-[320px] py-2 rounded text-blue-400">
                <a className='underline  decoration-solid' href={link}>Sign up today</a></button>
        </div>
    </div>
  )
}
