import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group mt-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        error={error}
        id={name}
        className={error ? "form-select is-invalid" : "form-select"}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
