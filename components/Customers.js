import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
const Customers = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex  justify-end">
          <div className="flex items-center justify-between border rounded-md p-4 border-[#E4E4E7] w-[310px] h-12 bg-white ">
            <div
              type="text"
              placeholder=""
              className="font-normal text-sm text-[#A1A1AA]"
            >
              Search Members
            </div>
            <div>
              <IoIosSearch className="text-base" />
            </div>
          </div>
        </div>
        <table className=" w-full h-fit rounded-xl bg-white border mt-4 text-left border-[#E4E4E8]">
          <thead className=" font-semibold text-base border-b border-[#E4E4E8]">
            <tr>
            <th className=" px-[16px] ">  </th>
            <th className="px-[16px]  py-[14px]">Username</th>
            <th className="px-[16px]">Email</th>
            <th className="px-[16px]">Order Number</th>
            <th className="px-[16px]">Date Added</th>
            <th className="px-[16px]">Actions</th>
            </tr>
          </thead>
          <tbody className="font-normal text-xs text-[#52525B] ">
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">1</th>
              <th className="px-[16px]">Lane</th>
              <th className="px-[16px]">georgia.young@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#FAF5FF]">
                  <p className="font-normal text-sm text-[#9333EA] ">
                    Technician
                  </p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start ">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">2</th>
              <th className="px-[16px]">Fox</th>
              <th className="px-[16px]">bill.sanders@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                  <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">3</th>
              <th className="px-[16px]">Edwards</th>
              <th className="px-[16px]">michelle.rivera@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#FAF5FF]">
                  <p className="font-normal text-sm text-[#9333EA] ">Admin</p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">4</th>
              <th className="px-[16px]">Richards</th>
              <th className="px-[16px]">deanna.curtis@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                  <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">5</th>
              <th className="px-[16px]">Warren</th>
              <th className="px-[16px]">jackson.graham@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                  <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">6</th>
              <th className="px-[16px]">Lane</th>
              <th className="px-[16px]">sara.cruz@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                  <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">7</th>
              <th className="px-[16px]">Edwards</th>
              <th className="px-[16px]">willie.jennings@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                  <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">8</th>
              <th className="px-[16px]">Fox</th>
              <th className="px-[16px]">curtis.weaver@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                  <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">9</th>
              <th className="px-[16px]">Richards</th>
              <th className="px-[16px]">jessica.hanson@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#FAF5FF]">
                  <p className="font-normal text-sm text-[#9333EA] ">
                    Technician
                  </p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="px-[16px]">10</th>
              <th className="px-[16px]">Hawkins</th>
              <th className="px-[16px]">debbie.baker@example.com</th>
              <th className="px-[16px]">
                <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#FAF5FF]">
                  <p className="font-normal text-sm text-[#9333EA] ">
                    Technician
                  </p>
                </div>
              </th>
              <th className="px-[16px]">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
          </tbody>
        </table>
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

export default Customers;
