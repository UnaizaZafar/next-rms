import React from 'react'
import LeftFrame from '@/components/LeftFrame';
import RightFrame from "@/components/RightFrame";
const Index = () => {
  return (
   <>
   <div className="flex">
      <div className="w-1/2">
        <LeftFrame />
      </div>
      <div className="w-1/2">
        <RightFrame />
      </div>
    </div>
    </>
  )
}

export default Index