import TopBar from './layout/TopBar';
import LeftRail from './layout/LeftRail';
import RightPanel from './layout/RightPanel';
import Canvas from './canvas/Canvas';

export default function App() {
  return (
    <div className="h-screen grid grid-rows-[48px_1fr] dark">
      <TopBar />
      <div className="grid grid-cols-[56px_1fr_320px]">
        <LeftRail />
        <Canvas />
        <RightPanel />
      </div>
    </div>
  );
}
