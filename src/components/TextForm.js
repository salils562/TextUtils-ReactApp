import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");
  const textUpChanger = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to upperCase", "success");
  }
  const textLowChanger = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to lowerCase", "success");
  }
  const textCapitalize = () => {
    let sin = text;
    let i = 0;
    while (i < sin.length) {
      if (i === 0) {
        sin = sin.charAt(i).toUpperCase() + sin.substring(1);
      }
      else if (sin[i] === ' ') {
        sin = sin.substring(0, i + 1) + sin.charAt(i + 1).toUpperCase() + sin.substring(i + 2);
      }
      i++;
    }
    setText(sin);
  }
  const removeExtraSpace = () => {
    let newString = text.replace(/\s+/g, ' ');
    setText(newString);
    props.showAlert("Removed Extra Spaces", "success");
  }
  const clear = () => {
    setText("");
    props.showAlert("Cleared text", "success");
  }
  const onUpdatingValue = (event) => {
    setText(event.target.value);
  }
  let setColor = {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "grey"
  }
  let setColor2 = {
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white"
  }
  return (
    <div>
      <div className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} rows="8" id="myBox" onChange={onUpdatingValue} style={props.mode === 'light' ? setColor2 : setColor}></textarea>
        </div>
        <div className="btn-flex">
          <button className={`btn btn-${props.buttonColor}  mx-3 butn`} id="item-1" onClick={textUpChanger}>Convert to UpperCase</button>
          <button className="btn btn-secondary mx-3 butn" id="item-2" onClick={textLowChanger}>Convert to LowerCase</button>
          <button className="btn btn-secondary mx-3 butn" id="item-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
          <button className="btn btn-secondary mx-3 butn" id="item-2" onClick={textCapitalize}>Capitalize Text</button>
          <button className="btn btn-secondary mx-3 butn" id="item-3" onClick={clear}>Clear Text</button></div>
        <div className="container px-5">
          <p className="my-3">Total {text.length} letters and {text.split(" ").length} words</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter some text in text Area to preview your text"}</p>
        </div>
      </div>

    </div>
  )
}
