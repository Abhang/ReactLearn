import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    /* console.log("Hello"+ text); */
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    /* console.log("Hello"+ text); */
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    /* console.log("On Change"); */
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
   <div className="container">
   <div className="mb-3">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} Words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length} Minutes to read on an average</p>
        
    </div>
    <div className="container">
        <p> Preview </p>
        <p>{text}</p>
        </div>
    </div>
    </>
  );
}
