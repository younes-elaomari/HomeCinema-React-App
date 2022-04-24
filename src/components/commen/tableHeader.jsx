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
        <tr className="primary-bg">
          {this.props.colomns.map((colomn) => (
            <th
              key={colomn.path || colomn.key}
              onClick={() => this.raiseSort(colomn.path)}
              className="clickable"
            >
              <h6 className="m-2">
                {colomn.label} {this.renderSortIcon(colomn)}
              </h6>
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
