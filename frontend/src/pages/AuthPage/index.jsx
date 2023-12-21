import React from "react";

import "./index.css";
import LogiForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import Navbar from "../../components/Navbar";
const AuthPage = () => {
  return (
    <div className="auth-page d-flex  gap row w-100 center">
      <div className="img-container w-100">
        <img
          src="https://img.freepik.com/free-photo/medium-shot-woman-reading-tarot-home_23-2150273154.jpg?size=626&ext=jpg"
          className="img"
          alt=""
        />
      </div>
      <div className="form-container secondary-bg w-100 rounded-10">
        <LogiForm />
      </div>
      <div className="form-container secondary-bg w-100 rounded-10">
        <RegisterForm />
      </div>
    </div>
  );
};

export default AuthPage;
