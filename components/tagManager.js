import React from 'react'
import { IoIosSearch } from "react-icons/io";

const tagManager = () => {
  return (
    <>
      <div className="flex  justify-end ">
        <div className="flex items-center justify-between border rounded-md p-4 border-[#E4E4E7] w-[310px] h-12 bg-white ">
          <div
            type="text"
            placeholder=""
            className="font-normal text-sm text-[#A1A1AA]"
          >
            Search Tag
          </div>
          <div>
            <IoIosSearch className="text-base" />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='w-137 h-118 rounded-xl border p-6 border-[#E4E4E7]'>
            <h1 className='font-bold text-xl text-[#18181B]'>Customer Issue Tags</h1>
        </div>
        <div className='w-137 h-118 rounded-xl border p-6 border-[#E4E4E7]'></div>
        <div className='w-137 h-118 rounded-xl border p-6 border-[#E4E4E7]'></div>
        <div className='w-137 h-118 rounded-xl border p-6 border-[#E4E4E7]'></div>
      </div>
    </>
  );
};

export default tagManager;