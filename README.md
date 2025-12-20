# ReactFlow Canvas - App Graph Builder

A small, responsive **App Graph Builder** UI demonstrating ReactFlow basics, Zustand state management, TanStack Query mock APIs, and a service node inspector UI.

---

## 📦 Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/Krishkumar2005/reactflow-canvas.git
cd reactflow-canvas
Install dependencies

bash
Copy code
npm install
# or
yarn install
Run development server

bash
Copy code
npm run dev
# or
yarn dev
Build for production

bash
Copy code
npm run build
# or
yarn build
Preview production build

bash
Copy code
npm run preview
# or
yarn preview
Lint & type check

bash
Copy code
npm run lint
npm run typecheck
🧠 Key Decisions (Brief)
React + TypeScript (strict): type-safe, modern frontend with Vite for fast development.

ReactFlow (xyflow): handles node/edge rendering, drag, pan, zoom, selection.

Zustand: minimal, reactive state for selectedAppId, selectedNodeId, mobile panel, and activeInspectorTab.

TanStack Query: mock API fetching with caching, loading, and error states.

shadcn/ui: consistent UI components (Tabs, Slider, Input, Badge, Button).

Mock APIs: implemented via setTimeout returning Promises; no real backend needed.

Responsive layout: right panel becomes a mobile slide-over drawer.

⚠️ Known Limitations
Mobile responsiveness may need further fine-tuning on very small screens.

Canvas does not persist data between reloads (no backend persistence).

Node deletion only works via Delete/Backspace, no undo implemented.

Error handling in mock APIs is minimal (can simulate via toggles).

No unit/integration tests yet.

Performance may degrade with very large graphs (>100 nodes).

🧰 Tech Stack
Frontend: React + Vite + TypeScript (strict)

Canvas: ReactFlow (nodes + edges + interactions)

UI Components: shadcn/ui

State Management: Zustand

Data Fetching: TanStack Query (mock APIs)

Styling: Tailwind CSS
