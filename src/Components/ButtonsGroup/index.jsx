import { useState } from "react";
import "./style.css";
export const ButtonsGroup = (props) => {
  const [colour, setColour] = useState(`blue`);
  setColour = ["grey", "green", "yellow", "red", "white"];
  return (
    <div className="buttons-wrapper">
      <button colour={colour}>
        <p className="btn-text" text={text}></p>
      </button>
      {props.children}
    </div>
  );
};
