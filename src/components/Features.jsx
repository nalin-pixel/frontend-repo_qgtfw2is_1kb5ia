import { Sparkles, Rocket, Shield, Workflow } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast Iteration',
    desc: 'Make changes and see them instantly with hot reload and live preview.'
  },
  {
    icon: Workflow,
    title: 'Backend-First',
    desc: 'APIs and data are set up before UI calls them, keeping things reliable.'
  },
  {
    icon: Shield,
    title: 'Safe Sandbox',
    desc: 'Everything runs isolated, so you can experiment without breaking things.'
  },
  {
    icon: Sparkles,
    title: 'Polished UI',
    desc: 'Preconfigured design system, icons, and animations to look great by default.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">What you get out of the box</h2>
          <p className="mt-3 text-gray-600">Everything you need to move from idea to live prototype in minutes, not days.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow transition-shadow">
              <div className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
