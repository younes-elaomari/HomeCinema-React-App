import React, { Component } from "react";

class ProductDetails extends Component {
  render() {
    return (
      <div>
        <h4>movie id is {this.props.match.params.id}</h4>
        <button
          className="btn btn-primary"
          onClick={() => this.props.history.replace("/")}
        >
          save
        </button>
      </div>
    );
  }
}

export default ProductDetails;
