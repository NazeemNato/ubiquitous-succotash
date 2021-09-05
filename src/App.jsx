import React, { useState } from "react";
import ReactFlow from "react-flow-renderer";

const elements = [
  {
    id: "1",
    type: "input",
    data: { label: "M1" },
    position: { x: 50, y: 25 },
    draggable: false
  },
  {
    id: "2",
    type: "input",
    data: { label: "M2" },
    position: { x: 250, y: 25 },
    draggable: false
  },
  {
    id: "3",
    type: "input",
    data: { label: "M3" },
    position: { x: 450, y: 25 },
    draggable: false
  },
  {
    id: "4",
    data: { label: "Ground" },
    position: { x: 250, y: 150 },
    draggable: false,
  },

  {
    id: "5",
    data: { label: "Output 5000" },
    position: { x: 750, y: 200 },
    draggable: false
  }, {
    id: "6",
    data: { label: "Output 5000" },
    position: { x: 750, y: 280 },
    draggable: false
  },
  {
    id: "7",
    data: { label: "Output 5000" },
    position: { x: 750, y: 360 },
    draggable: false
  },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-6", source: "4", target: "6" },
  { id: "e6-7", source: "6", target: "7", animated: true},
];



function App() {
  return (
    <>
      <div style={{ height: 800 }}>
        <ReactFlow elements={elements} zoomOnScroll={false} draggable={false} />
      </div>
    </>
  );
}

export default App;
