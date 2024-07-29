import React from "react";
import Link from "next/link";

const Modal = ({
  isVisible,
  onClose,
  children,
  title,
  description,
  link1bg = "bg-[#D4D4D8]",
  link2bg = "bg-[#D4D4D8]",
  link3bg = "bg-[#D4D4D8]",
  link1text = "text-[#52525B]",
  link2text = "text-[#52525B]",
  link3text = "text-[#52525B]",
}) => {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <>
      <div
        id="wrapper"
        className="fixed inset-0 flex justify-center  items-center bg-opacity-25 backdrop-blur-sm"
        onClick={handleClose}
      >
        <div className=" h-[700px] rounded-xl p-8  bg-white overflow-y-scroll m-8">
          <div className="flex justify-between  ">
            <div className=" ">
              <h1 className="font-bold text-2xl "> Create Ticket</h1>
            </div>
            <div className="w-6 h-6 font-extrabold">
              <button onClick={() => onClose()}>X</button>
            </div>
          </div>
          <div>
            <div className="flex w-[692px] h-[56px] rounded-lg border border-[#E4E4E7] p-4 bg-[#FAFAFA]">
              <div className="flex justify-around ">
                <Link href="">
                  <div className="flex items-center w-22">
                    <div className=" flex mx-2 p-1 text-center ">
                      <p
                        className={`${link1bg} text-white w-9 h-6  rounded-full`}
                      >
                        1
                      </p>
                    </div>
                    <div>
                      <h2 className={`${link1text} font-semibold text-sm`}>
                        {" "}
                        Customer Info{" "}
                      </h2>
                    </div>
                  </div>
                </Link>
                <Link href="">
                  <div className="flex  items-center mx-[100px]">
                    <div className="flex mx-2 p-1 text-center">
                      <p
                        className={`${link2bg} text-white w-9 h-6  rounded-full`}
                      >
                        2
                      </p>
                    </div>
                    <h2 className={`${link2text} font-semibold text-sm`}>
                      {" "}
                      Repair Ticket{" "}
                    </h2>
                  </div>
                </Link>
                <Link href="">
                  <div className="flex  items-center">
                    <div className=" flex mx-2 p-1 text-center">
                      <p
                        className={`${link3bg} text-white w-9 h-6  rounded-full`}
                      >
                        3
                      </p>
                    </div>
                    <h2 className={`${link3text} font-semibold text-sm`}>
                      {" "}
                      Ticket issued{" "}
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[692px] h-[600px] mt-6">
            <div>
              <h1 className="font-semibold text-xl">{title}</h1>
              <p className="font-normal text-xs">{description}</p>
            </div>
            {children}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
