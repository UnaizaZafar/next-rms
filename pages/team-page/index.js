import React from 'react'
import TicketsHero from '../../components/TicketsHero'
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import TeamData from '@/components/TeamData'



const index = () => {
  return (
    <>
    <div className="flex font-[Manrope]">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col">
          <div>
            <TopBar heading='Team'/>
          </div>
          <div className="py-5 px-6 bg-[#FAFAFA]">
           <TeamData/>
          </div>
        </div>
      </div>
    </>
  )
}

export default index