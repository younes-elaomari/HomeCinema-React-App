import React, { Component } from "react";
import { getDeitail } from "../services/deitailsService";
import { Link } from "react-router-dom";

class Deitails extends Component {
  state = {
    deitail: [],
  };

  componentDidMount = () => {
    this.setState({ deitail: getDeitail(1) });
  };

  handleDeitailChange = (id) => {
    this.setState({ deitail: getDeitail(id) });
  };

  render() {
    const listNum = [1, 2];
    const { deitail } = this.state;
    return (
      <div className="deitails" style={{ backgroundImage: deitail.url }}>
        <div className="container">
          <div className=" deitails-container">
            <article className="h-article text-center px-3">
              <h1 className="display-4 lh-1 pb-3 m-auto animation-from-top">
                {deitail.title}
              </h1>
              <p className="lead fw-normal text-muted m-auto animation-from-bottom">
                {deitail.text}
              </p>

              <ul className="nav navbar-collapse justify-content-center animation-from-bottom">
                {listNum.map((item) => {
                  return (
                    <li
                      key={item}
                      onClick={() => this.handleDeitailChange(item)}
                      className="nav-item"
                    >
                      <Link
                        className="nav-link clickable"
                        to="/movies/deitails"
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Deitails;
