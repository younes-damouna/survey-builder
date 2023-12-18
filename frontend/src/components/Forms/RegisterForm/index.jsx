import React from "react";

import "./index.css";
import InputGroup from "../../InputGroup";
import Button from "../../Button";
const RegisterForm = () => {
  return (
    <div className="w-100 ">
      <div className="text-white d-flex center fs-lg">Register</div>
      <form
        action="
        "
        className="w-100 "
      >
        <div className="d-flex ">
        <InputGroup
          id={"first_name"}
          type={"text"}
          label={"First Name"}
          name="first_name"
          placeholder="John"
          onChange={() => {
            // onChange
          }}
        />
         <InputGroup
          id={"last_name"}
          type={"text"}
          label={"Last Name"}
          name="last_name"
          placeholder="Doe"
          onChange={() => {
            // onChange
          }}
        />

        </div>
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
            <span className="text-primary cursor"> Login!</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
