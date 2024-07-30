import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";

import React from "react";

const page = () => {
  return (
    <>
      <div className="flex font-[Manrope]">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col">
          <div>
            <TopBar heading="Analytics"/>
          </div>
          <div className="py-5 px-6 bg-[#FAFAFA]">
            <Hero/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
