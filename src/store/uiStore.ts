import { Position } from '@xyflow/react';
import { create } from 'zustand';
import { type Node } from '@xyflow/react';

type Tab = 'config' | 'runtime';

//custom shape of graph node object
// interface NodeData {
//   label: string,
//   load: number
// }

// interface graphNode {
//   id: string,
//   position: {
//     x: number,
//     y: number
//   },
//   data: NodeData,
//   type: "default" | string,
//   sourcePosition: Position,
//   targetPosition: Position
// }

interface UIState {
  nodes: Node[]
  selectedAppId: string | null;
  selectedNodeId: string | null;
  isMobilePanelOpen: boolean;
  activeTab: Tab;
  addNode(node: Node[]): void;
  editNodeLabel(label: string): void
  setApp(id: string): void;
  setNode(id: string | null): void;
  togglePanel(): void;
  setTab(tab: Tab): void;
}

export const useUIStore = create<UIState>((set) => ({
  nodes: [
    {
      id: '1', position: { x: 0, y: 0 }, data: { label: 'API', load: 40 }, type: 'default', sourcePosition: Position.Top,
      targetPosition: Position.Bottom
    },
    {
      id: '2', position: { x: 250, y: 0 }, data: { label: 'Postgres', load: 70 }, type: 'default', sourcePosition: Position.Top,
      targetPosition: Position.Bottom
    },
    {
      id: '3', position: { x: 120, y: 150 }, data: { label: 'Redis', load: 20 }, type: 'default', sourcePosition: Position.Top,
      targetPosition: Position.Bottom
    },
  ],
  selectedAppId: null,
  selectedNodeId: null,
  isMobilePanelOpen: false,
  activeTab: 'config',
  addNode: (node: Node[]) => set((prev) => ({nodes: [...node, ...prev.nodes]})),
  editNodeLabel: ( label: string) => set((prev) => ({
    
    nodes: prev.nodes.map((n) => 
    n.id === prev.selectedNodeId? {...n, data: {...n.data, label}}: n
    )
  })),
  setApp: (id) => set({ selectedAppId: id }),
  setNode: (id) => set({ selectedNodeId: id }),
  togglePanel: () => set((s) => ({ isMobilePanelOpen: !s.isMobilePanelOpen })),
  setTab: (tab) => set({ activeTab: tab }),
}));
