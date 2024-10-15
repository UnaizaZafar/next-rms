import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteModal = ({ isVisible, onClose,handleDelete,DeleteIndex }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed  inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-30 p-3 xl:p-0"
    >
      <div className="xl:w-2/5  flex flex-col justify-center">
        <button
          onClick={() => {
            onClose();
          }}
          className="text-white text-2xl place-self-end"
        >
          X
        </button>
        <div className=" rounded-xl flex flex-col p-6 gap-3 items-center justify-center bg-white w-full">
          <RiDeleteBin6Line className="bg-[#FFF1F2] rounded-full text-3xl p-1.5"/>
          <h1 className="font-semibold text-lg text-center">Confirm Delete?</h1>
          <p className="text-center text-sm font-normal ">
            This action is irreversible and can’t be undone. Do you wish to
            proceed?
          </p>
          <div className="flex gap-3 items-center justify-center">
            <button
              className="rounded-md py-3 px-4 font-semibold text-sm border border-black"
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </button>
            <button onClick={()=>{handleDelete(DeleteIndex); onClose();}} className="rounded-md py-3 px-4 font-semibold text-sm bg-[#E11D48] text-white">
                 
              Yes, Delete Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
