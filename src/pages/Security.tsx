import { ArrowRight, CheckCircle, Lock, RotateCcw, Eye } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SecurityProps {
  onNavigate: (page: string) => void;
}

export default function Security({ onNavigate }: SecurityProps) {
  useScrollAnimation();

  const cards = [
    {
      icon: <Lock size={20} className="text-brand-blue" />,
      title: 'Access control',
      items: ['RBAC by company and site', 'Teams and approvals', 'Permission-aware AI outputs'],
    },
    {
      icon: <RotateCcw size={20} className="text-brand-purple" />,
      title: 'Version control',
      items: ['Auto versioning + archive', 'Evidence stays traceable', 'Attachments linked to work'],
    },
    {
      icon: <Eye size={20} className="text-brand-pink" />,
      title: 'Transparency',
      items: ['Instant notifications', 'Work-order chats', 'System change visibility'],
    },
  ];

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="bg-brand-dark pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">
            Security &amp; Governance
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
            Control, traceability, and audit readiness
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-xl">
            Site-scoped access control, versioned evidence, and operational transparency for
            mission-critical work.
          </p>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-brand-light rounded-2xl p-7 border border-gray-100 shadow-sm`}
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{card.title}</h3>
                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={13} className="text-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIT READY ── */}
      <section className="py-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll bg-gradient-to-br from-brand-dark to-brand-darker rounded-2xl p-8 md:p-10 text-white">
            <h2 className="text-2xl font-bold mb-3">Audit-ready reporting</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
              Generate reports across{' '}
              <span className="text-brand-blue">work</span>,{' '}
              <span className="text-brand-blue">procedures</span>,{' '}
              <span className="text-brand-blue">rounds</span>,{' '}
              <span className="text-brand-blue">incidents</span>,{' '}
              <span className="text-brand-blue">spares</span>, and{' '}
              <span className="text-brand-blue">contracts</span>—
              <span className="text-brand-pink">backed</span> by timestamps and{' '}
              <span className="text-brand-pink">evidence attachments</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('home')}
                className="px-5 py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg flex items-center gap-2"
              >
                Book a demo <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onNavigate('platform')}
                className="px-5 py-2.5 text-sm font-semibold text-gray-300 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore platform
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
