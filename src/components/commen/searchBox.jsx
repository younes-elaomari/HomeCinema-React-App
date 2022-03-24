import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { searchQuery, onSearch } = this.props;

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
  }
}

export default SearchBox;
