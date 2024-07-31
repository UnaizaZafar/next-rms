import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex font-[Manrope]">
        <SideBar />
        <div className="flex flex-col">
          <TopBar heading="Tickets" />
          <div className="py-5 px-6 bg-[#FAFAFA]">
            {children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
