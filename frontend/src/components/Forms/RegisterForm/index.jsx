import React, { useState } from "react";

import "./index.css";
import InputGroup from "../../InputGroup";
import Button from "../../Button";
import { sendRequest } from "../../../core/request";
const RegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    userType:1
  });

  const handleForm = (field, value) => {
    setForm((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const body = { ...form, last_name: form.lastName };
    const response = await sendRequest({
      body: body,
      route: "auth/register",
      method: "POST",
    });

    console.log(response?.status);
  };
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
          onChange={(e) => handleForm("firstName", e.target.value)}

        />
         <InputGroup
          id={"last_name"}
          type={"text"}
          label={"Last Name"}
          name="last_name"
          placeholder="Doe"
          onChange={(e) => handleForm("lastName", e.target.value)}

        />

        </div>
        <InputGroup
          id={"email"}
          type={"email"}
          placeholder={"john.doe@example.com"}
          name="email"
          label="Email"
          onChange={(e) => handleForm("email", e.target.value)}

        />
        <InputGroup
          id={"password"}
          type={"password"}
          placeholder=""
          name="password"
          label="Password"
          onChange={(e) => handleForm("password", e.target.value)}

        />

        <div className="input-group">
          <Button text={"Register"} className="w-100" animation={false} onClick={() => handleSubmit()} />
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
