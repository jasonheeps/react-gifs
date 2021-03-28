import React from "react";

const searchBar = ({ getGifsFunction }) => {
  return (
    <input
      type="text"
      className="form-search form-control"
      onChange={getGifsFunction}
    />
  );
};

export default searchBar;
