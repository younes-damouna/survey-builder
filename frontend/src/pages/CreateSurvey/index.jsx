import React, { useState } from 'react'
import Button from '../../components/Button';
import MultipleChoiceQuestion from '../../components/MultioleChoiceQuestion';
import "./index.css"
const CreateSurvey = () => {
    const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([]);
  const [shorthQuestions, setShortQuestions] = useState([]);
  const [CheckBoxQuestions, setCheckQuestions] = useState([]);

  const addMultipleChoiceQuestions = () => {
    setMultipleChoiceQuestions((prev) => [...prev, 1]);
  };
  const addShortQuestions= () => {
    setShortQuestions((prev) => [...prev, 1]);
  };

  return (
    <div className='container'>
          <div className="questions-menu fs-md d-flex column space-between  rounded-10">
        <div className="d-flex space-between">
          <div className="close-btn text-white"></div>

          <h4 className="text-white text-center">
            Choose <br /> Question Type
          </h4>
        </div>
        <Button
          text={"short Answer"}
          className={"w-100"}
          onClick={() => addShortQuestions()}
        />

        <Button
          text={"Multiple Choice"}
          className={"w-100"}
          onClick={() => addMultipleChoiceQuestions()}
        />
        <Button text={"Check Boxes"} className={"w-100"} onClick={""} />
        {/* <Button text={"Drop Down"} className={"w-100"} onClick={""} /> */}
      </div>
      {/* <HomePage/> */}
      {/* <QuestionsMenu /> */}

     <div className='question-container rounded-10'>
     {multipleChoiceQuestions.map(() => {
        return <MultipleChoiceQuestion />;
      })}

    
     </div>
     <div className='question-container rounded-10'>
     {shorthQuestions.map(() => {
        return <div>Hello</div>;
      })}
     </div>
    </div>
  )
}

export default CreateSurvey