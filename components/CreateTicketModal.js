import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import TicketModal2 from "./TicketModal2";
const [showModal,setShowModal]=useState(false);

const CreateTicketModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <>
      <div
        id="wrapper"
        className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-25 backdrop-blur-sm"
        onClick={handleClose}
      >
        <div className="w-[756px] h-[700px] rounded-xl p-8  bg-white overflow-auto m-8">
          <div className="flex justify-between  ">
            <div className=" ">
              <h1 className="font-bold text-2xl "> Create Ticket</h1>
            </div>
            <div className="w-6 h-6">
              <button onClick={() => onClose()}>X</button>
            </div>
          </div>
          <div>
            <div className="flex w-[692px] h-[56px] rounded-lg border border-[#E4E4E7] p-4 bg-[#FAFAFA]">
              <div className="flex justify-around ">
                <Link href="">
                  <div className="flex items-center w-22">
                    <div className=" flex mx-2 p-1 text-center ">
                      <p className="w-9 h-6 bg-[#D4D4D8] active:bg-[#18181B] rounded-full">
                        1
                      </p>
                    </div>
                    <div>
                      <h2 className="font-semibold text-sm"> Customer Info </h2>
                    </div>
                  </div>
                </Link>
                <Link href="">
                  <div className="flex  items-center mx-[100px]">
                    <div className="flex mx-2 p-1 text-center">
                      <p className="w-9 h-6 bg-[#D4D4D8] active:bg-[#18181B] rounded-full">
                        2
                      </p>
                    </div>
                    <h2 className="font-semibold text-sm"> Repair Ticket </h2>
                  </div>
                </Link>
                <Link href="">
                  <div className="flex  items-center">
                    <div className=" flex mx-2 p-1 text-center">
                      <p className="w-9 h-6 bg-[#D4D4D8] active:bg-[#18181B] rounded-full">
                        3
                      </p>
                    </div>
                    <h2 className="font-semibold text-sm"> Ticket issued </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[692px] h-[600px] mt-6">
            <div>
              <h1 className="font-semibold text-xl">Customer Info</h1>
              <p className="font-normal text-xs">
                Complete information related to the customer is required.
              </p>
            </div>
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
                        className="font-semibold text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[644px] h-10 p-2"
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
                      <label
                        htmlFor="zipCode"
                        className="font-semibold text-xs"
                      >
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
                      fields are required{" "}
                      <span className="text-red-600">*</span>
                    </p>
                  </div>
                  <div className="bg-black  text-white w-[105px] h-11 rounded-md px-6 py-3 mb-6">
                    <button className="flex items-center font-medium text-sm" onClick={()=>setShowModal(true)}>
                      Next <IoIosArrowForward />{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <TicketModal2 isVisible={showModal} onClose={()=>setShowModal(false)}/>

    </>
  );
};

export default CreateTicketModal;
