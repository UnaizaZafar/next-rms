import React from "react";
import Modal from "./Modal";
import { IoIosArrowForward } from "react-icons/io";

const TicketModal3 = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <>
      <Modal
        link1bg="bg-[#059669]"
        link1text="text-[#52525B]"
        link2bg="bg-[#18181B]"
        link2text="text-[#18181B]"
        title="Hardware Info"
        description="Complete information related to the repairing of the hardware."
      >
        <form action="">
          <legend className="w-[724px] p-3 border rounded-lg mt-2 border-[#E4E4E7] px-6 items-center">
            <div className="flex ">
              <div className="flex flex-col m-2">
                <h1 className="font-semibold text-xs">
                  Select hardware <span className="text-red-600">*</span>
                </h1>
                <select class="select select-bordered w-[103px] h-[42px] rounded-md mt-2">
                  <option disabled selected>
                    Select your hardware?
                  </option>
                  <option>Mouse</option>
                  <option>Keyboard</option>
                </select>
              </div>
              <div className="flex flex-col m-2">
                <h1 className="font-semibold text-xs">
                  Is warranty still active?
                </h1>

                <div className="flex items-center m-2 p-2">
                  <p  className="font-medium text-xs">Yes</p>
                  <input
                    type="checkbox"
                    className="w-8 h-[17.7px] toggle toggle-md mx-2"
                    defaultChecked
                  />
                   <p  className="font-medium text-xs">No</p>
                </div>
              </div>
            </div>
            <legend className="w-[676px] p-3 border rounded-lg mt-2 border-[#E4E4E7] px-6 items-center">
              <h1 className="font-semibold text-sm mb-4">
                Customer Claimed Issue
              </h1>
              <div className="flex flex-col mb-4">
                <h1 className="font-semibold text-xs">
                  Title <span className="text-red-600">*</span>
                </h1>
                <input
                  type="text"
                  className="font-normal text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-[310px] h-10 p-2"
                  placeholder="Title of issue"
                />{" "}
              </div>
              <div className="flex flex-col mb-4">
                <h1 className="font-semibold text-xs">
                  Description <span className="text-red-600">*</span>
                </h1>
                <input
                  type="text"
                  className="font-normal align-top w-[644px] h-[60px]  text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md p-2"
                  placeholder="Describe the issue"
                />{" "}
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xs">
                  Tags <span className="text-red-600">*</span>
                </h1>
                <textarea
                  type="text"
                  className="font-semibold w-[644px] h-86px overflow-x-auto text-xs mt-2 text-[#A1A1AA] border border-[#E4E4E7] rounded-md  p-2"
                />{" "}
              </div>
            </legend>
          </legend>
        </form>
        <div className="flex text-align-webkit bg-black  mt-4  text-white w-[105px] h-11 rounded-md px-6 py-3 mb-6">
          <button
            className=" flex items-center font-medium text-sm"
            onClick={() => setShowModal2(true)}
          >
            Next <IoIosArrowForward />{" "}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default TicketModal3;
