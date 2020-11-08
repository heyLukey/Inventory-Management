import React from "react";

const FilterSelect = ({ setFilter }) => {
  // Functions
  const filterHandler = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="filter-container">
        <select onChange={filterHandler} className="filter-select">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="archived">Archived</option>
          <option value="recycled">Recycled</option>
        </select>
      </div>
    </React.Fragment>
  );
};

export default FilterSelect;
