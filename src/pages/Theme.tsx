import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ThemeProps {
  onNavigate: (page: string) => void;
}

const colors = [
  { name: 'Brand Dark', hex: '#0A1628', var: 'brand-dark', usage: 'Navbar, hero backgrounds, footer' },
  { name: 'Brand Darker', hex: '#0F1F3D', var: 'brand-darker', usage: 'Dark cards, input backgrounds' },
  { name: 'Brand Blue', hex: '#4F87FF', var: 'brand-blue', usage: 'Primary CTA, links, accents, active states' },
  { name: 'Brand Purple', hex: '#9F7AEA', var: 'brand-purple', usage: 'Secondary accent, gradient mid-stop' },
  { name: 'Brand Pink', hex: '#F687B3', var: 'brand-pink', usage: 'Tertiary accent, gradient end, highlights' },
  { name: 'Brand Light', hex: '#F0F4FF', var: 'brand-light', usage: 'Alternating section backgrounds, cards' },
  { name: 'Brand Cyan', hex: '#67E8F9', var: 'brand-cyan', usage: 'Data viz highlights, IoT indicators' },
  { name: 'White', hex: '#FFFFFF', var: 'white', usage: 'Primary surface, card backgrounds' },
  { name: 'Text Dark', hex: '#111827', var: 'gray-900', usage: 'Headings, primary text' },
  { name: 'Text Secondary', hex: '#4B5563', var: 'gray-600', usage: 'Body text, descriptions' },
  { name: 'Text Muted', hex: '#9CA3AF', var: 'gray-400', usage: 'Captions, placeholders, nav links' },
  { name: 'Border', hex: '#E5E7EB', var: 'gray-200', usage: 'Card borders, dividers' },
];

const typographySamples = [
  { label: 'Display / H1', cls: 'text-5xl font-extrabold text-gray-900', text: 'AI-native by design' },
  { label: 'H2 Section', cls: 'text-3xl font-bold text-gray-900', text: 'One portal for mission-critical ops' },
  { label: 'H3 Card title', cls: 'text-lg font-bold text-gray-900', text: 'Assets as the system of record' },
  { label: 'Body / Default', cls: 'text-sm text-gray-600 leading-relaxed', text: 'iCMMS captures structured, linked, evidence-backed operational data across work orders, digital MOPs, rounds, incidents, spares, and contracts.' },
  { label: 'Small / Caption', cls: 'text-xs text-gray-400', text: 'Serial: 5001 · Site: Toronto-01 · Last updated: 2h ago' },
  { label: 'Label / Overline', cls: 'text-xs font-semibold uppercase tracking-widest text-brand-blue', text: 'AI-Native Operations' },
  { label: 'Gradient text', cls: 'text-3xl font-bold gradient-text', text: 'Powered by structured data' },
];

const buttonSamples = [
  { label: 'Primary (gradient)', cls: 'px-5 py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg', text: 'Book a demo' },
  { label: 'Outlined (blue)', cls: 'px-5 py-2.5 text-sm font-semibold text-brand-blue border border-brand-blue rounded-lg hover:bg-brand-blue/10 transition-colors', text: 'Explore modules' },
  { label: 'Ghost (dark surface)', cls: 'px-5 py-2.5 text-sm font-semibold text-gray-300 border border-white/20 rounded-lg hover:bg-white/10 transition-colors bg-brand-dark', text: 'See AI in action' },
  { label: 'Icon trailing', cls: 'px-5 py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg flex items-center gap-2', text: 'Get started →' },
];

const badgeSamples = [
  { label: 'Blue pill', cls: 'px-3 py-1 bg-brand-blue/10 border border-brand-blue/25 text-brand-blue text-xs font-medium rounded-full', text: '● Structural capture' },
  { label: 'Green status', cls: 'px-2 py-0.5 bg-green-500/15 text-green-400 text-xs rounded-full border border-green-500/20', text: '● Healthy' },
  { label: 'Orange status', cls: 'px-2 py-0.5 bg-orange-500/15 text-orange-400 text-xs rounded-full border border-orange-500/20', text: 'Due 3d' },
  { label: 'Gray status', cls: 'px-2 py-0.5 bg-gray-500/15 text-gray-400 text-xs rounded-full border border-gray-500/20', text: '● Closed' },
  { label: 'Blue source tag', cls: 'px-2 py-0.5 bg-brand-blue/10 text-brand-blue text-xs rounded', text: 'Sources: Incident #418' },
  { label: 'Dark draft', cls: 'px-1.5 py-0.5 bg-brand-darker text-gray-400 text-xs rounded', text: 'Draft' },
];

