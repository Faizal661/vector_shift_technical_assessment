// BaseNode.jsx
import { Handle, Position } from "reactflow";
import { useStore } from "../../store/useStore";

export const BaseNode = ({ id, label, children, handles = [], style = {} }) => {
  const deleteNode = useStore((state) => state.deleteNode);

  return (
    <div className="base-node" style={{ ...style }}>
      <div
        style={{
          position: "absolute",
          top: -10,
          right: -10,
          pointerEvents: "all",
        }}
      >
        <button
          onClick={() => deleteNode(id)}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            lineHeight: 1,
            boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          ×
        </button>
      </div>

      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
          isConnectable={handle.isConnectable}
        />
      ))}

      <div className="node-content">
        {label && <div className="node-title">{label}</div>}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Wrapper for children to handle gap */}
          {children}
        </div>
      </div>
    </div>
  );
};
