import React from "react";

function CreateTicketModal() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-25 backdrop-blur-sm">
        <div className="w-[756px] h-[935px] rounded-xl p-8 mt-16 bg-white">
          <div className="flex justify-between mt-16">
            <div className="text-center">
              <h1 className="font-bold text-2xl"> Create Ticket</h1>
            </div>
            <div className="w-6 h-6">
              <button>x</button>
            </div>
          </div>
          <div>
            <div className="flex w-[692px] h-[56px] rounded-lg border border-[#E4E4E7] p-4 bg-[#FAFAFA]">
              <div className="flex justify-around ">
                <div className="flex items-center ">
                  <div className="bg-[#D4D4D8] mx-2 p-2 active:bg-[#18181B] rounded-full">
                    1
                  </div>
                  <h2 className="font-semibold text-sm"> Customer Info </h2>
                  <div className='border-b'></div>
                 
                </div>
                
                <div className="flex  items-center mx-[120px]">
                  <div className="bg-[#D4D4D8] mx-2 p-2 active:bg-[#18181B] rounded-full">
                    2
                  </div>
                  <h2 className="font-semibold text-sm"> Repair Ticket </h2>
                </div>
                <div className="flex  items-center">
                  <div className="bg-[#D4D4D8] mx-2 p-2 active:bg-[#18181B] rounded-full">
                    3
                  </div>
                  <h2 className="font-semibold text-sm"> Ticket issued </h2>
                </div>
              </div>
            </div>
            <button>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicketModal;
