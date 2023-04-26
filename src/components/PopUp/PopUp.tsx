import React, { useState } from 'react'

interface Props{
    children?: React.ReactNode,
    button:React.ReactNode
}

export const PopUp:React.FC<Props> = ({children,button}) => {
    const [ popUp, setPopUp ] = useState<boolean>(false)
  return (
    <>
    <div onClick={()=>setPopUp(!popUp)}>
        {button}
    </div>
    <div style={popUp ?{display:'flex'}:{display:'none'}} className='flex justify-center items-center h-96 w-96 absolute top-2/3 left-1/2 transform -translate-x-1/2  drop-shadow rounded-lg'>
        {children}
    </div>
    </>
  )
}
    