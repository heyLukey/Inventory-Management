import React from "react";
import PostButton from "../post/PostButton";
import FilterSelect from "./FilterSelect";
import SortButton from "./SortButton";

const NavBar = ({ setModalOpen, setFilter, isDescending, setIsDescending }) => {
  return (
    <React.Fragment>
      <div className="navbar">
        <PostButton setModalOpen={setModalOpen} />
        <FilterSelect setFilter={setFilter} />
        <SortButton
          isDescending={isDescending}
          setIsDescending={setIsDescending}
        />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
