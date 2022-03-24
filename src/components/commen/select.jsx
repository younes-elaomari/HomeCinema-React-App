import React, { Component } from "react";

class Select extends Component {
  render() {
    const { options, name, error, label, ...rest } = this.props;

    return (
      <div className="form-group mt-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <select
          {...rest}
          name={name}
          id={name}
          className={error ? "form-select is-invalid" : "form-select"}
        >
          <option value="">Choose...</option>
          {options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}

export default Select;
