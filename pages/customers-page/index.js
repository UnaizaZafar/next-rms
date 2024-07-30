import React from 'react'
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import Customers from '@/components/Customers'



const index = () => {
  return (
    <>
    <div className="flex font-[Manrope]">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col">
          <div>
            <TopBar heading='Customers'/>
          </div>
          <div className="py-8 px-7 bg-[#FAFAFA]">
           <Customers/>
          </div>
        </div>
      </div>
    </>
  )
}

export default index