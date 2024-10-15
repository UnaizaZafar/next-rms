const DeleteModal = ({ isVisible, onClose }) => {
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
        <div className=" rounded-xl flex justify-between bg-white w-full">
         Modal
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
