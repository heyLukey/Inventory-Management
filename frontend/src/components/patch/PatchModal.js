import React from "react";
import Modal from "react-modal";
import PatchForm from "./PatchForm";

const ModalPatch = ({
  polling,
  setPolling,
  patchOpen,
  setPatchOpen,
  orderObject,
}) => {
  // Functions
  const patchClose = () => {
    setPatchOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={patchOpen}
        onRequestClose={patchClose}
        className="modal-background"
        overlayClassName="modal-overlay"
      >
        <div className="mymodal-content">
          <PatchForm
            polling={polling}
            setPolling={setPolling}
            patchClose={patchClose}
            orderObject={orderObject}
          />
          <button onClick={patchClose}>Close Modal</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ModalPatch;
