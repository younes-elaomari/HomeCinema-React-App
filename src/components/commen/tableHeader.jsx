import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColomn = { ...this.props.sortColomn };
    if (sortColomn.path === path)
      sortColomn.order = sortColomn.order === "asc" ? "desc" : "asc";
    else {
      sortColomn.path = path;
      sortColomn.order = "asc";
    }

    this.props.onSort(sortColomn);
  };

  renderSortIcon = (colomn) => {
    const { sortColomn } = this.props;

    if (colomn.path !== sortColomn.path) return null;
    return sortColomn.order === "asc" ? (
      <i className="fa fa-sort-asc"></i>
    ) : (
      <i className="fa fa-sort-desc"></i>
    );
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.colomns.map((colomn) => (
            <th
              key={colomn.path || colomn.key}
              onClick={() => this.raiseSort(colomn.path)}
              className="clickable"
            >
              {colomn.label} {this.renderSortIcon(colomn)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
