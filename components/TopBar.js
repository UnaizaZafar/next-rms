import React, { Children } from "react";
import { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Link from "next/link";
import CreateTicketModal from "./CreateTicketModal";
import Button from "./Button";
const TopBar = ({ heading }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex items-center font-[Manrope] ">
        <div className=" w-full flex justify-between place-items-center bg-white border-b border-[#E4E4E7] py-5 px-6">
          <h1 className="text-black text-2xl font-extrabold">{heading}</h1>
          <Link
            href=""
            onClick={() => setShowModal(true)}
            className="text-lg font-extrabold mx-1"
          >
            <Button text="CREATE TICKET" primary textSize="text-lg">
              <MdOutlineAddCircleOutline style={{ size: "20px" }} />{" "}
            </Button>
          </Link>
          
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
