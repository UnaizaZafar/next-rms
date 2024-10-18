
import React from 'react'

const Cards = ({children,heading}) => {
  return (
    <>
    <div className='w-full max-w-[356px] bg-white h-[316px] rounded-xl border border-[#E4E4E7]'>
        <div className='p-5'>
            <h1 className='font-extrabold text-xl '>{heading}</h1>
            {children}
        </div>
       
    </div>
    </>
  )
}

export default Cards