import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, label, value, error, onChange } = this.props;

    return (
      <div className="form-group mt-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          name={name}
          value={value}
          error={error}
          id={name}
          onChange={onChange}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
