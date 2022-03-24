import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm mb-4">
        <div className="container px-2">
          <Link className="navbar-brand fw-bold logo" to="/movies">
            Younes Elaomari
          </Link>
          <div className="d-flex ml-auto dd">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/movies/add-movie" className="nav-a pt-3">
                  <h6>Add movie</h6>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
