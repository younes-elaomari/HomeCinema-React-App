import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-header">
      <div className="container">
        <article className="h-article">
          <h1 className="display-4 lh-1 mb-3">Home Cinema</h1>
          <p className="lead fw-normal text-muted ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link
            to="/movies/deitails"
            className="btn btn-sm btn-primary rounded-pill me-2"
          >
            More Deitails
          </Link>
        </article>
      </div>
    </div>
  );
};

export default Header;
