import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import MultipleChoiceQuestion from "../../components/MultioleChoiceQuestion";
import "./index.css";
import ShorthQuestions from "../../components/ShorthQuestions";
import RadioQuestion from "../../components/RadioQuestion";
import InputGroup from "../../components/InputGroup";
import { sendRequest } from "../../core/request";
const CreateSurvey = () => {
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([]);
  const [shorthQuestions, setShortQuestions] = useState([]);
  const [radioQuestions, setRadioQuestions] = useState([]);
  const [questionsToSubmit, setQuestionsToSubmit] = useState([]);
  //   console.log(shorthQuestions);
  const [form, setForm] = useState({
    title: "",
    description: "",
    questions: [],
  });

  const addMultipleChoiceQuestions = () => {
    setMultipleChoiceQuestions((prev) => [...prev, "1"]);
  };
  const addShortQuestions = () => {
    setShortQuestions((prev) => [...prev, "1"]);
  };
  const addRadioQuestions = () => {
    setRadioQuestions((prev) => [...prev, 1]);
  };
  const handleOnChange = (field, value) => {
    // console.log(field, " ", value);
    setForm((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });

  };

  //   console.log(form);
  const handleShortQuestions = (id, value, type) => {
    const updatedQuestions = [...questionsToSubmit];
    let newQuestion = { type: type, title: value };
    updatedQuestions[id] = newQuestion;
    setQuestionsToSubmit(updatedQuestions);
    // console.log(id)
    // setQuestionsToSubmit((prev) => {

    //   return [{ ...prev, ["type"]: type, ["title"]: value }];
    // });
  };
  const [multiQuestionsToSubmit, setMultiplQuestionsToSubmit] = useState([]);
  

  const [answers, setAnswers] = useState([]);
  const handleAnswers = (id, value) => {
    const updatedAnswer = [...answers];
    let newAnswer = { title: value };
    updatedAnswer[id] = newAnswer;
    setAnswers(updatedAnswer);
    // setMultiplQuestionsToSubmit((prev)=>[{...prev,answers:answers}])
  };
  const handleMultipQuestions = (id, value, type) => {
    const updatedQuestions = [...multiQuestionsToSubmit];
    let newQuestion = { type: type, title: value, answers: answers };
    updatedQuestions[id] = newQuestion;
    setMultiplQuestionsToSubmit(updatedQuestions);
    
  };
  console.log(multiQuestionsToSubmit);

  const handleRemoveAnswer = (g) => {
    let notRemoved = answers.filter((answer, index) => {
      // console.log(value)
      return index !== g;
    });
    setAnswers(notRemoved);
  };
  const [allQuestions,setAllQuestions]=useState([])
  
  useEffect(() => {
    // console.log(multiQuestionsToSubmit);
  }, [answers,multiQuestionsToSubmit,allQuestions]);
//   console.log(allQuestions)

const handleSubmit= async()=>{
    setAllQuestions({...form,'questions':[...questionsToSubmit,...multiQuestionsToSubmit]})
    const response = await sendRequest({
        body: allQuestions,
        route: "survey",
        method: "POST",
      });
      console.log(response);

}
  return (
    <div className="container survey-page w-50 ">
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
        <Button
          text={"Check Boxes"}
          className={"w-100"}
          onClick={() => addRadioQuestions()}
        />
        {/* <Button text={"Drop Down"} className={"w-100"} onClick={""} /> */}
      </div>
      {/* <HomePage/> */}
      {/* <QuestionsMenu /> */}

      <div className="question-type-wrapper rounded-10">
        <h2>Survey Details</h2>
        <div className="question-container rounded-10">
          <InputGroup
            id={"email"}
            type={"email"}
            placeholder={"Title"}
            name="title"
            label="Survey Title"
            className={"text-black"}
            onChange={(e) => {
              // onChange

              handleOnChange("title", e.target.value);
            }}
          />

          <InputGroup
            id={"email"}
            type={"email"}
            placeholder={"Title"}
            name="description"
            label="Survey Description"
            className={"text-black"}
            onChange={(e) => {
              // onChange
              handleOnChange("description", e.target.value);
            }}
          />
        </div>
      </div>

      {shorthQuestions.length > 0 ? (
        <div className="question-type-wrapper rounded-10">
          <h2>Short Answer Questions</h2>
          {shorthQuestions.map((index, g) => {
            // console.log(g);
            return (
              <div className="question-container rounded-10">
                {" "}
                <ShorthQuestions
                  id={g}
                  type={"short"}
                  key={g}
                  handleOnChange={handleShortQuestions}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      {multipleChoiceQuestions.length >= 0 ? (
        <div className="question-type-wrapper rounded-10">
          <h2>Multiple Choice Questions</h2>
          {multipleChoiceQuestions.map((index, g) => {
            return (
              <div className="question-container rounded-10">
                <MultipleChoiceQuestion
                  id={g}
                  type={"multiple"}
                  handleOnChange={handleMultipQuestions}
                  handleAnswers={handleAnswers}
                  answers={answers}
                  handleRemoveAnswer={handleRemoveAnswer}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}

      {radioQuestions.length > 0 ? (
        <div className="question-type-wrapper rounded-10">
          <h2>Radio Questions</h2>
          {radioQuestions.map(() => {
            return (
              <div className="question-container rounded-10">
                <RadioQuestion />
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      <div>
        <Button text={"submit"} className={"w-100"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateSurvey;
