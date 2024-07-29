import React from "react";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { GoEye } from "react-icons/go";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

const TicketsHero = ({children}) => {
  return (
    <>
      <div className="m-0 p-0 ">
        <div className="flex justify-between text-[#18181B] m-4">
          <div className="flex font-normal text-sm border-b">
            <Link href="" className="font-bold  m-2">
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
        <div className="w-[1124px] h-[709px] rounded-xl border border-[#E4E4E7]">
          <table className="w-[1108px] h-fit rounded-md bg-white border-b border-[#E4E4E8]">
            <thead className="font-semibold text-base border-b border-[#E4E4E8]">
              <th className="px-[6px] py-[14px]">RMA</th>
              <th>Status</th>
              <th>Customer Email</th>
              <th>Hardware</th>
              <th>Updated at</th>
              <th>Actions</th>
            </thead>
            <tbody className="font-normal text-xs text-[#52525B] ">
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754379...</th>
            <th>
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#FECACA] justify-center">
                <p className=" font-medium text-xs text-[#18181B]">
                  {" "}
                  Awaiting arrival
                </p>
              </div>
            </th>
            <th>georgia.young@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754380...</th>
            <th>
              {" "}
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#FED7AA] justify-center">
                <p className=" font-medium text-xs text-[#18181B]"> In-queue</p>
              </div>
            </th>
            <th>bill.sanders@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754381...</th>
            <th>
              {" "}
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#FDE68A] justify-center">
                <p className=" font-medium text-xs text-[#18181B]">
                  {" "}
                  In-progress
                </p>
              </div>
            </th>
            <th>michelle.rivera@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754382...</th>
            <th>
              {" "}
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#A7F3D0] justify-center">
                <p className=" font-medium text-xs text-[#18181B]">
                  {" "}
                  Completed
                </p>
              </div>
            </th>
            <th>deanna.curtis@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754382...</th>
            <th>
              {" "}
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#99F6E4] justify-center">
                <p className=" font-medium text-xs text-[#18181B]">
                  {" "}
                  Completed
                </p>
              </div>
            </th>
            <th>jackson.graham@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754382...</th>
            <th>
              {" "}
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#A5F3FC] justify-center">
                <p className=" font-medium text-xs text-[#18181B]">
                  {" "}
                  In-progress
                </p>
              </div>
            </th>
            <th>sara.cruz@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754382...</th>
            <th>
              {" "}
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#BAE6FD] justify-center">
                <p className=" font-medium text-xs text-[#18181B]">
                  {" "}
                  Completed
                </p>
              </div>
            </th>
            <th>willie.jennings@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754382...</th>
            <th>
              {" "}
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#C7D2FE] justify-center">
                <p className=" font-medium text-xs text-[#18181B]">
                  {" "}
                  Completed
                </p>
              </div>
            </th>
            <th>curtis.weaver@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754382...</th>
            <th>
              {" "}
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#D9F99D] justify-center">
                <p className=" font-medium text-xs text-[#18181B]"> In-queue</p>
              </div>
            </th>
            <th>jessica.hanson@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
          <tr className=" border-b border-[#E4E4E8]">
            <th>0011754382...</th>
            <th>
              {" "}
              <div className="flex items-center  w-[118px] h-7 rounded-[31px] px-[6px] py-[14px] bg-[#DDD6FE] justify-center">
                <p className=" font-medium text-xs text-[#18181B]">
                  {" "}
                  Completed
                </p>
              </div>
            </th>
            <th>debbie.baker@example.com</th>
            <th>Starlight-12 Poseidon</th>
            <th>15 May 2020 8:30 am</th>
            <th>
              <div className="flex text-[20px] px-7 py-[21.5px] justify-around items-center">
                <GoEye />
                <FaRegPenToSquare />
              </div>
            </th>
          </tr>
        </tbody>
          </table>
        </div>
        <div className='flex items-center mt-4 justify-end'>
          <IoIosArrowBack className='w-4 h-4 '/>
          <p className='text-[#D4D4D8] text-sm font-medium mx-3'>Previous</p>
          <div className="bg-[#18181B] mx-3 w-8 h-[34px] rounded-lg px-[10px] py-3 text-white flex items-center">
            <p> 1</p>
          </div>
          <div className="bg-white mx-3 w-8 h-[34px] rounded-lg px-[10px] py-3 text-[#52525B] flex items-center">
            <p> 2</p>
          </div>
          <div className="bg-white mx-3 w-8 h-[34px] rounded-lg px-[10px] py-3 text-[#52525B] flex items-center">
            <p> 3</p>
          </div>
          <div className="bg-white mx-3 w-8 h-[34px] rounded-lg px-[10px] py-3 text-[#52525B] flex items-center">
            <p> 4</p>
          </div>
          <div className="bg-white mx-3 w-8 h-[34px] rounded-lg px-[10px] py-3 text-[#52525B] flex items-center">
            <p>...</p>
          </div>
          <div className="bg-white mx-3 w-8 h-[34px] rounded-lg px-[10px] py-3 text-[#52525B] flex items-center">
            <p> 12</p>
          </div>
          <p className='text-[#D4D4D8] text-sm font-medium mx-3'>Next</p>
            <MdNavigateNext className='w-4 h-4 '/>
        </div>
      </div>
    </>
  );
};

export default TicketsHero;
