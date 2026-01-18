// DateNode.jsx
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useState } from "react";

export const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(
    data?.date || new Date().toISOString().split("T")[0]
  );
  return (
    <BaseNode
      id={id}
      label="Date"
      handles={[{ type: "source", position: Position.Right, id: "date" }]}
    >
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </BaseNode>
  );
};
