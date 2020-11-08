import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

const DeleteButton = ({ polling, setPolling, orderObject }) => {
  // States
  const [deleteOpen, setDeleteOpen] = useState(false);

  // Functions
  const deleteOpenButton = () => {
    setDeleteOpen(true);
  };

  return (
    <React.Fragment>
      <DeleteModal
        polling={polling}
        setPolling={setPolling}
        setDeleteOpen={setDeleteOpen}
        deleteOpen={deleteOpen}
        orderObject={orderObject}
      />
      <button onClick={deleteOpenButton} className="delete-button">
        DEL
      </button>
    </React.Fragment>
  );
};

export default DeleteButton;
