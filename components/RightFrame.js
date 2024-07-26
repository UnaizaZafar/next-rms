import React from 'react'
import Image from "next/image";
import TicketTrends from '../images/Ticket Trends 3.png'

const RightFrame = () => {
  return (
    <>
   
    <div className=" bg-black h-[1024px] pt-10 flex flex-col justify-center items-center ">
   
      <div className=" text-white  grid gap-16 mb-16">
        <div className=" grid gap-4 justify-center">
          <h1 className="font-bold text-[32px] ">Repair Management System</h1>
          <p className="text-[16px] ">
            Resolve customer support tickets efficiently
          </p>
        </div>
       
      </div>
      <div className="ml-5 mb-5 flex self-end ">
          <Image
            src={TicketTrends}
            width={600}
            height={450}
            className="shadow-[0_2px_40px_rgba(0,0,0,0.25)] shadow-gray-300 border-gray-300 rounded-l-xl border-l-[14px] border-y-[14px]"
            alt="Dashboard screen of trends"
          />
        </div>
    </div>
  
  </>
  )
}

export default RightFrame