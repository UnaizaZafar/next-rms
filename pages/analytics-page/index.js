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
          <div className="mt-6 mx-7">
            <Hero/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
