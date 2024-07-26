import React from "react";
import Cards from "./Cards";

const Hero = () => {
  return (
    <>
      <div>
        <div className="w-[1200px]  rounded-xl bg-black">
          <div className="w-[400px] text-white p-5 grid gap-4">
            <h1 className="font-extrabold text-2xl">Welcome Back</h1>
            <p className="font-medium text-base text-[#FAFAFA99] ">
              Get an Overview of all the stats from this page
            </p>
          </div>
        </div>
        <div className="py-6 flex items-center">
          <h1 className="text-2xl font-extrabold">Ticket Stats:</h1>
          <hr className="mx-4 w-[1000px]" />
        </div>
        <div className="flex justify-between">
          <Cards heading="Summary" properties="">
          <div>
              <div className="w-80 h-12 font-semibold text-base bg-[#F4F4F5] p-4">
                <h1 className="">Awaiting Unit Arrival</h1>
                <h1 className="bg-black text-white rounded-sm p-1 ">06</h1>
              </div>
            </div>
          </Cards>
        
          <Cards heading="Overview"></Cards>
          <Cards heading="Latest Tickets"></Cards>
        </div>
        <div className="py-6 flex items-center">
          <h1 className="text-2xl font-extrabold">Tag Stats:</h1>
          <hr className="mx-4 w-[1000px]" />
        </div>
        <div className="flex justify-between">
          <Cards heading="Customer Issues"></Cards>
          <Cards heading="Overview"></Cards>
          <Cards heading="Overview"></Cards>
        </div>
      </div>
    </>
  );
};

export default Hero;
