import React from "react";

const FilterBox = ({ filterID, conditions, setConditions }) => {
  const toggleCondition = (event) => {
    // Must use assign because JS Objects are reference values
    // This means that using '=' and then changing the object
    // will not trigger useEffect
    const newConditions = Object.assign({}, conditions);
    if (event.target.checked) {
      newConditions[filterID] = true;
      setConditions(newConditions);
    } else if (!event.target.checked) {
      newConditions[filterID] = false;
      setConditions(newConditions);
    }
  };

  return (
    <React.Fragment>
      <div>
        <label>
          {filterID}
          <input type="checkbox" id={filterID} onClick={toggleCondition} />
        </label>
      </div>
    </React.Fragment>
  );
};

export default FilterBox;
