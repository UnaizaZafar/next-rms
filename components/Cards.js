
import React from 'react'

const Cards = ({children,heading}) => {
  return (
    <>
    <div className='w-[360px] bg-white h-80 rounded-xl border border-[#E4E4E7]'>
        <div className='p-5'>
            <h1 className='font-extrabold text-xl '>{heading}</h1>
            {children}
        </div>
       
    </div>
    </>
  )
}

export default Cards