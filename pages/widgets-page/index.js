import React from 'react'
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import Widgets from '@/components/Widgets'



const index = () => {
  return (
    <>
    <div className="flex font-[Manrope]">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col">
          <div>
            <TopBar heading='Tickets'/>
          </div>
          <div className="py-5 px-6 bg-[#FAFAFA]">
           <Widgets/>
         
          </div>
        </div>
      </div>
    </>
  )
}

export default index