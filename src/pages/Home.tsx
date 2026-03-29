import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Cpu, LayoutGrid, Link2, Shield, TrendingUp, Workflow } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  useScrollAnimation();
  const [activeTab, setActiveTab] = useState('digital-mops');

  const tabs = [
    { id: 'rounds', label: 'Rounds & meters' },
    { id: 'incidents', label: 'Incidents' },
    { id: 'work-orders', label: 'Work orders' },
    { id: 'digital-mops', label: 'Digital MOPs' },
    { id: 'spares', label: 'Spares' },
    { id: 'contracts', label: 'Contracts' },
    { id: 'ai-bulletins', label: 'AI bulletins' },
  ];

  const pillars = [
    {
      icon: <Cpu size={20} className="text-brand-blue" />,
      title: 'Retain institutional knowledge',
      desc: 'Turn expertise into searchable operational memory—cited and tied to assets, MOPs, and history.',
    },
    {
      icon: <Workflow size={20} className="text-brand-purple" />,
      title: 'Assist operators',
      desc: 'Mobile execution, video-to-work-order, guided checklists, work-order chat, instant notifications.',
    },
    {
      icon: <TrendingUp size={20} className="text-brand-pink" />,
      title: 'Expose blind spots at scale',
      desc: 'Agents produce leadership bulletins across sites—repeat failures, backlog risk, renewals, spares risk.',
    },
    {
      icon: <Link2 size={20} className="text-brand-blue" />,
      title: 'Extend asset lifecycle value',
      desc: 'Meters + IoT + history enable risk/time-to-failure estimates and lifecycle evidence for repair/replace.',
    },
    {
      icon: <LayoutGrid size={20} className="text-brand-purple" />,
      title: 'One portal for all workflows',
      desc: 'Eliminate tool sprawl, duplicate data, and heavy training—one system across teams and sites.',
    },
    {
      icon: <Shield size={20} className="text-brand-pink" />,
      title: 'Agentic workflows, future-proof',
      desc: 'AI-driven agents adapt as devices and operational technology evolve—device independent on web or mobile.',
    },
  ];

  // Staggered hero animation on mount
  useEffect(() => {
    const els = document.querySelectorAll('.hero-animate');
    els.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('in-view');
      }, i * 120);
    });
  }, []);

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="relative isolate bg-brand-dark pt-16 pb-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] overflow-hidden">
          <div className="neon-hero-glow neon-hero-glow-blue" />
          <div className="neon-hero-glow neon-hero-glow-purple" />
          <div className="neon-pipe-grid">
            <div className="neon-pipe neon-pipe-blue">
              <div className="neon-pipe-node neon-pipe-node-blue neon-pipe-node-delay-1" />
            </div>
            <div className="neon-pipe neon-pipe-cyan neon-pipe-short">
              <div className="neon-pipe-node neon-pipe-node-cyan neon-pipe-node-delay-2" />
            </div>
            <div className="neon-pipe neon-pipe-purple">
              <div className="neon-pipe-node neon-pipe-node-purple neon-pipe-node-delay-3" />
            </div>
            <div className="neon-pipe neon-pipe-blue neon-pipe-short">
              <div className="neon-pipe-node neon-pipe-node-blue neon-pipe-node-delay-4" />
            </div>
            <div className="neon-pipe neon-pipe-purple">
              <div className="neon-pipe-node neon-pipe-node-purple neon-pipe-node-delay-5" />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 via-brand-blue/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="pb-16 pt-4">
              <div className="hero-animate animate-on-scroll opacity-0 translate-y-0">
                <span className="inline-block px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-semibold rounded-full uppercase tracking-wider mb-5">
                  AI-Native Operations
                </span>
              </div>
              <h1 className="hero-animate animate-on-scroll text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                AI-native CMMS for<br />mission-critical<br />data centers.
              </h1>
              <p className="hero-animate animate-on-scroll text-gray-400 text-base leading-relaxed mb-7 max-w-lg">
                iCMMS captures structured, linked, evidence-backed operational data across work orders,
                digital MOPs, rounds, incidents, spares, and contracts—so AI agents can retain
                institutional knowledge, assist operators, expose blind spots at scale, and extend asset life.
              </p>
              <div className="hero-animate animate-on-scroll flex flex-wrap gap-3 items-center mb-8">
                <button
                  onClick={() => onNavigate('use-cases')}
                  className="px-5 py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg flex items-center gap-2"
                >
                  Book a demo <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => onNavigate('ai-native')}
                  className="px-5 py-2.5 text-sm font-semibold text-brand-blue border border-brand-blue/50 rounded-lg hover:bg-brand-blue/10 transition-colors"
                >
                  See AI in action
                </button>
                <div className="flex items-center gap-3 text-gray-500 text-xs ml-1">
                  <span className="flex items-center gap-1"><CheckCircle size={12} className="text-brand-blue" /> Web · Mobile</span>
                  <span className="flex items-center gap-1"><CheckCircle size={12} className="text-brand-blue" /> Audit-ready</span>
                </div>
              </div>
              <div className="hero-animate animate-on-scroll grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                  { title: 'End-to-end workflows', desc: 'Work orders, MOPs, rounds, incidents, spares, vendors, contracts, reporting.' },
                  { title: 'Structured capture', desc: 'Templates, linked records, evidence and version control enable reliable agents.' },
                  { title: 'Mission-critical focus', desc: 'Designed by people who understand operational constraints and audits.' },
                ].map((f) => (
                  <div key={f.title}>
                    <p className="text-white text-xs font-semibold mb-1">{f.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Mock UI card */}
            <div className="hero-animate animate-on-scroll relative lg:pt-4 pb-0">
              <div className="bg-brand-darker rounded-t-2xl border border-white/10 border-b-0 p-4 shadow-2xl">
                {/* Asset record */}
                <div className="bg-brand-dark rounded-xl p-3.5 mb-2.5 border border-white/8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-brand-blue font-medium uppercase tracking-wide">Asset record</span>
                    <span className="px-2 py-0.5 bg-green-500/15 text-green-400 text-xs rounded-full border border-green-500/20">● Healthy</span>
                  </div>
                  <p className="text-white font-semibold text-sm">UPS - Model XR-9000</p>
                  <p className="text-gray-500 text-xs mt-0.5">Serial: 5001 · Site: Toronto-01</p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  {/* Work order */}
                  <div className="bg-brand-dark rounded-xl p-3 border border-white/8">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-brand-blue font-medium">Work order</span>
                      <span className="px-2 py-0.5 bg-orange-500/15 text-orange-400 text-xs rounded-full border border-orange-500/20">Due 3d</span>
                    </div>
                    <p className="text-gray-300 text-xs leading-snug">Hot battery string inspection · Checklist + photos required</p>
                  </div>
                  {/* Incident */}
                  <div className="bg-brand-dark rounded-xl p-3 border border-white/8">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-brand-blue font-medium">Incident</span>
                      <span className="px-2 py-0.5 bg-gray-500/15 text-gray-400 text-xs rounded-full border border-gray-500/20">● Closed</span>
                    </div>
                    <p className="text-gray-300 text-xs leading-snug">Alarm: Voltage drift → linked corrective WO + parts used</p>
                  </div>
                </div>

                {/* Meter trend */}
                <div className="bg-brand-dark rounded-xl p-3.5 mb-2.5 border border-white/8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-brand-blue font-medium">Meter trend</span>
                    <span className="px-2 py-0.5 bg-blue-500/15 text-blue-400 text-xs rounded-full border border-blue-500/20">● Stable</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">Runtime hours + temperature readings over last 30 days</p>
                  <svg viewBox="0 0 260 36" className="w-full h-7">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#4F87FF" />
                        <stop offset="100%" stopColor="#9F7AEA" />
                      </linearGradient>
                    </defs>
                    <path d="M0,28 C20,25 40,22 70,20 S110,16 140,18 S190,13 230,9 S250,7 260,6" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Agent Bulletin */}
                <div className="bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-xl p-3.5 border border-brand-blue/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-brand-purple font-semibold uppercase tracking-wide">Agent Bulletin</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-white text-xs font-medium">Portfolio risks · Weekly</span>
                      <span className="px-1.5 py-0.5 bg-brand-darker text-gray-400 text-xs rounded">Draft</span>
                    </div>
                  </div>
                  {[
                    { label: 'Repeat failures', badge: '3 sites', color: 'text-red-400', desc: 'CRAC fan: 6 incidents after same part swap → investigate vendor list.', src: 'Incident #418, WO #1621, Spares cat# FC 77' },
                    { label: 'Spares risk', badge: 'Obsolescence', color: 'text-yellow-400', desc: 'Battery module tier-G2 flagged by manufacturer → early alternate plan.', src: 'OEM notice, Inventory #485' },
                    { label: 'Contract renewals', badge: '30–60 days', color: 'text-brand-blue', desc: 'Generator SLA renewal due → MTTR-507 on Vendor X: recommend review.', src: null },
                  ].map((item) => (
                    <div key={item.label} className="mb-2.5 last:mb-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-gray-300 text-xs font-medium">{item.label}</span>
                        <span className={`text-xs font-medium ${item.color}`}>{item.badge}</span>
                      </div>
                      <p className="text-gray-400 text-xs leading-snug mb-1">{item.desc}</p>
                      {item.src && (
                        <span className="inline-block px-2 py-0.5 bg-brand-blue/10 text-brand-blue text-xs rounded">
                          Sources: {item.src}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGACY vs iCMMS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="animate-on-scroll text-3xl font-bold text-gray-900 mb-4">
              Legacy portals weren't built for AI.
            </h2>
            <p className="animate-on-scroll text-gray-500 leading-relaxed mb-5">
              When data lives in free-text notes, sliced PDFs, and disconnected systems, AI can't reason reliably.
              iCMMS captures{' '}
              <span className="text-brand-blue font-medium">structured operational knowledge</span> at the source—so
              models and agents can assist with confidence.
            </p>
            <div className="animate-on-scroll flex flex-wrap gap-2">
              {['Structured templates', 'Evidence capture', 'Linked asset graph'].map((b) => (
                <span key={b} className="px-3 py-1 bg-brand-blue/8 border border-brand-blue/20 text-brand-blue text-xs font-medium rounded-full">
                  ● {b}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Legacy */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="font-semibold text-gray-800 mb-4">Legacy CMMS</h3>
              {[
                'Unstructured notes and inconsistent naming',
                'Documents detached from execution context',
                'Weak links between parts, incidents, contracts',
                'AI becomes "chat on top of chaos"',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 mb-3 last:mb-0">
                  <span className="w-4 h-4 rounded-full bg-red-100 border border-red-300 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
            {/* iCMMS */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-semibold text-gray-800 mb-4">iCMMS</h3>
              {[
                'Validated rounds, meters, MOP steps, checklists',
                'Sectioned documents with photos/video as evidence',
                'Chronological asset timelines across workflows',
                'Agents produce cited, reviewable outputs',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 mb-3 last:mb-0">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SIX PILLARS ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-3xl font-bold text-gray-900 mb-12 text-center">
            Six pillars for AI-native operations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW MAP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="animate-on-scroll text-3xl font-bold text-gray-900 mb-2">
              One portal workflow map
            </h2>
            <p className="animate-on-scroll text-brand-blue text-sm font-medium">
              From field execution to lifecycle intelligence—without switching tools.
            </p>
          </div>

          {/* Tabs */}
          <div className="animate-on-scroll flex gap-1 overflow-x-auto pb-2 mb-8 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'gradient-btn text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Digital MOPs */}
            <div className="animate-on-scroll bg-brand-dark rounded-2xl p-6 text-white">
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">Flagship</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Digital MOPs for mission-critical work</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Execute critical procedures on mobile with Pilot/Co-pilot controls, step evidence capture,
                and audit-ready reports.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  'Mobile execution built for operators',
                  'Dual accountability (Pilot / Co-pilot)',
                  'Evidence per step (photos/video/notes)',
                  'Report generation for audits and reviews',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-brand-blue flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('platform')}
                className="px-4 py-2 text-sm font-semibold text-white gradient-btn rounded-lg flex items-center gap-2"
              >
                Explore Digital MOPs <ArrowRight size={14} />
              </button>
            </div>

            {/* AI Intelligence */}
            <div className="animate-on-scroll bg-brand-light rounded-2xl p-6">
              <span className="text-xs font-semibold text-brand-purple uppercase tracking-wider">AI-Native Intelligence</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                AI that works because the data is captured correctly
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: 'Asset auto-enrichment', sub: 'Manufacturer/model + specs + manuals (reviewable, cited).' },
                  { title: 'Obsolescence watch', sub: '24/7 monitoring for critical spares with impact lists.' },
                  { title: 'Ask your documents', sub: 'Chat with children across org docs and asset files.' },
                  { title: 'Agents + bulletins', sub: 'Management summaries across sites, with sources.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm">
                    <p className="text-gray-900 text-xs font-semibold mb-1">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-snug">{item.sub}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('ai-native')}
                className="mt-4 px-4 py-2 text-sm font-semibold text-brand-blue border border-brand-blue rounded-lg hover:bg-brand-blue/10 transition-colors flex items-center gap-2"
              >
                Explore AI capabilities <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Bottom 3 features */}
          <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
            {[
              { title: 'Governance', desc: 'Multi-site access control, role-based permissions, and visibility into system changes.' },
              { title: 'Evidence + version control', desc: 'Asset/site documents are versioned automatically. Old versions archived, attachments stay traceable.' },
              { title: 'Audit-ready reporting', desc: 'Generate reports for audits and reviews from structured records across modules.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-light rounded-2xl p-5 border border-gray-100">
                <p className="text-gray-900 font-semibold text-sm mb-2">{item.title}</p>
                <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
