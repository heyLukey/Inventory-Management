import React from "react";
import FilterBox from "./FilterBox";

const FilterContainer = ({ conditions, setConditions }) => {
  return (
    <React.Fragment>
      <div>
        <FilterBox
          filterID="polishing"
          conditions={conditions}
          setConditions={setConditions}
        />
        <FilterBox
          filterID="sizing"
          conditions={conditions}
          setConditions={setConditions}
        />
        <FilterBox
          filterID="lazer"
          conditions={conditions}
          setConditions={setConditions}
        />
        <FilterBox
          filterID="engraving"
          conditions={conditions}
          setConditions={setConditions}
        />
        <FilterBox
          filterID="plating"
          conditions={conditions}
          setConditions={setConditions}
        />
        <FilterBox
          filterID="rhodium"
          conditions={conditions}
          setConditions={setConditions}
        />
        <FilterBox
          filterID="cleaning"
          conditions={conditions}
          setConditions={setConditions}
        />
      </div>
    </React.Fragment>
  );
};

export default FilterContainer;
