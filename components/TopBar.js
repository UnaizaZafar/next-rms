import React, { Children } from "react";
import { CiCirclePlus } from "react-icons/ci";

import Link from "next/link";
const TopBar = () => {

  return (
    <>
      <div className="flex items-center font-[Manrope] ">
        <div className="w-[1258px] px-6 flex justify-between place-items-center bg-white border-b border-[#E4E4E7] h-[90px]">
          <h1 className="text-2xl font-extrabold">Analytics</h1>
          <div className="bg-black text-white w-[217px] h-[50px] rounded-md items-center flex place-content-center">
          <CiCirclePlus style={{ fontSize: '18px'}}/>
            <Link href="/" className="text-lg font-extrabold mx-1">
              CREATE TICKET
            </Link>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default TopBar;
