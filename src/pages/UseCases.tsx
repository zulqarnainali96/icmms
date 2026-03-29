import { ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface UseCasesProps {
  onNavigate: (page: string) => void;
}

export default function UseCases({ onNavigate }: UseCasesProps) {
  useScrollAnimation();

  const roles = [
    {
      title: 'Executives',
      desc: 'Portfolio clarity into readiness, recurring patterns, and renewal risks—grounded in evidence.',
      color: 'border-brand-blue/30',
      items: [
        'Visibility into risk and recurring failure patterns',
        'Standardisation without losing site flexibility',
        'Audit-ready reporting without manual evidence gathering',
        'Evidence-backed bulletins that highlight blind spots',
      ],
    },
    {
      title: 'Operations leaders',
      desc: 'Standardise execution across sites and shifts while preserving local reality.',
      color: 'border-brand-purple/30',
      items: [
        'Comparable execution across sites, shifts, and vendors',
        'Accountable backlog: due dates, approvals, and follow-ups',
        'Telemetry-to-work automation for early detection',
        'Roll-up visibility into cost, labour, and risk exposure',
      ],
    },
    {
      title: 'Operators and supervisors',
      desc: 'Mobile execution, collaboration, and evidence capture in the flow of work.',
      color: 'border-brand-blue/30',
      items: [
        'Mobile workflows for work orders, procedures, and rounds',
        'Chat and notifications to reduce handoff friction',
        'Evidence capture to eliminate back-and-forth',
        'Assistive intake to speed up issue reporting',
      ],
    },
    {
      title: 'Reliability and lifecycle',
      desc: 'Asset timelines tie signals, incidents, work, and parts—supporting trend analysis and planning.',
      color: 'border-brand-purple/30',
      items: [
        'Asset timelines connecting signals, incidents, work, and parts',
        'Trend analysis to detect drift and recurring conditions',
        'Prioritisation across sites and asset classes',
        'Evidence to support repair/replace planning',
      ],
    },
    {
      title: 'Procurement and vendors',
      desc: 'Commercial readiness tied to execution—so renewals and parts risk have context.',
      color: 'border-brand-pink/30',
      items: [
        'Spares movement and cost history tied to execution',
        'Obsolescence awareness to reduce downtime exposure',
        'Contracts linked to assets with renewals and YoY tracking',
        'Faster vendor coordination with shared evidence',
      ],
    },
    {
      title: 'Sustainability programs',
      desc: 'Earlier detection and consistent execution reduce waste and extend asset life.',
      color: 'border-brand-pink/30',
      items: [
        'Reduce waste from repeat incidents and rework',
        'Extend asset life through early detection and consistency',
        'Traceable evidence for sustainability initiatives',
        'Thresholds keep systems near intended performance',
      ],
    },
  ];

  const outcomes = [
    {
      title: 'Faster response',
      desc: 'Signals become accountable work; teams coordinate in the flow of work.',
    },
    {
      title: 'Fewer repeat failures',
      desc: 'Better evidence, better follow-through, and visibility across sites.',
    },
    {
      title: 'Audit readiness',
      desc: 'Reports are produced from execution evidence—no manual compilation required.',
    },
  ];

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="bg-brand-dark pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">Use Cases</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
            Operational visibility at every level
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            iCMMS helps mission-critical teams execute consistently, retain institutional knowledge, and
            surface blind spots across sites—by unifying workflows, incidents, and evidence into one
            operations graph.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 text-sm font-semibold text-white gradient-btn rounded-lg"
            >
              Book a demo
            </button>
            <button
              onClick={() => onNavigate('ai-native')}
              className="px-4 py-2 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              AI-native approach
            </button>
            {['No silos', 'Traceable evidence', 'Portfolio insight'].map((b) => (
              <span key={b} className="px-3 py-2 bg-white/8 border border-white/15 text-gray-300 text-sm rounded-lg flex items-center gap-1.5">
                <CheckCircle size={13} className="text-brand-blue" /> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TEAMS USE iCMMS FOR ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-4">What teams use iCMMS for</h2>
          <p className="animate-on-scroll text-gray-500 text-sm leading-relaxed mb-10 max-w-2xl">
            Most platforms track tasks. iCMMS is designed to{' '}
            <span className="text-brand-blue font-medium">capture operational knowledge</span> as structured
            records—so AI can assist reliably, managers can see blind spots, and sites can scale without
            losing consistency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Unified workflows', desc: 'Work orders, procedures, rounds, incidents, spares, contracts—one portal.' },
              { title: 'Telemetry-to-work', desc: 'Thresholds generate work with evidence and accountability.' },
              { title: 'AI-native insight', desc: 'Cited answers and summaries from trusted operational data.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-brand-light rounded-2xl p-6 border border-gray-100`}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BY ROLE ── */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-10">By role</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <div
                key={role.title}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 3) + 1} bg-white rounded-2xl p-7 border ${role.color} shadow-sm`}
              >
                <h3 className="font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{role.desc}</p>
                <ul className="space-y-2">
                  {role.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={13} className="text-brand-blue flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON OUTCOMES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-8">Common outcomes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {outcomes.map((item, i) => (
              <div
                key={item.title}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-brand-light rounded-2xl p-6 border border-gray-100`}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">See iCMMS for your environment</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl">
              We'll tailor a walkthrough to your sites and identify where agentic workflows can automate
              your unique processes.
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="px-5 py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg flex items-center gap-2 w-fit"
            >
              Book a walkthrough <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
