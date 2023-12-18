import React from "react";
import InputGroup from "../../components/InputGroup";
import Navbar from "../../components/Navbar";
import AuthPage from "../AuthPage";

const HomePage = () => {
  return (
    <div className="container">
      {/* <InputGroup
        label="Email"
        onChange={() => {}}
        name="email"
        
        type="email"
        className=""
        placeholder="Email"
        id=""
      /> */}
      <Navbar/>

      <AuthPage />
    </div>
  );
};

export default HomePage;
