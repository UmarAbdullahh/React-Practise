import React from "react";
import "../App.css";
export default function Square({ value, onClick }) {
  const style = value === "X" ? "box x" : "box o";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}
