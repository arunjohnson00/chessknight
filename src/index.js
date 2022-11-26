import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Example from "./components/App";

function App() {
  const headerStyle = {
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={headerStyle}>Chess Knight Movement</h1>
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
