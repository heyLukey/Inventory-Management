import React from "react";

const PostButton = ({ setModalOpen }) => {
  // Functions
  const modalOpenButton = () => {
    setModalOpen(true);
  };

  // Render
  return (
    <React.Fragment>
      <button onClick={modalOpenButton} className="circle plus"></button>
    </React.Fragment>
  );
};

export default PostButton;
