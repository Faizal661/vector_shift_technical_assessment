// submit.js

import { useStore } from "../../store/useStore";
import { useShallow } from "zustand/react/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(useShallow(selector));

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("pipeline", JSON.stringify({ nodes, edges }));

      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        alert(`Error: ${data.error}`);
      } else {
        alert(
          `Pipeline Analysis:\nNumber of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
        );
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit pipeline.");
    }
  };

  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
