import { useState } from "react";
import useMultistepForm from "./useMultistepForm";
import UserForm from "./UserForm";
import AccountForm from "./AccountForm";
import AdressForm from "./AddressForm";

import "./App.css";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state:"",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateField =(fields)=>{
    setData(prev=>{
      return {...prev, ...fields}
    })
  }

  const { steps, currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultistepForm([
      <UserForm {...data} updateField={updateField} />,
      <AdressForm {...data} updateField={updateField} />,
      <AccountForm {...data} updateField={updateField} />,
    ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if(!isLastStep) return next();
    alert("Successful Account Creation")
  };

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content"
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          {<button type="submit">{isLastStep ? "Finish" : "next"}</button>}
        </div>
      </form>
    </div>
  );
}

export default App;
