import { Rocket, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Vibe Coding</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#demo" className="hover:text-gray-900 transition-colors">Live Demo</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            aria-label="GitHub repository"
          >
            <Github size={18} />
          </a>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md hover:bg-black transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
