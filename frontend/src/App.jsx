import { useState } from "react";
import Button from "./components/Button";
import MultipleChoiceQuestion from "./components/MultioleChoiceQuestion";
import QuestionsMenu from "./components/QuestionsMenu";
import logo from "./logo.svg";
import HomePage from "./pages/HomePage";
import "./styes/utilities.css";
import CreateSurvey from "./pages/CreateSurvey";

function App() {
  
  return (
    <div className="App">
      <CreateSurvey />
    </div>
  );
}

export default App;
