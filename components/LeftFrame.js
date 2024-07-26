
import React from "react";
import Image from "next/image";
import logo from '../images/finalMouseLogo.png'
import { FaRegEyeSlash } from "react-icons/fa";


const LeftFrame = () => {
  return (
    <>
    <div className="flex bg-slate-50 flex-col items-center p-5 h-[1024px] justify-center">
      <Image src={logo} width={60} height={44} alt="logo" />
      <h1 className="text-3xl font-bold p-3">Login to your account</h1>
      <p className="font-normal text-xs">
        Please login to get access to the dashboard.
      </p>
      <form action="" className="p-5">
        <label htmlFor="Email" className="font-medium text-sm text-[#27272A]" >Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="block mb-3 px-5 border w-[395px] h-12 rounded-lg bg-white  text-gray-900 placeholder:text-gray-400   "
        />
        <label htmlFor="password"  className="font-medium text-sm text-[#27272A]" >Password</label>
        <input
          type="password"
          placeholder="Enter your password "
          className="block mb-3 px-5  rounded-lg w-[395px] h-12 border bg-white  text-gray-900 placeholder:text-gray-400 "
          // <FaRegEyeSlash/>
        />
      
        <div className="flex">
          <input type="checkbox" name="remember" />
          <label htmlFor="" className="mx-3 content-center font-medium text-sm text-[#27272A]">
            Remember me
          </label>
        </div>
      </form>
      <div className="justify-center bg-[#18181B] rounded-lg flex">
        <button className="text-white  h-11 w-[395px]  ">Login</button>
      </div>
    </div>
  </>
  )
}

export default LeftFrame