// ToggleNode.jsx
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useState } from "react";

export const ToggleNode = ({ id, data }) => {
  const [enabled, setEnabled] = useState(data?.enabled || false);
  return (
    <BaseNode
      id={id}
      label="Toggle"
      handles={[{ type: "source", position: Position.Right, id: "value" }]}
    >
      <label style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        <span style={{ marginLeft: "5px" }}>{enabled ? "On" : "Off"}</span>
      </label>
    </BaseNode>
  );
};
