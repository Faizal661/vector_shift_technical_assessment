// TimeNode.jsx
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useState } from "react";

export const TimeNode = ({ id, data }) => {
  const [time, setTime] = useState(
    data?.time || new Date().toTimeString().split(" ")[0]
  );
  return (
    <BaseNode
      id={id}
      label="Time"
      handles={[{ type: "source", position: Position.Right, id: "time" }]}
    >
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </BaseNode>
  );
};
