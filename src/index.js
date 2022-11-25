import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Example from "./components/example";

function App() {
  return (
    <div>
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
