import React, { Component } from "react";

import Table from "./commen/table";
import Like from "./commen/like";

import { Link } from "react-router-dom";

class MoviesTable extends Component {
  colomns = [
    {
      path: "title",
      label: "Title",
      content: (item) => <Link to={`/movies/${item._id}`}>{item.title}</Link>,
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (item) => (
        <Like liked={item.liked} onLike={() => this.props.onLike(item)} />
      ),
    },
    {
      key: "delete",
      content: (item) => (
        <button
          onClick={() => this.props.onDelete(item)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColomn, onSort } = this.props;
    return (
      <Table
        data={movies}
        colomns={this.colomns}
        sortColomn={sortColomn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
