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
      <div className="bg-[#18181B] flex-col flex items-center p-10  w-[260px] h-[1024px]">
        <div className="p-3 mb-14">
          <Image src={logo} width={50} height={44} alt="Logo" />
        </div>
        <div className="flex flex-col justify-between h-[1140px]  text-white w-56 font-[Manrope] font-normal text px-0 py-4">
          <div className="flex flex-col ">
            <div className=" h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/analytics-page"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline bg-transparent  flex items-center  py-3 px-4 text-[#A1A1AA] "
                }`}
                href="/analytics-page"
              >
                <VscGraph className="text-[16px] mx-2" />
                <p>Analytics</p>
              </Link>
            </div>
            <div>
              {" "}
              <div className="h-10">
                <Link
                  className={`link ${
                    pathname === "/tickets-page"
                      ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                      : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                  }`}
                  href="/tickets-page"
                >
                  {" "}
                  <FaTicketSimple className="text-[16px] mx-2" />
                  Tickets
                </Link>
              </div>
            </div>
            <div className="h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/customers-page"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/customers-page"
              >
                <PiPersonThin className="text-[16px] mx-2" />
                Customers
              </Link>
            </div>

            <div className="h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/hardware-page"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/hardware-page"
              >
                <IoHardwareChipOutline className="text-[16px] mx-2" />
                Hardware
              </Link>
            </div>

            <div className="h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/team-page"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/team-page"
              >
                <GoPeople className="text-[16px] mx-2" />
                Team
              </Link>
            </div>

            <div className="h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/settings"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/settings"
              >
                <IoSettingsOutline className="text-[16px] mx-2" />
                Settings
              </Link>
            </div>

            <div className="h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/tag-manager-page"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/tag-manager-page"
              >
                <CiShoppingTag className="text-[16px] mx-2" />
                Tag Manager
              </Link>
            </div>

            <div className="h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/widgets-page"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/widgets-page"
              >
                <MdOutlineLayers className="text-[16px] mx-2" />
                Widgets
              </Link>
            </div>
          </div>

          <div className=" flex flex-col items-center self-center text-[#A1A1AA]">
            <Image
              src={TicketsResolvedImg}
              width="180px"
              height="180px"
            ></Image>
            <div className="flex  items-center self-center mt-8 ">
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
