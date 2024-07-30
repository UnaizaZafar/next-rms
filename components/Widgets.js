import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

import website from "../data/website.json";
const Widgets = () => {
  const tableRows = website.map((element) => {
    return (
      <tr>
        <td className="px-[16px] w-[224px] py-[21.5px]">{element.website}</td>
        <td>
          <div className="flex text-[20px] ">
            <IoCopyOutline className="mx-3" />
            <RiDeleteBin6Line />
          </div>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="flex  justify-end ">
        <div className="flex items-center justify-between border rounded-md p-4 border-[#E4E4E7] w-[310px] h-12 bg-white ">
          <div
            type="text"
            placeholder=""
            className="font-normal text-sm text-[#A1A1AA]"
          >
            Search Widgets
          </div>
          <div>
            <IoIosSearch className="text-base" />
          </div>
        </div>
      </div>
      <div className="flex my-4">
        <div className="w-[548px] h-[788px] rounded-xl border p-6 bg-white border[-#E4E4E7] mx-7 ">
          <h1 className="font-bold text-xl text-[#18181B]">Add Widgets</h1>
          <form action="">
            <div className="mt-6">
              <label
                htmlFor="Name"
                className="font-semibold text-sm text-[#18181B]"
              >
                Name
              </label>
              <input
                type="text"
                className="text-xs font-normal text-[#A1A1AA] w-[500px] h-[42px] my-2 rounded-md border py-3 px-4 border-[#E4E4E7] bg-white"
                placeholder="Enter name"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="Name"
                className="font-semibold text-sm text-[#18181B] mt-4"
              >
                URL
              </label>
              <input
                type="text"
                className="text-xs font-normal text-[#A1A1AA] w-[500px] h-[42px] my-2 rounded-md border py-3 px-4 border-[#E4E4E7] bg-white"
                placeholder="Enter URL of the website"
              />
            </div>
          </form>
          <div className="flex justify-end my-6">
            <div className="bg-[#18181B] w-[124px] h-[45px] rounded-md py-3 px-6 flex items-center">
              <p className="text-white font-medium text-sm ">Add Widget</p>
            </div>
          </div>
        </div>
        <div className="w-[548px] h-[788px] rounded-xl border p-6 bg-white border[-#E4E4E7]">
          <h1 className="font-bold text-xl text-[#18181B]">Added Widgets</h1>
          <div>
            <table className="w-[500px] h-fit rounded-xl bg-white text-left border border-[#E4E4E8] mt-[16px] ">
              <thead className="font-semibold text-base border-b border-[#E4E4E8]">
                <tr >
                  <th className="px-[16px] py-[14px] w-[385px]">Website</th>
                  <th className="px-[16px]  w-[99px]">Actions</th>
                </tr>
              </thead>
              <tbody className="font-normal text-xs text-[#52525B] ">
                {tableRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widgets;
