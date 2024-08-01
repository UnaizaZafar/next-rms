import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  const getTopBarHeading = () => {
    switch (router.pathname) {
      case "/team-page":
        return "Team";
      case "/tickets-page":
        return "Tickets";
      case "/analytics-page":
        return "Analytics";
      case "/customers-page":
        return "Customers";
      case "/diagnosis-page":
        return "Diagnosis";
      case "/hardware-page":
        return "Hardware";
      case "/settings-page":
        return "Settings";
        case "/tag-manager-page":
          return "Tag Manager";
          case "/widgets-page":
            return "Widgets";
      default:
        return "Welcome"; 
    }
  };

  return (
    <>
      <div className="flex font-[Manrope]">
        <SideBar />
        <div className="flex flex-col">
          <TopBar heading={getTopBarHeading()} />

          <div className="py-5 px-6 bg-[#FAFAFA]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
