import React from "react";
import Modal from "react-modal";

// Import Form Component
import PostForm from "./PostForm";

Modal.setAppElement("#root");
const PostModal = ({ polling, setPolling, modalOpen, setModalOpen }) => {
  // Functions
  const modalClose = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={modalOpen}
        onRequestClose={modalClose}
        className="modal-background"
        overlayClassName="modal-overlay"
      >
        <div className="mymodal-content">
          <PostForm
            polling={polling}
            setPolling={setPolling}
            modalClose={modalClose}
          />
          <button onClick={modalClose}>Close Modal</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default PostModal;
