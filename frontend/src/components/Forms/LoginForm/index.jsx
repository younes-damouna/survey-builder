import React from "react";

import "./index.css";
import InputGroup from "../../InputGroup";
import Button from "../../Button";
const LogiForm = () => {
  return (
    <div className="w-100 ">
      <div className="text-white d-flex center fs-lg">Login</div>
      <form
        action="
        "
        className="w-100 "
      >
        <InputGroup
          id={"email"}
          type={"email"}
          placeholder={"john.doe@example.com"}
          name="email"
          label="Email"
          onChange={() => {
            // onChange
          }}
        />
        <InputGroup
          id={"password"}
          type={"password"}
          placeholder=""
          name="password"
          label="Password"
          onChange={() => {
            // onChange
          }}
        />

        <div className="input-group">
          <Button text={"Log In"} className="w-100" animation={false} />
          <div className=" d-flex  justify-content-end w-100 text-white mt-1">
            Don't have an account? &nbsp;{" "}
            <span className="text-primary cursor"> Register!</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogiForm;
