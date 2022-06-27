import React, { useState } from "react";
import "./App.css";
import Board from "./Components/Board";
import Score from "./Components/Score";
export default function App() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const handleClick = (boxId) => {
    const newBoard = board.map((value, idx) => {
      if (idx === boxId) {
        return xPlaying === true ? "X" : "0";
      } else {
        return value;
      }
    });
    const winner = checkWinner(newBoard);
    if (winner) {
      if (winner === "0") {
        let { oScore } = scores;
        oScore += 1;
        setScore({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScore({ ...scores, xScore });
      }
    }
    setBoard(newBoard);
    setXPlaying(!xPlaying);
  };
  const checkWinner = (board) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        return board[a];
      }
    }
  };
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };
  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <Score scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleClick} />
      <button className="btn" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
}
