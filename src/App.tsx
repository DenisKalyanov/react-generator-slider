import React from "react";
import "./App.css";
import Slider from "./Slider";

const array = ["11111", "22222", "33333", "444444"];

const App: React.FC = (): JSX.Element => {

  return (
    <div className="App">
        <Slider array={array} />
    </div>
  );
};

export default App;
