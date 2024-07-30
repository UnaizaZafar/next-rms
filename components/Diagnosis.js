import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import diagnosisData from '../data/DiagnosisData';
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
const Diagnosis = () => {
  
  const tableRows = diagnosisData.map((items) => {
    return (
      <tr>
        <td className="px-[16px] w-[224px] py-[21.5px]">{items.title}</td>
        <td className="px-[16px] w-[612px]">{items.description}</td>
        <td className="px-[16px]">{items.DateCreated}</td>
        <td className="px-[16px]">
          <div className="flex text-[20px] ">
            <FaRegPenToSquare className="mx-3" />
            <RiDeleteBin6Line />
          </div>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="flex  justify-between">
        <div className="bg-[#18181B] w-[131px] h-[45px] rounded-md flex justify-center items-center">
          <p className="text-white font-medium text-sm ">Add Diagnosis</p>
        </div>
        <div className="flex items-center justify-between border rounded-md p-4 border-[#E4E4E7] w-[310px] h-12 bg-white ">
          <div
            type="text"
            placeholder=""
            className="font-normal text-sm text-[#A1A1AA]"
          >
            Search Diagnosis
          </div>
          <div>
            <IoIosSearch className="text-base" />
          </div>
        </div>
      </div>

      <table className="w-[1124px] h-fit rounded-xl bg-white text-left border border-[#E4E4E8] mt-[16px]">
        <thead className="font-semibold text-base border-b border-[#E4E4E8]">
          <tr>
            <th className="px-[16px] py-[14px] w-[224px]">Title</th>
            <th className="px-[16px] w-[612px]">Description</th>
            <th className="px-[16px]">Data Created</th>
            <th className="px-[16px]">Actions</th>
          </tr>
        </thead>
        <tbody className="font-normal text-xs text-[#52525B] ">
          {tableRows}
        </tbody>
      </table>
      <div className="flex items-center mt-4 justify-end">
        <IoIosArrowBack className="w-4 h-4 " />
        <p className="text-[#D4D4D8] text-sm font-medium mx-3">Previous</p>
       
        <p className="text-[#52525B] text-sm font-medium mx-3">Next</p>
        <MdNavigateNext className="w-4 h-4 " />
      </div>
    </>
  );
};

export default Diagnosis;
