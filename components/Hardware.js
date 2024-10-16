import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import React from "react";

const Hardware = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-full gap-4">
        <div className="flex justify-between ">
          <button className="bg-[#18181B] w-[131px] h-[45px] rounded-md flex justify-center items-center">
            <p className="text-white font-medium text-sm ">Add Hardware</p>
          </button>
          <div className="flex items-center justify-between border rounded-md p-4 border-[#E4E4E7] w-[310px] h-12 bg-white ">
            <search
              type="text"
              placeholder=""
              className="font-normal text-sm text-[#A1A1AA]"
            >
              Search Hardware
            </search>
            <div>
              <IoIosSearch className="text-base" />
            </div>
          </div>
        </div>

        <table  className="table-fixed rounded-xl bg-white border border-[#E4E4E8] text-center ">
          <thead className=" font-semibold text-base border-b border-[#E4E4E8]">
            <tr className="">
              <th className="   "> </th>
              <th className=" py-[14px]">Hardware Type</th>
              <th className="">Model</th>

              <th className="">Date Added</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody className="font-normal text-xs text-[#52525B] ">
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">1</th>
              <th className="">Mouse</th>
              <th className="">gMS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center ">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">2</th>
              <th className="">Mouse</th>
              <th className="">MS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">3</th>
              <th className="">Mouse</th>
              <th className="">micMS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">4</th>
              <th className="">Mouse</th>
              <th className="">dMS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">5</th>
              <th className="">Mouse</th>
              <th className="">MS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">6</th>
              <th className="">Mouse</th>
              <th className="">MS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">7</th>
              <th className="">Mouse</th>
              <th className="">wilMS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">8</th>
              <th className="">Mouse</th>
              <th className="">cMS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">9</th>
              <th className="">Mouse</th>
              <th className="">jeMS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
            <tr className=" border-b border-[#E4E4E8]">
              <th className="">10</th>
              <th className="">Mouse</th>
              <th className="">MS-1945</th>

              <th className="">Oct 12, 2022</th>
              <th className="">
                <div className="flex text-[20px] px-7 py-[21.5px] justify-center items-center">
                  <FaRegPenToSquare className="mx-3" />
                  <RiDeleteBin6Line />
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center mt-4 justify-end">
        <IoIosArrowBack className="w-4 h-4 " />
        <p className="text-[#D4D4D8] text-sm font-medium mx-3">Previous</p>
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
        <p className="text-[#D4D4D8] text-sm font-medium mx-3">Next</p>
        <MdNavigateNext className="w-4 h-4 " />
      </div>
    </>
  );
};

export default Hardware;
