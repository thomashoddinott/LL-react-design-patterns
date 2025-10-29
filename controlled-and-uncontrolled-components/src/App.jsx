import "./App.css";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";

function App() {
  return (
    <>
      <h3>Uncontrolled</h3>
      <UncontrolledForm />
      {/* 👆 very inflexible */}
      <h3>Controlled</h3>
      <ControlledForm name_="thomas" age_={33} hairColor_="black" />
      {/* 👆 more flexible */}
    </>
  );
}

export default App;
