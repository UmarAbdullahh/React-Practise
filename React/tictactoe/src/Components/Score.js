import React from "react";
import "../App.css";
export default function Score({ scores, xPlaying }) {
  const { xScore, oScore } = scores;
  return (
    <div className="score">
      <span>X-{xScore}</span>
      <span>O-{oScore}</span>
    </div>
  );
}
