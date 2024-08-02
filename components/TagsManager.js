import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const TagsManager = () => {
  return (
    <>
      <div className="flex  justify-end">
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
      <div className="w-[1124px] h-[974px] mt-4 justify-between  flex flex-col flex-wrap">
        <div className="w-[548px] h-[473px] rounded-xl border flex flex-col gap-6 p-6 bg-white">
          <h1 className="font-bold text-xl text-[#18181B]">
            Customer Issue Tags
          </h1>
          <div className="flex flex-wrap">
            <div className="w-fit h-10 rounded-md text-base font-normal border border-[#18181B] m-2 items-center justify-center flex py-3 px-4 text-white bg-[#18181B]">
              Mouse
            </div>
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Keyboard
            </div>
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Scroll
            </div>
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Sensitivity
            </div>{" "}
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Click
            </div>{" "}
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Movement
            </div>
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Button
            </div>
            <div className=" w-fit h-10 rounded-md border-2 border-dashed text-base font-normal border-[#18181B] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] ">
              <FiPlusCircle className="text-base" />
              Add New Tag
            </div>
          </div>
        </div>
        <div className="w-[548px] h-[473px] rounded-xl border p-6 bg-white">
          <h1 className="font-bold text-xl text-[#18181B]">Diagnosis Tags</h1>
          <div className="flex  flex-wrap">
            <div className="w-fit h-10 rounded-md text-base font-normal border border-[#18181B] m-2 items-center justify-center flex py-3 px-4 text-white bg-[#18181B]">
              Mouse
            </div>
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Keyboard
            </div>
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Scroll
            </div>
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Sensitivity
            </div>{" "}
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Click
            </div>{" "}
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Movement
            </div>
            <div className="w-fit h-10 rounded-md border text-base font-normal border-[#E4E4E7] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] bg-[#E4E4E7]">
              Button
            </div>
            <div className=" w-max h-10 rounded-md border-2 border-dashed text-base font-normal border-[#18181B] m-2 items-center justify-center flex py-3 px-4 text-[#18181B] ">
              <FiPlusCircle className="text-base" />
              Add New Tag
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[548px] h-[473px] rounded-xl border p-6 bg-white">
          <h1 className="font-bold text-xl text-[#18181B]">
            Associated Customer Issues
          </h1>
          <table className="w-[500px] h-[380px]  border border-[#E4E4E7]  rounded-lg text-left p-2">
            <thead className=" border-b">
              <tr>
                <th className="w-[385px] p-4">Issue Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Freezing of mouse cursor</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />{" "}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4"> Double click issue</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Wheel issue</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Right Click issue</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Sensitivity issue</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>{" "}
        <div className="flex flex-col gap-6 w-[548px] h-[473px] rounded-xl border p-6 bg-white">
          <h1 className="font-bold text-xl text-[#18181B]">
            Associated Customer Issues
          </h1>
          <table className="w-[500px] h-[380px]  border border-[#E4E4E7]  rounded-lg text-left p-2">
            <thead className=" border-b">
              <tr>
                <th className="w-[385px] p-4">Issue Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Freezing of mouse cursor</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />{" "}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4"> Double click issue</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Wheel issue</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Right Click issue</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Sensitivity issue</td>
                <td className="p-4">
                  {" "}
                  <IoEyeOutline className="text-xl" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>{" "}
      </div>
    </>
  );
};

export default TagsManager;
