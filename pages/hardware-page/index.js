import React from 'react'

import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import Hardware from '@/components/Hardware'



const index = () => {
  return (
    <>
    <div className="flex font-[Manrope]">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col">
          <div>
            <TopBar heading='Hardware'/>
          </div>
          <div className="py-8 px-7 bg-[#FAFAFA]">
           <Hardware/>
          </div>
        </div>
      </div>
    </>
  )
}

export default index