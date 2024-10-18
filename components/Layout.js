import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  const getTopBarHeading = () => {
    switch (router.pathname) {
      case "/team":
        return "Team";
      case "/tickets":
        return "Tickets";
      case "/analytics":
        return "Analytics";
      case "/customers":
        return "Customers";
      case "/diagnosis":
        return "Diagnosis";
      case "/hardware":
        return "Hardware";
      case "/settings":
        return "Settings";
      case "/tag-manager":
        return "Tag Manager";
      case "/widgets":
        return "Widgets";
      default:
        return "Welcome";
    }
  };

  return (
    <>
      <div className="flex font-[Manrope] bg-[#FAFAFA]">
        <SideBar />
        <div className="flex flex-col w-full ">
          <TopBar heading={getTopBarHeading()} />
          <div className="py-5 px-6 text-black">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
