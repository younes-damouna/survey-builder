import { useState } from "react";
import Button from "./components/Button";
import MultipleChoiceQuestion from "./components/MultioleChoiceQuestion";
import QuestionsMenu from "./components/QuestionsMenu";
import logo from "./logo.svg";
import HomePage from "./pages/HomePage";
import "./styes/utilities.css";
import CreateSurvey from "./pages/CreateSurvey";
import SeeServey from "./pages/SeeSurvey";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import FillSurvey from "./pages/FillSurvey";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="App">
     

      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/surveys" element={<SeeServey />} />
          <Route path="/surveys/:id" element={<FillSurvey />} />

          <Route path="/createSurvey" element={<CreateSurvey />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
