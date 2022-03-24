import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const Pagination = ({ count, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(count / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => {
        return (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <Link to="/movies" className="page-link ">
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
