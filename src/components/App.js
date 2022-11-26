import React, { useState, useEffect } from "react";
import Board from "./Board";
import { observe } from "../GameControll";

const containerStyle = {
  width: 500,
  height: 500,
  border: "1px solid gray",
  margin: "auto",
};
const ChessboardTutorialApp = () => {
  const [knightPos, setKnightPos] = useState([1, 7]);
  useEffect(() => observe((newPos) => setKnightPos(newPos)), []);
  return (
    <div>
      <div style={containerStyle}>
        <Board knightPosition={knightPos} />
      </div>
    </div>
  );
};
export default ChessboardTutorialApp;
