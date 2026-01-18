from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    try:
        pipeline_data = json.loads(pipeline)
        nodes = pipeline_data.get('nodes', [])
        edges = pipeline_data.get('edges', [])
        
        num_nodes = len(nodes)
        num_edges = len(edges)
        print(nodes)
        print(edges)
        
        # Build adjacency list
        adj = {node['id']: [] for node in nodes}
        for edge in edges:
            source = edge['source']
            target = edge['target']
            if source in adj:
                adj[source].append(target)
            
        # check for cycles (DAG) using DFS
        visited = set()
        recursion_stack = set()
        
        def has_cycle(node_id):
            visited.add(node_id)
            recursion_stack.add(node_id)
            
            if node_id in adj:
                for neighbor in adj[node_id]:
                    if neighbor not in visited:
                        if has_cycle(neighbor):
                            return True
                    elif neighbor in recursion_stack:
                        return True
            
            recursion_stack.remove(node_id)
            return False
            
        is_dag = True
        for node in nodes:
            if node['id'] not in visited:
                if has_cycle(node['id']):
                    is_dag = False
                    break
        
        return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
    except Exception as e:
        return {'error': str(e)}
