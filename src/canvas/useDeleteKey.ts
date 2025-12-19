import { useEffect } from 'react';

export const useDeleteKey = (
  selectedNodeId: string | null,
  deleteNode: (id: string) => void
) => {
  console.log("useDeleteKey called")
  useEffect(() => {
    console.log("useeffect")
    const handler = (e: KeyboardEvent) => {
      if ((e.key === 'Backspace' || e.key === 'Delete') && selectedNodeId) {
        console.log(e.key)
        deleteNode(selectedNodeId);
      }
    };
    window.addEventListener('keydown', handler);

    //cleanup process
    return () => window.removeEventListener('keydown', handler);
  }, [selectedNodeId, deleteNode]);
};
