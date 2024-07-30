import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
const TeamData = () => {
  return (
    <>
      <div>
        <div className="flex  justify-between">
          <div className="bg-[#18181B] w-[131px] h-[45px] rounded-md flex justify-center items-center">
            <p className="text-white font-medium text-sm ">Add Member</p>
          </div>
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
        
          <table className=" w-[1124px] h-fit rounded-xl bg-white border mt-4 text-left border-[#E4E4E8] ">
            <thead className=" font-semibold text-base border-b border-[#E4E4E8]">
              <th className=" px-[16px] py-[14px] ">First Name</th>
              <th className='px-[16px]'>Last Name</th>
              <th className='px-[16px]'>Email</th>
              <th className='px-[16px]'>Role</th>
              <th className='px-[16px]'>Date created</th>
              <th className='px-[16px]'>Actions</th>
            </thead>
            <tbody className="font-normal text-xs text-[#52525B] ">
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Eduardo</th>
                <th className='px-[16px]'>Lane</th>
                <th className='px-[16px]'>georgia.young@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#FAF5FF]">
                    <p className="font-normal text-sm text-[#9333EA] ">
                      Technician
                    </p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start ">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Kristin</th>
                <th className='px-[16px]'>Fox</th>
                <th className='px-[16px]'>bill.sanders@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                    <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Angel</th>
                <th className='px-[16px]'>Edwards</th>
                <th className='px-[16px]'>michelle.rivera@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#FAF5FF]">
                    <p className="font-normal text-sm text-[#9333EA] ">Admin</p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Cameron</th>
                <th className='px-[16px]'>Richards</th>
                <th className='px-[16px]'>deanna.curtis@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                    <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Cody</th>
                <th className='px-[16px]'>Warren</th>
                <th className='px-[16px]'>jackson.graham@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                    <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Philip</th>
                <th className='px-[16px]'>Lane</th>
                <th className='px-[16px]'>sara.cruz@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                    <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Arthur</th>
                <th className='px-[16px]'>Edwards</th>
                <th className='px-[16px]'>willie.jennings@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                    <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Max</th>
                <th className='px-[16px]'>Fox</th>
                <th className='px-[16px]'>curtis.weaver@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#EFF6FF]">
                    <p className="font-normal text-sm text-[#2563EB] ">Admin</p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Leslie</th>
                <th className='px-[16px]'>Richards</th>
                <th className='px-[16px]'>jessica.hanson@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#FAF5FF]">
                    <p className="font-normal text-sm text-[#9333EA] ">
                      Technician
                    </p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#E4E4E8]">
                <th className='px-[16px]'>Darrel</th>
                <th className='px-[16px]'>Hawkins</th>
                <th className='px-[16px]'>debbie.baker@example.com</th>
                <th className='px-[16px]'>
                  <div className="w-[86px] h-[26px] rounded-full px-[6px] py-3 flex items-center justify-center bg-[#FAF5FF]">
                    <p className="font-normal text-sm text-[#9333EA] ">
                      Technician
                    </p>
                  </div>
                </th>
                <th className='px-[16px]'>Oct 12, 2022</th>
                <th className=''>
                  <div className="flex text-[20px] px-7 py-[21.5px] justify-start">
                    <FaRegPenToSquare className='mx-3' />
                    <RiDeleteBin6Line />
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
      

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

export default TeamData;
