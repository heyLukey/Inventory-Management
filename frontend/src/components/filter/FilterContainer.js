import React from "react";
import FilterBox from "./FilterBox";

const FilterContainer = ({ conditions, setCondtions }) => {
  return (
    <React.Fragment>
      <div>
        <FilterBox
          filterID="polishing"
          conditions={conditions}
          setCondtions={setCondtions}
        />
        <FilterBox
          filterID="sizing"
          conditions={conditions}
          setCondtions={setCondtions}
        />
        <FilterBox
          filterID="lazer"
          conditions={conditions}
          setCondtions={setCondtions}
        />
        <FilterBox
          filterID="engraving"
          conditions={conditions}
          setCondtions={setCondtions}
        />
        <FilterBox
          filterID="plating"
          conditions={conditions}
          setCondtions={setCondtions}
        />
        <FilterBox
          filterID="rhodium"
          conditions={conditions}
          setCondtions={setCondtions}
        />
        <FilterBox
          filterID="cleaning"
          conditions={conditions}
          setCondtions={setCondtions}
        />
      </div>
    </React.Fragment>
  );
};

export default FilterContainer;
