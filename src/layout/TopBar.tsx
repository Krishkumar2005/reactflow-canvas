import { Button } from '@/components/ui/button';
import { useUIStore } from '../store/uiStore';

export default function TopBar() {
  const togglePanel = useUIStore((s) => s.togglePanel);

  return (
    <div className="h-12 px-4 flex items-center justify-between border-b bg-background">
      <span className="font-semibold">App Graph Builder</span>

      <div className="flex gap-2">
        {/* Mobile only: opens Sheet */}
        <Button
          size="sm"
          variant="outline"
          className="md:hidden"
          onClick={togglePanel}
        >
          Panel
        </Button>

        {/* Desktop: placeholder action */}
        <Button
          size="sm"
          variant="outline"
          className="hidden md:inline-flex"
        >
          Fit View
        </Button>
      </div>
    </div>
  );
}
