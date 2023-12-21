import React, { useState } from "react";

import "./index.css";
import InputGroup from "../../InputGroup";
import Button from "../../Button";
import { sendRequest } from "../../../core/request";
import { useNavigate } from "react-router-dom";
const LogiForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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
    const response = await sendRequest({
      body: form,
      route: "auth/login",
      method: "POST",
    });

    console.log(response);
    if (response.status ===200) {
      // save the login status in redux
      localStorage.setItem("token", response.token);
      navigate("/surveys");
    }
  };
  console.log(form)
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
          onChange={(e) => {
            handleForm('email',e.target.value)
            // onChange
          }}
        />
        <InputGroup
          id={"password"}
          type={"password"}
          placeholder=""
          name="password"
          label="Password"
          onChange={(e) => {
            // onChange
            handleForm('password',e.target.value)

          }}
        />

        <div className="input-group">
          <Button text={"Log In"} className="w-100" animation={false} onClick={() => handleSubmit()}/>
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
