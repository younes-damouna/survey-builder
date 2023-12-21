import React, { useState } from "react";

import "./index.css";
import InputGroup from "../InputGroup";
import Button from "../Button";
const RadioQuestion = () => {
  const [options, setOptions] = useState([1, 1]);
  const [val, setVal] = useState(3);

  const handleClick = () => {
    console.log("hello");

    setOptions((prev) => [...prev, val]);
    setVal((prev) => (prev += 1));
    console.log(val);
  };
  return (
    <div className="radio-question ">
      <InputGroup
        id={"email"}
        type={"email"}
        placeholder={"Ask a Question"}
        name="text"
        label="Question Title"
        className={"text-black"}
        onChange={() => {
          // onChange
        }}
      />

      {options.map((option, index) => {
        return (
          <InputGroup
            halfWidth={"w-50"}
            showRemove={index === 0 || index === 1 ? false : true}
            id={"email"}
            type={"text"}
            placeholder={"answer"}
            name="text"
            label={`Option ${index + 1}`}
            className={"text-black"}
            required={true}
            removeElement={() => {}}
            onChange={(e) => {
              // onChange
              // console.log(e.target.value)
            }}
          />
        );
      })}

      <div className="input-group">
        <Button text={"+ Option"} className={""} onClick={handleClick} />
      </div>
    </div>
  );
};

export default RadioQuestion;
