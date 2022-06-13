import "./styles.css";
import { textVide } from "./tv";
import { useState } from "react";
import BionicReaderPage from "./BionicReaderPage";
import "./App.css";
export default function App() {
  const [input, setInput] = useState("");
  console.log(textVide(input));
  return (
    <div className="App">
      <BionicReaderPage/>
    </div>
  );
}
