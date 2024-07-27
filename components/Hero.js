import React from "react";
import Cards from "./Cards";
import { GoLinkExternal } from "react-icons/go";
import ellipse from "../images/Group 811715.png";
import issuesGraph from "../images/Group 811714.png";
import pieGraph from "../images/Group 811713.png";
import Link from "next/link";
import Image from "next/image";

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
          <Cards heading="Summary">
            {/* <h1 className='font-extrabold text-xl'>Summary</h1> */}
            <div className="flex flex-col">
              <div className="my-2">
                <div className=" flex justify-between items-center rounded-md w-80 h-12 font-semibold text-base bg-[#F4F4F5] p-4">
                  <h1 className="">Awaiting Unit Arrival</h1>
                  <div className="bg-black rounded-md">
                    <h1 className=" text-white p-1 ">06</h1>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <div className=" flex justify-between items-center rounded-md w-80 h-12 font-semibold text-base bg-[#F4F4F5] p-4">
                  <h1 className="">In-queue</h1>
                  <div className="bg-black rounded-md">
                    <h1 className=" text-white p-1 ">12</h1>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <div className=" flex justify-between items-center rounded-md w-80 h-12 font-semibold text-base bg-[#F4F4F5] p-4">
                  <h1 className="">In-progress</h1>
                  <div className="bg-black rounded-md">
                    <h1 className=" text-white p-1 ">02</h1>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <div className=" flex justify-between items-center rounded-md w-80 h-12 font-semibold text-base bg-[#F4F4F5] p-4">
                  <h1 className="">Resolved</h1>
                  <div className="bg-black rounded-md">
                    <h1 className=" text-white p-1 ">24</h1>
                  </div>
                </div>
              </div>
            </div>
          </Cards>
          <Cards heading="Overview" className='pb-0'>
           <div className='flex justify-center'>
            <div className="flex flex-col items-center mt-8">
              <h2 className="font-semibold text-sm">Total Tickets</h2>
              <p className="font-semibold text-2xl">
                <span className="font-extrabold text-5xl">24</span>/40
              </p>
              <Image
                src={ellipse}
                width="282px"
                height="282px"
                className=" justify-self-end "
              ></Image>
              
            </div>
            </div>
          </Cards>
          <Cards heading="Latest Tickets">
            <div className="mt-4 flex flex-col justify-between">
              <div>
                <table className="table w-[316px] ">
                  <tbody>
                    <tr className="m-4 border-b border-gray-400">
                      <th>1. </th>
                      <td>alma.lawson@example.com </td>
                      <td>
                        <Link href="">
                          <GoLinkExternal />
                        </Link>
                      </td>
                    </tr>

                    <tr className="m-4 border-b border-gray-400 p-3">
                      <th>2. </th>
                      <td>kenzi.lawson@example.com </td>
                      <td>
                        <Link href="">
                          <GoLinkExternal />
                        </Link>{" "}
                      </td>
                    </tr>
                    <tr className=" border-b border-gray-400">
                      <th>3.</th>
                      <td>jessica.hanson@example.com</td>
                      <td>
                        <Link href="">
                          <GoLinkExternal />
                        </Link>{" "}
                      </td>
                    </tr>

                    <tr className="m-4 border-b border-gray-400 p-3">
                      <th>4.</th>
                      <td>nathan.roberts@example.com</td>
                      <td>
                        <Link href="">
                          <GoLinkExternal />
                        </Link>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-[#18181B] mt-5 flex justify-center items-center rounded w-[316px] h-9">
                <h1 className=" text-center font-semibold text-sm text-white">
                  View All
                </h1>
              </div>
            </div>
          </Cards>
        </div>
        <div className="py-6 flex items-center">
          <h1 className="text-2xl font-extrabold">Tag Stats:</h1>
          <hr className="mx-4 w-[1000px]" />
        </div>
        <div className="flex justify-between">
          <Cards heading="Customer Issues">
            <div>
              <h1 className="font-medium text-sm">Total issues: 6</h1>
              <div className="flex justify-center mt-4">
                <Image src={pieGraph} width="200px" height="200px"></Image>
              </div>
            </div>
          </Cards>
          <Cards heading="Overview">
            <div className="flex flex-col m-4">
              <div className="mb-4">
                <h2 className="font-semibold text-base p-2">Total Tags</h2>
                <h1 className="font-extrabold text-[32px] p-2">06</h1>
              </div>
              <hr />
              <div>
                <h2 className="font-semibold text-base p-2">
                  Total Customer Issues
                </h2>
                <h1 className="font-extrabold text-[32px] p-2">06</h1>
              </div>
            </div>
          </Cards>
          <Cards heading="Overview">
            <div>
              <h1 className="font-medium text-sm">Total issues: 6</h1>
              <div className="mt-4">
                <Image src={issuesGraph} width="313px" height="198px"></Image>
              </div>
            </div>
          </Cards>
        </div>
      </div>
    </>
  );
};

export default Hero;
