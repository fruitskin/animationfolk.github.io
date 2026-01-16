// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';

// If you want Tailwind utilities, import a minimal CSS file with the Tailwind v4 plugin:
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-900">
      {/* Top navigation */}
      <header className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <nav className="hidden md:flex gap-6 text-sm">
          <a className="hover:text-slate-700" href="#home">Home</a>
          <a className="hover:text-slate-700" href="#about">About</a>
          <a className="hover:text-slate-700" href="#team">Team</a>
        </nav>
        {/* Optional: add a small logo in the top-left by placing an image in public/icons/logo.svg */}
        {/* <img src="/icons/logo.svg" alt="Animation Folk" className="h-6 w-auto" /> */}
      </header>

      {/* Hero section */}
      <main className="container mx-auto max-w-6xl px-6 pt-16 pb-24 text-center">
        {/* Title with gradient */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-600 to-indigo-600">
            Animation
          </span>{' '}
          <span className="text-blue-600">Folk</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl text-slate-600">
          Web 3.0 3D &amp; Game Animation
        </p>

        {/* Tagline */}
        <p className="mt-8 text-base sm:text-lg text-slate-700">
          Something extraordinary is coming
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="mailto:hello@animationfolk.com"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get in Touch
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="container mx-auto max-w-6xl px-6 py-6 text-center text-sm text-slate-500">
          © 2026 Animation Folk. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element in index.html');
createRoot(container).render(<App />);
