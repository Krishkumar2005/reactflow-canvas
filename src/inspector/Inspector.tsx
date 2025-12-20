import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useUIStore } from '../store/uiStore';
import { useState } from 'react';

export default function Inspector() {
  const nodeId = useUIStore((s) => s.selectedNodeId);
  const tab = useUIStore((s) => s.activeTab);
  const setTab = useUIStore((s) => s.setTab);
  const editNodeLabel = useUIStore((s) => s.editNodeLabel)
  const [load, setLoad] = useState<number| null>(40)

  
  if (!nodeId) return <div>Select a node</div>;

  return (
    <>
      <Badge className='mb-4'>Healthy</Badge>

      <Tabs value={tab} onValueChange={(v) => setTab(v as any)}>
        <TabsList>
          <TabsTrigger value="config">Config</TabsTrigger>
          <TabsTrigger value="runtime">Runtime</TabsTrigger>
        </TabsList>

        <TabsContent value="config" className='mt-4'>
          <Input type='text'  placeholder="Service name" className='mb-3' onChange={(e) => editNodeLabel((e.target.value).toString())}/>
          <Slider min={Number(0)} value={[Number(load)]} max={100} className='mb-3' onValueChange={(e) => setLoad(e[0])}/>
          <Input value={Number(load)} type="number" onChange={(e) => setLoad(Number(e.target.value))}/>
        </TabsContent>
      </Tabs>
    </>
  );
}
