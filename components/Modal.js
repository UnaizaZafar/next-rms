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
        <div className=" h-[600px] border rounded-xl p-8 flex-flex-col gap-3  bg-white overflow-y-scroll m-8">
          <div className="flex justify-between ">
            <h1 className="font-bold text-2xl "> Create Ticket</h1>

            <button
              className="w-6 h-6 font-extrabold"
              onClick={() => onClose()}
            >
              X
            </button>
          </div>

         
            <div className="flex justify-between w-[692px] h-[56px] rounded-lg border border-[#E4E4E7] p-4 bg-[#FAFAFA]">
              <Link href="">
                <div className="flex gap-2 items-center w-22">
                  <p
                    className={`${link1bg} text-white size-6 flex items-center justify-center  rounded-full`}
                  >
                    1
                  </p>

                  <h2 className={`${link1text} font-semibold text-sm`}>
                    {" "}
                    Customer Info{" "}
                  </h2>
                </div>
              </Link>
              <Link href="">
                <div className="flex gap-2 items-center ">
                  
                    <p
                      className={`${link2bg} text-white size-6 flex items-center justify-center  rounded-full`}
                    >
                      2
                    </p>
                  
                  <h2 className={`${link2text} font-semibold text-sm`}>
                    {" "}
                    Repair Ticket{" "}
                  </h2>
                </div>
              </Link>
              <Link href="">
                <div className="flex gap-2 items-center">
                    <p
                      className={`${link3bg} text-white size-6 flex items-center justify-center  rounded-full`}
                    >
                      3
                    </p>
                  
                  <h2 className={`${link3text} font-semibold text-sm`}>
                    {" "}
                    Ticket issued{" "}
                  </h2>
                </div>
              </Link>
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