export default function Theme({ onNavigate }: ThemeProps) {
  useScrollAnimation();

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="bg-brand-dark pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">Brand Kit</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            iCMMS Design System
          </h1>
          <p className="text-gray-400 text-base max-w-xl">
            The visual language of iCMMS — colors, typography, buttons, and components.
            Edit <span className="text-brand-blue font-mono text-sm">BRANDKIT.md</span> to update the source of truth.
          </p>
        </div>
      </section>

      {/* ── COLOR PALETTE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-2">Color palette</h2>
          <p className="animate-on-scroll text-gray-500 text-sm mb-8">
            All colors are defined as Tailwind brand tokens in <span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">tailwind.config.js</span>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {colors.map((c, i) => (
              <div
                key={c.hex}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 4) + 1} rounded-2xl overflow-hidden border border-gray-100 shadow-sm`}
              >
                <div
                  className="h-16 w-full"
                  style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #e5e7eb' : undefined }}
                />
                <div className="p-3 bg-white">
                  <p className="font-semibold text-gray-900 text-xs">{c.name}</p>
                  <p className="font-mono text-xs text-gray-400 mt-0.5">{c.hex}</p>
                  <p className="font-mono text-xs text-brand-blue mt-0.5">brand-{c.var.replace('brand-', '').replace('gray-', 'gray-').replace('white', 'white')}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-snug">{c.usage}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient showcase */}
          <div className="animate-on-scroll mt-6 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="h-12 w-full" style={{ background: 'linear-gradient(135deg, #4F87FF 0%, #9F7AEA 50%, #F687B3 100%)' }} />
            <div className="p-4 bg-white flex flex-wrap gap-4">
              <div>
                <p className="font-semibold text-gray-900 text-xs">Primary gradient</p>
                <p className="font-mono text-xs text-gray-400 mt-0.5">linear-gradient(135deg, #4F87FF → #9F7AEA → #F687B3)</p>
              </div>
              <p className="text-xs text-gray-400 mt-1">Used on: primary buttons, logo, active indicators</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TYPOGRAPHY ── */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-2">Typography</h2>
          <p className="animate-on-scroll text-gray-500 text-sm mb-8">
            Font family: <span className="font-semibold">Inter</span> — loaded via Google Fonts.
            All sizes use Tailwind's default scale.
          </p>
          <div className="space-y-4">
            {typographySamples.map((s, i) => (
              <div
                key={s.label}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 3) + 1} bg-white rounded-2xl p-5 border border-gray-100 shadow-sm`}
              >
                <p className="text-xs font-mono text-gray-400 mb-2">{s.label}</p>
                <p className={s.cls}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUTTONS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-8">Buttons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {buttonSamples.map((b, i) => (
              <div
                key={b.label}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-brand-light rounded-2xl p-5 border border-gray-100`}
              >
                <p className="text-xs font-mono text-gray-400 mb-3">{b.label}</p>
                <button className={b.cls}>{b.text}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BADGES & STATUS ── */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-8">Badges &amp; status indicators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {badgeSamples.map((b, i) => (
              <div
                key={b.label}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 3) + 1} bg-white rounded-2xl p-4 border border-gray-100 shadow-sm`}
              >
                <p className="text-xs font-mono text-gray-400 mb-3">{b.label}</p>
                <span className={b.cls}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARD COMPONENTS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-8">Card styles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Light card */}
            <div className="animate-on-scroll bg-brand-light rounded-2xl p-6 border border-gray-100 shadow-sm">
              <span className="text-xs font-mono text-gray-400">Light card — bg-brand-light</span>
              <h3 className="font-semibold text-gray-900 mt-3 mb-2">Feature card</h3>
              <p className="text-gray-500 text-sm">Used for feature sections on white backgrounds and alternating sections.</p>
            </div>
            {/* Dark card */}
            <div className="animate-on-scroll animate-on-scroll-delay-1 bg-brand-dark rounded-2xl p-6 border border-white/10 shadow-sm">
              <span className="text-xs font-mono text-gray-500">Dark card — bg-brand-dark</span>
              <h3 className="font-semibold text-white mt-3 mb-2">Dark feature card</h3>
              <p className="text-gray-400 text-sm">Used inside dark hero/CTA sections for sub-cards and mock UI.</p>
            </div>
            {/* Gradient card */}
            <div className="animate-on-scroll animate-on-scroll-delay-2 bg-gradient-to-br from-brand-dark to-brand-darker rounded-2xl p-6 border border-white/5 shadow-sm">
              <span className="text-xs font-mono text-gray-500">Gradient card — dark→darker</span>
              <h3 className="font-semibold text-white mt-3 mb-2">Gradient CTA card</h3>
              <p className="text-gray-400 text-sm">Used for flagship feature callouts and prominent CTAs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPACING & RADIUS ── */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll text-2xl font-bold text-gray-900 mb-8">Spacing &amp; border radius</h2>
          <div className="animate-on-scroll bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Border radius</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><div className="w-5 h-5 bg-brand-blue rounded" /><span>rounded — buttons</span></div>
                  <div className="flex items-center gap-2"><div className="w-5 h-5 bg-brand-blue rounded-lg" /><span>rounded-lg — buttons</span></div>
                  <div className="flex items-center gap-2"><div className="w-5 h-5 bg-brand-blue rounded-xl" /><span>rounded-xl — inner cards</span></div>
                  <div className="flex items-center gap-2"><div className="w-5 h-5 bg-brand-blue rounded-2xl" /><span>rounded-2xl — cards</span></div>
                  <div className="flex items-center gap-2"><div className="w-5 h-5 bg-brand-blue rounded-full" /><span>rounded-full — pills</span></div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Section padding</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <p>Section vertical: <code className="bg-gray-100 px-1 rounded">py-16</code></p>
                  <p>Section horizontal: <code className="bg-gray-100 px-1 rounded">px-4 sm:px-6 lg:px-8</code></p>
                  <p>Max width: <code className="bg-gray-100 px-1 rounded">max-w-7xl</code></p>
                  <p>Card padding: <code className="bg-gray-100 px-1 rounded">p-6</code> or <code className="bg-gray-100 px-1 rounded">p-7</code></p>
                  <p>Hero vertical: <code className="bg-gray-100 px-1 rounded">pt-14 pb-16</code></p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Grid gaps</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <p>Card grid: <code className="bg-gray-100 px-1 rounded">gap-5</code> or <code className="bg-gray-100 px-1 rounded">gap-6</code></p>
                  <p>Nav items: <code className="bg-gray-100 px-1 rounded">space-x-7</code></p>
                  <p>Button row: <code className="bg-gray-100 px-1 rounded">gap-3</code></p>
                  <p>List items: <code className="bg-gray-100 px-1 rounded">space-y-2.5</code></p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Shadows</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <p>Cards: <code className="bg-gray-100 px-1 rounded">shadow-sm</code></p>
                  <p>Hover: <code className="bg-gray-100 px-1 rounded">hover:shadow-md</code></p>
                  <p>Hero mock: <code className="bg-gray-100 px-1 rounded">shadow-2xl</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION NOTE ── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 justify-center">
          {[
            { label: 'Home', page: 'home' },
            { label: 'Platform', page: 'platform' },
            { label: 'AI-Native', page: 'ai-native' },
            { label: 'Use Cases', page: 'use-cases' },
            { label: 'Security', page: 'security' },
            { label: 'Sustainability', page: 'sustainability' },
          ].map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className="px-4 py-2 text-sm font-medium text-brand-blue border border-brand-blue/30 rounded-lg hover:bg-brand-blue/8 transition-colors"
            >
              {link.label} →
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
