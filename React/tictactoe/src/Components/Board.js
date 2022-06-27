import React from "react";
import Square from "./Square";
import "../App.css";
export default function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((value, index) => {
        return (
          <Square
            key={index}
            value={value}
            onClick={() => value === null && onClick(index)}
          />
        );
      })}
    </div>
  );
}
