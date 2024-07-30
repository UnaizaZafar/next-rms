import React from 'react'
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import tagManager from '../../components/tagManager'


const index = () => {
  return (
    <>
    <div className="flex font-[Manrope]">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col">
          <div>
            <TopBar heading='Tags'/>
          </div>
          <div className="py-5 px-6 bg-[#FAFAFA]">
           <tagManager/>
          </div>
        </div>
      </div>
    </>
  )
}

export default index