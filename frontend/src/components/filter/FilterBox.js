import React from "react";

const FilterBox = ({ filterID, conditions, setConditions }) => {
  const testPrint = (event) => {
    if (event.target.checked) {
      console.log(filterID);
    } else if (!event.target.checked) {
      console.log("off");
    }
  };

  return (
    <React.Fragment>
      <div>
        <label>
          {filterID}
          <input type="checkbox" id={filterID} onClick={testPrint} />
        </label>
      </div>
    </React.Fragment>
  );
};

export default FilterBox;
