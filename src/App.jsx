import React, { useState } from "react";
import ReactFlow, { Background } from "react-flow-renderer";

const elements = [
  {
    id: "1",
    type: "input",
    data: { label: "M1" },
    position: { x: 50, y: 25 },
    draggable: false,
    style: {
      border: "2px solid #2ecc71",
    },
  },
  {
    id: "2",
    type: "input",
    data: { label: "M2" },
    position: { x: 250, y: 25 },
    draggable: false,
    style: {
      border: "2px solid #2ecc71",
    },
  },
  {
    id: "3",
    type: "input",
    data: { label: "M3" },
    position: { x: 450, y: 25 },
    draggable: false,
    style: {
      border: "2px solid #2ecc71",
    },
  },
  {
    id: "4",
    data: { label: "Ground" },
    position: { x: 250, y: 250 },
    draggable: false,
    sourcePosition: "right",
    style: {
      border: "2px solid #e77f67",
    },
  },

  {
    id: "5",
    data: { label: "Container #1 5000" },
    position: { x: 750, y: 25 },
    draggable: false,
    targetPosition: "left",
    sourcePosition: "left",
    style: {
      border: "2px solid #e15f41",
    },
  },
  {
    id: "6",
    data: { label: "Container #2 5000" },
    position: { x: 750, y: 80 },
    draggable: false,
    targetPosition: "left",
    sourcePosition: "left",
    style: {
      border: "2px solid #e15f41",
    },
  },
  {
    id: "7",
    data: { label: "Container #3 5000" },
    position: { x: 750, y: 140 },
    draggable: false,
    targetPosition: "left",
    sourcePosition: "left",
    style: {
      border: "2px solid #e15f41",
    },
  },
  {
    id: "8",
    data: { label: "Container #4 5000" },
    position: { x: 750, y: 200 },
    draggable: false,
    targetPosition: "left",
    sourcePosition: "left",
    style: {
      border: "2px solid #e15f41",
    },
  },
  {
    id: "9",
    data: { label: "Container #5 5000" },
    position: { x: 750, y: 260 },
    draggable: false,
    targetPosition: "left",
    sourcePosition: "left",
    style: {
      border: "2px solid #e15f41",
    },
  },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e4-6", source: "4", target: "6" },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    animated: true,
  },
];

function App() {
  return (
    <>
      <div style={{ height: 400 }}>
        <ReactFlow
          elements={elements}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          selectNodesOnDrag={false}
          zoomOnScroll={false}
          draggable={false}
          paneMoveable={false}
          zoomActivationKeyCode={null}
          zoomOnDoubleClick={false}
          zoomOnPinch={false}
        >
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </>
  );
}

export default App;
