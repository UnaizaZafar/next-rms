import React from "react";
import Image from "next/image";
import logo from "../images/finalMouseLogo(white).svg";
import { VscGraph } from "react-icons/vsc";
import { FaT, FaTicketSimple } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { PiPersonThin } from "react-icons/pi";
import { IoHardwareChipOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";

import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <div className="bg-[#18181B] flex-col flex items-center p-10  w-[260px] h-[1161px]">
        <div className="p-3 mb-14">
          <Image src={logo} width={50} height={44} alt="Logo" />
        </div>
        <div className="text-white p-1 w-56 h-10 font-[Manrope] font-normal text">
          <ul className="grid gap-5 h-10">
            <li className=" h-10 active:bg-[#3F3F46] active:h-10 active:rounded-lg active:w-56 p-2 ">
              {" "}
              <div className="flex items-center">
                <VscGraph />
                <Link href="/" className="mx-3">
                  Analytics
                </Link>{" "}
              </div>
            </li>
            <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
              {" "}
              <div className="flex items-center">
                <FaTicketSimple />
                <Link href="/" className="mx-3">
                  Tickets
                </Link>{" "}
              </div>
            </li>
            <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
              {" "}
              <div className="flex items-center">
                <PiPersonThin />
                <Link href="/" className="mx-3">
                  Customers
                </Link>{" "}
              </div>
            </li>
            <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
              {" "}
              <div className="flex items-center">
                <IoHardwareChipOutline />
                <Link href="/" className="mx-3">
                  Hardware
                </Link>{" "}
              </div>
            </li>
            <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
              {" "}
              <div className="flex items-center">
                <GoPeople />
                <Link href="/" className="mx-3">
                  Team
                </Link>{" "}
              </div>
            </li>
            <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
              {" "}
              <div className="flex items-center">
                <IoSettingsOutline />
                <Link href="/" className="mx-3">
                  Settings
                </Link>{" "}
              </div>
            </li>
            <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
              {" "}
              <div className="flex items-center">
                <CiShoppingTag />
                <Link href="/" className="mx-3">
                  Tag Manager
                </Link>{" "}
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="">
          <h1 className="font-normal text-base text-white">Logout</h1>
        </div> */}
      </div>
    </>
  );
};

export default SideBar;
