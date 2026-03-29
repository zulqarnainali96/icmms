import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PlatformProps {
  onNavigate: (page: string) => void;
}

export default function Platform({ onNavigate }: PlatformProps) {
  useScrollAnimation();

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="bg-brand-dark pt-14 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">Platform</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
            One portal for<br />mission-critical operations
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
            Assets are the spine. Workflows create clean records. Evidence is first class.
            This is what makes AI reliable.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Structural capture', 'Evidence + versioning', 'Telemetry — work'].map((b) => (
              <span key={b} className="px-3 py-1.5 bg-brand-blue/10 border border-brand-blue/25 text-brand-blue text-xs font-medium rounded-full">
                ● {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM OVERVIEW ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-3">The iCMMS platform</h2>
            <p className="animate-on-scroll text-gray-500 text-sm leading-relaxed max-w-2xl">
              iCMMS unifies{' '}
              <span className="text-brand-blue">work orders, procedures, rounds, incidents, spares, contracts,</span>
              {' '}and{' '}
              <span className="text-brand-blue">telemetry</span> into a single operations graph. The goal is consistency:
              faster execution, stronger audits, and scalable insight across sites.
            </p>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Assets as system of record */}
            <div className="animate-on-scroll bg-brand-light rounded-2xl p-7 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Assets as the system of record</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Every asset and sub-asset holds the complete operational story: profile, documents, media,
                work history, incidents, parts usage, contracts, and sensor trends—organised chronologically
                for troubleshooting and{' '}
                <span className="text-brand-blue">learning</span>.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Lifecycle fields: model, serial, install, commission, warranty, book cost, expected life',
                  'Asset and site document vault with version control',
                  'Chronological timeline across work, incidents, spares, and telemetry',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Execution workflows */}
            <div className="animate-on-scroll animate-on-scroll-delay-1 bg-brand-light rounded-2xl p-7 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Execution workflows that create clean data</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                iCMMS captures execution in a consistent structure—with evidence—so{' '}
                <span className="text-brand-blue">outcomes are comparable across shifts and sites</span>.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: 'Work orders', desc: 'Inspection, corrective, inspection, deficiency, recurring, reminders, approvals.' },
                  { title: 'Digital procedures', desc: 'MOP execution on mobile with step evidence and audit-ready reporting.' },
                  { title: 'Rounds', desc: 'Scheduled readings, non-conformance capture, trends and historical review.' },
                  { title: 'Incidents', desc: 'Intake tied to assets, tenant updates, connect to work with traceability.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm">
                    <p className="text-gray-900 text-xs font-semibold mb-1">{item.title}</p>
                    <p className="text-gray-400 text-xs leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Telemetry */}
            <div className="animate-on-scroll bg-gradient-to-br from-brand-dark to-brand-darker rounded-2xl p-7 text-white border border-white/5">
              <h3 className="text-lg font-bold mb-3">Telemetry, meters, and threshold automation</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Signals become accountable follow-up—not missed alerts.
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  'Multiple meters per asset/sub-asset: manual, BMS, or device-fed',
                  'Threshold breaches generate work orders and route to teams',
                  'Trends support drift detection and portfolio analytics',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('ai-native')}
                className="px-4 py-2 text-xs font-semibold text-brand-blue border border-brand-blue/40 rounded-lg hover:bg-brand-blue/10 transition-colors"
              >
                Learn more
              </button>
            </div>

            {/* Spares */}
            <div className="animate-on-scroll animate-on-scroll-delay-1 bg-brand-light rounded-2xl p-7 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Spares and contracts readiness</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Connect inventory movement and contract coverage so the work that consumes them—no renewals,
                vendor performance, and part risk are visible with context.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Spare parts movement and historical cost records',
                  'Vendors, contacts, contracts, renewals, and YoY price changes',
                  'Link spares and contracts to asset timelines',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Reporting */}
            <div className="animate-on-scroll bg-brand-light rounded-2xl p-7 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Reporting, audits, and evidence</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Audits are produced from day-to-day execution—timestamps, approvals, attachments, and reports.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Audit-ready reporting across modules',
                  'Versioned documents and evidence packs',
                  'Traceable history for reviews and continuous improvement',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaboration */}
            <div className="animate-on-scroll animate-on-scroll-delay-1 bg-brand-light rounded-2xl p-7 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Collaboration and notifications</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Coordinate in the flow of work with chat, notifications, and system change visibility.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Chat collaboration in work orders',
                  'Instant user notifications',
                  'System activity visibility for accountability',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full-width automation support */}
          <div className="animate-on-scroll bg-gradient-to-r from-brand-light via-white to-brand-light rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">One-on-one process automation support</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-2xl">
              Every data center has unique approval chains and{' '}
              <span className="text-brand-blue">handoffs</span>. We run working sessions to map your workflows
              and identify where agentic automation can{' '}
              <span className="text-brand-purple">reduce manual coordination</span>—without forcing change for
              the sake of change.
            </p>
            <button
              onClick={() => onNavigate('use-cases')}
              className="px-5 py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg flex items-center gap-2 w-fit"
            >
              Start a walkthrough <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
