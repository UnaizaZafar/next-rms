import React from "react";

const TicketModal2 = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  return (
    <div
      id="container"
      className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
    >
        
    </div>
  );
};

export default TicketModal2;
