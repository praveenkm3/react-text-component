import { useState } from "react";
export default function Grid() {
  const [inputText, setInputText] = useState("");
  const [display, setDisplay] = useState("");

  return (
    <div className="parent">
      <div className="left">
        <div className="child">

          <input
            type="text"
            placeholder="Enter text..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </div>

      <div className="right">
        <h1>{(display)?display: "Output Area"}</h1>
      </div>
      <div className="buttons">
            <button
              className="submit"
              onClick={() => {
                setDisplay(inputText);
               setInputText("")}}>
            Submit</button>

            <button
              className="clear"
              onClick={() => {
                setInputText("");
                setDisplay("");
              }}
            >
              Clear
            </button>
          </div>
    </div>
  );
}
