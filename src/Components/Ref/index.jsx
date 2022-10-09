import "./style.css";
import { useState } from "react";
import { useRef } from "react";

const step = 2;

export const Ref = () => {
  const [intervalRef, setIntervalRef] = useState(null);
  const squerRef = useRef(null);

  const moveleft = () => {
    const interval = setInterval(() => {
      const element = squerRef.current;
      const elementCss = getComputedStyle(element);
      const left = parseFloat(elementCss.left);
      element.style.left = `${left - step}px`;
    }, 0);

    setIntervalRef(interval);
  };

  const moveLeftUp = () => {
    clearInterval(intervalRef);
  };

  const moveRight = () => {
    const interval = setInterval(() => {
      const element = squerRef.current;
      const elementCss = getComputedStyle(element);
      const left = parseFloat(elementCss.left);
      element.style.left = `${left + step}px`;
    }, 0);

    setIntervalRef(interval);
  };

  const moveRightUp = () => {
    clearInterval(intervalRef);
  };

  const moveDown = (element) => {
    const interval = setInterval(() => {
      const element = squerRef.current;
      const elementCss = getComputedStyle(element);
      const down = parseFloat(elementCss.down);
      element.style.down = `${element - step}px`;
    }, 0);

    setIntervalRef(interval);
  };

  const moveDownUp = () => {
    clearInterval(intervalRef);
  };

  return (
    <div>
      <div className="squer" ref={squerRef}></div>
      <div className="action">
        <button onMouseDown={moveleft} onMouseUp={moveLeftUp}>
          Left
        </button>
        <button onMouseDown={moveRight} onMouseUp={moveRightUp}>
          Right
        </button>
        <button onMouseDown={moveDown} onMouseUp={moveDownUp}>
          Down
        </button>
      </div>
    </div>
  );
};
