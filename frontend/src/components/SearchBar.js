import React from "react";

const SearchBar = ({ search, setSearch }) => {
  // Log current string in input
  const updateInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <React.Fragment>
      <input type="text" value={search} onChange={updateInput}></input>
    </React.Fragment>
  );
};

export default SearchBar;
