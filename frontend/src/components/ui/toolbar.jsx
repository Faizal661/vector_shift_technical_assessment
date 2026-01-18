// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="date" label="Date" />
      <DraggableNode type="time" label="Time" />
      <DraggableNode type="note" label="Note" />
      <DraggableNode type="toggle" label="Toggle" />
      <DraggableNode type="math" label="Math" />
    </div>
  );
};
