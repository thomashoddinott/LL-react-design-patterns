import { useState, useEffect } from "react";

export const ControlledForm = ({ name_, age_, hairColor_ }) => {
  const [name, setName] = useState(name_ || "");
  const [age, setAge] = useState(age_ || 0);
  const [hairColor, setHairColor] = useState(hairColor_ || "");

  const [nameError, setNameError] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameError("Name must be two or more characters");
    } else {
      setNameError("");
    }
  }, [name]);
  // etc for other state

  const handleSubmit = (e) => {
    console.log(name, age, hairColor);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {nameError && <p>{nameError}</p>}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        placeholder="Name"
      />
      <input
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        name="age"
        type="number"
        placeholder="Age"
      />
      <input
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
        name="hairColor"
        type="text"
        placeholder="Hair Color"
      />
      <button>Submit</button>
    </form>
  );
};
