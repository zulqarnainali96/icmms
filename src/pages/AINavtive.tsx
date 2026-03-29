import { ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AINavtiveProps {
  onNavigate: (page: string) => void;
}

export default function AINavtive({ onNavigate }: AINavtiveProps) {
  useScrollAnimation();

  const intelligenceCards = [
    {
      title: 'Asset auto-enrichment',
      desc: 'AI uses manufacturer + model to pull reference details and manuals from trusted sources, so teams can build accurate asset registers faster.',
      badge: 'Reviewable · Cited sources',
      color: 'text-brand-blue',
    },
    {
      title: 'Spare obsolescence watch',
      desc: 'AI monitors manufacturer notices for at-risk spare parts and updates the catalog so teams can see flagged items + manufacturers\' proactive action lists.',
      badge: '24/7 monitoring · Impact lists',
      color: 'text-brand-purple',
    },
    {
      title: 'Document Q&A (RAG)',
      desc: 'Ask questions across organisation documents and asset evidence. Answers include citations back to the exact source.',
      badge: 'Citations · Permission aware',
      color: 'text-brand-pink',
    },
    {
      title: 'Agents across DB + APIs',
      desc: 'Agents answer questions across your operational database and approved integrations, then draft summaries and recommended actions.',
      badge: 'Propose → Review → Execute',
      color: 'text-brand-blue',
    },
    {
      title: 'Management bulletins',
      desc: 'Auto-generated bulletins highlight repeat failures, backlog risk, renewals, spare issues, and site trends—with sources.',
      badge: 'Portfolio-wide · Cited',
      color: 'text-brand-purple',
    },
    {
      title: 'Predictive signals (IoT + history)',
      desc: 'Connect telemetry with meters and work history to estimate risk and time-to-failure—supporting planned maintenance and lifecycle strategy.',
      badge: 'Risk estimates · Not black-box',
      color: 'text-brand-pink',
    },
  ];

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="bg-brand-dark pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">AI Native</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
            AI-native by design —<br />not retrofitted
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            iCMMS captures structured operational knowledge across execution workflows—so agents can
            produce cited insights and assist humans with confidence.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Institutional knowledge',
              'Operator assistance',
              'Management bulletins',
              'Predictive signals',
            ].map((b) => (
              <span key={b} className="px-3 py-1.5 bg-brand-blue/10 border border-brand-blue/25 text-brand-blue text-xs font-medium rounded-full">
                ● {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LEGACY vs HOW iCMMS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left */}
            <div className="animate-on-scroll bg-red-50 rounded-2xl p-8 border border-red-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Why legacy data fails for AI</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                AI is only as reliable as the data behind it. In many portals, operations data is fragmented
                across notes, spreadsheets, and detached PDFs—making inference brittle and hard to trust.
              </p>
              <ul className="space-y-3">
                {[
                  'Free-text notes replace structured capture',
                  "Documents aren't linked to assets and events",
                  'No consistent relationship model between objects',
                  'Limited evidence trails for audits and learning',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-red-100 border border-red-300 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="animate-on-scroll animate-on-scroll-delay-1 bg-brand-dark rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-3">How iCMMS enables reliable agents</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                iCMMS is built as a structured operations graph where assets are the spine. Every workflow
                produces linked, validated records with evidence.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Structured templates', sub: 'MOP steps, rounds, checklists' },
                  { label: 'Evidence', sub: 'Docs + photos + video' },
                  { label: 'Linked objects', sub: 'Asset → WO → Incident → spares' },
                  { label: 'Governance', sub: 'Access control + versioning' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-medium">{item.label}: </span>
                      <span className="text-gray-400 text-sm">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE LAYER ── */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="animate-on-scroll text-3xl font-bold text-gray-900 mb-3">Intelligence layer</h2>
            <p className="animate-on-scroll text-gray-500 text-sm max-w-2xl">
              AI capabilities that directly support your pillars:{' '}
              <span className="text-brand-blue font-medium">knowledge retention</span>,{' '}
              <span className="text-brand-purple font-medium">operator productivity</span>,{' '}
              <span className="text-brand-pink font-medium">management insight</span>, and{' '}
              <span className="text-brand-blue font-medium">lifecycle value</span>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {intelligenceCards.map((card, i) => (
              <div
                key={card.title}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
              >
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{card.desc}</p>
                <span className={`text-xs font-semibold ${card.color} bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100`}>
                  {card.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATOR ASSISTANCE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll bg-gradient-to-br from-brand-dark to-brand-darker rounded-2xl p-8 md:p-10 text-white">
            <h2 className="text-2xl font-bold mb-3">Operator assistance: video → work order</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl">
              Operators capture a short video in the field; vision models draft a work order with clear
              descriptions and supporting evidence—reducing dispatch time and improving consistency.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Faster intake', 'Better descriptions', 'Evidence attached'].map((b) => (
                <span key={b} className="px-3 py-1.5 bg-brand-blue/15 border border-brand-blue/30 text-brand-blue text-xs font-medium rounded-full">
                  ● {b}
                </span>
              ))}
            </div>
            <button
              onClick={() => onNavigate('platform')}
              className="px-5 py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg flex items-center gap-2 w-fit"
            >
              See how it works <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE ── */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-3">Governance</h2>
            <p className="animate-on-scroll text-gray-500 text-sm leading-relaxed mb-6">
              <span className="font-semibold text-gray-700">Agents propose; people approve.</span>{' '}
              All outputs respect access control and include citations where applicable.
            </p>
            <ul className="space-y-3">
              {[
                'Site-level RBAC and permission-aware responses',
                'Version-controlled documents with auto archive',
                'System change visibility + notifications',
              ].map((item) => (
                <li key={item} className="animate-on-scroll flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle size={15} className="text-brand-blue flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
