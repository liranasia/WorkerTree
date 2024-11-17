import React from "react";
import WorkerTree from "../src/WorkerTree";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Jux</h1>
      <WorkerTree />
    </main>
  );
} 