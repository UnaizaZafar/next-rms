import React from "react";


function CreateTicketModal() {
 
  return(
    <>
      <dialog className="backdrop:bg-gray-200">
        <div>
          <div className="font-bold text-2xl">
            Create Ticket
            <button >x</button>
          </div>
          <div className="flex flex-col justify-between w-[692px] h-[56px] rounded-lg border border-[#E4E4E7] p-4 bg-[#FAFAFA]">
            <div className="flex  flex-col">
              <div className="bg-#D4D4D8 active:bg-[#18181B] rounded-full">
                1
              </div>
              <h2 className="font-semibold text-sm"> Customer Info </h2>
            </div>
            <div className="flex  flex-col">
              <div className="bg-#D4D4D8 active:bg-[#18181B] rounded-full">
                2
              </div>
              <h2 className="font-semibold text-sm"> Repair Ticket </h2>
            </div>
            <div className="flex  flex-col">
              <div className="bg-#D4D4D8 active:bg-[#18181B] rounded-full">
                3
              </div>
              <h2 className="font-semibold text-sm"> Ticket issued </h2>
            </div>
          </div>
          
              <button >Next</button>
            </div>
          </dialog>
      </>
    ) 

}

export default CreateTicketModal;
