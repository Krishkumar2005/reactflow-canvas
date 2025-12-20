import {ReactFlow, Background, Controls, BackgroundVariant, applyEdgeChanges, applyNodeChanges, MiniMap, addEdge} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useUIStore } from '../store/uiStore';
import { useGraph } from '../hooks/useGraph';
import { useState, useEffect} from 'react';

export default function Canvas() {
  const appId = useUIStore((s) => s.selectedAppId);
  const setNode = useUIStore((s) => s.setNode);
  const { data } = useGraph(appId);
  const addNode = useUIStore((s) => s.addNode)
  const node = useUIStore((s) => s.nodes)
  const [nodes, setNodes] = useState(node || []);
  const [edges, setEdges] = useState(data?.edges || []);

  useEffect(() => {
    if (data) {
      addNode(data?.nodes)
      setNodes(node);
      setEdges(data.edges);
    }
  }, [data]);

  return (
    <ReactFlow
    
    onNodesChange={(changes) => setNodes((nds) => applyNodeChanges(changes, nds))}
    onEdgesChange={(changes) => setEdges((eds) => applyEdgeChanges(changes, eds))}

      nodes={nodes}
      edges={edges}
      onNodeClick={(e: React.MouseEvent, n) => setNode(n.id)}
      fitView
      className='dark'
       onConnect={(params) =>
    setEdges((eds) => addEdge(params, eds))
  }
    >
      <Background  variant={BackgroundVariant.Dots} gap={16} size={1} />
      <Controls className=''/>
       <MiniMap
      nodeColor={() => '#555'}
      maskColor="rgba(0,0,0,0.7)"
    />
    </ReactFlow>
  );
}
