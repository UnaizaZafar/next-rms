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
      <div className="bg-[#18181B] flex-col flex gap-12 items-center p-10 w-full max-w-[260px] h-full">
        <div className="p-3">
          <Image src={logo} width={50} height={44} alt="Logo" />
        </div>
        <div className="flex flex-col justify-between  text-white w-56 font-[Manrope] font-normal text px-0 py-4">
          <div className="flex flex-col ">
            <div className=" h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/analytics"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline bg-transparent  flex items-center  py-3 px-4 text-[#A1A1AA] "
                }`}
                href="/analytics"
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
                    pathname === "/tickets"
                      ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                      : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                  }`}
                  href="/tickets"
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
                  pathname === "/customers"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/customers"
              >
                <PiPersonThin className="text-[16px] mx-2" />
                Customers
              </Link>
            </div>

            <div className="h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/hardware"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/hardware"
              >
                <IoHardwareChipOutline className="text-[16px] mx-2" />
                Hardware
              </Link>
            </div>

            <div className="h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/team"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/team"
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
                  pathname === "/tag-manager"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/tag-manager"
              >
                <CiShoppingTag className="text-[16px] mx-2" />
                Tag Manager
              </Link>
            </div>

            <div className="h-10">
              {" "}
              <Link
                className={`link ${
                  pathname === "/widgets"
                    ? "no-underline flex items-center py-3 px-4 bg-[#3F3F46] w-[224px] h-10 rounded-lg"
                    : "no-underline  flex items-center  py-3 px-4 bg-transparent text-[#A1A1AA]"
                }`}
                href="/widgets"
              >
                <MdOutlineLayers className="text-[16px] mx-2" />
                Widgets
              </Link>
            </div>
          </div>

          <div className=" flex flex-col gap-8 items-center self-center text-[#A1A1AA]">
            <Image
              src={TicketsResolvedImg}
              width="180px"
              height="180px"
            ></Image>
            <div className="flex  items-center self-center  ">
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
