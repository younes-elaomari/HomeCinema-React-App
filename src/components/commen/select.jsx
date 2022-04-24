import React from "react";

const Select = ({ options, name, error, label, ...rest }) => {
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
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Select;
