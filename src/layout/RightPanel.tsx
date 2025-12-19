import { useApps } from '../hooks/useApps';
import { useUIStore } from '../store/uiStore';
import Inspector from '../inspector/Inspector';
import { Sheet, SheetContent } from '@/components/ui/sheet';

export default function RightPanel() {
  const { data, isLoading, error } = useApps();
  const setApp = useUIStore((s) => s.setApp);
  const selectedAppId = useUIStore((s) => s.selectedAppId);
  const isMobileOpen = useUIStore((s) => s.isMobilePanelOpen);
  const toggle = useUIStore((s) => s.togglePanel);

  const content = (
    <div className="w-80 p-3 bg-background overflow-auto mt-10">
      <h3 className="text-xl font-bold  mb-2">Applications</h3>

      {isLoading && <p className="text-sm">Loading...</p>}
      {error && <p className="text-sm text-red-500">Failed to load apps</p>}

      <select name='Applications' className='border-white mb-16 border-2 border-solid py-2 mt-2 px-6 rounded ' onChange={(e) => setApp(e.target.value)}>
        <option value="" hidden selected disabled>-- Select an app --</option>
          {data?.map((app) => (
        <option
        value={app.name}
          key={app.id}
          className={`bg-black w-full text-left px-6 py-2 rounded-lg text-sm mb-1 font-serif ${
            selectedAppId === app.id ? 'bg-muted' : 'hover:bg-muted'
          }`}
        >
          {app.name}
        </option>
      ))}
        
      </select>

      <div className="mt-4 border-t pt-3">
        <Inspector />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block border-l">
        {content}
      </div>

      {/* Mobile – SHEET */}
      <Sheet open={isMobileOpen} onOpenChange={toggle}>
        <SheetContent side="right" className="p-0 dark">
          {content}
        </SheetContent>
      </Sheet>
    </>
  );
}
