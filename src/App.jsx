import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="demo" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Live Demo</h2>
              <p className="mt-2 text-gray-600">This project is wired with React, Tailwind, icons, and a 3D canvas. Start editing and watch changes update instantly.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 p-6">
                  <h3 className="font-semibold">Frontend Ready</h3>
                  <p className="mt-2 text-sm text-gray-700">Vite + React + Tailwind are set up for fast iteration.</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-6">
                  <h3 className="font-semibold">Backend Friendly</h3>
                  <p className="mt-2 text-sm text-gray-700">When you need APIs or data, well add endpoints first, then hook up the UI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
