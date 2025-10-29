import { useState } from "react";

import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* <h3>Uncontrolled</h3> */}
      {/* <UncontrolledForm /> */}
      {/* 👆 very inflexible */}

      <ControlledModal
        shouldShow={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <h3>Controlled</h3>
        <ControlledForm name_="thomas" age_={33} hairColor_="black" />
        {/* 👆 more flexible */}
      </ControlledModal>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
    </>
  );
}

export default App;
