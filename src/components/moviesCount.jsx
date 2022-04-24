import React from "react";

const MoviesCount = ({ totlaleCount, searchQuery, onSearch }) => {
  return (
    <div className="moviesShow bg-light">
      <div className="container">
        <h4 className="text-uppercase">
          Enjoy on {totlaleCount} movies we are showing.
        </h4>
        <div className="col-md-6 mt-4 m-auto s-box">
          <input
            value={searchQuery}
            onChange={(e) => onSearch(e.currentTarget.value)}
            className="form-control main"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default MoviesCount;
