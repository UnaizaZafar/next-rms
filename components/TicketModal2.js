import React from "react";
import Link from "next/link";
import Modal from "./Modal";
import { IoIosArrowForward } from "react-icons/io";

const TicketModal2 = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  return (
  <Modal  link1bg="bg-black" link1text="text-black"
  title="Customer Info"
  description="Complete information related to the customer is required.">
        
          <form action="">
            <legend className="border rounded-lg mt-2 border-[#E4E4E7] px-6 items-center"></legend>
            <div className="grid grid-cols-2">
              <div className="flex flex-col mt-6">
                <label htmlFor="email" className="font-semibold text-xs">
                  Customer Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                  placeholder="Enter email"
                />
              </div>{" "}
              <div className="flex flex-col mt-6">
                <label htmlFor="email" className="font-semibold text-xs">
                  Order Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                  placeholder="Enter order number"
                />
              </div>{" "}
            </div>

            <div className="flex  justify-between items-center m-8">
              <div className="font-normal text-xs mb-6">
                <p>
                  fields are required <span className="text-red-600">*</span>
                </p>
              </div>
              <div className="bg-black  text-white w-[105px] h-11 rounded-md px-6 py-3 mb-6">
                <button className="flex items-center font-medium text-sm">
                  Next <IoIosArrowForward />{" "}
                </button>
              </div>
            </div>
          </form>
       
    </Modal>
  );
};

export default TicketModal2;
