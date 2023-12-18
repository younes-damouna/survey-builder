import React from "react";
import "./index.css";
const InputGroup = ({
  label,
  onChange,
  name,
  value,
  type,
  className,
  placeholder,
  id,
}) => {
  return (
    <div className="input-group fs-md">
      <label htmlFor="id" className="label">
        {label}
      </label>
      <input
        id={id}
        className={`${className} input rounded-5`}
        type={type}
        placeholder={placeholder}
        name=""
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
