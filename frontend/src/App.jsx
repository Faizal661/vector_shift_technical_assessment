import { PipelineToolbar } from "./components/ui/toolbar";
import { PipelineUI } from "./components/ui/ui";
import { SubmitButton } from "./components/ui/submit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <PipelineToolbar />
        <SubmitButton />
      </div>
      <PipelineUI />
    </div>
  );
}

export default App;
