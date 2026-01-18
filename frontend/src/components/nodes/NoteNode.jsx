// NoteNode.jsx
import { BaseNode } from "./BaseNode";
import { useState } from "react";

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || "");
  return (
    <BaseNode id={id} label="Note" handles={[]}>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter note..."
        style={{ width: "100%", boxSizing: "border-box", height: "60px" }}
      />
    </BaseNode>
  );
};
