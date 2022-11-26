import React from "react";

const squareStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const Square = ({ black, children }) => {
  const fill = black ? "red" : "white";
  const stroke = black ? "white" : "red";
  return (
    <div
      style={{
        ...squareStyle,
        backgroundColor: fill,
        color: stroke,
      }}
    >
      {children}
    </div>
  );
};

export default Square;
