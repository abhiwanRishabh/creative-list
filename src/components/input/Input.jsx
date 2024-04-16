import React from "react";

function Input({
  label,
  name = "",
  placeholderText = "",
  onChange = () => {},
  value,
  isRequired
}) {
  return (
    <div className="input-box">
      <p>
       <label>{label}</label>
      </p>
      <input
        type="text"
        name={name}
        placeholder={placeholderText}
        onChange={onChange}
        required={isRequired}
        value={value}
      />
    </div>
  );
}

export default Input;
