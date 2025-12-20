import { type Node, type Edge, Position } from '@xyflow/react';

export const fetchGraph = async (): Promise<{ nodes: Node[]; edges: Edge[] }> => {
  await new Promise((r) => setTimeout(r, 700));


  //real API failure simulation
  if (Math.random() < 0.2) throw new Error('Failed');

  return {
    nodes: [
      { id: '1', position: { x: 0, y: 0 }, data: { label: 'API', load: 40 }, type: 'default', sourcePosition: Position.Top,
    targetPosition: Position.Bottom},
      { id: '2', position: { x: 250, y: 0 }, data: { label: 'Postgres', load: 70 }, type: 'default', sourcePosition: Position.Top,
    targetPosition: Position.Bottom},
      { id: '3', position: { x: 120, y: 150 }, data: { label: 'Redis', load: 20 }, type: 'default', sourcePosition: Position.Top,
    targetPosition: Position.Bottom },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' }, 
    ],
  };
};
