import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6H1cYGZJ1K6d7q3F/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Build, run, and preview apps instantly
        </h1>
        <p className="mt-4 text-gray-600 md:text-lg">
          An AI-powered sandbox that wires up frontend and backend for you. Edit, save, and see results live.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#demo" className="inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-md hover:bg-black transition-all">
            Launch Demo
          </a>
          <a href="#features" className="inline-flex items-center rounded-md bg-white/80 backdrop-blur px-5 py-3 text-sm font-semibold shadow ring-1 ring-black/5 hover:bg-white transition-all">
            Explore Features
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
