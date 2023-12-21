import React, { useEffect, useState } from "react";
import "./index.css";
import InputGroup from "../InputGroup";
import Button from "../Button";
const MultipleChoiceQuestion = ({
  handleOnChange,
  handleAnswers,
  answers,
  id,
  type,
  handleRemoveAnswer,
}) => {
  const [options, setOptions] = useState([1, 1]);
  const [val, setVal] = useState(3);

  const handleClick = () => {
    console.log("hello");

    setOptions((prev) => [...prev, val]);
    setVal((prev) => (prev += 1));
    console.log(val);
  };

  // useEffect(() => {

  // }, [options])

  // console.log(answers);
  return (
    <div>
      <div className="multi-choic-question input-group ">
        <InputGroup
          id={"email"}
          type={"email"}
          placeholder={"Ask a Question"}
          name="text"
          label="Question Title"
          className={"text-black"}
          onChange={(e) => {
            handleOnChange(id, e.target.value, type);
            // onChange
            // console.log(id)
          }}
        />
        {/* <InputGroup
                showRemove={false}
                id={"email"}
                type={"text"}
                placeholder={"answer"}
                name="text"
                label="option 1"
                className={"text-black"}
                onChange={() => {
                    // onChange
                }}
                /> */}
        {/* <InputGroup
            showRemove={false}
              id={"email"}
              type={"text"}
              placeholder={"answer"}
              name="text"
              label="Option 2"
              className={"text-black"}
              onChange={() => {
                // onChange
              }}
            /> */}
        {options.map((index, g) => {
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
              removeElementArray={(e) => {
                handleRemoveAnswer(g);

                // console.log(notRemoved)
              }}
              onChange={(e) => {
                handleAnswers(g, e.target.value);
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
    </div>
  );
};

export default MultipleChoiceQuestion;
