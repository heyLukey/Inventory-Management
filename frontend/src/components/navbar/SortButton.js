import React from "react";

const SortButton = ({ isDescending, setIsDescending }) => {
  // Functions
  const toggleSort = () => {
    setIsDescending(!isDescending);
  };

  return (
    <React.Fragment>
      <button onClick={toggleSort} className="sort-button">
        {isDescending ? "DESCEND" : "ASCEND"}
        <span></span>
      </button>
    </React.Fragment>
  );
};

export default SortButton;
