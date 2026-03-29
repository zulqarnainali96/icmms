import { ArrowRight, CheckCircle, Leaf, BarChart3, Battery, Recycle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SustainabilityProps {
  onNavigate: (page: string) => void;
}

export default function Sustainability({ onNavigate }: SustainabilityProps) {
  useScrollAnimation();

  const pillars = [
    {
      icon: <Leaf size={20} className="text-green-500" />,
      title: 'Reduce waste from rework',
      desc: 'Earlier detection and consistent execution reduce repeat incidents and unnecessary rework across sites.',
    },
    {
      icon: <Battery size={20} className="text-brand-blue" />,
      title: 'Extend asset lifecycle',
      desc: 'Telemetry-driven early detection and lifecycle evidence help teams repair rather than replace unnecessarily.',
    },
    {
      icon: <BarChart3 size={20} className="text-brand-purple" />,
      title: 'Traceable evidence',
      desc: 'Every sustainability initiative is backed by structured operational data—ready for reporting and audits.',
    },
    {
      icon: <Recycle size={20} className="text-brand-pink" />,
      title: 'Near intended performance',
      desc: 'Thresholds keep systems operating near intended efficiency—flagging drift before it becomes waste.',
    },
  ];

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="bg-brand-dark pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">Sustainability</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
            Operational excellence<br />reduces waste at scale
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            Earlier detection and consistent execution reduce waste and extend asset life.
            iCMMS provides the structured evidence base for sustainability programs and reporting.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Asset lifecycle', 'Energy efficiency', 'Evidence-backed reporting', 'Threshold automation'].map((b) => (
              <span key={b} className="px-3 py-1.5 bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium rounded-full">
                ● {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-10">
            How iCMMS supports sustainability programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-brand-light rounded-2xl p-6 border border-gray-100 shadow-sm`}
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-8">Sustainability outcomes</h2>
          <div className="animate-on-scroll bg-white rounded-2xl p-8 border border-gray-200">
            <ul className="space-y-3">
              {[
                'Reduce waste from repeat incidents and rework',
                'Extend asset life through early detection and consistency',
                'Traceable evidence for sustainability initiatives',
                'Thresholds keep systems near intended performance',
                'Portfolio-level oversight for environmental reporting',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll bg-gradient-to-br from-green-900/80 to-brand-dark rounded-2xl p-8 md:p-10 text-white">
            <h2 className="text-2xl font-bold mb-3">Build a sustainability evidence base</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl">
              We'll walk through your portfolio and show how iCMMS captures the operational data your
              sustainability programs need.
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="px-5 py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg flex items-center gap-2 w-fit"
            >
              Book a demo <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
