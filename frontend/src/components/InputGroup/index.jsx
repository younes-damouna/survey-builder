import React, { useState } from "react";
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
  showRemove,
  required
  ,halfWidth
  // removeElement
}) => {
  const [visible, setVisible] = useState(true);
  const removeElement = (e) => {
    setVisible(false);
  };
  return (
    <>
      {visible ? (
        <div className={`input-group fs-md ${halfWidth} `}>
          <label htmlFor="id" className={`label ${className}`}>
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
            required={required}
          />
          {showRemove ? (
            <div onClick={(e) => removeElement(e)}>delete</div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default InputGroup;
