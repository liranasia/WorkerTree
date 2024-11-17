'use client';

import React, { createContext, useContext, useState } from 'react';

// Define the structure of a worker in our tree
interface Worker {
  id: string;
  name: string;
  email: string;
  role: string;
  subworkers: Worker[];
}

// Initial data structure
const initialData: Worker = {
  id: '1',
  name: 'Tom',
  email: 'tom@jux.io',
  role: 'CEO',
  subworkers: [],
};

// TODO: Create WorkerContext

// TODO: Implement useWorkerTree custom hook

// TODO: Implement useWorkerData custom hook
const useWorkerData = () => {
  const [workerTree, setWorkerTree] = useState<Worker>(initialData);

  // TODO: Implement addSubworker function
  // This function should add a new subworker to the specified worker
  // It should validate the input (name: only letters, email: valid email format)

  // TODO: Implement calculatePaycheck function
  // This function should calculate the paycheck based on the number of subworkers in the tree

  // return { workerTree, addSubworker, calculatePaycheck }
  // return { workerTree, addSubworker, calculatePaycheck }
};

// TODO: Implement WorkerNode component
// This component should render a worker and its subworkers
// It should include a form to add a new subworker
// It should display the worker's paycheck

// Main WorkerTree component
export default function WorkerTree() {
  const workerData = useWorkerData();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Company Structure</h1>
      {/* TODO: Render the worker tree here */}
    </div>
  );
}
