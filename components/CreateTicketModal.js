import Link from "next/link";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import TicketModal2 from "./TicketModal2";
import { IoIosArrowForward } from "react-icons/io";

const CreateTicketModal = ({ isVisible, onClose }) => {
  const [showModal2, setShowModal2] = useState(false);

  if (!isVisible) return null;
  const handleClose = () => {
     onClose();
  };
  return (
    <>
      <Modal
      onClose={handleClose}
        link1bg="bg-black" link1text="text-black"
        title="Customer Info"
        description="Complete information related to the customer is required."
      >
        <div>
          <form action="">
            <legend className="border rounded-lg mt-2 border-[#E4E4E7] px-6 items-center">
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
                  <label htmlFor="number" className="font-semibold text-xs">
                    Order Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                    placeholder="Enter order number"
                  />
                </div>{" "}
                <div className="flex flex-col mt-6">
                  <label htmlFor="fname" className="font-semibold text-xs">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                    placeholder="Enter first name"
                  />
                </div>{" "}
                <div className="flex flex-col mt-6">
                  <label htmlFor="text" className="font-semibold text-xs">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                    placeholder="Enter last name"
                  />
                </div>{" "}
                <div className="flex flex-col mt-6 col-span-2">
                  <label htmlFor="text" className="font-semibold text-xs">
                    Customer Address <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    className="font-semibold  text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[644px] h-15 p-2"
                    placeholder="Enter address"
                  ></textarea>
                </div>{" "}
                <div className="flex flex-col mt-6 ">
                  <label htmlFor="text" className="font-semibold text-xs">
                    Country <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                    placeholder="Enter country"
                  />
                </div>{" "}
                <div className="flex flex-col mt-6">
                  <label htmlFor="state" className="font-semibold text-xs">
                    State <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                    placeholder="Enter state"
                  />
                </div>{" "}
                <div className="flex flex-col mt-6 ">
                  <label htmlFor="city" className="font-semibold text-xs">
                    City <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                    placeholder="Enter city"
                  />
                </div>{" "}
                <div className="flex flex-col mt-6">
                  <label htmlFor="zipCode" className="font-semibold text-xs">
                    ZIP Code <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                    placeholder="Enter ZIP Code"
                  />
                </div>{" "}
                <div className="flex flex-col mt-6 mb-6">
                  <label
                    htmlFor="phoneNumber"
                    className="font-semibold text-xs"
                  >
                    Phone Number (optional)
                  </label>
                  <input
                    type="number"
                    className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                    placeholder="Enter phone number"
                  />
                </div>{" "}
              </div>
            </legend>
            <div className="flex  justify-between items-center m-8">
              <div className="font-normal text-xs mb-6">
                <p>
                  fields are required <span className="text-red-600">*</span>
                </p>
              </div>
              <div className="bg-black  text-white w-[105px] h-11 rounded-md px-6 py-3 mb-6">
                <button
                  className=" flex items-center font-medium text-sm"
                  onClick={() => setShowModal2(true)}
                >
                  Next <IoIosArrowForward />{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>

      <TicketModal2
        isVisible={showModal2}
        onClose={() => setShowModal2(false)}
      />
           

    </>
  );
};

export default CreateTicketModal;
