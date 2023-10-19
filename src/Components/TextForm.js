import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [searchV, setSearchV] = useState("");
  const [replaceV, setReplaceV] = useState("");

  const toUpperCase = () => {
    // console.log("btn clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowerCase = () => {
    // console.log("btn clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const valueChange = (Event) => {
    // console.log("On change");
    setText(Event.target.value);
  };

  const searchChange = (Event) => {
    // console.log("On change");
    setSearchV(Event.target.value);
  };
  const replaceChange = (Event) => {
    // console.log("On change");
    setReplaceV(Event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const replace = (searchV, replaceV) => {
    let newText;
    newText = text.replace(new RegExp(searchV, "g"), replaceV);
    setText(newText);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Text"
            onChange={valueChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2c4e7f" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            value={searchV}
            placeholder="Search Value"
            onChange={searchChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2c4e7f" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox1"
            rows="1"
          ></input>
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            value={replaceV}
            placeholder="Replace Value"
            onChange={replaceChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2c4e7f" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox2"
            rows="1"
          ></input>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={toUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={toLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove unnecessary spaces
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={() => replace(searchV, replaceV)}
        >
          Replace
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text summary</h1>
        <p>Word Count: {text.split(" ").filter((element) => {return element.length !== 0}).length}</p>
        <p>Character count: {text.length}</p>
        <p>Time for reading: {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <textarea
          className="form-control"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "#2c4e7f" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="2"
        ></textarea>
      </div>
    </>
  );
}
