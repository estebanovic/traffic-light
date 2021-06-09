import { useState } from 'react';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className="traffict-light">
        <div onClick={() => setSelectedColor("red")}
        className={"light red " + (selectedColor === "red" ? " glow" : "")}></div>
        <div onClick={() => setSelectedColor("yellow")} 
        className={"light yellow "  + (selectedColor === "yellow" ? " glow" : "")}></div>
        <div onClick={() => setSelectedColor("green")} 
         className={"light green "  + (selectedColor === "green" ? " glow" : "")}></div>
    </div>
  );
}

export default App;
