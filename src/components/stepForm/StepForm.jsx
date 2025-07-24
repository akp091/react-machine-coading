import React, { useReducer, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./stepform.css";

export const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    pinCode: "",
    phoneNo: "",
    email: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "firstName":
        return {
          ...state,
          firstName: action.value,
        };

      case "lastName":
        return {
          ...state,
          lastName: action.value,
        };
      case "address":
        return {
          ...state,
          address: action.value,
        };
      case "pinCode":
        return {
          ...state,
          pinCode: action.value,
        };
      case "phoneNo":
        return {
          ...state,
          phoneNo: action.value,
        };
      case "email":
        return {
          ...state,
          email: action.value,
        };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleNextClick = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleSaveClick = () => {};

  const handleBackClick = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const handleCancelClick = () => {
    dispatch({ type: "reset" });
  };

  const getCurrentStepForm = (current) => {
    switch (current) {
      case 1:
        return <Step1 value={state} update={dispatch} />;
      case 2:
        return <Step2 value={state} update={dispatch} />;
      case 3:
        return <Step3 value={state} update={dispatch} />;
    }
  };

  console.log("state :>> ", state);
  return (
    <div className="container">
      {getCurrentStepForm(currentStep)}
      <div className="btns">
        <button className="cacel" onClick={handleCancelClick}>
          Cancel
        </button>
        <button
          className="back"
          onClick={handleBackClick}
          disabled={currentStep == 1}
        >
          Back
        </button>
        {currentStep == 3 ? (
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="next" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};
