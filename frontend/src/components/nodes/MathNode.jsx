// MathNode.jsx
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useState } from "react";

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || "add");
  return (
    <BaseNode
      id={id}
      label="Math"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: "a",
          style: { top: "33%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: "b",
          style: { top: "66%" },
        },
        { type: "source", position: Position.Right, id: "result" },
      ]}
    >
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="sub">Subtract</option>
        <option value="mul">Multiply</option>
        <option value="div">Divide</option>
      </select>
    </BaseNode>
  );
};
