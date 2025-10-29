/* eslint-disable react/prop-types */
import { useState } from "react";

// import { UncontrolledForm } from "./UncontrolledForm";
// import { ControlledForm } from "./ControlledForm";
// import { ControlledModal } from "./ControlledModal";

import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
// import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 4 })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Congratulations! You qualify for the senior discount</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  // const [showModal, setShowModal] = useState(false);

  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={onNext}
        onFinish={() => alert("Done")}
      >
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 65 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>

      {/* <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding complete!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow> */}

      {/* <h3>Uncontrolled</h3> */}
      {/* <UncontrolledForm /> */}
      {/* 👆 very inflexible */}

      {/* <ControlledModal
        shouldShow={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <h3>Controlled</h3>
        <ControlledForm name_="thomas" age_={33} hairColor_="black" />
      </ControlledModal>
      <button onClick={() => setShowModal(true)}>Open Modal</button> */}
    </>
  );
}

export default App;
