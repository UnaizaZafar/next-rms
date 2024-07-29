import React from "react";
import NoData from "../images/searching-with-telescope-3025710-2526908.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const TicketNoData = () => {
  return (
    <>
      <div className="m-0 p-0 ">
        <div className="flex justify-between text-[#18181B] m-4">
          <div className="flex font-normal text-sm border-b">
            <Link href="" className="font-bold  m-2 ">
              All
            </Link>
            <Link href="" className="m-2">
              Awaiting arrival (12){" "}
            </Link>
            <Link href="" className="m-2">
              In-queue (1)
            </Link>
            <Link href="" className="m-2">
              In-progress (14)
            </Link>
            <Link href="" className="m-2">
              Custom1 (26)
            </Link>
            <Link href="" className="m-2">
              Custom2 (26)
            </Link>
            <Link href="" className="m-2">
              Custom3 (26)
            </Link>
            <Link href="" className="m-2">
              Custom4 (26)
            </Link>
            <Link href="" className="m-2">
              <MdNavigateNext />
            </Link>
          </div>
          <div className="flex items-center justify-between border rounded-md p-4 border-[#E4E4E7] w-[310px] h-12 bg-white ">
            <div
              type="text"
              placeholder=""
              className="font-normal text-sm text-[#A1A1AA]"
            >
              Search by RMA, Issue or Status
            </div>
            <div>
              <IoIosSearch className="text-base" />
            </div>
          </div>
        </div>
        <table className="w-[1108px] h-fit rounded-md bg-white border-b border-[#E4E4E8]">
          <thead className="font-semibold text-base border-b border-[#E4E4E8]">
            <th className="px-[6px] py-[14px]">RMA</th>
            <th>Status</th>
            <th>Customer Email</th>
            <th>Hardware</th>
            <th>Updated at</th>
            <th>Actions</th>
          </thead>
          </table>
          <tbody className='flex items-center justify-center p-10'>
            <tr>
              <td >
                <Image src={NoData} width="270px" height="216px" ></Image>
                <br /><p className='text-center font-extrabold text-xl mt-3'>No Data Found</p>
               
              </td>{" "}
            </tr>
           
          </tbody>
       
        <div className="flex items-center mt-4 justify-end">
          <IoIosArrowBack className="w-4 h-4 " />
          <p className="text-[#D4D4D8] text-sm font-medium mx-3">Previous</p>
         
          <p className="text-[#52525B] text-sm font-medium mx-3">Next</p>
          <MdNavigateNext className="w-4 h-4 " />
        </div>
      </div>
    </>
  );
};

export default TicketNoData;
