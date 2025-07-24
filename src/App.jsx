import { useState } from "react";
import "./App.css";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import StopWatch from "./components/stopwatch/Stopwatch";
import StarRating from "./components/starRating/StarRating";
import { StepForm } from "./components/stepForm/StepForm";

function App() {
  // return <TicTacToe />;
  // return <StopWatch />;
  // return <StarRating />;
  return <StepForm />;
}

export default App;
