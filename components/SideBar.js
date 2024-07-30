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
import { GrLogout } from "react-icons/gr";
import { MdOutlineLayers } from "react-icons/md";
import TicketsResolvedImg from '../images/Frame 813110.png'
import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <div className="bg-[#18181B] flex-col flex items-center p-10  w-[260px] h-[1024px]">
        <div className="p-3 mb-14">
          <Image src={logo} width={50} height={44} alt="Logo" />
        </div>
        <div className="flex flex-col justify-between h-[1140px]  text-white w-56 font-[Manrope] font-normal text px-0 py-4">
          <div className='flex flex-col '>
            <div className=" h-10 active:bg-[#3F3F46] active:text-white active:h-10 active:rounded-lg active:w-56  ">
              {" "}
              <div className="flex items-center py-3 px-4 ">
                <VscGraph className="text-[16px]" />
                <Link href="/analytics-page" className="mx-2 text-[#A1A1AA]">
                  Analytics
                </Link>{" "}
              </div>
            </div>
            <div className="active:bg-[#3F3F46] active:text-white  active:rounded-lg active:w-56  h-10 active:h-10 ">
              {" "}
              <div className="flex items-center py-3 px-4 ">
                <FaTicketSimple />
                <Link href="/tickets-page" className="mx-2 text-[#A1A1AA]">
                  Tickets
                </Link>{" "}
              </div>
            </div>
            <div className="active:bg-[#3F3F46] active:text-white  active:rounded-lg active:w-56  h-10 active:h-10 ">
              {" "}
              <div className="flex items-center py-3 px-4 ">
                <PiPersonThin />
                <Link href="/customers-page" className="mx-2 text-[#A1A1AA]">
                  Customers
                </Link>{" "}
              </div>
            </div>
            <div className="active:bg-[#3F3F46] active:text-white  active:rounded-lg active:w-56  h-10 active:h-10 ">
              {" "}
              <div className="flex items-center py-3 px-4 ">
                <IoHardwareChipOutline />
                <Link href="/hardware-page" className="mx-2 text-[#A1A1AA]">
                  Hardware
                </Link>{" "}
              </div>
            </div>
            <div className="active:bg-[#3F3F46] active:text-white  active:rounded-lg active:w-56  h-10 active:h-10 ">
              {" "}
              <div className="flex items-center py-3 px-4 ">
                <GoPeople />
                <Link href="/team-page" className="mx-2 text-[#A1A1AA]">
                  Team
                </Link>{" "}
              </div>
            </div>
            <div className="active:bg-[#3F3F46] active:text-white  active:rounded-lg active:w-56  h-10 active:h-10 ">
              {" "}
              <div className="flex items-center py-3 px-4 ">
                <IoSettingsOutline />
                <Link href="/settings-page" className="mx-2 text-[#A1A1AA]">
                  Settings
                </Link>{" "}
              </div>
            </div>
            <div className="active:bg-[#3F3F46] active:text-white  active:rounded-lg active:w-56  h-10 active:h-10 ">
              {" "}
              <div className="flex items-center py-3 px-4 ">
                <CiShoppingTag />
                <Link href="/tag-manager-page" className="mx-2 text-[#A1A1AA]">
                  Tag Manager
                </Link>{" "}
              </div>
            </div>
            <div className="active:bg-[#3F3F46] active:text-white  active:rounded-lg active:w-56  h-10 active:h-10 ">
              {" "}
              <div className="flex items-center py-3 px-4 ">
                <MdOutlineLayers />
                <Link href="/widgets-page" className="mx-2 text-[#A1A1AA]">
                  Widgets
                </Link>{" "}
              </div>
            </div>
          </div>
          
          <div className=" flex flex-col items-center self-center text-[#A1A1AA]">
            <Image
            src={TicketsResolvedImg}
            width='180px'
            height='180px'>

            </Image>
            <div className='flex  items-center self-center mt-8 '>
            <GrLogout />
            <Link href="/" className="mx-2 text-[#A1A1AA]">
              <h1 className="font-normaltext-base mx-2">Logout</h1>{" "}
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
