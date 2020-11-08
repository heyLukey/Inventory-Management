import React from "react";
import Modal from "react-modal";
import DeleteContent from "./DeleteContent";

const ModalDelete = ({
  polling,
  setPolling,
  deleteOpen,
  setDeleteOpen,
  orderObject,
}) => {
  // Functions
  const deleteClose = () => {
    setDeleteOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={deleteOpen}
        onRequestClose={deleteClose}
        className="modal-background"
        overlayClassName="modal-overlay"
      >
        <div className="mymodal-content">
          <DeleteContent
            deleteClose={deleteClose}
            orderObject={orderObject}
            setPolling={setPolling}
            polling={polling}
          />
          <button onClick={deleteClose}>Close Modal</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ModalDelete;
