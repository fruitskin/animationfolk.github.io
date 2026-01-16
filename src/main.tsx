// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold">Design Holding Page</h1>
        <p className="mt-2 text-neutral-400">
          Vite + React are configured. Replace this with your content.
        </p>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element in index.html');
createRoot(container).render(<App />);

