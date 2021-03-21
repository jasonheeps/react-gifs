// First I wanted to do a pure function (since no state required) but it didn't work

// import React from "react";

// const searchBar = () => {
//   return (
//     <input
//       type="text"
//       className="form-search form-control"
//     />
//   );
// };

// export default searchBar;


import React, { Component } from "react";

class SearchBar extends Component {

  render() {
    return (
      <input
        type="text"
        className="form-search form-control"
      />
    );
  }
}

export default SearchBar;
