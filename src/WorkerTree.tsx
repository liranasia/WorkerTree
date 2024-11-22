'use client';

import React, { useState } from 'react';
import { WorkerCard } from './jux/components/WorkerCard';

// Define the structure of a worker in our tree
interface Worker {
  id: string;
  name: string;
  email: string;
  role: string;
  subworkers: Worker[];
}

// Implement useWorkerData custom hook
const useWorkerData = () => {
  const [workerTree] = useState<Worker>({
    id: '1',
    name: 'Tom Nipravsky',
    email: 'tom@jux.io',
    role: 'CEO',
    subworkers: [],
  });

  return { workerTree };
};

// Implement WorkerNode component
const WorkerNode: React.FC<{ worker: Worker }> = React.memo(({ worker }) => {
  return <WorkerCard></WorkerCard>;
});

WorkerNode.displayName = 'WorkerNode';

// Main WorkerTree component
export default function WorkerTree() {
  const workerData = useWorkerData();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Company Structure</h1>
      <WorkerNode worker={workerData.workerTree} />
    </div>
  );
}
