import { SplitScreen } from "./SplitScreen";
import "./App.css";

const LeftHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "green" }}>{message}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: "red" }}>{message}</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={5}>
      <LeftHandComponent message="Left"/>
      <RightHandComponent message="Right"/>
    </SplitScreen>
  );
}

export default App;
