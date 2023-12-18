import React from "react";

import "./index.css";
import Button from "../Button";
const QuestionsMenu = () => {
  return (
    // <div className='questions-menu fs-md d-flex column space-between'>
    //     <div className="menu-item"> short Answer</div>
    //     <div className="menu-item"> Paragraph Answer</div>

    //     <div className="menu-item"> Multiple Choice</div>
    //     <div className="menu-item"> Check Boxes</div>
    //     <div className="menu-item"> Drop Down</div>

    // </div>

      
      <div className="questions-menu fs-md d-flex column space-between  rounded-10">
        <div className="d-flex space-between">
        <div className="close-btn text-white"></div>

        <h4 className="text-white text-center">Choose <br /> Question Type</h4>
        </div>
        <Button text={"short Answer"} className={"w-100"} onClick={""} />
        <Button text={"Paragraph Answer"} className={"w-100"} onClick={""} />
        <Button text={"Multiple Choice"} className={"w-100"} onClick={""} />
        <Button text={"Check Boxes"} className={"w-100"} onClick={""} />
        <Button text={"Drop Down"} className={"w-100"} onClick={""} />
      </div>
  );
};

export default QuestionsMenu;
