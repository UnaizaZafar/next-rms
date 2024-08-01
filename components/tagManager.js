import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";

const TagManager = () => {
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
      <div className="grid grid-cols-2 py-4 ">
        <div className="w-31 h-118 rounded-xl bg-white border p-6  border-[#E4E4E7]">
          <h1 className="font-bold text-xl text-[#18181B]">
            Customer Issue Tags
          </h1>
          <div className="grid grid-cols-5 m-4 p-4">
            <div className="w-21 h-10 rounded-md text-base font-normal border border-[#18181B] m-2 items-center justify-center flex py-3 px-4 text-white bg-[#18181B]">
              Mouse
            </div>
            <div className="w-21 h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              
                Keyboard
              
            </div>
            <div className="w-21 h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              
                Scroll
              
            </div>
            <div className="w-21 h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              
                Sensitivity
              
            </div>{" "}
            <div className="w-21 h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              
                Click
              
            </div>{" "}
            <div className="w-21 h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              
                Movement
              
            </div>
            <div className="w-21 h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              
                Button
              
            </div>
            <div className=" w-max h-10 rounded-md border-2 border-dashed text-base font-normal border-[#18181B] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] ">
               <FiPlusCircle className='text-base'/>
                Add New Tag
              
            </div>
          </div>
        </div>
        <div className=" w-137 h-118 rounded-xl bg-white border p-6 border-[#E4E4E7]"></div>
        <div className=" w-137 h-118 rounded-xl bg-white border p-6 border-[#E4E4E7]"></div>
        <div className=" w-137 h-118 rounded-xl bg-white border p-6 border-[#E4E4E7]"></div>
      </div>
    </>
  );
};

export default TagManager;
