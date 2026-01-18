// textNode.js

import { useState, useRef, useEffect } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  useEffect(() => {
    const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(variableRegex)];
    const variables = new Set(matches.map((m) => m[1]));

    const newHandles = Array.from(variables).map((variable, index) => {
      return {
        type: "target",
        position: Position.Left,
        id: variable,
        style: { top: `${(index + 1) * 20}px` },
      };
    });

    newHandles.push({ type: "source", position: Position.Right, id: "output" });

    setHandles(newHandles);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Text"
      handles={handles}
      style={{ width: "auto", minWidth: "200px" }}
    >
      <div>
        <label>
          Text:
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleTextChange}
            style={{
              resize: "none",
              width: "100%",
              minHeight: "60px",
              boxSizing: "border-box",
              overflow: "hidden",
              lineHeight: "1.4",
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};
