import React from "react";
import "./index.css";
import InputGroup from "../InputGroup";
const ShorthQuestions = ({handleOnChange,id,type}) => {
  return (
    <div className="short-question ">
      <InputGroup
        // halfWidth={"w-50"}
        showRemove={false}
        id={"short-answer"}
        type={"text"}
        placeholder={"Ask a Question"}
        name="text"
        label={`Question Title`}
        className={"text-black"}
        required={true}
        removeElement={() => {}}
        onChange={(e) => {
            handleOnChange(id, e.target.value,type)
          // onChange
          // console.log(e.target.value)
        }}
      />
    </div>
  );
};

export default ShorthQuestions;
