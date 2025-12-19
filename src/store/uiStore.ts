import { create } from 'zustand';

type Tab = 'config' | 'runtime';

interface UIState {
  selectedAppId: string | null;
  selectedNodeId: string | null;
  isMobilePanelOpen: boolean;
  activeTab: Tab;
  setApp(id: string): void;
  setNode(id: string | null): void;
  togglePanel(): void;
  setTab(tab: Tab): void;
}

export const useUIStore = create<UIState>((set) => ({
  selectedAppId: null,
  selectedNodeId: null,
  isMobilePanelOpen: false,
  activeTab: 'config',
  setApp: (id) => set({ selectedAppId: id }),
  setNode: (id) => set({ selectedNodeId: id }),
  togglePanel: () => set((s) => ({ isMobilePanelOpen: !s.isMobilePanelOpen })),
  setTab: (tab) => set({ activeTab: tab }),
}));
