import { useState } from "react";
import "./App.css";
import ReactSelect, { CSSObjectWithLabel } from "react-select";

interface Option {
  value: string;
  label: string;
}
function App() {
  const [optionPicked, setOptionPicked] = useState({} as Option | null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyle = {
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      width: "400px",
      borderRadius: "8px",
      boxShadow: "none",
      backgroundColor: "white",
    }),
    option: (base: CSSObjectWithLabel, state: any) => ({
      ...base,
      color: state.isSelected ? "black" : "grey",
      backgroundColor: state.isSelected ? "lightgrey" : "white",
    }),
  };

  return (
    <>
      <h2>React-select Example</h2>
      <ReactSelect
        options={options}
        styles={customStyle}
        onChange={(option) => setOptionPicked(option)}
      />
      <h1>Option picked: {optionPicked?.label}</h1>
    </>
  );
}

export default App;
