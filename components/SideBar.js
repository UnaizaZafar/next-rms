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
import TicketsResolvedImg from "../images/Frame 813110.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-[#18181B] flex-col flex justify-between gap-12 items-center p-10 w-full max-w-[260px]">
        <div className="flex flex-col gap-12 items-center justify-center text-white">
        <Link href="/">  <Image src={logo} width={50} height={44} alt="Logo" /></Link>
          <div className="flex flex-col gap-1">
            {" "}
            <Link
              className={`link py-3 px-4 hover:bg-black hover:text-white/90 hover:rounded-lg  ${
                pathname === "/analytics"
                  ? "no-underline flex items-center  bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                  : "no-underline bg-transparent  flex items-center   text-[#A1A1AA] "
              }`}
              href="/analytics"
            >
              <VscGraph className="text-[16px] mx-2" />
              <p>Analytics</p>
            </Link>
            <Link
              className={`link py-3 px-4 hover:bg-black hover:text-white/90 hover:rounded-lg ${
                pathname === "/tickets"
                  ? "no-underline flex items-center  bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                  : "no-underline  flex items-center   bg-transparent text-[#A1A1AA]"
              }`}
              href="/tickets"
            >
              {" "}
              <FaTicketSimple className="text-[16px] mx-2" />
              Tickets
            </Link>{" "}
            <Link
              className={`link py-3 px-4 hover:bg-black hover:text-white/90 hover:rounded-lg ${
                pathname === "/customers"
                  ? "no-underline flex items-center  bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                  : "no-underline  flex items-center   bg-transparent text-[#A1A1AA]"
              }`}
              href="/customers"
            >
              <PiPersonThin className="text-[16px] mx-2" />
              Customers
            </Link>
            <Link
              className={`link py-3 px-4 hover:bg-black hover:text-white/90 hover:rounded-lg ${
                pathname === "/hardware"
                  ? "no-underline flex items-center  bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                  : "no-underline  flex items-center   bg-transparent text-[#A1A1AA]"
              }`}
              href="/hardware"
            >
              <IoHardwareChipOutline className="text-[16px] mx-2" />
              Hardware
            </Link>
            <Link
              className={`link py-3 px-4 hover:bg-black hover:text-white/90 hover:rounded-lg ${
                pathname === "/team"
                  ? "no-underline flex items-center  bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                  : "no-underline  flex items-center   bg-transparent text-[#A1A1AA]"
              }`}
              href="/team"
            >
              <GoPeople className="text-[16px] mx-2" />
              Team
            </Link>
            <Link
              className={`link py-3 px-4 hover:bg-black hover:text-white/90 hover:rounded-lg ${
                pathname === "/settings"
                  ? "no-underline flex items-center  bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                  : "no-underline  flex items-center   bg-transparent text-[#A1A1AA]"
              }`}
              href="/"
            >
              <IoSettingsOutline className="text-[16px] mx-2" />
              Settings
            </Link>
            <Link
              className={`link py-3 px-4 hover:bg-black hover:text-white/90 hover:rounded-lg ${
                pathname === "/tag-manager"
                  ? "no-underline flex items-center  bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                  : "no-underline  flex items-center   bg-transparent text-[#A1A1AA]"
              }`}
              href="/tag-manager"
            >
              <CiShoppingTag className="text-[16px] mx-2" />
              Tag Manager
            </Link>
            <Link
              className={`link py-3 px-4 hover:bg-black hover:text-white/90 hover:rounded-lg ${
                pathname === "/widgets"
                  ? "no-underline flex items-center  bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                  : "no-underline  flex items-center   bg-transparent text-[#A1A1AA]"
              }`}
              href="/widgets"
            >
              <MdOutlineLayers className="text-[16px] mx-2" />
              Widgets
            </Link>
          </div>
        </div>
          <div className=" flex flex-col gap-8 items-center justify-between self-center text-[#A1A1AA]">
           
            <Image
              src={TicketsResolvedImg}
              width="180px"
              height="180px"
            />
            <div className="flex  items-center self-center  ">
              <GrLogout />
              <Link href="/" className="px-2 text-[#A1A1AA]">
                <h1 className="font-normaltext-base px-2">Logout</h1>{" "}
              </Link>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default SideBar;
