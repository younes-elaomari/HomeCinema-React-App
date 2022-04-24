import React from "react";

const SearchBox = ({ searchQuery, onSearch }) => {
  return (
    <div className="col-md-6 mb-2">
      <input
        value={searchQuery}
        onChange={(e) => onSearch(e.currentTarget.value)}
        className="form-control main"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
