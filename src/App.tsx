import "./styles.css";
import { textVide } from "./tv";
import { useState } from "react";
export default function App() {
  const [input, setInput] = useState("");
  console.log(textVide(input));
  return (
    <div className="App">
      <h1>هلا والله, كيف حالكم؟..</h1>
      <h2>اكتب اي كلمة عربي..</h2>
      <input onChange={(e) => setInput(e.target.value)} />

      <td dangerouslySetInnerHTML={{ __html: textVide(input) }} />
    </div>
  );
}
