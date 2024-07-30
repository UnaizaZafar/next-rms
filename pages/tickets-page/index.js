import React from 'react'
import TicketsHero from '../../components/TicketsHero'
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import TicketNoData from '@/components/TicketNoData'



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
           <TicketsHero/>
            {/* <TicketNoData/> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default index