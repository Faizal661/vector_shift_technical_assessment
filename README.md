# VectorShift Frontend Technical Assessment

This project is a React-based node pipeline builder with a Python/FastAPI backend, completed as part of the VectorShift technical assessment.

## 🚀 Features implemented

### Part 1: Node Abstraction

- **BaseNode Component**: Created a reusable `BaseNode` abstraction to handle common styling, handles, and layout.
- **Refactored Nodes**: Migrated `InputNode`, `OutputNode`, `TextNode`, and `LLMNode` to use the abstraction.
- **New Custom Nodes**: Added 5 new nodes to demonstrate flexibility:
  - 📅 **Date Node**: Date picker input.
  - ⏰ **Time Node**: Time picker input.
  - 📝 **Note Node**: Simple text area for notes.
  - 🎚️ **Toggle Node**: boolean switch.
  - ➗ **Math Node**: dropdown for math operations.

### Part 2: Styling (UI Overhaul)

- **Modern Dark Theme**: Implemented a "premium" dark theme using deep purples/blues and glassmorphism effects.
- **Unified Design**: Consistent styling across all nodes, form elements, and the toolbar.
- **Responsive Layout**: Top bar header with a full-screen canvas.

### Part 3: Text Node Logic

- **Auto-Resizing**: Text nodes automatically expand vertically as you type.
- **Variable Detection**: Typing `{{variableName}}` inside a Text node automatically creates a corresponding input handle on the left side of the node.

### Part 4: Backend Integration

- **Pipeline Parsing**: The frontend sends the graph structure (nodes & edges) to the backend `/pipelines/parse` endpoint.
- **DAG Detection**: The backend calculates the number of nodes/edges and performs a Depth-First Search (DFS) to determine if the pipeline is a Directed Acyclic Graph (DAG).
- **Feedback**: The user receives an alert with the analysis results upon clicking "Submit".

### Bonus Features

- **Delete Functionality**:
  - ❌ **Nodes**: Delete button (red '×') on hover for every node.
  - ❌ **Edges**: Custom `ButtonEdge` allows deleting connections by clicking the red '×' on the edge line.

## 🛠️ Setup & Running

### Prerequisites

- Node.js & npm
- Python 3.8+ & pip

### 1. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

The frontend will likely run on `http://localhost:5173`.

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
# Create virtual environment (optional but recommended)
python -m venv venv
# Windows
.\venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

# Install dependencies (fastapi, uvicorn)
pip install fastapi uvicorn multipart

# Run server
uvicorn main:app --reload
```

The backend will run on `http://127.0.0.1:8000`.

## 🧪 Usage Guide

1.  **Drag & Drop**: propert nodes from the top toolbar onto the dark canvas.
2.  **Connect**: Drag from a handle (dot) on one node to a handle on another.
3.  **Variables**: In a Text Node, type `{{myInput}}` to create a dynamic handle.
4.  **Delete**: Click the red '×' on nodes or edges to remove them.
5.  **Submit**: Click the "Submit" button in the header to run the backend analysis.

## 📂 Project Structure

- `frontend/src/components/nodes/`: Individual node components (Logic & Content).
- `frontend/src/components/ui/`: UI components like `BaseNode`, `ButtonEdge`.
- `frontend/src/store/`: Zustand state management (`useStore.jsx`).
- `backend/main.py`: FastAPI application with `parse_pipeline` logic.
