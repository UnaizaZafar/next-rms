import React, { Children } from "react";
import { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Link from "next/link";
import CreateTicketModal from "./CreateTicketModal";
const TopBar = ({ heading }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex items-center font-[Manrope] ">
        <div className=" w-full px-6 flex justify-between place-items-center bg-white border-b border-[#E4E4E7] h-[90px]">
          <h1 className="text-2xl font-extrabold">{heading}</h1>
          <div className="bg-black text-white w-[217px] h-[50px] rounded-md items-center flex place-content-center">
            <MdOutlineAddCircleOutline style={{ size: "18px" }} />
            <Link
              href=""
              onClick={() => setShowModal(true)}
              className="text-lg font-extrabold mx-1"
            >
              CREATE TICKET
            </Link>
          </div>
        </div>
      </div>
      <CreateTicketModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default TopBar;
